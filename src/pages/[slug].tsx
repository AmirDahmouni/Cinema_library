import {
  GridItem,
  Heading,
  SimpleGrid,
  Box
} from '@chakra-ui/react';
import axios from 'axios';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameScreenshots from '../components/GameScreenshots';
import GameTrailer from '../components/GameTrailer';
import IGame from '@/entities/Game';
import { log } from 'console';

const GameDetailPage = ({ game, error }: any) => {

  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          borderWidth="1px"
          borderRadius="lg"
          p="8"
          maxWidth="500px"
          width="100%"
          boxShadow="lg"
        >
          <Heading textAlign="center" mb="6" color={"red.600"}>
            Oops !
          </Heading>

          <Heading textAlign={"center"} >
            This game does not exist.
          </Heading>

        </Box>
      </Box>)


  return (
    game &&
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={50}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};


export async function getStaticPaths() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_URL_API}/games/`,
    {
      params: {
        key: process.env.NEXT_PUBLIC_KEY_API
      }
    }
  )
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  let paths = data.results.games.map((game: IGame) => ({ params: { name: game.slug } }))

  console.log('====================================');
  console.log(paths);
  console.log('====================================');
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }: any) {

  const { data } = await axios.get<IGame>(
    `${process.env.NEXT_PUBLIC_URL_API}/games/${params.slug}`,
    {
      params: {
        key: process.env.NEXT_KEY_API
      }
    }
  )
  return {
    props: {
      game: data
    }
  }
}





import { Image, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fetchScreenGame } from '../store/games/actions';

const GameScreenshots = ({ screens, gameId }: any) => {
  //const { data, isLoading, error } = useScreenshots(gameId);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchScreenGame({ game: gameId }))
  }, [])


  return (
    screens &&
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screens?.results.map((file: any) =>
        <Image key={file.id} src={file.image} />)}
    </SimpleGrid>
  )
}

const mapStateToProps = ({ gamesState }: any) => {
  return {
    screens: gamesState.screens
  };
};

export default connect(mapStateToProps)(GameScreenshots);

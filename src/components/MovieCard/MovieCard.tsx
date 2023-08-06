import IMovie from '../../entities/Movie'
import { Card, Image, CardBody, Heading, HStack, Box, Icon, Badge } from '@chakra-ui/react'
import ReactCountryFlag from "react-country-flag"
import { MdNoAdultContent } from 'react-icons/md'
import getCroppedImageUrl from '../../services/image-url'
import Score from './Score'
import ExpandableText from './ExpandableText'
import RatingReviews from './RatingReviews'
import Views from './Views'
import GenresMovie from './GenresMovie'

interface Props {
  movie: IMovie
  key: number
}

const MovieCard = ({ movie, key }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(movie.backdrop_path || movie.poster_path).toString()}
        width='auto'
        height={220}
        alt={`cover ${movie.original_title}`}
      />
      <CardBody>
        <HStack justifyContent="space-between">
          <Score score={movie.vote_average}></Score>
          {movie.adult && <Icon as={MdNoAdultContent} fontSize={30} />}
          <ReactCountryFlag countryCode={movie.original_language} svg style={{ fontSize: '1.5em' }} />
        </HStack>
        <HStack justifyContent="space-between" marginBottom={2} marginTop={4}>
          <Badge margin={1} padding={1} borderRadius={5} textAlign="right">
            {movie.release_date || movie.first_air_date}
          </Badge>
          <Views views={movie.popularity} />
          <RatingReviews score={movie.vote_count} />
        </HStack>
        <GenresMovie genresMovies={movie.genre_ids} />
        <Heading fontSize="1xl" >
          {movie.title || movie.name}
        </Heading>
        <Box marginTop={1}>
          <ExpandableText>
            {movie.overview}
          </ExpandableText>
        </Box>
      </CardBody>
    </Card>
  )
}

export default MovieCard
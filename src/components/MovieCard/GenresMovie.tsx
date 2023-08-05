import IGenre from "@/entities/Genre"
import { Badge } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import { connect } from "react-redux"

interface Props {
  genres: IGenre[],
  genresMovies: number[]
}

const GenresMovie = ({ genresMovies, genres }: Props) => {

  return (
    <HStack marginBottom={2}>
      {
        genresMovies.map((genreId: any) =>
          <Badge key={genreId} fontSize="15px" borderRadius="5px" colorScheme="purple">
            {genres.find(genre => genre.id == genreId)?.name}</Badge>
        )
      }
    </HStack >
  )
}

const mapStateToProps = ({ genresState }: any) => {
  return {
    genres: genresState.genres,
  };
};

export default connect(mapStateToProps)(GenresMovie);


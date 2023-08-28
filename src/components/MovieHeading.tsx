import { Heading } from "@chakra-ui/react";
import { connect } from "react-redux";

const MovieHeading = ({ genre, language, movies }: any) => {

  if (movies.length === 0)
    return (
      <Heading as='h1' color="red.300" margin={5}  >
        Oops : No Movies found !
      </Heading>
    )

  if (language || genre)
    return (
      <Heading as='h1' marginY={5} >
        {`${language || ''} ${genre || ''} Movies`}
      </Heading>
    )
}

const mapStateToProps = ({ genresState, languagesState, moviesState }: any) => {
  return {
    genre: genresState.selectedGenre,
    language: languagesState.selectedLanguage,
    movies: moviesState.movies
  };
};

export default connect(mapStateToProps)(MovieHeading);


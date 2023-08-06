import { Heading } from "@chakra-ui/react";
import { connect } from "react-redux";

const MovieHeading = ({ genre, language }: any) => {

  if (language || genre)
    return (
      <Heading as='h1' marginY={5} >
        {`${language || ''}, ${genre || ''} Movies`}
      </Heading>
    )
}

const mapStateToProps = ({ genresState, languagesState }: any) => {
  return {
    genre: genresState.selectedGenre,
    language: languagesState.selectedLanguage,
  };
};

export default connect(mapStateToProps)(MovieHeading);


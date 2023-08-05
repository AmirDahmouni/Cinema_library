import { Heading } from "@chakra-ui/react";
import { connect } from "react-redux";

const MovieHeading = ({ genre, filters }: any) => {

  const sortBy = filters.find((filter: any) => filter.key == "sortBy")
  if (sortBy || genre)
    return (
      <Heading as='h1' marginY={5} >
        {`${sortBy || ''} ${genre || ''} Movies`}
      </Heading>
    )
}

const mapStateToProps = ({ genresState, moviesState }: any) => {
  return {
    genre: genresState.selectedGenre,
    filters: moviesState.filters
  };
};

export default connect(mapStateToProps)(MovieHeading);


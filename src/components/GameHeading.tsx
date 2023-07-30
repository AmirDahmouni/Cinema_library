import { Heading } from "@chakra-ui/react";
import { connect } from "react-redux";

const GameHeading = ({ genre, platform }: any) => {

  if (platform || genre)
    return (
      <Heading as='h1' marginY={5} >
        {`${platform || ''} ${genre || ''} games`}
      </Heading>
    )
}

const mapStateToProps = ({ genresState, platformsState }: any) => {
  return {
    genre: genresState.selectedGenre,
    platform: platformsState.selectedPlatform
  };
};

export default connect(mapStateToProps)(GameHeading);


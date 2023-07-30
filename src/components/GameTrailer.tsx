import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTrailerRequest } from '../store/trailers/actions';
import { connect } from 'react-redux';

const GameTrailer = ({ gameId, game }: any) => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTrailerRequest({ gameId: gameId }))
  }, [gameId])

  return null;
};

const mapStateToProps = ({ trailerState }: any) => {
  return {
    game: trailerState.trailer
  };
};

export default connect(mapStateToProps)(GameTrailer);


import { useEffect } from "react";
import { Text, SimpleGrid } from "@chakra-ui/react"
import { useDispatch, connect } from "react-redux";
import MovieCard from "./MovieCard/MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import MovieCardContainer from "./MovieCardContainer";
import IMovie from "../entities/Movie";
import { fetchMoviesRequest } from "../store/movies/actions";

const MovieGrid = ({ filters, error, isLoading, movies }: any) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesRequest(filters))
  }, [])

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} margin='10px' >
        {isLoading && skeletons.map(skeleton => (
          <MovieCardContainer key={skeleton}>
            <MovieCardSkeleton />
          </MovieCardContainer>
        ))}

        {movies && movies.map((movie: IMovie) =>
          <MovieCardContainer key={movie.id}>
            <MovieCard key={movie.id} movie={movie} />
          </MovieCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

const mapStateToProps = ({ moviesState }: any) => {
  return {
    filters: moviesState.filters,
    movies: moviesState.movies,
    isLoading: moviesState.isLoading,
    error: moviesState.error
  };
};

export default connect(mapStateToProps)(MovieGrid);

import { useEffect } from "react";
import { Text, SimpleGrid } from "@chakra-ui/react"
import { useDispatch, connect } from "react-redux";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import IGame from "../entities/Game";
import { fetchGamesRequest } from "../store/games/actions";

const GameGrid = ({ filters, error, isLoading, games }: any) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesRequest(filters))
  }, [])

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} margin='10px' >
        {isLoading && skeletons.map(skeleton => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}

        {games && games.map((game: IGame) =>
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        )}
      </SimpleGrid>
    </>
  )
}

const mapStateToProps = ({ gamesState }: any) => {
  return {
    filters: gamesState.filters,
    games: gamesState.games.results,
    isLoading: gamesState.isLoading,
    error: gamesState.error
  };
};

export default connect(mapStateToProps)(GameGrid);

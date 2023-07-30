import { useEffect } from 'react';
import IGenre from '../entities/Genre';
import getCroppedImageUrl from '../services/image-url'
import { ListItem, Image, HStack, List, Heading, Spinner, Button } from "@chakra-ui/react"
import { useDispatch, connect } from "react-redux";
import { fetchGenresRequest, selectGenreFilter } from '../store/genres/actions';
import { updateGamesFilters } from "../store/games/actions";
import { fetchGamesRequest } from '../store/games/actions';

const GenreList = ({ filters, genresList, selectedGenre }: any) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGenresRequest())
  }, [])

  const onSelectedGenre = (genre: IGenre) => {
    dispatch(selectGenreFilter(genre.name))
    dispatch(updateGamesFilters("genreId", genre.id))
    dispatch(fetchGamesRequest(filters))
  }



  return (
    genresList.length != 0 ?
      <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
          {genresList.genres.map((genre: IGenre) =>
            <ListItem key={genre.name} paddingY="5px">
              <HStack>
                <Image
                  objectFit="cover"
                  boxSize="32px"
                  borderRadius={8}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button whiteSpace='normal' textAlign='left' fontWeight={genre.name === selectedGenre ? 'bold' : 'normal'}
                  onClick={() => onSelectedGenre(genre)} fontSize="lg">
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          )
          }
        </List >
      </> : null
  )
}

const mapStateToProps = ({ genresState, gamesState }: any) => {
  return {
    filters: gamesState.filters,
    genresList: genresState.genres,
    selectedGenre: genresState.selectedGenre
  };
};

export default connect(mapStateToProps)(GenreList);


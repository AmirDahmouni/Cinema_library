import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGenresRequest, selectGenreFilter } from "@/store/genres/actions";

import { fetchMoviesRequest, updateMoviesFilters } from "../store/movies/actions";
import { connect } from 'react-redux';
import IGenre from "@/entities/Genre";


const GenreSelector = ({ genres, filters }: any) => {

  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState<string>()

  useEffect(() => {
    dispatch(fetchGenresRequest())
  }, [])

  const onSelectedPlatform = (genre: IGenre) => {
    setSelectedGenre(genre.name)
    dispatch(selectGenreFilter(genre.name))
    dispatch(updateMoviesFilters("genreId", genre.id))
    dispatch(fetchMoviesRequest(filters))

  }

  const currentGenre = genres?.find((genre: IGenre) => genre.name === selectedGenre)

  return (
    genres &&
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{currentGenre?.name || "All Genres"}</MenuButton>
      <MenuList>
        {
          genres?.map((platform: IGenre) =>
            <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
          )}
      </MenuList>
    </Menu>
  )
}
const mapStateToProps = ({ genresState, moviesState }: any) => {
  return {
    genres: genresState.genres,
    filters: moviesState.filters
  };
};

export default connect(mapStateToProps)(GenreSelector);


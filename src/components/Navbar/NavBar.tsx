import { Button, HStack, Image, Text } from "@chakra-ui/react"
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { fetchMoviesRequest, updateMoviesFilters } from "../../store/movies/actions";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { useCallback } from "react";
import GenreSelector from "./genreSelector";
import SortSelector from "./SortSelector";
import LanguagesSelector from "./LanguagesSelector";
import { selectGenreFilter } from "../../store/genres/actions"
import { selectLanguageFilter } from "../../store/languages/actions"

const NavBar = ({ filters }: any) => {

  const dispatch = useDispatch()

  const search = (text: string) => {
    dispatch(updateMoviesFilters("searchText", text))
    dispatch(fetchMoviesRequest(filters))
  }

  const reset = useCallback(() => {
    dispatch(updateMoviesFilters("genreId", null))
    dispatch(updateMoviesFilters("searchText", null))
    dispatch(updateMoviesFilters("language", null))
    dispatch(updateMoviesFilters("sortOrder", null))
    dispatch(updateMoviesFilters("pageParam", null))
    dispatch(selectGenreFilter(null))
    dispatch(selectLanguageFilter(null))
    dispatch(fetchMoviesRequest(filters))
  }, [])

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo.src} width={50} height={50} alt="logo" />
      <SearchInput onSearch={(filter) => search(filter)} />
      <GenreSelector />
      <SortSelector />
      <LanguagesSelector />
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="light"
        colorScheme="blue"
        padding={4}
        onClick={() => reset()}
      >
        <Text fontSize={18} fontWeight="medium">
          Reset
        </Text>
      </Button>
      <ColorModeSwitch />
    </HStack>
  )
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.moviesState.filters
  };
};

export default connect(mapStateToProps)(NavBar);
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchLanguagesRequest } from "../../store/languages/actions";
import { selectLanguageFilter } from "../../store/languages/actions";
import { fetchMoviesRequest, updateMoviesFilters } from "../../store/movies/actions";
import { ILanguage } from "../../entities/Language";
import { connect } from 'react-redux';


const LangaugesSelector = ({ languages, filters }: any) => {

  const dispatch = useDispatch();
  const [selectedLanguages, setSelectedLanguage] = useState<string>()

  useEffect(() => {
    dispatch(fetchLanguagesRequest())
  }, [])

  const onSelectedPlatform = (language: ILanguage) => {
    setSelectedLanguage(language.english_name)
    dispatch(selectLanguageFilter(language.english_name))
    dispatch(updateMoviesFilters("language", language.iso_639_1))
    dispatch(fetchMoviesRequest(filters))
  }

  const currentPlatform = languages?.find((platform: ILanguage) => platform.english_name === selectedLanguages)

  return (
    languages &&
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{currentPlatform?.english_name || "Languages"}</MenuButton>
      <MenuList>
        {
          languages?.map((language: ILanguage) =>
            <MenuItem onClick={() => onSelectedPlatform(language)} key={language.english_name}>{language.english_name}</MenuItem>
          )}
      </MenuList>
    </Menu>
  )
}
const mapStateToProps = ({ languagesState, moviesState }: any) => {
  return {
    languages: languagesState.languages,
    filters: moviesState.filters
  };
};

export default connect(mapStateToProps)(LangaugesSelector);


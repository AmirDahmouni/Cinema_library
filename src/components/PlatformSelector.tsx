import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPlatformsRequest } from "../store/platforms/actions";
import { selectPlatformFilter } from "../store/platforms/actions";
import { fetchGamesRequest, updateGamesFilters } from "../store/games/actions";
import { IPlatform } from "../entities/Platform";
import { connect } from 'react-redux';


const PlatformSelector = ({ platforms, filters }: any) => {

  const dispatch = useDispatch();
  const [selectedPlatform, setSelectedPlatform] = useState<string>()

  useEffect(() => {
    dispatch(fetchPlatformsRequest())
  }, [])

  const onSelectedPlatform = (platform: IPlatform) => {
    setSelectedPlatform(platform.name)
    dispatch(selectPlatformFilter(platform.name))
    dispatch(updateGamesFilters("platformId", platform.id))
    dispatch(fetchGamesRequest(filters))

  }

  const currentPlatform = platforms.find((platform: IPlatform) => platform.name === selectedPlatform)

  return (
    platforms &&
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>{currentPlatform?.name || "platforms"}</MenuButton>
      <MenuList>
        {
          platforms?.map((platform: IPlatform) =>
            <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
          )}
      </MenuList>
    </Menu>
  )
}
const mapStateToProps = ({ platformsState, gamesState }: any) => {
  return {
    platforms: platformsState.platforms,
    filters: gamesState.filters
  };
};

export default connect(mapStateToProps)(PlatformSelector);


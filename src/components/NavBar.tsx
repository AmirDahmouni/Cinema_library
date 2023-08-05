import { Button, HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { fetchGamesRequest, updateGamesFilters } from "../store/games/actions";
import { useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { useRouter } from "next/router";
import { useCallback } from "react";

const NavBar = ({ filters }: any) => {

  const dispatch = useDispatch()
  const router = useRouter()

  const search = (text: string) => {
    dispatch(updateGamesFilters("searchText", text))
    dispatch(fetchGamesRequest(filters))
  }

  const disconnect = useCallback(() => {
    localStorage.removeItem("connexion")
    router.push("/login")
  }, [])

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo.src} width={50} height={50} />
      <SearchInput onSearch={(filter) => search(filter)} />
      <ColorModeSwitch />
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="light"
        colorScheme="blue"
        padding={4}
        onClick={() => disconnect()}
      >
        Disconnect
      </Button>
    </HStack>
  )
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.gamesState.filters
  };
};

export default connect(mapStateToProps)(NavBar);
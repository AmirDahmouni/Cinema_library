import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs"
import { useRef } from 'react'

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {

  const ref = useRef<HTMLInputElement>(null)
  return (
    <form style={{ width: "50%" }} onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup>
        <InputLeftElement >
          <BsSearch />
        </InputLeftElement>
        <Input borderRadius={20} placeholder='Search movies...' variant="filled" ref={ref} />
      </InputGroup>
    </form >
  )
}

export default SearchInput
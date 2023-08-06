import { Badge } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { AiOutlineEye } from 'react-icons/ai'
interface Props {
  views: number
}

const views = ({ views }: Props) => {

  return (
    <HStack alignContent="revert-layer">
      <Badge fontSize="14px" borderRadius="4px" colorScheme="gray">{views}</Badge>
      <Icon as={AiOutlineEye} color='gray.500' fontSize={20} />
    </HStack>

  )
}

export default views
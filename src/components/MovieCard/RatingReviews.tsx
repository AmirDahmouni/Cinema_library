import { Badge } from "@chakra-ui/react"
import { HStack } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { MdReviews } from 'react-icons/md'
interface Props {
  score: number
}

const RatingReviews = ({ score }: Props) => {
  let color = score < 3 ? 'red' : score < 6 ? 'yellow' : 'green'
  return (
    <HStack>
      <Badge fontSize="14px" borderRadius="4px" colorScheme={color}>{score}</Badge>
      <Icon as={MdReviews} color='gray.500' fontSize={25} />
    </HStack>

  )
}

export default RatingReviews
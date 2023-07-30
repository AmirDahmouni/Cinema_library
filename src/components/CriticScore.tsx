import { Badge } from "@chakra-ui/react"

interface Props {
  score: number
}

const CriticScore = ({ score }: Props) => {
  let color = score > 85 ? 'green' : score > 95 ? 'yellow' : 'red'
  return (
    <Badge fontSize="14px" borderRadius="4px" colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore
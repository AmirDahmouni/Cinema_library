import IGame from '../entities/Game'
import { Card, Image, CardBody, Heading, HStack } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'
import Link from 'next/link'
interface Props {
  game: IGame
  key: number
}

const GameCard = ({ game, key }: Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
      <Image src={getCroppedImageUrl(game.background_image)} alt="game" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          <Link href={game.slug}>{game.name}</Link>
          <Emoji rating={game.rating_top}></Emoji></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
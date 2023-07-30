import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../Hooks/useGames'
import { Icon, HStack } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {

  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
    <HStack marginY={3}>
      {
        platforms.map((platform: Platform) =>
          <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />
        )
      }
    </HStack>
  )
}

export default PlatformIconList
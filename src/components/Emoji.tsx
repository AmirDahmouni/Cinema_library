import { ImageProps } from "@chakra-ui/react";
import love from "../assets/love.webp";
import like from "../assets/like.webp"
import { Image } from '@chakra-ui/react'

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: love.src, alt: 'meh' },
    4: { src: like.src, alt: 'meh' },
    5: { src: love.src, alt: 'meh' }
  };

  return <Image {...emojiMap[rating]} boxSize={25} />
}

export default Emoji
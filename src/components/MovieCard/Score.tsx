import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { AiTwotoneStar } from 'react-icons/ai'

interface Props {
  score: number;
}

const Emoji = ({ score }: Props) => {

  const buttons: any = [];

  const RatingIcon = ({ fill }: any) => {
    return (
      <Icon
        as={AiTwotoneStar}
        name="StarIcon"
        color={"gold"}
        stroke={"grey"}
        fillOpacity={"100%"}
      />
    );
  };

  const RatingButton = ({ idx, fill }: any) => {
    return (
      <Box
        as="button"
        aria-label={`Rate ${idx}`}
        height={`${14}px`}
        width={`${7}px`}
        mx={1}
        fontSize={22}
        _focus={{ outline: 0 }}
      >
        <RatingIcon fill={fill} />
      </Box>
    );
  };
  for (let i = 1; i <= score; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= score} />);
  }

  return (
    <HStack>
      {buttons}
    </HStack>
  )

}

export default Emoji
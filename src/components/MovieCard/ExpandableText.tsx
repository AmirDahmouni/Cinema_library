import { Button, Text, Box } from '@chakra-ui/react';
import React, { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 50;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Box>
      <Text>
        {summary}
      </Text>
      <Button
        size="xs"
        marginTop={2}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Read More'}
      </Button>
    </Box>

  );
};

export default ExpandableText;

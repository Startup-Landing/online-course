import { Heading, Box, Text } from 'theme-ui';
import React from 'react';

const BlockTitle = (props) => {
  return (
    <Box variant="blockTitle" sx={props.sx}>
      <Text as="p">{props.tagline}</Text>
      <Heading as="h3">{props.heading}</Heading>
    </Box>
  );
};

export default BlockTitle;

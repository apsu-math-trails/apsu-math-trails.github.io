import React from 'react'

import { Text } from '@chakra-ui/react';

const ListHeader = ({ weight, size, children }) => {
  return (
    <Text fontWeight={weight} fontSize={size} mb={2}>
      {children}
    </Text>
  );
};

export default ListHeader;
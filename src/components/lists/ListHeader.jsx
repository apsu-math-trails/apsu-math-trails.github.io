import React from 'react'

import { Text } from '@chakra-ui/react';

const ListHeader = ({ weight, children }) => {
  return (
    <Text fontWeight={weight} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default ListHeader;
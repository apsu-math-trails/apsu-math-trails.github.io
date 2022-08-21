import React from 'react';

import { Button, 
         VisuallyHidden,
         Text,
         useColorModeValue,
       } from '@chakra-ui/react';


const SocialButtonGray = ({ children, label, href, rounded, boxShadow}) => {
  return (
    <Button
      bg={useColorModeValue('gray.200', 'white')}
      color={useColorModeValue('black', 'black')}
      rounded={rounded}
      w={10}
      h={10}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      target='_blank'
      fontSize={22}
      boxShadow={boxShadow}
      _hover={{
        bg: useColorModeValue('#C41E3A', 'whiteAlpha.200'),
        color: useColorModeValue('white', 'white'),
        boxShadow: '2xl',
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Text>{children}</Text>
    </Button>
  );
};

export default SocialButtonGray;
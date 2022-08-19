import React from 'react';

import { Button, 
         VisuallyHidden,
         Text,
         useColorModeValue,
       } from '@chakra-ui/react';


const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={useColorModeValue('white', 'black')}
      color={useColorModeValue('black', 'white')}
      rounded={'full'}
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
      _hover={{
        bg: useColorModeValue('#C41E3A', 'whiteAlpha.200'),
        color: useColorModeValue('white', 'white'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Text>{children}</Text>
    </Button>
  );
};

export default SocialButton;
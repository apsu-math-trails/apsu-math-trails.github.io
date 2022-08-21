import React from 'react';

import SocialButtonGray from '../buttons/SocialButtonGray';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { Box,
         Badge,
         Heading,
         Text,
         Divider,
         Flex,
       } from '@chakra-ui/react';

const BioCard = ({ role, title, body, socialLinks}) => {
  return (
    <Box border='1px' 
         borderColor='gray.100' 
         boxShadow='2xl' 
         borderRadius='xl' 
         bgColor='white'
         p={4}>
     <Flex direction='column' justify='start'>
        <Box w='20%' pt={2} pb={4}>
          <Badge variant='subtle' 
                 colorScheme='red'
                 rounded='md'
                 boxShadow='inner' 
                 py={2} px={3}>Developer</Badge>
        </Box>
        <Heading pb={2}>Title</Heading>
        <Divider />
        <Text fontSize='xl' py={8} textAlign='start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eius sit, facilis recusandae reprehenderit non id repellendus. Et, quaerat.
        </Text>
        <Flex gap={2} align='left' pt={3}  borderTop='1px' borderColor='gray.100' maxW='20%' w='20%'>
          <SocialButtonGray label={'Github'} href={'#'} rounded='lg' boxShadow='md'>
            <FaGithubSquare />
          </SocialButtonGray>
          <SocialButtonGray label={'Linkedin'} href={'#'} rounded='lg' boxShadow='md'>
            <FaLinkedin />
          </SocialButtonGray>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BioCard;
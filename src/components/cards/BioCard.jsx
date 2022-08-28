import React from 'react';

import SocialButtonGray from '../buttons/SocialButtonGray';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import { Box,
         Badge,
         Heading,
         Text,
         Divider,
         Flex,
         Avatar,
         VStack
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
                 boxShadow='smz' 
                 py={2} px={3}
                 >Developer</Badge>
        </Box>
        <Flex py={4}>
          <Avatar
            size='2xl'
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Avatar Alt'}
            pos={'relative'}
            loading='eager'
          />
          <Flex direction='column' gap={2} pl={8}>
            <Heading>
              Dr. Yantz
            </Heading>
            <Flex gap={2} align='center'>
              <SocialButtonGray label={'Github'} href={'#'} rounded='md' boxShadow='inner'>
                <FaGithubSquare />
              </SocialButtonGray>
              <SocialButtonGray label={'Linkedin'} href={'#'} rounded='md' boxShadow='inner'>
                <FaLinkedin />
              </SocialButtonGray>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Text fontSize='xl' py={8} textAlign='start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos eius sit, facilis recusandae reprehenderit non id repellendus. Et, quaerat.
        </Text>
      </Flex>
    </Box>
  );
};

export default BioCard;
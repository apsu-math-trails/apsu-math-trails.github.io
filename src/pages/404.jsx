import React from 'react';

import { Link } from 'gatsby';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

import { Box,
         Container,
         Flex,
         Heading,
         Text,
         Button,
       } from '@chakra-ui/react';

export const Head = () => (
  <SEO title={`Oopsies... Let's go back`}/>
);

const Error = () => {
  return (
    <PageLayout>
      <Box py='64'>
        <Container maxW='7xl'>
          <Box  border='1px' 
                borderColor='gray.100' 
                boxShadow='2xl' 
                borderRadius='xl' 
                bgColor='white'
                p={8}>
            <Flex direction='column' gap={4}>
              <Box borderBottom='1px' borderBottomColor='gray.100' width='80%' py={8}>
                <Heading fontSize='4xl' color='#C41A3E'>Oopsies... Let's Go Home.</Heading>
              </Box>
              <Text py={4} fontSize='2xl' color='gray.600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore, nulla voluptatum rem corrupti cupiditate expedita facilis nobis vel earum excepturi quaerat ab. Dolores recusandae, nihil pariatur libero, reprehenderit veniam ad hic, similique autem accusantium delectus numquam maiores accusamus ullam doloremque! Alias maiores rerum minus sint dignissimos incidunt necessitatibus nulla!</Text>
              <Button size='xl' 
                      alignSelf='center' 
                      w='20%'
                      p={4}
                      boxShadow='lg'
                      color='#fff'
                      bgColor='#C41A3E'
                      fontSize={16}>
               <Link to='/'>Go Home</Link>
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default Error;
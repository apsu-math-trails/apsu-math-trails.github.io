import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';

import BioCard from '../components/cards/BioCard';

import { Box, 
         Container, 
         Heading, 
         Text, 
         SimpleGrid, 
         VStack } from '@chakra-ui/react';

export const Head = () => (
  <SEO title='Our Team'/>
);

const team = () => {
  return (
    <PageLayout>
      <Box py={36}>
        <Container maxW='7xl'>
          <VStack>
            <Heading fontSize='7xl'>Our Team.</Heading>
            <Text fontSize='3xl'>Lorem ipsum dolor sit, amet consectetur adipisicing.</Text>
          </VStack>
        </Container>
      </Box>
      <Box bgColor='gray.50' py={24}>
        <Container maxW='7xl'>
          <SimpleGrid columns={2} spacing={8}>
            <BioCard />
            <BioCard />
            <BioCard />
            <BioCard />
            <BioCard />
            <BioCard />
          </SimpleGrid>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default team;
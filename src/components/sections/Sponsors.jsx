import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import { Box, 
         Container,
         VStack,
         HStack,
         StackDivider,
         Heading,
       } from '@chakra-ui/react';

const Sponsors = () => {
  return (
    <Box pt={32} pb={36} bgColor='gray.50'>
      <Container maxW="7xl">
        <VStack>
          <Heading fontSize='6xl' color='#C41E3A'>Our Sponsors.</Heading>
          <HStack spacing={10} pt={16} divider={<StackDivider borderColor='blackAlpha.400' />}>
            <StaticImage src='../../assets/logos/tides-foundation-logo.png' width={250}/>
            <StaticImage src='../../assets/logos/google-logo-black.png' width={200}/>
            <StaticImage src='../../assets/logos/ap-full-logo-horizontal-black.png' width={200}/>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Sponsors;
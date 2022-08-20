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
            <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1024px-Google_2015_logo_colorless_mourning_period.svg.png' width={200}/>
            <StaticImage src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Google_2015_logo_colorless_mourning_period.svg/1024px-Google_2015_logo_colorless_mourning_period.svg.png' width={200}/>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Sponsors;
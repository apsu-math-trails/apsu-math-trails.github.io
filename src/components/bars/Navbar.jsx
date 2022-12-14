import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { Box, 
         Container, 
         Flex,
         Text,
         UnorderedList,
         ListItem
       } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box bgColor='black'>
      <Container
                 maxW='7xl' 
                 color='white'
                 py={8}
                 >
        <Flex align='center'>
          <Box>
          <StaticImage src='../../assets/logos/ap-logo-full-white.png'
                       alt='Official Austin Peay Logo. Full Horizontal White Text'
                       placeholder='blurred'
                       height={60}/>
          </Box>
          <UnorderedList w='full'
                         textTransform='uppercase'
                         listStyleType='none'
                         fontSize='lg'
                         >
            <Flex justify='space-evenly'
                  >
              <ListItem _hover= {{ fontWeight: 'bold'}}>
                <Link to="/">App Overview</Link>
              </ListItem>
              <ListItem _hover= {{ fontWeight: 'bold'}}>
                <Link to="/download">Download Guide</Link>
              </ListItem>
              <ListItem _hover= {{ fontWeight: 'bold'}}>
                <Link to="/team">Our Team</Link>
              </ListItem>
              <ListItem _hover= {{ fontWeight: 'bold'}}>
                <Link to="#">Get Connected</Link>
              </ListItem>
            </Flex>
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
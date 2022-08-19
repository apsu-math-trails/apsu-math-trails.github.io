import React from 'react';

import { Link } from 'gatsby';

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
          <Text>Logo</Text>
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
                <Link to="/sponsors">Project Sponsors</Link>
              </ListItem>
              <ListItem _hover= {{ fontWeight: 'bold'}}>
                <Link to="/team">Our Team</Link>
              </ListItem>
            </Flex>
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
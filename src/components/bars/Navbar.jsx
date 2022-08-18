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
    <Box>
      <Container>
        <Flex>
          <Text>Logo</Text>
          <UnorderedList>
            <ListItem>
              <Link to="/">App Overview</Link>
            </ListItem>
            <ListItem>
              <Link to="/download">Download Guide</Link>
            </ListItem>
            <ListItem>
              <Link to="/our-team/sponsors">Project Sponsors</Link>
            </ListItem>
            <ListItem>
              <Link to="/our-team/developers">Dev Team</Link>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
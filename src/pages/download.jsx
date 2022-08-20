import React from 'react';

import PageLayout from '../components/layouts/PageLayout';
import SEO from '../components/sections/SEO';
import ListHeader from '../components/lists/ListHeader';

import { MdOutlineCheckBox } from 'react-icons/md';

import { Box, 
         Container, 
         HStack,
         VStack,
         Heading,
         Text,
         UnorderedList,
         ListItem,
         ListIcon,
       } from '@chakra-ui/react';

export const Head = () => (
  <SEO title='Download Guide'/>
);

const download = () => {
  return (
    <PageLayout>
      <Box py={24} bgColor='witeAlpha.100'>
        <Container maxW='7xl'>
          <HStack spacing={36} p={24}>
            <Box w='50%'>
              <Heading fontSize='5xl' pb={4}>Journey Today, Together.</Heading>
              <Text fontSize='xl' lineHeight='taller' textAlign='justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, possimus culpa? Vel similique aliquid earum impedit ex error soluta rem. Illum nisi cumque eum quas explicabo. Nostrum sunt corporis dignissimos laboriosam quis vero! Aliquam, ab dolore? Deserunt facere sint unde tenetur inventore non fugiat eos sit? Suscipit voluptas non esse?</Text>
            </Box>
            <Box w='50%' border='1px' borderColor='gray.100' boxShadow='2xl' borderRadius='xl' bgColor='white'>
              <Box py={16} px={8}>
                <VStack>
                  <Heading fontSize='3xl' pb={8}>How To Download</Heading>
                  <UnorderedList spacing={12} 
                                 listStyleType='none'
                                 fontSize='xl'
                                 borderTop='1px'
                                 borderColor='gray.400'
                                 pt={8}>
                    <ListItem fontSize='3xl'>
                     <HStack spacing={2}>
                      <ListIcon as={MdOutlineCheckBox} color='red.500'/>
                      <Text fontSize='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                     </HStack>
                    </ListItem>
                    <ListItem fontSize='3xl'>
                      <HStack spacing={2}>
                        <ListIcon as={MdOutlineCheckBox} color='red.500'/>
                        <Text fontSize='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, velit!</Text>
                      </HStack>
                    </ListItem>
                    <ListItem fontSize='3xl'>
                      <HStack spacing={2}>
                        <ListIcon as={MdOutlineCheckBox} color='red.500'/>
                        <Text fontSize='xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam.</Text>
                      </HStack>
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem fontSize='3xl'>
                      <HStack spacing={2}>
                        <ListIcon as={MdOutlineCheckBox} color='red.500'/>
                        <Text fontSize='xl'>Lorem ipsum dolor sit amet.</Text>
                      </HStack>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </Box>
            </Box>
          </HStack>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default download;
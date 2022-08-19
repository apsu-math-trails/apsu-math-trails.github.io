import React from 'react';

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Stack,
  StackDivider,
  // useColorModeValue,
} from '@chakra-ui/react';

const Marketing = () => {
  return (
    <Container maxW={'7xl'} py={40}>
     <VStack spacing={32}>
      {/* Marketing 1 */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading as='u' color='#C41E3A' fontSize={'5xl'}>Exploration.</Heading>
          <Text color={'gray.500'} fontSize={'2xl'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente inventore blanditiis, quam a alias error, distinctio voluptates explicabo perspiciatis dolorum. Quaerat placeat, eius quasi impedit aut iste, sit alias earum voluptatem illo optio tenetur libero! A cupiditate, quaerat, adipisci odit ipsa saepe vel et, illo libero sit pariatur beatae.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      
      {/* Marketing 2 */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
          <Heading as='u' color='#C41E3A' fontSize={'5xl'}>Encourage Community.</Heading>
          <Text color={'gray.500'} fontSize={'2xl'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente inventore blanditiis, quam a alias error, distinctio voluptates explicabo perspiciatis dolorum. Quaerat placeat, eius quasi impedit aut iste, sit alias earum voluptatem illo optio tenetur libero! A cupiditate, quaerat, adipisci odit ipsa saepe vel et, illo libero sit pariatur beatae.
          </Text>
        </Stack>
      </SimpleGrid>

      {/* Marketing 3 */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading as='u' color='#C41E3A' fontSize={'5xl'}>Engaged Learning.</Heading>
          <Text color={'gray.500'} fontSize={'2xl'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, sapiente inventore blanditiis, quam a alias error, distinctio voluptates explicabo perspiciatis dolorum. Quaerat placeat, eius quasi impedit aut iste, sit alias earum voluptatem illo optio tenetur libero! A cupiditate, quaerat, adipisci odit ipsa saepe vel et, illo libero sit pariatur beatae.
          </Text>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
     </VStack>
    </Container>
  );
}

export default Marketing;
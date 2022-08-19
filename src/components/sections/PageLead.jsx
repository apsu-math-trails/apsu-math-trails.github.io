import React from 'react';
import SVG from '../../assets/illustrations/undraw_mathematics_-4-otb(1).svg';

import { Box,
         Container,
         HStack,
         Heading,
         Text,
         Image
       } from '@chakra-ui/react';

const PageLead = () => {
  return (
    <Box py={20}>
      <Container maxW={'container.xl'}>
        <HStack spacing={10} align={'center'}>
          <Box w='50%' pr={20}>
            <Heading py={5} fontSize={'5xl'}>How It Started...</Heading>
            <Text fontSize={'lg'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque sit impedit asperiores! Optio quaerat ab minus libero alias eos aut dolorum, ad atque temporibus ipsa molestiae dolorem nesciunt cupiditate consectetur quo omnis quam culpa non expedita doloremque fugit! Accusamus ipsum ad magnam reiciendis quaerat quisquam itaque illum cupiditate voluptas.</Text>
          </Box>
          <Box w='50%'>
            <Image
                boxSize={450}
                src={SVG}
                alt='Dan Abramov'
              />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default PageLead;
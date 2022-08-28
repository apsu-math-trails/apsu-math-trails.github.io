import React from 'react';

import { Link } from 'gatsby';

import { FaArrowRight } from 'react-icons/fa';

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={
        `url(https://tlc-engineers.com/wp-content/uploads/Maynard-Building-lg.jpg)`
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '4xl', md: '5xl' })}
            textTransform={'uppercase'}>
            Embark on a new
            <br />journey today.
          </Text>
          <Stack direction={'row'} w={'65%'}>
            <Button
              bg={'blackAlpha.900'}
              rounded={'lg'}
              color={'white'}
              _hover={{ bg: '#C41E3A' }}
              size={'lg'}
              w='100%'
              rightIcon={<FaArrowRight />}>
              <Link to="/download">Get Started</Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}

export default Hero;
import React from 'react';

import { IoCloudDownloadOutline } from 'react-icons/io5';

import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  Grid,
  GridItem,
  Container,
  Heading,
  Text,
} from '@chakra-ui/react';

const FeatureBlock = ({ heading, text }) => {
  return (
    <GridItem>
      <Heading as='h3' 
               fontSize={'3xl'}
               fontWeight={600}
               color={'#C41E3A'}
               >
        {heading}
      </Heading>
      <Text fontSize='xl' py={5}>{text}</Text>
    </GridItem>
  );
};

const Features = () => {
  return (
    <Box as={Container} maxW='7xl' mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems='flex-start' spacing='20px'>
            <Heading fontSize='5xl' 
                     fontWeight='700'
                     transform={'uppercase'} 
                     mb={3}>
              App Features.
            </Heading>
            <Button
              rounded={'lg'}
              variant={'outline'}
              size={'lg'}
              // borderColor={'blackAlpha.500'}
              boxShadow='xl'
              rightIcon={<IoCloudDownloadOutline size={24}/>}
              _hover={{ bg: '#C41E43', 
                        boxShadow: 'inner',
                        color: 'white',}}
              >
             <Text pr={3}>Download Now</Text>
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <Text fontSize='lg' pt={10}>
             Ambitious about the launch of Math Trails. The below
             features will be included in the first version of the app. Don't worry,
             we plan to add more features later!
            </Text>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={16} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}
        py={20}>
        <FeatureBlock
          heading={'First Feature'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod ab odit consectetur recusandae saepe quam corrupti accusantium repellat facilis.'}
        />
        <FeatureBlock
          heading={'Second Feature'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod ab odit consectetur recusandae saepe quam corrupti accusantium repellat facilis.'}
        />
        <FeatureBlock
          heading={'Third Feature'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod ab odit consectetur recusandae saepe quam corrupti accusantium repellat facilis.'}
        />
        <FeatureBlock
          heading={'Fourth Feature'}
          text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod ab odit consectetur recusandae saepe quam corrupti accusantium repellat facilis.'}
        />
      </Grid>
    </Box>
  );
};

export default Features;


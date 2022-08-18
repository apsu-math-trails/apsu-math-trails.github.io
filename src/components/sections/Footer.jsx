import React from 'react';

import { Link } from 'gatsby';

import AppStoreBadge from '../badges/AppStoreBadge';
import PlayStoreBadge from '../badges/PlayStoreBadge';
import SocialButton from '../buttons/SocialButton';
import ListHeader from '../lists/ListHeader';

import { FaGithub, 
         FaTwitter, 
         FaInstagram, 
         FaFacebook } from 'react-icons/fa';

import { Box,
         Container,
         Stack,
         SimpleGrid,
         Text,
         useColorModeValue,
       } from '@chakra-ui/react';

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>APSU</ListHeader>
            <a target='_blank' href={'https://www.apsu.edu/'}>Official Webite</a>
            <a target='_blank' href={'https://twitter.com/austinpeay?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'}>Official Twitter</a>
            <a target='_blank' href={'https://www.instagram.com/austinpeay/?hl=en'}>Official Instagram</a>
            <a target='_blank' href={'https://www.facebook.com/austinpeay/'}>Official Facebook</a>
            <a target='_blank' href={'https://www.apsu.edu/costem'}>COSTEM Website</a>
            <a target='_blank' href={'https://twitter.com/apsucostem'}>COSTEM Twitter</a>
            <a target='_blank' href={'https://www.instagram.com/apsucostem/?hl=en'}>COSTEM Instagram</a>
            <a target='_blank' href={'https://www.facebook.com/APSUCoSTEM/'}>COSTEM Facebook</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>App Overview</ListHeader>
            <Link to={'/'}>History</Link>
            <Link to={'/'}>Features</Link>
            <Link to={'/'}>Benefits</Link>
            <a target='_blank' href={'https://github.com/apsu-math-trails'}>GitHub Repo</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Our Team</ListHeader>
            <Link to={'/our-team/sponsors'}>Project Sponsors</Link>
            <Link to={'/our-team/developers'}>Developers</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App On</ListHeader>
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>&copy; {new Date().getFullYear()} APSU - College of STEM - All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} target='_blank' href={'https://github.com/apsu-math-trails'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Twitter'} target='_blank' href={'https://twitter.com/apsucostem'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'} target='_blank' href={'https://www.instagram.com/apsucostem/?hl=en'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} target='_blank' href={'https://www.facebook.com/APSUCoSTEM/'}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

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

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('black', 'gray.50')}
      color={useColorModeValue('white', 'gray.700')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader weight='bold'>APSU</ListHeader>
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
            <ListHeader weight='bold'>App Overview</ListHeader>
            <Link to={'/'}>History</Link>
            <Link to={'/'}>Features</Link>
            <Link to={'/'}>Benefits</Link>
            <a target='_blank' href={'https://github.com/apsu-math-trails'}>GitHub Repo</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader weight='bold'>Our Team</ListHeader>
            <Link to={'/sponsors'}>Project Sponsors</Link>
            <Link to={'/developers'}>Devs &amp; Designers</Link>
          </Stack>

          <Stack align={'flex-start'} justifySelf='end'>
            <ListHeader weight='bold'>Install App On</ListHeader>
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
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>&copy; {new Date().getFullYear()} APSU - College of STEM - All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Github'} href={'https://github.com/apsu-math-trails'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Twitter'} href={'https://twitter.com/apsucostem'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'}  href={'https://www.instagram.com/apsucostem/?hl=en'}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/APSUCoSTEM/'}>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
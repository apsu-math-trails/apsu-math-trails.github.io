import React from 'react';

import { Link } from 'gatsby';

import useSiteMetaData from '../../hooks/useSiteMetadata-hook';
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
  const siteData = useSiteMetaData();
  console.log(siteData);
  
  const { official, costem } = siteData.organization;

  return (
    <Box
      bg={useColorModeValue('black', 'gray.50')}
      color={useColorModeValue('white', 'gray.700')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader weight='bold'>APSU</ListHeader>
            <a target='_blank' href={official.socialLinks.site}>Official Webite</a>
            <a target='_blank' href={official.socialLinks.twitter}>Official Twitter</a>
            <a target='_blank' href={official.socialLinks.instagram}>Official Instagram</a>
            <a target='_blank' href={official.socialLinks.facebook}>Official Facebook</a>
            <a target='_blank' href={costem.socialLinks.site}>COSTEM Website</a>
            <a target='_blank' href={costem.socialLinks.twitter}>COSTEM Twitter</a>
            <a target='_blank' href={costem.socialLinks.instagram}>COSTEM Instagram</a>
            <a target='_blank' href={costem.socialLinks.facebook}>COSTEM Facebook</a>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader weight='bold'>App Overview</ListHeader>
            <Link to={'/'}>History</Link>
            <Link to={'/'}>Features</Link>
            <Link to={'/'}>Benefits</Link>
            <a target='_blank' href={costem.socialLinks.github}>GitHub Repo</a>
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
            <SocialButton label={'Github'} href={costem.socialLinks.github} rounded='full'>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Twitter'} href={costem.socialLinks.twitter} rounded='full'>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'Instagram'}  href={costem.socialLinks.instagram} rounded='full'>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={'Facebook'} href={costem.socialLinks.facebook} rounded='full'>
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
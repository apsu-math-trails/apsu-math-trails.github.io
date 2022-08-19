import { extendTheme } from '@chakra-ui/react';

const chakraThemeKit = extendTheme({
  semanticTokens: {
    colors: {
      error: 'yellow.500',
      success: 'cyan.300',
      dark: {
        default: '#000',
        _dark: '#FFF',
      },
      light: {
        default: `#fff`,
        _dark: `#000`
      },
      accent: {
        default: '#C41E3A',
        _dark: '#C41E3A',
      },
    },
  },
});

export default chakraThemeKit;
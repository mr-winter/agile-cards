import { rgba } from 'polished';

const baseTheme = {
  breakpoints: ['30em', '48em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [13, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: [300, 400, 500],
  radii: [0, 3],
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175',
    link: '#1a0dab',
    beige: '#FFEBCC',
    orange: '#F2994A',
  },
  shadows: {
    medium: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
};

const theme = {
  ...baseTheme,
  linkStyles: {
    primary: {
      color: baseTheme.colors.link,
      '&:hover': {
        color: baseTheme.colors.black,
      },
    },
  },
  buttonSizes: {
    small: {
      fontSize: baseTheme.fontSizes[1],
    },
    medium: {
      fontSize: baseTheme.fontSizes[2],
    },
  },
  buttons: {
    primary: {
      color: baseTheme.colors.orange,
      backgroundColor: rgba(baseTheme.colors.white, 0.2),
      borderColor: baseTheme.colors.orange,
      '&:hover': {
        color: baseTheme.colors.white,
        backgroundColor: baseTheme.colors.orange,
      },
      '&:focus:not(:active)': {
        boxShadow: `0 0 0 3px ${rgba(baseTheme.colors.orange, 0.3)}`,
      },
    },
  },
};

export default theme;

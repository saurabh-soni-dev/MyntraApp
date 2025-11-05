// Base palette
const palette = {
  pink: {
    light: '#f8bbd0',
    main: '#e91e63',
    dark: '#c2185b',
  },
  blue: {
    light: '#64b5f6',
    main: '#2196f3',
    dark: '#1976d2',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  success: {
    light: '#81c784',
    main: '#4caf50',
    dark: '#388e3c',
  },
  error: {
    light: '#ef5350',
    main: '#f44336',
    dark: '#d32f2f',
  },
  warning: {
    light: '#ffb74d',
    main: '#ff9800',
    dark: '#f57c00',
  },
  common: {
    white: '#ffffff',
    black: '#000000',
  },
} as const;

// Semantic color system
export const colors = {
  primary: palette.pink.main,
  primaryLight: palette.pink.light,
  primaryDark: palette.pink.dark,

  secondary: palette.blue.main,
  secondaryLight: palette.blue.light,
  secondaryDark: palette.blue.dark,

  text: {
    primary: palette.grey[900],
    secondary: palette.grey[800],
    muted: palette.grey[600],
    light: palette.grey[500],
    disabled: palette.grey[400],
  },

  background: {
    primary: palette.common.white,
    secondary: palette.grey[100],
    tertiary: palette.grey[200],
  },

  border: palette.grey[200],
  divider: palette.grey[300],

  success: {
    main: palette.success.main,
    light: palette.success.light,
    dark: palette.success.dark,
  },

  error: {
    main: palette.error.main,
    light: palette.error.light,
    dark: palette.error.dark,
  },

  warning: {
    main: palette.warning.main,
    light: palette.warning.light,
    dark: palette.warning.dark,
  },

  action: {
    active: palette.grey[600],
    hover: palette.grey[100],
    selected: palette.grey[200],
    disabled: palette.grey[300],
    disabledBackground: palette.grey[200],
  },
} as const;

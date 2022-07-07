import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Manrope',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#8C00E5',
      dark: '#A000E6',
      darker: '#341946',
      light: '#A835E8',
      lighter: '#BD4DEE',
    },
    secondary: {
      //shades of grey
      main: '#464646',
      dark: '#222126',
      darker: '#323136',
      light: '#28272B',
      lighter: '#363638',

      gray: '#7a7a7d',
    },
    colors: {
      black: '#0C0B10',
      twitter: '#00ACEE',
      lightPink: '#BD4DEE',
      pink: '#AB45E7',
      lighterPink: '#ac4be5',
      purple: '#BB56F2',
    },
    textColors: {
      blackFade: '#00000075',
      whiteFade: '#ffffff75',
    },
    backgroundColors: {
      dark: '#181818',
      playerControl: '#282246',
    },
  },
  breakpoints: {
    values: {
      min: 0,
      xxs: 420,
      xs: 575,
      sm: 767,
      md: 991,
      lg: 1199,
      xl: 1365,
      xx: 1600,
    },
  },
})
export default theme

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    background: '#F5F8FA',
    light: {
      withe: "#FFFFFF",
      heading: "#F5F8FA",
      text: "#F5F8FA",
      info: "#DADADA",
    },
    dark: {
      black: "#000000",
      heading: "#47585B",
      text: "#47585B",
      info: {
        "500": "#999999",
        "100": "rgba(153, 153, 153, 0.5)"
      }
    },
    highlight: {
      "500": "#FFBA08",
      "100": "rgba(255, 186, 8, 0.5)"
    }
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: 'light.withe',
        fontWeight: '400',
      }
    }
  }
});

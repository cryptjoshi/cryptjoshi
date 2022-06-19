import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import {
  sand,
  sandDark,
  blue,
  blueDark,
} from "@radix-ui/colors";

const transformRadixToChakraFormat = (scale) => {
  const output = Object.values(scale).reduce(
    (accumulator, currentValue, index) => {
      if (index === 0) {
        accumulator[`50`] = currentValue;
      } else {
        accumulator[`${index}00`] = currentValue;
      }
      return accumulator;
    },
    {}
  );

  return output;
};

const radixNeutral = transformRadixToChakraFormat(sand);
const radixNeutralDark = transformRadixToChakraFormat(sandDark);
const radixPrimary = transformRadixToChakraFormat(blue);
const radixPrimaryD = transformRadixToChakraFormat(blueDark);



// const styles = {
//   global: props => ({
//     html: {
//       scrollBehavior: "smooth"
//     },
//     body: {

//       color: mode("neutral.1100", "neutralD.1100")(props),
//       overflow: 'hidden',
//       // bg: mode('#ffffff', '#202023')(props),
//       bg: mode("neutral.100", "neutralD.50")(props),
//       overflow: 'hidden',
//       transitionProperty: "background-color",
//       transitionDuration: "200ms",
//     },
//     footer: {
//       // minHeight: '400px',
//       padding: '1rem 0',
//       borderTop: '1px solid #202023',
//       // bg: mode('#ffffff', '#202023')(props),
//       bg: mode("neutral.100", "neutralD.50")(props),
//       overflow: 'hidden',
//       // bottom: 0,
//       // left: 0,
//     },
//     MozOsxFontSmoothing: "grayscale",
//     WebkitFontSmoothing: "antialiased",
//     textRendering: "optimizeLegibility"
//   })
// }

// const components = {
//   Heading: {
//     variants: {
//       'section-title': {
//         textDecoration: 'underline',
//         fontSize: 20,
//         textUnderlineOffset: 6,
//         textDecorationColor: '#525252',
//         textDecorationTickness: 4,
//         marginTop: 3,
//         marginBottom: 4
//       }
//     }
//   },
//   Link: {
//     baseStyle: props => ({
//       color: mode('#3d7aed', '#ff63c3')(props),
//       textunderlineOffset: 3

//     })
//   }
// }
const fonts = {
  heading: 'M PLUS Rounded 1c'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}


const colors = {
  neutral: {
    ...radixNeutral,
    // 100: "hsl(41, 100%, 99%)",
  },
  neutralD: {
    ...radixNeutralDark,
  },
  gray: {
    50: "hsl(50 20.0% 99.0%)",
    100: "hsl(60 7.7% 97.5%)",
    200: "hsl(58 6.1% 92.9%)",
    300: "hsl(51 6.0% 77.1%)",
    400: "hsl(50 3.8% 30.6%)",
    500: "hsl(50 4.0% 42.7%)",
    600: "hsl(52 3.1% 48.3%)",
    700: "hsl(58 3.7% 13.1%)",
    800: "hsl(58 3.7% 13.1%)",
    900: "hsl(61 2.0% 8.3%)",
  },
  primary: {
    ...radixPrimary,
  },
  primaryD: {
    ...radixPrimaryD,
  },
}

const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      color: mode("neutral.1100", "neutralD.1100")(props),
      bg: mode("neutral.100", "neutralD.50")(props),
      fontSize: "1.2em",
      ".deleted": {
        color: "#ff8383 !important",
        fontStyle: "normal !important",
      },
      ".inserted": {
        color: "#b5f4a5 !important",
        fontStyle: "normal !important",
      },
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
      textRendering: "optimizeLegibility",
    },
  }),
}
const components = {
  MenuButton: {
    baseStyle: (props) => ({
      _hover: {
        backgroundColor: mode("neutral.400", "neutralD.400")(props),
      },
    }),
  },
  Heading: {
    baseStyle: (props) => ({
      borderBottom: "2px",
      borderColor: mode("neutral.500", "neutralD.500")(props),
      pb: 2,
      fontWeight: "500",
    }),
  },
  Button: {
    baseStyle: {
      fontWeight: "500",
      rounded: "lg",
    },
  },
  Tag: {
    baseStyle: {
      rounded: "lg",
    },
  },
  textarea: {
    baseStyle: {
      background: "green.300",
    },
  },
  Link: {
    baseStyle: {
      fontWeight: "inherit",
      _hover: {
        textDecoration: "none",
      },
    },
    // variants: {
    //   text: {
    //     borderBottom: "2px",
    //     borderColor: "primary.400",
    //     color: "primaryD.600",
    //     transition: "all 0.3s",
    //     transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    //     borderRadius: "1px",
    //     _hover: {
    //       color: "primary.1100",
    //       backgroundColor: "primary.400",
    //     },
    //   },
    //   gradient: {
    //     bgGradient: "linear(to-br, blue.400,blue.300)",
    //     bgClip: "text",
    //     fontWeight: "500",
    //     _hover: {
    //       bgGradient: "linear(to-br, blue.500,blue.300)",
    //       bgClip: "text",
    //     },
    //   },
    // },
  },
}
const mdx = {
  h1: {
    mt: "2rem",
    mb: ".25rem",
    lineHeight: 1.2,
    fontWeight: "bold",
    fontSize: "1.875rem",
    letterSpacing: "-.025em",
  },
  h2: {
    mt: "4rem",
    mb: "0.5rem",
    lineHeight: 1.3,
    fontWeight: "semibold",
    fontSize: "1.5rem",
    "& + h3": {
      mt: "1.5rem",
    },
  },
  h3: {
    mt: "3rem",
    // mb: "0.5rem",
    lineHeight: 1.25,
    fontWeight: "semibold",
    fontSize: "1.25rem",
  },
  h4: {
    mt: "3rem",
    lineHeight: 1.375,
    fontWeight: "semibold",
    fontSize: "1.125rem",
  },
  p: {
    mt: "1.25rem",
    lineHeight: 1.7,
    "blockquote &": {
      mt: 0,
    },
  },
  // a: {
  //   borderBottom: "2px",
  //   transition: "all 0.3s",
  //   transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  //   borderRadius: "1px",
  // },
  hr: {
    my: "4rem",
  },
  blockquote: {
    bg: "orange.100",
    borderWidth: "1px",
    borderColor: "orange.200",
    rounded: "lg",
    px: "1.25rem",
    py: "1rem",
    my: "1.5rem",
  },
  ul: {
    mt: "1.5rem",
    ml: "1.25rem",
    "blockquote &": { mt: 0 },
    "& > * + *": {
      mt: "0.25rem",
    },
  },
  code: {
    rounded: "sm",
    px: "1",
    fontSize: "0.875em",
    py: "2px",
    whiteSpace: "nowrap",
    lineHeight: "normal",
  },
}


const theme = extendTheme({
  // config,
  // styles,
  // components,
  // colors,
  // fonts,
  // mdx
})


export default theme

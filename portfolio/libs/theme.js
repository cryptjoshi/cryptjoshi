import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import {
  sand,
  sandDark,
  blue,
  blueDark,
  yellow,
  yellowDark,
  amber,
  amberDark,
} from "@radix-ui/colors";

const transformRadixToChakraFormat = (scale) => {
  const output = Object.values(scale).reduce(
    (accmulator, currentValue, index) => {
      if (index === 0) {
        accmulator[`50`] = currentValue
      } else {
        accmulator[`${index}00`] = currentValue
      }
      return accmulator
    },
    {}
  )
  return output
}

const radixNeutral = transformRadixToChakraFormat(sand)
const radixNeutralDark = transformRadixToChakraFormat(sandDark)
const radixPrimary = transformRadixToChakraFormat(blue)
const radixPrimaryD = transformRadixToChakraFormat(blueDark)

const styles = {
  global: props => ({
    html: {
      scrollBehavior: "smooth"
    },
    body: {

      color: mode("neutral.1100", "neutralD.1100")(props),
      overflow: 'hidden',
      // bg: mode('#ffffff', '#202023')(props),
      bg: mode("neutral.100", "neutralD.50")(props),
      overflow: 'hidden',
      transitionProperty: "background-color",
      transitionDuration: "200ms",
    },
    footer: {
      // minHeight: '400px',
      padding: '1rem 0',
      borderTop: '1px solid #202023',
      // bg: mode('#ffffff', '#202023')(props),
      bg: mode("neutral.100", "neutralD.50")(props),
      overflow: 'hidden',
      // bottom: 0,
      // left: 0,
    },
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    textRendering: "optimizeLegibility"
  })
}
const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationTickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textunderlineOffset: 3

    })
  }
}
const fonts = {
  heading: 'M PLUS Rounded 1c'
}
const colors = {
  neutral: {
    ...radixNeutral
  },
  neutralD: {
    ...radixNeutralDark
  },
  primary: {
    ...radixPrimary
  },
  primaryD: {
    ...radixPrimaryD
  },
  glassTeal: '#88ccca'
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme

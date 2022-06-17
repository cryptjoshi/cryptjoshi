import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#202023')(props),
      overflow: 'hidden'
    },
    footer: {
      // minHeight: '400px',
      padding: '1rem 0',
      borderTop: '1px solid #202023',
      bg: mode('#ffffff', '#202023')(props),
      // bottom: 0,
      // left: 0,
    }
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

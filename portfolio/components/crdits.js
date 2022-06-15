
// import './styles.css'
import { Box, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'

const credits = keyframes`
  0% { 
     top: 100%;
    }
  100% {
     top: -600%;
    }`


const CreditBox = ({ children, props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `60s ${credits} linear infinite`

  return (
    <Box animation={animation} className="wrapper" {...props}>
      {children}</Box>
  )
}
export default CreditBox

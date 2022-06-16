
// import './styles.css'
import { Box, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'

import styled from '@emotion/styled'
// import { Text, useColorModeValue } from '@chakra-ui/react'


const LogoBox = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 400px;
  margin-top:0px;
  margin-left: -100px;
  font: 300 30px/1 'Open Sans Condensed', sans-serif;
  text-align: center;
  text-transform: uppercase;
  /* color: #fff; */
  z-index: -1;
`

const credits = keyframes`
  0% { 
     top: 100%;
    }
  100% {
     top: -250%;
    }`


const CreditBox = ({ children, props }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const animation = prefersReducedMotion
    ? undefined
    : `40s ${credits} linear infinite`

  return (
    <Box animation={animation} className="wrapper" h={"40px"} {...props}>
      {children}</Box>
  )
}
export default CreditBox

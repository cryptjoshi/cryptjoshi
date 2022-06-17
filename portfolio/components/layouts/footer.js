import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
const Div = styled.div`
  /* height: 5px; */
 /* padding: 10px; */
    left: 0;
    width: 100%;
    bottom: 0;
    position: fixed;
  background-color: #202023;
  color: #ffffff;
`
const Footer = ({ children, props }) => {
  return (
    <Div as="Footer" {...props}>
      {children}
    </Div>
  )
}

export default Footer

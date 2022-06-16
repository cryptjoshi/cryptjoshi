// import Link from 'next/link'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'
// import { Text, useColorModeValue } from '@chakra-ui/react'


const LogoBox = styled.span`
font-weight:bold;
font-size: 18px;
display:inline-flex;
align-items:center;
height:30px;
line-height:20px;
padding:10px;

&:hover img {
    transform: rotate(20deg);
}
`
const Logo = ({ src }) => {
  const logoImg = `assets/images/${src}`
  return (
    < Box >
      <Image src={src} width={40} height={40} alt="logo" />
    </Box >
  )
}

export default Logo

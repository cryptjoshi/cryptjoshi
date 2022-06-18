import Logo from '../logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../theme-toggle-button'


const LinkItem = ({ href, path, children }) => {
  const active = path === href
  // const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  const inactiveColor = useColorModeValue("neutral.100", "neutralD.50")
  // const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position={"fixed"}
      as="nav"
      w={"100%"}
      // bg={useColorModeValue('#ffffff40', '#20202380')}
      bg={useColorModeValue("white", "neutralD.100")}
      display={{ base: "none", md: "block" }}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("neutral.400", "neutralD.400")}
      shadow="0 0 10px 0 rgba(0,0,0,0.0035)"
      // const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
      // bg={"#000000"}
      // style={{ backdropFilter: 'blur(20px)' }}
      zIndex={99}
      {...props}
    >
      <Container
        display="flex" p={2}
        maxW={"container.md"}
        wrap="wrap"
      // align="right"
      // justify="space-between"
      >
        <ThemeToggleButton />
      </Container>
    </Box>
  )
}
export default Navbar

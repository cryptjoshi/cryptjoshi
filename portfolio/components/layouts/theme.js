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
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
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
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex" p={2}
        maxW={"container.md"}
        wrap="wrap"
        align="ceneter"
        justify="space-between"
      >
        <ThemeToggleButton />
      </Container>
    </Box>
  )
}
export default Navbar
import Logo from '../logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  VStack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  HStack,
  Icon,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../theme-toggle-button'

import {
  BookmarkIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LightningBoltIcon,
  MenuIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";

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

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      // display="flex" p={2}
      // maxW={"container.md"}
      // wrap="wrap"
      // align="right"
      // justify="space-between"
      >

        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <HStack ml={-4} spacing={2}>

              <Menu isOpen={isOpen}>
                <MenuButton
                  bg={useColorModeValue("neutral.100", "neutralD.300")}
                  _hover={{
                    bg: useColorModeValue("neutral.200", "neutralD.400"),
                  }}
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  rounded="full"
                >
                  <IconButton
                    aria-label="Addtional Menu"
                    variant="ghost"
                    icon={<Icon as={DotsHorizontalIcon} />}
                  />
                </MenuButton>
              </Menu>
            </HStack>
            <HStack>
              <ThemeToggleButton />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}
export default Navbar

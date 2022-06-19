import { Link, NextLink } from 'next/link'
import {
  chakra,
  VStack,
  HStack,
  Button,
  IconButton,
  useColorMode,
  Text,
  Box,
  Divider,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuCommand,
  MenuDivider,
  Icon,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import ThemeToggle from "../theme-toggle-button";
import {
  BookmarkIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LightningBoltIcon,
  MenuIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import Container from '../container'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box
      bg={useColorModeValue("white", "neutralD.100")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue("neutral.400", "neutralD.400")}
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            {/* <AvatarNavigation /> */}
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
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>

  )
}

export default Header

import React from "react";
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
  keyframes
} from "@chakra-ui/react";
import NextLink from "next/link";
import Container from "./container";
import { useRouter } from "next/router";
import ThemeToggle from "./theme-toggle";
import {
  BookmarkIcon,
  BookOpenIcon,
  ChevronDownIcon,
  LightningBoltIcon,
  MenuIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import AvatarNavigation from "./avatar-navigation";
import { motion } from "framer-motion"

const key1 = keyframes`
  0% {transform: scale(1) rotate(0); border-radius:20%}
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%; }
  75% { transform: scale(1) rotate(270deg); border-radius: 50%; }
  100% { transform: scale(1) rotate(0); border-radius: 20%; }
`
const animate1 = `${key1} 2s ease-in-out infinite`

function NavLink(props) {
  const { href, name, ...rest } = props;
  var isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");

    isActive = pathname.includes(group);
  } else {
    if (href === pathname) {
      isActive = true;
    }
  }

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          color: useColorModeValue("neutral.1100", "neutralD.1100"),
          bg: useColorModeValue("neutral.100", "neutralD.300"),
        }}
        _hover={{
          bg: useColorModeValue("neutral.200", "neutralD.200"),
        }}
        px={4}
      >
        {name}
      </Button>
    </NextLink>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <AvatarNavigation />
            <HStack ml={-4} spacing={8}>
              <Link href="/code">
                <Button variant={"ghost"}
                  _hover={{ animation: animate1 }}>
                  <Text>Code</Text>
                </Button>
              </Link>
              <Link href="/devops">
                <Button variant={"ghost"}>
                  <Text>Devops</Text>
                </Button>
              </Link>
              {/* <Menu isOpen={isOpen}> */}
              {/*   <MenuButton */}
              {/*     bg={useColorModeValue("neutral.100", "neutralD.300")} */}
              {/*     _hover={{ */}
              {/*       bg: useColorModeValue("neutral.200", "neutralD.400"), */}
              {/*     }} */}
              {/*     onMouseEnter={onOpen} */}
              {/*     onMouseLeave={onClose} */}
              {/*     rounded="full" */}
              {/*   > */}
              {/*     <IconButton */}
              {/*       aria-label="Addtional Menu" */}
              {/*       variant="ghost" */}
              {/*       icon={<Icon as={DotsHorizontalIcon} />} */}
              {/*     /> */}
              {/*   </MenuButton> */}
              {/*   <MenuList */}
              {/*     bg={useColorModeValue("white", "neutralD.100")} */}
              {/*     borderColor={useColorModeValue("neutral.400", "neutralD.400")} */}
              {/*     onMouseEnter={onOpen} */}
              {/*     onMouseLeave={onClose} */}
              {/*   > */}
              {/*     <Link href="/books"> */}
              {/*       <MenuItem */}
              {/*         _hover={{ */}
              {/*           bg: useColorModeValue("neutral.200", "neutralD.200"), */}
              {/*         }} */}
              {/*       > */}
              {/*         <HStack> */}
              {/*           <Icon */}
              {/*             as={BookOpenIcon} */}
              {/*             size={18} */}
              {/*             color={useColorModeValue("blue.500", "blue.200")} */}
              {/*           /> */}
              {/*           <Text>Books</Text> */}
              {/*         </HStack> */}
              {/*       </MenuItem> */}
              {/*     </Link> */}
              {/*     <Link href="/bookmarks"> */}
              {/*       <MenuItem */}
              {/*         _hover={{ */}
              {/*           bg: useColorModeValue("neutral.200", "neutralD.200"), */}
              {/*         }} */}
              {/*       > */}
              {/*         <HStack> */}
              {/*           <Icon */}
              {/*             as={BookmarkIcon} */}
              {/*             size={18} */}
              {/*             color={useColorModeValue("blue.500", "blue.200")} */}
              {/*           /> */}
              {/*           <Text>Bookmarks</Text> */}
              {/*         </HStack> */}
              {/*       </MenuItem> */}
              {/*     </Link> */}
              {/*     <Link href="/tools"> */}
              {/*       <MenuItem */}
              {/*         _hover={{ */}
              {/*           bg: useColorModeValue("neutral.200", "neutralD.200"), */}
              {/*         }} */}
              {/*       > */}
              {/*         <HStack> */}
              {/*           <Icon */}
              {/*             as={LightningBoltIcon} */}
              {/*             size={18} */}
              {/*             color={useColorModeValue("blue.500", "blue.200")} */}
              {/*           /> */}
              {/*           <Text>Tools</Text> */}
              {/*         </HStack> */}
              {/*       </MenuItem> */}
              {/*     </Link> */}
              {/*   </MenuList> */}
              {/* </Menu> */}
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default Header

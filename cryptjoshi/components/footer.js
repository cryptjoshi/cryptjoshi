import NextLink from "next/link"
import { Box, Button, HStack, IconButton, Text, Icon, useColorModeValue, useColorMode } from "@chakra-ui/react"
import Container from "./container"
import Link from "./link"
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo
} from "phosphor-react"
const footer = () => {
  const date = new Date().getFullYear()

  const FooterLink = (props) => {
    const { href, name, ...rest } = props
    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue("neutral.800", "neutralD.800")}
          _hover={{ color: useColorModeValue("neutral.1000", "neutralD.1000") }}
        >
          {name}
        </Button>
      </NextLink>
    )
  }

  return (
    <Container>
      <HStack
        justify={"space-between"}
        w={"100%"}
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <FooterLink href="mailto:cryptjoshi@gmail.com" name="Contact" />
        <Text
          fontSize="sm"
          color={useColorModeValue("neutral.800", "neutralD.800")}
        >
          © {date} cryptjoshi{" "}
        </Text>

        {/* <HStack spacing={4}> */}
        {/*   <Link href="https://twitter.com/cryptjoshi" isExternal unstyled> */}
        {/*     <IconButton */}
        {/*       size={"sm"} */}
        {/*       icon={<Icon as={TwitterLogo} weight="fill" />} */}
        {/*       color={useColorModeValue("neutral.800", "neutralD.1000")} */}
        {/*     ></IconButton> */}
        {/*   </Link> */}
        {/*   <Link isExternal unstyled={true}> */}
        {/*     <IconButton */}
        {/*       size={"sm"} */}
        {/*       icon={<Icon as={LinkedinLogo} weight="fill" />} */}
        {/*       color={useColorModeValue("neutral.800", "neutralD.1000")} */}
        {/*     ></IconButton> */}

        {/*   </Link> */}
        {/*   <Link isExternal unstyled={true}> */}
        {/*     <IconButton */}
        {/*       size={"sm"} */}
        {/*       icon={<Icon as={GithubLogo} weight="fill" />} */}
        {/*       color={useColorModeValue("neutral.800", "neutralD.1000")} */}
        {/*     ></IconButton> */}


        {/*   </Link> */}
        {/*   <Link isExternal unstyled={true}> */}
        {/*     <IconButton */}
        {/*       size={"sm"} */}
        {/*       icon={<Icon as={YoutubeLogo} weight="fill" />} */}
        {/*       color={useColorModeValue("neutral.800", "neutralD.1000")} */}
        {/*     ></IconButton> */}


        {/*   </Link> */}

        {/* </HStack> */}
        {/* <FooterLink href="/privacy" name="Privacy" /> */}
      </HStack>
    </Container>
  )
}
export default footer

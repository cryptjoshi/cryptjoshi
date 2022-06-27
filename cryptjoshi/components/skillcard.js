import { Box, Heading, Image, Text, IconButton, Icon, useColorModeValue, VStack, HStack, Stack, Spacer, Flex } from "@chakra-ui/react"
// import { LinkedinLogo } from "phosphor-react"
function randomSize(min, max) {
  return Math.floor(Math.random() * max) + min
}
const Feature = ({ title, desc, type, ...rest }) => {
  return (
    <Box p={5} bg={useColorModeValue("white", "neutralD.100")} {...rest}
      borderWidth={"1px"}
      rounded={"lg"}
      borderColor={useColorModeValue("neutral.400", "neutralD.400")}
      transition="all 0.25s"
      transitionTimingFunction={"spring(1 100 10 10)"}
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <VStack align={"start"} justify={"flex-start"} spacing={1}>
        <HStack>
          <Image src={`https://icongr.am/devicon/${title}-${useColorModeValue(type, "original")}.svg?size=${randomSize(48, 64)}&color=${useColorModeValue("neutralD.100", "f4f0f0")}`} />
        </HStack>
      </VStack>
      <VStack align={"end"} justify="flex-end">
        <HStack>
          <Text mt={4}>{desc}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}


export default Feature

import { Box, Heading, Text, IconButton, Icon, useColorModeValue, VStack, HStack, Stack, Spacer, Flex } from "@chakra-ui/react"
import { LinkedinLogo } from "phosphor-react"
const Feature = ({ title, desc, foot, ...rest }) => {
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
          <IconButton
            size={"sm"}
            icon={<Icon as={LinkedinLogo} weight="fill" />}
            color={useColorModeValue("neutral.800", "neutralD.1000")}
          ></IconButton>
          <Heading fontSize='xl'>{title}</Heading>
        </HStack>
        <HStack>
          <Text mt={4}>“{desc}“</Text>
        </HStack>
      </VStack>
      <VStack align={"end"} justify="flex-end">
        <HStack>
          <Text mt={4}>{foot}</Text>
        </HStack>
      </VStack>
    </Box>
  )
}


export default Feature

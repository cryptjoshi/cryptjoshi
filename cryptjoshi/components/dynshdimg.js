import { Box, Image } from "@chakra-ui/react"


const DynamicShImg = ({ src }) => {
  return (
    <Box position={"relative"}>
      <Image src={src} w={80} h={80} rounded="lg" objectFit={"cover"} position="absolute" inset={0} filter={"blur(16px)"} zIndex={0} transform="scale(1.1,1.1)" />

      <Image zIndex={100} position="relative" src={src} w={80} h={80} rounded="lg" objectFit={"cover"} />
    </Box>
  )
}

export default DynamicShImg


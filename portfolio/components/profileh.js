import PLogo from './plogo'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

const ProHead = ({ title, name, head }) => {
  return (
    <Box
      w={"100%"}
      // bg={useColorModeValue('#ffffff', '#20202380')}
      bg={useColorModeValue('neutral.100', 'neutralD.50')}
      style={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      paddingTop={5}
      paddingBottom={8}
    >

      {/* <Box flexShrink={0} mt={{ base: 4, md: 0 }} pb={5} zIndex={1}> */}
      <PLogo
        borderColor={"whiteAlpha.800"}
        borderWidth={2}
        borderStyle="solid"
        maxWidth="100px"
        display="inline-block"
        borderRadius="full"
        src='images/profile.png'
        alt='Profile Picture' />
      <Box flexGrow={1} pb={10}>
        <Heading as="h2" variant={"page-title"} >
          {name}
        </Heading>
        <p>{title}</p>
      </Box>
      <Heading as="h3" variant={"Section-title"}>
        {head}
      </Heading>
    </Box>
  )
}

export default ProHead

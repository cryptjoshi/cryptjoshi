import PLogo from './plogo'
import { Box, Heading, useColorModeValue } from '@chakra-ui/react'

const ProHead = ({ props, title, name, head }) => {
  return (
    <Box
      w={"100%"}
      bg={useColorModeValue('#ffffff', '#20202380')}
      style={{ backdropFilter: 'blur(20px)' }}
      zIndex={1}
      paddingTop={5}
      paddingBottom={8}
      {...props}
    >

      {/* <Box flexShrink={0} mt={{ base: 4, md: 0 }} pb={5} zIndex={1}> */}
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

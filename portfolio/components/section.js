import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const section = ({ children, delay = 0, height = "80px" }) => (
  <StyleDiv
    // initial={{ y: 0, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // transition={{ duration: 0.8, delay }}
    mb={6}
    height={height}
  >
    {children}
  </StyleDiv>
)

export default section

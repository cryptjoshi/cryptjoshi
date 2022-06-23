import React from "react"
import NextLink from "next/link"
import { chakra, useColorModeValue, useColorModeValue$ } from "@chakra-ui/react"

const Link = (props) => {
  const href = props.href
  const isInternalLink = href
  // && (href.startWith("/") || href.startWith("#"))

  return props.unstyled ? (
    isInternalLink ? (

      <NextLink href={href}>
        <chakra.a {...props} />
      </NextLink>
    ) : (
      <chakra.a {...props} />
    )
  ) : isInternalLink ? (
    <NextLink href={href}>
      <chakra.a
        borderBottom={"2px"}
        borderRadius="1px"
        transition={"all 0.3s"}
        transitionTimingFunction="cubic-bezier(0.4,0,0.2,1)"
        borderColor={useColorModeValue("primaryD.200", "primary.200")}
        color={useColorModeValue("primaryD.200", "primary.600")}
        _hover={{
          borderColor: useColorModeValue("primaryD.200", "primary.200"),
          color: useColorModeValue("primaryD.200", "primary.200"),
          backgroundColor: useColorModeValue("primaryD.200", "primary.200")
        }}
        {...props}
      />
    </NextLink>
  ) : (
    <chakra.a
      borderBottom={"2px"}
      borderRadius="1px"
      transition={"all 0.3s"}
      transitionTimingFunction="cubic-bezier(0.4,0,0.2,1)"
      borderColor={useColorModeValue("primary.400", "primary.400")}
      color={useColorModeValue("primaryD.300", "primary.300")}
      _hover={{
        color: useColorModeValue("primaryD.50", "primaryD.200"),
        backgroundColor: useColorModeValue("primary.400", "primary.400")
      }}
      {...props}
    />

  )
}
export default Link;

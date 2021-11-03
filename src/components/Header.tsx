import { Flex, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      justify="center"
      align="center"
    >
      <Img src="/images/logo.svg" alt="Worldtrip" w={184} h={46} />
    </Flex>
  )
}

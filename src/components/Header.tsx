import { Flex, Img, Box } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
interface HeaderProps {
  subpage?: boolean;
}

export function Header({ subpage }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      align="center"
      justify="center"
      bg="background"
      maxWidth={1440}
      mx="auto"
      py="2"
    >
      {subpage && (
        <Box as="span" cursor="pointer" mr="auto" ml="2">
          <Link href="/" passHref>
            <AiOutlineLeft size={25} />
          </Link>
        </Box>
      )}

      <Box mr={subpage ? 'auto' : ''}>
        <Img src="/images/logo.svg" alt="Worldtrip" w={184} h={46} />
      </Box>
    </Flex>
  )
}

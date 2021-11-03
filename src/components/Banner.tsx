import { Box, Img, Text, Flex, Stack } from "@chakra-ui/react";

export function Banner() {
  return (
    <Box
      as="section"
      w="100%"
      h={335}
    >
      <Flex
        bgImage="url('/images/banner-background.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        height="100%"
      >
        <Flex
          w="100%"
          justify="space-between"
          px={["16", "16", "20"]}
          pt="20"
        >
          <Stack spacing="4">
            <Text
              color="light.heading"
              fontWeight="500"
              fontSize="2.25rem"
              lineHeight="3.375rem"
            >
              5 Continentes,<br /> infinitas possibilidades.
            </Text>

            <Text
              color="light.info"
              fontSize="1.25rem"
              lineHeight="1.875rem"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Stack>

          <Img
            src="/images/airplane.svg"
            alt="Airplane"
            transform="rotate(3deg)"
            w={418}
            h={270}
          />
        </Flex>
      </Flex>
    </Box>
  )
}

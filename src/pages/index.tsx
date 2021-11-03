import Head from 'next/head';
import { Box, Center, Flex, Divider, Img, Text } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Head>
        <title>wordtrip | Home</title>
      </Head>

      <Flex
        bg="background"
        direction="column"
        h="100%"
        mx="auto"
        maxW={1440}
      >
        <Header />

        <Banner />

        <Box
          as="section"
          px="20"
          mt="20"
          mb="10"
        >
          <Img src="/images/travel-types.png" />
        </Box>

        <Center>
          <Divider />
        </Center>

        <Box as="section" px="20" my="10">
          <Flex as="article" justify="center">
            <Text
              color="dark.text"
              fontSize="2.25rem"
              fontWeight="500"
              textAlign="center"
            >
              Vamos nessa? <br /> Então escolha seu continente</Text>
          </Flex>

          <Box as="article" height={450} mt="10">
            <Carousel />
          </Box>
        </Box>
      </Flex>
    </>
  )
}

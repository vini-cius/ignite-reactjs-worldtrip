import Head from 'next/head';
import { UnorderedList, SimpleGrid, ListItem, Box, Center, Flex, Divider, Img, Text, useBreakpointValue, ListIcon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FaCircle } from 'react-icons/fa';
import { api } from '../services/api';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Carousel } from '../components/Carousel';

export default function Home({ continents }) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>wordtrip | Home</title>
      </Head>

      <Flex
        direction="column"
        h="100vh"
      >
        <Header />

        <Box w="100%" maxWidth={1440} mx="auto" bg="background">
          <Banner />

          <Box
            as="section"
            px="20"
            mt="20"
            mb="10"
          >
            {isWideVersion ? (
              <Img src="/images/travel-types.png" />
            ) : (
              <UnorderedList
                fontSize="2xl"
                listStyleType="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <SimpleGrid columns={2} spacing={5} >
                  <ListItem p="2">
                    <ListIcon as={FaCircle} color="highlight.500" />
                    vida noturna
                  </ListItem>

                  <ListItem p="2">
                    <ListIcon as={FaCircle} color="highlight.500" />
                    praia
                  </ListItem>

                  <ListItem p="2">
                    <ListIcon as={FaCircle} color="highlight.500" />
                    moderno
                  </ListItem>

                  <ListItem p="2">
                    <ListIcon as={FaCircle} color="highlight.500" />
                    clássico
                  </ListItem>

                  <ListItem p="2">
                    <ListIcon as={FaCircle} color="highlight.500" />
                    e mais...
                  </ListItem>
                </SimpleGrid>
              </UnorderedList>
            )}
          </Box>

          <Center>
            <Divider />
          </Center>

          <Box as="section" px={["10", "10", "20"]} my="10">
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
              <Carousel continents={continents} />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await api.get('/continents');

  return {
    props: { continents: response.data },
  };
};

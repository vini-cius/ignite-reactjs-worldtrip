import { Flex, Box, Img } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";

export default function Contients(props) {
  return (
    <>
      <Head>
        <title>wordtrip | {props.continent}</title>
      </Head>

      <Flex
        bg="background"
        direction="column"
        h="100%"
        mx="auto"
        maxW={1440}
      >
        <Header />

        <Box as="main">
          <Box w="100%" h={500}>
            <Flex
              bgImage="url('https://images.unsplash.com/photo-1611350724149-783acd9b510d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')"
              bgPosition="center"
              bgRepeat="no-repeat"
              h="100%"
              w="100%"
            >
              a
            </Flex>
          </Box>

          <Box as="section" px="20" my="10">

          </Box>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: { continent: slug },
  };
};

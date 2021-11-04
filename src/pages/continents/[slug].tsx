import { Flex, Box, Text, SimpleGrid, Tooltip, Avatar, Image } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
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
        <Header subpage />

        <Box as="main">
          <Box
            as="section"
            h={500}
            backgroundImage="url('https://images.unsplash.com/photo-1611350724149-783acd9b510d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')"
            backgroundSize="cover"
            backgroundPosition="center"
          >
            <Flex
              w="100%"
              h="100%"
              justify="flex-end"
              align="start"
              direction="column"
            >
              <Text as="h1" ml="20" mb="20" color="light.heading" fontWeight="500" fontSize="xxx-large">
                América do Norte
              </Text>
            </Flex>
          </Box>


          <Box as="section" px="20" my="10">
            <SimpleGrid columns={2} spacing={10} color="darkblue.text">
              <Text>
                A Europa é, por convenção, um dos seis continentes do mundo.Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
              </Text>

              <Flex align="center" justify="center">
                <SimpleGrid columns={3} spacing={17}>
                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">50</Text>
                    <Text fontWeight="500">países</Text>
                  </Box>

                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">60</Text>
                    <Text fontWeight="500">línguas</Text>
                  </Box>

                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">27</Text>
                    <Text as="span" fontWeight="500">
                      cidades +100
                      <Tooltip label="Cidades mais visitadas" placement="bottom-end">
                        <AiOutlineInfoCircle />
                      </Tooltip>
                    </Text>
                  </Box>
                </SimpleGrid>
              </Flex>
            </SimpleGrid>
          </Box>

          <Box as="section" px="20" my="10">
            <Text as="h1" fontSize="2xl" color="dark.heading" fontWeight="bold">Cidades +100</Text>

            <SimpleGrid minChildWidth="256px" spacing={10} mt="10">
              <Box borderWidth="1px" borderColor="highlight.100" borderRadius="lg" overflow="hidden">
                <Image src="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />

                <Box
                  p="4"
                  as="h4"
                  fontSize="2rem"
                  color="dark.heading"
                  fontWeight="bold"
                >
                  Londres
                </Box>

                <Flex align="center" justify="space-between" p={[0, 4, 4, 4]}>
                  <Text as="span" color="dark.info.500" fontSize="1rem">
                    Reino Unido
                  </Text>

                  <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/1200px-Flag_of_the_United_Kingdom_%282-3%29.svg.png" />
                </Flex>

              </Box>

              <Box bg="tomato" height="279px"></Box>
              <Box bg="tomato" height="279px"></Box>
              <Box bg="tomato" height="279px"></Box>
              <Box bg="tomato" height="279px"></Box>
            </SimpleGrid>
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

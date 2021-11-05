import { Flex, Box, Text, SimpleGrid, useBreakpointValue, Tooltip, Avatar, Image } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface Continent {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  quantity_countries: number;
  quantity_languages: number;
  quantity_popular_cities: number;
  popular_cities: {
    country: string;
    city: string;
    image: string;
    flag: string;
  }[];
}

interface ContinentProps {
  continent: Continent;
}

export default function Contients({ continent }: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <>
      <Head>
        <title>wordtrip | {continent.name}</title>
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
            backgroundImage={`url(${continent.image})`}
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
                {continent.name}
              </Text>
            </Flex>
          </Box>


          <Box as="section" px={["5", "5", "20"]} my="10">
            <SimpleGrid minChildWidth="220px" spacing="40px" color="darkblue.text">
              <Text>
                {continent.description}
              </Text>

              <Flex align="center" justify="center">
                <SimpleGrid columns={3} spacing={17}>
                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">{continent.quantity_countries}</Text>
                    <Text fontWeight="500">países</Text>
                  </Box>

                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">{continent.quantity_languages}</Text>
                    <Text fontWeight="500">línguas</Text>
                  </Box>

                  <Box textAlign="center">
                    <Text color="highlight.500" fontSize="5xl" fontWeight="500">{continent.quantity_popular_cities}</Text>
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

          <Box as="section" px={["5", "5", "20"]} my="10">
            <Text as="h1" fontSize="2xl" color="dark.heading" fontWeight="bold">Cidades +100</Text>

            <SimpleGrid minChildWidth="256px" spacing={5} mt="10">
              {continent.popular_cities.map((city) => (
                <Box key={city.city} w="256px" borderWidth="1px" borderColor="highlight.100" borderRadius="lg" overflow="hidden">
                  <Image src={city.image} alt={city.city} h="173" w="100%" />

                  <Box
                    p="4"
                    as="h4"
                    fontSize="2rem"
                    color="dark.heading"
                    fontWeight="bold"
                  >
                    {city.city}
                  </Box>

                  <Flex align="center" justify="space-between" p={["2", "4", "4", "4"]}>
                    <Text as="span" color="dark.info.500" fontSize="1rem">
                      {city.country}
                    </Text>

                    <Avatar src={city.flag} size={isWideVersion ? 'md' : 'sm'} />
                  </Flex>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  try {
    const continent = await api.get(`/continents/${slug}`);

    return {
      props: { continent: continent.data },
    };
  } catch (error) {
    alert(error.message);
  }
};

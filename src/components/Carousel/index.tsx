import Link from 'next/link';
import { Img, Text, Flex } from '@chakra-ui/react';

import { Autoplay, Navigation, Pagination, EffectFade, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

export function Carousel() {
  return (
    <Swiper
      className={`${styles.swiper}`}
      modules={[Autoplay, Navigation, Pagination, EffectFade]}
      autoplay={{ "delay": 3000 }}
      navigation
      pagination={{ "clickable": true }}
      loop
      effect={'fade'}
      slidesPerView={1}
      spaceBetween={50}
      style={
        {
          '--swiper-navigation-color': '#FFBA08',
          '--swiper-pagination-color': '#FFBA08',
        }
      }
    >
      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continents/america-norte`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              América do Norte
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">

            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continente/america-sul`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              América do Sul
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">

            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continente/africa`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              África
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">

            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continente/asia`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              Ásia
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">

            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1560394638-7b2346507d03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continente/europa`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              Europa
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">
              O continente mais antigo.
            </Text>
          </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide
        style={{
          'background-image': `url(https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1207&q=80)`,
          'backgroundPosition': 'center',
          'backgroundSize': 'cover',
        }}
      >
        <Link href={`/continente/oceania`} passHref>
          <Flex
            w="100%"
            h="100%"
            justify="center"
            align="center"
            direction="column"
          >
            <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
              Oceania
            </Text>

            <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">

            </Text>
          </Flex>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}


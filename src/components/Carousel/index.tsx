import Link from 'next/link';

import { Text, Flex } from '@chakra-ui/react';

import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './styles.module.scss';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

interface CarouselProps {
  continents: {
    slug: string;
    name: string;
    description: string;
    image: string;
  }[];
}

export function Carousel({ continents }: CarouselProps) {
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
      {continents.map((continent) => (
        <SwiperSlide
          key={continent.slug}
          style={{
            'backgroundImage': `url(${continent.image})`,
            'backgroundPosition': 'center',
            'backgroundSize': 'cover',
          }}
        >
          <Link href={`/continents/${continent.slug}`} passHref>
            <Flex
              w="100%"
              h="100%"
              justify="center"
              align="center"
              direction="column"
            >
              <Text color="light.heading" fontWeight="500" fontSize="xxx-large" cursor="pointer">
                {continent.name}
              </Text>

              <Text color="light.heading" fontWeight="500" fontSize="x-large" cursor="pointer">
                {continent.description}
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper >
  )
}





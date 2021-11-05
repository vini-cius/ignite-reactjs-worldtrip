import { NextApiRequest, NextApiResponse } from "next";

async function continents(request: NextApiRequest, response: NextApiResponse) {
  const continents = [
    {
      slug: "america-norte",
      name: "América do Norte",
      subtitle: "É um subcontinente que compreende a porção setentrional do continente americano.",
      image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia).",
      quantity_countries: 23,
      quantity_languages: 10,
      quantity_popular_cities: 10,
      popular_cities: [
        {
          country: "Estados Unidos",
          city: "Nova York",
          image: "https://images.unsplash.com/photo-1546436836-07a91091f160?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80",
          flag: "https://flagcdn.com/w320/us.png",
        },
        {
          country: "Canadá",
          city: "Toronto",
          image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9yb250b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/ca.png",
        },
      ],
    },
    {
      slug: "america-sul",
      name: "América do Sul",
      subtitle: "É um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.",
      image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      description: "A América do Sul é um continente[2][3] que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.[4][5] A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake.",
      quantity_countries: 12,
      quantity_languages: 5,
      quantity_popular_cities: 20,
      popular_cities: [
        {
          country: "Brasil",
          city: "Rio de Janeiro",
          image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmlvJTIwZGUlMjBqYW5laXJvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/br.png",
        },
        {
          country: "Argentina",
          city: "Buenos Aires",
          image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVlbm9zJTIwYWlyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/ar.png",
        },
        {
          country: "Chile",
          city: "Santiago",
          image: "https://images.unsplash.com/photo-1595113230152-956f9b179e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/cl.png",
        },
        {
          country: "Colômbia",
          city: "Bogotá",
          image: "https://images.unsplash.com/photo-1635079645011-eab879c84f59?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9nb3QlQzMlQTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/co.png",
        },

      ],
    },
    {
      slug: "africa",
      name: "África",
      subtitle: "O terceiro continente mais extenso.",
      image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
      description: "A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005[1]), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.[2]",
      quantity_countries: 54,
      quantity_languages: 17,
      quantity_popular_cities: 15,
      popular_cities: [
        {
          country: "África do Sul",
          city: "Maputo",
          image: "https://images.unsplash.com/photo-1526998758291-f87c4c1a8fff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
          flag: "https://flagcdn.com/w320/za.png",
        },
        {
          country: "Egito",
          city: "Cairo",
          image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/eg.png",
        },
        {
          country: "Marrocos",
          city: "Rabat",
          image: "https://images.unsplash.com/photo-1597081315272-a8b558ca4e86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/ma.png",
        },
        {
          country: "Nigéria",
          city: "Lagos",
          image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
          flag: "https://flagcdn.com/w320/ng.png",
        },
      ],
    },
    {
      slug: "asia",
      name: "Ásia",
      subtitle: "O maior dos continentes.",
      image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.[1]",
      quantity_countries: 48,
      quantity_languages: 20,
      quantity_popular_cities: 25,
      popular_cities: [
        {
          country: "China",
          city: "Pequim",
          image: "https://images.unsplash.com/photo-1510001618818-4b4e3d86bf0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/cn.png",
        },
        {
          country: "Filipinas",
          city: "Manila",
          image: "https://images.unsplash.com/photo-1601486782586-f3066470aa53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
          flag: "https://flagcdn.com/w320/ph.png",
        },
        {
          country: "Índia",
          city: "Chennai",
          image: "https://images.unsplash.com/photo-1580968668595-57ce9c12e1d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
          flag: "https://flagcdn.com/w320/in.png",
        },
        {
          country: "Japão",
          city: "Tokio",
          image: "https://images.unsplash.com/photo-1583084647979-b53fbbc15e79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80",
          flag: "https://flagcdn.com/w320/jp.png",
        },
        {
          country: "Coreia do Sul",
          city: "Seul",
          image: "https://images.unsplash.com/photo-1595113318095-b9f9f8d8f8a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/kr.png",
        }
      ],
    },
    {
      slug: "europa",
      name: "Europa",
      subtitle: "O continente mais antigo.",
      image: "https://images.unsplash.com/photo-1560394638-7b2346507d03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
      quantity_countries: 44,
      quantity_languages: 30,
      quantity_popular_cities: 27,
      popular_cities: [
        {
          country: "Reino Unido",
          city: "Londres",
          image: "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
          flag: "https://flagcdn.com/w320/gb.png",
        },
        {
          country: "França",
          city: "Paris",
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80",
          flag: "https://flagcdn.com/w320/fr.png",
        },
        {
          country: "Itália",
          city: "Roma",
          image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/it.png",
        },
        {
          country: "Espanha",
          city: "Madri",
          image: "https://images.unsplash.com/photo-1627754332050-f8daf87fc5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/es.png",
        },
        {
          country: "Alemanha",
          city: "Berlim",
          image: "https://images.unsplash.com/photo-1605968821759-28461ad67f72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
          flag: "https://flagcdn.com/w320/de.png",
        },
      ],
    },
    {
      slug: "oceania",
      name: "Oceania",
      subtitle: "É uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia).",
      image: "https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1207&q=80",
      description: "Oceania ou Oceânia[nota 1] é uma região geográfica[1][2][3] composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes.",
      quantity_countries: 14,
      quantity_languages: 5,
      quantity_popular_cities: 10,
      popular_cities: [
        {
          country: "Australia",
          city: "Sydney",
          image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3lkbmV5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/au.png",
        },
        {
          country: "Nova Zelândia",
          city: "Wellington",
          image: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsbGluZ3RvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/nz.png",
        },
        {
          country: "Austrália",
          city: "Canberra",
          image: "https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYmVycmF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          flag: "https://flagcdn.com/w320/au.png",
        }
      ],
    }
  ];

  return response.json(continents);
};

export default continents;

import { NextApiRequest, NextApiResponse } from "next";

async function continents(request: NextApiRequest, response: NextApiResponse) {
  const continents = [
    {
      slug: "america-norte",
      name: "América do Norte",
      description: "É um subcontinente que compreende a porção setentrional do continente americano.",
      image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      slug: "america-sul",
      name: "América do Sul",
      description: "É um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.",
      image: "https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    {
      slug: "africa",
      name: "África",
      description: "O terceiro continente mais extenso.",
      image: "https://images.unsplash.com/photo-1519659528534-7fd733a832a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80",
    },
    {
      slug: "asia",
      name: "Ásia",
      description: "O maior dos continentes.",
      image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
    },
    {
      slug: "europa",
      name: "Europa",
      description: "O continente mais antigo.",
      image: "https://images.unsplash.com/photo-1560394638-7b2346507d03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      slug: "oceania",
      name: "Oceania",
      description: "É uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia).",
      image: "https://images.unsplash.com/photo-1595263187083-1334b774dfb2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1207&q=80",
    }
  ];

  return response.json(continents);
};

export default continents;

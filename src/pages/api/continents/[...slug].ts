import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../services/api";

async function continents(request: NextApiRequest, response: NextApiResponse) {
  const { slug } = request.query;

  const continents = await api.get(`/continents`);

  const continent = continents.data.find(
    (continent) => continent.slug === slug[0]
  );

  return response.json(continent);
};

export default continents;

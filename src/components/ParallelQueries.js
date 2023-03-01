
import { useQueries } from "react-query";

import axios from 'axios';

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const ParallelQueries = ({ heroIds }) => {
  console.log(heroIds,"-----");
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ['super-hero', id],
        queryFn: () => fetchSuperHeroes(id)

      }
    })
  )
  console.log({queryResult});
  return (
    <div>ParallelQueries</div>
  )
}

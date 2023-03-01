import { useAddSuperHeroData, useSuperHeroesData } from "../hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
import { useState } from "react";



export const RQSuperHeroesPage = () => {

  const [name, setName] = useState('');
  const [alterEgo, setAlterEgo] = useState('');

  const onSuccess = () => {
    console.log("Perform side effect after data fetching ");
  }
  const onError = () => {
    console.log("Perform side effect after encountering error ");
  }

  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);
  
  const {mutate:addHero}=useAddSuperHeroData()
  // console.log("data", data);

  const handleAddHeroClick = () =>{
    console.log({name,alterEgo});
    const hero = {name,alterEgo}
    addHero(hero)
  }
  console.log({ isFetching, isLoading });
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>

  }
  return (
    <div>
      <h2>Request Query Page....</h2>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <input type='text' value={alterEgo} onChange={(e) => setAlterEgo(e.target.value)} />
        <button onClick={handleAddHeroClick}>Add  Hero</button>
      </div>
      <button onClick={refetch}>Fetch Heroes</button>
      {data && data?.map((hero) => {
        return <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      })}
      {/*
        data && data?.data?.data.map((hero) => {
          return <div key={hero}>
            <Link to={`/rq-super-heroes/${hero}`}>{hero}</Link>

          </div>
        })
        */
      }
    </div>
  )
}

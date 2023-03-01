import { useState, useEffect } from "react";
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error,setError] = useState('');
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setIsLoading(false)
    }).catch(error =>{
      setError(error.message);
      setIsLoading(false)
    })
  }, [])
  console.log(isLoading);
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if(error){
    return <h2>{error}</h2>
  }
  return (
    <div>
      <h2>SuperHeroesPage</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </div>
  )
}

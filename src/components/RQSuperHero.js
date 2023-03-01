import { useParams } from "react-router-dom"
import { useSuperHeroData } from "../hooks/useSuperHeroData"

export const RQSuperHero = () => {
    const { heroId } = useParams();
    const { isLoading, data:resp, isError, error } = useSuperHeroData(heroId);
    console.log("data",resp);
    
    if (isLoading) {
        return <h2>LOADING....</h2>
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {resp && resp.data.name}
        </div>
    )
}

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SearchPage = () => {

    const [searchSerie, setSearchSerie] = useState<any>([])

    const {name} = useParams()

    const serieSearch = async() => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1&query=${name}&include_adult=false`)
        setSearchSerie(response.data.results)
        console.log(response.data.results)
    }

    useEffect(() => {
        serieSearch()
    }, [])

    return(
        <ul>
            {searchSerie.map((s: any) => (
                <li key={s.id}>{s.name}</li>
            ))}
        </ul>
    )
}
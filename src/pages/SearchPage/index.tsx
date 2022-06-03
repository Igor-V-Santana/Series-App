import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardSerieSearch } from "../../components/CardSerieSearch";
import { HeaderSearch } from "../../components/HeaderSearch";
import { Navigation } from "../../components/Navigation";
import { useFavorites } from "../../hooks/useFavorites";

type teste = {
    id: number; 
    name: string; 
    overview: string; 
    poster_path: string; 
    first_air_date: string
}

export const SearchPage = () => {

    const [searchSeries, setSearchSeries] = useState<teste[]>([])

    const {name} = useParams()
    const {favorites, setFavorites} = useFavorites()

    const serieSearch = async() => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1&query=${name}&include_adult=false`)
        setSearchSeries(response.data.results)
    }
      
    useEffect(() => {
        serieSearch()
    }, [])

    useEffect(() => {
        serieSearch()
    }, [name])

    return(
        <div className="searchPage">
            <Navigation />
            <HeaderSearch />
            {searchSeries.length > 0 
                ? 
                searchSeries.filter(s => s.poster_path).map(searchSerie => <CardSerieSearch searchSerie={searchSerie} key={searchSerie.id} />) 
                : 
                <p>Nenhuma série foi encontrada com esse nome.</p>
            }
        </div>
    )
}
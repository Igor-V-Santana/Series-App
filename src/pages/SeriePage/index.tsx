import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../../hooks/useFavorites"
import apiClient from "../../services/apiClient"
import './seriePage.css'

export const SeriePage = () => {
    
    const {id} = useParams()

    const [serie, setSerie] = useState<any>([])
    const {favorites, setFavorites} = useFavorites()

    const getSerie = async() => {
        const response = await apiClient.get(`/${id}?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR`)
        console.log(response.data)
        setSerie(response.data)
    }

        const favoritar = (seriee: any) => {
        if (favorites.includes(seriee)){
            desfavoritar(seriee)
        } else {
            setFavorites([...favorites, seriee])
            console.log(favorites)
        }
    }

    const desfavoritar = (seriee: any) => {
        setFavorites(favorites.filter((s : any) => s !== seriee))
    }

    useEffect(() => {
        getSerie()
    }, [])

    return(
        <div className="hero">
            <div className="bg">
                <img src={`https://image.tmdb.org/t/p/original//${serie.backdrop_path}`} alt="" />
            </div>
            <div className="posterPath">
                <img src={`https://www.themoviedb.org/t/p/original${serie.poster_path}`} alt="Poster" />
                <div>
                    <h3>{serie.name}</h3>
                    <p>{serie.overview}</p>
                    {favorites.includes(serie) ? <button onClick={() => desfavoritar(serie)}>desfavoritar</button> : <button onClick={() => favoritar(serie)}>favoritar</button>}
                </div>
            </div>
        </div>
    )
}
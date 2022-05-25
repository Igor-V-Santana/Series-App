import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../../hooks/useFavorites"
import apiClient from "../../services/apiClient"
import { BsHeart, BsHeartFill, BsFillPlayFill } from 'react-icons/bs'
import './seriePage.css'

export const SeriePage = () => {
    
    const {id} = useParams()

    const [serie, setSerie] = useState<any>([])

    const getSerie = async() => {
        const response = await apiClient.get(`/${id}?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR`)
        setSerie(response.data)
        console.log(response.data)
    }

    //     const favoritar = (seriee: any) => {
    //     if (favorites.includes(seriee)){
    //         desfavoritar(seriee)
    //     } else {
    //         setFavorites([...favorites, seriee])
    //         localStorage.setItem('itens', JSON.stringify(favorites));
    //     }
    // }

    // const desfavoritar = (seriee: any) => {
    //     setFavorites(favorites.filter((s : any) => s !== seriee))
    // }

    useEffect(() => {
        getSerie()
    }, [])

    return(
        <>
        <div className="hero">
            <div className="bg">
                <img src={`https://image.tmdb.org/t/p/original//${serie.backdrop_path}`} alt="backDropPath" />
            </div>
            <div className="posterPath">
                <img src={`https://www.themoviedb.org/t/p/original${serie.poster_path}`} alt="Poster" />
                <div className="detail">
                    <h3>{serie.name}</h3>
                    <p>{serie.overview}</p>
                    <ul className="genres">
                        {serie.genres?.map((genre: any) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <div className="btn">
                        <button><BsHeart color="#343090"/></button>
                        <button className="trailer"><BsFillPlayFill color="#343090"/>trailer</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
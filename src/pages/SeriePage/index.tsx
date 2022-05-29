import { useEffect, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../../hooks/useFavorites"
import apiClient from "../../services/apiClient"
import { BsHeart, BsHeartFill, BsFillPlayFill } from 'react-icons/bs'
import './seriePage.css'
import { Title } from "../../components/Title"
import { useModal } from "../../hooks/useModal"

export const SeriePage = () => {
    
    const {id} = useParams()

    const [serie, setSerie] = useState<any>([])
    const [seasons, setSeasons] = useState<any>([])
    const [trailers, setTrailers] = useState<any>([])
    const {modal, setModal} = useModal()
    const {favorites, setFavorites} = useFavorites()

    const getSerie = async() => {
        const response = await apiClient.get(`/${id}?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR`)
        setSerie(response.data)
        setSeasons(response.data.seasons)
    }

    const getTrailers = async() => {
        const response = await apiClient.get(`/${id}/videos?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=en-US`)
        setTrailers(response.data.results)
    }

    const favoriteVideosId = useMemo<string[]>(() => {
        const favoriteVideosIdArr: null | string[] = [];

        if (favorites.length > 0){
                
          favorites.map((f: any) => {
            favoriteVideosIdArr.push(f.id);
          });
        }

        return favoriteVideosIdArr;
    }, [favorites]);
    
    const handleAddNewFavorite = async (serie: any) => {
        setFavorites([...favorites, serie])
    };
    
    const handleRemoveAFavorite = async (serie: any) => {
        setFavorites(favorites.filter((fv: any) => fv.id !== serie.id))
    };
    
    const checkIThatVideoIsAfavoriteVideo = (id: any) => {
        const videoId = favoriteVideosId.filter((fv) => {
          return fv == id;
        });
    
        if (videoId.length > 0) return true;
        else return false;
    };
    
    const handleFavorite = async (e: React.MouseEvent, id: any, serie: any) => {
        e.preventDefault();
    
        if (checkIThatVideoIsAfavoriteVideo(id)) {
          handleRemoveAFavorite(serie);
          const newItems = JSON.parse(localStorage.getItem('names') || "{}");
          const filtered = newItems.filter((item:any) => item.id !== serie.id);
          localStorage.setItem("names", JSON.stringify(filtered));
        } else {
          handleAddNewFavorite(serie);
          localStorage.setItem("names", JSON.stringify([...favorites, serie]));
        }
    };

    const openModal = () => {
        setModal(true)
        getTrailers()
    }

    useEffect(() => {
        getSerie()
        const newItems = JSON.parse(localStorage.getItem('names') || "{}");
        setFavorites(newItems)
    }, [])

    return(
        <>
            <div className={modal ? 'modal-bg' : 'modal-of'}>
                <div className='modal'>
                    <div>
                        <button onClick={() => setModal(false)}>X</button>
                    </div>
                    {trailers.length > 0 ? <div className='trailers'>{trailers.filter((trailer: any) => trailer.type === 'Trailer').map((trailerOfficial: any) => (
                        <iframe key={trailerOfficial.id} width="700" height="400" src={`https://www.youtube.com/embed/${trailerOfficial.key}`}></iframe>
                    ))}</div> : <p>Infelizmente não encontramos nenhum trailer para essa série!</p>}
                </div>
            </div>
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
                            <button className="favorite" onClick={(e) => handleFavorite(e, id, serie)}>
                                {checkIThatVideoIsAfavoriteVideo(serie.id) 
                                ? 
                                <BsHeartFill />
                                : 
                                <BsHeart /> }
                            </button>
                            <button className="trailer" onClick={openModal}><BsFillPlayFill color="#343090"/>trailer</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="seasonsPage">
                <div className="seasons">
                    <Title title="Temporadas"/>
                    <ul>
                        {seasons.filter((s: any) => s.name !== 'Especiais').map((season: any) => (
                            <li key={season.id}>
                                <img src={`https://image.tmdb.org/t/p/original//${season.poster_path}`} alt="PosterSeason" />
                                <div>
                                    <h3>{season.name}</h3>
                                    <p>{season.overview}</p>
                                    <p>{season.episode_count} episódios</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
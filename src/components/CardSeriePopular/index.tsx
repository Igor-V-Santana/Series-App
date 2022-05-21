import { useState } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { seriePopularProps } from './CardSeriePopularType';

export const CardSeriePopular = ({seriePopular} : seriePopularProps) => {
    const [favoritos, setFavoritos] = useState<any>([])

    const favoritar = (serie: any) => {
        if (favoritos.includes(seriePopular.name)){
            desfavoritar(serie)
        } else {
            setFavoritos([...favoritos, serie])
            console.log(favoritos)
        }
    }

    const desfavoritar = (serie: any) => {
        setFavoritos(favoritos.filter((s : any) => s !== serie))
    }

    return(
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${seriePopular.poster_path}`} alt="seriePopularPoster" />
            <div className="cardInfo">
                <p>{seriePopular.name}</p>
                <p>{seriePopular.first_air_date}</p>
                {favoritos.includes(seriePopular.name) ? <button onClick={() => desfavoritar(seriePopular.name)}>desfavoritar</button> : <button onClick={() => favoritar(seriePopular.name)}>favoritar</button>}
            </div>
        </div>
    )
}
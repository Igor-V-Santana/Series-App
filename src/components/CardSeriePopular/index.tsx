import { Link } from 'react-router-dom';
import './card.css';
import { seriePopularProps } from './CardSeriePopularType';

export const CardSeriePopular = ({seriePopular} : seriePopularProps) => {
    
    const date = new Date(seriePopular.first_air_date).toLocaleDateString('pt-br');

    return(
        <Link to={`/${seriePopular.id}`} className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${seriePopular.poster_path}`} alt="seriePopularPoster" />
            <div className="cardInfo">
                <p>{seriePopular.name}</p>
                <p>{date}</p>
            </div>
        </Link>
    )
}
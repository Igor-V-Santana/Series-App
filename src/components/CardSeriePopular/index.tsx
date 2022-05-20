import './card.css';
import { seriePopularProps } from './CardSeriePopularType';

export const CardSeriePopular = ({seriePopular} : seriePopularProps) => {
    return(
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${seriePopular.poster_path}`} alt="seriePopularPoster" />
            <div className="cardInfo">
                <p>{seriePopular.name}</p>
                <p>{seriePopular.first_air_date}</p>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import { serieSearchProps } from "./CardSerieSearchProps"
import './serieSearch.css'

export const CardSerieSearch = ({ searchSerie }: serieSearchProps) => {
    return (
        <Link to={`/${searchSerie.id}`}className="serieSearch">
            <img src={`https://www.themoviedb.org/t/p/original/${searchSerie.poster_path}`} alt="searchSeriePoster" />
            <div className="serieSearch-info">
                <h3>{searchSerie.name}</h3>
                <p className="overview">{searchSerie.overview}</p>
            </div>
        </Link>
    )
}
import './card.css';

type seriePopularProps = {
    seriePopular: {
        id: number,
        name: string,
        poster_path: string,
        first_air_date: string,
    }
}

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
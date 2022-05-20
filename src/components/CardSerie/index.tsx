import './card.css';

type serieProps = {
    serie: {
        id: number,
        name: string,
        poster_path: string,
        first_air_date: string,
    }
}

export const CardSerie = ({serie} : serieProps) => {
    return(
        <div className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${serie.poster_path}`} alt="seriePoster" />
            <div className="cardInfo">
                <p>{serie.name}</p>
                <p>{serie.first_air_date}</p>
            </div>
        </div>
    )
}
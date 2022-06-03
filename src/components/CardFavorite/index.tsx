import { Link } from 'react-router-dom'
import './cardFavorite.css'

export const CardFavorite = ({favorite} : any) => {
    return(
        <Link to={`/${favorite.id}`} className='cardFavorite'>
            <img src={`https://www.themoviedb.org/t/p/original${favorite.poster_path}`} alt="Poster" />
            {favorite.name}
        </Link>
    )
}
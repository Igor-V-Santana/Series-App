import { useEffect } from "react"
import { CardFavorite } from "../../components/CardFavorite"
import { useFavorites } from "../../hooks/useFavorites"
import './favoritesPage.css'

export const FavoritesPage = () => {

    const {favorites, setFavorites} = useFavorites()
    console.log(favorites)

    useEffect(() => {
        const newItems = JSON.parse(localStorage.getItem('names') || "{}");
        setFavorites(newItems)
    }, [])

    return (
        <div className="favoritesPage">
            <div className="favoritesContainer">
                {favorites.filter((fav:any) => fav.name).map((favorite: any) => <CardFavorite favorite={favorite} key={favorite.id + 1}/> )}
            </div>
        </div>
    )
}
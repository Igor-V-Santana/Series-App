import { useEffect } from "react"
import { CardFavorite } from "../../components/CardFavorite"
import { Navigation } from "../../components/Navigation"
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
        <>
            <Navigation />
            <div className="favoritesPage">
                <div className="favoritesContainer">
                    {favorites.length > 0 ? favorites.filter((fav:any) => fav.name).map((favorite: any) => <CardFavorite favorite={favorite} key={favorite.id + 1}/> ) 
                    : 
                    <></>}
                </div>
                {favorites.length <= 0 || favorites.length === undefined? <p>Você não possuí séries favoritas. Para favoritar, pesquise por alguma série e clique no ícone de coração =D</p> : <></>}
            </div>
        </>
    )
}
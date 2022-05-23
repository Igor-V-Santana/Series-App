import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import { CardSeriePopular } from "../../components/CardSeriePopular"
import './home.css'
import { Header } from "../../components/Header"
import { CardSerieLancamento } from "../../components/CardSerieLancamento"
import { Title } from "../../components/Title"

export const HomePage = () => {

    const [seriesPopular, setSeriesPopular] = useState([])
    const [seriesLancamentos, setSeriesLancamentos] = useState([])

    const getSeries = async() => {
        const response = await apiClient.get("/popular?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1")
        setSeriesPopular(response.data.results)
    }

    const getSeriesLancamentos = async() => {
        const response = await apiClient.get("/airing_today?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1")
        setSeriesLancamentos(response.data.results)
    }

    useEffect(() => {
        getSeries()
        getSeriesLancamentos()
    }, [])

    // const favoritar = (serie: any) => {
    //     if (favorites.includes(serie)){
    //         desfavoritar(serie)
    //     } else {
    //         setFavorites([...favorites, serie])
    //         console.log(favorites)
    //     }
    // }

    // const desfavoritar = (serie: any) => {
    //     setFavorites(favorites.filter((s : any) => s !== serie))
    // }

    return(
        <>
            <Header />
            <div className="home">
                <div className="container">
                <Title title="Populares" />
                    <div className="containerSeriesPopulares">
                        {seriesPopular.map((seriePopular: any) => <CardSeriePopular seriePopular={seriePopular} key={seriePopular.id} />)}
                    </div>
                    <Title title="Lançamentos" />
                    <div className="containerSeriesPopulares">
                        {seriesLancamentos.map((serieLancamento: any) => <CardSerieLancamento serieLancamento={serieLancamento} key={serieLancamento.id} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
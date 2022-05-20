import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import { CardSeriePopular } from "../../components/CardSeriePopular"
import './home.css'
import { Header } from "../../components/Header"
import { CardSerieLancamento } from "../../components/CardSerieLancamento"

export const Home = () => {

    const [seriesPopular, setSeriesPopular] = useState([])
    const [seriesLancamentos, setSeriesLancamentos] = useState([])

    const getSeries = async() => {
        const response = await apiClient.get("/popular?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1")
        setSeriesPopular(response.data.results)
        console.log(response.data.results)
    }

    const getSeriesLancamentos = async() => {
        const response = await apiClient.get("/airing_today?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=pt-BR&page=1")
        setSeriesLancamentos(response.data.results)
        console.log(response.data.results)
    }

    useEffect(() => {
        getSeries()
        getSeriesLancamentos()
    }, [])

    return(
        <>
            <Header />
            <div className="home">
                <div className="container">
                <h3>Series Populares</h3>
                    <div className="containerSeriesPopulares">
                        {seriesPopular.map((seriePopular: any) => <CardSeriePopular seriePopular={seriePopular} key={seriePopular.id}/>)}
                    </div>
                    <h3>Lançamentos</h3>
                    <div className="containerSeriesPopulares">
                        {seriesLancamentos.map((serieLancamento: any) => <CardSerieLancamento serieLancamento={serieLancamento} key={serieLancamento.id} />)}
                    </div>
                </div>
            </div>
        </>
    )
}
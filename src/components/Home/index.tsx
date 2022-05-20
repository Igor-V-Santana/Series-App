import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import { CardSerie } from "../CardSerie"

export const Home = () => {

    const [seriesPopular, setSeriesPopular] = useState([])

    const getSeries = async() => {
        const response = await apiClient.get("/popular?api_key=f2fc535d6d8937dfb8102f933d32b2ce&language=en-US&page=1")
        setSeriesPopular(response.data.results)
        console.log(response.data.results)
    }

    useEffect(() => {
        getSeries()
    }, [])

    return(
        <div className="container">
            {seriesPopular.map((serie: any) => <CardSerie serie={serie} key={serie.id}/>)}
        </div>
    )
}
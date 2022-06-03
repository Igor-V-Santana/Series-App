import { Link } from "react-router-dom"
import { serieLancamentoProps } from "./CardSerieLancamentoType"


export const CardSerieLancamento = ({serieLancamento} : serieLancamentoProps) => {

    const date = new Date(serieLancamento.first_air_date).toLocaleDateString('pt-br');

    return(
        <Link to={`/${serieLancamento.id}`}className="card">
            <img src={`https://www.themoviedb.org/t/p/original/${serieLancamento.poster_path}`} alt="serieLancamentoPoster" />
            <div className="cardInfo">
                <p>{serieLancamento.name}</p>
                <p>{date}</p>
            </div>
        </Link>
    )
}
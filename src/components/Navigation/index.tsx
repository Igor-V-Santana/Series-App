import { Link } from "react-router-dom"
import './navigation.css'

export const Navigation = () => {
    return (
        <nav>
            <div className="logo">
                Séries
            </div>
            <div className="navigation">
                <Link to="/">home</Link>
                <Link to="/favoritos">favoritos</Link>
                <Link to="/">lançamentos</Link>
                <Link to="/">populares</Link>
            </div>
        </nav>
    )
}
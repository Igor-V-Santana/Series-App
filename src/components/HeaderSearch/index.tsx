import { useNavigate } from 'react-router-dom'
import { useSearch } from '../../context/SearchContext'
import './headerSearch.css'

export const HeaderSearch = () => {

    const {search, setSearch} = useSearch()
    const navigate = useNavigate()

    const searchSerie = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(search){
            navigate(`/search/${search}`)
        }
    }

    return(
        <div className="headerSearch black">
            <form onSubmit={searchSerie}>
                <input type="text" onChange={(e) => setSearch(e.target.value)} value={search}/>
            </form>
        </div>
    )
}
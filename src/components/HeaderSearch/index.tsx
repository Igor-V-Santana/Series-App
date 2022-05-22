import { useSearch } from '../../context/SearchContext'
import './headerSearch.css'

export const HeaderSearch = () => {

    const {search, setSearch} = useSearch()
    
    return(
        <div className="headerSearch">
            {search}
        </div>
    )
}
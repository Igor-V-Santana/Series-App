import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';

export const HeaderInputField = () => {

    const navigate = useNavigate()

    const {search, setSearch} = useSearch()

    const searchSerie = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(search){
            navigate(`/search/${search}`)
        }
    }

    return (
        <div className='header'>
            <form onSubmit={searchSerie}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Busque por uma série ou desenho..."/>
                <button>Procurar</button>
            </form>
        </div>
    )
}
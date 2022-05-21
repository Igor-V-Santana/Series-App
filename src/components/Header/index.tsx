import './header.css';

export const Header = () => {
    return (
        <div className='containerHeader'>
            <header />
            <div className='header'>
                <form>
                    <input type="text" />
                    <button>Procurar</button>
                </form>
            </div>
        </div>
    )
}
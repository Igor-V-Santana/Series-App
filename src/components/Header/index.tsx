import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

export const Header = () => {

    const navigate = useNavigate()

    const [text, setText] = useState('')

    const searchSerie = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(text){
            navigate(`/search/${text}`)
        }
    }

    return (
        <div className='containerHeader'>
            <header />
            <div className='header'>
                <form onSubmit={searchSerie}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    <button>Procurar</button>
                </form>
            </div>
        </div>
    )
}
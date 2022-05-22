import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import './header.css';

export const Header = () => {

    const navigate = useNavigate()

    const {search, setSearch} = useSearch()

    const searchSerie = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(search){
            navigate(`/search/${search}`)
        }
    }

    return (
        <div className='containerHeader'>
            <header />
            <div className='header'>
                <form onSubmit={searchSerie}>
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
                    <button>Procurar</button>
                </form>
            </div>
        </div>
    )
}
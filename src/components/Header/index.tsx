import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../../hooks/useSearch';
import { HeaderInputField } from '../HeaderInputField';
import { Navigation } from '../Navigation';

import './header.css';

export const Header = () => {
    return (
        <div className='containerHeader'>
            <Navigation />
            <HeaderInputField />
        </div>
    )
}
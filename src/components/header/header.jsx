import React from 'react';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown-solid.svg';

import './header.scss'

const Header = () => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/contact'>Contact</Link>
            <Link className='option' to='/signout'>Sign Out</Link>
        </div>
    </div>

)

export default Header;
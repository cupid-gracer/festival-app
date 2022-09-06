import React from 'react';
import './style.scss'
import logo from '../../assets/logo_white.png';

function Header(){
    return(
        <div className="header">
            <div className='header_name'>
                Amis du Festival
            </div>
            <div className='header_logo'>
                <img src={logo}/>
            </div>
        </div>
    )
}

export default  Header;
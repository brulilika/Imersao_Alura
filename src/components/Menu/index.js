import React from 'react';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';


function Menu(){ //todo nome de função deve ser com Maiusculo
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="logo" src={logo}  alt="Aluraflix logo"/>
            </a>

            <Button as="a" className ="ButtonLink" href="/">
               Novo vídeo
            </Button>


        </nav>
    );
}

export default Menu;
import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './menu.css';
import Button from '../Button';


function Menu(){ //todo nome de função deve ser com Maiusculo
    return (
        <nav className="Menu">
            <Link to="/"> 
                <img className="logo" src={logo}  alt="Aluraflix logo"/>
            </Link>

            <Button as={Link} className ="ButtonLink" to="/cadastro/video">
               Novo vídeo
            </Button>


        </nav>
    );
}

export default Menu;
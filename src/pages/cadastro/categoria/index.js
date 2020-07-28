import React from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria(){
    return(
        <PageDefault>
            <h1>Cadastros de Categorias </h1>

            <div>   
                <form>
                    <label>
                        Nome da Categoria:
                        <input type="text"/>
                    </label>

                    <button> Cadastrar </button>
                </form>
            </div>
            

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );

}

export default CadastroCategoria;
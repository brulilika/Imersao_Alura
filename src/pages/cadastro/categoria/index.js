import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategoria] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    
    //chave pode ser nome, descricao
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor, // _____ :'valor' -> fica em aberto oq pode ser
        })
    }

    function handleChange(evento) {
        setValue(
          evento.target.getAttribute('name'),
          evento.target.value
        );
      }

    return(
        <PageDefault>
            <h1>Cadastros de Categorias : {values.nome}</h1>

            <div>   
                <form onSubmit={function handleSubmit(evento){
                    evento.preventDefault();
                    setCategoria([
                        ...categorias,
                        values
                    ]);
                    setValues({valoresIniciais});
                    }
                }>
                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />
                <FormField
                    label="Descricao: "
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                <FormField
                    label="Cor: "
                    type="color"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />    

                    <button> Cadastrar </button>
                </form>
            </div>
            <div>
                <ul>
                    {categorias.map((categoria,indice)=>{
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.nome}
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );

}

export default CadastroCategoria;
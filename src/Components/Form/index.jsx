import styled from 'styled-components';
import { verdeEscuro } from '../UI/variaveis';

const Wrapp = styled.div`
width: 100%;
margin: 0 auto;
padding: 64px 0;

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

> form {
    float: right;
    display: flex;
    flex-direction: column;
    padding-right: 64px;
    align-items: flex-end;

    > input {
        float: right;
        margin: 25px 0;
        width: 490px;
        height: 70px;
        border-radius: 8px;
        border: 2px solid ${verdeEscuro};
        padding: 23px;
        @media (max-width: 800px){
        margin: 24px;
        width: 95%;
        margin-right: 0;
    }
    } 

    > button {
        width: 100px;
        background: ${verdeEscuro};
        color: #fff;
        padding: 12px 16px;
        border: none;
        border-radius: 8px;
        font-weight: 700;
    }
    @media (max-width: 800px){
        width: 100%;
        padding-right: 32px;
    }
}

> div {
    float: left;
    margin: 0 40px;
    max-width: 526px;
    > h3 {
        color: ${verdeEscuro};
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 40px;
        @media (max-width: 800px) {
            margin-top: 40px;
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
        }
    }
    
    > button {
        border: 2px solid #115850;
        border-radius: 8px;
        padding: 12px 16px;
        background: none;
        font-weight: 800;
        color: ${verdeEscuro};
        @media (max-width: 800px) {
            margin-bottom: 50px;
        }
    }
    
}
@media (max-width: 800px) {
        width: 100%;
        flex-direction: column;

    }
`;


function Form(props) {
    return (
        <Wrapp>
            <div>
                <h3>{props.texto}</h3>
            </div>
            <form action="">
                <label htmlFor="nome" hidden>Nome</label>
                <input type="text" placeholder='Nome' />
                <label htmlFor="email" hidden>E-mail</label>
                <input type="email" name="email" id="email" placeholder='E-mail' />
                <button>Assinar</button>
            </form>
        </Wrapp>
    )
}

export default Form;
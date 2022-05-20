import styled from 'styled-components';
import { verdeEscuro } from '../UI/variaveis';

const Wrapp = styled.div`
width: 65%;
margin: 0 auto;

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

> img {
    float: right;
    @media (max-width: 800px){
        width: 100%;
    }
}

> div {
    float: left;
    margin: 0 40px;
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


function HeroGeneric(props) {
    return (
        <Wrapp>
            <div>
                <h3>{props.texto}</h3>
                <button href={props.link}>{props.bt}</button>
            </div>
            <img src={props.img} alt="" />
        </Wrapp>
    )
}

export default HeroGeneric;
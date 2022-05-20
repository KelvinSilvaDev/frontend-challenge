import styled from 'styled-components';
import { verdeEscuro } from '../UI/variaveis';

const Wrapp = styled.div`
width: 100%;
margin: 0 auto;

display: flex;
flex-direction: row-reverse;
justify-content: space-evenly;
align-items: center;

background: #EAEFD9;

> img {
    float: right;
    @media (max-width: 800px){
        width: 100%;
    }
}

> div {
    float: left;
    margin: 0 40px;
    width: 540px;
    > h3 {
        color: ${verdeEscuro};
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        margin-bottom: 40px;
        text-align: right;
        @media (max-width: 800px) {
            margin-top: 40px;
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
            text-align: center;
        }
    }
    
    > button {
        border: 2px solid #115850;
        border-radius: 8px;
        padding: 12px 16px;
        background: none;
        font-weight: 800;
        color: ${verdeEscuro};
        float: right;
        @media (max-width: 800px) {
            float: none;
            margin-bottom: 50px;
            width: 90%;
            display: block;
            margin-right: auto;
            margin-left: auto;
        }
    }
    @media (max-width: 800px) {
        width: 100%;
    }
}
@media (max-width: 800px) {
        width: 100%;
        flex-direction: column;

    }
`;


function HeroGreen(props) {
    return (
        <Wrapp>
            <img src={props.img} alt="" />
            <div>
                <h3>{props.texto}</h3>
                <button href={props.link}>{props.bt}</button>
            </div>

        </Wrapp>
    )
}

export default HeroGreen;
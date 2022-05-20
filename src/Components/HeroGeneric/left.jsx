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
    float: left;
    margin: -35px 0 -10px 0;
    @media (max-width: 800px){
        width: 100%;
        display: none;
        margin: 40px 32px;
    }
    
}

> div {
    float: right;
    margin: 0 40px;
    > h3 {
        color: #FFF;
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
        border: 2px solid #FFF;
        border-radius: 8px;
        padding: 12px 16px;
        background: none;
        font-weight: 800;
        color: #FFF;
        @media (max-width: 800px) {
            margin-bottom: 50px;
        }
    }
    
}
@media (max-width: 800px) {
        margin-top: 0;
        padding-top: 40px;
        width: 100%;
        flex-direction: column;

    }
`;

const Mobile = styled.img `
display: none;
@media (max-width: 800px) {
    display: block !important;
    width: 100%;
}

`;


function HeroInvert(props) {
    return (
        <Wrapp>
            <img src={props.img} alt="" />
            <div>
                <h3>{props.texto}</h3>
                <button href={props.link}>{props.bt}</button>
            </div>
            <Mobile src={props.img} />
        </Wrapp>
    )
}

export default HeroInvert;
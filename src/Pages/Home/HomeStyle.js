
import styled from "styled-components";
import { textoEscuro, verdeEscuro } from "../../Components/UI/variaveis";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ArrowR from "../../Assets/ArrowR.svg"


export const MainHeader = styled.div``;


export const ServicesWrapp = styled.section`
    
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 20px;
    background: #ECECE2;

    @media(max-width: 800px){
        flex-direction: column;
        padding: 20px 24px;
    }

`;

export const CenterH2 = styled.h2`
text-align: center;
color: ${textoEscuro};
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;
`;

export const CenterLink = styled.a`
text-align: center;
color: ${verdeEscuro};
font-weight: 500;
font-size: 20px;
line-height: 24px;
margin: 0 auto 70px;
display: block;

    &:after {
        content: url(${ArrowR});
        font-family: Montserrat;
        font-weight: normal;
        font-style: normal;
        margin:0px 0px 0px 10px;
        text-decoration:none;
    }

`;

export const SectionCarousel = styled.section`
background-color: #FAFAFA;
padding: 20px 24px;
padding-top: 46px;

`;

export const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
]


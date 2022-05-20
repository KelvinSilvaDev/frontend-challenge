import React, { useState } from 'react';
import { Data } from './lista';
import styled from 'styled-components';
import V from "../../Assets/V.svg"
import Up from "../../Assets/ArrowUP.svg"
import { textoClaro, textoEscuro, verdeClaro, verdeEscuro } from '../UI/variaveis';


const AllWrapp = styled.div `
display: block;



`;

const AccordionSection = styled.div`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
/* position: relative; */
/* height: 110vh; */
height: auto;
background: #fff;

`;
const Container = styled.div`

width: 85%;
/* position: absolute;
top: 5%; */
/* box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3); */

`;

const CenterH2 = styled.h2`
text-align: center;
color: ${textoEscuro};
font-style: normal;
font-weight: 600;
font-size: 40px;
line-height: 48px;
background: none !important;
box-shadow: none;
margin-bottom: 32px;
`;  

const Wrapp = styled.div`

background: ${verdeClaro};
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;
margin: 5px 0;
max-height: 80px;

> h3 {
    padding: 2rem;
    font-size: 20px;
}

> span {
    padding-right: 20px;
}
`;

const Dropdown = styled.div`

margin-top: -10px;
padding: 24px;
padding-left: 32px;
background: ${verdeEscuro};
color: ${textoClaro};
line-height: 24px;
font-size: 17px;

`;

const CenterLink = styled.a`
text-align: center;
color: ${verdeEscuro};
font-weight: 500;
font-size: 20px;
line-height: 24px;
margin: 80px auto 70px;
display: block;

`;


const Accordion = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    return (
        <AllWrapp>
            <AccordionSection>
                <Container>
                <CenterH2>Perguntas frequentes</CenterH2>
                    {Data.map((item, index) => {
                        return (
                            <>
                                <Wrapp onClick={() => toggle(index)} key={index}>
                                    <h3>{item.question}</h3>
                                    <span>{clicked === index ? <img src={Up} /> : <img src={V} />}</span>
                                </Wrapp>
                                {clicked === index ? (

                                    <Dropdown>

                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                            </>
                        )
                    })}
                </Container>
            </AccordionSection>
            <CenterLink>LEIA MAIS</CenterLink>
        </AllWrapp>
    )
}


export default Accordion;
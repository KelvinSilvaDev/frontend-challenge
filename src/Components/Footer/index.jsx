import React, { Component } from 'react';
import { LogoDesktop } from '../Header/HeaderStyle';
import logo from "../../Assets/Frame 2566.svg"
import twitter from "../../Assets/twitter.svg"
import styled from "styled-components";
import { verdeClaro } from '../UI/variaveis';



const Wrapp = styled.footer`


padding-left: 200px;
background: ${verdeClaro};
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: stretch;
flex-wrap: nowrap;
align-content: center;

.FooterLeft {
    margin-right: 140px;
    @media (max-width: 800px){
        margin-right: 0;
    }
}


> div {
    margin-top: 64px;
    margin-bottom: 64px;

    > nav {
        display: flex;
        flex-direction: column;
    }
}
> p {
    
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
    color: #fff;

}

@media (max-width: 800px) {
    padding-left: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}
`;

const Logo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

> p, span {
    color: #fff;
}

> p{
    margin-top: 46px;

}

>span {
    margin-top: 10px;
}

>button {
    padding: 5px;
    border: none;
    border-radius: 40px;
    height: 40px;
}

> img:last-child {

    margin-top: 42px;
    width: 24px;
    height: 24px

}

@media (max-width: 800px) {
    align-items: center;
    padding-left: 32px;
    padding-right: 32px;
}

`;

const FooterSubMenu = styled.div`

width: 100%;
margin: 0 auto;

> h3 {
    color: #fff;
    text-align: left;
}

> nav a {
    color: #fff;
    text-decoration: none;
    text-align: left;
}

@media (max-width: 800px) {
    
    > h3 {
        text-align: center;
    }

    > nav a {
        text-align: center;
    }
}
`;



function Footer() {

    return (
        <>
            <Wrapp>
                <div className='FooterLeft'>
                    <Logo>
                        <img src={logo} className="App-logo" alt="logo" />




                        <p>R. Dr. Renato Paes de Barros, 33 Itaim Bibi, São Paulo/SP</p>
                        <span>faleconosco@cannect.com.br</span>
                        <img src={twitter} alt="" />
                        {/* <iconeT src={twitter}></iconeT> */}
                    </Logo>
                </div>
                <FooterSubMenu>
                    <h3>Mapa do site</h3>
                    <nav>
                        <a href="#">Cannabis medicinal</a>
                        <a href="#">Tratamentos</a>
                        <a href="#">Produtos</a>
                        <a href="#">Novidades</a>
                    </nav>
                </FooterSubMenu>
                <FooterSubMenu>
                    <h3>Mapa do site</h3>
                    <nav>
                        <a href="#">Dor crônica</a>
                        <a href="#">Saúde mental</a>
                        <a href="#">Oncologia e cuidados paliativos</a>
                        <a href="#">Neurologia</a>
                        <a href="#">Pediatria</a>
                        <a href="#">Bem-estar íntimo</a>
                        <a href="#">Cuidados com a pele</a>
                        <a href="#">Medicina esportiva</a>
                    </nav>
                </FooterSubMenu>
                <FooterSubMenu>
                    <h3>Institucional</h3>
                    <nav>
                        <a href="#">Quem somos</a>
                        <a href="#">Termos de uso</a>
                        <a href="#">Política de privacidade</a>
                    </nav>
                </FooterSubMenu>
            </Wrapp>
            <p style={{ background: "#5B945B", textAlign: "center", color: "#fff", paddingBottom: "40px" }}>Cannect 2022 ® Todos direitos reservados.</p>
        </>
    );

}

export default Footer;
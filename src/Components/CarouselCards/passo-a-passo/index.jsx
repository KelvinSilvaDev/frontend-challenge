import React, { Component } from 'react';
import styled from 'styled-components';
import { verdeEscuro } from '../../UI/variaveis';

export const PassoEsquerda = styled.div`
width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
justify-content: space-around;
align-items: center;

> iframe {
    width: 500px;
    height: 300px;
    float: left;
}

> div {
    float: right;
    display: grid;
    align-content: space-between;
    justify-content: start;
    align-items: center;
    max-width: 340px;
    > h3, span, a{
        float: left;
        margin: 15px 0;
        color: ${verdeEscuro};
        text-decoration: none;
    }
    > h3 {
        font-size: 36px;
        font-weight: 600;
    }
    > span {
        color: #000;
    }
}
@media (max-width: 800px){
    padding: 64px 0;
    flex-direction: column;
    > iframe {
        width: 100%;
    }
}
`;

export const PassoDireita = styled.div`

width: 100%;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
align-content: center;
justify-content: space-around;
align-items: center;


> iframe {
    width: 500px;
    height: 300px;
    float: right;
}

> div {
    float: left;
    display: grid;
    align-content: space-between;
    justify-content: start;
    align-items: center;
    max-width: 340px;
    > h3, span, a{
        
        float: left;
        margin: 15px 0;
        color: ${verdeEscuro};
        text-decoration: none;
    }
    > h3 {
        font-size: 36px;
        font-weight: 600;
    }
    > span {
        color: #000;
    }
}
@media (max-width: 800px){
    padding: 64px 0;
    flex-direction: column-reverse;
    > iframe {
        width: 100%;
    }
}
`;

const Wrapper = styled.div`

padding: 80px 120px;
background: #E9EFEE;
@media (max-width: 800px) {
    padding: 80px 24px;
}

`;

class PassoApasso extends Component {
    render(video, passo, span, link, linkdescription, video2,passo2, span2, link2, linkdescription2) {
        return (
            <Wrapper>
                <PassoEsquerda>
                    <iframe src={this.props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>
                    <div>
                        <h3>{this.props.passo}</h3>
                        <span>{this.props.span}</span>
                        <a href={this.props.link}>{this.props.linkdescription}</a>
                    </div>

                </PassoEsquerda>
                <PassoDireita>
                    <div>
                        <h3>{this.props.passo2}</h3>
                        <span>{this.props.span2}</span>
                        <a href={this.props.link2}>{this.props.linkdescription2}</a>
                    </div>
                    <iframe src={this.props.video2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

                    </iframe>

                </PassoDireita>
            </Wrapper>
        );
    }
}

export default PassoApasso;
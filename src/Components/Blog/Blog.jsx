import styled from "styled-components"
import { verdeEscuro } from "../UI/variaveis";

export const CardBlog = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 24px;
width: 100%;


> img {
    margin-top: 96px;
    margin-bottom: 16px;
}

> h4 {
    font-weight: 700;
    font-size: 20px;
    color: ${verdeEscuro};
}

> div {
    display: flex;
    flex-direction: row;

    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: baseline;

    margin-top: -20px;

    > span:after{
        content: ".";
        width: 300px;
        color: ${verdeEscuro};
        font-size: 100px;
        height: 1px;
        border-radius: 100%;
        margin: 0;
    }
    > span, p {
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #000;
    }
}

`;

function Blog(props) {
    return (
        <CardBlog>
            <img src={props.img} alt="" />
            <h4>{props.postName}</h4>
            <div>
                <span>{props.metaData}</span>
                <p>Por {props.metaUser}</p>
            </div>
        </CardBlog>
    )

}

export default Blog
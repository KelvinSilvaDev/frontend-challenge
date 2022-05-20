import { React, Component } from 'react';
import styled from 'styled-components';
import icone1 from '../../Assets/lista1.svg';
import icone2 from '../../Assets/lista2.svg';
import icone3 from '../../Assets/lista3.svg';
import icone4 from '../../Assets/lista4.svg';
import icone5 from '../../Assets/lista5.svg';
import icone6 from '../../Assets/lista6.svg';
import icone7 from '../../Assets/lista7.svg';
import icone8 from '../../Assets/lista8.svg';
//import { verdeEscuro } from '../UI/variaveis';


const Wrapp = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
> div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    //background: #D2DDAE;
    width: 124px;
    height: 124px;
    border-radius: 100%;
    padding: 22px;
    display: block;

}
> h4 {
    margin-top: 15px;
    text-align: center;
} 
`;

const Listas = styled.div`

width: 100%;
padding: 64px 25px;

@media(max-width: 800px) {
    margin: 0 25px;
    padding: 70px;

  overflow-x: auto;
  &::-webkit-scrollbar{
    width: 0 !important;
    display: none;
  }
}

`;

class ListasDeTratamento extends Component {
    render(texto, ico, bg) {
        return (
            <Listas>
                <Wrapp>
                    <div style={{ backgroundColor: this.props.bg }}>
                        <img src={this.props.ico} alt="" />
                    </div>
                    <h4>{this.props.texto}</h4>
                </Wrapp>
            </Listas>
        );
    }
}

export default ListasDeTratamento;

// function ListasDeTratamento(texto) {
//     return (
//         <Listas>
//             <div>
//                 <img src="#" alt="" />
//             </div>
//             <h4>{this.props.texto}</h4>
//         </Listas>
//     )
// }

// export default ListasDeTratamento;
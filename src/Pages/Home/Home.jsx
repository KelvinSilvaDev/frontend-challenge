import { Header } from "../../Components/Header/Header"
import { Hero, Right, Left } from "../../Components/Hero/"
import { useState } from 'react';
import { MenuMobile } from "../../Components/Header/MenuMobile";
import mobileMenuIcon from "../../Assets/mobileMenu.svg";
import Services from "../../Components/Services";
import servicesCard1 from "../../Assets/ICONE - Produtos nacionais.svg";
import servicesCard2 from "../../Assets/Icon - Importados.svg";
import servicesCard3 from "../../Assets/DNA.svg";
import Carousel from 'react-elastic-carousel';
import CarouselCards from '../../Components/CarouselCards';
import img1 from "../../Assets/prancheta.svg";
import img2 from "../../Assets/Frame2.svg";
import img3 from "../../Assets/Frame3.svg";
import img4 from "../../Assets/Frame4.svg";
import PassoApasso from "../../Components/CarouselCards/passo-a-passo";
import ListasDeTratamento from "../../Components/ListasDeTratamento";




import icone1 from '../../Assets/lista1.svg';
import icone2 from '../../Assets/lista2.svg';
import icone3 from '../../Assets/lista3.svg';
import icone4 from '../../Assets/lista4.svg';
import icone5 from '../../Assets/lista5.svg';
import icone6 from '../../Assets/lista6.svg';
import icone7 from '../../Assets/lista7.svg';
import icone8 from '../../Assets/lista8.svg';


import HeroGeneric from "../../Components/HeroGeneric";
import HeroInvert from "../../Components/HeroGeneric/left";
import podcastImg from "../../Assets/img/image 1.png"
import ImgHero2 from "../../Assets/img/img2.png"
import Blog from "../../Components/Blog/Blog";

import BlogImg from "../../Assets/img/blog1.png"
import BlogImg2 from "../../Assets/img/blog2.png"
import BlogImg3 from "../../Assets/img/blog3.png"
import BlogImg4 from "../../Assets/img/blog4.png"
import HeroGreen from "../../Components/HeroGreen";

import heroGreenImg from "../../Assets/img/3dCross.png"
import Form from "../../Components/Form";
import Accordion from "../../Components/faq/";
import Footer from "../../Components/Footer";



import {MainHeader, ServicesWrapp, SectionCarousel, breakPoints, CenterH2, CenterLink} from "./HomeStyle";




export function Home () {
    const [menuIsVisible, setMenuIsVisible] = useState();
    return (
        <>
            <section>
                < MainHeader >
                    <MenuMobile menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}><img src={mobileMenuIcon} onClick={setMenuIsVisible} /></MenuMobile>
                    <Header menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible} />
                    <Hero>
                        <Right></Right>
                        <Left></Left>
                    </Hero>
                </MainHeader >
            </section>
            <ServicesWrapp>
                <Services icon={servicesCard1} title="Entrega imediata" span="Menor tempo de entrega" />
                <Services icon={servicesCard2} title="Produtos importados" span="Encontre marcas internacionais" />
                <Services icon={servicesCard3} title="Teste Genético" span="Tratamento efetivo para você" />
            </ServicesWrapp>
            <SectionCarousel>
                <Carousel breakPoints={breakPoints}>
                    <CarouselCards img={img1} title="Cannect Assistente" content="Te ajudamos na tarefa de prescrever Cannabis medicinal. Encontramos o melhor custo benefício para seus pacientes." />
                    <CarouselCards img={img2} title="Cannect Educa" content="Oferecemos cursos, podcasts, artigos e workshops para você conhecer sobre a cannabis medicinal e seus benefícios a seus pacientes." />
                    <CarouselCards img={img3} title="Cannect Cuida" content="Serviço de saúde continuada da Cannect. A cannect quer cuidar de você, sempre." />
                    <CarouselCards img={img4} title="Comunidade Cannect" content="Conheças as histórias reais de quem confia na gente" />
                </Carousel>
            </SectionCarousel>
            <section style={{ backgroundColor: "#E9EFEE", paddingTop: "64px" }}>
                <CenterH2>Inicie seu tratamento com cannabis medicinal</CenterH2>
                <PassoApasso video="https://www.youtube.com/embed/pVE92TNDwUk" passo="Consulta Médica" span="Faça uma consulta presencial ou remota com nossos especialistas"
                    link="#" linkdescription="Agende Agora" video2="https://www.youtube.com/embed/pVE92TNDwUk" passo2="Autorização Anvisa"
                    span2="Cuidamos de todo processo de aprovação para você." link2="#" linkdescription2="JÁ TEM RECEITA? CLIQUE AQUI!" />
                <PassoApasso video="https://www.youtube.com/embed/pVE92TNDwUk" passo="Entrega Eficiente" span="A melhor experiência para obter o tratamento que você precisa para sua saúde. Fácil, rápido e descomplicado. Melhores fretes e tempo reduzido de entrega."
                    video2="https://www.youtube.com/embed/pVE92TNDwUk" passo2="Cuidado Contínuo"
                    span2="Nossos especialistas vão acompanhar seu tratamento. Estamos aqui para cuidar da sua saúde, sempre!" link2="#"
                    linkdescription2="CONHEÇA O CANNECT CUIDA" />
            </section>
            <section style={{ paddingTop: "64px" }}>
                <CenterH2>Encontre ciência, saúde e bem-estar</CenterH2>
                <div style={{ display: "flex", flexDirection: "row", maxWidth: "100%", overflowX: "auto" }}>
                    <ListasDeTratamento texto="Dor crônica" ico={icone1} bg="#D2DDAE" />
                    <ListasDeTratamento texto="Saúde mental" ico={icone8} bg="#AFDDAE" />
                    <ListasDeTratamento texto="Oncologia/Cuidados Paleativos" ico={icone7} bg="#AEDDD2" />
                    <ListasDeTratamento texto="Neurologia" ico={icone6} bg="#AEC6DD" />
                    <ListasDeTratamento texto="Pediatria" ico={icone5} bg="#AEC6DD" />
                    <ListasDeTratamento texto="Bem Estar Intimo" ico={icone4} bg="#DDAEB9" />
                    <ListasDeTratamento texto="Cuidados com a pele" ico={icone3} bg="#DDB9AE" />
                    <ListasDeTratamento texto="Medicina esportiva" ico={icone2} bg="#DDCDAE" />
                </div>
            </section>
            <section>
                <HeroGeneric texto="Escute o cannabicast, nosso podcast especial sobre a revolução verde" bt="Escute agora" link="#" img={podcastImg} />
            </section>
            <section style={{ margin: "180px 0" }}>
                <div style={{ background: "#5B945B", marginBottom: "-120px" }}>
                    <HeroInvert texto="Conheça as histórias reais de quem confia na gente" bt="Conheça" link="#" img={ImgHero2} />
                </div>
            </section>
            <section>
                <CenterH2>Leia as novidades da #revoluçãoverde</CenterH2>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", overflowX: "auto", padding: "64px 0" }}>
                    <Blog img={BlogImg} postName="Higiene Do Sono: Um Termo Na Moda, Mas Você Sabe O Que Quer Dizer?" metaData="25 de abril" metaUser="Cannalize" />
                    <Blog img={BlogImg2} postName="A Descoberta Do THCP E CBDP E O Futuro Dos Canabinóides " metaData="25 de abril" metaUser="Cannalize" />
                    <Blog img={BlogImg3} postName="Saúde Mental E Tratamentos Alternativos: 5 Opções De Suplementos Naturais" metaData="25 de abril" metaUser="Cannalize" />
                    <Blog img={BlogImg4} postName="Enxaquecas: 6 Pequenos Hábitos Que Vão Melhorar Sua Qualidade De Vida" metaData="25 de abril" metaUser="Cannalize" />
                </div>
                <CenterLink href="#">LEIA MAIS</CenterLink>
            </section>
            <section>
                <HeroGreen texto="Prescritor, faça parte do time Cannect" bt="Conheça as soluções da Cannect" link="#" img={heroGreenImg} />
            </section>
            <section>
                <Form texto="Assine a newsletter da Cannect para estar sempre informado sobre a #revoluçãoverde" bt="Escute agora" link="#" img={podcastImg} />
            </section>
            <section>
                <Accordion />
            </section>
            <Footer />
        </>

    )
}

export default Home;
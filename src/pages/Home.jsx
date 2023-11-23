import styled from 'styled-components';
import Image from '../assets/enplattformforer.png';
import LinkPage from "../components/LinkPage";
import Header from "../components/Header"

const Container = styled.div`
display: flex;
flex-direction: row;
height: fit-content;
background-color: #a4c6fb;
`;

const LinkContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 5rem;
`;

const MainImage = styled.img`
width: 75vw;
height: 90vh;
margin-left: 4rem;
border-radius: 4px;
`;

const Paragraph = styled.p`
margin-left: 0.5rem;
font-size: 1.2rem;
`;

const Home = () => {
    return ( 
        <>
        <Header />
        <Container>
        <LinkContainer>
        <LinkPage to="/intefresh">Inte fresssh</LinkPage>
        <LinkPage to="/dyrt">En dyr vana</LinkPage>
        <LinkPage to="/skadapakropp">Onödig skada på kroppen</LinkPage>
        <LinkPage to="/miljopaverkan">Miljöpåverkan & barnarbete</LinkPage>
        <LinkPage to="/tips&rad">Tips & råd</LinkPage>
        <LinkPage to="/hjalp">Hjälp en vän</LinkPage>
        </LinkContainer>
        <MainImage src={Image} alt="En plattform för er" />
        </Container>
        <Paragraph>Och mycket mer...</Paragraph>
        </>
    )
}

export default Home;

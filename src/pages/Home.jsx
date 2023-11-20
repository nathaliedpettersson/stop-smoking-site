import styled from 'styled-components';
import LinkPage from "../components/LinkPage";
import Header from "../components/Header"

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #FF7514;
height: 100vh;
color: white;
`;

const Home = () => {
    return (
        <Container>
        <Header />
        <LinkPage to="/intefresh">Inte fresssh</LinkPage>
        <LinkPage to="/dyrt">En dyr vana</LinkPage>
        <LinkPage to="/skadapakropp">Onödig skada på kroppen</LinkPage>
        <LinkPage to="/miljopaverkan">Miljöpåverkan & barnarbete</LinkPage>
        <LinkPage to="/tips&rad">Tips & råd</LinkPage>
        <LinkPage to="/hjalp">Hjälp en vän</LinkPage>
        <p>Och mycket mer...</p>
        </Container>
    )
}

export default Home;

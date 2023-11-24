import styled from 'styled-components';

const HeroSection = styled.h1`
text-transform: uppercase;
text-align: center;
`;

const Header = () => {
    return (
        <HeroSection><i>Rökfrigeneration.nu - En plattform för er </i></HeroSection>
    )
}

export default Header;
import styled from 'styled-components';

const HeroSection = styled.h1`
text-transform: uppercase;
`;

const Header = () => {
    return (
        <HeroSection>Rökfrigeneration.nu - En plattform för er</HeroSection>
    )
}

export default Header;
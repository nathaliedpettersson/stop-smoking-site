import styled from 'styled-components';

const Image = styled.img`
width: 100vw;
height: 100vh;
`;

const ImageContainer = ({src, alt}) => {
    return (
        <Image src={src} alt={alt} />
    )
   
}

export default ImageContainer;
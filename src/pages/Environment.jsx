import BackButton from "../components/BackButton";
import ImageContainer from "../components/ImageContainer";
import Image from '../assets/miljo.png';

const Environment = () => {
    return (
        <>
        <BackButton />
        <ImageContainer src={Image} alt="Environment Powerpoint slide" />
        </>
    )
}

export default Environment;
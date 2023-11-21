import BackButton from "../components/BackButton";
import ImageContainer from "../components/ImageContainer";
import Image from '../assets/intefresh.png';

const NotFresh = () => {
    return (
        <>
        <BackButton />
        <ImageContainer src={Image} alt="Not fresh PowerPoint slide" />
        </>
    )
}

export default NotFresh;
import BackButton from "../components/BackButton";
import ImageContainer from "../components/ImageContainer";
import Image from '../assets/tips.png';

const Advice = () => {
    return (
        <>
            <BackButton />
            <ImageContainer src={Image} alt="Advice Powerpoint slide" />
        </>
    )
}

export default Advice;
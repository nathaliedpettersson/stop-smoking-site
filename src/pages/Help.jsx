import BackButton from "../components/BackButton";
import ImageContainer from "../components/ImageContainer";
import Image from '../assets/hjalp.png';

const Help = () => {
    return (
        <>
        <BackButton />
        <ImageContainer src={Image} alt="Help Powerpoint slide" />
        </>
    )
}

export default Help;
import BackButton from '../components/BackButton';
import ImageContainer from '../components/ImageContainer';
import Image from '../assets/skadakropp.png';

const BodyDamage = () => {
    return (
        <>
            <BackButton />
            <ImageContainer src={Image} alt="Body damage Powerpoint slide" />
        </>
    )
}

export default BodyDamage;
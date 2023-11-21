import BackButton from "../components/BackButton";
import ImageContainer from "../components/ImageContainer";
import Image from '../assets/dyrvana.png';

const ExpensiveHabit = () => {
    return (
        <>
        <BackButton />
        <ImageContainer src={Image} alt="An expensive habit Powerpoint Slide" />
        </>
    )
}

export default ExpensiveHabit;
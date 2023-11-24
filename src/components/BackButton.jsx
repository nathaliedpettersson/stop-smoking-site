import { Link } from 'react-router-dom'

const BackButton = () => {
    return (
<Link to='/' style={{fontSize: '50px', textDecoration: 'none', margin: '0.7rem'}}>⬅️</Link>
    )
}

export default BackButton;
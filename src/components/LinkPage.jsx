import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
width: 15vw;
text-decoration: none;
cursor: pointer;
color: black;
border: 1.5px solid black;
border-radius: 8px;
padding: 0.5rem;
margin: 0.7rem 0.7rem 0.7rem 2rem;
font-size: 1.1rem;

&:hover {
  transform: scale(1.1)
}
`;

const LinkPage = ({ to, children, ...rest }) => {
  return (
  <StyledLink to={to} {...rest}>{children}</StyledLink>
  )
}

export default LinkPage;


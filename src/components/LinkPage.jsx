import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
width: 15vw;
text-decoration: none;
color: black;
cursor: pointer;
border: 2px solid black;
padding: 0.3rem;
margin: 0.7rem 0;
`;

const LinkPage = ({ to, children, ...rest }) => {
  return (
  <StyledLink to={to} {...rest}>{children}</StyledLink>
  )
}

export default LinkPage;


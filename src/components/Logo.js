import styled from 'styled-components';
import logoImg from '../assets/images/logo.svg';

const Logo = styled.img.attrs(props => ({
	src: logoImg,
	className: props.className
}))`
	width: 137px;
`;

export default Logo;

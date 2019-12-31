import styled from 'styled-components';
import hpImg from '../../assets/images/headphone.svg';
import logoImg from '../../assets/images/logo.svg';

const Wrapper = styled.div`
	position: relative;
	padding: 16px 33px 19px;
	height: 100vh;
	background-image: linear-gradient(
		to top right,
		${({ theme: { colors } }) => colors.layoutColor1},
		${({ theme: { colors } }) => colors.layoutColor2}
	);
	.logo-image {
		position: absolute;
		top: 16px;
		left: 33.5px;
	}
	.hp-image {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.social-media {
		position: absolute;
		bottom: 19px;
		right: 33px;
	}
`;

const Logo = styled.img.attrs({
	src: logoImg,
	className: 'logo-image'
})`
	width: 137px;
`;

const HeadPhoneImg = styled.img.attrs({
	src: hpImg,
	className: 'hp-image'
})``;

const SocialMedia = styled.div.attrs({
	className: 'social-media'
})`
	.social_icon {
		cursor: pointer;
		&:not(last-of-type) {
			margin-right: 10px;
		}
		img {
			width: 24px;
			height: 24px;
		}
	}
`;

export { Wrapper, Logo, HeadPhoneImg, SocialMedia };

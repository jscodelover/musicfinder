import styled from 'styled-components';
import love_music from '../../assets/images/love-music.png';

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 423px;
	height: 629px;
	text-align: center;
	border-radius: 42px;
	background-color: ${({ theme: { colors } }) => colors.white};
	background-image: url(${love_music});
	background-position: center;
	background-repeat: no-repeat;
	box-shadow: 0px 3px 6px rgba(137, 31, 31, 0.16);
	.logo {
		margin-top: 21px;
	}
	p {
		margin: 5px 0 32px;
		color: ${({ theme: { colors } }) => colors.textColor2};
		font-size: 25px;
		font-weight: 500;
	}
	.spotify-btn {
		padding: 16px 96.5px 15px;
		font-size: 16px;
		line-height: 19px;
		color: #fff;
		background-color: #218813;
		border-radius: 9px;
	}
	.or-line {
		margin: 21px 86.5px 37px;
		display: flex;
		justify-content: space-between;
		position: relative;
		hr {
			width: 44%;
			border-width: 0.5px;
			border-color: ${({ theme: { colors } }) => colors.textColor2};
		}
		span {
			position: absolute;
			top: -8px;
			left: 50%;
			transform: translateX(-50%);
			color: ${({ theme: { colors } }) => colors.textColor2};
			font-weight: 500;
		}
	}
`;

export { Wrapper };

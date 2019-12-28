import React from 'react';
import { Wrapper } from './loading.styled';

function Loading(props) {
	const { loaderType } = props;
	let width = undefined;
	switch (loaderType) {
		case 'large':
			width = '400px';
			break;
		case 'medium':
			width = '250px';
			break;
		case 'small':
			width = '150px';
			break;
		case 'tiny':
			width = '100px';
			break;
		default:
			width = '400px';
	}
	return (
		<Wrapper width={width}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="956.044"
				height="605.151"
				viewBox="0 0 956.044 605.151"
			>
				<defs>
					<linearGradient
						id="linear-gradient"
						x1="0.078"
						y1="0.126"
						x2="0.5"
						y2="1"
						gradientUnits="objectBoundingBox"
					>
						<stop offset="0" stopColor="#e02a2a" />
						<stop offset="0.113" stopColor="#d02f2f" />
						<stop offset="0.911" stopColor="#605050" />
						<stop offset="1" stopColor="#545454" />
					</linearGradient>
					<filter
						id="Music"
						x="617.044"
						y="281.464"
						width="177"
						height="88"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="4" dy="3" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="3.5" result="blur" />
						<feFlood floodOpacity="0.161" />
						<feComposite operator="in" in2="blur" />
						<feComposite in="SourceGraphic" />
					</filter>
					<filter
						id="Finder"
						x="771.044"
						y="282.464"
						width="185"
						height="88"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dx="4" dy="3" input="SourceAlpha" />
						<feGaussianBlur stdDeviation="3.5" result="blur-2" />
						<feFlood floodOpacity="0.161" />
						<feComposite operator="in" in2="blur-2" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g
					id="Group_1"
					dataname="Group 1"
					transform="translate(-556.544 -216.961)"
				>
					<path
						id="Path_1"
						dataname="Path 1"
						d="M908.917,271.816H669.894l-50.625-87.2c-6.171-10.6-19.378-16.54-32.953-14.735-13.5,1.81-24.119,10.97-26.319,22.679L537.37,313.615l-21.423,114.6-16.67-113.124L462.4,64.906c-1.893-12.778-13.76-22.671-28.512-23.8-14.785-1-28.429,6.833-32.846,19.115l-94.18,262.332L278.57,401.364l-14.408-77.153L242.876,210.194c-2.241-11.954-13.246-21.215-27.068-22.772-13.807-1.464-27.19,4.943-32.846,16.021l-52.5,102.437H31.524C14.122,305.881,0,318.15,0,333.267s14.122,27.382,31.524,27.382H150.936c12.452,0,23.736-6.366,28.792-16.249l8.843-17.235,9-17.558,3.178,17.078,36.978,198.093c2.33,12.543,14.3,22.023,28.89,22.935,14.592.775,27.96-7.035,32.326-19.149l74.881-208.606,44.392-123.619,17.856,121.212,44.906,304.712c1.986,13.48,15.077,23.668,30.73,23.908h.541c15.421,0,28.628-9.72,31.122-23.012L601.7,311.113l4.973-26.563,14.961,25.8.678,1.178c5.357,9.24,16.254,15.063,28.168,15.063H908.923c17.407,0,31.521-12.269,31.521-27.387S926.327,271.816,908.917,271.816Z"
						transform="translate(556.544 175.941)"
						fill="url(#linear-gradient)"
					/>
					<g
						transform="matrix(1, 0, 0, 1, 556.54, 216.96)"
						filter="url(#Music)"
					>
						<text
							id="Music-2"
							dataname="Music"
							transform="translate(623.54 343.96)"
							fill="#d62b2b"
							fontSize="58"
							fontFamily="HelveticaNeue, Helvetica Neue"
						>
							<tspan x="0" y="0">
								Music
							</tspan>
						</text>
					</g>
					<g
						transform="matrix(1, 0, 0, 1, 556.54, 216.96)"
						filter="url(#Finder)"
					>
						<text
							id="Finder-2"
							dataname="Finder"
							transform="translate(777.54 344.96)"
							fill="#d62b2b"
							fontSize="58"
							fontFamily="HelveticaNeue, Helvetica Neue"
						>
							<tspan x="0" y="0">
								Finder
							</tspan>
						</text>
					</g>
				</g>
			</svg>
		</Wrapper>
	);
}

export default Loading;

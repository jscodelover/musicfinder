import React from 'react';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import spotify from '../../assets/images/spotify.png';
import twitter from '../../assets/images/twitter.png';
import { Wrapper, HeadPhoneImg, SocialMedia, Logo } from './landingPage.style';

function LandingPage() {
	return (
		<Wrapper>
			<Logo />
			<HeadPhoneImg />
			<SocialMedia>
				<a
					href="https://www.linkedin.com/in/jscodelover/"
					target="_blank"
					rel="noopener noreferrer"
					className="g-btn-transparent social_icon"
				>
					<img src={linkedin} alt="linkedin" />
				</a>
				<a
					href="https://twitter.com/jscodelover"
					target="_blank"
					rel="noopener noreferrer"
					className="g-btn-transparent social_icon"
				>
					<img src={twitter} alt="twitter" />
				</a>
				<a
					href="https://github.com/jscodelover"
					target="_blank"
					rel="noopener noreferrer"
					className="g-btn-transparent social_icon"
				>
					<img src={github} alt="github" />
				</a>
				<a
					href="https://www.spotify.com/in/"
					target="_blank"
					rel="noopener noreferrer"
					className="g-btn-transparent social_icon"
				>
					<img src={spotify} alt="spotify" />
				</a>
			</SocialMedia>
		</Wrapper>
	);
}

export default LandingPage;

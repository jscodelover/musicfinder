import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import Logo from '../Logo';
import LoginPage from '../../modules/auth/login/LoginPage';
import SignupPage from '../../modules/auth/signup/SignupPage';
import github from '../../assets/images/github.png';
import linkedin from '../../assets/images/linkedin.png';
import spotify from '../../assets/images/spotify.png';
import twitter from '../../assets/images/twitter.png';
import {
	Wrapper,
	HeadPhoneImg,
	SocialMedia,
	AuthButton
} from './landingPage.style';

function LandingPage(props) {
	function goToHome() {
		props.history.push(props.match.url);
	}
	const { match } = props;
	return (
		<Wrapper>
			<button className="g-btn-transparent logo-image" onClick={goToHome}>
				<Logo />
			</button>
			<AuthButton>
				<NavLink
					exact
					to="/login"
					className="g-btn-transparent auth-btn"
					activeClassName="active"
				>
					Login
				</NavLink>
				<NavLink
					exact
					to="/signup"
					className="g-btn-transparent auth-btn"
					activeClassName="active"
				>
					Signup
				</NavLink>
			</AuthButton>
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
			<Switch>
				<Route path={`${match.url}login`} component={LoginPage} />;
				<Route path={`${match.url}signup`} component={SignupPage} />;
			</Switch>
		</Wrapper>
	);
}

export default withRouter(LandingPage);

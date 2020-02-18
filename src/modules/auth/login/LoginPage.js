import React from 'react';
import { Logo } from '../../../components';
import { Wrapper } from '../auth.style';

function LoginPage() {
	return (
		<Wrapper>
			<Logo className="logo" />
			<p>Music Finder</p>
			<button className="g-btn-transparent spotify-btn">Login with Spotify</button>
			<div className="or-line">
				<hr />
				<span>OR</span>
				<hr />
			</div>
		</Wrapper>
	);
}

export default LoginPage;

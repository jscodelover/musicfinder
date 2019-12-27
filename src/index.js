import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import * as serviceWorker from './serviceWorker';
import theme from './styles/themes';
import GlobalStyle from './styles/global.style';

const app = (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<App />
		</>
	</ThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

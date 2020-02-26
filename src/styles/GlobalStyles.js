import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0px;
		padding: 0px;
	}

	html, body, #root {
		min-height: 100vh;
	}

	#root {
		display: flex;
		flex-direction: column;
	}

	* {
		box-sizing: border-box;
		outline: none;
	}

	body, input, button {
		font-family: 'Roboto';
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;

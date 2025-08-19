import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html, body, #root {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
	#root {
		background-color: #FFF;
	}
	.flex { display: flex; }
	.flex-column { flex-direction: column; }
	.flex-1 { flex: 1; }
	.flex-2 { flex: 2; }
	.h100 { height: 100%; }
	.w100 { width: 100%; }
	.flex-center { align-items: center; }
	.flex-middle { align-items: center; justify-content: center; }
	.flex-between { justify-content: space-between; }
	.flex-justify { justify-content: center; }
	.flex-wrap { flex-wrap: wrap; }
	.text-center { text-align: center; }
	.relative { position: relative; }
	.absolute { position: absolute; }
`;

import styled from 'styled-components';

import { primaryColor } from '../../assets/colors';

export const Container = styled.main`
	align-items: center;
	background-color: #ebebeb;
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 0px 1em;
	position: relative;
	width: 100%;

	&::after {
		background-color: ${primaryColor};
		bottom: 0px;
		content: '';
		height: 60%;
		position: absolute;
		width: 100%;
		z-index: 5;
	}
`;

export const Header = styled.header`
	background-color: #ffd741;
	padding: 1em;
	width: 100%;
`;

export const Logo = styled.img`
	margin: 2em 0px;
	width: 200px;
`;

export const Form = styled.form`
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 25%);
	max-width: 425px;
	padding: 2.5em 0px;
	width: 100%;
	z-index: 10;

	button {
		background-color: ${primaryColor};
		border: none;
		border-radius: 4px;
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 25%);
		color: #fff;
		font-size: 1em;
		margin: 1em 0px;
		padding: 0.75em 1em;
		width: 100%;
	}
`;

export const FormTitle = styled.h1`
	border-left: 4px solid ${primaryColor};
	color: ${primaryColor};
	font-weight: normal;
	margin-bottom: 10px;
	margin-top: 0px;
	padding: 0.25em 0.5em;
`;

export const FormContent = styled.div`
	padding: 0px 1em;
`;

export const Link = styled.a`
	color: ${primaryColor};
	display: block;
	margin-top: 0.5em;
	text-align: center;
`;

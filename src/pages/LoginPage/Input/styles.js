import styled from 'styled-components';
import { primaryColor, dangerColor } from '../../../assets/colors';

export const Container = styled.div`
	position: relative;

	input {
		border-bottom-color: ${props =>
			props.empty && props.visited ? dangerColor : '#ddd'};
	}

	> span {
		opacity: ${props => (props.empty && props.visited ? 1 : 0)};
		pointer-events: ${props =>
			props.empty && props.visited ? 'auto' : 'none'};
	}

	label {
		${props =>
			!props.empty &&
			props.visited &&
			`color: ${primaryColor}; font-size: 0.75em; top: 0px;`}
	}
`;

export const Label = styled.label`
	color: #555;
	left: 0px;
	position: absolute;
	top: 1.75em;
	transition: 0.2s linear;

	span {
		color: ${dangerColor};
	}
`;

export const Input = styled.input`
	width: 100%;
	border: none;
	border-bottom: 2px solid;
	font-size: 1em;
	margin: 1.5em 0px;
	padding-bottom: 0.5em;
	transition: border-bottom-color 0.2s linear;

	~ input {
		margin-top: 1.25em;
	}

	&:focus {
		border-bottom-color: ${primaryColor};

		& + ${Label} {
			color: ${primaryColor};
			font-size: 0.75em;
			top: 0px;
		}
	}
`;

export const Message = styled.span`
	background-color: ${dangerColor};
	border-radius: 3px;
	border-top-left-radius: 0px;
	bottom: 0%;
	color: #fff;
	display: inline-block;
	font-size: 0.875em;
	left: 50%;
	padding: 0.375em 0.75em;
	position: absolute;
	transform: translateX(-50%);
	transition: opacity 0.2s linear;

	&::before {
		content: ' ';
		border: 5px solid ${dangerColor};
		border-right-color: transparent;
		border-top-color: transparent;
		display: block;
		left: 0;
		position: absolute;
		top: 0;
		transform: translateY(-100%);
	}
`;

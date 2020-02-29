import styled from 'styled-components';
import { primaryColor, successColor } from '../../../assets/colors';

export const Container = styled.div`
	display: grid;
	grid-gap: 0.5em;

	+ div {
		margin-top: 2em;
		padding-top: 1.5em;
		border-top: 1px solid #ddd;
	}
`;

export const Figure = styled.figure`
	display: flex;
	margin: 0px;
	margin-bottom: 0.5em;
`;

export const Image = styled.img`
	background-color: #666;
	display: block;
	height: 110px;
	max-width: 110px;
	width: 100%;
`;

export const Description = styled.figcaption`
	margin-left: 12px;
`;

export const Name = styled.h6`
	color: #666;
	font-size: 1em;
	font-weight: normal;
	line-height: 1.5;
	margin-bottom: 0.5em;
	margin-top: 0px;
`;

export const Code = styled.span`
	font-size: 0.875em;
`;

export const Amount = styled.span`
	span {
		color: #666;
	}
`;

export const Price = styled.span`
	span {
		color: #666;
	}
`;

export const Invoice = styled.span`
	a {
		color: ${primaryColor};
	}
`;

export const Status = styled.span`
	span {
		color: ${successColor};
	}
`;

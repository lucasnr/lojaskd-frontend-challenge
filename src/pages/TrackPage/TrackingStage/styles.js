import styled from 'styled-components';

import { primaryColor } from '../../../assets/colors';

export const Container = styled.div`
	align-items: center;
	display: flex;
	font-size: 0.875em;
	margin-top: ${props => (props.first ? '0px' : '4em')};
`;

export const Time = styled.time`
	text-align: center;
	line-height: 1.5;
	margin-right: 14px;
	min-width: 46px;
	width: 46px;
`;

export const Icon = styled.div`
	background-color: ${props => props.color};
	border-radius: 50%;
	color: #fff;
	display: flex;
	font-size: 1.5em;
	margin-right: 14px;
	padding: ${props => (props.unreached ? '0.691em' : '4px')};
	position: relative;
	z-index: ${props => 12 / props.order};

	&::before {
		background-color: ${props => props.color};
		bottom: 100%;
		${props => !props.first && 'content: ""'};
		left: calc(50% - 1px);
		height: 4em;
		position: absolute;
		width: 2px;
		z-index: -5;
	}
`;

export const Name = styled.span`
	color: #555;
	font-size: 1rem;
	padding-right: 16px;
`;

export const Info = styled.div`
	color: ${primaryColor};
	display: flex;
	font-size: 2em;
	margin-left: auto;
`;

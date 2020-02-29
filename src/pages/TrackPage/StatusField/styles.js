import styled from 'styled-components';
import { successColor } from '../../../assets/colors';

export const Container = styled.div`
	display: grid;
`;

export const Name = styled.span`
	font-size: 0.875em;
	color: #bbb;
`;

export const Value = styled.span`
	align-items: center;
	color: ${props => (props.important ? successColor : '#444')};
	display: flex;
	line-height: 1.5;
`;

import styled, { keyframes } from 'styled-components';
import { successColor, primaryColor } from '../../../assets/colors';

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
	flex-wrap: wrap;
	line-height: 1.5;
	overflow: hidden;
`;

const dropdownAnimation = keyframes`
  from {
    margin-bottom: -10em;
  }

  to {
    margin-bottom: 0px;
  }
`;

export const DropdownContainer = styled.div`
	background-color: #eee;
	color: ${primaryColor};
	display: grid;
	flex-basis: 100%;
	padding: 1em;

	animation: ${dropdownAnimation} 0.3s linear;
`;

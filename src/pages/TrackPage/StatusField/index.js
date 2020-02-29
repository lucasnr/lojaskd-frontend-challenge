import React, { useState } from 'react';
import { MdArrowDropDown } from 'react-icons/md';

import { Container, Name, Value, DropdownContainer } from './styles';
import { primaryColor } from '../../../assets/colors';

export default function StatusField({ important, name, value }) {
	return (
		<Container>
			<Name>{name}</Name>
			<Value important={important}>{value}</Value>
		</Container>
	);
}

export const StatusDropDown = ({ value, data }) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<span>{value}</span>
			<MdArrowDropDown
				style={{ cursor: 'pointer' }}
				size={20}
				color={primaryColor}
				onClick={() => setShow(!show)}
			/>
			{show && (
				<DropdownContainer>
					{data.map((item, index) => (
						<span key={`status-product-${index}`}>{item}</span>
					))}
				</DropdownContainer>
			)}
		</>
	);
};

import React, { useState } from 'react';

import { Container, Input, Label, Message } from './styles';

export default function FormInput({ placeholder, ...rest }) {
	const [empty, setEmpty] = useState(true);
	const [visited, setVisited] = useState(false);

	return (
		<Container empty={empty} visited={visited}>
			<Input
				onBlur={event => {
					setEmpty(event.target.value === '');
					if (!visited) setVisited(true);
				}}
				{...rest}
			/>
			<Label>
				{placeholder} <span>*</span>
			</Label>
			<Message>Não pode ficar em branco.</Message>
		</Container>
	);
}

import React, { useState } from 'react';

import { Container, Input, Label, Message } from './styles';

export default function FormInput({ placeholder, id, ...rest }) {
	const [empty, setEmpty] = useState(true);
	const [visited, setVisited] = useState(false);

	return (
		<Container empty={empty} visited={visited}>
			<Input
				id={id}
				onBlur={event => {
					setEmpty(event.target.value === '');
					if (!visited) setVisited(true);
				}}
				{...rest}
			/>
			<Label htmlFor={id}>
				{placeholder} <span>*</span>
			</Label>
			<Message>Não pode ficar em branco.</Message>
		</Container>
	);
}

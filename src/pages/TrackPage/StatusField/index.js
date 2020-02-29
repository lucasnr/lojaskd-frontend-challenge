import React from 'react';

import { Container, Name, Value } from './styles';

export default function StatusField({ important, name, value }) {
	return (
		<Container>
			<Name>{name}</Name>
			<Value important={important}>{value}</Value>
		</Container>
	);
}

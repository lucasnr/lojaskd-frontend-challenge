import React from 'react';

import { Container } from './styles';

export default function MobileOnly({ children }) {
	return <Container>{children}</Container>;
}

import React from 'react';

import { Container } from './styles';

export default function DesktopOnly({ children }) {
	return <Container>{children}</Container>;
}

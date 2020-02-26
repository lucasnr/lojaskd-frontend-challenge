import React from 'react';

import {
	Container,
	Header,
	Logo,
	Form,
	FormTitle,
	FormContent,
	Link
} from './styles';
import logo from '../../assets/img/logo.png';

export default function LoginPage() {
	return (
		<>
			<Header />
			<Container>
				<Logo src={logo} />
				<Form>
					<FormTitle>Acompanhar pedido</FormTitle>
					<FormContent>
						<input type="text" placeholder="Número do pedido" />
						<input type="text" placeholder="CPF ou CNPJ" />
						<button type="submit">Acompanhar</button>
					</FormContent>
					<Link href="https://lojaskd.com.br" target="_blank">
						LojasKD.com.br
					</Link>
				</Form>
			</Container>
		</>
	);
}

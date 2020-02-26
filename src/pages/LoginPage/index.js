import React from 'react';

import Input from './Input';
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
						<Input id="number" placeholder="Número do pedido" />
						<Input id="cpf" placeholder="CPF ou CNPJ" />
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

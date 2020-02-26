import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

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
	const [redirect, setRedirect] = useState(false);
	const handleSubmit = event => {
		event.preventDefault();
		setRedirect(true);
	};

	if (redirect) return <Redirect to="/track" />;

	return (
		<>
			<Header />
			<Container>
				<Logo src={logo} />
				<Form onSubmit={handleSubmit}>
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

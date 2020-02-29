import React from 'react';

import {
	Container,
	Figure,
	Image,
	Description,
	Name,
	Code,
	Amount,
	Price,
	Invoice,
	Status
} from './styles';

export default function Product({ name, code, amount, price, status }) {
	return (
		<Container>
			<Figure>
				<Image />
				<Description>
					<Name>{name}</Name>
					<Code>{code}</Code>
				</Description>
			</Figure>
			<Amount>
				Quantidade: <span>{amount}</span>
			</Amount>
			<Price>
				Preço total: <span>{price}</span>
			</Price>
			<Invoice>
				Nota fiscal: <a href="#">Download disponível</a>
			</Invoice>
			<Status>
				Status atual: <span>{status}</span>
			</Status>
		</Container>
	);
}

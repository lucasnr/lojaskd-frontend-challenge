import React from 'react';
import { MdMoreVert } from 'react-icons/md';

import { DesktopOnly, MobileOnly } from '../../components';
import StatusField, { StatusDropDown } from './StatusField';
import TrackingStage from './TrackingStage';
import Product from './Product';
import {
	Container,
	InnerContainer,
	Header,
	HeaderLink,
	HeaderLinkIcon,
	Title,
	Subtitle,
	ContentContainer,
	Status,
	StatusTitle,
	Message,
	MessageIcon,
	MessageText,
	Tracking,
	TrackingTitle,
	Products,
	ProductsTitle,
	Logo,
	Link
} from './styles';
import logo from '../../assets/img/logo.png';

export default function TrackPage() {
	return (
		<Container>
			<InnerContainer>
				<Header>
					<div>
						<Title>Acompanhar pedido</Title>
						<Subtitle>LojasKD.com.br</Subtitle>
					</div>

					<MobileOnly>
						<MdMoreVert color="#fff" size={32} />
					</MobileOnly>

					<DesktopOnly>
						<HeaderLink to="/">
							Login/Cadastro <HeaderLinkIcon />
						</HeaderLink>
						<HeaderLink to="/">
							Atendimentos <HeaderLinkIcon />
						</HeaderLink>
						<HeaderLink to="/">
							Promoções <HeaderLinkIcon />
						</HeaderLink>
						<HeaderLink to="/">Sair</HeaderLink>
					</DesktopOnly>
				</Header>

				<ContentContainer>
					<Status>
						<StatusTitle>Detalhes do pedido</StatusTitle>
						<StatusField
							important
							name="Status atual"
							value="Acompanhando seus móveis"
						/>
						<StatusField name="Nº do pedido" value="11225589" />
						<StatusField
							name="Produtos"
							value={
								<StatusDropDown
									value="12"
									data={[
										'1 item enviado p/ fábrica',
										'5 itens em produção',
										'3 items com a transportadora',
										'3 itens entregues'
									]}
								/>
							}
						/>
						<StatusField name="Data do pedido" value="09/01/2017" />
						<StatusField name="Valor total" value="R$ 1.850,00" />
						<StatusField
							name="Forma de pagamento"
							value="Cartão de crédito Mastercard"
						/>
						<StatusField
							name="Prazo de entrega"
							value="00/00/2000 a 00/00/0000"
						/>
						<StatusField
							name="Endereço de entrega"
							value={
								<span>
									Avenida Marechal Mário Guedes, <br />
									40 Apto 192 Jaguaré <br />
									05348010 SÃO PAULO - SP
								</span>
							}
						/>
					</Status>

					<Message>
						<MessageIcon />
						<MessageText>
							Acompanhamos cada detalhe da produção até a entrega de cada um dos
							seus móveis. Quer ver?
						</MessageText>
					</Message>

					<Tracking>
						<TrackingTitle>Acompanhamento do pedido</TrackingTitle>
						<TrackingStage
							order={1}
							date="20 DEZ"
							year="2017"
							name="Novo"
							finished
						/>
						<TrackingStage
							order={2}
							date="19 JAN"
							year="2017"
							name="Aprovado"
							finished
						/>
						<TrackingStage
							order={3}
							date="23 DEZ"
							year="2017"
							name="Acompanhando seus móveis"
							current
						/>
						<TrackingStage order={4} name="Recebido" />
					</Tracking>

					<Products>
						<ProductsTitle>Produtos</ProductsTitle>

						<Product
							name="Nome do 1 produto em duas linhas ou no máximo três..."
							code="CÓD. 18993"
							amount={1}
							price="R$ 385,90"
							status="Com a transportadora"
						/>
						<Product
							name="Nome do 1 produto em duas linhas ou no máximo três..."
							code="CÓD. 18993"
							amount={1}
							price="R$ 385,90"
							status="Com a transportadora"
						/>
						<Product
							name="Nome do 1 produto em duas linhas ou no máximo três..."
							code="CÓD. 18993"
							amount={1}
							price="R$ 385,90"
							status="Com a transportadora"
						/>
					</Products>
				</ContentContainer>

				<Logo src={logo} />
				<Link href="#">LojasKD.com.br</Link>
			</InnerContainer>
		</Container>
	);
}

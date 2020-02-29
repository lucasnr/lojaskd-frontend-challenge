import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { lighten } from 'polished';
import { MdChatBubbleOutline, MdOpenInNew } from 'react-icons/md';

import {
	primaryColor,
	secondaryColor,
	backgroundColor
} from '../../assets/colors';

export const Container = styled.main`
	background-color: ${backgroundColor};
	border-top: 4px solid ${secondaryColor};
	flex: 1;
	padding: 1em;
	position: relative;
	z-index: 5;

	&::before {
		background-color: ${primaryColor};
		content: '';
		height: 12em;
		left: 0px;
		position: absolute;
		top: 0px;
		width: 100%;
		z-index: -5;
	}
`;

export const InnerContainer = styled.div`
	margin: auto;
	max-width: 1200px;
`;

export const Header = styled.header`
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 1em;
`;

export const HeaderLink = styled(RouterLink)`
	align-items: center;
	color: #fff;
	display: inline-flex;
	text-decoration: none;

	+ a {
		margin-left: 1em;
	}
`;

export const HeaderLinkIcon = styled(MdOpenInNew)`
	margin-left: 5px;
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 1.25em;
	font-weight: normal;
	margin-bottom: 0.5em;
	margin-top: 0px;
`;

export const Subtitle = styled.h2`
	color: rgba(255, 255, 255, 0.75);
	font-size: 0.875em;
	font-weight: normal;
	margin: 0px;
`;

export const ContentContainer = styled.div`
	display: grid;
	grid-gap: 1em;

	@media (min-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);

		> * {
			grid-row: 1 / 3;
			margin-bottom: auto !important;
		}
	}
	@media (min-width: 1200px) {
		grid-column-gap: 1.75em;
		grid-template-columns: 1fr 1.5fr 1.5fr;
	}
`;

export const Message = styled.aside`
	align-items: center;
	background-color: ${primaryColor};
	border-radius: 4px;
	border-bottom-right-radius: 0px;
	display: flex;
	margin-bottom: 1em;
	position: relative;

	&::after {
		content: ' ';
		border: 8px solid ${lighten(0.05, primaryColor)};
		border-bottom-color: transparent;
		border-left-color: transparent;
		position: absolute;
		right: 0px;
		top: 100%;
	}

	@media (min-width: 992px) {
		grid-column: 2;
		grid-row: 2;
		margin-bottom: 0px;
		margin-top: 1em;

		&::after {
			border-bottom-color: ${lighten(0.05, primaryColor)};
			border-top-color: transparent;
			bottom: 100%;
			top: auto;
		}
	}
`;

export const MessageIcon = styled(MdChatBubbleOutline)`
	color: #fff;
	font-size: 120px;
	margin: auto 1.5rem;
`;

export const MessageText = styled.span`
	background-color: ${lighten(0.05, primaryColor)};
	color: #fff;
	display: block;
	line-height: 1.5;
	padding: 1.5em;
	text-align: center;
	word-break: break-word;
`;

const Section = styled.section`
	background-color: #fff;
	border-bottom: 5px solid ${secondaryColor};
	border-radius: 4px;
	color: #bbb;
	padding: 1em 1em 2em 1em;
`;

const SectionTitle = styled.h2`
	font-size: 1em;
	font-weight: normal;
	margin-bottom: 2.5em;
	margin-top: 0px;
	text-transform: uppercase;
`;

export const Tracking = styled(Section)`
	@media (min-width: 992px) {
		grid-row: 1 / 2;
	}
`;

export const Status = styled(Section)`
	display: grid;
	grid-gap: 1em;
`;

export const StatusTitle = styled(SectionTitle)`
	margin: 0px;
`;

export const TrackingTitle = styled(SectionTitle)``;

export const Products = styled(Section)``;

export const ProductsTitle = styled(SectionTitle)`
	margin-bottom: 1em;
`;

export const Logo = styled.img`
	display: block;
	margin: 2em auto 1em auto;
	width: 160px;
`;

export const Link = styled.a`
	color: ${primaryColor};
	display: block;
	text-align: center;
`;

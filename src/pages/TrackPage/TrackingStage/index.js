import React from 'react';
import { MdCheck, MdInfoOutline, MdTimer } from 'react-icons/md';

import { Container, Time, Icon, Name, Info } from './styles';
import { primaryColor, successColor } from '../../../assets/colors';

export default function TrackingStage({
	date,
	year,
	name,
	finished,
	current,
	order
}) {
	const first = order === 1;
	const unreached = !finished && !current;
	const color = current ? successColor : finished ? primaryColor : '#ddd';

	return (
		<Container first={first}>
			<Time>
				{date}
				<br />
				{year}
			</Time>

			<Icon color={color} order={order} unreached={unreached} first={first}>
				{finished && <MdCheck />}
				{current && <MdTimer />}
			</Icon>
			<Name>{name}</Name>
			<Info>
				<MdInfoOutline />
			</Info>
		</Container>
	);
}

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import TrackPage from './pages/TrackPage';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={LoginPage} />
		<Route exact path="/track" component={TrackPage} />
	</Switch>
);

export default Routes;

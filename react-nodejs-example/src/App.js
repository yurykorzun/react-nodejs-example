import React, { Fragment } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import {
	CssBaseline,
	withStyles,
} from '@material-ui/core';

import AppHeader from './components/AppHeader';
import Home from './Home';

const styles = theme => ({
	main: {
		padding: theme.spacing(3),
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing(2),
		},
	},
});

const App = ({ classes }) => (
	<Fragment>
	  <CssBaseline />
	  <AppHeader />
	  <main className={classes.main}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
        </HashRouter>
	  </main>
	</Fragment>
  );

export default withStyles(styles)(App);
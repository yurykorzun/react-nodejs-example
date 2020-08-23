import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

  
export default class UserList extends Component
{
	state = {
		users: []
	}

	componentDidMount()
	{
		/*fetch("http://localhost:3200/get")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					users: result
				});
			})*/
	};

	render()
	{
		return (
			<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
				<TableRow>
					<TableCell>#</TableCell>
					<TableCell>First Name</TableCell>
					<TableCell>Last Name</TableCell>
					<TableCell align="right">Info</TableCell>
				</TableRow>
				</TableHead>
				<TableBody>
				{this.state.users.map((row, index) => (
					<TableRow key={index}>
						<TableCell>{index + 1}</TableCell>
						<TableCell>{row.firstName}</TableCell>
						<TableCell>{row.lastName}</TableCell>
						<TableCell align="right">${row.info}</TableCell>
					</TableRow>
				))}
				</TableBody>
			</Table>
			</TableContainer>
		)
	}
}

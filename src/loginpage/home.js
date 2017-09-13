import React from 'react';

import axios from 'axios';


class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {user: "", pass: ""};
		this.formSubmit = this.formSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	handleFormChange(event, index) {
		console.log(event.target.value);
		if (index === 0) {
			this.setState({user: event.target.value});
		} else if (index === 1) {
			this.setState({pass: event.target.value});
		}
		
	}

	formSubmit(e) {
		e.preventDefault();
		console.log('submit');
		axios.get('/login')
		.then((res) => {
			console.log(res);
			window.history.pushState(null, null, '/login')
		})
		.catch((err) => {
			console.log(err);
		});
	}

	render() {
		return (
			<form onSubmit={this.formSubmit} >
			  <label>
			    username:<br></br>
			    <input type="text" onChange={(e) => this.handleFormChange(e, 0)} value={this.state.user} name="name" />
			  </label><br></br>
			  <label>
			    password:<br></br>
			    <input type="password" onChange={(e) => this.handleFormChange(e, 1)} value={this.state.pass} name="name" />
			  </label><br></br>
			  <input type="submit" value="Submit" />
			</form>
		);
	}
}

const Header = () => {
	return (
				<div id="logo">
					<h1><a href="/" id="logoLink">Marta Breeze Card Management</a></h1>
				</div>
	);
};



const Home = () => {
	return (
		<div id="page">
				<Header></Header>
				
				<div id="content">
					<p>
						Thank you for riding with MARTA! To enhance your user experience, we have created this website to allow you to easily purchase and reload your Breeze Card online, as well as keep track of your ride history.
					</p>
					
				</div>
				<div><LoginForm></LoginForm></div>
				
			</div>
	);
};

export default Home;
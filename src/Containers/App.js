import React, { Component } from 'react';
import CardArray from '../Components/CardArray';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(answer => answer.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
			this.setState({ searchfield: event.target.value })
	}

	render(){
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ?
			<h1 className='tc'>Loading</h1> :
			(	
				<div className = 'tc'>.
					<h1 className= 'f1'> Robofriends</h1>
					<SearchBar searchChange={this.onSearchChange}/>
					<Scroll>
						<CardArray robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}
}


export default App;
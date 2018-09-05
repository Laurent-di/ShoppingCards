import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HeaderBar from './HeaderBar';
import GridListCards from './GridListCards';
import AddItem from './AddItem';
import FooterBar from './FooterBar';
import data from '../public/data.json';

import './scss/stylesheet.scss';

const Categories = [
	'Office',
	'Market',
	'Gym',
	'School',
	'Home',
	'Theatre'
];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: [],
		};
		this.removeItem = this._removeItem.bind(this);
		this.removeAll = this._removeAll.bind(this);
		this.addItemHandler = this._addItemHandler.bind(this);
	}

	componentWillMount() {
		if (localStorage.getItem('content')) {
			this.setState({
				content: JSON.parse(localStorage.getItem('content'))
			});
		} else {
			this.setState({
				content: data
			});

			localStorage.setItem('content', JSON.stringify(data));
		}
	}


	_removeItem(itemIndex) {
		const cards = this.state.content;
		cards.splice(itemIndex, 1);

		this.setState({content: this.state.content});
		localStorage.setItem('content', JSON.stringify(cards));

	}

	_removeAll() {
		const cards = this.state.content;
		cards.splice(0);

		this.setState({content: this.state.content});
		localStorage.setItem('content', JSON.stringify(cards));
	}

	_addItemHandler(item){debugger;
		const cards = this.state.content;
		cards.push(item);

		console.log('this is cards', cards);
		// console.log('this is argument', item);

		this.setState({content: this.state.content});
		localStorage.setItem('content', JSON.stringify(cards));
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className='wrapper'>
					<HeaderBar/>
					{/*<GridListCards*/}
						{/*items={this.state.content}*/}
						{/*removeItem={this.removeItem}*/}
					{/*/>*/}
					<AddItem
						categories={Categories}
						items={this.state.content}
						addItemHandler={this.addItemHandler}
					/>
					<FooterBar
						items={this.state.content}
						removeAll={this.removeAll}
					/>
				</div>
			</MuiThemeProvider>
		)
	}
}

injectTapEventPlugin();

export default App;
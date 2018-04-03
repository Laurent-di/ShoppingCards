import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HeaderBar from './HeaderBar';
import GridListCards from './GridListCards';
import AddPage from './AddPage';
import FooterBar from './FooterBar';
import data from '../uploads/data.json';

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
        }
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

    render() {
        return (
            <MuiThemeProvider>
                <div className='wrapper'>
                    <HeaderBar/>
                    <GridListCards items={this.state.content}/>
                    {/*<AddPage items={Categories} />*/}
                    <FooterBar items={this.state.content}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

injectTapEventPlugin();

export default App;
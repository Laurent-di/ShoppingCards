import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';

class FooterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfItems: 0,
            sumPrices: 0,
            avgPrice: 0
        };

        this.handleClick = this._handleClick.bind(this);
    }

    _handleClick() {
        alert('Remove all items event');
    }

    componentWillMount() {
        let items = this.props.items;
        let numberOfItems = items.length;
        let sumPrices = 0;
        let avgPrice;

        items.forEach((record) => {
            sumPrices += record.price;
        });

        sumPrices = Math.round(sumPrices * 100) / 100;
        avgPrice = Math.round((sumPrices / numberOfItems) * 100) / 100;

        this.setState({
            numberOfItems: numberOfItems,
            sumPrices: sumPrices,
            avgPrice: avgPrice
        });
    }

    render() {
        return (
            <Toolbar className='footer'>
                <ToolbarGroup firstChild={false} className='footer__counter'>
                    <div className='footer__counter__sum'>Count:{this.state.numberOfItems}</div>
                    <div className='footer__counter__amount'>Amount:{this.state.sumPrices}</div>
                    <div className='footer__counter__average'>Average price:{this.state.avgPrice}</div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FlatButton
                        className='footer__button'
                        label="Remove all"
                        icon={<ActionDeleteForever/>}
                        onClick={this.handleClick}
                    />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default FooterBar;
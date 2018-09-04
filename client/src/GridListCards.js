import React from 'react';
import SimpleCard from './SimpleCard';
import PropTypes from "prop-types";

class GridListCards extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='main__content'>
					{this.props.items.map((item, index) => {
						return (
							<SimpleCard key={index} data={item} index={index}
													removeItem={this.props.removeItem}
							/>
						)
					})}
				</div>
			</div>
		);
	}
}

GridListCards.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string
	})).isRequired
};

export default GridListCards;
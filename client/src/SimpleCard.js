import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PropTypes from 'prop-types';

class SimpleCard extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteCart = this.handleDeleteCart.bind(this);
	}

	handleDeleteCart() {
		let index = parseInt(this.props.index);
		this.props.removeItem(index);
	}

	render() {
		return (
			<div className='card main__content__card'>
				<IconButton onClick={this.handleDeleteCart} className='main__content__card__close'>
					<NavigationClose/>
				</IconButton>
				<div className='main__content__card__image'>
					<img src="" alt="There is image"/>
				</div>
				<div>
					<div className='main__content__card__list__item'>
						<div className='main__content__card__list__item__title'>Name:</div>
						<div className='main__content__card__list__item__title__name'>{this.props.data.name}</div>
					</div>
					<div className='main__content__card__list__item'>
						<div className='main__content__card__list__item__title'>Category:</div>
						<div className='main__content__card__list__item__category'>{this.props.data.category}</div>
					</div>
					<div className='main__content__card__list__item'>
						<div className='main__content__card__list__item__title'>Price:</div>
						<div className='main__content__card__list__item__price'>${this.props.data.price}</div>
					</div>
					<div className='main__content__card__list__item'>
						<div className='main__content__card__list__item__title'>Description:</div>
						<div className='main__content__card__list__item__description'>{this.props.data.description || ''}</div>
					</div>
				</div>
			</div>
		);
	}
}

SimpleCard.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		description: PropTypes.string
	}).isRequired
};

export default SimpleCard;
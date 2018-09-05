import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class AddItem extends Component {
	constructor(props){
		super(props);
		this.state = {
			data:{
				name: '',
				category: '',
				price: 0,
				description: '',
			},
			errorMessage: ''

		};
		this.handleAddItem = this._handleAddItem.bind(this);
		this.handleChangeCategory = this._handleChangeCategory.bind(this);
		this.handleChangePrice = this._handleChangePrice.bind(this);
		this.handleChangeProduct = this._handleChangeProduct.bind(this);
		this.handleChangeDescription = this._handleChangeDescription.bind(this);
		this.validateInputs = this._validateInputs.bind(this);
		this.errorMessage = this._errorMessage.bind(this);
	}

	_handleChangeCategory(event, index, category) {
		this.setState({
			data:{
				...this.state.data,
				category,
			}
		});
	}

	_handleChangePrice(e) {
		this.setState({
			data:{
				...this.state.data,
				price: e.target.value,
			}
		});
	}

	_handleChangeProduct(e){
		this.setState({
			data:{
				...this.state.data,
				name: e.target.value,
			}
		});
	}

	_handleChangeDescription(e){
		this.setState({
			data:{
				...this.state.data,
				description: e.target.value,
			}
		})
	}

	_validateInputs(e){debugger;
		const st = this.state.data;
		if(st.category !== '' && st.name !== '' && st.price !== 0){
			this._handleAddItem();
		}else{
			e.preventDefault();
			this.errorMessage();
		}
	}

	_handleAddItem() {
		const state = this.state.data;
		this.props.addItemHandler(state);
	}


	_errorMessage(){
		const state = this.state.data;
		if(state.name === '' || state.category === '' || state.price === 0){
			this.setState({errorMessage: 'This field must be filled'});
		}else{
			this.setState({errorMessage: ''});
		}
	}

	render() {
		const state = this.state.data;
		return (
			<div className='fields'>
				<div className='fields__title'>
					<h2>Add Card</h2>
				</div>
				<TextField
					className='fields__inputs__product__label'
					name='Product'
					hintText="Name"
					type='text'
					value={state.name}
					onChange={this.handleChangeProduct}
					errorText={this.state.errorMessage}
				/>
				<br/>
				<SelectField
					className='fields__inputs__category__label'
					floatingLabelText='Category'
					value={state.category}
					onChange={this.handleChangeCategory}
					errorText={this.state.errorMessage}
				>
					{this.props.categories.map((index) => {
						return <MenuItem value={index} key={index} primaryText={index}/>
					})}
				</SelectField>
				<br/>
				<TextField
					className='fields__inputs__price__label'
					floatingLabelText="Price"
					type="number"
					value={ state.price === 0 ? '' : state.price }
					onChange={this.handleChangePrice}
					errorText={this.state.errorMessage}
				/>
				<br/>
				<TextField
					className='fields__inputs__description__label'
					floatingLabelText="Message Field"
					multiLine={true}
					rows={2}
					value={state.description}
					onChange={this.handleChangeDescription}
				/>
				<br/>
				<div className='fields__inputs__button'>
					<RaisedButton
						label="Push"
						backgroundColor='#7FFF00'
						onClick={this.validateInputs}
					/>
				</div>
			</div>
		);
	};
}

export default AddItem;
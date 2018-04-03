import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

class AddPage extends Component {
    render() {
        return (
            <div className='fields'>
                <TextField
                    className='fields__inputs__product__label'
                    name='Product'
                    hintText="Product1"
                />
                <br/>
                <SelectField
                    className='fields__inputs__category__label'
                    onChange={this.handleChange}
                >
                    {this.props.items.map((index) => {
                        return <MenuItem value={index} key={index} primaryText={index}/>
                    })}
                </SelectField>
                <br/>
                <TextField
                    className='fields__inputs__price__label'
                    floatingLabelText="Price"
                    type="number"
                />
                <br/>
                <TextField
                    className='fields__inputs__description__label'
                    floatingLabelText="Message Field"
                    multiLine={true}
                    rows={2}
                />
                <br/>
                <div className='fields__inputs__button'>
                    <RaisedButton
                        label="Add"
                        backgroundColor='#7FFF00'
                    />
                </div>
            </div>
        );
    };
}

export default AddPage;
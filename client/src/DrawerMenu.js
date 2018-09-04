import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleToggle = this._handleToggle.bind(this);
        this.handleClose = this._handleClose.bind(this);
    }

    _handleToggle() {
        this.setState({open: !this.state.open});
    }

    _handleClose() {
        this.setState({open: false});
    }

    render() {
        return (
            <div>
                <Toolbar className='header'>
                    <ToolbarGroup>
                        <IconButton onClick={this.handleToggle}>
                            <NavigationMenu/>
                        </IconButton>
                        <ToolbarTitle text="Catalog" className='header__title'/>
                    </ToolbarGroup>
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}
                    >
                        <MenuItem onClick={this.handleClose}>Catalog</MenuItem>
                        <MenuItem onClick={this.handleClose}>Add item</MenuItem>
                    </Drawer>
                </Toolbar>
            </div>
        );
    }
}

export default DrawerMenu;
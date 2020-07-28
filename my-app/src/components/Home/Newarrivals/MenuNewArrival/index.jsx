import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MenuNewArrival extends PureComponent {
	constructor(props){
		super(props);
		this.state = {
			ItemMenus: [],
		}
	}


	handleMenuArrival = (ItemMenu) =>{
		const { onActiveMenu } = this.props;
		if (onActiveMenu) {
			onActiveMenu(ItemMenu);
		}
	}

    render() {
		 

		const { activeMenuArrival , ItemMenus } = this.props;

		//console.log(activeMenuArrival);

        return (
            <div className="row align-items-center">
				<div className="col text-center">
					<div className="new_arrivals_sorting">
						<ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
							{ ItemMenus.map( ItemMenu =>{
								const isActive = ItemMenu.id === activeMenuArrival;
								return(
									<li 
								key={ItemMenu.id} 
								className={isActive? 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center active' : 'grid_sorting_button button d-flex flex-column justify-content-center align-items-center' }  
								onClick={()=> this.handleMenuArrival(ItemMenu)}>{ItemMenu.name}</li>
								)
								
							})}
						</ul>
					</div>
				</div>
			</div>
        );
    }
}

MenuNewArrival.propTypes = {
	activeMenuArrival: PropTypes.string,
	ItemMenus: PropTypes.array,
	onActiveMenu: PropTypes.func,
};
MenuNewArrival.defaultProps = {
	activeMenuArrival: '',
	ItemMenus: [],
	onActiveMenu: null,
}
export default MenuNewArrival;
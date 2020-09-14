import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider'; 
import 'rc-slider/assets/index.css';

class Sidebar extends PureComponent {

    constructor(props) {
		super(props);
		this.state = {
			sliderValues: [10000, 100000]
		};

	}

    handleChange = (sliderValues) => {
		this.setState({ sliderValues });
		const { onChangeSLider } = this.props;
		if (onChangeSLider) {
			onChangeSLider(sliderValues);
		}
    };

    handleFilterCat = (ItemMenus) =>{
        const { onChangeCat } = this.props;
        if (onChangeCat) {
			onChangeCat(ItemMenus);
		}
    }

    handleRemoveFilter = () =>{
        this.setState({ sliderValues: [10000, 100000] });
        console.log('sdf');
        const { onRemoveFilter } = this.props;
        if (onRemoveFilter) {
			onRemoveFilter();
		}
    }
    
    render() {

        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);
        

        const { ItemMenus, activeCat} = this.props;
        const { sliderValues} = this.state;
       
        //console.log(activeCat);
        const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);

        return (
            <div className="sidebar">
                <div className="sidebar_section">
                    <div className="sidebar_title">
                        <h5>Product Category</h5>
                    </div>
                    <ul className="sidebar_categories">
                        {
                            
                            ItemMenus.map(ItemMenus =>{

                                const isActive = ItemMenus.id === activeCat;

                                return(
                                <li className={isActive? 'active' : ''} key={ItemMenus.id}><span onClick={() => this.handleFilterCat(ItemMenus)} >{ isActive ? <i className="fa fa-angle-double-right" aria-hidden="true"></i> :''} {ItemMenus.name}</span></li>
                                )
                                
                            })
                        }
                    </ul>
                </div>

                 
                <div className="sidebar_section">
                    <div className="sidebar_title">
                        <h5>Filter by Price</h5>
                    </div>
                    <p id="amount">{ numberFormat(sliderValues[0]) } - { numberFormat(sliderValues[1]) }</p>

                    <Range
                        step={10000}
                        defaultValue={sliderValues}
                        min={0}
                        max={10000000}
                        onAfterChange={this.handleChange}
                    />

                    <div className="filter_button" onClick={() =>this.handleRemoveFilter()}><span>Remove Filter</span></div>
                

                </div>

            </div>
        );
    }
}

Sidebar.propTypes = {
    ItemMenus: PropTypes.array,
    sliderValues: PropTypes.array.isRequired,
    onChangeSLider: PropTypes.func,
    onChangeCat: PropTypes.func,
    activeCat: PropTypes.string,
    onRemoveFilter: PropTypes.func,
    
};
Sidebar.defaultProps = {
    ItemMenus: [],
    sliderValues: [],
    onChangeSLider: null,
    onChangeCat: null,
    activeCat: '',
    onRemoveFilter: '', 
}

export default Sidebar;
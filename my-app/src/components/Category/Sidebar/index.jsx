import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider'; 
import 'rc-slider/assets/index.css';

class Sidebar extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            sliderValues: [10000, 100000],
        }
    }

    handleChange = (sliderValues) => {

		//console.log(sliderValues);
		this.setState({ sliderValues });

		const { onChangeSLider } = this.props;
		if (onChangeSLider) {
			onChangeSLider(sliderValues);
		}

    };
    
    render() {

        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);
        

        const {ItemMenus} = this.props;
        const {sliderValues} = this.state;
        //console.log(sliderValues);
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
                            ItemMenus.map(ItemMenus =>(
                            <li key={ItemMenus.id}><a href="#">{ItemMenus.name}</a></li>
                            ))
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
                            max={500000}

                            onAfterChange={this.handleChange}

                        />

                    <div className="filter_button"><span  > filter</span></div>
                
                    
                    {/* <p>
                        <input type="text" id="amount" readonly="" style="border:0; color:#f6931f; font-weight:bold;">
                    </p>
                    <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 58%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 58%;"></span></div>
                    <div className="filter_button"><span>filter</span></div> */}
                </div>

            </div>
        );
    }
}

Sidebar.propTypes = {
    ItemMenus: PropTypes.array,
    sliderValues: PropTypes.array.isRequired,
    onChangeSLider: PropTypes.func,
};
Sidebar.defaultProps = {
    ItemMenus: [],
    sliderValues: [],
    onChangeSLider: null,
}

export default Sidebar;
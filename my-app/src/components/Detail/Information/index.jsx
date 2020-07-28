import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Information extends PureComponent {
    render() {
        return (
            <div id="tab_2" className="tab_container">
                <div className="row">
                    <div className="col additional_info_col">
                        <div className="tab_title additional_info_title">
                            <h4>Additional Information</h4>
                        </div>
                        <p>COLOR:<span>Gold, Red</span></p>
                        <p>SIZE:<span>L,M,XL</span></p>
                    </div>
                </div>
            </div>
        );
    }
}

Information.propTypes = {

};

export default Information;
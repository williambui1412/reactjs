import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Breadcrumb extends PureComponent {
    render() {
        return (
            <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
                </ul>
            </div>
        );
    }
}

Breadcrumb.propTypes = {

};

export default Breadcrumb;
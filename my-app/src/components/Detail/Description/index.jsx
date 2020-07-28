import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Description extends PureComponent {

  
    render() {
        const { detailProduct } = this.props;
        //console.log(detailProduct);
        return (
            <div dangerouslySetInnerHTML={{ __html: detailProduct.description }}>
            </div>
        );
    }
}

Description.propTypes = {
    detailProduct: PropTypes.object,
};
Description.defaultProps = {
    detailProduct: {},
}
export default Description;
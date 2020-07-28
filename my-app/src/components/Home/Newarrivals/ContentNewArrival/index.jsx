import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addCart } from '../../../../actions/cart';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onStatus } from '../../../../actions/status';


class ContentNewArrival extends PureComponent { 

    handlAddCart = (ListProduct) => {
		const currentQuantity = 1;
        this.props.addCart(ListProduct, currentQuantity);
        this.props.onStatus();
    }
    
    render() {

        const { ListProducts ,cartList, status } = this.props;
        console.log(status);

        const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);

        return (
            <>
                <div className="row">
                    <div className="col">
                        <div className="product-grid">
                            {
                                ListProducts.map(ListProduct =>(
                                    <div key={ListProduct.id} className="product-item men">
                                        <div className="product discount product_filter">
                                            <div className="product_image">
                                                <img src={ListProduct.images[0]} alt={ListProduct.name} />
                                            </div>
                                            <div className="favorite favorite_left"></div>
                                            { ListProduct.promotionPercent > 0 && <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-{ListProduct.promotionPercent}%</span></div>  }
                                            <div className="product_info">
                                                <h6 className="product_name"><Link to={`/detail/${ListProduct.id}`}>{ListProduct.name}</Link></h6>
                                            <div className="product_price">{ numberFormat(ListProduct.salePrice) }{ ListProduct.salePrice !== ListProduct.originalPrice && <span>{ numberFormat(ListProduct.originalPrice) }</span> }</div>
                                            </div>
                                        </div>
                                        <div className="red_button add_to_cart_button"><span onClick={() => this.handlAddCart(ListProduct)}>add to cart</span></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

ContentNewArrival.propTypes = {
    ListProducts: PropTypes.array.isRequired,
};

const mapStareToProp = state => ({
    cartList: state.cart.list,
    status: state.status.popup,
})

const mapDispatchToProp = dispatch => {
	return bindActionCreators({
        addCart: addCart,
        onStatus: onStatus,
	}, dispatch)
}

export default connect(mapStareToProp, mapDispatchToProp)(ContentNewArrival);
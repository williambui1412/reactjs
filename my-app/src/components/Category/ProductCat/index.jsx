import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addCart } from '../../../actions/cart';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ProductCat extends PureComponent {

    handlAddCart = (ItemCat) => {
		const currentQuantity = 1;
		this.props.addCart(ItemCat, currentQuantity);
    }
    
    render() {
        const { ItemCat } = this.props;
        //console.log(cartList);

        const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
        
        return (
            <div className="product-grid" >

                {
                    ItemCat.map(ItemCat =>(
                        <div key={ItemCat.id} className="product-item men">
                            <div className="product discount product_filter">
                                <div className="product_image">
                                    <img src={ItemCat.images[0]} alt={ItemCat.name} />
                                </div>
                                <div className="favorite favorite_left"></div>
                                { ItemCat.promotionPercent > 0 && <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-{ItemCat.promotionPercent}%</span></div>  }
                                <div className="product_info">
                                    <h6 className="product_name"><Link to={`/detail/${ItemCat.id}`}>{ItemCat.name}</Link></h6>
                                <div className="product_price">{ numberFormat(ItemCat.salePrice) }{ ItemCat.salePrice !== ItemCat.originalPrice && <span>{ numberFormat(ItemCat.originalPrice) }</span> }</div>
                                </div>
                            </div>
                            <div className="red_button add_to_cart_button"><span onClick={() => this.handlAddCart(ItemCat)}>add to cart</span></div>
                        </div>
                    ))
                }

            </div>
        );
    }
}

ProductCat.propTypes = {
    ItemCat: PropTypes.array,
    addCart: PropTypes.func.isRequired,
};
ProductCat.defaultProps = {
    ItemCal: [],
};

const mapStareToProp = state => ({
	//cartList: state.cart.list
})

const mapDispatchToProp = dispatch => {
	return bindActionCreators({
		addCart: addCart,
	}, dispatch)
}

export default connect(mapStareToProp, mapDispatchToProp)(ProductCat);
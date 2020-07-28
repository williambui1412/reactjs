import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IncreaseCart, DecreaseCart, RemoveItemCart } from '../../actions/cart';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';


class Cart extends PureComponent {

    handleIncrease = (cartList) =>{
        
        const quantity = cartList.quantity;
        const itemCart = cartList.product;
        //console.log(quantity);
        //console.log(itemCart);
        this.props.IncreaseCart(itemCart,quantity);
    }

    handleDecrease = (cartList) =>{
        const quantity = cartList.quantity -1;
        const itemCart = cartList.product;
        this.props.DecreaseCart(itemCart,quantity);
    }

    handleRemoveItem = ( cartList) =>{
        this.props.RemoveItemCart(cartList);
    }
    
    render() {
        const { cartList, cartTotal } = this.props;

        let counter = 0;
		for (const cart of cartList) {
			counter = counter + cart.quantity;
        }

        const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);

        

        //console.log(cartList); 
        return (
            <div className="section-cart">
                <div className="container">
                    <h2 className="ttl-cart">Giỏ Hàng <span>({counter})</span></h2>
                    <div className="row">
                        <div className="col-md-9">
                            {
                                cartList.map(cartList =>(
                                    <div className="row" key={cartList.product.id}>
                                        <div className="col-md-2 images">
                                            <img src={cartList.product.images[0]} alt=""/>
                                        </div>
                                        <div className="col-md-5">
                                            <p>{cartList.product.name}</p>
                                            <div><span className="remove" onClick={() => this.handleRemoveItem( cartList ) }>Xóa</span></div>
                                        </div>
                                        <div className="col-md-3 text-right">
                                            <div><b>{ numberFormat(cartList.product.salePrice) }</b></div>
                                            <div>
                                                { cartList.product.salePrice !== cartList.product.originalPrice && <strike>{ numberFormat(cartList.product.originalPrice) }</strike> }
                                                { cartList.product.promotionPercent >0 && <span> | {cartList.product.promotionPercent}% </span> }
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="box-Qty">
                                                <span onClick={()=> this.handleDecrease(cartList)}>-</span>
                                                <input type="tel" readOnly value={cartList.quantity} /> 
                                                <span onClick={()=> this.handleIncrease(cartList)}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div className="col-md-3">
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <th><h6>Tạm tính :</h6></th>
                                        <td className="text-right">{ numberFormat(cartTotal)}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>Giảm giá :</h6></th>
                                        <td className="text-right">-{numberFormat(0)}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>&nbsp;</h6></th>
                                        <td className="text-right"></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th><h4>Thành tiền :</h4></th>
                                        <td className="text-right">{numberFormat(cartTotal)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <button className="btn-pay">Thanh Toán</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    cartList: PropTypes.array.isRequired,
};

const mapStateToProp = state => ({
    cartList: state.cart.list,
    cartTotal: state.cart.cartTotal,
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
        IncreaseCart: IncreaseCart,
        DecreaseCart: DecreaseCart,
        RemoveItemCart: RemoveItemCart,
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(Cart);
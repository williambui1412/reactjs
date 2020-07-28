import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link, useHistory, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { offStatus } from '../../../actions/status';

class Header extends PureComponent {

    handelOffclick = () =>{
        this.props.offStatus(); 
        
       
    }
    render() {
        const {cartList, status} = this.props;
        
        let counter = 0;
		for (const cart of cartList) {
			counter = counter + cart.quantity;
        }
        console.log(status);
        

        return (
            <>
                <header className="header trans_300">

                    <div className="top_nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="top_nav_left">free shipping on all u.s orders over $50</div>
                                </div>
                                <div className="col-md-6 text-right">
                                    <div className="top_nav_right">
                                        <ul className="top_nav_menu">

                                    
                                            <li className="language">
                                                <a href="#">
                                                    English
                                                    <i className="fa fa-angle-down"></i>
                                                </a>
                                                <ul className="language_selection">
                                                    <li><a href="#">French</a></li>
                                                    <li><a href="#">Italian</a></li>
                                                    <li><a href="#">German</a></li>
                                                    <li><a href="#">Spanish</a></li>
                                                </ul>
                                            </li>
                                            <li className="account">
                                                <a href="#">
                                                    My Account
                                                    <i className="fa fa-angle-down"></i>
                                                </a>
                                                <ul className="account_selection">
                                                    <li><a href="#"><i className="fa fa-sign-in" aria-hidden="true"></i>Sign In</a></li>
                                                    <li><a href="#"><i className="fa fa-user-plus" aria-hidden="true"></i>Register</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main_nav_container">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-right">
                                    <div className="logo_container">
                                        <a href="#">Demo<span>Shop</span></a>
                                    </div>
                                    <nav className="navbar">
                                        <ul className="navbar_menu">
                                            <li>
                                                <NavLink className="nav__link" exact to="/">home</NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="nav__link" to="/categories">shop</NavLink>
                                            </li>
                                            <li><a href="#">promotion</a></li>
                                            <li><NavLink className="nav__link" to="/blogs">blog</NavLink></li>
                                            <li><NavLink className="nav__link" to="/contact">contact</NavLink></li>
                                        </ul>
                                        <ul className="navbar_user">
                                            <li className="checkout">
                                                <Link to="/cart">
                                                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                                    <span id="checkout_items" className="checkout_items">{counter}</span>                                                
                                                </Link>
                                                {status === 1 && <div className="box-show-cart">
                                                    <p><i className="fa fa-check-circle"></i>Thêm vào giỏ hàng thành công!</p>
                                                    <Link onClick={()=> this.handelOffclick()} to="/cart">Xem giỏ hàng và thanh toán</Link>
                                                </div> }
                                            </li>
                                        </ul>
                                        <div className="hamburger_container">
                                            <i className="fa fa-bars" aria-hidden="true"></i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                </header> 
            </>
        );
    }
}

Header.propTypes = {

};


const mapStareToProp = state => ({
    cartList: state.cart.list,
    status: state.status.popup,
})

const mapDispatchToProp = dispatch => {
	return bindActionCreators({
        offStatus: offStatus,
	}, dispatch)
}

export default connect(mapStareToProp, mapDispatchToProp)(Header);

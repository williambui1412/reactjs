import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class HeadDetail extends PureComponent {

    handleChangeImage = (imageProduct , index) =>{
        const { onImageChange } = this.props;
        if (onImageChange) {
            onImageChange(imageProduct , index);
        }
    }

    handleIncrease = (currentQuantity) =>{
        const { onIncrease } = this.props;
        if (onIncrease) {
            onIncrease(currentQuantity);
        }
    }

    handleDecrease = (currentQuantity) =>{
        const { onDecrease } = this.props;
        if (onDecrease) {
            onDecrease(currentQuantity);
        }
    }
    

    render() {
        const { detailProduct, imageProduct, imageProductThumb, activeItem, currentQuantity } = this.props;        

        const numberFormat = (value) =>
        new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);

        return (

            
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="categories.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Men's</a></li>
                                <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Single Product</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="single_product_pics">
                            <div className="row">
                                <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                    <div className="single_product_thumbnails">
                                        <ul>
                                            {
                                                imageProduct.map( (imageProduct, index) => <li className={ index == activeItem ? 'active' : '' } key={index} onClick={()=>this.handleChangeImage(imageProduct ,index ) }><img src={ imageProduct } alt=""  /></li>)
                                            } 
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-9 image_col order-lg-2 order-1">
                                    <div className="single_product_image">
                                        <div className="single_product_image_background" style={{backgroundImage: "url("+ imageProductThumb +")"   }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="product_details">
                            <div className="product_details_title">
                                <h2>{ detailProduct.name }</h2>
                                <p>{ detailProduct.shortDescription }</p>
                            </div>
                            { detailProduct.isFreeShip &&  <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                                <span className="ti-truck"></span><span>free delivery</span>
                            </div> }
                            
                            { detailProduct.originalPrice !== detailProduct.salePrice &&  <div className="original_price">{ numberFormat(detailProduct.originalPrice) }</div>}
                            <div className="product_price">{ numberFormat(detailProduct.salePrice) }</div>
                            <ul className="star_rating">
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star" aria-hidden="true"></i></li>
                                <li><i className="fa fa-star-o" aria-hidden="true"></i></li>
                            </ul>
                            <div className="product_color">
                                <span>Select Color:</span>
                                <ul>
                                    <li style={{ background: '#e54e5d' }} ></li>
                                    <li style={{ background: '#252525' }} ></li>
                                    <li style={{ background: '#60b3f3' }} ></li>
                                </ul>
                            </div>
                            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                <span>Quantity:</span>
                                <div className="quantity_selector">
                                    <span className="minus" onClick={ () =>{this.handleDecrease(currentQuantity)}}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                    <span id="quantity_value">{currentQuantity}</span>
                                    <span className="plus" onClick={ () =>{this.handleIncrease(currentQuantity)}}><i className="fa fa-plus" aria-hidden="true"></i></span>
                                </div>
                                <div className="red_button add_to_cart_button"><a href="#">add to cart</a></div>
                                <div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeadDetail.propTypes = {
    detailProduct: PropTypes.object,
    imageProduct: PropTypes.array,
    imageProductThumb: PropTypes.string,
    onImageChange: PropTypes.func,
    currentQuantity: PropTypes.number,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
};
HeadDetail.defaultProps = {
    detailProduct: {},
    imageProduct: [],
    imageProductThumb: '',
    onImageChange: null,
    currentQuantity: '',
    onIncrease: null,
    onDecrease: null,
}
export default HeadDetail;
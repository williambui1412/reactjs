import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import productApi from '../../api/productApi'; 
import HeadDetail from '../../components/Detail/HeadDetail';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Description from '../../components/Detail/Description';
import Information from '../../components/Detail/Information';
import Review from '../../components/Detail/Review';
import Page404 from '../Page404';

class DetailPage extends PureComponent {
    constructor(props){
        super(props);

        this.state={
            detailProduct: {},
            imageProduct: [],
            imageProductThumb: '',
            activeItem: 0,
            currentQuantity: 1,
        };
    }

    async componentDidMount() {
		try {
			const { match } = this.props;
			const itemProduct = await productApi.getById(match.params.postid);
			console.log(itemProduct);
            this.setState({ detailProduct: itemProduct });
            this.setState({ imageProduct: itemProduct.images.slice(0, 3) });
            this.setState({ imageProductThumb: itemProduct.images[0] });

		} catch (error) {
			console.log('Failed to fetch products: ', error.message);
		}

    }
    
    handleChangeImage = ( imageClick , index ) =>{
        this.setState({ imageProductThumb: imageClick });
        this.setState({ activeItem: index });
    }
    handleIncrease = (currentQuantity) =>{
        this.setState({ currentQuantity: currentQuantity + 1 });
    }
    
    handleDecrease = (currentQuantity) =>{
        let newQuantity = 0;
        if(currentQuantity <= 1){
            newQuantity = 1;
        }
        else{
            newQuantity = currentQuantity - 1;
        }
        this.setState({ currentQuantity: newQuantity });
    }
    

    render() {
        const { match } = this.props;
        const { detailProduct, imageProduct, imageProductThumb, activeItem, currentQuantity } = this.state;
       
        return (
            <>
                <HeadDetail 
                detailProduct={detailProduct} 
                imageProduct={imageProduct}
                imageProductThumb={imageProductThumb}
                onImageChange={this.handleChangeImage}
                activeItem={activeItem}
                currentQuantity={currentQuantity}
                onIncrease={this.handleIncrease}
                onDecrease={this.handleDecrease}
                />
                <div className="tabs_section_container">

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="tabs_container">
                                    <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                                        <li className="tab"><NavLink exact to={`${match.url}/description`}>Description</NavLink></li>
                                        <li className="tab"><NavLink to={`${match.url}/information`} >Additional Information</NavLink></li>
                                        <li className="tab"><NavLink to={`${match.url}/review`}>Reviews (2)</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row"> 
                            <div className="col">
                                <Switch>
                                    <Route 
                                        path="/detail/:postid/description" 
                                        render={(props) =>(
                                            <Description
                                                {...props}
                                                detailProduct={detailProduct}
                                            />
                                        )}
                                    />
                                    <Route path="/detail/:postid/information" component={Information} />
                                    <Route 
                                        path="/detail/:postid/review"  
                                        component={Review}
                                    />
                                    <Redirect path="/detail/:postid" to="/detail/:postid/description" />
                                    <Route component={Page404} /> 
                                </Switch>
                         
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

DetailPage.propTypes = {

};

export default DetailPage;
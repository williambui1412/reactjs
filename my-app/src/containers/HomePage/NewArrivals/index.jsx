import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MenuNewArrival from '../../../components/Home/Newarrivals/MenuNewArrival';
import ContentNewArrival from '../../../components/Home/Newarrivals/ContentNewArrival';
import menuApi from '../../../api/menuApi';
import productApi from '../../../api/productApi';

class NewArrival extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            activeMenuArrival: '32a63859-293f-4e5b-817e-968e28bf309d',
            ItemMenus: [],
            ListProducts: [],
            paramProductHome: { categoryId: '32a63859-293f-4e5b-817e-968e28bf309d', _page: 1, _limit: 10, },
			param: {
                _limit: 10,
                categoryId: '32a63859-293f-4e5b-817e-968e28bf309d',
            },
            loading: false,
        }
    }

    async componentDidMount(){

        // get menu
		try{
            const ItemMenu = await menuApi.getAll(); 
            //console.log(ItemMenu);
			this.setState({ ItemMenus: ItemMenu.data });
		} catch (error){
			console.log('Failed to fetch data:' , error); 
        }
        
        //get product
        try{
            const {paramProductHome} = this.state;
            const ListProduct = await productApi.getAll(paramProductHome);
            //console.log(ListProduct);
            this.setState({ ListProducts : ListProduct.data });
           
		} catch (error){
			console.log('Failed to fetch data:' , error); 
		}
    }
    
    handleMenuArrival = async (ItemMenu) =>{
        console.log('item click',ItemMenu);
        this.setState({loading: true});
        try {
			this.setState(async prevState => {
				const newParamProductHome = {
					...prevState.paramProductHome,
					categoryId: ItemMenu.id,
                };
                
                //console.log('new param', newParamProductHome);
				
				const itemProduct = await productApi.getAll(newParamProductHome);
				this.setState({ ListProducts: itemProduct.data });
                this.setState({ activeMenuArrival: ItemMenu.id });
                this.setState({loading: false});
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}

    }


    render() {

        const {activeMenuArrival, ItemMenus, ListProducts, loading} = this.state;
        
        return (
            <div className="new_arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="section_title new_arrivals_title">
                                <h2>New Arrivals</h2>
                            </div>
                        </div>
                    </div>
                    <MenuNewArrival 
                    activeMenuArrival={activeMenuArrival} 
                    ItemMenus={ItemMenus} 
                    onActiveMenu={ this.handleMenuArrival } />

                    { loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <ContentNewArrival ListProducts={ListProducts} /> }
                </div>
            </div>
        );
    }
}

NewArrival.propTypes = {

};

export default NewArrival;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/Common/Breadcrumb';
import Sidebar from '../../components/Category/Sidebar';
import SortTop from '../../components/Category/SortTop';
import SortBottom from '../../components/Category/SortBottom';
import ProductCat from '../../components/Category/ProductCat';
import productApi from '../../api/productApi';
import menuApi from '../../api/menuApi';

class Category extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            ItemCat: [], 
            ItemMenus: [],
            loading: false,
            paramProduct: {
				_page: 1,
				_limit: 16, 
            },
            defaultSort: [
				{ id: 1, value: "Default Sorting", _order: 'asc', sort: "0" },
				{ id: 2, value: "Price(↑)", _order: 'asc', sort: "salePrice" },
                { id: 3, value: "Product Name(↑)", _order: 'asc', sort: "name" },
                { id: 4, value: "Price giam3", _order: 'desc', sort: "salePrice" },
            ],
            pagination: {},
            valueDefaultSort: 'Default Sorting',
            numberItemDisplay: [
				{ id: 1, value: 4 },
				{ id: 2, value: 8 },
				{ id: 3, value: 12 },
                { id: 4, value: 16 },
                { id: 5, value: 2 },
            ],
            sliderValues: [10000, 100000],  
            activeCat: '',
        }
    }

    async componentDidMount (){
        this.setState({loading: true});


        // get menu
		try{
            const ItemMenu = await menuApi.getAll(); 
			this.setState({ ItemMenus: ItemMenu.data });
		} catch (error){
			console.log('Failed to fetch data:' , error); 
        }


        try{
            const {paramProduct} = this.state;
            const ItemCats = await productApi.getAll(paramProduct);
            this.setState({ ItemCat : ItemCats.data });
            this.setState({ pagination : ItemCats.pagination });
            //console.log(ItemCats);
            this.setState({loading: false});
        }
        catch(error){
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
        }
    }

    handleSortChange = async (defaultSort) => {
        //console.log(defaultSort);
        this.setState({loading: true});
        if (defaultSort.id === 1) {
            try {
                this.setState(async prevState => {
                    const newParamProduct = {
                        ...prevState.paramProduct,
                    };
                    delete newParamProduct._sort;
                    delete newParamProduct._order;
                    //console.log(newParamProduct);
                    const itemProduct = await productApi.getAll(newParamProduct);
                    this.setState({ ItemCat: itemProduct.data });
                    this.setState({ paramProduct: newParamProduct });
                    this.setState({ pagination: itemProduct.pagination });
                    this.setState({ valueDefaultSort: defaultSort.value });
                    this.setState({loading: false});
                })
            }
            catch (error) {
                console.log('Failed to fetch products: ', error.message);
                this.setState({loading: false});
            }
        }
        else{
            try {
				this.setState(async prevState => {
					const newParamProduct = {
						...prevState.paramProduct,
						_sort: defaultSort.sort,
						_order: defaultSort._order,
					};
					//console.log(newParamProduct);
                    const itemProduct = await productApi.getAll(newParamProduct);
                    //console.log(itemProduct.data);
					this.setState({ ItemCat: itemProduct.data });
					this.setState({ paramProduct: newParamProduct });
					this.setState({ pagination: itemProduct.pagination });
                    this.setState({ valueDefaultSort: defaultSort.value });
                    this.setState({loading: false});
				})
			} catch (error) {
                console.log('Failed to fetch products: ', error.message);
                this.setState({loading: false});
			}
        }
    }

    handleShowChange = async (numberItemDisplay) => {
         
        this.setState({loading: true});
        try {
			this.setState(async prevState => {
				const newparamProduct = {
					...prevState.paramProduct,
					_limit: numberItemDisplay.value, 
				};
				
                const ItemCats = await productApi.getAll(newparamProduct);
                //console.log(ItemCats);
                this.setState({ ItemCat: ItemCats.data });
                this.setState({ paramProduct: newparamProduct }); 
                this.setState({ pagination : ItemCats.pagination });
                this.setState({loading: false});
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}
    }

    handlePageChange = async (newpage) =>{
        //console.log(newpage);
        this.setState({loading: true});
        try {
			this.setState(async prevState => {
				const newparamProduct = {
					...prevState.paramProduct,
					_page: newpage, 
				};
				
                const ItemCats = await productApi.getAll(newparamProduct);
                //console.log(ItemCats);
                this.setState({ ItemCat: ItemCats.data });
                this.setState({ paramProduct: newparamProduct }); 
                this.setState({ pagination : ItemCats.pagination });
                this.setState({loading: false});
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}
    }

    handleChange = (sliderValues) => {
        //console.log(sliderValues);
        this.setState({loading: true});
		try {
			this.setState(async prevState => {
				const newParamProduct = {
					...prevState.paramProduct,
					_page: 1,
					salePrice_gte: sliderValues[0],
					salePrice_lte: sliderValues[1],
				};
				//console.log(newParamProduct);
				const itemProduct = await productApi.getAll(newParamProduct);
				this.setState({ ItemCat: itemProduct.data });
				this.setState({ paramProduct: newParamProduct });
                this.setState({ pagination: itemProduct.pagination });
                this.setState({ sliderValues: [sliderValues[0], sliderValues[1]] });
                this.setState({ loading: false});
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}
    }
    
    handleFilterCat = (ItemMenus) =>{

        this.setState({loading: true});
        
        try {
			this.setState(async prevState => {
				const newparamProduct = {
					...prevState.paramProduct,
					categoryId: ItemMenus.id, 
				};
				
                const ItemCats = await productApi.getAll(newparamProduct);
                //console.log(ItemCats);
                this.setState({ ItemCat: ItemCats.data });
                this.setState({ paramProduct: newparamProduct }); 
                this.setState({ pagination : ItemCats.pagination });
                this.setState({ activeCat : ItemMenus.id });
                this.setState({ loading: false });
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}
    }

    handleRemoveFilter = () =>{
        
        this.setState({loading: true});
        
        try {
			this.setState(async prevState => {
				const newparamProduct = {
                    _page: 1,
                    _limit: 16,
                    _order: 'asc', 
                };
				
                const ItemCats = await productApi.getAll(newparamProduct);
                //console.log(ItemCats);
                this.setState({ ItemCat: ItemCats.data });
                this.setState({ paramProduct: newparamProduct }); 
                this.setState({ pagination : ItemCats.pagination });
                this.setState({ activeCat : '' });
                
                this.setState({ valueDefaultSort: 'Default Sorting' });
                this.setState({ loading: false });
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}
    }

    render() {
        const {ItemCat, loading, defaultSort, valueDefaultSort, numberItemDisplay, pagination, ItemMenus, activeCat} = this.state;
        //console.log(ItemCat.length);
        return (
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <Breadcrumb />
                        <Sidebar 
                            activeCat={activeCat}
                            ItemMenus={ItemMenus}
                            onChangeSLider={this.handleChange}
                            onChangeCat={this.handleFilterCat}
                            onRemoveFilter={this.handleRemoveFilter}
                            //sliderValues={sliderValues}
                        />
                        <div className="main_content">
                            <div className="products_iso">
                                <div className="row">
                                    <div className="col">
                                        <SortTop 
                                        defaultSort={defaultSort}
                                        valueDefaultSort={valueDefaultSort} 
                                        onSortChange={this.handleSortChange}
                                        numberItemDisplay={numberItemDisplay}
                                        pagination={pagination}
                                        onShowChange={this.handleShowChange}
                                        onPageChange={this.handlePageChange}
                                        />
                                        { loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <ProductCat ItemCat={ItemCat} /> }
                                        <SortBottom 
                                        pagination={pagination}
                                        numberItemDisplay={numberItemDisplay}
                                        onShowChange={this.handleShowChange}
                                        onPageChange={this.handlePageChange}
                                        ItemCat={ItemCat}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Category.propTypes = {

};

export default Category;
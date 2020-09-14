import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItemBlog from '../../components/Blog/ListItemBLog';
import blogApi from '../../api/blogApi';
import ViewBlog from '../../components/Blog/ViewBlog';
import { bindActionCreators } from 'redux';
import { addView } from '../../actions/blog';
import { connect } from 'react-redux';


class BlogPage extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            ItemBlog: [],
            loading: false,
            pager: {}, 
            paramBlog: {
				_page: 1,
				_limit: 4, 
            },
        }
    }

    async componentDidMount () {
        this.setState({loading: true});
        
        try{
            const {paramBlog} = this.state;
            const NewItemBlogs = await blogApi.getAll(paramBlog);
            this.setState({ ItemBlog: NewItemBlogs.data });
            this.setState({ pager: NewItemBlogs.pagination });
            this.setState({loading: false});
            console.log(NewItemBlogs);
        } catch (error){
            console.log('Failed to fetch blog: ', error.message);
            this.setState({loading: false});
        }
    }

    handlePageBlogChange = async (newpage) =>{
        console.log(newpage);
        this.setState({loading: true});

        try {
			this.setState(async prevState => {
				const newparamBlog = {
					...prevState.paramBlog,
					_page: newpage, 
				};
				
                const NewItemBlogs = await blogApi.getAll(newparamBlog);
                this.setState({ ItemBlog: NewItemBlogs.data });
                this.setState({ pager: NewItemBlogs.pagination });
                console.log(NewItemBlogs);
             
                this.setState({loading: false});
			})
		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
        }
        
    }

    render() {
        const { ItemBlog, pager } = this.state;
        //const { viewBlog } = this.props;
        
        return (
            <div>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumbs d-flex flex-row align-items-center"><ul><li><a href="index.html">Home</a></li><li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Blog</a></li></ul></div>
                        </div>
                        <ListItemBlog ItemBlog={ItemBlog} pager={pager} onPageBlogChange={this.handlePageBlogChange} />
                        {/* <ViewBlog viewBlog={viewBlog} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

BlogPage.propTypes = {

};

const mapStateToProp = state => ({
    viewBlog: state.blog.ListView,
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(BlogPage);
//export default BlogPage;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItemBlog from '../../components/Blog/ListItemBLog';
import blogApi from '../../api/blogApi';

class BlogPage extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            ItemBlog: {},
            loading: false,
        }
    }

    async componentDidMount () {
        this.setState({loading: true});
        
        try{
            const NewItemBlogs = await blogApi.getAll();
            this.setState({ ItemBlog: NewItemBlogs.data })
            console.log(NewItemBlogs.data);
            this.setState({loading: false});
        } catch (error){
            console.log('Failed to fetch blog: ', error.message);
            this.setState({loading: false});
        }
    }

    render() {
        return (
            <div>
                <div className="container product_section_container">
                    <div className="row">
                        <div className="col-12">
                        <div className="breadcrumbs d-flex flex-row align-items-center"><ul><li><a href="index.html">Home</a></li><li className="active"><a href="index.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Blog</a></li></ul></div>
                        </div>
                        <ListItemBlog />
                        <div className="col-md-3">3</div>
                    </div>
                </div>
            </div>
        );
    }
}

BlogPage.propTypes = {

};

export default BlogPage;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import blogApi from '../../api/blogApi';
import ContentBlog from '../../components/Blog/DetailBlog';
import ViewBlog from '../../components/Blog/ViewBlog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DetailBlog extends PureComponent {

    constructor(props){
        super(props);

        this.state={
            detailBLog: {},
            loading: false,
        };
    }

    async componentDidMount() {
        this.setState({ loading: true});
		try {
            const { match } = this.props;
            
            const InforBlog = await blogApi.getById(match.params.postid);
            this.setState({detailBLog: InforBlog});
            this.setState({ loading: false});

		} catch (error) {
            console.log('Failed to fetch products: ', error.message);
            this.setState({loading: false});
		}

    }

    handleChangeBlog = async (viewBlog) =>{
        console.log(viewBlog);
    }


    render() {
        
        const {detailBLog, loading} = this.state;
        const {match, viewBlog ,history } = this.props;
        //console.log(history );
        return (
            <div className="container container_blog_detail">
                <div className="row">
                
                { loading ? <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> : <ContentBlog detailBLog={detailBLog} history={history } /> }
                    
                    {/* <ViewBlog viewBlog={viewBlog} /> */}
                </div>
            </div>
        );
    }
}

DetailBlog.propTypes = {

};

const mapStateToProp = state => ({
    //viewBlog: state.blog.ListView,
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(DetailBlog);
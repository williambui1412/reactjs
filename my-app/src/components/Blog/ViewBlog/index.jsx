import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { addView } from '../../../actions/blog';
import { connect } from 'react-redux';

class ViewBlog extends PureComponent {

    handleAddView = (ItemBlog) =>{
        this.props.addView(ItemBlog);
    }
    
    render() {
        const {viewBlog} = this.props;
        //console.log(viewBlog);
        return (
            <div className="col-md-4 view_blog">
                <h3>Tin Mới Xem</h3>
                <ul>
                {
                    viewBlog.map(viewBlog =>(
                        <li className="item_view" key={viewBlog.id}>
                            <img src={viewBlog.images} alt=""/>
                            <h5><a href={`/blog/${viewBlog.id}`} onClick={()=>this.handleAddView(viewBlog)}>{ viewBlog.title }</a></h5>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

ViewBlog.propTypes = {
    viewBlog: PropTypes.array, 
    addView: PropTypes.func.isRequired,
};

ViewBlog.defaultProps = {
    ViewBlog: [],
 
};

const mapStateToProp = state => ({
     
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
        addView: addView,
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(ViewBlog);
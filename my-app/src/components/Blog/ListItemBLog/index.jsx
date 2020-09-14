import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addView } from '../../../actions/blog';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ListItemBlog extends PureComponent {


    handleAddView = (ItemBlog) =>{
        this.props.addView(ItemBlog);
    }

    handlePageBlogChange = (newpage) => {
        const { onPageBlogChange } = this.props;
        if (onPageBlogChange) {
            onPageBlogChange(newpage);
        }
    }


    render() {
        const { ItemBlog, pager } = this.props;
        console.log(pager);

        const _page = pager._page;
        const _limit = pager._limit;
        const _totalRows = pager._totalRows;
        const totalPages = Math.ceil(_totalRows / _limit);

        
        return (
            <article className="col-md-12 list-blog">
                {
                    ItemBlog.map(ItemBlog =>(
                        <div key={ItemBlog.id} className="row item-blog">
                            <div className="col-md-2 images">
                                <img src={ItemBlog.images} alt=""/>
                            </div>
                            <div className="col-md-10">
                                <h3><Link to={`/blog/${ItemBlog.id}`} onClick={()=>this.handleAddView(ItemBlog)}>{ ItemBlog.title }</Link></h3>
                                <p>{ ItemBlog.shortDescription }</p>
                            </div>
                        </div>
                    ))
                }
                <div className="pager-blog">
                    <div id="prev_page" className="page_prev" disabled={_page <= 1} onClick={() => this.handlePageBlogChange(_page - 1)}>
                         
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                       
                    </div>
                    <div className="page_current">
                        <span>{_page}</span>
                    </div>
                    <div className="page_total"><span>of</span> {totalPages}</div>
                    <div id="next_page" className="page_next" disabled={_page >= totalPages} onClick={() => this.handlePageBlogChange(_page + 1)}>
                         
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        
                    </div>
                </div>
                
            </article>
        );
    }
}

ListItemBlog.propTypes = {
    ItemBlog: PropTypes.array.isRequired,
    pager: PropTypes.object.isRequired,
    onPageBlogChange: PropTypes.func,
    addView: PropTypes.func.isRequired,
};
ListItemBlog.defaultProps = {
    onPageBlogChange: null,
   
};

const mapStateToProp = state => ({
     
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
        addView: addView,
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(ListItemBlog);

//export default ListItemBlog;
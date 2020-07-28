import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SortBottom extends PureComponent {
    
    handleShowChange = (numberItemDisplay) => {
        const { onShowChange } = this.props;
        if (onShowChange) {
            onShowChange(numberItemDisplay);
        }
    }

    handlePageChange = (newpage) => {
        const { onPageChange } = this.props;
        if (onPageChange) {
            onPageChange(newpage);
        }
    }
    
    render() {
        const {pagination, numberItemDisplay ,ItemCat} = this.props;

        //console.log(ItemCat.length );

        const _page = pagination._page;
        const _limit = pagination._limit;
        const _totalRows = pagination._totalRows;
        const totalPages = Math.ceil(_totalRows / _limit);
        let {StartNum , EndNum} = '' ;

        if(_page == 1){
            StartNum = 1;
        }
        else{
            StartNum = _limit;
        }

        if( ItemCat.length < _limit ){
            EndNum = ItemCat.length;
        }
        else{
            EndNum = _limit*_page;
        }

        return (
            <div className="product_sorting_container product_sorting_container_bottom clearfix">
                <ul className="product_sorting">
                    <li>
                        <span>Show</span>
                        <span className="num_sorting_text">{pagination._limit}</span>
                        <i className="fa fa-angle-down"></i>
                        <ul className="sorting_num">
                            {
                                numberItemDisplay.map(numberItemDisplay =>{
                                    return(
                                        <li 
                                        key={ numberItemDisplay.id } 
                                        className="num_sorting_btn" 
                                        onClick={()=> this.handleShowChange(numberItemDisplay)}
                                        >
                                            <span>{ numberItemDisplay.value }</span>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </li>
                </ul>
                        <span className="showing_results">Showing {StartNum}–{EndNum} of {_totalRows} results</span>
                <div className="pages d-flex flex-row align-items-center">
                    <div id="prev_page" className="page_prev" disabled={_page <= 1} onClick={() => this.handlePageChange(_page - 1)}>
                        <a href="#">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="page_current">
                        <span>{_page}</span>
                        {/* <ul className="page_selection">
                            {indents}
                        </ul> */}
                    </div>
                    <div className="page_total"><span>of</span> {totalPages}</div>
                    <div id="next_page" className="page_next" disabled={_page >= totalPages} onClick={() => this.handlePageChange(_page + 1)}>
                        <a href="#">
                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

SortBottom.propTypes = {
    pagination: PropTypes.object,
    numberItemDisplay: PropTypes.array,
    onShowChange: PropTypes.func,
    onPageChange: PropTypes.func,
    ItemCat: PropTypes.array,
};
SortBottom.defaultProps = {
    pagination: {},
    numberItemDisplay: [],
    onShowChange: null,
    onPageChange: null,
    ItemCat: [],
}
export default SortBottom;
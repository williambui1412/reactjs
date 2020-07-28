import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SortTop extends PureComponent {

    handleSortChange = (defaultSort) => {
        const { onSortChange } = this.props;
        if (onSortChange) {
            onSortChange(defaultSort);
        }
    }

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

        const {defaultSort, valueDefaultSort, numberItemDisplay, pagination}=this.props;
        //console.log("asd" , pagination);

        const _page = pagination._page;
        const _limit = pagination._limit;
        const _totalRows = pagination._totalRows;

        const totalPages = Math.ceil(_totalRows / _limit);
        
        const indents = [];
        for (let i = 0; i < totalPages; i++) {
            indents.push(<li key={i + 1} onClick={() => this.handlePageChange(i + 1)} ><span>{i + 1}</span></li>);
        }
        
        return (
            <div className="product_sorting_container product_sorting_container_top">
                <ul className="product_sorting">
                    <li>
                        <span className="type_sorting_text">{valueDefaultSort}</span>
                        <i className="fa fa-angle-down"></i>
                        <ul className="sorting_type">
                            {
                                defaultSort.map(defaultSort =>{
                                    return(
                                        <li 
                                        key={ defaultSort.id } 
                                        className="type_sorting_btn" 
                                        onClick={()=> this.handleSortChange(defaultSort)}
                                        >
                                            <span>{ defaultSort.value }</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </li>
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
                
                <div className="pages d-flex flex-row align-items-center">
                    <div id="prev_page" className="page_prev" disabled={_page <= 1} onClick={() => this.handlePageChange(_page - 1)}>
                        <a href="#">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="page_current">
                        <span>{_page}</span>
                        <ul className="page_selection">
                            {indents}
                        </ul>
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

SortTop.propTypes = {
    
    defaultSort: PropTypes.array,
    valueDefaultSort: PropTypes.string,
    onSortChange: PropTypes.func,
    numberItemDisplay: PropTypes.array,
    pagination: PropTypes.object,
    onShowChange: PropTypes.func,
    onPageChange: PropTypes.func,
};
SortTop.defaultProps = {
    defaultSort: [],
    valueDefaultSort: '',
    onSortChange: null,
    numberItemDisplay: [],
    pagination: {},
    onShowChange: null,
    onPageChange: null,
}
export default SortTop;
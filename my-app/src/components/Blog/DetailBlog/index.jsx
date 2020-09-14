import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ContentBlog extends PureComponent {
    render() {
        const {detailBLog ,history} = this.props;
        console.log(history);
        return (
            <>
                
                    <div className="col-md-12">
                         
                        <h2>{detailBLog.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: detailBLog.description }}></div>
                        <div className="">
                        
                            <button  onClick={history.goBack} type="button" className="btn btn-outline-dark"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> &nbsp;Go Back</button>
                        </div>
                    </div>
                
            </>
        );
    }
}

ContentBlog.propTypes = {
    detailBLog: PropTypes.object.isRequired,
    history: PropTypes.object,
};
ContentBlog.dafaultProps = {
    history: [],
}
export default ContentBlog;
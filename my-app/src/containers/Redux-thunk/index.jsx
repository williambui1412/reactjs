import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IncreaseAsynce, decreaseCounter, increaseCounter } from '../../actions/counter';
import { getPostReduxthunk } from '../../actions/list';

class ReduxThunk extends PureComponent {

    handleIncreaseClick = () => {
        this.props.IncreaseAsynce();
    }
    handleDecreaseClick = () => {
        this.props.decreaseCounter();
    }

    componentDidMount(){
        this.props.getPostReduxthunk();
    }


    render() {

        const { count, list, loadinglist } = this.props;


        return (
            <div className="container">
                <br />
                <h3 className="text-center">redux thunk</h3>
                <br />
                <div className="text-center">
                    <button className="btn btn-primary" onClick={this.handleDecreaseClick}>Decrease</button>
                    <span>&nbsp;&nbsp; COUNTER: {count}&nbsp;&nbsp; </span>
                    <button className="btn btn-primary" onClick={this.handleIncreaseClick}>Increase</button> 
                </div>
                <ul>
                    {list.map(hero => {
                 

                    return (
                        <li
                        key={hero.id}
                  
                        
                        >
                        {hero.name} - {hero.power}
                        </li>
                    )
                    })}
                </ul>
            </div>
        );
    }
}

ReduxThunk.propTypes = {
    IncreaseAsynce: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    decreaseCounter: PropTypes.func.isRequired,
    increaseCounter: PropTypes.func.isRequired,
    getPostReduxthunk: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
    loadinglist: PropTypes.bool,

};


const mapStateToProp = state => ({
    count: state.count,
    cartList: state.cart.list,
    list: state.List.list,
    loadingList: state.List.loading,
})

const mapDispatchToProp = dispatch => {
    return bindActionCreators({
        IncreaseAsynce: IncreaseAsynce,
        increaseCounter: increaseCounter,
        decreaseCounter: decreaseCounter,
        getPostReduxthunk: getPostReduxthunk,
    }, dispatch)
}

export default connect(mapStateToProp, mapDispatchToProp)(ReduxThunk);
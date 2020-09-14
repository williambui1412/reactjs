import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Home/Banner';
import Slider from '../../components/Home/Slider';
import NewArrival from './NewArrivals';
import DealOfTheWeek from '../../components/Home/DealOfTheWeek';
import Benefit from '../../components/Home/Benefit';

class HomePage extends PureComponent {
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <NewArrival />
                <DealOfTheWeek
                    timeTillDate="03 09 2020, 16:00 pm"
                    timeFormat="DD MM YYYY, h:mm a"
                />
                <Benefit />
            </div>
        );
    } 
}

HomePage.propTypes = {

};

export default HomePage;
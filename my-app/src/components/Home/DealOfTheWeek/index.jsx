import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class DealOfTheWeek extends PureComponent {
    constructor(props) {
		super(props);

		this.state = {
			days: undefined,
			hours: undefined,
			minutes: undefined,
			seconds: undefined
		}
	}
	componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate, timeFormat } = this.props;
			const then = moment(timeTillDate, timeFormat);
			const now = moment();

			const countdown = moment(then - now);
			const days = countdown.format('D');
			const hours = countdown.format('HH');
			const minutes = countdown.format('mm');
			const seconds = countdown.format('ss');

			this.setState({ days, hours, minutes, seconds });
		}, 1000);
	}
	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
	}

    render() {
        const { days, hours, minutes, seconds } = this.state;
        return (
            <div className="deal_ofthe_week">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="deal_ofthe_week_img">
                                <img src="images/deal_ofthe_week.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 text-right deal_ofthe_week_col">
                            <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                                <div className="section_title">
                                    <h2>Deal Of The Week</h2>
                                </div>
                                <ul className="timer">
									<li className="d-inline-flex flex-column justify-content-center align-items-center">
										<div id="day" className="timer_num">{days}</div>
										<div className="timer_unit">Day</div>
									</li>
									<li className="d-inline-flex flex-column justify-content-center align-items-center">
										<div id="hour" className="timer_num">{hours}</div>
										<div className="timer_unit">Hours</div>
									</li>
									<li className="d-inline-flex flex-column justify-content-center align-items-center">
										<div id="minute" className="timer_num">{minutes}</div>
										<div className="timer_unit">Mins</div>
									</li>
									<li className="d-inline-flex flex-column justify-content-center align-items-center">
										<div id="second" className="timer_num">{seconds}</div>
										<div className="timer_unit">Sec</div>
									</li>
								</ul>
                                <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DealOfTheWeek.propTypes = {

};

export default DealOfTheWeek;
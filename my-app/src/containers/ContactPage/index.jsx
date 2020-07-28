import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormContact from '../../components/Contact';

class ContactPage extends PureComponent {
    render() {
        return (
            
            <div className="container contact_container">
                <div className="row">
                    <div className="col">

                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li className="active"><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Contact</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div id="google_map">
                            <div className="map_container">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9319.578443297647!2d106.64386875957898!3d10.857146322886894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1595820630522!5m2!1sen!2s" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />    
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-lg-6 contact_col">
                        <div className="contact_contents">
                            <h1>Contact Us</h1>
                            <p>There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.</p>
                            <div>
                                <p>(800) 686-6688</p>
                                <p>info.deercreative@gmail.com</p>
                            </div>
                            <div>
                                <p>mm</p>
                            </div>
                            <div>
                                <p>Open hours: 8.00-18.00 Mon-Fri</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>

                        <div className="follow_us_contents">
                            <h1>Follow Us</h1>
                            <ul className="social d-flex flex-row">
                                <li><a href="#" style={{ backgroundColor: '#3a61c9'}}><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#" style={{ backgroundColor: '#41a1f6'}}><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#" style={{ backgroundColor: '#fb4343'}}><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#" style={{ backgroundColor: '#8f6247'}}><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>

                    </div>

                    <div className="col-lg-6 get_in_touch_col">
                        <div className="get_in_touch_contents">
                            <h1>Get In Touch With Us!</h1>
                            <p>Fill out the form below to recieve a free and confidential.</p>
                            <br />
                            <FormContact />
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}

ContactPage.propTypes = {

};

export default ContactPage;
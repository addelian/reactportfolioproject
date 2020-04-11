import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    
    render() {

        return (
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/shows'>Tour Dates</Link></li>
                        <li><Link to='/newsfeed'>News</Link></li>
                        </ul>
                        </div>
                        <div className="col-md-4 mb-3 text-center">
                            <h5>Social</h5>
                            <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                        </div>
                        <div className="col-md-4 text-center">
                            <a role="button" className="btn btn-link" href="tel:+15555555555"><i className="fa fa-phone" /> 1-555-555-5555</a><br />
                            <a role="button" className="btn btn-link" href="mailto:addelia.nicolas@gmail.com"><i className="fa fa-envelope-o" /> addelia.nicolas@gmail.com</a>
                        </div>
                    </div>
                </div>
            </footer>
        );

    }
}

export default Footer;
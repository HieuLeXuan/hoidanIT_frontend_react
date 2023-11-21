import React, { Component } from 'react';
import { connect } from 'react-redux';

import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';

class HomeHeader extends Component {

    render() {
        console.log(this.props);

        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <div className='header-bars'></div>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div><FormattedMessage id="header.at-home" /></div>
                            <div><FormattedMessage id="header.at-hospital" /></div>
                            <div><FormattedMessage id="header.live-strong" /></div>
                            <div><FormattedMessage id="header.no-think" /></div>
                        </div>
                        <div className='right-content'>
                            <div className='apointerment'>
                            </div>
                            <div className='support'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className="banner-image">
                        <div className="banner-up">
                            <h1><FormattedMessage id="banner.communication" /></h1>
                            <h1><FormattedMessage id="banner.health-care" /></h1>
                            <div className="input-box">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="Search here..." />
                                <button className="button">Search</button>
                            </div>
                        </div>
                        <div className='banner-down'>
                            <div className='services'>
                                <i className="fa fa-hospital icon" aria-hidden="true"></i>
                                <span><FormattedMessage id="banner.specialist-examination" /></span>
                            </div>
                            <div className='services'>
                                <i className="fa fa-hospital icon" aria-hidden="true"></i>
                                <span><FormattedMessage id="banner.specialist-examination" /></span>
                            </div>
                            <div className='services'>
                                <i className="fa fa-hospital icon" aria-hidden="true"></i>
                                <span><FormattedMessage id="banner.specialist-examination" /></span>
                            </div>
                            <div className='services'>
                                <i className="fa fa-hospital icon" aria-hidden="true"></i>
                                <span><FormattedMessage id="banner.specialist-examination" /></span>
                            </div>
                            <div className='services'>
                                <i className="fa fa-hospital icon" aria-hidden="true"></i>
                                <span><FormattedMessage id="banner.specialist-examination" /></span>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);

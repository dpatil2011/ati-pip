import React from 'react';
import PropTypes from 'prop-types';
import './../../../assets/css/App.css';
import Breadcrumb from './breadcrumb';

class PageTitle extends React.Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
    }

    render() {
        const {
            header, link, text, subtitle,
        } = this.props;
        return (
            <React.Fragment>
                <Breadcrumb
                    link={`${process.env.PUBLIC_URL}/modul/${link}`}
                    text={text}
                    subtitle={subtitle}
                />
                <h3 id="lblPageName" className="page-title">{header}</h3>
            </React.Fragment>
        );
    }
}

export default PageTitle;
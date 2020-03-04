import React from 'react';
import './list-social-media-style.css';

class ListSocialMediaComponent extends React.Component {
    render() {
        const icon = require(`../../../assets/images/${this.props.icon}.png`);
        const { url } = this.props
        return (
            <a href={url} target="_blank">
                <div className="social-media-container">
                    <img src={icon}/>
                </div>
            </a>
        );
    }
}

export default ListSocialMediaComponent;
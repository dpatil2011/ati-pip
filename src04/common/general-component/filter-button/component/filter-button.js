import React from 'react';
import { Icon } from 'antd';
import { AtiButton } from 'ati-react-web';
import './../style/style.css';

class FilterButton extends React.Component {
    render() {
        const {
            onClick, icon, text, id, className, style,
        } = this.props;

        return (
            <React.Fragment>
                <AtiButton
                    {...this.props}
                    id={id}
                    events={{
                        onClick,
                    }}
                    className={`filter-button ${className}`}
                    text={
                        <span>
                            <img src={icon} 
                                style={{marginRight: "10px"}}
                            /> {text}
                            <Icon type='right' style={{marginLeft:"5px"}}/>
                        </span>
                    }
                    style={style}
                />
            </React.Fragment>
        );
    }
}

export default FilterButton;
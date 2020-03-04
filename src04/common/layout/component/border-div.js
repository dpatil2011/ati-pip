import React, {Component} from 'react';
import './layout.css'

class Bordered extends Component {
    render() {
        const {style} = this.props;
        return(
            <React.Fragment>
                <div className='bordered' style={style}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Bordered;
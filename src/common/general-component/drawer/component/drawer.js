import React from 'react';
import PropTypes from 'prop-types';
import { AtiDrawer } from 'ati-react-web';

export class GeneralDrawer extends React.Component {
    static propTypes = {
        placement: PropTypes.oneOf('left', 'right'),
        title: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    }

    static defaultProps = {
        placement: 'left',
    }

    render() {
        const {
            children, placement, title, visible,
        } = this.props;
        return (
            <React.Fragment>
                <AtiDrawer
                    placement={placement}
                    title={title}
                    visible={visible}
                    zIndex={1000}
                    width={350}
                    closable={false}
                    maskClosable
                    events={{
                        onClose: this.props.onClose,
                    }}
                >
                    {children}
                </AtiDrawer>
            </React.Fragment>
        );
    }
  }

  export default GeneralDrawer;
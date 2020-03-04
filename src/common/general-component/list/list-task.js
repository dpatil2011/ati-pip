import React from 'react';
import PropTypes from 'prop-types';
import { AtiList } from 'ati-react-web';

class ListTask extends React.Component {
    static propTypes = {
        isNotificationLoading: PropTypes.bool.isRequired,
        listTask: PropTypes.arrayOf(PropTypes.object),
    }

    static defaultProps = {
        listTask: [],
    }

    render() {
        return (
            <React.Fragment>
                <AtiList
                    dataSource={this.props.listTask}
                    size="small"
                    search={false}
                    loading={this.props.isNotificationLoading}
                    type="default"
                    itemLayout="horizontal"
                />
            </React.Fragment>
        );
    }
}

export default ListTask;
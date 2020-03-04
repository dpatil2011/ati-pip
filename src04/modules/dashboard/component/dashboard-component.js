import { AtiButton } from 'ati-react-web';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import ModalTable from './modal-table-component';
import ModalQueue from './modal-queue-component';
import ModalPin from './modal-pin-component';
import ModalTransfer from './modal-transfer-component';
import ModalSuccess from './modal-success-component';


class WaitingQueueWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPin: false,
      modalTransfer: false,
      modalQueue: false,
      modalTable: false,
      modalSuccess: false,
    };
  }

  render() {
    const changeModalView = (event) => {
      if (event === 'pin') {
        this.setState({
          modalPin: false,
          modalTransfer: false,
          modalQueue: true,
          modalTable: false,
          modalSuccess: false,
        });
      } if (event === 'table') {
        this.setState({
          modalPin: false,
          modalTransfer: false,
          modalQueue: false,
          modalTable: true,
          modalSuccess: false,
        });
      } if (event === 'transfer') {
        this.setState({
          modalPin: false,
          modalTransfer: true,
          modalQueue: false,
          modalTable: false,
          modalSuccess: false,
        });
      } if (event === 'pin1') {
        this.setState({
          modalPin: true,
          modalTransfer: false,
          modalQueue: false,
          modalTable: false,
          modalSuccess: false,
        });
      } if (event === 'success') {
        this.setState({
          modalPin: false,
          modalTransfer: false,
          modalQueue: false,
          modalTable: false,
          modalSuccess: true,
        });
      }
      if (event === 'close') {
        this.setState({
          modalPin: false,
          modalTransfer: false,
          modalQueue: false,
          modalTable: false,
          modalSuccess: false,
        });
      }
    };
    return (
      <React.Fragment>
        <AtiButton
          id="btnKerjakan"
          style={{
            marginTop: '20px',
            width: '300px',
            height: '52px',
            borderRadius: '62px',
            borderWidth: 1,
            marginLeft: '63px',
            boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#28a2ab',
          }}
          name="Akshya"
          height="52px"
          color="danger"
          text="Queue"
          events={{
            onClick: () => {
              this.setState({ modalQueue: true });
            },
          }}
        />
        <ModalTable
          changeModalView={changeModalView}
          isOpenTable={this.state.modalTable}
        />
        <ModalQueue
          changeModalView={changeModalView}
          isOpenQueue={this.state.modalQueue}
        />

        <ModalTransfer
          changeModalView={changeModalView}
          isOpenTransfer={this.state.modalTransfer}
        />
        <ModalSuccess
          changeModalView={changeModalView}
          isOpenSuccess={this.state.modalSuccess}
        />
        <ModalPin
          changeModalView={changeModalView}
          isOpenPin={this.state.modalPin}
        />
      </React.Fragment>
    );
  }
}

export default WaitingQueueWidget;

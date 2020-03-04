import React, { Component } from "react";
import { connect } from "react-redux";
import withPocketRemoteService from "../../common/services/wrapper/with-pocket-remote-service";
import { navigate } from "./../../common/store/action/general-action";
import * as dashboardAction from "../../modules/dashboard/store/dashboard-action";
import CommunityComponent from "./../../modules/community/community-component";
import "../../modules/community/style/style.css";
import { FormattedMessage } from "react-intl";
import { AtiButton } from "ati-react-web";
import "../../modules/community/style/style.css";

class CommunityPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };
  openForm() {
    this.setState({
      modal1: true
    });
  }
  openConfirmation = () => {
    alert("b");
    this.setState({
      modal1: false,
      modal2: true
    });
  };
  openPin = () => {
    this.setState({
      modal2: false,
      modal3: true
    });
  };
  openSucess = () => {
    this.setState({
      modal3: false,
      modal4: true
    });
  };
  closeAll=()=> {
    this.setState({
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false
    });
  }

  createColumns = () => {
    const columns = [
      {
        title: "ID",
        width: "79px",
        dataIndex: "id",
        key: "id",
        fixed: false
      },
      {
        title: <FormattedMessage id="label.name" />,
        dataIndex: "name",
        width: "102px",
        key: "name",
        fixed: false
      },
      {
        title: <FormattedMessage id="label.balance" />,
        width: "132px",
        dataIndex: "balance",
        key: "balance",
        fixed: false
      },
      {
        title: <FormattedMessage id="label.cash.status" />,
        width: "100px",
        dataIndex: "status",
        key: "status",
        fixed: false,
        render: (text, record) => {
          switch (record.activityStatus) {
            case "DEFICIT":
              return <div className="">Deficit</div>;
            case "EXCESS":
              return <div className="">Deficit</div>;
            default:
              return (
                <div className="normal">
                  <text className="action-text">Normal</text>
                </div>
              );
          }
        }
      },
      {
        title: <FormattedMessage id="label.action" />,
        width: "85px",
        dataIndex: "action",
        key: "action",
        fixed: false,
        render: (text, record) => {
          return (
            <text onClick={this.details} className="action">
              Details
            </text>
          );
        }
      },
      {
        title: <FormattedMessage id="label.empty" />,
        dataIndex: "description",
        width: "117px",
        key: "description",
        fixed: false,
        render: (text, record) => {
          return (
            <AtiButton
              className="table-button"
              text="Send Cash"
              type="default"
              events={{
                onClick: () => {
                  this.setState({
                    modal2: true
                  });
                }
              }}
            />
          );
        }
      },
      {
        title: <FormattedMessage id="label.empty" />,
        dataIndex: "ask",
        key: "ask",
        fixed: false,
        render: (text, record) => {
          return (
            <AtiButton
              type="default"
              text="Ask Cash"
              className="table-button"
            />
          );
        }
      }
    ];
    return columns;
  };
  details() {
    alert("adsf");
  }
  render() {
    const data = [
      {
        id: "00001",
        name: "joel",
        balance: "10000",
        // date: `${current_datetime.getDate()} ${
        //   months[current_datetime.getMonth()]
        // } ${current_datetime.getFullYear()}`,
        status: "sukses",
        description: "Kredit"
      },
      {
        id: "00001",
        name: "santhosh",
        balance: "100000",
        // date: `${current_datetime.getDate()} ${
        //   months[current_datetime.getMonth()]
        // } ${current_datetime.getFullYear()}`,
        status: "sukses",
        description: "Kredit"
      },
      {
        id: "00001",
        name: "raja",
        balance: "100000",
        // date: `${current_datetime.getDate()} ${
        //   months[current_datetime.getMonth()]
        // } ${current_datetime.getFullYear()}`,
        status: "sukses",
        description: "Kredit"
      }
    ];
    return (
      <CommunityComponent
        data={data}
        column={this.createColumns()}
        openForm={this.openForm}
        openConfirmation={this.openConfirmation}
        openPin={this.openPin}
        openSucess={this.openSucess}
        closeAll={this.closeAll}
        form={this.state.modal1}
        confirmation={this.state.modal2}
        pin={this.state.modal3}
        success={this.state.modal4}
      />
    );
  }
}

const mapStateToProps = state => ({
  ...state.dashboard,
  ...state.layout,
  ...state.history
});

const mapActionToProps = () => ({
  navigate,
  ...dashboardAction
});

const page = connect(mapStateToProps, mapActionToProps())(CommunityPage);
export default withPocketRemoteService(page);

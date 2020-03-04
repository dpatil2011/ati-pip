import React, { Component } from "react";
import { Row, Col, Icon } from "antd";
import { AtiGrid, AtiGridItem, AtiTextbox, AtiImageView } from "ati-react-web";
import PageTitle from "./../../common/layout/component/page-title";
import ContentPage from "./../../common/layout/component/content-page";
import CONSTANTS from "./../../common/utils/Constants";
import SystemInfoWidget from "./widget/system-info-widget";
import Table from "./../../common/general-component/table/component/table";
import "./style/style.css";
import { FormattedMessage } from "react-intl";
import icon from "./../../assets/images/community-icon.png";
import { InputGroupText } from "reactstrap";
import ModalDepositCashComponent from "./widget/send-cash-form-widget";
import SendCashConfirmationWidget from "./widget/send-cash-confirmation-widget";
import SendCashPinWidget from "./widget/send-cash-pin-widget";
import SendCashSuccessWidget from "./widget/send-cash-success-widget";

class CommunityComponent extends Component {
  onClickSearch = () => {
    // let result = [];
    // if (this.state.searchKey) {
    //   result = this.props.listAccountOfficer.filter(item => {
    //     if (
    //       compareString(item.ao_code, this.state.searchKey) ||
    //       compareString(item.ao_name, this.state.searchKey) ||
    //       compareString(item.department, this.state.searchKey) ||
    //       compareString(item.status, this.state.searchKey)
    //     ) {
    //       return item;
    //     }
    //     return null;
    //   });
    // } else {
    //   result = this.props.listAccountOfficer;
    // }
    // this.setState({ listAccountOfficer: result });
  };
  searchList = e => {
    // const code = e.keyCode || e.which;
    // this.setState({
    //   searchKey: e.target.value,
    // });
    // if (code === 13) {
    //   let result = [];
    //   if (e.target.value) {
    //     result = this.props.listAccountOfficer.filter((item) => {
    //       if (
    //         compareString(item.ao_code, e.target.value) ||
    //         compareString(item.ao_name, e.target.value) ||
    //         compareString(item.name, e.target.value) ||
    //         compareString(item.department, e.target.value) ||
    //         compareString(item.status, e.target.value)
    //       ) {
    //         return item;
    //       }
    //       return null;
    //     });
    //   } else {
    //     result = this.props.listAccountOfficer;
    //   }
    //   this.setState({ listAccountOfficer: result });
    // }
    // if (e.target.value.length === 0) {
    //   this.setState({ listAccountOfficer: this.props.listAccountOfficer });
    // }
  };
  render() {
    console.log(this.props.pin);
    const {
      layouts,
      data,
      column,
      openForm,
      openConfirmation,
      openPin,
      openSucess,
      closeAll,
      form,
      confirmation,
      pin,
      success
    } = this.props;
    return (
      <div style={{ minHeight: "360px" }}>
        <ModalDepositCashComponent
          openConfirmation={openConfirmation}
          form={form}
          closeAll={closeAll}
        />
        <SendCashConfirmationWidget
          openPin={openPin}
          confirmation={confirmation}
          closeAll={closeAll}
        />
        <SendCashPinWidget
          openSucess={openSucess}
          pin={pin}
          closeAll={closeAll}
        />
        <SendCashSuccessWidget closeAll={closeAll} success={success} />
        <div>
          <Row className="title">
            <Col>
              <PageTitle
                link="dashboard"
                text="label.breadcrumb.dashboard"
                subtitle="label.breadcrumb.community"
                header="Community"
              />
            </Col>
          </Row>
          <Row className="margin-bottom-15">
            <Col>
              <SystemInfoWidget {...this.props} />
            </Col>
          </Row>
          <Row className="table1">
            <Col>
              <div>
                <Row style={{ paddingTop: "25px" }}>
                  <span className="table-header1">
                    <FormattedMessage id="label.table.community" />
                  </span>
                </Row>
                <Row className="search-box">
                  <Col span={6}>
                    <AtiTextbox
                      id="search"
                      name="search"
                      className="pocket-input-search test-class"
                      placeholder={"Search for Member Names"}
                      type="text"
                      // containerStyle={{borderRight:'none',color:'red'}}
                      addonPlacement="right"
                      style={{ borderRight: "none" }}
                      addon={
                        <InputGroupText
                          style={{
                            borderRadius: "0px 5px 5px 0px",
                            cursor: "pointer"
                          }}
                          // onClick={e => onClickSearch(e)}
                          className="input-group-search"
                        >
                          <Icon type="search" />
                        </InputGroupText>
                      }
                      events={
                        {
                          // onChange: e => thisonChangeSearch(e),
                          // onKeyPress: event => onEnterPressSearch(event)
                        }
                      }
                      disabled={false}
                    />
                  </Col>
                </Row>
                <div className="member-table1">
                  <Table
                    columns={column}
                    rowKey={Math.floor(Math.random() * 100)}
                    list={data}
                    totalRow={data.length}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default CommunityComponent;

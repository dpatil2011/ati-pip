import { Col, Icon, Row } from "antd";
import { AtiButton, AtiDropdown } from "ati-react-web";
import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import DatePicker from "../../../../common/general-component/date-picker/component/date-picker";
import Table from "../../../../common/general-component/table/component/table";
import ContentPage from "../../../../common/layout/component/content-page";
import Filter from "./../../../../assets/images/filter-black.png";


class TransactionHistory extends Component {
  state = {
    visible: false
  };
  onClick = () => {
    this.setState({
      visible: true
    });
  };
  render() {
    const {
      columns,
      list,
      loading,
      historyTransaction,
      datasource,
      onUpdateStatus,
      transactionType,
      onChangeDate,
      onChangeDateTo,
      dateOfTransaction,
      dateOfTransactionTo,
      onSearch,
      visible,
      buttonFlag
    } = this.props;
    return (
      <ContentPage>
        <Row style={{ padding: "25px" }}>
          <Col span={24}>
            <h6 className="transaction-history-tittle">
              <FormattedMessage id="label.history.transaction" />
            </h6>
          </Col>
          <Col>
            <Row
              style={{
                paddingTop: "35px",
                paddingBottom: "20px"
              }}
            >
              <Col span={5}>
                <AtiDropdown
                  dataSource={datasource}
                  trigger={["hover"]}
                  placement="bottomLeft"
                  childern={
                    <span
                      className="trigger"
                      style={{
                        padding: "0 0 0 0",
                        fontSize: "12px",
                        fontWeight: "bolder",
                        position: "absolute",
                        marginTop: "-30px"
                      }}
                      href="#"
                      onClick={this.onClick}
                    >
                      <img
                        alt="jsb"
                        src={Filter}
                        style={{
                          height: "12.7px",
                          width: "13.1px",
                          objectFit: "contain",
                          //  border: 'solid 1px #000000',
                          //  backgroundColor: '#000000',
                          marginTop: "-3px",
                          marginRight: "5px"
                        }}
                      />
                      <span
                        style={{
                          marginRight: "5px",
                          fontFamily: "AvenirNextLTPro",
                          fontSize: "12px",
                          fontWeight: 500,
                          fontStretch: "normal",
                          fontStyle: "normal",
                          letterSpacing: "normal",
                          textAlign: "left",
                          color: "#000000"
                        }}
                      >
                        {transactionType}
                      </span>
                      <Icon
                        type="down"
                        style={{
                          // marginRight: '5px',
                          width: "6.7px",
                          height: "7.4px"
                        }}
                      />
                    </span>
                  }
                  events={{
                    onMenuClick: e => {
                      this.setState({
                        visible: false
                      });
                      onUpdateStatus(e);
                    }
                  }}
                  visible={this.state.visible}
                />
              </Col>
              <Col
                span={5}
                style={{
                  marginTop: "-7px",
                  //   marginLeft: '5px',
                  paddingRight: "0px",
                  paddingLeft: "0px",
                  marginRight: "0px"
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#2b2b2b",
                    fontFamily: "AvenirNextLTPro",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    letterSpacing: "normal",
                    textAlign: "left"
                  }}
                >
                  <FormattedMessage id="label.show.data.from.history1" />
                </span>
              </Col>
              <Col
                span={5}
                style={{
                  marginTop: "-15px",
                  paddingRight: "2px",
                  marginLeft: "-10px",
                  paddingLeft: "0px"
                }}
              >
                <DatePicker
                  id="DateFilterFrom"
                  name="DateFilterFrom"
                  onChangeDate={onChangeDate}
                  value={dateOfTransaction}
                  //   inputClassName="history-transaction-choose"
                />
              </Col>
              <Col
                span={2}
                style={{
                  marginTop: "-7px",
                  marginLeft: "4px",
                  paddingRight: "0px",
                  marginRight: "0px"
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#2b2b2b",
                    fontFamily: "AvenirNextLTPro",
                    fontStretch: "normal",
                    fontStyle: "normal",
                    letterSpacing: "normal",
                    textAlign: "left"
                  }}
                >
                  <FormattedMessage id="label.show.data.to.history" />
                </span>
              </Col>
              <Col
                span={5}
                style={{
                  marginTop: "-15px",
                  paddingLeft: "0px",
                  marginLeft: "-12px"
                }}
              >
                <DatePicker
                  id="DateFilterTo"
                  name="DateFilterTo"
                  onChangeDate={onChangeDateTo}
                  value={dateOfTransactionTo}
                />
              </Col>
              <Col span={2} style={{ paddingLeft: "5px", marginTop: "-15px" }}>
                <AtiButton
                  style={{
                    width: "70px",
                    height: "40px",
                    borderRadius: "7px",
                    boxShadow: "0 5px 20px 0 rgba(37, 143, 224, 0.2)",
                    backgroundColor:
                      buttonFlag === false ? "#288c97" : "#dd4a39",
                    borderColor: buttonFlag === false ? "#288c97" : "#dd4a39",
                    textAlign: "center",
                    paddingLeft: "8px"
                  }}
                  text={buttonFlag === false ? "Cari" : "Reset"}
                  // icon="search"
                  icon={buttonFlag === false ? "search" : "close"}
                  onClick={onSearch}
                />
              </Col>
            </Row>
          </Col>

          <Col>
            <Table
              rowKey={Math.floor(Math.random() * 100)}
              columns={columns}
              list={list}
              loading={loading}
              totalRow={list.length}
            />
          </Col>
        </Row>
      </ContentPage>
    );
  }
}
export default TransactionHistory;

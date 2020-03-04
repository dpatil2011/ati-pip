import React from 'react';
import { AtiButton } from 'ati-react-web';
import { Row, Col } from 'antd';
import TableWidgetComponent from './../../../../modules/general/widget/table-widget-component';
import TitlePageButtonComponent from './../../../../modules/general/widget/title-page-button-component';

class SearchListTable extends React.Component {
  render() {
    const {
        navigate, columns, list, onChangeSearch, searchText, loading, onClickSearch, onEnterPressSearch,
        labelHeader, labelNavigation, subNavigation, subSubNavigation, labelButton, destinationPage,
        placeholderSearch, clearListTable,
    } = this.props;
    return (
        <React.Fragment>
            {/* <Row>
                <AtiButton
                    text="Clear List"
                    events={{ onClick: clearListTable }}
                />
            </Row> */}
            <Row>
            <TitlePageButtonComponent
                navigate={navigate}
                destinationPage={destinationPage}
                labelHeader={labelHeader}
                labelNavigation={labelNavigation}
                subNavigation={subNavigation}
                subSubNavigation={subSubNavigation}
                labelButton={labelButton}
            />
            </Row>
            <Row style={{ marginBottom: '50px' }}>
                <Col>
                    <TableWidgetComponent
                        {...this.props}
                        loading={loading}
                        columns={columns}
                        list={list}
                        onChangeSearch={onChangeSearch}
                        searchText={searchText}
                        onClickSearch={onClickSearch}
                        onEnterPressSearch={onEnterPressSearch}
                        placeholderSearch={placeholderSearch}
                    />
                </Col>
            </Row>
        </React.Fragment>
    );
  }
}

export default SearchListTable;

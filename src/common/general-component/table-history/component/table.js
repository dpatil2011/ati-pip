/**
 * @author hosea.simanjuntak
 */
import React from 'react';
import PropTypes from 'prop-types';
import { AtiTable } from 'ati-react-web';
import './../styles/table-style.css';
import { Row } from 'antd';

class Table extends React.Component {

    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        pagination: PropTypes.bool,
    };

    static defaultProps = {
        pagination: true,
    }

    updateState = () => {
        if (this.props.isSearch === true) {
            return Math.random();
        }
    }

    pagination = (totalRow) => {
        const listSize = totalRow === undefined ? this.props.list.length : totalRow;
        return {
            size: 'default',
            showSizeChanger: true,
            // pageSizeOptions: ['10', '25', '50', '100'],
            position: 'bottom',
            locale: { items_per_page: '' },
            total: listSize,
            showTotal: (total, range) => `Show  ${range[1]} from ${listSize} data`,
            style: {
                backgroundColor: '#fff',
                padding: '15px',
                width: '100%',
                textAlign: 'right',
                fontFamily: 'Avenir Next LT Pro Regular',
                fontSize: '12px',
            },
            onChange: (current, total) => {
                const param = {
                    page: current,
                    pageSize: total,
                    order: 'ASC',
                };
                if (this.props.onPageAction !== undefined) {
                    // this.props.onPageAction(param);
                }
            },
            onShowSizeChange: (current, size) => {
                const param = {
                    page: current,
                    pageSize: size,
                    order: 'ASC',
                };
                if (this.props.onPageAction !== undefined) {
                    // this.props.onPageAction(param);
                }
            },
            itemRender: (current, type, originalElement) => {
                if (type === 'prev') {
                    return <a>Prev</a>;
                }
                if (type === 'next') {
                    return <a>Next</a>;
                }
                return originalElement;
            }
        };
    };

    renderRowClassName = (record, index) => {
        if (index % 2) {
            return 'second-row';
        }
        return 'first-row';
    }

    render() {
        const {
            tableClassName, rowClassName, pagination, onRow = () => { },
            emptyTableTitle, emptyTableSubtitle, emptyTableImage, onSortingTable,
        } = this.props;
        const rowClassNameAttr = rowClassName ?
            { rowClassName } : { rowClassName: this.renderRowClassName };
        const paginationAttr = pagination ? { pagination: this.pagination(this.props.totalRow) } : { pagination: false };
        return (
            <React.Fragment>
                <AtiTable
                    locale={{
                        emptyText: (
                            <div>
                                <Row>
                                    <img
                                        alt=""
                                        src={emptyTableImage || require('../../../../assets/images/no-data-icon@3x.png')}
                                        style={{ width: '75px', margin: '20px 0 10px 0' }}
                                    />
                                </Row>
                                <Row style={{ margin: '0 0 5px 0' }}>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            fontFamily: 'Avenir Next LT Pro Bold',
                                        }}
                                    >
                                        {emptyTableTitle || 'Data Not Found'}
                                    </span>
                                </Row>
                                <Row style={{ margin: '0 0 20px 0' }}>
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            fontFamily: 'Avenir Next LT Pro Regular',
                                        }}
                                    >
                                        {emptyTableSubtitle || 'The data you looking for is not found.'}
                                    </span>
                                </Row>
                            </div>
                        ),
                    }}
                    key={this.updateState()}
                    rowKey={this.props.key}
                    id="content-table"
                    name="content-table"
                    className={`content-table ${tableClassName}`}
                    columns={this.props.columns}
                    dataSource={this.props.list}
                    loading={this.props.loading}
                    rowSelection={this.props.rowSelection}
                    scroll={this.props.scroll}
                    showHeader
                     footer={this.props.footer}
                    bordered={false}
                    {...rowClassNameAttr}
                    {...paginationAttr}
                    events={
                        {
                            onChange: onSortingTable || (() => { }),
                            onHeaderRow: (column, index) => { },
                            onRow,
                            onExpandedRowsChange: (expandedRows) => { },
                        }
                    }
                />
            </React.Fragment>
        );
    }
}

export default Table;
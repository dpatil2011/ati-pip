import React, { Component } from 'react';
import { AtiTableForm, AtiButton } from 'ati-react-web';
import { Icon } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import ButtonAddStrip from './button-add-strip';
import LinkButton from './../../link-button/component/link-button';

class PocketTableForm extends Component {
    static propTypes = {
        defaultData: PropTypes.arrayOf(PropTypes.object),
    }

    static defaultProps = {
        defaultData: [],
    }
    
    state = {
        showAdd: false,
    }

    componentWillMount() {
        const { defaultData } = this.props;
        if (defaultData && defaultData.length > 0) {
            this.setShowAdd(true);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        const { defaultData } = this.props;
        if (nextProps.defaultData !== defaultData) {
            if (nextProps.defaultData && nextProps.defaultData.length > 0) {
                this.setShowAdd(true);
            } else {
                this.setShowAdd(false);
            }
        }
    }

    setShowAdd = (flag) => {
        this.setState({ showAdd: flag });
    }

    renderRowClassName = (record, index) => {
        if (index % 2) {
            return 'second-row';
        }
        return 'first-row';
    }

    render() {
        const {
            loading = false, minimalRow = 0, buttonDeleteText, template = [],
            addText, loadFirstData = false, defaultData, onDeleteRow = null,
        } = this.props;
        return (
            <React.Fragment>
                <AtiTableForm
                    {...this.props}
                    defaultData={defaultData}
                    header={() => (<span>&nbsp;</span>)}
                    loadFirstData={loadFirstData}
                    loading={loading}
                    bordered={false}
                    className="content-table pocket-table-form"
                    minimalRow={minimalRow}
                    rowClassName={this.renderRowClassName}
                    renderAction={(deleteFn, source, record, index) => (
                        <AtiButton
                            type="danger"
                            size="small"
                            text={buttonDeleteText || <Icon type="close" />}
                            events={
                                {
                                    onClick: () => {
                                        if (source.length === 1) {
                                            this.setState({ showAdd: false });
                                        }
                                        deleteFn(record, index);
                                        if (onDeleteRow) onDeleteRow(index);
                                    },
                                }
                            }
                        />
                    )}
                    actionTitle=" "
                    emptyText={(data, addRow) => (
                        <ButtonAddStrip
                            text={addText}
                            events={
                                {
                                    onClick: () => {
                                        addRow();
                                        this.setState({ showAdd: true });
                                    },
                                }
                            }
                        />
                    )
                    }
                    template={template}
                    footer={(data, addRow) => (
                        <div>
                            <div className="title-separator" />
                            <LinkButton
                                id="btnAdd"
                                type=""
                                icon="plus"
                                className="button-add-table-form"
                                style={
                                    {
                                        display: this.state.showAdd === true ? 'block' : 'none',
                                    }
                                }
                                onClick={() => {
                                    addRow();
                                    this.setState({ showAdd: true });
                                }}
                                text={addText}
                            />
                        </div>
                    )}
                />
            </React.Fragment>
        );
    }
}

export default PocketTableForm;
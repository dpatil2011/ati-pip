import React from 'react';
import { Row, Col, Icon } from 'antd';
import { AtiDatePicker } from 'ati-react-web';
import './../style/style.css';
import { UI_DATE } from '../../../initOptions.properties';

class DatePickerRegistration extends React.Component {
    render() {
        const { label, onChangeDate, id, name, value } = this.props;
        return (
            <AtiDatePicker
                id={id}
                name={name}
                events={{
                    onDateChange: onChangeDate
                }}
                key="Jul 15, 2019"
                value={value}
                defaultValue={new Date()}
                dateFormat={UI_DATE}
                locale="id"
                timeFormat={false}
                disableOnClickOutside={false}
                readonly={false}
                inputClassName="transaction-choose"
            />
        );
    }
}

export default DatePickerRegistration;
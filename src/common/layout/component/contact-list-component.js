import React from 'react';
import { AtiList } from 'ati-react-web';
import ListContactUsComponent from './list-contact-us-component';


class ContactList extends React.Component {
    render() {
        const { contactUs } = this.props;
        return (
            <AtiList 
                bordered={false}
                itemLayout="horizontal"
                dataSource={contactUs}
                type='custom'
                events={
                    {
                        renderItem: dataContact => (
                            <ListContactUsComponent
                                text={dataContact.text}
                                icon={dataContact.icon}
                                url={dataContact.url}
                            />
                        )
                    }
                }
            />
        );
    }
}

export default ContactList;
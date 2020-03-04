import React from 'react';
import { AtiNotification } from 'ati-react-web';

const NotificationError = (props) => {
    AtiNotification({
        customStyle: {
            fontFamily: 'Avenir Next LT Pro Demi',
            opacity: '0.9',
            borderRadius: '3.5px',
            backgroundColor: '#a62632',
            color: '#ffffff',
            width: 'fit-content',
            float: 'right',
            marginRight: '30px',
            paddingTop: '30px',
            paddingBottom: '30px',
            paddingRight: '40px',
        },
        config: {
          duration: 5,
          placement: 'bottomRight',
        },
        ...props,
    });
};

export default NotificationError;
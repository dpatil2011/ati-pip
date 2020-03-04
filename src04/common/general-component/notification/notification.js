import React from 'react';
import { AtiNotification } from 'ati-react-web';

const Notification = (props) => {
    AtiNotification({
        customStyle: {
            fontFamily: 'Avenir Next LT Pro Demi',
            opacity: '0.9',
            borderRadius: '3.5px',
            backgroundColor: '#26a69a',
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
          placement: 'topRight',
        },
        ...props,
    });
};

export default Notification;
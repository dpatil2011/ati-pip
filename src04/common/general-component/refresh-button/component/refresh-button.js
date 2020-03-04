import React from 'react';
import { AtiButton } from 'ati-react-web';
import './../style/style.css'

function RefreshButton({
    action, ghost, className, marginTop,
}){
    return(
        <div 
            className="refresh-position"
            style={{
                marginTop: marginTop,
            }}
        >
            <AtiButton
                events={{
                    onClick: action,
                }}
                className={className}
                icon="sync"
                size="large"
                ghost={ghost}
                shape="circle"
            /> 
        </div>
    );
}

export default RefreshButton;
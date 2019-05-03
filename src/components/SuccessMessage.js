import React from 'react';

const SuccessMessage = ({text}) => {
    return (
        <div className="ui positive message">
            <i class="paper plane outline icon"></i>
            {text}
        </div>
    );
}

export default SuccessMessage;
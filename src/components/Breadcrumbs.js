import React from 'react';

const Breadcrumbs = ({contentName}) => {
    return (
        <div className="ui small breadcrumb">
            <div className="active section">Mass Mail</div>
            <i className="right angle icon divider"></i>
            <div className="active section">{contentName}</div>
        </div>
    );
}

export default Breadcrumbs;
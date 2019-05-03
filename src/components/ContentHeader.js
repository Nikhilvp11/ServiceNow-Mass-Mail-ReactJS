import React from 'react';
import Back from './Back';
import Breadcrumbs from './Breadcrumbs';

const ContentHeader = (props) => {

    return (
        <div>
            <Back/>
            <Breadcrumbs contentName={props.contentName}/>
            <hr/>
        </div>
    )
}

export default ContentHeader;
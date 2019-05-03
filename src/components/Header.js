import React from 'react';
import './componentsCSS/Header.css';

const Header = ({icon, headerText, description}) => {
    return (
        <div className="mailicon ui center aligned icon header">
            <i className={`circular ${icon} icon`}></i>
            <h2 className="mailtext">{headerText}</h2>
            <h5 className="mailtext">{description}</h5>
        </div>
    );
}

export default Header;
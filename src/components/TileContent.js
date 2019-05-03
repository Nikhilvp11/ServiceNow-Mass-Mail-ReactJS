import React from 'react';
import { Link } from 'react-router-dom';
import './componentsCSS/TileContent.css'

const TileContent = (props) => {

    return (
        <div className="column">
            <Link to={`/${props.value}`}>
                <div className="tilecontent ui icon header">
                    <i className={`${props.iconName} icon header`} />
                    <span className="tiletext">{props.tileText}</span>
                </div>
            </Link >
        </div>
    );
}

export default TileContent;
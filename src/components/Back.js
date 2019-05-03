import React from 'react';
import { Link } from 'react-router-dom';
import './componentsCSS/Back.css'

const Back = () => {

    return (
        <Link to="/">
            <i className="big arrow alternate circle left outline icon backbutton" />
        </Link>
    )
}

export default Back;
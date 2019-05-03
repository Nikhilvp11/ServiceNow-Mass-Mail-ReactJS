import React from 'react';
import TwoTile from './TwoTile';

const MainMenu = () => {
    return (
        <TwoTile dividerText="OR"
            tileOneIcon="edit outline"
            tileOneText="Compose Mass Mail"
            tileOneValue="compose"
            tileTwoIcon="list alternate outline"
            tileTwoText="View Mass Mails"
            tileTwoValue="view"/>
    );
}

export default MainMenu;
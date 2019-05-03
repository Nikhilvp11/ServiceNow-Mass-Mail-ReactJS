import React from 'react';
import TileContent from './TileContent';
import './componentsCSS/TwoTile.css'

class TwoTile extends React.Component {

    render() {
        return (
            <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider">{this.props.dividerText}</div>
                    <div className="middle aligned row">
                            <TileContent
                                iconName={this.props.tileOneIcon}
                                tileText={this.props.tileOneText}
                                value={this.props.tileOneValue} />
                            <TileContent
                                iconName={this.props.tileTwoIcon}
                                tileText={this.props.tileTwoText}
                                value={this.props.tileTwoValue}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoTile;
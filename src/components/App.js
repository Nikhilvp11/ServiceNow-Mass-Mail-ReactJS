import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Header from './Header';
import MainMenu from './MainMenu';
import ComposeMail from './ComposeMail';
import MassMailList from './MassMailList'
import './componentsCSS/App.css'

class App extends React.Component {

    state = {
        description: "Select one of the two components below"
    }

    render() {
        return (
            <div>
                <Header headerText="Mass Mail" description={this.state.description} icon="envelope" />
                <div className="content">
                    <HashRouter>
                        <Route exact path="/" component={MainMenu} />
                        <Route exact path="/compose" component={ComposeMail} />
                        <Route exact path="/view" component={MassMailList} />
                    </HashRouter>
                </div>
            </div>
        );
    }
}

export default App;
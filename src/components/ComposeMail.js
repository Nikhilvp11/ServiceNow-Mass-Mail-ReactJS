import React from 'react';
import axios from 'axios';
import ContentHeader from './ContentHeader';
import ComposeMailForm from './ComposeMailForm';
import Loader from './Loader';
import './componentsCSS/Back.css'
import './componentsCSS/ComposeMail.css'

class ComposeMail extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        const url = ['/api/now/table/user_criteria?sysparm_query='];
        const responseFields = ['sys_id', 'name']

        url.push('&sysparm_fields=' + responseFields.join(','))
        url.push('&sysparm_display_value=true')

        axios.get(url.join(''))
            .then(res => {
                this.setState({ "data": res.data.result });
            })
            .catch(err => {
                console.error('Failed to get user criteria data',err);
            })
    }

    render() {
        let content = this.state.data.length > 0 ? <ComposeMailForm firstOption="Select User Criteria" userCriteriaOptions={this.state.data} /> : <Loader />;
        return (
            <div className="ui placeholder segment back">
                <ContentHeader contentName="Compose Mass Mail" />
                {content}
            </div>
        );
    }
}

export default ComposeMail;
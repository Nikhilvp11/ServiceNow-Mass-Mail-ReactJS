import React from 'react';
import axios from 'axios';
import ContentHeader from './ContentHeader';
import MassMailTable from './MassMailTable';
import Loader from './Loader';
import './componentsCSS/Back.css';

class MassMailList extends React.Component {

    state = {
        data: [],
        showModal: false
    }

    componentDidMount() {
        const url = ['/api/now/table/u_mass_mail?sysparm_query='];
        const responseFields = ['sys_id', 'u_to', 'u_subject', 'u_from', 'sys_created_on']

        url.push('&sysparm_fields=' + responseFields.join(','))
        url.push('&sysparm_limit=' + 5)
        url.push('&sysparm_display_value=true')

        axios.get(url.join(''))
            .then(res => {
                this.setState({ "data": res.data.result });
            })
            .catch(err => {
                console.error('Failed to get mass mail data', err);
            })
    }

    render() {
        const content = this.state.data.length > 0 ? <MassMailTable data={this.state.data} /> : <Loader />;
        return (
            <div>
                <div className="ui placeholder segment back">
                    <ContentHeader contentName="View Mass Mails" />
                    {content}
                </div>
            </div>
        );
    }
}

export default MassMailList;
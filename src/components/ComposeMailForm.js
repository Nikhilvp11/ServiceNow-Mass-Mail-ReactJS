import React from 'react';
import axios from 'axios';
import SuccessMessage from './SuccessMessage';

class ComposeMailForm extends React.Component {

    state = {
        u_to: "",
        u_reply_to: "",
        u_subject: "",
        u_from: "",
        u_message: "",
        readOnly: { style: "", locked: false }
    }

    submitForm = () => {
        const data = { ...this.state };
        delete data.readOnly;
        this.postData(data);
    }

    postData = (data) => {
        const url = ['/api/now/table/u_mass_mail'];

        axios.post(url.join(), data).then(res => {
            this.setState({
                "data": res.data.result,
                "readOnly": {
                    style: "disabled",
                    locked: true,
                }
            });
        }).catch(err => {
            console.error("Failed to post mass mail data",err);
        })
    }

    render() {
        const successMessage = this.state.readOnly.locked ? <SuccessMessage text="Mass Mail successfully sent" /> : null;
        return (
            <div className="ui small form">
                <div className="two fields">
                    <div className={`field alignfieldsleft ${this.state.readOnly.style}`}>
                        <label>To</label>
                        <select className={`ui mini fluid search selection dropdown ${this.state.readOnly.locked}`} multiple="" onChange={(e) => this.setState({ u_to: e.target.value })}>
                            <option value="">{this.props.firstOption}</option>
                            {this.props.userCriteriaOptions.map((i) => (
                                <option key={i.sys_id} value={i.sys_id}>{i.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className={`field alignfieldsleft ${this.state.readOnly.style}`}>
                        <label>Reply-to</label>
                        <input type="text" placeholder="Enter reply-to address here..." onChange={(e) => this.setState({ u_reply_to: e.target.value })} />
                    </div>
                </div>
                <div className="two fields">
                    <div className={`field alignfieldsleft ${this.state.readOnly.style}`}>
                        <label>Subject</label>
                        <input type="text" placeholder="Enter subject here..." onChange={(e) => this.setState({ u_subject: e.target.value })} />

                    </div>
                    <div className={`field alignfieldsleft ${this.state.readOnly.style}`}>
                        <label>From</label>
                        <input type="text" placeholder="Enter from address here..." onChange={(e) => this.setState({ u_from: e.target.value })} />
                    </div>
                </div>
                <div className={`field alignfieldsleft messagebox ${this.state.readOnly.style}`}>
                    <label>Message</label>
                    <textarea rows="2" onChange={(e) => this.setState({ u_message: e.target.value })} />
                </div>
                <button className={`ui primary basic small button ${this.state.readOnly.style}`} onClick={this.submitForm}>
                    <i className="icon paper plane" />
                    Send
                </button>
                {successMessage}
            </div>
        );
    }
}

export default ComposeMailForm;
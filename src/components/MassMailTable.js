import React from 'react';

const MassMailTable = ({ data }) => {

    return (
        <table className="ui small striped table">
            <thead>
                <tr>
                    <th>To</th>
                    <th>Subject</th>
                    <th>From</th>
                    <th>Sent</th>
                </tr>
            </thead>
            <tbody>
                {data.map((i) => (
                    <tr key={i.sys_id}>
                        <td>{i.u_to.display_value}</td>
                        <td>{i.u_subject}</td>
                        <td>{i.u_from}</td>
                        <td>{i.sys_created_on}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MassMailTable;
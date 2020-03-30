import React from 'react';

export default class ListComponent extends React.Component {

    render() {
        return (
            <ul>
                  { this.props.items.map((item,i) => {
                    return <li onClick={(event) => { this.props.removeItem(i)}} key={item} className="to-do-list-item">{ item }</li>
                })}
            </ul>
        )
    }
}
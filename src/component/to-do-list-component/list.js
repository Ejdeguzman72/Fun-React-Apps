import React from 'react';

const List  =  props => (
    <div>
        <ul>
            {
                props.items.map((item, index) => <li className="to-do-list-item" key={index}>{item}</li>)
            }
        </ul>
    </div>
);

export default List;
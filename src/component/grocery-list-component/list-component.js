import React from 'react';

export default class ListComponent extends React.Component {
    render() {
        return (
            <ul>
                { this.props.groceryItems.map((groceryItem) => {
                    return <li key={groceryItem} className="grocery-list-item"> 
                    { groceryItem }
                    <input 
                    placeholder="Enter Amount: " 
                    type="text" 
                    className="grocery-list-item-input" 
                    onChange={(event) => this.props.onHandleGroceryItemAmountChange(event)}
                    /> 
                    </li>
                })}
            </ul>
        )
    }
}
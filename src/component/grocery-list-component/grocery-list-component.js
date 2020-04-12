import React from 'react';
import { GroceryAmountInputComponent } from '../tip-calculator/grocery-amount-input-component';
import { Button, Container, Form } from 'react-bootstrap';
import ListComponent from '../grocery-list-component/list-component';

export class GroceryListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            budgetAmount: 0,
            groceryItem: '',
            groceryItemAmount: 0,
            groceryItems: []
        };
        this.onHandleGroceryItemAmountChange = this.onHandleGroceryItemAmountChange.bind(this);
    }

    onHandleAmountChange = (event) => {
        this.setState({
          budgetAmount: event.target.value
        });
        console.log(this.state.budgetAmount + " " + "onHandleChange");
    }

    onHandleAmountSubmit = (event) => {
        event.preventDefault();
        this.setState({
            budgetAmount: this.state.budgetAmount
        });
        console.log(this.state.budgetAmount + " " + "onHandleAmountSubmit");
    }

    onHandleGroceryItemChange = (event) => {
        this.setState({
            groceryItem: event.target.value
        });
        console.log(this.state.groceryItem + " " + "onGroceryItemChange");
    }

    onHandleGroceryItemAmountChange = (event) => {
        this.setState({
            groceryItemAmount: event.target.value
        });
        console.log(`this is the amount for ${this.state.groceryItem}: $${this.state.groceryItemAmount}`);
    }

    onHandleGroceryItemSubmit = (event) => {
        event.preventDefault();
        this.setState({
            groceryItem: '',
            groceryItems: [...this.state.groceryItems, this.state.groceryItem]
        });
        if (this.state.groceryItem == "") {
            alert(`Item is null`);
            return "";
        }
        else 
        alert(`${this.state.groceryItem}`);
        console.log(this.state.groceryItem);
        console.log(this.state.groceryItems);
    }

    render() {
        return (
            <div id="hero-grocery-list-background">
                <br></br>
                    <Container className="grocery-list-container">
                    <h1 className="center-title">Grocery List</h1>
                        <Form onSubmit={this.onHandleAmountSubmit}>
                            {/* <GroceryAmountInputComponent amount={this.state.amount} /> */}
                            <label>Enter Grocery Budget: </label>
                            <input type="text" className="grocery-list-budget-input" value={this.state.budgetAmount} onChange={(event) => this.onHandleAmountChange(event)}/>
                            <Button variant="secondary" type="submit">Submit</Button><br></br>
                        <label>Budget: {this.state.budgetAmount}</label><br></br>
                        </Form>
                        <Form>
                            <label>Add Grocery Item: </label>
                            <input type="text" value={this.state.groceryItem} onChange={(event) => this.onHandleGroceryItemChange(event)} className="grocery-list-input" />
                            <Button variant="secondary" onClick={(event) => this.onHandleGroceryItemSubmit(event)}>Submit</Button>
                        </Form>
                        <ListComponent groceryItems={this.state.groceryItems} onHandleGroceryItemAmountChange={this.onHandleGroceryItemAmountChange} />
                    </Container>
            </div>
        )
    }
}
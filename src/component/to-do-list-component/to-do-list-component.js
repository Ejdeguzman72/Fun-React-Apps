import React from 'react';
import { Container, Button } from 'react-bootstrap';
import ListComponent from './list-component';
import { NavBarComponent } from '../../component/navbar-component/navbar-component';

export default class ToDoListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
        this.removeItem = this.removeItem.bind(this);
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    removeItem(i) {
        const items = this.state.items.filter((item, itemIndex) => {
            return itemIndex !== i
        })
        this.setState({ items })
    }

    render() {
        return (
            <div>
                <NavBarComponent />
                <div id="hero-to-do-list-background">
                    <br></br>
                    <Container className="to-do-list-container">
                        <h1 className="center-title">To Do List</h1>
                        <form className="App" onSubmit={this.onSubmit}>
                            <input value={this.state.term} onChange={this.onChange} />
                            <Button variant="secondary" type="submit">Submit</Button>
                            <br></br>
                        </form>
                        <ListComponent items={this.state.items} removeItem={this.removeItem} />
                    </Container>

                </div>
            </div>
        )
    }
}
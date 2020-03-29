import React from 'react';
import List from './list';
import { Container } from 'react-bootstrap';

export default class ToDoListComponent extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            term: '',
            items: []
        };
        this.removeItem = this.removeItem.bind(this);
    }

    onChange = (event) => {
        this.setState({term:  event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            term:'',
            items: [...this.state.items, this.state.term]
        });
    }

    removeItem(name, i) {
        let item = this.state.items.slice();
        item.splice(i,1);
        this.setState({
            item
        });
    }

    render() {
        return (
            <div id="hero-about-me-background">
                <br></br>
                <Container className="to-do-list-container">
                    <h1 className="center-title">To Do List</h1>
                    <form className="App" onSubmit={this.onSubmit}>
                        <input value={this.state.term}  onChange={this.onChange} />
                        <button>Submit</button>
                        <br></br>
                    </form>   
                        <List items={this.state.items} removeItem={this.removeItem}/>
                </Container>
            </div>
        )
    }
}
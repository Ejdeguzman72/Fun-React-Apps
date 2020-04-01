import React from 'react';
import { Form, Container, Button, Row } from 'react-bootstrap';

export class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            present: false,
            name: ''
        }
    }

    onNameChange = (event) => {
        this.setState({ 
            name: event.target.value
        });
        console.log("Name: " + this.state.name);
        console.log("Attendance: " + this.state.present);
    }

    onSubmit = (event) => {
        event.preventDefault();
        // this.setState({
        //     present: true
        // });
        if (this.state.name != null) {
            this.setState({
                present: true
            });
        }
        else {
            this.setState({
                present: false
            });
        }
        alert(`${this.state.name} has checked in`);
        console.log(this.state.name);
        console.log(this.state.present);
    }

    render() {
        return (
            <div>
                <div id="hero-check-in-background">
                    <br></br>
                    <Form onSubmit={this.onSubmit}>
                        <Container className="check-in-container">
                            <h1 className="center-title">Check-In</h1>
                            <label>Enter Your Name:</label>
                            <br></br>
                            <input type="text"  placeholder="Name"  onChange={(event) => this.onNameChange(event)}/>
                            <br></br>
                            <br></br>
                            <Button variant="secondary" type="submit">Submit</Button>
                        </Container>
                    </Form>
                </div>
            </div>
        )
    }
}
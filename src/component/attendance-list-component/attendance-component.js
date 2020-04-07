import React from 'react';
import { Form, Container, Button, Row } from 'react-bootstrap';
import AttendanceListComponent from './attendance-list-component';

export class CheckInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            present: false,
            firstname: '',
            lastname: '',
            fullname: '',
            names: [],
        }
    }

    handleFirstNameChange = (event) => {
        // var today = new Date();
        // var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        this.setState({ 
            firstname: event.target.value,
        });
        console.log(this.state.firstname);
    }

    handleLastNameChange =  (event)  => {
        this.setState({
            lastname: event.target.value,
        });
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        this.setState({
            present: true,
            date: currentDate,
            fullname:  this.state.firstname + ' ' + this.state.lastname,
            names: [...this.state.names,  this.state.fullname]
        });
    }

    render() {
        return (
            <div>
                <div id="hero-check-in-background">
                    <br></br>
                    <Form onSubmit={this.onSubmit}>
                        <Container className="check-in-container">
                            <h1 className="center-title">Check-In</h1>
                            <label>Enter First Name:</label>
                            <br></br>
                            <input value={this.state.firstname} type="text" className="check-in-input" onChange={(event) => this.handleFirstNameChange(event)}/>
                            <br></br>
                            <label>Enter Last Name:</label>
                            <br></br>
                            <input value={this.state.lastname} type="text" className="check-in-input" onChange={(event) => this.handleLastNameChange(event)} />
                            <br></br>
                            <Button variant="secondary" type="submit" className="check-in-button">Submit</Button>
                            <AttendanceListComponent  names={this.state.names} time={this.state.date} />
                        </Container>
                    </Form>
                </div>
            </div>
        )
    }
}
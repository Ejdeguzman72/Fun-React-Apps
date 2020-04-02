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
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        this.setState({ 
            date: currentDate,
            firstname: event.target.value,
            present: true
        });
        console.log(this.state.firstname);
    }

    handleLastNameChange =  (event)  => {
        this.setState({
            lastname: event.target.value
        });
        console.log(this.state.lastname);
    }

    onSubmit = (event) => {
        event.preventDefault();
        var today = new Date();
        var currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        var firstname = this.state.firstname;
        var lastname = this.state.lastname;
        console.log(firstname + lastname);
        console.log('this is personFullName');
        this.setState({
            present: true,
            fullname: '',
            date: currentDate,
            fullname:  firstname + ' '+ lastname,
            names: [...this.state.names,  this.state.fullname]
        });
     
        alert(`${this.state.fullname} has checked in`);
        console.log("Time: " + this.state.date);
        console.log("First Name: " + this.state.firstname);
        console.log("Last Name: " + this.state.lastname)
        console.log("Attendance: " + this.state.present);
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
                            <AttendanceListComponent  names={this.state.fullName} />
                        </Container>
                    </Form>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Bounce from './homepage-title-component';
import HomepageTitleComponent from './homepage-title-component';
import Avatar, { ConfigProvider } from 'react-avatar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Fun React Projects"
        };
    }
    render() {
        return (
            <div id="hero-home-background">
                <div id="hero-overlay">
                        <div className="bounce-square">
                            <Bounce>
                                <br></br>
                                <br></br>
                                <br></br>
                                <h3 className="center-title">Press Start</h3>
                            </Bounce>
                            <div className="button-row">
                                <Button variant="dark" className="start-button" size="lg">
                                    <Link to="to-do-list" className="navbar-link">
                                        START
                                    </Link>  
                                </Button>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}
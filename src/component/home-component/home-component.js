import React from 'react';
import Bounce from './homepage-title-component';
import HomepageTitleComponent from './homepage-title-component';
import Avatar, { ConfigProvider } from 'react-avatar';
import { Container, Row, Col } from 'react-bootstrap';

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
                    <h1 className="homepage-title">Edgar Joseph DeGuzman</h1>
                </div>
            </div>
        )
    }
}
import React from 'react';
import Bounce from './homepage-title-component';
import HomepageTitleComponent from './homepage-title-component';
import Avatar,  {ConfigProvider } from 'react-avatar';
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
                <h1 className="homepage-title">Edgar Joseph DeGuzman</h1>
                <Container className="homepage-container">
                <Row>
                        <Col md={2}>

                        </Col>
                        <Col md={10}>
                           <h1  className="homepage-title">Have Fun With Our:</h1>
                        </Col>
                        <Col md={2}>
                            
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col md={2}>

                        </Col>
                        <Col md={10}>
                            <Bounce>
                                <Avatar round={true} value={this.state.title} size={350} color={Avatar.getRandomColor('sitebase', ['FFFAF0', 'FFFAF0', 'blue'])} className="homepage-container">
                                    <h1 id="homepage-title">Fun React Projects</h1>
                                </Avatar>
                            </Bounce>
                        </Col>
                        <Col md={2}>
                            
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
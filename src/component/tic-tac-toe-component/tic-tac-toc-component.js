import React from 'react';
import { Container } from 'react-bootstrap';

export class TicTacToeComponent extends React.Component {

    render() {
        return (
            <div id="hero-tic-tac-toe-background"> 
                <br></br>
                <Container className="tic-tac-toe-container">
                    <h1 className="center-title">TicTacToe Game</h1>
                </Container>
            </div>
        )
    }
}
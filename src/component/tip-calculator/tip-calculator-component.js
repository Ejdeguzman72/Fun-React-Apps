import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
// import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from 'material-ui\core';

export class TipCalculatorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0.00,
            tipPercent: 0.00,
            tipAmount: 0.00,
            service: '',
            total: 0.00
        }
    }

    onAmountChange = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    onServiceChange = (event) => {
        this.setState({
            service: event.target.value
        });
    }

    render() {
        return (
            <div id="hero-tip-calculator-background">
                <br></br>
                <Container className="tip-calculator-container">
                    <h1 className="center-title">Tip Calculator</h1>
                    <h3 id="tip-calculator-center-row">Bill Amount:</h3>
                    <input type="text" />
                    <h3 id="tip-calculator-center-row">How was the service?</h3>
                    <select>
                        <option>Above Satisfactory</option>
                        <option>Satisfactory</option>
                        <option>Below Satisfactory</option>
                    </select>
                    <h3 id="tip-calculator-center-row">Choose Tip Amount:</h3>
                    <label className="tip-calculator-label">15%</label>
                    <input type="radio" className="tip-calculator-radio-button"/>
                    <br></br>
                    <label className="tip-calculator-label">20%</label>
                    <input type="radio" className="tip-calculator-radio-button"/>
                    <br></br>
                    <label className="tip-calculator-label">22%</label>
                    <input type="radio" className="tip-calculator-radio-button"/>
                    <h3 className="center-title">Tip Amount:</h3>
                    <Button variant="secondary">Submit:</Button>
                    <h3 className="center-title">Total Amount:</h3>
                </Container>
            </div>
        )
    }
}
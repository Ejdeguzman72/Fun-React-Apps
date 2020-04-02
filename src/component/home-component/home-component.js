import React from 'react';
import Bounce from './homepage-title-component';
import HomepageTitleComponent from './homepage-title-component';

export class HomeComponent extends React.Component {
    render() {
        return (
            <div id="hero-home-background">
                <Bounce >
                    <h1 className="homepage-title">Fun React Projects</h1>
                </Bounce>
            </div>
        )
    }
}
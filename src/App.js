import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoListComponent from './component/to-do-list-component/to-do-list-component';
import { NavBarComponent } from './component/navbar-component/navbar-component';
import { HashRouter, Switch,  Route } from 'react-router-dom';
import { TipCalculatorComponent } from './component/tip-calculator/tip-calculator-component';

function App() {
  return (
    <div>
      <NavBarComponent />
      <HashRouter>
        <Switch>
          <Route path="/to-do-list" exact component={ToDoListComponent} />
          <Route path="/tip-calculator" exact component={TipCalculatorComponent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

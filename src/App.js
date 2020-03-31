import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoComponent from './component/to-do-list-component/to-do-list-component';
import { NavBarComponent } from './component/navbar-component/navbar-component';
import { HashRouter, Switch,  Route } from 'react-router-dom';
import { TipCalculatorComponent } from './component/tip-calculator/tip-calculator-component';
import { PokedexComponent } from './component/pokedex-component/pokedex-component';
import { TicTacToeComponent } from './component/tic-tac-toe-component/tic-tac-toc-component';

function App() {
  return (
    <div>
      <NavBarComponent />
      <HashRouter>
        <Switch>
          <Route path="/to-do-list" exact component={ToDoComponent} />
          <Route path="/tip-calculator" exact component={TipCalculatorComponent} />
          <Route path="/pokedex" exact component={PokedexComponent}  />
          <Route path="/tic-tac-toe"  exact component={TicTacToeComponent} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

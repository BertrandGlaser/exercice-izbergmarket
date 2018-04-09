import React, { Component } from 'react';
import SubmitConnected from './ui/scenes/submitElements/SubmitConnected'
import ProfilConnected from './ui/scenes/profilElements/ProfilConnected'
import{Switch, Route} from 'react-router-dom'
import Header from './ui/scenes/Header'


class App extends Component {
  render() {
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path="/Submit" component={SubmitConnected} />
          <Route exact path="/Profil" component={ProfilConnected} />
        </Switch>
      </div>
    );
  }
}

export default App;

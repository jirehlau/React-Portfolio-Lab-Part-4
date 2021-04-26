import React, { Component } from 'react';
import './App.css';
import InfoList from './components/InfoList/InfoList';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import Footer from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-header"> React Portfolio</nav>
      <div className="profileContainer">
        <ProfileSummary />
        <InfoList />
      </div>
        <Footer />
      </div>
    );
  }
}

export default App;
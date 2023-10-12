import React, {Component} from "react";
import logo from '../logo.svg';
import '../App.css';

class Home extends Component{
    render() {
        const {playNow } = this.props;
  return (
    <div className="App2">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> Quiz App </h1>
        <div className="grouped-text">
          <h3 className="header-text">Let's Play!</h3>
          <p className="header-text">Play now and keep learning</p>
        </div>
        <div className="button-container">
          <button  onClick={playNow}>Play Now</button>
        </div>
      </header>
    </div>
  );
}
}

export default Home;

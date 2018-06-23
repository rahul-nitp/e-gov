import React, { Component } from 'react';
import Flexi from "./components/Flexi";
import FlexiConfig from "./components/FlexiConfig";

import './App.css'

class App extends Component {
  constructor (props){
    super(props);
    this.state={
      items : []
    }
  }
  onFlexiSubmit=(newName, newStateName) =>{
    const items = [...this.state.items];
    items.push({newName, newStateName});
    this.setState({items})
  }


  render() {
    return (
      <div className="centered">
        <Flexi onSubmit={this.onFlexiSubmit} config={FlexiConfig}/>
      <ul>
        {this.state.items.map((d,i) => <li key={i}>{d.newName}   {d.newStateName}</li>)}
       </ul>
      </div>
    );
  }
}

export default App;

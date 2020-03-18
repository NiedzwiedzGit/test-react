import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    outData: [
      { fillText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { fillText: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' }
    ],
    username: [
      { name: 'Max' },
      { name: 'Manu' }
    ]
  }
  nameChangeHandler = (event) => {
    this.setState({
      username: [
        { name: 'Max' },
        { name: event.target.value }
      ]
    })

  }
  switchNameHandler = (newName, ) => {
    this.setState({
      username: [
        { name: newName },
        { name: 'Manu' }
      ]
    })
  }
  switchOldNameHandler = (newName, newName2) => {
    this.setState({
      username: [
        { name: newName },
        { name: newName2 }
      ]
    })
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      margin: '20px'
    }
    return (

      <div className="App">
        <UserOutput
          fillText={this.state.outData[0].fillText}
          name={this.state.username[0].name}
        />
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Igoooor')}>Switch Name</button>

        <UserOutput
          fillText={this.state.outData[1].fillText}
          name={this.state.username[1].name}
        />

        <UserInput
          changed={this.nameChangeHandler}
          name={this.state.username[1].name}
        />
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'Max', 'Manu')}>Old Name</button>


      </div >
    );
  }
}

export default App;

// add the folloing code below this line
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    )
  }
}
// add the following code bellow this line
ReactDOM.render(<App />, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

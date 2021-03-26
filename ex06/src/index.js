// add the following code below this line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
React.Component()
class App extends React.Component {
  render() {
    const world = "World"
    return (
      <div className="App">
        <h1>Hello, {world}!</h1>
      </div>
    )
  }
}
// add the following code above this line
ReactDOM.render(<App />, document.getElementById('root'));
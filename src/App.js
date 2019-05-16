import React from 'react';
import Header from './Header';
import './App.css';


class App extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {
      customTitle: 'Changed Title',
      originTitle: 'Origin Title',
      isChanged: false
    }
  };

  onChangeTitle= (e) => {
    this.setState({
      isChanged: !this.state.isChanged,
    })
  };

  render () {
    const {customTitle, originTitle, isChanged} = this.state;
  
    return (
      <div className="App">
        <Header title={isChanged ? customTitle : originTitle}></Header>
        <button onClick={this.onChangeTitle}>Change Title</button>
      </div>
    );
  };
}

export default App;

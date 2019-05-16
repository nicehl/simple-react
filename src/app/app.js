import React from 'react';
import Header from './header';

class App extends React.Component {
  
  constructor (props) {
    super(props);
  }

  onChangeTitle= () => {
    this.setState({
      isChanged: !this.state.isChanged
    });
  };

  render () {  
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;

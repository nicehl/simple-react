import React from 'react';
import Header from './containers/headerContainer';
import Routes from './router';
// import Footer from './containers/footerContainer';

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
        <Routes />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;

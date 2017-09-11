import React from 'react';
import { render } from 'react-dom';
import { Sidebar } from 'semantic-ui-react';


// import './app.js';
import MainPage from './MainPage.jsx';
import SideNav from './SideNav.jsx';

class App extends React.Component {

  state = {
    visible: false,
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    return (
      <Sidebar.Pushable>
        <SideNav visible={this.state.visible}/>
        <MainPage toggleVisibility={this.toggleVisibility}/>
      </Sidebar.Pushable>
    );
  }
}

render(
  <App />,
  document.querySelector('#root'),
);

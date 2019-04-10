import React, { Component } from 'react';
import huejay from 'huejay';
import HueDetail from './HueDetail/HueDetail'
import './App.css';

class App extends Component {

  render() {
    let client = new huejay.Client({
      host: '192.168.0.17',
      port: 80,               // Optional
      username: 'QrQpI0Wuc8qorW8rhM6WWn9L9cUfycVwcB3BnYuy', // Optional
      timeout: 15000,            // Optional, timeout in milliseconds (15000 is the default)
    });

    client.bridge.ping()
      .then(() => {
        console.log('Connected to Philips Hue Bridge with User: ' + client.username);
      })
      .catch(error => {
        console.log('Could not connect');
      });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Hue Got This!</h1>
          <HueDetail client={this.client} />
        </header>
      </div>
    );
  }
}

export default App;

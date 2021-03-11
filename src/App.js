import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/App.scss';
import './assets/style/Layout.scss';
import './assets/style/Reset.scss';
import AlertModal from './components/alert/AlertModal';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'React App',
      desc: 'F....K',
      list: {
        title: 'Hi jeyy',
        desc: 'How are you today?'
      }
    }
  }

  onModal = ({ time, desc }) => {
    this.setState({ title: `Child OPT - ${time}`, desc })
  }

  onClose = () => {
    let list = { title: `F OPT - ${Date.now()}`, desc: 'Tom SB.' };
    this.setState({ list });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div className="alert alert-success alert-dismissible fade show firstCollapsible" role="alert">
            <h2>{this.state.title}</h2>
            <p>{this.state.desc}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline-success" onClick={this.onClose} >F-BTN</button>
            </div>
          </div>
        </header>
        <main className="app-main">
          <AlertModal opt={this.state.list} onModal={this.onModal} />
        </main>
        <footer className="app-footer">footer</footer>
      </div>
    )
  }
}

export default App;


import holberton_logo from './holberton_logo.jpg';
import './App.css';
import React from 'react';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form className='login_form'>
        <label htmlFor='email'>Email: </label>
        <input type='email' id='email'/>
        <label htmlFor='password'> Password: </label>
        <input type='password' id='password'/>
        <button>OK</button>
        </form>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;

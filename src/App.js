import React,{Fragment} from 'react';
import Header from './componentes/Header.js';
import Cards from './componentes/Cards.js';
import Overview from './componentes/Overview.js';
import Switch from './componentes/Switch.js';
import './App.css';
import './Globals.css';

function App() {
  return (
    <Fragment>
      <Header>
      	<Switch/>
      </Header>
      <Cards/>
      <Overview/>
    </Fragment>
  );
}

export default App;

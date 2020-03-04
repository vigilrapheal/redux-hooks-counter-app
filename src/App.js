import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';
import Card1 from './component/Card1';
import Card2 from './component/Card2';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store} >
      <Navigation />
      <Layout />
    </Provider>
  );
}

export default App;

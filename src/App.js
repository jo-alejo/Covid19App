import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
//import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import Router from './router';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAy_a1SI57pGELkfx-Dqi3VmBexRoZGSWo',
      authDomain: 'georreferencia-96af8.firebaseapp.com',
      databaseURL: 'https://georreferencia-96af8.firebaseio.com',
      projectId: 'georreferencia-96af8',
      storageBucket: 'georreferencia-96af8.appspot.com',
      messagingSenderId: '115153039',
      appId: '1:115153039:web:97fb2c520e8e4976de38fa',
      measurementId: 'G-JVLKWDYR6Q',
    };
    if (!firebase.apps.length) {
      try {
        firebase.initializeApp(firebaseConfig);
      } catch (err) {
        console.error('Firebase initialization error', err.stack);
      }
    }
  }
  render() {
    const store = createStore(
      reducers,
      {},
      composeWithDevTools(applyMiddleware(ReduxThunk)),
    );
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Body from './ui/components/Body'


ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Body>
          <App />
        </Body>
      </BrowserRouter>
    </Provider>
  </div>, document.getElementById('root'));

registerServiceWorker();

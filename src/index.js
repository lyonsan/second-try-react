import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
//リンクを飛ばすために以下3つのライブラリをインストールする必要がある。
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  // Provideでstoreをどのコンポーネントからも参照できるようにする
  <Provider store={store}>
    {/* リンクを飛ばせるようにするためBrowserRouter, Switchを使い、Routeに各コンポーネントをオプションに取ったものをラップしている */}
    <BrowserRouter>
      <Switch>
        <Route exact path="events/new" component={EventsNew} />
        <Route exact path="/" component={EventsIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

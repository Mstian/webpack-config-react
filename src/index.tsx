import React from 'react';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import RouterMap from './router/index';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
if ((module as any) && (module as any).hot) {
  // 热更新设置 as any解决 Property 'hot' does not exist on type 'NodeModule'.
  (module as any).hot.accept();
}

ReactDOM.render(
  <Provider store = {store}>
    <RouterMap />
  </Provider>,
  document.querySelector('#root')
);

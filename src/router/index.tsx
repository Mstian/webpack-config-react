import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Loading from './loading';
import { createHashHistory } from 'history';
import Loadable from 'react-loadable';
const App = Loadable({
    loader: ()=>import('Containers/App'),
    loading: Loading
});
const Home = Loadable({
    loader: () => import('Containers/Home'),
    loading: Loading
})
const routeConfig = [
  {
    component: Home,
    path: '/'
  },
  {
    component: App,
    path:'/app/:id'
  }
];
const history = createHashHistory();
const router = () => (
  <Router history={history}>
    <Switch>
      {routeConfig.map((item)=>(
          <Route path={item.path} exact={true} key={item.path} component={item.component}></Route>
      ))}
    </Switch>
  </Router>
);
export default router;

import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/study" component={TeacherList} />
    <Route path="/give-classes" component={TeacherForm} />
  </Switch>
);

export default Routes;

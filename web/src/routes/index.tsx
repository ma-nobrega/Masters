import React from 'react';

import { Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';
import Schedules from '../pages/Schedules';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Subjects from '../pages/Subjects';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/study" component={TeacherList} isPrivate />
    <Route path="/schedules" component={Schedules} isPrivate />
    <Route path="/give-classes" component={Subjects} isPrivate />
    <Route path="/form-give-classes" component={TeacherForm} isPrivate />
  </Switch>
);

export default Routes;

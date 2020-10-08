import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';

const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/auth" exact>
        <AuthPage />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  );
};

export default useRoutes;

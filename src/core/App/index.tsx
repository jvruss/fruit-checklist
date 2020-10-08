import React, { FC } from 'react';

// State
import { LoginData } from '../../state/user/types';

// Core
import useRoutes from '../useRoutes';

// Style
import './App.scss';

const userData = localStorage.getItem('userData');
const parsedUserData = userData ? (JSON.parse(userData) as LoginData) : null;

const App: FC = () => {
  const routes = useRoutes(Boolean(parsedUserData?.token));

  return <div className="App">{routes}</div>;
};

export default App;

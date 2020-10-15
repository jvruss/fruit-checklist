import React, { FC, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';

// Components
import Header from '../../components/Layout/Header';
import Menu from '../../components/Layout/Menu';

// Styles
import styles from './App.module.scss';

const cx = classNames.bind(styles);

// Pages
const HomePage = lazy(() => import('../../pages/HomePage'));
const FruitPage = lazy(() => import('../../pages/FruitPage'));

const App: FC = () => {
  return (
    <div className={cx('App')}>
      <Header className={cx('App__header')} />
      <main className={cx('App__main')}>
        <Menu className={cx('App__menu')} />
        <div className={cx('App__workarea')}>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/fruit/:name">
                <FruitPage />
              </Route>
              <Route path="/my">
                <div>My fruits</div>
              </Route>
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default App;

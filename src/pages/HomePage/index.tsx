import React, { FC } from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './HomePage.module.scss';

const cx = classNames.bind(styles);

const HomePage: FC = () => {
  return <div className={cx('HomePage')}>Home</div>;
};

export default HomePage;

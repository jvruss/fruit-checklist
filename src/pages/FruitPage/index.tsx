import React, { FC } from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './FruitPage.module.scss';

const cx = classNames.bind(styles);

const FruitPage: FC = () => {
  return <div className={cx('FruitPage')}>FruitPage</div>;
};

export default FruitPage;

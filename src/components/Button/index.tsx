/* eslint-disable react/button-has-type */
import React, { FC } from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

export interface IProps {
  className?: string;
  type: 'button' | 'submit' | 'reset';
}

const Title: FC<IProps> = (props) => {
  const { className, children, type } = props;

  return (
    <button className={cx('Button', className)} type={type}>
      {children}
    </button>
  );
};

export default Title;

import React, { FC } from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

export interface IProps {
  className?: string;
  level: number;
}

const Title: FC<IProps> = (props) => {
  const { className, children, level } = props;

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={cx('Title', className, { [`Title__level-${level}`]: level })}>{children}</Tag>;
};

export default Title;

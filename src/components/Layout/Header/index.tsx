import React, { FC } from 'react';
import classNames from 'classnames/bind';

// Styles
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

type IHeaderProps = {
  className?: string;
};

const Header: FC<IHeaderProps> = (props) => {
  const { className } = props;

  return <div className={cx('Header', className)}>Fruit Checklist</div>;
};

export default Header;

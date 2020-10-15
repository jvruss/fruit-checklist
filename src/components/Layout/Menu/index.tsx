import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

// Styles
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

type IMenuProps = {
  className?: string;
};

const Menu: FC<IMenuProps> = (props) => {
  const { className } = props;

  return (
    <nav className={cx('Menu', className)}>
      <NavLink className={cx('Menu__link')} activeClassName={cx('Menu__link_active')} to="/" aria-current="page" exact>
        Все фрукты
      </NavLink>
      <NavLink
        className={cx('Menu__link')}
        activeClassName={cx('Menu__link_active')}
        to="/my"
        aria-current="page"
        exact
      >
        Мои фрукты
      </NavLink>
    </nav>
  );
};

export default Menu;

import React, { FC } from 'react';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

// State
import { LoginArgs, LoginData } from '../../state/user/types';

// Core
import { useHttp } from '../../core/useHttp';

// Styles
import styles from './AuthPage.module.scss';

const cx = classNames.bind(styles);

const AuthPage: FC = () => {
  const { isLoading, request } = useHttp();
  const { register, handleSubmit, errors, setError } = useForm<LoginArgs>();

  const onSubmit = handleSubmit(async ({ email, password }: LoginArgs) => {
    try {
      const { token, userId } = (await request('/auth/login', 'POST', { email, password })) as LoginData;
      localStorage.setItem('userData', JSON.stringify({ userId, token }));
    } catch (e) {
      setError('password', {
        type: 'manual',
        message: e.message,
      });
    }
  });

  return (
    <form className={cx('AuthPage')} onSubmit={onSubmit}>
      <input name="email" ref={register()} />
      {errors.email?.message}
      <input name="password" ref={register()} />
      {errors.password?.message}
      <button type="submit" disabled={isLoading}>
        Accept
      </button>
    </form>
  );
};

export default AuthPage;

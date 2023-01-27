import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../types/Paths.types';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={classes.error}>
      <div className="container">
        <div className={classes.error__content}>
          <h1 className={classes.error__title}>404</h1>
          <p className={classes.error__text}>
            Вы перешли на несуществующую страницу
          </p>
          <Link
            to={Paths.home}
            className="link">
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

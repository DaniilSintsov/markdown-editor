import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from '../../types/Paths.types';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className="container">
      <div className={classes.welcome}>
        <h1 className={classes.welcome__title}>
          Ничего лишнего... Минималистичный редактор Markdown
        </h1>
        <p className={classes.welcome__text}>
          Наш простой редактор позволит вам создать Markdown-документ
        </p>
        <Link
          to={Paths.editor}
          className="link">
          За работу
        </Link>
      </div>
    </div>
  );
};

export default HomePage;

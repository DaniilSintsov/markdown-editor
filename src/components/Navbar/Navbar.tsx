import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAppSelector } from '../../hooks/hooks';
import { Paths } from '../../types/Paths.types';
import { downloadTextFile } from '../../utils/helpers/downloadTextFile.helpers';
import classes from './Navbar.module.css';

const Navbar = () => {
  const markup = useAppSelector(state => state.markup.markup);
  const { pathname } = useLocation();
  const isEditorPage = pathname === Paths.editor;

  return (
    <header
      className={classes.header}
      style={
        isEditorPage
          ? { backgroundColor: 'var(--dark-blue)' }
          : { backgroundColor: 'var(--white)' }
      }>
      <div className="container">
        <nav className={classes.navbar}>
          <Link
            to={Paths.home}
            className={classes.logoWrapper}>
            <img
              src={logo}
              alt="logo"
            />
          </Link>
          {isEditorPage && (
            <button
              onClick={() => downloadTextFile(markup)}
              className={classes.downloadLink}>
              Скачать
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

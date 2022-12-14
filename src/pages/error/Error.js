import React, {useEffect} from 'react'
import classes from './Error.module.css'
import {Link} from 'react-router-dom'
import {exitEditorPageAction} from '../../redux/actions'
import {useDispatch} from 'react-redux'
import {urls} from '../../router/routes'

const Error = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(exitEditorPageAction())
    localStorage.removeItem('isEditorPage')
    localStorage.setItem('isHomePage', 'true')
  }, [dispatch])

  return (
    <div className={classes.error}>
      <div className="container">
        <div className={classes.error__content}>
          <h1 className={classes.error__title}>404</h1>
          <p className={classes.error__text}>Вы перешли на несуществущую страницу</p>
          <Link to={urls.home}
                className="link">На главную</Link>
        </div>
      </div>
    </div>
  )
}

export default Error

import React from 'react'
import classes from './Home.module.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {onEditorPageAction} from '../../redux/actions'

const Home = () => {
  const dispatch = useDispatch()

  const onEditorPage = () => {
    dispatch(onEditorPageAction())
    localStorage.setItem('isEditorPage', 'true')
  }

  return (
    <div className="container">
      <div className={classes.welcome}>
        <h1 className={classes.welcome__title}>Ничего лишнего... Минималистичный редактор Markdown</h1>
        <p className={classes.welcome__text}>Наш простой редактор позволит вам создать Markdown-документ</p>
        <Link to="/editor"
              onClick={onEditorPage}
              className="link">За работу</Link>
      </div>
    </div>
  )
}

export default Home

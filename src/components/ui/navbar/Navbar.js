import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../../assets/logo.png'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {exitEditorPageAction} from '../../../redux/actions'
import {downloadFile, getNewFileHandle} from '../../../api/downloadFile'

const Navbar = () => {
  const dispatch = useDispatch()
  const isEditorPage = useSelector(state => state.isEditorPage)
  const markup = useSelector(state => state.markup)

  const exitEditorPage = () => {
    dispatch(exitEditorPageAction())
    localStorage.removeItem('isEditorPage')
  }

  const downLoadFileHandler = async () => {
    if (markup.trim().length) {
      let fileHandle
      try {
        fileHandle = await getNewFileHandle()
      } catch (e) {
        alert('Не удалось скачать файл :(')
        throw new Error(e)
      }
      try {
        await downloadFile(fileHandle, markup.trim())
        alert('Файл успешно сохранен!')
      } catch (e) {
        alert('Произошла ошибка :(')
        throw new Error(e)
      }
    } else {
      alert('Вы пытаетесь сохранить пустой файл!')
    }
  }

  return (
    <header className={classes.header}
            style={isEditorPage ? {backgroundColor: 'var(--dark-blue)'} : {backgroundColor: 'var(--white)'}}>
      <div className="container">
        <nav className={classes.navbar}>
          <Link to="/"
                onClick={exitEditorPage}
                className={classes.logoWrapper}>
            <img src={logo}
                 alt="logo"/>
          </Link>
          {isEditorPage && <button onClick={downLoadFileHandler}
                                   className={classes.downloadLink}>Скачать</button>}
        </nav>
      </div>
    </header>
  )
}

export default Navbar

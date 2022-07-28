import React from 'react'
import classes from './Editor.module.css'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import {markupInputAction} from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import {getMarkdown} from '../../api/getMarkdown'

const Editor = () => {
  const dispatch = useDispatch()
  const markup = useSelector(state => state.markup)

  const markupInputHandle = (e) => {
    dispatch(markupInputAction(e.target.value))
  }

  const copyHandler = () => {
    if (markup.trim().length) {
      navigator.clipboard.writeText(markup.trim())
        .then(() => {
          alert('Копирование в буфер обмена произошло успешно!')
        })
        .catch(e => {
          alert('Произошла ошибка при копировании в буфер обмена :(')
          throw new Error(e)
        })
    } else {
      alert('Вы пытаетесь скопировать текст из пустого документа!')
    }
  }

  return (
    <div className={classes.editor}>
      <div className={'container ' + classes.editor__container}>
        <div className={classes.editor__wrapper}>
          <div className={classes.editor__editor}>
            <div className={classes.editor__header}>
              <label className={classes.editor__label}
                     htmlFor="editor">Редактор</label>
              <button className={classes.editor__copy}
                      onClick={copyHandler}>Скопировать в буфер обмена
              </button>
            </div>
            <div className={classes.editor__body}>
              <textarea className={classes.editor__textarea}
                        onChange={markupInputHandle}
                        value={markup}
                        id="editor"/>
            </div>
          </div>
          <div className={classes.editor__preview}>
            <div className={classes.editor__header}>
              <span className={classes.editor__previewTitle}>Предпросмотр</span>
            </div>
            <div className={classes.editor__body}>
              <div className={classes.editor__previewContent}>
                <SimpleBar style={{height: '100%', marginBottom: 0}}>
                  <div dangerouslySetInnerHTML={{'__html': getMarkdown(markup)}}/>
                </SimpleBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor

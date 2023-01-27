import React from 'react';
import SimpleBar from 'simplebar-react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { markupInput } from '../../store/markup/markup.slice';
import { getMarkdown } from '../../utils/helpers/getMarkdown.helpers';
import classes from './EditorPage.module.css';
import 'simplebar-react/dist/simplebar.min.css';
import { copyToClipboard } from '../../utils/helpers/copyToClipboard.helpers';

const EditorPage = () => {
  const dispatch = useAppDispatch();
  const markup = useAppSelector(state => state.markup.markup);

  const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(markupInput(e.target.value));
  };

  return (
    <div className={classes.editor}>
      <div className={'container ' + classes.editor__container}>
        <div className={classes.editor__wrapper}>
          <div className={classes.editor__editor}>
            <div className={classes.editor__header}>
              <label
                className={classes.editor__label}
                htmlFor="editor">
                Редактор
              </label>
              <button
                className={classes.editor__copy}
                onClick={() => copyToClipboard(markup)}>
                Скопировать в буфер обмена
              </button>
            </div>
            <div className={classes.editor__body}>
              <textarea
                className={classes.editor__textarea}
                onChange={textareaHandler}
                value={markup}
                id="editor"
              />
            </div>
          </div>
          <div className={classes.editor__preview}>
            <div className={classes.editor__header}>
              <span className={classes.editor__previewTitle}>Предпросмотр</span>
            </div>
            <div className={classes.editor__body}>
              <div className={classes.editor__previewContent}>
                <SimpleBar style={{ height: '100%', marginBottom: 0 }}>
                  <div
                    dangerouslySetInnerHTML={{ __html: getMarkdown(markup) }}
                  />
                </SimpleBar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;

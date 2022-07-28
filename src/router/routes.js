import React from 'react'
import Home from '../pages/home/Home'
import Editor from '../pages/editor/Editor'
import Error from '../pages/error/Error'

export const urls = {
  home: '/markdown-editor',
  editor: '/markdown-editor/editor',
  error: '*'
}

export const routes = [
  {path: urls.home, element: <Home/>},
  {path: urls.editor, element: <Editor/>},
  {path: urls.error, element: <Error/>},
]

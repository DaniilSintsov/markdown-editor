import React from 'react'
import Home from '../pages/home/Home'
import Editor from '../pages/editor/Editor'
import Error from '../pages/error/Error'

export const routes = [
  {path: 'https://daniilsintsov.github.io/markdown-editor/', element: <Home/>},
  {path: 'https://daniilsintsov.github.io/markdown-editor/editor/', element: <Editor/>},
  {path: '*', element: <Error/>},
]

import React from 'react'
import Home from '../pages/home/Home'
import Editor from '../pages/editor/Editor'
import Error from '../pages/error/Error'

export const routes = [
  {path: '/', element: <Home/>},
  {path: '/editor', element: <Editor/>},
  {path: '*', element: <Error/>},
]

import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/ui/navbar/Navbar'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {onEditorPageAction} from './redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('isEditorPage') && !localStorage.getItem('isHomePage')) {
      dispatch(onEditorPageAction())
    }
  }, [dispatch])

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar/>
      <main>
        <AppRouter/>
      </main>
    </BrowserRouter>
  )
}

export default App

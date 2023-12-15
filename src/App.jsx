
import style from './style.module.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Login, SignUp } from './components'






function App() {
  return (
    <div className={style.container}>
      <Link to={'/sign-in'}>Login Page</Link>
      <Link to={'/sign-up'}>Registration Page</Link>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<Login />} />
      </Routes>
    </div>    
  );
}

export default App;


import style from './style.module.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Login, SignUp } from './components'






function App() {
  return (
    <div className={style.container}>
      <Login />
      <div className={style.signupBox}>
        <span>Don’t have an account?</span>
        <a className={style.signupLink} href='/sign-up'> Sign Up</a>
      </div>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

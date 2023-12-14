
import style from './style.module.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Login, SignUp } from './components'






function App() {
  return (
    <div className={style.container}>
      <Login />
      <div className={style.signupBox}>
        <span>Don’t have an account?</span>
        <Link className={style.signupLink} to={'/sign-up'}> Sign Up</Link>
      </div>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

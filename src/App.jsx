
import style from './style.module.scss'
import { Route, Routes, Link } from 'react-router-dom'
import { Login, SignUp } from './components'






function App() {
  return (
    <div className={style.container}>
      
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

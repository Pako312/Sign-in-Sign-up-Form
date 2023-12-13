import React from 'react'
import style from './style.module.scss'
import Logo from '../assets/img/Logo3.png'
import google from '../assets/img/google4.svg'
import InputsAntd from './inputsAntd'


export const SignUp = () => {
  return (
    <div>
      <div className={style.iconBox}>
        <img src={Logo} alt='logo'></img>
        <h2>Create an Account</h2>
        <p>Sign up now to get started with an account.</p>
      </div>
      <div className={style.btnBox}>
        <a className={style.googleBox} href="https://accounts.google.com/signin">
          <button className={style.googleBtn}>
            <img src={google} />
            Sign up with Google
          </button>
        </a>
        <div className={style.lineBox}>
          <div className={style.lineFirst}></div>
          <span className={style.orPart}>OR</span>
          <div className={style.lineSec}></div>
        </div>
        <div className={style.emailBox}>
          <form className={style.emailBox}>
            <p className={style.inpText}>Full Name<p className={style.star}>*</p></p>
            <input placeholder="Enter your name" className={style.inpEmail}
              id="username"
              type="text" />
          </form>
        </div>
        <div className={style.emailBox}>
          <form>
            <p className={style.inpText}>Email Address<p className={style.star}>*</p></p>
            <input placeholder="Enter your email" className={style.inpEmail}
              id="username"
              type="email">

            </input>
            {/* <img className={style.eyeImg} src={eye}></img> */}
          </form>
        </div>
        <InputsAntd />
        <div className={style.rememberBox}>
          <form className={style.formRemBox}>
            <input class="checkbox" id="checkbox-with-div" type="checkbox" />
            <label className={style.labelRemBox} for="checkbox-with-div">
              I have read and agree to the <a href="#">Terms of Service</a>
            </label>
          </form>

        </div>
        <a className={style.loginBox} href="https://accounts.google.com/signin">
          <button className={style.loginBtn}>
            Get Started
          </button>
        </a>
        <div className={style.signupBox}>
          <span>Already have an account?</span>
          <a className={style.signupLink} href='/log-in'>Log in</a>
        </div>


      </div>



    </div>
  )
}

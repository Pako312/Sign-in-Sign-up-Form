import React from 'react'
import style from './style.module.scss'
import Logo from '../assets/img/Logo3.png'
import google from '../assets/img/google4.svg'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';




export const SignUp = () => {
  const schema = yup.object().shape({
    Name: yup.string().required("The field must be filled"),
    Email: yup.string().email().required('The field must be filled'),
    Password: yup.string().min(5).max(12).required('Your password must be at least 5 symbols'),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords don't match")
      .required(),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema),
    mode: "onBlur"
  })
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

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
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className={style.emailBox}>

            <p className={style.inpText}>Full Name<p className={style.star}>*</p></p>
            <input placeholder="Enter your name" className={`${style.inpEmail} ${errors.Name ? style.red : ''}`}
              id="username"
              type="text"
              {...register("Name")}
            />
            <div className={style.err}>{errors?.Name && <p>{errors?.Name?.message || 'Error!'}</p>} </div>
          </div>
          <div className={style.emailBox}>
            <p className={style.inpText}>Email Address<p className={style.star}>*</p></p>
            <input placeholder="Enter your email" className={`${style.inpEmail} ${errors.Email ? style.red : ''}`}
              id="username"
              type="email"
              {...register("Email")}
            >
            </input>
            <div className={style.err}>{errors?.Email && <p>{errors?.Email?.message || 'Error!'}</p>} </div>
          </div>
          <div className={style.emailBox}>
            <p className={style.inpText}>Password<p className={style.star}>*</p></p>
            <input placeholder="Enter your password" className={`${style.inpEmail} ${errors.Password ? style.red : ''}`}
              id="username"
              type="password"
              {...register("Password")}
            >
            </input>
            <div className={style.err}>{errors?.Password && <p>{errors?.Password?.message || 'Error!'}</p>}</div>
          </div>
          <div className={style.emailBox}>
            <p className={style.inpText}>Confirm Password<p className={style.star}>*</p></p>
            <input placeholder="Enter your password" className={`${style.inpEmail} ${errors.ConfirmPassword ? style.red : ''}`}
              id="username"
              type="password"
              {...register("ConfirmPassword")}
            >
            </input >
            <div className={style.err}>{errors?.ConfirmPassword && <p>{errors?.ConfirmPassword?.message || 'Error!'}</p>}</div>
          </div>
          <div className={style.rememberBox}>
            <div className={style.formRemBox}>
              <input class="checkbox" id="checkbox-with-div" type="checkbox"
              />
              <label className={style.labelRemBox} for="checkbox-with-div">
                I have read and agree to the
                <a class={style.alink} href="#">Terms of Service</a>
              </label>
            </div>

          </div>
          <div className={style.loginBox}>
            <button type='submit' disabled={!isValid} className={style.loginBtn}>
              Get Started
            </button>
          </div>
        </form>

        <div className={style.signupBox}>
          <span>Already have an account?</span>
          <Link className={style.signupLink} to='/sign-in'>Log in</Link>
        </div>
      </div>
    </div >
  )
}
import React from 'react'
import Logo from '../assets/img/Logo3.png'
import google from '../assets/img/google4.svg'
import style from './style.module.scss'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const Login = () => {
    const schema = yup.object().shape({
        Email: yup.string().email().required("The field must be filled"),
        Password: yup.string().min(5).max(12).required('Your password must be at least 5 symbols')
    })
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
       
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
      
    };
    return (
        <div>
            <div className={style.iconBox}>
                <img src={Logo} alt='logo'></img>
                <h2>Log in to your Account</h2>
                <p>Welcome back, please enter your details.</p>
            </div>
            <div className={style.btnBox}>
                <a className={style.googleBox} href="https://accounts.google.com/signin">
                    <button className={style.googleBtn}>
                        <img src={google} />
                        Continue with Google
                    </button>
                </a>
                <div className={style.lineBox}>
                    <div className={style.lineFirst}></div>
                    <span className={style.orPart}>OR</span>
                    <div className={style.lineSec}></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.emailBox}>
                        <p className={style.inpText}>Email Address</p>
                        <input placeholder="Enter your email" className={`${style.inpEmail} ${errors.Email ? style.red : ''}`}
                            id="username"
                            type="email"
                            {...register("Email")}
                        />
                        <div className={style.err}>{errors?.Email && <p>{errors?.Email?.message || 'Error!'}</p>}</div>
                    </div>
                    <div className={style.emailBox}>
                        <p className={style.inpText}>Password</p>
                        <input placeholder="Enter your password" className={`${style.inpEmail} ${errors.Password ? style.red : ''}`}
                            id="username"
                            type="password"
                            {...register("Password")}
                        >
                        </input>
                        <div className={style.err}>{errors?.Password && <p>{errors?.Password?.message || 'Error!'}</p>}</div>
                    </div>
                    <div className={style.rememberBox}>
                        <div className={style.formRemBox}>
                            <input class="checkbox" id="checkbox-with-div" type="checkbox" />
                            <label className={style.labelRemBox} for="checkbox-with-div">
                                Remember me
                            </label>
                        </div>
                        <span className={style.spanRemBox}>Forgot password?</span>
                    </div>
                    <div className={style.loginBox}>
                        <button type='submit' disabled={!isValid} className={style.loginBtn}>
                            Log in
                        </button>
                    </div>
                </form>
                <div className={style.signupBox}>
                    <span>Don’t have an account?</span>
                    <Link className={style.signupLink} to={'/sign-up'}> Sign Up</Link>
                </div>
            </div>
        </div >
    )
}

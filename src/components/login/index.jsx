import React from 'react'
import Logo from '../assets/img/Logo3.png'
import google from '../assets/img/google4.svg'
import style from './style.module.scss'
import { useForm } from 'react-hook-form'
import Password from 'antd/es/input/Password'

export const Login = () => {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset

    } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        reset();
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
                <div className={style.emailBox}>
                    <form onSubmit={handleSubmit(onSubmit)} className={style.emailBox}>
                        <p className={style.inpText}>Email Address</p>
                        <input placeholder="Enter your email" className={style.inpEmail}
                            id="username"
                            type="text"
                            required
                            {...register("email", {
                                required: "You must fill your email",
                                minLength: {
                                    value: 5,
                                    message: "Minimum 5 characters"
                                }


                            })}
                        />
                    </form>
                    <div className={style.err}>{errors?.firstname && <p>{errors?.firstname?.message || 'Error!'}</p>}</div>
                </div>
                <div className={style.emailBox}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className={style.inpText}>Password</p>
                        <input placeholder="Enter your password" className={style.inpEmail}
                            id="username"
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: "Your password must be minimum 8 characters"
                                }
                            })}
                        >


                        </input>
                    </form>
                    <div className={style.err}>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
                </div>
                <div className={style.rememberBox}>
                    <form className={style.formRemBox}>
                        <input class="checkbox" id="checkbox-with-div" type="checkbox" />
                        <label className={style.labelRemBox} for="checkbox-with-div">
                            Remember me
                        </label>
                    </form>
                    <span className={style.spanRemBox}>Forgot password?</span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={style.loginBox}>
                    <button type='submit' disabled={!isValid} className={style.loginBtn}>
                        Log in
                    </button></form>
            </div>


        </div>
    )
}

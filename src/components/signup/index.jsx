import React from 'react'
import style from './style.module.scss'
import Logo from '../assets/img/Logo3.png'
import google from '../assets/img/google4.svg'
import InputsAntd from '../inputsAntd/index'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'



export const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
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
            <div className={style.emailBox}>
              <p className={style.inpText}>Full Name<p className={style.star}>*</p></p>
              <input placeholder="Enter your name" className={style.inpEmail}
                id="username"
                type="text"
                {...register("fullname", {
                  required: "This field is mandatory",
                  minLength: {
                    value: 5,
                    message: "Minimum 5 characters"
                  }
                })}
              />
            </div>

            <div className={style.err}>{errors?.fullname && <p>{errors?.fullname?.message || 'Error!'}</p>} </div>
          </div>
          <div className={style.emailBox}>
            <p className={style.inpText}>Email Address<p className={style.star}>*</p></p>
            <input placeholder="Enter your email" className={style.inpEmail}
              id="username"
              type="email"
              {...register("email", {
                required: "You must write your email",
                minLength: {
                  value: 8,
                  message: "Minimum 5 characters"
                }
              })}
            >
            </input>
            <div className={style.err}>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>} </div>
          </div>
          <InputsAntd />
          <div className={style.rememberBox}>
            <div className={style.formRemBox}>
              <input class="checkbox" id="checkbox-with-div" type="checkbox" />
              <label className={style.labelRemBox} for="checkbox-with-div">
                I have read and agree to the 
                <a class={style.alink} href="#">Terms of Service</a>
              </label>
            </div>

          </div>
          <div className={style.loginBox}>
            <button type='submit' className={style.loginBtn}>
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




// import React from 'react'
// import style from './style.module.scss'
// import Logo from '../assets/img/Logo3.png'
// import google from '../assets/img/google4.svg'
// import InputsAntd from '../inputsAntd/index'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'



// export const SignUp = () => {
//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//   } = useForm()
//   const onSubmit = (data) => {
//     console.log(data);
//     alert(JSON.stringify(data));
//   }

//   const sub = (ev) => {
//     console.log(ev)
//   }

//   return (
//     <div>
//       <div className={style.iconBox}>
//         <img src={Logo} alt='logo'></img>
//         <h2>Create an Account</h2>
//         <p>Sign up now to get started with an account.</p>
//       </div>
//       <div className={style.btnBox}>
//         <a className={style.googleBox} href="https://accounts.google.com/signin">
//           <button className={style.googleBtn}>
//             <img src={google} />
//             Sign up with Google
//           </button>
//         </a>
//         <div className={style.lineBox}>
//           <div className={style.lineFirst}></div>
//           <span className={style.orPart}>OR</span>
//           <div className={style.lineSec}></div>
//         </div>
//         <div className={style.emailBox}>
//           <form onSubmit={handleSubmit(onSubmit)} className={style.emailBox}>
//             <p className={style.inpText}>Full Name<p className={style.star}>*</p></p>
//             <input placeholder="Enter your name" className={style.inpEmail}
//               id="username"
//               type="text"
//               {...register("fullname", {
//                 required: "This field is mandatory",
//                 minLength: {
//                   value: 5,
//                   message: "Minimum 5 characters"
//                 }
//               })}
//             />
//             <div className={style.emailBox}>
//               <p className={style.inpText}>Email Address<p className={style.star}>*</p></p>
//               <input placeholder="Enter your email" className={style.inpEmail}
//                 id="username"
//                 type="email"
//                 {...register("email", {
//                   required: "You must write your email",
//                   minLength: {
//                     value: 8,
//                     message: "Minimum 5 characters"
//                   }
//                 })}
//               >
//               </input>
//               <div className={style.err}>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>} </div>
//             </div>
//             <InputsAntd handleSubmit={handleSubmit} onSubmit={onSubmit} />

//             <div className={style.rememberBox}>
//               <input class="checkbox" id="checkbox-with-div" type="checkbox" />
//               <label className={style.labelRemBox} for="checkbox-with-div">
//                 I have read and agree to the <a href="#">Terms of Service</a>
//               </label>
//             </div>
//             <button type='submit' className={style.loginBtn}>
//               Get Started
//             </button>
//           </form>
//           <div className={style.err}>{errors?.fullname && <p>{errors?.fullname?.message || 'Error!'}</p>} </div>
//         </div>
//         <div className={style.signupBox}>
//           <span>Already have an account?</span>
//           <Link className={style.signupLink} to='/sign-in'>Log in</Link>
//         </div>
//       </div>
//     </div>
//   )
// }

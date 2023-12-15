import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import style from './style.module.scss'
import { useForm } from 'react-hook-form'

// использовать forum text content и пропсы тогда будет работать если разделено в компоненты 
// Обернуть в один общий форм
// форм бордер менять через класснеймы возможно clsx
const InputsAntd = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur'
    })
    const onSubmit = (data) => {
        console.log();
        alert(JSON.stringify(data))
        reset()
    }
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
       
            <Space direction="vertical">
                <p className={style.inpText}>
                    Password
                    <span className={style.inpStar}>*</span>
                </p>
                {/* <form onSubmit={handleSubmit(onSubmit)} > */}
                <Input.Password placeholder="Input your password"
                    className={style.antInp}
                    id="password1"
                    type="password"
                    {...register("password", {
                        required: "This field is mandatory",
                        minLength:{
                            value: 8,
                            message: "Minimum 8 characters"
                        }
                    })}
                />
                {/* </form> */}
                <div className={style.err}>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>} </div>

                <p className={style.inpText}>
                    Confirm Password
                    <span className={style.inpStar}>*</span>
                </p>
                <Input.Password
                    className={style.antInp}
                    id="password2"
                    type="password"
                    placeholder="Confirm password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                />
            </Space>
       

    );
};
export default InputsAntd;
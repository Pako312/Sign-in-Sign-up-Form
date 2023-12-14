import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import style from './style.module.scss'
import { useForm } from 'react-hook-form'
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
                <form onSubmit={handleSubmit(onSubmit)} >
                <Input.Password placeholder="Input your password"
                    className={style.antInp}
                    {...register("password", {
                        required: "This field is mandatory",
                        minLength:{
                            value: 8,
                            message: "Minimum 8 characters"
                        }
                    })}
                />
                </form>
                <div className={style.err}>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>} </div>

                <p className={style.inpText}>
                    Confirm Password
                    <span className={style.inpStar}>*</span>
                </p>
                <Input.Password
                    className={style.antInp}
                    placeholder="Confirm password"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}

                />
            </Space>
       

    );
};
export default InputsAntd;
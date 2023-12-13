import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import style from './style.module.scss'
const InputsAntd = () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    return (
        <Space direction="vertical">
            <p className={style.inpText}>
                Password
                <span className={style.inpStar}>*</span>
            </p>
            <Input.Password placeholder="Input your password"
                className={style.antInp}
            />
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
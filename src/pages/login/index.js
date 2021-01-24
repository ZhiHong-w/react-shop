/**
 * 登陆界面
 */
import React, { memo,useRef,useEffect } from 'react';
import { useSelector,shallowEqual,useDispatch} from 'react-redux';

//登录form组件
import { Form, Input, Button,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

//css样式
import { LoginWrapper } from './style';
//引入图片
import LogoImg from '../../assets/image/reactlogo.png';
//redux action
import { ValidUserDispatch } from './store/actionCreators';

export default memo(function Login(props) {
    
    const { validUser } = useSelector(state => ({
        validUser: state.login.validUser
    }),shallowEqual);

    const dispatch = useDispatch();

    const formRef = useRef();
    //表单字段要求
    const usernameRules = [
        { required: true, message: '请输入用户名!',validateTrigger: 'onBlur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符',validateTrigger: 'onBlur'}
    ];
    const passwordRules = [
        { required: true, message: '请输入密码!'},
    ]
    
    //重置表单
    const resetForm = () => {
        formRef.current.resetFields();
    }
    //验证成功提交表单
    const onFinsh = values => {
       // console.log(values);
        const userInfo = { username: values.username, password: values.password}
        dispatch(ValidUserDispatch(userInfo));
    }
    
    //登陆成功跳转到主页面
    useEffect(()=>{
       // console.log(validUser.meta.status);
       //console.log(window.sessionStorage.length,props.history);
       //*********window.sessionStorage.length非常重要
        if(validUser.meta && validUser.meta.status && validUser.meta.status === 200 && window.sessionStorage.length === 0 ) {

            props.history.push('/home');
            window.sessionStorage.setItem('token',validUser.data.token);
        } 
        else if(validUser.meta && validUser.meta.msg && window.sessionStorage.length === 0 ){
            message.error({
                content: validUser.meta.msg,
                key: 'login'
            })
        } else {
            window.sessionStorage.clear();
        }
    },[validUser,dispatch,props.history])

    return (
        <LoginWrapper>
            <div className="login-box">
                <div className="avatar">
                    <img src={LogoImg} alt="" className="logo"></img>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }} 
                    size="large" 
                    ref={formRef} onFinish={onFinsh}>
                    <Form.Item
                        name="username"
                        rules={usernameRules}>
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="用户名" 
                            type="text"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={passwordRules}>
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <Button type="info" htmlType="button" className="reset-form-button" onClick={resetForm}>
                            重置
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </LoginWrapper>
    )
})

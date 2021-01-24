/**
 * 添加用户弹窗
 */
import React, { memo,useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Modal,Form,Input,message } from 'antd';

import { changeAddUserModalVisableAction,
    changeUsersDispatch 
} from '../../store/actionCreators';

//验证规则
import { checkEmail,checkMobile} from '../../../../utils/regexp';

//添加用户请求
import { addUser } from '../../../../services/user';

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
};

export default memo(function AdrdUserModal() {

    const { queryInfo,addUserModalVisable } = useSelector(state => ({
        queryInfo: state.user.queryInfo,
        addUserModalVisable: state.user.addUserModalVisable
    }), shallowEqual);

    const dispatch = useDispatch();
    
    const addFormRef = useRef();
    
    //验证表单
    const addUserFormRules = {
        username: [
          { required: true, message: '请输入用户名',validateTrigger: 'onBlur'},
          { min: 3,max: 10,message: '用户名的长度在3~10个字符之间',validateTrigger: 'onBlur'}
        ],
        password: [
          { required: true, message: '请输入密码',validateTrigger: 'onBlur' },
          { min: 6,max: 15,message: '密码的长度在6~15个字符之间',validateTrigger: 'onBlur'}
        ],
        email: [
          { required: true, message: '请输入邮箱',validateTrigger: 'onBlur' },
          { validator: checkEmail,validateTrigger: 'onBlur' }
        ],
        mobile: [
          { required: true, message: '请输入手机号',validateTrigger: 'onBlur' },
          { validator: checkMobile }
        ]
      };

    //添加用户点击确定按钮
    const handleOk = async () => {
        const validate = addFormRef.current.getFieldsError();
        let flag=0;
        for(let i=0; i<validate.length; i++){
            if(validate[i].error){
                flag=1;
                break;
            }
        }
    //    console.log(flag);
    //    console.log(validate);
        if(flag){
            message.error({
                content: '信息填写不正确',
                key: 'validate'
            })
        }else {
            const userData = addFormRef.current.getFieldValue();
            //添加用户请求
            const {data: res} = await addUser(userData);
            if(res && res.meta && res.meta.status !== 201){
                message.error({
                    content: res.meta.msg,
                    key: 'validate'
                })
            }else {
                message.success({
                    content: "添加用户信息成功",
                    key: 'validate'
                })
                dispatch(changeUsersDispatch(queryInfo));
                addFormRef.current.resetFields();
                dispatch(changeAddUserModalVisableAction(false));
            }
        }
    };
    //添加用户取消
    const handleCancel = () => {
        addFormRef.current.resetFields();
        dispatch(changeAddUserModalVisableAction(false));
        //console.log(addFormRef.current);
    };

    return (
        <>
            <Modal title="添加用户"
                visible={addUserModalVisable}
                onOk={handleOk}
                onCancel={handleCancel}
                cancelText="取消"
                okText="确定">
              <Form size="large" {...layout} ref={addFormRef}>
                  <Form.Item label="用户名"
                             name="username"
                             required
                             rules={addUserFormRules.username}>
                      <Input type="text"></Input>
                  </Form.Item>
                  <Form.Item label="密码"
                             name="password" 
                             required 
                             rules={addUserFormRules.password}>
                      <Input type="password"></Input>
                  </Form.Item>
                  <Form.Item label="邮箱"
                             name="email" 
                             required 
                             rules={addUserFormRules.email}>
                      <Input type="text"></Input>
                  </Form.Item>
                  <Form.Item label="手机"
                             name="mobile" 
                             required 
                             rules={addUserFormRules.mobile}>
                      <Input type="text"></Input>
                  </Form.Item>
              </Form>
            </Modal>
        </>
    )
})

import React, { memo, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Button, Modal, Form, Input, message, Tooltip,Select } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    WarningOutlined
} from '@ant-design/icons';

import { OperationWrapper } from './style';

//验证规则
import { checkEmail, checkMobile } from '../../../../utils/regexp';
//编辑发送请求
import { editUser, deleteUser,changeRoleName } from '../../../../services/user';

import {
    changeUsersDispatch,
    getRoleListDispatch
} from '../../store/actionCreators';

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 20 },
};
const { Option } = Select;

export default memo(function Operation(props) {

    const { id, username, mobile, email,role_name } = props.record;

    const [editVisable, setEditVisable] = useState(false);
    const [deleteVisable, setDeleteVisable] = useState(false);
    const [settingVisable, setSettingVisable] = useState(false);
    const [ roleId, setRoleId ] = useState(undefined);

    const editFormRef = useRef();
    const settingRef = useRef();

    const { queryInfo, roleList } = useSelector(state => ({
        queryInfo: state.user.queryInfo,
        roleList: state.user.roleList
    }), shallowEqual);
    const dispatch = useDispatch();

    //编辑验证表单
    const editUserFormRules = {
        email: [
            { required: true, message: '请输入邮箱', validateTrigger: 'onBlur' },
            { validator: checkEmail, validateTrigger: 'onBlur' }
        ],
        mobile: [
            { required: true, message: '请输入手机号', validateTrigger: 'onBlur' },
            { validator: checkMobile }
        ]
    };

    //编辑用户
    const changeEditVisable = () => {
        setEditVisable(true);
    }
    const edithandleOk = async () => {
        const validate = editFormRef.current.getFieldsError();
        let flag = 0;
        for (let i = 0; i < validate.length; i++) {
            if (validate[i].error) {
                flag = 1;
                break;
            }
        }
        if (flag) {
            message.error({
                content: '信息填写不正确',
                key: 'validate'
            })
        } else {
            const userData = editFormRef.current.getFieldValue();
            const editForm = {
                id: id,
                mobile: userData.mobile,
                email: userData.email
            };
            //发送请求
            const { data: res } = await editUser(editForm);
            if (res && res.meta && res.meta.status !== 200) {
                message.error({
                    content: "更新用户信息失败",
                    key: 'validate'
                })
            } else {
                message.success({
                    content: "更新用户信息成功",
                    key: 'validate'
                })
                dispatch(changeUsersDispatch(queryInfo));
                editFormRef.current.resetFields();
                setEditVisable(false);
            }
        }
    }
    const edithandleCancel = () => {
        console.log(props.record);
        editFormRef.current.resetFields();
        setEditVisable(false);
    }

    //删除用户
    const changeDeleteVisable = () => {
        setDeleteVisable(true);
    }
    const deletehandleOk = async () => {
        //发送请求
        const { data: res } = await deleteUser(id);
        if (res && res.meta && res.meta.status !== 200) {
            message.error({
                content: "删除用户信息失败",
                key: 'validate'
            })
        } else {
            message.success({
                content: "删除用户信息成功",
                key: 'validate'
            })
            dispatch(changeUsersDispatch(queryInfo));
            setDeleteVisable(false);
        }
    }
    const deletehandleCancel = () => {
        setDeleteVisable(false);
    }

    //修改角色
    const changeSelected = (value) => {
        setRoleId(value);
    }
    const changeSettingVisable = () => {
        dispatch(getRoleListDispatch())
        setSettingVisable(true);
    }
    const settinghandleOk = async () => {
        console.log(id,roleId);
        const {data: res} = await changeRoleName(id,roleId);
        //console.log(res);
        if(res && res.meta && res.meta.status !== 200){
            message.error({
                content: '更新角色失败',
                key: 'role'
            })
        } else {
            message.success({
                content: '更新角色成功',
                key: 'role'
            })
            dispatch(changeUsersDispatch(queryInfo));
            setSettingVisable(false);
        }
    }
    const settinghandleCancel = () => {
        //console.log(roleId);
        setSettingVisable(false);
    }

    return (
        <OperationWrapper>
            {/* 操作按钮 */}
            <div className="btn">
                <Button icon={<EditOutlined />}
                    type="primary" onClick={changeEditVisable}></Button>
                <Button icon={<DeleteOutlined />}
                    type="primary"
                    danger onClick={changeDeleteVisable}></Button>
                <Tooltip title="分配角色">
                    <Button icon={<SettingOutlined />}
                        className="setting" onClick={changeSettingVisable}></Button>
                </Tooltip>
            </div>
            {/* 修改用户 */}
            <Modal title="修改用户"
                visible={editVisable}
                onOk={edithandleOk}
                onCancel={edithandleCancel}
                cancelText="取消"
                okText="确定">
                <Form size="large" {...layout} ref={editFormRef}>
                    <Form.Item label="用户名"
                        name="username"
                        initialValue={username}>
                        <Input type="text" disabled></Input>
                    </Form.Item>
                    <Form.Item label="邮箱"
                        name="email"
                        required
                        rules={editUserFormRules.email}
                        initialValue={email}>
                        <Input type="text"></Input>
                    </Form.Item>
                    <Form.Item label="手机"
                        name="mobile"
                        required
                        rules={editUserFormRules.mobile}
                        initialValue={mobile}>
                        <Input type="text"></Input>
                    </Form.Item>
                </Form>
            </Modal>
            {/* 删除用户 */}
            <Modal title="提示"
                visible={deleteVisable}
                onOk={deletehandleOk}
                onCancel={deletehandleCancel}
                cancelText="取消"
                okText="确定">
                <span><WarningOutlined /></span>
                <span className="warning">此操作将永久删除该用户, 是否继续?</span>
            </Modal>
            {/* 分配角色 */}
            <Modal title="分配新角色"
                visible={settingVisable}
                onOk={settinghandleOk}
                onCancel={settinghandleCancel}
                cancelText="取消"
                okText="确定">
                    <p>当前的用户：{username}</p>
                    <p>当前的角色：{role_name}</p>
                    <div>分配的新角色：
                        <Select placeholder="请选择" 
                               style={{width: 200}} ref={settingRef} onChange={changeSelected}>
                            {
                                roleList.map(item =>{
                                    return <Option key={item.id} value={item.id}>{item.roleName}</Option>
                                })
                            }
                        </Select>
                    </div>
            </Modal>
        </OperationWrapper>
    )
})

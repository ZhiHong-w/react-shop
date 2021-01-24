/**
 * 用户管理界面发送请求
 */

import request from './request';

//获取用户列表
export function getUserList(params){
    return request({
        url:'/users',
        method: 'get',
        params: params
    })
}
//改变表格状态
export function changeMgState(id,mg_state){
    return request({
        url: `/users/${id}/state/${mg_state}`,
        method: 'put'
    })
}
//添加用户
export function addUser(addForm){
    return request({
        url: '/users',
        method: 'post',
        data: addForm
    })
}
//修改用户
export function editUser(editForm){
    return request({
        url: `/users/${editForm.id}`,
        method: 'put',
        data: {
            email: editForm.email,
            mobile: editForm.mobile
        }
    })
}
//删除用户
export function deleteUser(id){
    return request({
        url: `/users/${id}`,
        method: 'delete'
    })
}

//获取角色列表
export function getRoleList(){
    return request({
        url: '/roles',
        method: 'get'
    })
}

//分配角色
export function changeRoleName(id,rid){
    return request({
        url: `/users/${id}/role`,
        method: 'put',
        data: {
            rid: rid
        }
    })
}
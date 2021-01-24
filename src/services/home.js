/**
 * 获取home菜单名
 */
import request from './request';

export function getMenuData(){
    return request({
        url: '/menus',
        method: 'get'
    })
}
import React from 'react';
import { Redirect } from 'react-router-dom';

//路由导航守卫
import beforeEach from './beforeEach';

//组件，后面使用路由懒加载

import Login from '../pages/login';
import Home from '../pages/home';
import Welcome from '../pages/welcome';
import Users from '../pages/users';
import Roles from '../pages/roles';
import Rights from '../pages/rights';
import Goods from '../pages/goods';
import Params from '../pages/params';
import Categories from '../pages/categories';
import Orders from '../pages/orders';
import Reports from '../pages/reports';
import NotFound from '../pages/404NotFound';

// const Login = React.lazy(_ => import('../pages/login'));
// const Home = React.lazy(_ => import('../pages/home'));
// const Welcome = React.lazy(_ => import('../pages/welcome'));
// const Users = React.lazy(_ => import('../pages/users'));
// const Roles = React.lazy(_ => import('../pages/roles'));
// const Rights = React.lazy(_ => import('../pages/rights'));
// const Goods = React.lazy(_ => import('../pages/goods'));
// const Params = React.lazy(_ => import('../pages/params'));
// const Categories = React.lazy(_ => import('../pages/categories'));
// const Orders = React.lazy(_ => import('../pages/orders'));
// const Reports = React.lazy(_ => import('../pages/reports'));
// const NotFound = React.lazy(_ => import('../pages/404NotFound'));


const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/login' />
        )
    },
    {
        path: '/login',
        exact: true,
        component: Login
    },
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home',
                exact: true,
                render: () => beforeEach(<Redirect to="/home/welcome" />, <Redirect to='/login' />)
            },
            {
                path: '/home/welcome',
                exact: true,
                // component: Welcome,
                render: () => beforeEach(<Welcome />, <Redirect to='/login' />)
            },
            {
                path: '/home/users',
                exact: true,
                render: () => beforeEach(<Users />, <Redirect to='/login' />)
            },
            {
                path: '/home/roles',
                exact: true,
                render: () => beforeEach(<Roles />, <Redirect to='/login' />)
            },
            {
                path: '/home/rights',
                exact: true,
                render: () => beforeEach(<Rights />, <Redirect to='/login' />)
            },
            {
                path: '/home/goods',
                exact: true,
                render: () => beforeEach(<Goods />, <Redirect to='/login' />)
            },
            {
                path: '/home/params',
                exact: true,
                render: () => beforeEach(<Params />, <Redirect to='/login' />)
            },
            {
                path: '/home/categories',
                exact: true,
                render: () => beforeEach(<Categories />, <Redirect to='/login' />)
            },
            {
                path: '/home/orders',
                exact: true,
                render: () => beforeEach(<Orders />, <Redirect to='/login' />)
            },
            {
                path: '/home/reports',
                exact: true,
                render: () => beforeEach(<Reports />, <Redirect to='/login' />)
            },
            {
                path: '*',
                render: () => <Redirect to="/404" />
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
]

export default routes;
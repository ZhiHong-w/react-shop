import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import { BreadWrapper } from './style';

export default memo(function Breadcrus(props) {
    return (
        <BreadWrapper>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>
                    <NavLink to="/home">首页</NavLink>
                </Breadcrumb.Item>
                {
                    props.breadData.map((item, index) => {
                        return (
                            <Breadcrumb.Item key={item}>{ item }</Breadcrumb.Item>
                        )
                    })
                }
            </Breadcrumb>
        </BreadWrapper>
    )
})

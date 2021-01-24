import React, { memo } from 'react';
import { Tag } from 'antd';

export default memo(function IsPay(props) {
    const {order_pay} = props.record;
    const isPay = (pay) => {
        if(pay === '0'){
            return <Tag color="red">未付款</Tag>
        } else {
            return <Tag color="blue">已付款</Tag>
        }
    }
    return (
        <div>
            {
                isPay(order_pay)
            }
        </div>
    )
})

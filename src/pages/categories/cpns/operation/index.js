import React, { memo } from 'react';
import { Button } from 'antd'

import { CateOperationWrapper } from './style';
import {
    EditOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

export default memo(function Operation() {

    const changeEditVisable = ()=>{

    }
    const changeDeleteVisable = ()=>{

    }
    return (
        <CateOperationWrapper>
             {/* 操作按钮 */}
             <div className="btn">
                <Button icon={<EditOutlined />}
                    type="primary" onClick={changeEditVisable}>编辑</Button>
                <Button icon={<DeleteOutlined />}
                    type="primary"
                    danger onClick={changeDeleteVisable}>删除</Button>
            </div>
        </CateOperationWrapper>
    )
})

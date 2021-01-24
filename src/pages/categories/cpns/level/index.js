import React, { memo } from 'react';
import { Tag } from 'antd';

export default memo(function Level(props) {
    const { cat_level } = props.record;

    const judgeLevel = (level) => {
        if(level === 0){
            return <Tag color="blue">一级</Tag>
        } else if(level === 1){
            return <Tag color="green">二级</Tag>
        } else if(level === 2){
            return <Tag color="orange">三级</Tag>
        }
    }

    return (
        <div>
           {
               judgeLevel(cat_level)
           } 
        </div>
    )
})

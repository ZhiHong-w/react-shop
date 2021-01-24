import React, { PureComponent } from 'react';
import { Tag } from 'antd';

export default class RightsLevel extends PureComponent {
    constructor(props){
        super(props);
        this.state = {};
    }

    levelTag(level){
        if(level === '0'){
            return <Tag color="blue">一级</Tag>
        } else if(level === '1'){
            return <Tag color="green">二级</Tag>
        } else if(level === '2'){
            return <Tag color="orange">三级</Tag>
        }
    }

    render() {
        const level = this.props.record.level;
        return (
            <>
                {
                    this.levelTag(level)
                }
            </>
        )
    }
}

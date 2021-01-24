import React, { memo } from 'react';
import { CheckCircleTwoTone,EuroCircleTwoTone } from '@ant-design/icons';

export default memo(function IsOk(props) {
    const { cat_deleted } = props.record;
    return (
        <div>
            {
                cat_deleted ? <EuroCircleTwoTone /> : <CheckCircleTwoTone twoToneColor="#52c41a" />
            }
        </div>
    )
})

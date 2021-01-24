import React, { memo } from 'react';

import { ParamsWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import { breadParams } from '../../common/bread-data';

export default memo(function Params() {
    return (
        <ParamsWrapper>
            <Breadcrus breadData={breadParams}></Breadcrus>
        </ParamsWrapper>
    )
})

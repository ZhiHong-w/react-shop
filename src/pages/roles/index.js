import React, { memo } from 'react';

import { RolesWrapper } from './style'

import Breadcrus from '../../components/breadcrumb';
import { breadRoles } from '../../common/bread-data';

export default memo(function Roles() {
    return (
        <RolesWrapper>
            <Breadcrus breadData={breadRoles}></Breadcrus>
        </RolesWrapper>
    )
})

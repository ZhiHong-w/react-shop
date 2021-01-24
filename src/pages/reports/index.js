import React, { memo } from 'react';
import { Card } from 'antd';

import { ReportsWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import { breadReports } from '../../common/bread-data';

import LineEcharts from './cpns/lineEcharts';
import RoundEcharts from './cpns/roundEcharts';

export default memo(function Reports() {
    return (
        <ReportsWrapper>
            <Breadcrus breadData={breadReports}></Breadcrus>
            <Card>
                <LineEcharts />
                <RoundEcharts />
            </Card>
        </ReportsWrapper>
    )
})

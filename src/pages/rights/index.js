import React, { memo,useEffect } from 'react';
import { useSelector,useDispatch,shallowEqual} from 'react-redux';
import { Card,Table } from 'antd';

import { RightsWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import { breadRights } from '../../common/bread-data';

import { getRightsListDispatch } from './store/actionCreators';
import { columns } from '../../common/right-data';

export default memo(function Rights() {
    
    const {rightsList} = useSelector(state => ({
        rightsList: state.rights.rightsList
    }),shallowEqual);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getRightsListDispatch());
    },[dispatch]);
    return (
        <RightsWrapper>
           <Breadcrus breadData={breadRights}></Breadcrus>
           <Card>
               <Table columns={columns} dataSource={rightsList} pagination={false} bordered scroll={{ y: 480 }}></Table>
           </Card>
        </RightsWrapper>
    )
})

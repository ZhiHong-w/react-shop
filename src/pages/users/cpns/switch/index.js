/**
 * 状态开关按钮
 */
import React, { memo,useState } from 'react';
import {Switch} from 'antd';
import { changeMgState } from '../../../../services/user';

export default memo(function SwitchState(props) {
    const {id,mg_state} = props.record;
    const [mgState,setMgState] = useState(mg_state);
     
    const changeCkecked = async (checked) =>{
       // mg_state = !mg_state;
       setMgState(checked);
       const {date:res} = await changeMgState(id,checked);
       if(res && res.meta && res.meta.status !== 200){
           setMgState(!checked);
       }
    }
    return (
        <>
           <Switch checked={mgState} onChange={changeCkecked}></Switch> 
        </>
    )
})

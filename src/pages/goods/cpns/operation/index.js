import React, { memo,useState } from 'react';
import {useDispatch,useSelector,shallowEqual} from 'react-redux';
import { Button,Modal,message} from 'antd'

import { GoodsOperationWrapper } from './style';
import {
    EditOutlined,
    DeleteOutlined,
    WarningOutlined
} from '@ant-design/icons';

import { deleteGoods } from '../../../../services/goods';
import { getGoodsDispatch } from '../../store/actionCreators';

export default memo(function Operation(props) {

    const {goods_id} = props.record;
    
    const [deleteVisable, setDeleteVisable] = useState(false);
    
    const { queryInfo } = useSelector(state => ({
        queryInfo: state.goods.queryInfo
    }),shallowEqual)
    const dispatch = useDispatch();

    const changeEditVisable = ()=>{

    }

    const changeDeleteVisable = ()=>{
        setDeleteVisable(true);
    }
    const deletehandleOk = async ()=>{
         //发送请求
         const { data: res } = await deleteGoods(goods_id);
         if (res && res.meta && res.meta.status !== 200) {
             message.error({
                 content: "删除商品信息失败",
                 key: 'validate'
             })
         } else {
             message.success({
                 content: "删除商品信息成功",
                 key: 'validate'
             })
             dispatch(getGoodsDispatch(queryInfo));
             setDeleteVisable(false);
         }
    }
    const deletehandleCancel = ()=>{
        setDeleteVisable(false);
    }
    return (
        <GoodsOperationWrapper>
            {/* 操作按钮 */}
            <div className="btn">
                <Button icon={<EditOutlined />}
                    type="primary" onClick={changeEditVisable}></Button>
                <Button icon={<DeleteOutlined />}
                    type="primary"
                    danger onClick={changeDeleteVisable}></Button>
            </div>
             {/* 删除用户 */}
             <Modal title="提示"
                visible={deleteVisable}
                onOk={deletehandleOk}
                onCancel={deletehandleCancel}
                cancelText="取消"
                okText="确定">
                <span><WarningOutlined /></span>
                <span className="warning">此操作将永久删除该商品, 是否继续?</span>
            </Modal>
        </GoodsOperationWrapper>
    )
})

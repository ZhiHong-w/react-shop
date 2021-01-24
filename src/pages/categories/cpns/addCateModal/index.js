import React, { memo,useRef, } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Modal, Form,Input,Cascader,message } from 'antd';

import { changeAddCateVisableAction,
    getCategoryTotalDispatch 
} from '../../store/actionCreators';
import { addCate } from '../../../../services/categories';

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
};

export default memo(function AddCateModal() {

    const addFormRef = useRef();
    const { addCateVisable, parentCateList,queryInfo } = useSelector(state => ({
        addCateVisable: state.categories.addCateVisable,
        parentCateList: state.categories.parentCateList,
        queryInfo: state.categories.queryInfo
    }),shallowEqual)

    const cateFormRules = {
        cateName: [
            { required: true, message: '请选择分类名称', validateTrigger: 'onBlur' },
        ]
    };

    const dispatch = useDispatch();

    const filedNames = {
        value: 'cat_id',
        label: 'cat_name',
        children: 'children'
    }

    const addhandleOk = async () => {
        const validate = addFormRef.current.getFieldsError();
        let flag = 0;
        for (let i = 0; i < validate.length; i++) {
            if (validate[i].error) {
                flag = 1;
                break;
            }
        }
        if (flag) {
            message.error({
                content: '信息填写不正确',
                key: 'validate'
            })
        } else {
            const addCateForm = {
                cat_name: '',
                cat_pid: 0,
                cat_level: 0
            }
            const cateData = addFormRef.current.getFieldValue();
            //console.log(cateData);
            addCateForm.cat_name = cateData.cateName;
            if(cateData.parentList && cateData.parentList.length > 0){
                addCateForm.cat_pid = cateData.parentList[cateData.parentList.length - 1];
                addCateForm.cat_level = cateData.parentList.length;
            } else {
                addCateForm.cat_pid = 0;
                addCateForm.cat_level = 0;
            }
            const {data: res} = await addCate(addCateForm);
            if(res && res.meta && res.meta.status === 201){
                message.success({
                    content: '添加分类成功',
                    key: 'validate'
                })
                dispatch(getCategoryTotalDispatch(queryInfo));
                dispatch(changeAddCateVisableAction(false));
            } else {
                message.error({
                    content: '添加分类失败',
                    key: 'validate'
                })
            }
            //在这里发送请求修改地址
            //setEditVisable(false);
        }
    }
    const addhandleCancel = () => {
        addFormRef.current.resetFields();
        //setEditVisable(false);
        dispatch(changeAddCateVisableAction(false));
    }
    return (
        <div>
            <Modal title="添加分类"
                visible={addCateVisable}
                onOk={addhandleOk}
                onCancel={addhandleCancel}
                cancelText="取消"
                okText="确定">
                <Form size="large" {...layout} ref={addFormRef}>
                    <Form.Item label="分类名称"
                        name="cateName"
                        required
                        rules={cateFormRules.cateName}>
                        <Input type="text" placeholder="请输入分类名称"></Input>
                    </Form.Item>
                    <Form.Item label="父级分类"
                        name="parentList">
                        <Cascader options={parentCateList} fieldNames={filedNames} placeholder="请选择父级分类" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
})

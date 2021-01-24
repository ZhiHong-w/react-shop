import React, { memo,useState,useEffect } from 'react';
import { Card, Table, Row, Col, Button } from 'antd';
import { useDispatch,shallowEqual,useSelector} from 'react-redux';

import { CategoriesWrapper } from './style';

import Breadcrus from '../../components/breadcrumb';
import AddCateModal from './cpns/addCateModal';
import { breadCategories } from '../../common/bread-data';

import { 
    getCategoryTotalDispatch,
    changeQueryInfo,
    changeAddCateVisableAction,
    getParentCateListDispatch
} from './store/actionCreators';

//分页组件
import Pagina from '../../components/pagination';

import { columns } from '../../common/cate-data';

export default memo(function Categories() {
    
    //当前页数
    const [pagenum, setPagenum] = useState(1);
    //每页的数据条数
    const [pagesize, setPagesize] = useState(5);
    //搜索内容
    const [type, setType] = useState(3);

    const { cateList,total,queryInfo } = useSelector(state => ({
        cateList: state.categories.cateList,
        total: state.categories.total,
        queryInfo: state.categories.queryInfo,
    }), shallowEqual);

    const dispatch = useDispatch();
    useEffect(() => {
        const queryInfo = {
            type: 3,
            pagenum: 1,
            pagesize: 5
        }
        dispatch(getCategoryTotalDispatch(queryInfo))
    }, [dispatch])

    //添加分类按钮
    const showModal = () => {
        dispatch(getParentCateListDispatch());
        dispatch(changeAddCateVisableAction(true));
    }

    //页面改变
    const onPageChange = (page, pageSize) => {
        // console.log(page,pagesize);
        setPagenum(page);
        setPagesize(pageSize);
        dispatch(changeQueryInfo({ ...queryInfo,pagenum:page,pagesize:pageSize}));

        dispatch(getCategoryTotalDispatch({ type, pagenum: page, pagesize: pageSize }));
    }

    //条数改变
    const onSizeChange = (current, size) => {
        setPagesize(size);
        dispatch(changeQueryInfo({ ...queryInfo,pagesize: size}))

        dispatch(getCategoryTotalDispatch({ type, pagenum, pagesize: size }));
    }

    return (
        <CategoriesWrapper>
            <Breadcrus breadData={breadCategories}></Breadcrus>
            <Card>
                {/* 添加分类 */}
                <div className="cate-header">
                    <Row gutter="20">
                        <Col span="4">
                            <Button type="primary"
                                onClick={showModal}
                                size="large">添加分类</Button>
                            {/* 弹出框 */}
                            <AddCateModal />
                        </Col>
                    </Row>
                </div>
                {/* 表格 */}
                <Table columns={columns}
                    dataSource={cateList}
                    pagination={false} bordered></Table>
                {/* 分页 */}
                <div className="pagination">
                    <Pagina currentPage={pagenum}
                        pageSize={pagesize}
                        total={total}
                        onPageChange={onPageChange}
                        onSizeChange={onSizeChange}></Pagina>
                </div>
            </Card>
        </CategoriesWrapper>
    )
})

import React, { memo } from 'react';

//汉化
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider,Pagination } from 'antd';

export default memo(function Pagina(props) {
    const { currentPage, pageSize, total, onPageChange, onSizeChange } = props;
    const showTotal = (total) => {
        return `共${total}条`;
    }
    return (
        <ConfigProvider locale={zhCN}>
            <Pagination current={currentPage}
                pageSize={pageSize}
                total={total}
                onChange={onPageChange}
                onShowSizeChange={onSizeChange}
                pageSizeOptions={[1, 2, 5, 10]}
                showQuickJumper={true}
                showTotal={showTotal}
                showSizeChanger={true}></Pagination>
        </ConfigProvider>
    )
})

import * as actionType from './constants';

import { getCategoryList, 
    getParentCateList
} from '../../../services/categories';
import { insertCateList } from '../../../utils/cateList';

const changeCategoryListAction = (cateList) =>({
    type: actionType.GET_CATEGORIES_LIST,
    cateList
})

const getTotalAction = (total)=>({
    type: actionType.GET_TOTAL_CATEGORIES,
    total
})

export const getCategoryTotalDispatch = (queryInfo)=>{
    return async dispatch => {
        const {data: res} = await getCategoryList(queryInfo);
        //console.log(res);
        if(res && res.data){
            const cateList = insertCateList(res.data.result);
            dispatch(changeCategoryListAction(cateList));
            dispatch(getTotalAction(res.data.total))
        }
    }
}

export const changeQueryInfo = (queryInfo)=>({
    type: actionType.CHANGE_QUERY_INFO,
    queryInfo
})

export const changeAddCateVisableAction = (addCateVisable)=> ({
    type: actionType.ADD_CATE_VISABLE,
    addCateVisable
})

const getParentCateListAction = (parentList)=>({
    type: actionType.GET_PARENT_CATE_LIST,
    parentCateList:parentList
})

export const getParentCateListDispatch = ()=>{
    return async dispatch =>{
        const {data: res} = await getParentCateList();
        //console.log(res);
        if(res && res.data){
           // console.log(res.data);
            dispatch(getParentCateListAction(res.data));
        }
    }
}

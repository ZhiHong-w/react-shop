//改变catesList列表
export const insertCateList = (data)=>{
    for(let i=0; i<data.length; i++){
        data[i].key = data[i].cat_id;
        data[i].index = i + 1;
        if(data[i].children){
            insertCateList(data[i].children);
        }
    }
    return data;
}
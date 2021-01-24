//改变rightsList列表
export const insertRightsList = (data)=>{
    for(let i=0; i<data.length; i++){
        data[i].key = data[i].id;
        data[i].index = i + 1;
    }
    return data;
}
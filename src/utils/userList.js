//改变userList列表
export const insertUserList = (data)=>{
    for(let i=0; i<data.length; i++){
        data[i].key = data[i].id;
        data[i].index = i + 1;
    }
    return data;
}
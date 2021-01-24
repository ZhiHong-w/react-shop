import { dataFormat } from './dataFormat';
//改变goodsList列表
export const insertOrdersList = (data)=>{
    for(let i=0; i<data.length; i++){
        data[i].key = data[i].order_id;
        data[i].index = i + 1;
        data[i].create_time = dataFormat(data[i].create_time);
    }
    return data;
}
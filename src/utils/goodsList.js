import { dataFormat } from './dataFormat';
//改变goodsList列表
export const insertGoodsList = (data)=>{
    for(let i=0; i<data.length; i++){
        data[i].key = data[i].goods_id;
        data[i].index = i + 1;
        data[i].add_time = dataFormat(data[i].add_time);
    }
    return data;
}
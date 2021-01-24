 /**
  * 路由全局导航守卫
  * @param {*} fromComponent 
  * @param {*} toComponent 
  */
 
 export default function beforeEach(fromComponent,toComponent){
    if(window.sessionStorage.getItem('token')){
        return fromComponent;
    } else{
        return toComponent;
    }
}
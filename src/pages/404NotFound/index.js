/**
 * 404页面
 */
import React, { PureComponent } from 'react';

import { NotFoundWrapper } from './style';

export default class NotFound extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            time: 5
        };
    }
    componentDidMount(){
      this.timer  = setInterval(()=>{
            if(this.state.time <= 0){
                // clearInterval(this.timer);
                if(window.sessionStorage.getItem('token')){
                    this.props.history.push('/home');
                } else{
                    this.props.history.push('/login');
                }
            } else {
                this.setState({
                    time: this.state.time - 1
                })
            }
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <NotFoundWrapper>
                <div className="content">
                    <h1 className="unpage">404页面不存在</h1>
                    <span className="back-home"><i className="timer">{this.state.time + 's'}</i>后返回首页</span>
                </div>
            </NotFoundWrapper>
        )
    }
}

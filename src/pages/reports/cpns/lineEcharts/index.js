/**
 * 折线图，运用类组件
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as echarts from 'echarts';
import _ from 'lodash';

import { lineEchartsOption } from '../../../../common/report-data';
import { getLineEchartsDispatch } from '../../store/actionCreators';

class LineEcharts extends PureComponent {

    componentDidMount(){
        this.props.getLineEchartsData();
        // let myChart = echarts.init(document.getElementById('lineEcharts'));
        // myChart.setOption(_.merge(this.props.lineEcharts,lineEchartsOption));
    }
    componentDidUpdate(){
        let myChart = echarts.init(document.getElementById('lineEcharts'));
        myChart.setOption(_.merge(this.props.lineEcharts,lineEchartsOption));
    }

    render() {
        return (
            <div>
                <div id="lineEcharts" style={{width: "650px",height: "400px"}}></div>
            </div>
        )
    }
}

//react-redux中connect的用法
const mapStateToProps = state => ({
    lineEcharts: state.report.lineEcharts
});
const mapDispatchToProps = dispatch => ({
    getLineEchartsData: function(){
        dispatch(getLineEchartsDispatch())
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(LineEcharts);



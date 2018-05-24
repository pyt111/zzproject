<template>
    <!-- 中间 -->
    <div class="container">
       <div class="onWayCar">
            <div class="onWay">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                    <div class="stateTitle">
                        — &emsp;在途车辆&emsp; —
                    </div>
                    <span class="question"></span>
            </div>
            <p class="goodsDistribution"><span></span>预计到达货量分布</p>
            <!-- 货量分布走势图 -->
            <div id="distribution"></div>
            <p class="goodsDistribution"><span></span>预计到达车量分布</p>
            <div class="car_distribution">
                <div class="carTitle">
                    <p><span style="background:#93d0f1"></span>快递占比大于70%的车辆数</p>
                    <p><span style="background:#fe7c53"></span>车辆数</p>
                </div>
                <!-- 车量分布走势图 -->
                <div id="carDistribution"></div>
            </div>

       </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    
    name: '',
    data () {
        return {
           
        }
    },
    computed: {
        ...mapGetters({
            app: "datase"
        })
    },
    mounted  (){
        // 货量分布走势图
        function distribution(){
            var myChart = echarts.init(document.getElementById('distribution'));
            var option = {
                color:'rgb(58,107,223)',
                xAxis: {
                    type: 'category',
                    axisLine: { onZero: false },
                    data: ['1小时', '2小时', '3小时', '4小时', '4小时以上'],
                    // 设置x轴样式
                    axisLine:{
                        lineStyle:{
                            color:'#eee',
                        }
                    } ,
                    // x轴字颜色
                    axisLabel : {
                        interval: 0,
                        textStyle: {
                            color: 'rgb(102,102,102)'
                        }
                    },
                },
                yAxis: {
                    type: 'value',
                    // 去掉网格线
                    splitLine:{  
                　　　　show:false  
                　　},
                    // 设置y轴样式
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    } ,
                    // y轴字颜色
                    axisLabel : {
                        textStyle: {
                            color: 'rgb(102,102,102)'
                        }
                    },
                },
                grid: {
                    left: '0%',
                    right: '2%',
                    bottom: '1%',
                    top: '5%',
                    containLabel: true
                },
                series: [{
                    data: [820, 932, 901, 934, 1290],
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {label : {show: true}},
                    },
                    lineStyle: {
                        color: 'rgb(58,107,223)',
                    },
                }]
            };
            myChart.setOption(option);
        }
        // distribution()
        // 车量分布走势图
        function goodsDistribution(){
            var myChart = echarts.init(document.getElementById('carDistribution'));
             //数据
            var colors = ['#93d0f1','#fe7c53'];
            var data1=['1小时', '2小时', '3小时', '4小时', '4小时以上'];
            var data2=[20,30,40,50,60];
            var option = {
                backgroundColor: "#ffffff",
                color: colors,
                fontSize:'12px',
                // legend: {
                //     right: '5%',
                //     data: ['快递占比大于70%的车辆数', '车辆数'],
                // },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    left: '0%',
                    right: '2%',
                    bottom: '1%',
                    top: '5%',
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    data: data1,
                    axisTick: {
                        alignWithLabel: true
                    },
                    // 设置x轴样式
                    axisLine:{
                        lineStyle:{
                            color:'#eee',
                        }
                    } ,
                    // x轴字颜色
                    axisLabel : {
                        interval: 0,
                        textStyle: {
                            color: 'rgb(102,102,102)'
                        }
                    },
                }],
                yAxis: [{
                    type: 'value',
                    // 去掉网格线
                    splitLine:{  
                　　　　show:false  
                　　},
                    // 设置y轴样式
                    axisLine:{
                        lineStyle:{
                            color:'#fff',
                        }
                    } ,
                    // y轴字颜色
                    axisLabel : {
                        textStyle: {
                            color: 'rgb(102,102,102)'
                        }
                    },
                }],
                series: [{
                    name: '快递占比大于70%的车辆数',
                    type: 'bar',
                    stack: '总量',
                    barWidth: '20',
                    data: [18, 18, 16, 7, 15, 9, 17, 15, 13,19]
                }, {
                    name: '车辆数',
                    type: 'bar',
                    stack: '总量',
                    barWidth: '20',
                    data: [10, 8, 6, 13, 4, 9, 12, 11 , 10, 12]
                }]
            };
            myChart.setOption(option);
        }
        // goodsDistribution()
    }
}
</script>


<style scoped lang="scss">
// 标记
@mixin style(){
	display: block;
    width: 2px;
    height:12px;
    margin-left: 5px;
    margin-right: 5px;
    background: #5d8aee;
}
    .container{
        // padding-top: 23.7vh;
        // padding-bottom: 8vh;
        // padding-left: 5px;
        // padding-right:5px;
        .onWayCar{
            width:100%;
            background: #fff;
            .onWay{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .stateTitle{
                    color:rgb(58,107,223);
                    font-weight: bold;
                    margin: 0 auto;
                    font-size: 15px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
                .question{
                    display: block;
                    width: 24px;
                    height:24px;
                    margin-right: 10px;
                    background-size: 24px;
                }
            }
            .goodsDistribution{
                display: flex;
                align-items: center;
                color: rgb(159,159,159);
                font-size: 13px;
                margin-bottom: 5px;
                span{
                    @include style();
                }
            }
            // 货量分布走势图
            #distribution{
                width: 100%;
                height:17vh;
                margin-bottom:10px;
            }
            // 车辆分布走势图
            #carDistribution{
                width: 100%;
                height:17vh;
            }
            .car_distribution{
                position: relative;
                .carTitle{
                    position: absolute;
                    right:0;
                    top:0;
                    display: flex;
                    align-items: center;
                    z-index: 2;
                    p{
                        font-size: 12px;
                        display: flex;
                        align-items: center;
                        color: rgb(159,159,159);
                        margin-right: 10px;
                        >span{
                            display: block;
                            width: 5px;
                            height:5px;
                            margin-right: 5px;
                        }
                    }

                }
            }

        }
    }

 
</style>

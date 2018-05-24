<template>
    <!-- 中间 -->
    <div class="contaner">
        <div class="item">
            <div class="state">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                <div class="stateTitle">
                    — &emsp;车辆调度&emsp; —
                </div>
                <span class="question"></span>
            </div>
            <div class="cauDispatch">
                <!-- <div class="number">
                    <p>预计到达快递总票数</p>
                    <p>6666666</p>
                </div>
                <div class="bridge"></div>
                <div class="number">
                    <p>车辆数</p>
                    <p>666666</p>
                </div> -->
                <div>
                    <p>累积卸车货量</p> 
                    <p>222件</p> 
                </div>
                <span></span>
                <div>
                    <p>即卸占比</p> 
                    <p>30%</p> 
                </div>

            </div>
        </div>

        <!-- 卸车 -->
        <div class="item">
            <div class="state">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                <div class="stateTitle">
                    — &emsp;卸车&emsp; —
                </div>
                <span class="question"></span>
            </div>
            <div class="progress">
                <ul>
                    <li><span></span>进度</li>
                    <li><p></p></li>
                    <li>80%</li>
                </ul>
            </div>
            <div class="unload">
                <div>
                    <p>累积卸车货量</p> 
                    <p>222件</p> 
                </div>
                <span></span>
                <div>
                    <p>即卸占比</p> 
                    <p>30%</p> 
                </div>
                <span></span>
                <div>
                    <p>待卸车辆</p> 
                    <p>10台</p> 
                </div>
                <span></span>
                <div>
                    <p>待卸货量</p> 
                    <p>1111件</p> 
                </div>
            </div>
        </div>

        <!-- 分拣 -->
        <div class="item">
            <div class="state">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                <div class="stateTitle">
                    — &emsp;分拣&emsp; —
                </div>
                <span class="question"></span>
            </div>
            <div class="progress">
                <ul>
                    <li><span></span>进度</li>
                    <li><p style="background:rgb(253,186,97)"></p></li>
                    <li style="color:rgb(253,186,97)">80%</li>
                </ul>
            </div>
            <div class="sorting">
        
                <div class="sortingNum" style="margin-left: 5px;">
                    <p>累积卸车货量</p> 
                    <p>222件</p> 
                </div>
                <span class="line"></span>
                <div class="sortingNum">
                    <p>即卸占比</p> 
                    <p>30%</p> 
                </div>

                <span class="line"></span>
                <div class="sortProportion">
                    <div class="proportionInfo">
                        累积分拣总量占比
                        <p><span></span>大件</p>
                        <p><span></span>小件</p>
                    </div>
                    <div class="proportionNum">
                        <div class="bigPiece">100000件</div>
                        <div class="smallPiece">555555件</div>
                    </div>
                </div>
            </div>
            
        </div>

        <!-- 装车 -->
        <div class="item">
            <div class="state">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                <div class="stateTitle">
                    — &emsp;装车&emsp; —
                </div>
                <span class="question"></span>
            </div>
            <div class="progress">
                <ul>
                    <li><span></span>进度</li>
                    <li><p style="background:rgb(255,110,97)"></p></li>
                    <li style="color:rgb(255,110,97)">80%</li>
                </ul>
            </div>
            <div class="unload LoadCar">
                <div>
                    <p>累积装车货量</p> 
                    <p>222件</p> 
                </div>
                <span></span>
                <div>
                    <p>待装货量</p> 
                    <p>30%</p> 
                </div>
                <span></span>
                <div>
                    <p>即装占比</p> 
                    <p>10台</p> 
                </div>
            </div>
            
        </div>


    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            
        }
    },
    // mounted  (){
    //     // 饼状图
    //     var myChart = echarts.init(document.getElementById('proportionPie'));
    //     var option = {
    //         tooltip : {
    //             trigger: 'item',
    //             formatter: "{a} <br/>{b} : {c} ({d}%)"
    //         },
    //         legend: {
    //             orient: 'vertical',
    //             right: 'right',
    //             bottom:'bottom',
    //             data: ['大件','小件']
    //         },
    //         series : [
    //             {
    //                 name: '访问来源',
    //                 type: 'pie',
    //                 radius : [0, '100%'],
    //                 center: ['50%', '50%'],
    //                 hoverAnimation :false,
    //                 label:{
    //                     position :'inside',
    //                     fontSize :12 ,
    //                 },
    //                 data:[
    //                     {value:335, name:'335',itemStyle: {color: '#b1dd7e'}},
    //                     {value:310, name:'310',itemStyle: {color: '#fed6b5'}},
    //                 ],
    //                 itemStyle: {
    //                     emphasis: {
    //                         shadowBlur: 10,
    //                         shadowOffsetX: 0,
    //                         shadowColor: 'rgba(0, 0, 0, 0.5)'
    //                     }
    //                 }
    //             }
    //         ]
    //     };
    //     myChart.setOption(option);
    // }
}
</script>


<style scoped lang="scss">
@mixin p1(){
	color: rgb(121, 121, 121);
    margin-bottom: 10px;
    font-size: 12px;
}
@mixin p2(){
	color:rgb(58,107,223);
    font-size: 16px;
}
@mixin line(){
	height: 4vh;
    width:2px;
    background: #f4f5f5;
}
// 标记
@mixin style(){
	display: block;
    width: 2px;
    height:12px;
    margin-left: 5px;
    margin-right: 5px;
    background: #5d8aee;
}

    .contaner{
        // padding-top: 23.7vh;
        // padding-bottom: 8vh;
        // 卡片
        .item{
            // height:16vh;
            border-top:1px solid #d9d9d9;
            border-bottom:1px solid #d9d9d9;
            text-align: center;
            padding-bottom: 10px;
            margin-bottom: 10px;
            .state{
                width: 100%;
                // height:3.5vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .stateTitle{
                    // line-height: 3.5vh;
                    width: 70%;
                    height:100%;
                    color:rgb(58,107,223);
                    font-weight: bold;
                    margin: 0 auto;
                    font-size: 14px;
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
            // 车辆调整
            .cauDispatch{
                // height:8vh;
                display: flex;
                align-items: center;
                justify-content: center;
                p:nth-child(1){
                    @include p1();
                }
                p:nth-child(2){
                    @include p2();
                }
                span{
                    margin: 0 20%;
                    @include line();
                    
                }

                // .number:nth-child(1){
                //     padding: 8px 20px;
                //     margin-left: 22px;
                // }
                // .number:nth-child(3){
                //     padding:8px 30px;
                // }
                // .number{
                //     border:1px solid #e7e7e7;
                //     border-radius: 10px;
                //     p:nth-child(1){
                //         color: rgb(121, 121, 121);
                //         margin-bottom: 10px;
                //         font-size: 12px;

                //     }
                //     p:nth-child(2){
                //         color:rgb(58,107,223);
                //         font-size: 16px;
                //     }
                // }
                // .bridge{
                //     width: 30px;
                //     height:5px;
                //     border: 1px solid #e7e7e7;
                //     box-shadow: 0px 0px 5px #e7e7e7;
                // }

            }

            // 卸车
            .progress{
                color:#a7a7a7;
                margin-bottom: 15px;
                >ul{
                    display: flex;
                    align-items: center;
                    li:nth-child(1){
                        display: flex;
                        align-items: center;
                        font-size: 14px;
                        span{
                            display: block;
                            width: 2px;
                            height:12px;
                            margin-left: 5px;
                            margin-right: 5px;
                            background: #5d8aee;
                        }
                    }
                    li:nth-child(2){
                        position: relative;
                        margin-left: 18px;
                        width: 70%;
                        height:11px;
                        background: #efede1;
                        border-radius: 10px;
                        p{
                            position: absolute;
                            left:0;
                            top:0;
                            width: 50%;
                            height:100%;
                            background: rgb(139,207,188);
                            border-radius: 10px;
                        }
                    }
                    li:nth-child(3){
                        font-size: 13px;
                        margin-left: 10px;
                        color:rgb(139,207,188);
                    }

                }
            }
            .unload{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
                >span{
                    @include line();
                }
                >div{
                    p:nth-child(1){
                        color: rgb(121, 121, 121);
                        margin-bottom: 10px;
                        font-size: 12px;

                    }
                    p:nth-child(2){
                        color:rgb(58,107,223);
                        font-size: 14px;
                    }
                }
            }

            // 分拣
            .sorting{
                display:flex;
                margin-top: 10px;
                justify-content: space-between;
                .line{
                    @include  line();
                }

                .sortingNum{
                    p:nth-child(1){
                        @include p1();
                    }
                    p:nth-child(2){
                        @include p2();
                    }
                }                           
                .sortProportion{
                    width: 55%;              
                    .proportionInfo{
                        display: flex;
                        color: #797979;
                        >p{
                            font-size: 12px;
                            margin-left: 5px;
                            display: flex;
                            align-items: center;
                            span{
                                display: inline-block;
                                width: 10px;
                                height:10px;
                                border-radius: 50%;
                                margin:2px 3px 0 5px;
                            }
                        }
                        >p:nth-child(1){
                            span{
                                background: #b1dd7e;
                            }
                        }
                        >p:nth-child(2){
                            span{
                                background: #fed6b5;
                            }
                        }
                    }
                    .proportionNum{
                        width: 100%;
                        height:2.6vh;
                        line-height: 2.6vh;
                        display: flex;
                        margin-top: 7px;
                        text-align: center;
                        color:#fff;
                        .bigPiece{
                            width: 60%;
                            height:100%;
                            background: #5d8aee;
                            border-radius: 10px;
                            z-index: 1;
                        }
                        .smallPiece{
                            width: 40%;
                            height:100%;
                            background:rgb(239,136,96);
                            border-radius: 10px;
                            margin-left: -13px;
                        }
                    }
                }
            }

            // 装车
            .LoadCar{
                padding:0 25px;
            }
            
            
        }
    }

 
</style>

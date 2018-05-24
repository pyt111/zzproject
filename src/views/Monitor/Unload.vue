<template>
    <!-- 中间 -->
    <div class="container">
        <div class="onWayCar" ref="sss">
            <div class="onWay">
                <span style="height: 24px;width: 24px;margin-left: 10px;"></span>
                <div class="stateTitle">
                    — &emsp;卸车&emsp; —
                </div>
                <span class="question"></span>
            </div>
            <p class="goodsDistribution">
                <span></span>车辆卸车详情</p>
            <!-- 卸车饼状图 -->
            <!-- <div id="unload"></div> -->
            <chart :options="option" class="echarts" id="pie"></chart>
            <p class="goodsDistribution">
                <span></span>运单时效预警</p>
            <!-- table1 -->
            <tables :lists='list' :items='item'></tables>
            <p class="goodsDistribution">
                <span></span>卸车时效预警</p>
            <!-- table2 -->
            <tables :lists='lists' :items='items'></tables>

        </div>

    </div>
</template>

<script>
import tables from "@/components/Table";

export default {
    name: "",
    data() {
        return {
            item: ["运单号", "车牌号", "路线", "预警时效"],
            list: [
                {
                    a: "2",
                    b: "2",
                    c: "3",
                    d: "4"
                },
                {
                    a: "1",
                    b: "2",
                    c: "3",
                    d: "4"
                },
                {
                    a: "1",
                    b: "2",
                    c: "3",
                    d: "4"
                }
            ],
            items: ["车牌号", "车型", "规定时长", "超时时长"],
            lists: [
                {
                    a: "1",
                    b: "2",
                    c: "3",
                    d: "4"
                },
                {
                    a: "1",
                    b: "2",
                    c: "3",
                    d: "4"
                },
                {
                    a: "1",
                    b: "2",
                    c: "3",
                    d: "4"
                }
            ],
            option: {
                color: [
                    "rgb(139,207,188)",
                    "rgb(255,183,24)",
                    "rgb(254,124,83)"
                ],
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: [15, 50],
                        center: ["50%", "50%"],

                        data: '',
                        roseType: "pie",
                        label: {
                            normal: {
                                textStyle: {
                                    // color: "rgba(51, 51, 51)"
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    // color: "rgba(51, 51, 51)"
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        }
                    }
                ]
            }
        };
    },
    components: {
        // 组件名，不要html标签
        tables
    },
    created() {
        console.log(this.option);
        let data = {
            a: 1,
            b: 2
        };
        let unloadData = [{ value: 335 }, { value: 310 }, { value: 274 }];
        this.option.series[0].data = [
                            {
                                value: unloadData[0].value,
                                name: "未卸:" + unloadData[0].value
                            },
                            {
                                value: unloadData[1].value,
                                name: "正在卸:" + unloadData[1].value
                            },
                            {
                                value: unloadData[2].value,
                                name: "已卸:" + unloadData[1].value
                            }
                        ].sort(function(a, b) {
                            return a.value - b.value;
                        })
        // this.$store.dechtp("x_TXMX");

        // 货量分布走势图
        // function unload() {
        //     // var myChart = echarts.init(document.getElementById("unload"));
        //     // let unloadData = [{ value: 335 }, { value: 310 }, { value: 274 }];

        //     // myChart.setOption(option);
        // }
        // unload();
    }
};
</script>


<style scoped lang="scss">
// 标记
@mixin style() {
    display: block;
    width: 2px;
    height: 12px;
    margin-left: 5px;
    margin-right: 5px;
    background: #5d8aee;
}
.container {
    // padding-top: 23.7vh;
    // padding-bottom: 8vh;
    // padding-left: 5px;
    // padding-right:5px;
    .onWayCar {
        width: 100%;
        background: #fff;
        padding-bottom: 10px;
        border-radius: 5px;
        .onWay {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .stateTitle {
                color: rgb(58, 107, 223);
                font-weight: bold;
                margin: 0 auto;
                font-size: 15px;
                margin-top: 10px;
                margin-bottom: 10px;
            }
            .question {
                display: block;
                width: 24px;
                height: 24px;
                margin-right: 10px;
                background-size: 24px;
            }
        }
        .goodsDistribution {
            display: flex;
            align-items: center;
            color: rgb(159, 159, 159);
            font-size: 13px;
            margin-bottom: 5px;
            span {
                @include style();
            }
        }
        // 货量分布走势图
        .echarts {
            width: 100%;
            height: 18vh;
            margin-bottom: 10px;
        }
    }
}
</style>

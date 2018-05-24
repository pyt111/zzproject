<template>
    <!-- 更新时间 -->
    <div class="toUpdate">
        <div class="update">
            <div class="updateTime">
                更新时间：2017-11-2 11:30
            </div>
            <div class="updateFrequency">
                更新频率：30分钟
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  
}
</script>


<style scoped lang="scss">
    .toUpdate{
        width: 100%;
        height:5vh;
        margin-bottom:10px;
        display: flex;
        align-items: center;
        background: #fff;
        position: fixed;
        margin-top: -1px;
        top: 17.7vh;
        z-index: 999;
        .update{
            width: 100%;
            // height: 2vh;
            color:#a7a7a7;
            font-size: 13px;
            display: flex;
            // padding-top: 7px;
            .updateTime{
                width: 55%;
                text-align: center;
                border-right: 1px solid #b9d7f2;
            }
            .updateFrequency{
                width: 45%;
                text-align: center;
            }
        }
    }
</style>

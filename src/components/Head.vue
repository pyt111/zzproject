<template>
    <!-- 头部 -->
    <div class="header">
        <div class="searchBox">
            <ul>
                <li class="leftArrow"></li>
                <li class="search">
                    <span class="magnifier"></span>
                    <input type="type" name="" placeholder="顺德枢纽中心"/>
                </li>
                <li class="questionMark"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  
}
</script>


<style scoped lang="scss">
    .header{
        width:100%;
        background:#3a6bdf;
        padding-top:5vh;
        position: fixed;
        top:0;
        z-index: 999;
        .searchBox{ 
            height: 6.7vh;   
            display: flex;
            align-items: center;       
            padding: 0 10px;            
            >ul{
                width: 100%;
                height:5.2vh;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .leftArrow{
                    width: 25px;
                    height:25px;
                    background-size: 25px; 
                }
                .search{
                    width: 77%;
                    height:100%;
                    color:#f3f3f3;
                    position: relative;
                    border: 1px solid #608cef;
                    .magnifier{
                        display: block;
                        width: 22px;
                        height: 22px;
                        padding-left: -20px;
                        padding-left: -28px;
                        position: absolute;
                        left: 10px;
                        top: 6px;
                        background-size: 22px; 
                    }
                    input{
                        width: 100%;
                        height: 100%;
                        background: none;
                        outline: none;
                        border: none;
                        box-sizing: border-box;
                        border-radius: 2px;
                        padding-left: 40px;
                        color:#f3f3f3;
                        font-size: 14px;
                    }
                    input::-webkit-input-placeholder{
                        color: #f3f3f3;
                    }
                }
                .questionMark{
                    width: 25px;
                    height:25px;
                    background-size:25px; 
                }
            }    
        }
    }
</style>

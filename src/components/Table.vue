<template>
    <!-- 表格 -->
    <div class="waybillNum">
        <table>
            <tr class="waybill" ref="trs"><td v-for="(item,i) of items" :key="i">{{item}}</td>
            </tr>
            <div class="oddNum"  ref="oddNum" :style="{'height':heights +'px'}">
                <tr  v-for="(item,index) of lists" :key="index">
                    <td v-for="(val,i) of item" :key="i">{{val}}</td>
                </tr>
            </div>
        </table>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
            items:Array,
            lists: Array,

    },
    data(){
        return {
            heights:0
        }
    },
    mounted() {
        let ht = this.$refs.trs.offsetHeight;
        console.log("")
        if(this.heights == 0) { 
            this.heights=3*ht
        }else {
            this.heights = 0;
        }
        
        
        console.log("---",this.heights);
    },
    
};
</script>


<style scoped lang="scss">
.waybillNum {
  margin: 10px 15px;
  color: #fff;
  > table {
    width: 100%;
    border: 1px solid #f4f4f4;
    tr {
      width: 100%;
      display: flex;
      td {
        width: 25%;
        padding: 6px 0;
        border-right: 1px solid #f4f4f4;
        border-bottom: 1px solid #f4f4f4;
        text-align: center;
      }
    }
    .waybill {
        height:25px;
      > td {
        background: rgb(58, 107, 223);
      }
    }
    .oddNum {
      color: #9f9f9f;
    //   height: 12vh;
      overflow-y: auto;
    }
  }
}
</style>

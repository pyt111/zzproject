<template>
    <!-- 标题 -->
    <div class="title">
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: '',
  mounted() {
      console.log(this.$store);
  },
  methods:{
      
  }
}
</script>


<style scoped lang="scss">
    .title{
        height:6vh;
        width:100%;
        background:#3a6bdf;
        margin-top: -1px; 
        position: fixed;
        top: 11.7vh;
        z-index: 999;
        >ul{
            width: 100%;
            height:100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        }
    }
</style>

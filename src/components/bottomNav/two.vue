<template>
  <div>
       <!-- 头部 -->
        <router-view/>
  </div>
</template>

<script>
import Head from "@/components/Head";
import Title from "@/components/Title";
import UpdateTime from "@/components/UpdateTime";
export default {
  data () {
    return {
    };
  },

   components: {
        // 组件名，不要html标签
        Head,
        Title,
        UpdateTime
    },

  computed: {},

  mounted(){},

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>
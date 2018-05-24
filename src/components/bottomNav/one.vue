<template>
    <div>
        <router-view/>
    </div>

</template>
<script>
import Head from "@/components/Head";
import Title from "@/components/Title";
import UpdateTime from "@/components/UpdateTime";
import { mapState } from "vuex";
export default {
    components: {
        // 组件名，不要html标签
        Head,
        Title,
        UpdateTime
    },
     computed: {
         ...mapState([
            "datases"
         ])
    },
    mounted() {
        console.log(this.datases);
    },
};
</script>
<!--  -->
<template>
    <div class="topNav">
        <ul>
            <li v-for="item,i in topNav">
                <router-link tag="p" :to="item.path">{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
         ...mapState([
            "datases"
         ])
    }
       
    ,
    watch: {
        datases: "bignFunce" //监听table_serchData发生变化执行bignFunce方法
    },
    data() {
        return {
            topNav: [
                {
                    name: "车辆调度",
                    path: "/"
                },
                {
                    name: "卸车监控",
                    path: "/unload"
                },
                {
                    name: "分拣监控",
                    path: ""
                },
                {
                    name: "装车监控",
                    path: ""
                }
            ]
        };
    },

    components: {},

    computed: {},

    mounted() {
        console.log(this.datases);
        console.log(this.$store.state.topNav.data);
    },

    methods: {
        bignFunce() {
            console.log("111111111111");
        }
    }
};
</script>
<style lang='scss' scoped>
.topNav {
    height: 6vh;
    width: 100%;
    background: #3a6bdf;
    margin-top: -1px;
    position: fixed;
    top: 11.7vh;
    z-index: 999;
    > ul {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
<template>
    <!-- 底部 -->
    <div class="footer">
        <ul>
            <li v-for="(item,index) of list" :key="index" @click="ind(index)">
                <router-link tag="p" :to="item.path">
                    <span>{{item.text}}</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {
            list: [
                {
                    img: "",
                    text: "实时监控",
                    path: "/"
                },
                {
                    img: "",
                    text: "货量人员",
                    path: "/two"
                },
                {
                    img: "",
                    text: "质量管理",
                    path: "/two"
                },
                {
                    img: "",
                    text: "驾驶舱",
                    path: "/two"
                },
                {
                    img: "",
                    text: "模拟仿真",
                    path: "/two"
                }
            ]
        };
    },
    methods: {
        ind(index) {
            this.$store.commit("XTE", index);
        }
    }
};
</script>


<style scoped lang="scss">
// 底部
.footer {
    width: 100%;
    height: 8vh;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #d9d9d9;
    font-size: 13px;
    background: #fff;
    z-index: 999;
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        li {
            width: 20%;
            text-align: center;
            position: relative;

            p {
                width: 100%;
                height: 100%;
                span {
                    width: 100%;
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                }
            }
        }
    }
}
</style>

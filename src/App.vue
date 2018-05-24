<template>
    <div id="app">
         <!-- 头部 -->

        <Head/>
        <!-- 标题 -->
        <!-- <Title/> -->
        <!-- 头部导航 -->
        <TopNav/>
        <!-- 更新时间 -->
        <UpdateTime/>
        <!-- 内容 -->
        <contents class="pyt111"/>
        
        <!-- <count></count> -->
        <!-- 底部 -->
        <Footer/>
    </div>
</template>

<script>
import Head from "@/components/Head";
import Title from "@/components/Title";
import TopNav from "@/components/TopNav";
import UpdateTime from "@/components/UpdateTime";
import Footer from "@/components/Footer";
import contents from '@/components/content'

export default {
    name: "App",
    components: {
        // 组件名，不要html标签
        Head,
        Title,
        TopNav,
        UpdateTime,
        contents,
        Footer
    }
};
</script>

<style>
</style>

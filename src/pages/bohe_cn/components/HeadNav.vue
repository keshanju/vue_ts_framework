<template>
    <div class="head">
        <div class="logo">
            <img class="logo_img" src="../images/logo.png" alt="">
        </div>
        <ul class="nav">
            <li class="action list">
                <a href="index.html">首页</a>
            </li>
            <li class="list">
                <a href="download.html">下载</a>
            </li>
            <li class="list">
                <a href="notice.html">公告</a>
            </li>
            <li class="list">
                <a href="news.html">资讯</a>
            </li>
            <li class="list">
                <a href="#">帮助</a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="languageCheck">中</span> / 英
                </a>
            </li>
        </ul>
        <div class="contact">
            <img src="images/code.png" alt="">
            <p class="tip_p">扫一扫免费加速</p>
            <button class="btn">在线咨询</button>
            <p class="normal_p">TEL:027-87002105</p>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HeadNav extends Vue {
        @Prop() private msg!: string;
    }
</script>
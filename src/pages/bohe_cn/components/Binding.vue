<template>
    <div class="register_container">
        <div class="left register_title">
            <p class="binding_title_content">绑</p>
            <p class="binding_title_content">定</p>
            <p class="binding_title_content">手</p>
            <p class="binding_title_content">机</p>
            <p class="binding_title_content">号</p>
        </div>
        <div class="left register_form">
            <div class="form_input">
                <input type="text" class="phoneNum input" placeholder="请输入手机号">
            </div>
            <div class="form_input">
                <input type="text" class="verificatioCode input" placeholder="图形验证码">
                <div class="verificatioPic">
                    <img class="verificatioImg" src="../images/code_pic.png" alt="">
                </div>
            </div>
            <div class="form_input">
                <input type="text" class="countDownNum input" placeholder="验证码">
                <p class="getCountDownNum">
                    <span class="getMethod">短信获取</span>
                    <span>|</span>
                    <span class="getMethod">语言获取</span>
                </p>
            </div>
            <button class="form_btn">绑定并登录</button>
            <button class="form_btn form_btn_red">账号登录</button>
            <img class="login_logo" src="../images/icon_login.png" alt="">
        </div>
        <img src="../images/login_x.png" alt="" class="closeIcon">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Binding extends Vue {
        @Prop() private msg!: string;
    }
</script>



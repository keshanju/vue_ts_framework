<template>
    <div class="register_container">
        <div class="left register_title">
            <p class="binding_title_content">找</p>
            <p class="binding_title_content">回</p>
            <p class="binding_title_content">密</p>
            <p class="binding_title_content">码</p>
        </div>
        <div class="left register_form">
            <div class="form_input">
                <input type="text" class="phoneNum input" placeholder="请输入手机号">
            </div>
            <div class="form_input">
                <input type="text" class="pwd input" placeholder="请输入密码(6-10位数字和字母)">
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
            <button class="form_btn">找回密码</button>
            <button class="form_btn form_btn_red">返回登录</button>
            <img @click="onClose" class="login_logo" src="../images/icon_login.png" alt="">
        </div>
        <img @click="onClose" src="../images/login_x.png" alt="" class="closeIcon">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {RegisterProxy} from "../../../ts/proxy/RegisterProxy";

    @Component
    export default class FindPwd extends Vue {
        /**
         * 关闭窗口
         */
        public onClose() {
            this.$emit('registerout');
        }
    }
</script>



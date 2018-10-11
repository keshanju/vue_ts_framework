<template>
    <div v-loading="isLoading" :element-loading-text="loadingMsg" class="register_container">
        <div class="left register_title">
            <p class="register_title_content">注</p>
            <p class="register_title_content">册</p>
        </div>
        <div class="left register_form">
            <div class="form_input">
                <input v-model="phone" type="text" class="phoneNum input" placeholder="请输入手机号">
            </div>
            <div :show="isimgVerification == 1" class="form_input display_none">
                <input v-model="imgCaptchaCode" type="text" class="verificatioCode input" placeholder="图形验证码">
                <div class="verificatioPic">
                    <img class="verificatioImg" :src="imgCaptchaM.img" alt="">
                </div>
            </div>
            <div class="form_input">
                <input type="text" class="countDownNum input" placeholder="验证码">
                <p class="getCountDownNum">
                    <span @click="onSmsCode" class="getMethod">短信获取</span>
                    <span>|</span>
                    <span @click="onVoiceCode" class="getMethod">语言获取</span>
                    <span v-show="smsCountDownNum > 0" class="display_none">({{smsCountDownNum}}s)</span>
                </p>
            </div>
            <div class="form_input">
                <input v-model="password" type="text" class="pwd input" placeholder="请输入密码(6-10位数字和字母)">
            </div>
            <div class="agreement clearfix">
                <div class="checkBox left">
                    <input type="checkbox" name="checkbox" id="agreement" value="同意用户协议" hidden/>
                    <label for="agreement" class="left"></label>
                    <span class="check_msg left">我已经阅读并同意</span>
                    <span class="red">《用户注册协议》</span>
                </div>
            </div>
            <button @click="clickRegister" class="form_btn">注册</button>
            <img @click="onClose" class="login_logo" src="../images/icon_login.png" alt="">
        </div>
        <img @click="onClose" src="../images/login_x.png" alt="" class="closeIcon">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {RegisterProxy} from "../../../ts/proxy/RegisterProxy";
    import GlobalConfig from "../global.config";

    @Component
    export default class Register extends RegisterProxy {

        constructor() {
            super();
            //
            this.setBaseUrl(GlobalConfig.getBaseUrl());
            GlobalConfig.log('注册log');
            this.init();
        }

        /**
         * 关闭窗口
         */
        public onClose() {
            this.$emit('registerout');
        }

        /**
         * 获取短信验证码
         */
        public onSmsCode() {
            //TODO...需要验证输入
            this.onGetSmscode(0,2);
        }

        /**
         * 获取语音
         */
        public onVoiceCode() {
            //TODO...需要验证输入
            this.onGetSmscode(1,2);
        }

        /**
         * 点击注册
         */
        public clickRegister() {
            //TODO...需要验证输入
            this.onPhoneRegister();
        }
    }
</script>



<template>
    <div class="register_container">
        <div class="left register_title">
            <p class="register_title_content">登</p>
            <p class="register_title_content">录</p>
        </div>
        <div class="left register_form">
            <div class="register_form_content">
                <div class="form_login_input">
                    <input type="text" class="phoneNum input" placeholder="请输入手机号">
                </div>
                <div class="form_login_input">
                    <input type="text" class="pwd input" placeholder="请输入密码(6-10位数字和字母)">
                </div>
                <div class="frogetPwd clearfix">
                    <div class="checkBox left">
                        <input type="checkbox" name="checkbox" id="remenberPwd" value="记住密码" hidden/>
                        <label for="remenberPwd" class="left"></label>
                        <span class="check_msg left">记住密码</span>
                    </div>
                    <span class="left froget">|</span>
                    <a href="#" class="left froget">忘记密码?</a>
                    <span class="right">没有账号?
                        <a href="#" class="red">立即注册</a>
                    </span>
                </div>
                <button class="form_btn login_btn">登录</button>
            </div>
            <!--第三方登录-->
            <div class="login_otherway">
                <div class="otherway_tit"><span>使用第三方登录登录</span></div>
                <div class="otherway_main">
                    <ul class="login_otherway_list flexBox">
                        <li class="login_otherway_li left"><a href="javascript:;"><i class="icon_qq"></i></a></li>
                        <li class="login_otherway_li left"><a href="javascript:;"><i class="icon_wechart"></i></a></li>
                        <li class="login_otherway_li left"><a href="javascript:;"><i class="icon_weibo"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="qrCode left">
            <img class="login_wechat" src="../images/code.png" alt="">
            <p class="normal_p qrCode_msg">关注二维码免费体验游戏加速</p>
        </div>
        <img @click="onClose" class="login_logo" src="../images/icon_login.png" alt="">
        <img @click="onClose" src="../images/login_x.png" alt="" class="closeIcon">
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Login extends Vue {
        /**
         * 关闭窗口
         */
        public onClose() {
            this.$emit('loginout');
        }
    }
</script>



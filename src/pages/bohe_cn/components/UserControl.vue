<template>
    <div>
        <div @click="loginin" class="left login">登录</div>
        <div @click="registerin" class="right register">注册</div>
    </div>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'vue-property-decorator';
import {RegisterProxy} from "../../../ts/proxy/RegisterProxy";
import GlobalConfig from "../global.config";

@Component
export default class UserControl extends RegisterProxy {

    constructor() {
        super();
        //
        this.setBaseUrl(GlobalConfig.getBaseUrl());
    }

    /**
     * 打开注册
     */
    public registerin() {
        this.$emit('registerin');
    }

    /**
     * 打开登录
     */
    public loginin() {
        this.$emit('loginin');
    }
}
</script>
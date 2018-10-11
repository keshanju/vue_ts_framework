<template>
    <div class="foot">
        客服热线：021-80270833 8：00-24：00（全年无休）&nbsp;&nbsp;沪ICP备18007431号-1 2016年-2036年 武汉BOHE网络科技有限公司版权所有 并保留所有权利业务 合作电话：021-51647026
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Foot extends Vue {
        @Prop() private msg!: string;
    }
</script>



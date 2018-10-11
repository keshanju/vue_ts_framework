import '../../assets/css/bohe_cn.css';

import Vue from 'vue';
import {Component} from "vue-property-decorator";
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Foot from './components/Foot.vue';
import Binding from './components/Binding.vue';
import FindPwd from './components/FindPwd.vue';
import HeadNav from './components/HeadNav.vue';
import UserControl from './components/UserControl.vue';


Vue.config.productionTip = false;

@Component({
    components: {
        Register,
        Login,
        Foot,
        Binding,
        'find-pwd': FindPwd,
        'head-nav': HeadNav,
        'user-control': UserControl
    },
})

class Download extends Vue {
    // 是否打开登录
    public isLoginIn = false;
    // 是否打开注册
    public isRegisterIn = false;

    /**
     * 打开登录
     */
    public loginIn() {
        this.isLoginIn = true;
    }

    /**
     * 关闭登录
     */
    public loginOut() {
        this.isLoginIn = false;
    }

    /**
     * 打开注册
     */
    public registerIn() {
        this.isRegisterIn = true;
    }

    /**
     * 关闭注册
     */
    public registerOut() {
        this.isRegisterIn = false;
    }
}

//
new Download().$mount('#app');

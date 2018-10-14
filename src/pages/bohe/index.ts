import '../../assets/less/bohe.less';
import Vue from 'vue';
import HeaderNav from './components/HeaderNav.vue';
import FooterNav from './components/FooterNav.vue';
import { Component } from "vue-property-decorator";
Vue.config.productionTip = false;
@Component({
    components: {
        'header-nav': HeaderNav,
        'footer-nav': FooterNav
    }
})
class Index extends Vue {

}
new Index().$mount('#app');

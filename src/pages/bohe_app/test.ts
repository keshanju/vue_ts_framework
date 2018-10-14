import 'vuetify/dist/vuetify.min.css';
import Vuetity from 'vuetify';
import Vue from 'vue';
Vue.use(Vuetity);
class Abb extends Vue {
    public drawer: boolean = true;
    public drawerRight: boolean = true;
    public right: null = null
    public left: null = null
    public source: string = ''
};
//
new Abb().$mount('#inspire');

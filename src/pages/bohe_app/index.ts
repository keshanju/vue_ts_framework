import 'vuetify/dist/vuetify.min.css';
import Vuetify from  'vuetify';
import Vue from 'vue';
import Component from 'vue-class-component';
// import Markup from ''
Vue.use(Vuetify);  
Vue.config.productionTip = false;
@Component({
    components: {

    }
})
class Test extends Vue {
    public items:Array<object> = []
};

//
new Test().$mount('#app');

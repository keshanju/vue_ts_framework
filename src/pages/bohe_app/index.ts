import 'vuetify/dist/vuetify.min.css';
import Vuetify from  'vuetify';
import Vue from 'vue';
import Component from 'vue-class-component';
Vue.use(Vuetify);
Vue.config.productionTip = false;
@Component({
  components: {}
})
class Test extends Vue {
  public items:Array<object> = []
  public source:String = ''
}
;

//
new Test().$mount('#app');

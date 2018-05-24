import Vue from 'vue';
import Vuex from 'vuex';



import topNav from './modules/topNav';
import getters from './getters';


Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    topNav
  },
  getters
});
 
export default store
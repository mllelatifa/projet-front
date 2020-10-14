import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// READ THE DOC !!!
// https://vuex.vuejs.org/fr/api/
// https://vuex.vuejs.org/fr/api/#modules

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    user: null
    
 
  },
  getters: {
    currentUser(state) { // recuperer l user du store
      return state.user;
    }
  },
  mutations: {
    setUser (state, user) {  //mettre a jour le store
      state.user = user;
    },
    setUserNull(state){
      state.user=null;
    }
  },

  actions : {
    signout(context){
      console.log("DEONNECTION : ")
      context.commit("setUserNull");
    }
  }
});
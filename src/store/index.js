import Vuex from 'vuex';
import exercices from './modules/exercices';
import VuexPersist from 'vuex-persist'

const vuexLocal = new VuexPersist({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  modules: {
    exercices,
  },
  plugins: [vuexLocal.plugin],
});

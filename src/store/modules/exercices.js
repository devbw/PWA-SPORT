const state = () => ({
  exercices: [],
})

const getters = {
  exercices: state => state.exercices,
}

const mutations = {
  REPLACE_EXERCICES: (state, exercices) => {
    state.exercices = exercices;
  },
}

const actions = {
  replaceExercices(store, exercices) {
    store.commit('REPLACE_EXERCICES', exercices);
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

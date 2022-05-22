import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog 1", blogCoverPhoto: "stock-1", blogDate: "May 1 2021" },
      { blogTitle: "Blog 2", blogCoverPhoto: "stock-2", blogDate: "May 3 2021" },
      { blogTitle: "Blog 3", blogCoverPhoto: "stock-3", blogDate: "May 7 2021" },
      { blogTitle: "Blog 4", blogCoverPhoto: "stock-4", blogDate: "May 9 2021" },
    ],
    editPost: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost)
    }
  },
  actions: {
  },
  modules: {
  }
})

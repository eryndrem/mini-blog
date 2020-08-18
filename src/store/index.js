import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        post: {
            name: '',
            title: '',
            shortDescription: '',
            text: '',
        },

        comments: [],
        comment: {
            username: '',
            text: '',
        },
    },

    mutations: {
        SET_POST_NAME(state, value) {
            state.post.name = value;
        },

        SET_POST_TITLE(state, value) {
            state.post.title = value;
        },

        SET_POST_SHORT_DESCRIPTION(state, value) {
            state.post.shortDescription = value;
        },

        SET_TEXT(state, value) {
            state.post.text = value;
        },

        ADD_POST(state) {
            state.posts.unshift({
                name: state.post.name,
                title: state.post.title,
                shortDescription: state.post.shortDescription,
                text: state.post.text,
            });
        },

        CLEAR_POST(state) {
            if (state.post) {
                Object.keys(state.post).forEach((key) => {
                    state.post[key] = '';
                });
            }
        },

        LOAD_DATA_FROM_STORAGE(state, posts) {
            for (let i = 0; i < posts.length; i += 1) {
                state.post.name = posts[i].name;
                state.post.title = posts[i].title;
                state.post.shortDescription = posts[i].shortDescription;
                state.post.text = posts[i].text;

                this.dispatch('addPost');
            }
        },
    },

    actions: {
        createPost({ commit }) {
            commit('ADD_POST');
            commit('CLEAR_POST');

            this.dispatch('addDataToStorage');
        },

        loadDataFromStorage({ commit }) {
            let posts = localStorage.getItem('posts');

            if (!posts) {
                posts = [];

                localStorage.setItem('posts', JSON.stringify(posts));
            } else {
                posts = JSON.parse(posts);

                console.log('localStorage posts = ', posts);

                commit('LOAD_DATA_FROM_STORAGE', posts);

                commit('CLEAR_POST');
            }
        },

        addPost({ commit }) {
            commit('ADD_POST');
        },

        addDataToStorage({ state }) {
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
    },
    modules: {
    },
});

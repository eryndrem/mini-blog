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
            date: '',
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

        ADD_POST(state, date) {
            state.posts.unshift({
                name: state.post.name,
                title: state.post.title,
                shortDescription: state.post.shortDescription,
                text: state.post.text,
                date,
            });

            console.log(state.posts);
        },

        CLEAR_POST(state) {
            if (state.post) {
                Object.keys(state.post).forEach((key) => {
                    state.post[key] = '';
                });
            }
        },

        LOAD_DATA_FROM_STORAGE(state, posts) {
            for (let i = posts.length - 1; i >= 0; i -= 1) {
                state.post.name = posts[i].name;
                state.post.title = posts[i].title;
                state.post.shortDescription = posts[i].shortDescription;
                state.post.text = posts[i].text;
                state.post.date = posts[i].date;

                this.dispatch('addPost', state.post.date);
            }
        },

        DELETE_POST(state, name) {
            for (let i = 0; i < state.posts.length; i += 1) {
                if (state.posts[i].name === name) {
                    state.posts.splice(state.posts[i], 1);
                }
            }
        },
    },

    actions: {
        createPost({ commit }, date) {
            commit('ADD_POST', date);
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

        addPost({ commit }, date) {
            commit('ADD_POST', date);
        },

        addDataToStorage({ state }) {
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },

        deletePost({ commit }, name) {
            let posts = localStorage.getItem('posts');

            posts = JSON.parse(posts);

            if (posts) {
                for (let i = 0; i < posts.length; i += 1) {
                    if (posts[i].name === name) {
                        posts.splice(posts[i], 1);
                    }
                }

                localStorage.setItem('posts', JSON.stringify(posts));
            }

            commit('DELETE_POST', name);
        },
    },
});

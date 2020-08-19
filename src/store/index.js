import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
    },

    mutations: {
        ADD_POST(state, post) {
            state.posts.unshift(post);
        },

        SET_POSTS(state, posts) {
            state.posts = posts;
        },

        SET_POST_COMMENTS(state, { post, comments }) {
            post.comments = comments;
        },

        DELETE_POST(state, name) {
            state.posts.splice(
                state.posts.findIndex((post) => post.name === name), 1,
            );
        },
    },

    actions: {
        /* Логика приложения */

        createPost({ commit, dispatch }, {
            name, title, shortDescription, text,
        }) {
            const post = {
                name,
                title,
                text,
                shortDescription,
                date: new Date().toLocaleString(),
                comments: [],
            };

            commit('ADD_POST', post);

            dispatch('saveDataToStorage');
        },

        deletePost({ commit, dispatch }, name) {
            commit('DELETE_POST', name);

            dispatch('saveDataToStorage');
        },

        getPostByName({ state }, name) {
            return state.posts.find((post) => post.name === name);
        },

        async addComment({ dispatch, commit }, { postName, username, text }) {
            const post = await dispatch('getPostByName', postName);

            const comments = [...post.comments];

            comments.unshift({ username, text });

            commit('SET_POST_COMMENTS', {
                post, comments,
            });

            dispatch('saveDataToStorage');
        },

        async deleteComment({ dispatch, commit }, { postName, username, text }) {
            const post = await dispatch('getPostByName', postName);

            const comments = [...post.comments];

            comments.splice(
                comments.findIndex(
                    (comment) => comment.username === username && comment.text === text,
                ),
                1,
            );

            commit('SET_POST_COMMENTS', {
                post, comments,
            });

            dispatch('saveDataToStorage');
        },

        /* Работа с localstorage */

        loadDataFromStorage({ commit }) {
            const serializedPosts = localStorage.getItem('posts');

            const posts = serializedPosts ? JSON.parse(serializedPosts) : [];

            commit('SET_POSTS', posts);

            if (!serializedPosts) {
                localStorage.setItem('posts', '[]');
            }
        },

        saveDataToStorage({ state }) {
            localStorage.setItem('posts', JSON.stringify(state.posts));
        },
    },
});

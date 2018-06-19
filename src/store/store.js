import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: [
            {
                username: 123456,
                password: 123456
            },
            {
                username: 'admin',
                password: 'admin'
            }
        ],
        getList: []
    },
    mutations: {//操作
        GET_INFO(state, payload) {
            state.age = payload
        },
        GET_QQ(state, payload) {
            state.qqNum = payload
        },
        GET_Classification(state, payload) {
            state.classification = payload
        },
        GET_List(state, payload) {
            state.getList = payload
        },
    },
    actions: {//触发
        getInfo({ commit }, data) {
            commit('GET_INFO', 121)
        },
        getQQ({ commit }, data) {
            commit('GET_QQ', data)
        },
        getClassification({ commit }) {
            this._vm.$fetch.post('/api/getClassification').then(res => {
                commit('GET_Classification', res)
            })
        },
        getList({ commit }) {
            // this._vm.$fetch.post('/api/get_list').then(res => {  //反向代理全部失效？？？
            //     commit('GET_List', res)//反向代理全部失效？？？
            //     console.log(res)//反向代理全部失效？？？
            // })
            this._vm.$fetch.get('http://localhost:9000/get_list').then(res => {
                commit('GET_List', res)
            })

        }
    }
})



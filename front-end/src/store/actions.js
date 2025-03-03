import axiosClient from "../views/axios";

export function login({commit}, data) {
    return axiosClient.post('/login', data)
      .then(({data}) => {
        console.log(data)
        commit('setUser', data.user);
        commit('setToken', data.token)
        return data;
      })
  }
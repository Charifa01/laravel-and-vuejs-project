<script setup>
    import AuthLayout from '../components/AuthLayout.vue';
    import router from '../router/index'
    import { ref } from 'vue';
    import store from '../store';
    // import axios from "axios";
    import axiosClient from "./axios";

    let loading = ref(false);
    let errorMsg = ref("");
    const user = {
    email: '',
    password: '',
    remember: false
}

function login() {
  loading.value = true;
  //axiosClient.post('/login', user)
  // let data = axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/login`, user)
   store.dispatch('login', user)
    .then(() => {
      loading.value = false;
      router.push({name: 'app.dashboard'})
    })
    .catch(({response}) => {
      console.log(response)
      loading.value = false;
      errorMsg.value = response.message;
    })
}





</script>
<template>
    <AuthLayout title="Sign in to your account"> 
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    
    <form class="space-y-6" method="POST" @submit.prevent="login">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div class="mt-2">
          <input type="email" name="email" id="email" autocomplete="email" required="" v-model="user.email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
          <div class="text-sm">
            <router-link :to="{name: 'requestPassword'}" class="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
          </router-link>
          </div>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required="" v-model="user.password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
      {{ ' ' }}
      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
    </AuthLayout>
      

  </template>
  
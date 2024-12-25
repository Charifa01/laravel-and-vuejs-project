<script setup>
import {ref, computed, onMounted, onUnmounted} from 'vue'
import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";
import store from "../store";

const {title} = defineProps({
  title: String
})
const sidebarOpened = ref(true);
const currentUser = computed(() => store.state.user.data);

function toggleSidebar() {
  sidebarOpened.value = !sidebarOpened.value
}

// :class="{'-ml-[200px]': !sidebarOpened}"
</script>
<template>
    <div class="min-h-full bg-gray-200 flex">
      <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
  
      <div class="flex-1">
        <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
        <main class="p-6">
          <router-view> hello </router-view>
        </main>
      </div>
    </div>

  </template>
  
 
  
  <style scoped>
  
  </style>
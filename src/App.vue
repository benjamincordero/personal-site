<script setup>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
</script>
<template>
  <div class="w-full mx-auto xl:my-4 gap-4 lg:w-11/12 2xl:w-5/6 grid xl:grid-cols-4">
    <div class="col-span-4 flex justify-center xl:justify-end">
      <navbar class="z-50 top-1" :init="true"/>
    </div>
    <div class="flex mt-4 sm:md-0 justify-center col-span-4 xl:col-span-1">
      <sidebar class="w-full xl:h-80 drop-shadow-2xl xl:w-1/6 xl:rounded-xl xl:fixed"/>
    </div>

    <div class="xl:rounded-xl md:mt-5 bg-gray-50 dark:bg-slate-800 drop-shadow-xl col-span-4 xl:col-span-3">
      <div class="relative p-4 md:mt-1 xl:px-8">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: { Sidebar, Navbar },
  };
</script>

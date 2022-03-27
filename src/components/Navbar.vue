<template>
  <nav class="fixed">
      <div class="flex px-4 py-2 text-white dark:text-gray-400 bg-blue-600 dark:bg-slate-800 rounded-br-3xl rounded-tr-lg rount rounded-bl-xl rounded-tl-3xl drop-shadow-lg text-md gap-4">
        <a @click="show_navbar = !show_navbar" class="hover:text-white" href="javascript:;">
          <i class="fa-solid " :class="[show_navbar ? 'fa-times' : 'fa-bars-staggered']"></i>
        </a>

        <Transition name="slide-fade">
          <div class="flex  gap-4" v-if="show_navbar">
            <router-link to="/" class="hover:text-yellow-500">Sobre mí</router-link>
            <router-link to="/skills" class="hover:text-yellow-500">Skills</router-link>
            <router-link to="/contact" class="hover:text-yellow-500">Contacto</router-link>
            <a href="javascript:;" class="hidden hover:text-yellow-500">Blog</a>
          </div>

        </Transition>
        <button @click="darkMode = !darkMode"><i class="fa-solid p-1 text-yellow-300 rounded-full" :class="[darkMode ? 'fa-sun bg-slate-700' : 'fa-moon bg-slate-900']"></i></button>
      </div>
  </nav>
</template>
<script>
  export default{
    props:['init'],
      data() {
      return{
        show_navbar:false,
        darkMode:false,
      }
    },
    watch:{
      darkMode: (val) => {
        if(val){
          document.documentElement.classList.add('dark')
          document.body.classList.add("dark");
        }else{
          document.documentElement.classList.remove('dark')
          document.body.classList.remove("dark");
        }
        localStorage.setItem('darkMode', val);
      }
    },
    created(){
      this.show_navbar = this.init
      if(localStorage.getItem('darkMode')){
        this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
      }
    }

  }
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
body{
  transition: background-color, 0.3s;
}
</style>

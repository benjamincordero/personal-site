<template>
  <nav class="fixed">
    <ul class="flex px-4 py-2 text-white dark:text-gray-400 bg-blue-600 dark:bg-slate-800 rounded-br-3xl rounded-tr-lg rount rounded-bl-xl rounded-tl-3xl drop-shadow-lg text-md gap-4">
        <a @click="show_navbar = !show_navbar" class="hover:text-white" href="javascript:;">
          <i class="fa-solid " :class="[show_navbar ? 'fa-times' : 'fa-bars-staggered']"></i>
        </a>
      <li :class="{'hidden':!show_navbar}">
        <router-link to="/" class="hover:text-yellow-500">Sobre mí</router-link>
      </li>
      <li :class="{'hidden':!show_navbar}">
        <router-link to="/skills" class="hover:text-yellow-500">Skills</router-link>
      </li>
      <li :class="{'hidden':!show_navbar}">
        <router-link to="/contact" class="hover:text-yellow-500">Contacto</router-link>
      </li>
      <li :class="{'hidden':!show_navbar}">
        <a href="javascript:;" class="hover:text-yellow-500">Blog</a>
      </li>
      <li><button @click="darkMode = !darkMode"><i class="fa-solid p-1 text-yellow-300 rounded-full" :class="[darkMode ? 'fa-sun bg-slate-700' : 'fa-moon bg-slate-900']"></i></button></li>
    </ul>
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
    methods:{
      onClickOutside(){
        const nav = document.querySelector('nav');
        let width = window.innerWidth;
        if (!nav || nav.contains(event.target) (width < 769)){
          return;
        }
        this.show_navbar = false;
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
    mounted(){
      document.addEventListener("click", this.onClickOutside);
    },
    created(){
      this.show_navbar = this.init
      if(localStorage.getItem('darkMode')){
        this.darkMode = JSON.parse(localStorage.getItem('darkMode'));
      }
    }

  }
</script>

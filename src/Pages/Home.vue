<template>
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">Sobre mí</h1>
    <p class="text-sm dark:text-gray-400 text-gray-700 border-b pb-8">
      Desarrollador web, con 7 años de experiencia trabajando para entes gubernamentales y empresas privadas. He desarrollado portales web informativos, aplicaciones a medida para distintas oficinas de administración, recursos humanos, etc.

      <br>
      <br>
       He desarrollado aplicaciones web especificas para pequeñas y medianas empresas, comunicaciones con apis externas, apis propias privadas y publicas, sitios web informativos y de contacto.  

      <br />
      <br />
      Soy proactivo, me gusta estar en constante aprendizaje, soy autodidacta, y me encanta desarrollar, diseñar, crear cosas nuevas.

      <br />
      <br />
      Como hobby me gusta entrenar calistenia, siempre me mantengo haciendo ejercicios. También me gusta leer para entretenerme sobre todo novelas de fantasía, también ver películas y series.</p>
  </div>
  <main-skills />
  <div class="flex justify-end">
    <router-link to="/skills" class="px-6 py-2 font-semibold text-gray-700 dark:text-gray-300  hover:text-blue-600 drop-shadow-lg rounded-xl">Ver más skills</router-link>
  </div>
  <experience/>
  <education/>
</template>
<script>
import MainSkills from "../components/Home/MainSkills.vue";
import Education from "../components/Home/Education.vue";
import Experience from "../components/Home/Experience.vue";

export default {
  components: { MainSkills, Experience, Education },
};
</script>

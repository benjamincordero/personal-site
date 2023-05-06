<template>
  <div class="mb-6">
    <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-300">About me</h1>
    <p class="text-sm dark:text-gray-400 text-gray-700 border-b pb-8">

      I am a web developer with over 7 years of experience working for both government entities and private
      companies.
      <br />
      <br />
      Throughout my career, I have had the opportunity to develop multiple projects, including informative web portals and
      customized applications for various administrative offices, human resources, and other areas.

      <br />
      My approach to work is based on creating customized solutions tailored to the specific needs of each client. I am
      passionate about the world of web development and enjoy learning new technologies and tools to improve my work and
      offer the best to my clients.

      <br />
      <br />
      My goal is to continue growing as a professional and offering innovative and high-quality solutions to my clients.
      If you need help with the development of your web project, do not hesitate to contact me. I will be happy to assist
      you.

      <br />
      <br />
      I have developed specific web applications for small and medium-sized businesses, communications with external APIs,
      private and public own APIs, informative and contact websites.

      As a proactive individual, I enjoy constantly learning, I am self-taught, and I love to develop, design, and create
      new things.

      <br />
      <br />
      As a hobby, I enjoy training calisthenics and always keep myself active by doing exercises. I also enjoy reading,
      especially fantasy novels, and watching movies and series for entertainment.
    </p>
  </div>
  <main-skills />
  <div class="flex justify-end">
    <router-link to="/skills"
      class="px-6 py-2 font-semibold text-gray-700 dark:text-gray-300  hover:text-blue-600 drop-shadow-lg rounded-xl">Ver
      más skills</router-link>
  </div>
  <experience />
  <education />
</template>
<script>
import MainSkills from "../components/Home/MainSkills.vue";
import Education from "../components/Home/Education.vue";
import Experience from "../components/Home/Experience.vue";

export default {
  components: { MainSkills, Experience, Education },
};
</script>

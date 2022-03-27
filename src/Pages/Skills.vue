<template>
  <div class="pb-5">
    <main-skills />

    <h1 class="mt-5 text-xl font-bold text-gray-700 dark:text-gray-300">Otras habilidades...</h1>
    <div class="mt-2 grid md:grid-cols-2 gap-2">

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            alt="mysql"
          />
        </div>
        <div>
          <h1 class="font-bold text-gray-700 text-md dark:text-gray-400 postgres">Postgres</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
           También he trabajado con Postgres en proyectos grandes, y me desenvuelvo sin ningún problema.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git">
        </div>
        <div>
          <h1 class="font-bold text-red-600 dark:text-gray-300 text-md">Git</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            Tengo buena experiencia usando git en equipos grandes, haciendo pull request y resolviendo conflictos.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" alt="jquery">
        </div>
        <div>
          <h1 class="font-bold text-indigo-700 dark:text-blue-400 text-md">jQuery</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            Muchos se olvidan de JQuery, pero aún hay gran cantidad que lo usan y los cuales necesitan mantenimiento también. Si tienes un proyecto con jQuery, estoy preparedo para el.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <i class="text-red-600 fa-brands fa-3x fa-html5"></i>
        </div>
        <div>
          <h1 class="font-bold text-red-600 dark:text-gray-300 text-md">HTML</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            Html es lo básico, pero no es solos colocar divs everywhere. Manejo buenas prácticas de SEO y de semántica HTML.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python">
        </div>
        <div>
          <h1 class="font-bold text-teal-700 dark:text-gray-300 text-md">Python</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
           En python no soy un experto, pero también he hecho pequeños trabajo en este lenguaje y conozco su sintáis.
          </p>
        </div>
      </div>
      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="django">
        </div>
        <div>
          <h1 class="font-bold text-green-900 dark:text-gray-300 text-md">Django</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            En Django es con el cual he practicado más mis habilidades en python desarrollando apis pequeñas.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="linux">
        </div>
        <div>
          <h1 class="font-bold text-indigo-900 dark:text-gray-300 text-md">Linux</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
           Para desarrollar me siento más cómodo usando Linux que windows. Y es el único sistema operativo que utilizo.
          </p>
        </div>
      </div>


      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker">
        </div>
        <div>
          <h1 class="font-bold text-gray-600 dark:text-gray-300 text-md">Docker</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            No soy un experto en Docker, pero trato de no molestar mucho a los SysAdmin, por lo tanto, he aprendido a resolver errores y configurar mis propios ambientes de desarrollo sin problemas.          
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss">
        </div>
        <div>
          <h1 class="font-bold text-teal-600 dark:text-gray-300 text-md">Tailwind</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            Si inspeccionaste este sitio te habrás dado cuenta de que la base del css es Tailwind. Me parece una librería que ayuda mucho para diseñar dejándote mucho control, y que no se parezca a otros.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="linux">
        </div>
        <div>
          <h1 class="font-bold text-blue-900 dark:text-gray-300 text-md">Bootstrap</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            Manejo Bootstrap sin problemas, usando grid, flex y sus demás características nuevas.
          </p>
        </div>
      </div>

      <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
        <div class="inline-flex items-center">
          <img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css">
        </div>
        <div>
          <h1 class="font-bold text-blue-600 dark:text-gray-300 text-md">CSS</h1>
          <p class="text-xs text-gray-600 dark:text-gray-300">
            También hago css sin ayuda de librerías. Layouts propios usando grid, flex, también aplico responsive desing en mis diseños, variables, etc.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import MainSkills from "../components/Home/MainSkills.vue";
export default {
  components: { MainSkills },
};
</script>

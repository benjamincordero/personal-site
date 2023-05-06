<template>
  <div class="pt-4 border-t px-1 md:px-0">
    <h1 class="text-xl font-semibold text-gray-700 dark:text-gray-300">Education</h1>
    <ol class="relative mt-4 border-l border-gray-200 dark:border-gray-700">
      <li class="mb-10 ml-6">
        <span
          class="absolute flex items-center justify-center w-6 h-6 p-3 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <i class="text-green-800 dark:text-green-600 fa-solid fa-user-graduate"></i>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-700 dark:text-white">
          System Engineer
          <a href="http://www.unefa.edu.ve/portal/" title="Universidad Nacional Experimental de la Fuerza Armada"
            target="_blank" class="text-blue-600 hover:text-blue-500">&nbsp;UNEFA</a>
          <span
            class="bg-blue-600 text-gray-50 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Graduated
          </span>
        </h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><i
            class="fa fa-calendar"></i>&nbsp;September 2010 - January 2016</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Our graduates have an entrepreneurial
          mindset, leadership skills, and the ability to work in teams to solve problems, with creative, critical, and
          reflective thinking. They are knowledgeable in the use of new technologies for self-education and as a tool for
          their professional development, and have intellectual skills to properly incorporate new
          knowledge.<br /><br />Our graduates are well-rounded professionals with a solid foundation in using mathematical
          models to design and simulate systems. They can plan, coordinate, develop, and control administrative systems
          within an organization, verifying and implementing controls and/or audit and information security routines.
        </p>
      </li>
    </ol>

  </div>
</template>
<script>
export default {
  name: 'Education'
}
</script>

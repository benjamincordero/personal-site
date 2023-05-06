<template>
  <h1 class="pt-1 pl-1 mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300  dark:border-t-0">
    My primary stack.
  </h1>
  <div class="grid md:grid-cols-2 gap-2">
    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <i class="text-blue-700 fa-3x dark:text-blue-500 fa-brands fa-php"></i>
      </div>
      <div>
        <h1 class="font-bold text-blue-700 dark:text-blue-500 text-md">PHP</h1>
        <p class="text-xs dark:text-gray-200 text-gray-600">
          I have experience in PHP backend programming, both with and without frameworks.
        </p>
      </div>
    </div>

    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <i class="fa-3x fa-brands fa-laravel laravel"></i>
      </div>
      <div>
        <h1 class="font-bold text-gray-700 text-md laravel">Laravel</h1>
        <p class="text-xs text-gray-600 dark:text-gray-200">
          I have developed various web applications, APIs, mailers, middleware, and other projects using the PHP artisan
          framework, Laravel.
        </p>
      </div>
    </div>

    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <i class="fa-3x fa-brands fa-js-square js"></i>
      </div>
      <div>
        <h1 class="font-bold text-gray-700 text-md js">Javascript</h1>
        <p class="text-xs text-gray-600 dark:text-gray-200">
          I am proficient in web programming languages, utilizing modern features and best practices to develop
          high-quality web applications.
        </p>
      </div>
    </div>

    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue" />
      </div>
      <div>
        <h1 class="font-bold text-gray-700 text-md vuejs">Vuejs</h1>
        <p class="text-xs text-gray-600 dark:text-gray-200">
          On the frontend side, Vue.js is my preferred choice due to its ease of development and seamless integration with
          other technologies.
        </p>
      </div>
    </div>

    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql" />
      </div>
      <div>
        <h1 class="font-bold text-gray-700 text-md mysql dark:text-teal-500">Mysql</h1>
        <p class="text-xs text-gray-600 dark:text-gray-200">
          I cannot consider myself a backend developer without knowledge of SQL. For its simplicity, compatibility, and
          support, I prefer to use MySQL in small-scale projects.
        </p>
      </div>
    </div>

    <div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4">
      <div class="inline-flex items-center">
        <img src="https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg" alt="neovim" />
      </div>
      <div>
        <h1 class="font-normal text-gray-700 text-md dark:text-green-600">Neo<span class="font-bold">vim</span></h1>
        <p class="text-xs text-gray-600 dark:text-gray-200">
          Yes, Neovim is just a tool, but it requires skill to use it effectively. Ever since I tried it, I have never
          looked back. It greatly simplifies my workflow by allowing me to use the keyboard exclusively.
          Take a look to my configuration <a href="https://github.com/benjamincordero/my-neovim-config"
            class="text-indigo-500 hover:text-indigo-400 hover:underline" target="_blank">
            in this repository.
          </a>


        </p>
      </div>
    </div>

  </div>
</template>

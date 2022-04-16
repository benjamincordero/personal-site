import{o as c,c as g,a as t,b as m,r as x,n as l,d,w as b,T as $,e as q,f as u,F as S,g as f,v,h as M,i as z,j as C,k as E}from"./vendor.9eceaa27.js";const L=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};L();var N="./assets/me.8e47b5c8.jpg",p=(r,a)=>{const n=r.__vccOpts||r;for(const[i,e]of a)n[i]=e;return n};const P={data(){return{profile_foto:N}}},A={class:"flex flex-col gap-3"},V={class:"flex justify-center"},T=["src"],D=m('<div class="mt-3"><p class="text-2xl text-center text-slate-900 dark:text-gray-50"> Benjam\xEDn <span class="font-bold dark:text-gray-400">Cordero</span></p></div><div class="text-center"><span class="px-4 py-2 text-xs text-gray-100 dark:bg-slate-800 dark:text-gray-300 bg-blue-600 rounded-full"><i class="fa-solid fa-user-graduate"></i>\xA0Ingeniero de Sistemas </span></div><div class="flex justify-center text-xl text-gray-600 dark:text-gray-400 gap-3"></div><div id="info" class="pt-2"><ul class="flex flex-wrap justify-center px-6 text-xs text-gray-600 dark:text-gray-400 xl:flex-col gap-3"><li><a href="https://twitter.com/webonada" class="hover:text-blue-500 text-sm" target="_blank"><i class="fa-brands fa-twitter"></i>\xA0@webonada</a></li><li><a href="https://github.com/benjamincordero" class="hover:text-gray-800 text-sm dark:hover:text-gray-500" target="_blank"><i class="fa-brands fa-github"></i>\xA0@benjamincordero</a></li><li><a href="https://www.instagram.com/benjamincordero/" class="hover:text-yellow-500 text-sm" target="_blank"><i class="fa-brands fa-instagram"></i>\xA0@benjamincordero</a></li><li><a href="https://www.linkedin.com/in/benjam%C3%ADn-josu%C3%A9-cordero-c%C3%A1rdenas-47a7b5ba/" class="hover:text-blue-800 text-sm" target="_blank"><i class="fa-brands fa-linkedin-in"></i>\xA0Linkedin</a></li><li><a href="https://t.me/benjamincordero" class="hover:text-teal-500 text-sm" target="_blank"><i class="fa-brands fa-telegram"></i>\xA0@benjamincordero</a></li></ul></div><div class="flex justify-center"><a href="/Benjam\xEDn_Cordero_CV.pdf" download class="px-4 py-2 my-5 text-center text-white bg-blue-600 xl:w-full rounded-xl drop-shadow-xl hover:bg-blue-500"><i class="fa fa-download"></i>\xA0Descargar CV </a></div>',5);function H(r,a,n,i,e,o){return c(),g("div",A,[t("div",V,[t("img",{class:"mt-6 xl:w-2/4 rounded-3xl drop-shadow-xl",src:e.profile_foto,alt:"profile_foto"},null,8,T)]),D])}var y=p(P,[["render",H]]);const I={props:["init"],data(){return{show_navbar:!1,darkMode:!1}},watch:{darkMode:r=>{r?(document.documentElement.classList.add("dark"),document.body.classList.add("dark")):(document.documentElement.classList.remove("dark"),document.body.classList.remove("dark")),localStorage.setItem("darkMode",r)}},created(){this.show_navbar=this.init,localStorage.getItem("darkMode")&&(this.darkMode=JSON.parse(localStorage.getItem("darkMode")))}},O={class:"fixed"},B={class:"flex px-4 py-2 text-white dark:text-gray-400 bg-blue-600 dark:bg-slate-800 rounded-br-3xl rounded-tr-lg rount rounded-bl-xl rounded-tl-3xl drop-shadow-lg text-md gap-4"},F={key:0,class:"flex gap-4"},U=u("Sobre m\xED"),K=u("Skills"),G=u("Contacto"),J=t("a",{href:"javascript:;",class:"hidden hover:text-yellow-500"},"Blog",-1);function Q(r,a,n,i,e,o){const s=x("router-link");return c(),g("nav",O,[t("div",B,[t("a",{onClick:a[0]||(a[0]=h=>e.show_navbar=!e.show_navbar),class:"hover:text-white",href:"javascript:;"},[t("i",{class:l(["fa-solid",[e.show_navbar?"fa-times":"fa-bars-staggered"]])},null,2)]),d($,{name:"slide-fade"},{default:b(()=>[e.show_navbar?(c(),g("div",F,[d(s,{to:"/",class:"hover:text-yellow-500"},{default:b(()=>[U]),_:1}),d(s,{to:"/skills",class:"hover:text-yellow-500"},{default:b(()=>[K]),_:1}),d(s,{to:"/contact",class:"hover:text-yellow-500 hidden"},{default:b(()=>[G]),_:1}),J])):q("",!0)]),_:1}),t("button",{onClick:a[1]||(a[1]=h=>e.darkMode=!e.darkMode)},[t("i",{class:l(["fa-solid p-1 text-yellow-300 rounded-full",[e.darkMode?"fa-sun bg-slate-700":"fa-moon bg-slate-900"]])},null,2)])])])}var _=p(I,[["render",Q]]);const W={class:"w-full mx-auto xl:py-4 gap-4 lg:w-11/12 2xl:w-5/6 grid xl:grid-cols-4"},R={class:"col-span-4 flex justify-center xl:justify-end"},Y={class:"flex mt-4 sm:md-0 justify-center col-span-4 xl:col-span-1"},X={class:"xl:rounded-xl transition-colors md:mt-5 bg-gray-50 dark:bg-slate-800 drop-shadow-xl col-span-4 xl:col-span-3"},Z={class:"relative p-4 md:mt-1 xl:px-8"},ee={components:{Sidebar:y,Navbar:_}},te=Object.assign(ee,{setup(r){return(a,n)=>{const i=x("router-view");return c(),g("div",W,[t("div",R,[d(_,{class:"z-50 top-1",init:!0})]),t("div",Y,[d(y,{class:"w-full xl:h-80 drop-shadow-2xl xl:w-1/6 xl:rounded-xl xl:fixed"})]),t("div",X,[t("div",Z,[d(i)])])])}}}),ae={},se=m('<h1 class="pt-1 pl-1 mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300 dark:border-t-0"> Mi Stack Principal </h1><div class="grid md:grid-cols-2 gap-2"><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><i class="text-blue-700 fa-3x dark:text-blue-500 fa-brands fa-php"></i></div><div><h1 class="font-bold text-blue-700 dark:text-blue-500 text-md">PHP</h1><p class="text-xs dark:text-gray-200 text-gray-600"> Tengo experiencia en el lenguaje de programaci\xF3n backend php, tanto con frameworks como sin ellos. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><i class="fa-3x fa-brands fa-laravel laravel"></i></div><div><h1 class="font-bold text-gray-700 text-md laravel">Laravel</h1><p class="text-xs text-gray-600 dark:text-gray-200"> He desarrollado aplicaciones web, apis, mailers, intermediarios, entre otros, usando el framework de php para artesanos, Laravel. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><i class="fa-3x fa-brands fa-js-square js"></i></div><div><h1 class="font-bold text-gray-700 text-md js">Javascript</h1><p class="text-xs text-gray-600 dark:text-gray-200"> Manejo el lenguaje de programaci\xF3n de la web, usando sus modernas caracter\xEDsticas y buenas pr\xE1cticas. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue"></div><div><h1 class="font-bold text-gray-700 text-md vuejs">Vuejs</h1><p class="text-xs text-gray-600 dark:text-gray-200"> Del lado del frontend vuejs es mi elecci\xF3n preferida por su facilidad de desarrollo y su f\xE1cil integraci\xF3n con otras tecnolog\xEDas. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" alt="mysql"></div><div><h1 class="font-bold text-gray-700 text-md mysql dark:text-teal-500">Mysql</h1><p class="text-xs text-gray-600 dark:text-gray-200"> No puedo decir que soy backend sin saber SQL. Por su sencillez, compatibilidad y soporte prefiero usar Mysql en proyectos peque\xF1os. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/neovimio/neovimio-icon.svg" alt="neovim"></div><div><h1 class="font-normal text-gray-700 text-md dark:text-green-600">Neo<span class="font-bold">vim</span></h1><p class="text-xs text-gray-600 dark:text-gray-200"> S\xED, neovim es una herramienta simplemente, pero que requiere de habilidad manejarlo. Desde que lo prob\xE9 nunca lo dej\xE9, me facilita mucho el flujo de trabajo usando solo el teclado. </p></div></div></div>',2);function oe(r,a){return se}var k=p(ae,[["render",oe]]);const re={name:"Education"},le={class:"pt-4 border-t px-1 md:px-0"},ie=m('<h1 class="text-xl font-semibold text-gray-700 dark:text-gray-300">Educaci\xF3n</h1><ol class="relative mt-4 border-l border-gray-200 dark:border-gray-700"><li class="mb-10 ml-6"><span class="absolute flex items-center justify-center w-6 h-6 p-3 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><i class="text-green-800 dark:text-green-600 fa-solid fa-user-graduate"></i></span><h3 class="flex items-center mb-1 text-lg font-semibold text-gray-700 dark:text-white"> Ingenier\xEDa de Sistemas <a href="http://www.unefa.edu.ve/portal/" title="Universidad Nacional Experimental de la Fuerza Armada" target="_blank" class="text-blue-600 hover:text-blue-500">\xA0UNEFA</a><span class="bg-blue-600 text-gray-50 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Graduado</span></h3><time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><i class="fa fa-calendar"></i>\xA0Septiembre 2010 - Junio 2016</time><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Egresados con capacidad emprendedora, de liderazgo, de trabajo en equipo para la resoluci\xF3n de problemas, con pensamiento creativo, cr\xEDtico, reflexivo; con conocimientos en el uso de nuevas tecnolog\xEDas para su autoformaci\xF3n y como herramienta en su desarrollo profesional y con habilidades intelectuales para incorporar adecuadamente nuevos conocimientos. <br><br> Profesionales integrales, con s\xF3lidos conocimientos b\xE1sicos al utilizar modelos matem\xE1ticos para aplicarlos al dise\xF1o y simulaci\xF3n de sistemas. Asimismo planificar, coordinar, desarrollar y controlar sistemas administrativos dentro de una organizaci\xF3n, verificando e instrumentando controles y/o rutinas de auditor\xEDa y seguridad de Inform\xE1tica.</p></li></ol>',2),ne=[ie];function de(r,a,n,i,e,o){return c(),g("div",le,ne)}var ce=p(re,[["render",de]]);const ge={},ue={class:"pt-4 px-1 md:px-0 border-t"},pe=m('<h1 class="text-xl font-semibold text-gray-700 dark:text-gray-300">Experiencia</h1><ol class="relative mt-4 border-l border-gray-200 dark:border-gray-700"><li class="mb-10 ml-6"><span class="absolute flex items-center justify-center w-6 h-6 p-3 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><i class="text-blue-700 dark:text-blue-400 fa-solid fa-briefcase"></i></span><h3 class="flex items-center mb-1 text-lg font-semibold text-gray-700 dark:text-white"> Ingeniero de Software en <a href="https://www.agence.global/" target="_blank" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300">\xA0Agence</a><span class="bg-yellow-600 text-gray-50 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Actual</span></h3><time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><i class="fa fa-calendar"></i>\xA0Noviembre 2018 - Actualidad</time><p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Desarrollo de aplicaciones y p\xE1ginas web para empresas y particulares, cubriendo todas las fases del desarrollo desde el prototipo hasta el despliegue y posterior mantenimiento.</p></li><li class="mb-10 ml-6"><span class="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"><i class="text-blue-700 fa-solid dark:text-blue-400 fa-briefcase"></i></span><h3 class="mb-1 text-lg font-semibold text-gray-700 dark:text-white">Especialista en Lenguaje de Programaci\xF3n en <a href="http://portal.falcon.gob.ve/" target="_blank" class="text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:text-blue-500">Gobernaci\xF3n del estado Falc\xF3n</a></h3><time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"><i class="fa-solid fa-calendar"></i> Enero 2015 - Noviembre 2018 </time><p class="text-base font-normal text-gray-500 dark:text-gray-400">Desarrollo de aplicaciones y p\xE1ginas web para la administraci\xF3n p\xFAblica, sistemas administrativos, de gesti\xF3n de documentos, contadur\xEDa, portales de informaci\xF3n, sistemas de monitoreo, entre otros. Cubriendo todas las fases descubriendo todas las fases del desarrollo desde el prototipo hasta el despliegue y posterior mantenimiento.</p></li></ol>',2),xe=[pe];function me(r,a,n,i,e,o){return c(),g("div",ue,xe)}var be=p(ge,[["render",me]]);const fe={components:{MainSkills:k,Experience:be,Education:ce}},ve=t("div",{class:"mb-6"},[t("h1",{class:"text-2xl font-semibold text-gray-700 dark:text-gray-300"},"Sobre m\xED"),t("p",{class:"text-sm dark:text-gray-400 text-gray-700 border-b pb-8"},[u(" Desarrollador web, con 7 a\xF1os de experiencia trabajando para entes gubernamentales y empresas privadas. He desarrollado portales web informativos, aplicaciones a medida para distintas oficinas de administraci\xF3n, recursos humanos, etc. "),t("br"),t("br"),u(" He desarrollado aplicaciones web especificas para peque\xF1as y medianas empresas, comunicaciones con apis externas, apis propias privadas y publicas, sitios web informativos y de contacto. "),t("br"),t("br"),u(" Soy proactivo, me gusta estar en constante aprendizaje, soy autodidacta, y me encanta desarrollar, dise\xF1ar, crear cosas nuevas. "),t("br"),t("br"),u(" Como hobby me gusta entrenar calistenia, siempre me mantengo haciendo ejercicios. Tambi\xE9n me gusta leer para entretenerme sobre todo novelas de fantas\xEDa, tambi\xE9n ver pel\xEDculas y series.")])],-1),he={class:"flex justify-end"},ye=u("Ver m\xE1s skills");function _e(r,a,n,i,e,o){const s=x("main-skills"),h=x("router-link"),w=x("experience"),j=x("education");return c(),g(S,null,[ve,d(s),t("div",he,[d(h,{to:"/skills",class:"px-6 py-2 font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 drop-shadow-lg rounded-xl"},{default:b(()=>[ye]),_:1})]),d(w),d(j)],64)}var ke=p(fe,[["render",_e]]);const we={name:"Contact",data(){return{fullname:"",email:"",message:"",asunto:"",fullname_validate:!1,email_validate:!1,subject_validate:!1,error:[]}},methods:{validate(){this.email_validate=!1,this.fullname_validate=!1,this.message_validate=!1,this.subject_validate=!1;let r=!0;return this.fullname||(this.fullname_validate=!0,r=!1),this.email||(this.email_validate=!0,r=!1),this.message||(this.message_validate=!0,r=!1),this.subject||(this.subject_validate=!0,r=!1),r},sendMail(){console.log(this.validate())}}},je={class:"lg:px-2"},$e=t("h1",{class:"mt-1 text-xl font-bold text-gray-700 dark:text-gray-300"},"Contacto",-1),qe=t("p",{class:"mb-4 text-sm text-gray-600 dark:text-gray-300"},[u("Ah\xED est\xE1n mis redes sociales pero preferir\xEDa que me contactaras por telegram o esta v\xEDa "),t("i",{class:"fa-solid text-blue-600 text-xl dark:text-green-500 fa-face-smile-beam"})],-1),Se={class:"flex flex-wrap"},Me={class:"w-full lg:pr-1 lg:w-1/2"},ze={class:"w-full lg:pl-1 lg:w-1/2"},Ce={class:"mt-8"},Ee={class:"mt-8"},Le=t("div",{class:"flex justify-end mt-8 mb-4"},[t("button",{type:"submit",class:"px-4 py-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:shadow-outline"}," Enviar ")],-1);function Ne(r,a,n,i,e,o){return c(),g("div",je,[$e,qe,t("form",{onSubmit:a[8]||(a[8]=M((...s)=>o.sendMail&&o.sendMail(...s),["prevent"]))},[t("div",Se,[t("div",Me,[t("span",{class:l(["text-sm font-bold text-gray-600 dark:text-gray-300 uppercase",[e.fullname_validate?"text-red-500":""]])},"Nombre",2),f(t("input",{class:l(["w-full p-3 mt-2 text-gray-900 dark:bg-blue-200 bg-gray-200 rounded-lg focus:bg-gray-300 focus:outline-none focus:shadow-outline",[e.fullname_validate?"bg-red-200":""]]),type:"text",onKeyup:a[0]||(a[0]=(...s)=>o.validate&&o.validate(...s)),placeholder:"Nombre","onUpdate:modelValue":a[1]||(a[1]=s=>e.fullname=s)},null,34),[[v,e.fullname]]),t("span",{class:l(["mt-1 text-sm text-red-500",[e.fullname_validate?"block":"hidden"]])},"Este campo es requerido",2)]),t("div",ze,[t("span",{class:l(["text-sm font-bold dark:text-gray-300 text-gray-600 uppercase",[e.email_validate?"text-red-500":""]])},"Correo",2),f(t("input",{class:l(["w-full p-3 mt-2 text-gray-900 dark:bg-blue-200 bg-gray-200 rounded-lg focus:bg-gray-300 focus:outline-none focus:shadow-outline",[e.email_validate?"bg-red-200":""]]),type:"email",onKeyup:a[2]||(a[2]=(...s)=>o.validate&&o.validate(...s)),placeholder:"Correo","onUpdate:modelValue":a[3]||(a[3]=s=>e.email=s)},null,34),[[v,e.email]]),t("span",{class:l(["mt-1 text-sm text-red-500",[e.email_validate?"block":"hidden"]])},"Este campo es requerido",2)])]),t("div",Ce,[t("span",{class:l(["text-sm font-bold text-gray-600 dark:text-gray-300 uppercase",[e.subject_validate?"text-red-500":""]])},"Asunto",2),f(t("input",{class:l(["w-full p-3 mt-2 text-gray-900 bg-gray-200 dark:bg-blue-200 rounded-lg focus:bg-gray-300 focus:outline-none focus:shadow-outline",[e.subject_validate?"bg-red-200":""]]),type:"text",onKeyup:a[4]||(a[4]=(...s)=>o.validate&&o.validate(...s)),placeholder:"Asunto","onUpdate:modelValue":a[5]||(a[5]=s=>r.subject=s)},null,34),[[v,r.subject]]),t("span",{class:l(["mt-1 text-sm text-red-500",[e.subject_validate?"block":"hidden"]])},"Este campo es requerido",2)]),t("div",Ee,[t("span",{class:l(["text-sm font-bold text-gray-600 dark:text-gray-300 uppercase",[r.message_validate?"text-red-500":""]])},"Mensaje",2),f(t("textarea",{class:l(["w-full h-32 p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg dark:bg-blue-200 focus:bg-gray-300 focus:outline-none focus:shadow-outline",[r.message_validate?"bg-red-200":""]]),"onUpdate:modelValue":a[6]||(a[6]=s=>e.message=s),onKeyup:a[7]||(a[7]=(...s)=>o.validate&&o.validate(...s)),placeholder:"Su mensaje"},null,34),[[v,e.message]]),t("span",{class:l(["mt-1 text-sm text-red-500",[r.message_validate?"block":"hidden"]])},"Este campo es requerido",2)]),Le],32)])}var Pe=p(we,[["render",Ne]]);const Ae={components:{MainSkills:k}},Ve={class:"pb-5"},Te=m('<h1 class="mt-5 text-xl font-bold text-gray-700 dark:text-gray-300">Otras habilidades...</h1><div class="mt-2 grid md:grid-cols-2 gap-2"><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg" alt="mysql"></div><div><h1 class="font-bold text-gray-700 text-md dark:text-gray-400 postgres">Postgres</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Tambi\xE9n he trabajado con Postgres en proyectos grandes, y me desenvuelvo sin ning\xFAn problema. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git"></div><div><h1 class="font-bold text-red-600 dark:text-gray-300 text-md">Git</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Tengo buena experiencia usando git en equipos grandes, haciendo pull request y resolviendo conflictos. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/jquery/jquery-icon.svg" alt="jquery"></div><div><h1 class="font-bold text-indigo-700 dark:text-blue-400 text-md">jQuery</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Muchos se olvidan de JQuery, pero a\xFAn hay gran cantidad que lo usan y los cuales necesitan mantenimiento tambi\xE9n. Si tienes un proyecto con jQuery, estoy preparedo para el. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><i class="text-red-600 fa-brands fa-3x fa-html5"></i></div><div><h1 class="font-bold text-red-600 dark:text-gray-300 text-md">HTML</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Html es lo b\xE1sico, pero no es solos colocar divs everywhere. Manejo buenas pr\xE1cticas de SEO y de sem\xE1ntica HTML. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python"></div><div><h1 class="font-bold text-teal-700 dark:text-gray-300 text-md">Python</h1><p class="text-xs text-gray-600 dark:text-gray-300"> En python no soy un experto, pero tambi\xE9n he hecho peque\xF1os trabajo en este lenguaje y conozco su sint\xE1is. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg" alt="django"></div><div><h1 class="font-bold text-green-900 dark:text-gray-300 text-md">Django</h1><p class="text-xs text-gray-600 dark:text-gray-300"> En Django es con el cual he practicado m\xE1s mis habilidades en python desarrollando apis peque\xF1as. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg" alt="linux"></div><div><h1 class="font-bold text-indigo-900 dark:text-gray-300 text-md">Linux</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Para desarrollar me siento m\xE1s c\xF3modo usando Linux que windows. Y es el \xFAnico sistema operativo que utilizo. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker"></div><div><h1 class="font-bold text-gray-600 dark:text-gray-300 text-md">Docker</h1><p class="text-xs text-gray-600 dark:text-gray-300"> No soy un experto en Docker, pero trato de no molestar mucho a los SysAdmin, por lo tanto, he aprendido a resolver errores y configurar mis propios ambientes de desarrollo sin problemas. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwindcss"></div><div><h1 class="font-bold text-teal-600 dark:text-gray-300 text-md">Tailwind</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Si inspeccionaste este sitio te habr\xE1s dado cuenta de que la base del css es Tailwind. Me parece una librer\xEDa que ayuda mucho para dise\xF1ar dej\xE1ndote mucho control, y que no se parezca a otros. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg" alt="linux"></div><div><h1 class="font-bold text-blue-900 dark:text-gray-300 text-md">Bootstrap</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Manejo Bootstrap sin problemas, usando grid, flex y sus dem\xE1s caracter\xEDsticas nuevas. </p></div></div><div class="flex p-4 bg-blue-100 hover:bg-gray-200 dark:bg-slate-900 rounded-xl gap-4"><div class="inline-flex items-center"><img src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg" alt="css"></div><div><h1 class="font-bold text-blue-600 dark:text-gray-300 text-md">CSS</h1><p class="text-xs text-gray-600 dark:text-gray-300"> Tambi\xE9n hago css sin ayuda de librer\xEDas. Layouts propios usando grid, flex, tambi\xE9n aplico responsive desing en mis dise\xF1os, variables, etc. </p></div></div></div>',2);function De(r,a,n,i,e,o){const s=x("main-skills");return c(),g("div",Ve,[d(s),Te])}var He=p(Ae,[["render",De]]);const Ie={},Oe={class:"mt-4"},Be=m('<h1 class="text-2xl font-semibold text-gray-700">Portfolio</h1><p class="text-sm text-gray-700"> Lamentablemente muchos de los sitemas que he desarrollado son privados y no puedo exponerlos aqui, de hecho muchos no est\xE1n en internet porque funcionan en servidores privados. Pero aqui te colocar\xE9 algunos. <br> Igualmente este sitio est\xE1 completamente hechor por mi, tanto el front como el backend, y en mi <a href="https://github.com/benjamincordero" class="font-bold text-blue-500 hover:text-blue-700" target="_blank">Github</a> puedes encontrar algunos codigos que he realizado. <div class="my-4 grid md:grid-cols-2 gap-2"><div class="flex flex-col p-4 bg-red-100 hover:bg-gray-200 rounded-xl gap-4"><h1 class="font-bold text-gray-700"><a href="https://carpai.com.ve" class="font-bold text-blue-500 hover:text-blue-700" target="_blank">Carpai VE</a></h1><p class="text-sm text-gray-600">Sitio Web para Venezuela de Carpai, especialistas en respuestos para trituradores de piedra.</p></div></div></p>',2),Fe=[Be];function Ue(r,a){return c(),g("div",Oe,Fe)}var Ke=p(Ie,[["render",Ue]]);const Ge=[{path:"/",name:"Home",component:ke},{path:"/contact",name:"Contact",component:Pe},{path:"/skills",name:"Skills",component:He},{path:"/portfolio",name:"Portfolio",component:Ke}],Je=z({history:C(),routes:Ge});E(te).use(Je).mount("#app");

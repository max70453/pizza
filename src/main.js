// Это файл main.js. Импортируйте сюда глобальные CSS и скрипты.
// Здесь можно использовать клиентский API. Узнать больше: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

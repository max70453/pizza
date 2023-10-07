// Это файл main.js. Импортируйте сюда глобальные CSS и скрипты.
// Здесь можно использовать клиентский API. Узнать больше: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import '~/assets/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faVolumeXmark } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import { faCompress } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faVolumeHigh, faVolumeXmark, faPlay, faPause, faExpand, faCompress)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('font-awesome-icon', FontAwesomeIcon);
  Vue.component('Layout', DefaultLayout);
}

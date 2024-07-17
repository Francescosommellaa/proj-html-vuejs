<script>
import Home from '../Pages/Home.vue';
import NotFound from '../Pages/NotFound.vue';
import OurTeam from '../Pages/OurTeam.vue';
import WhatWeOffer from '../Pages/WhatWeOffer.vue';
import { store } from '../store';


export default {
  name: 'AppHeader',
  components: {
    Home,
    OurTeam,
    WhatWeOffer,
    NotFound,
  },
  data() {
    return {
      store,
    }
  },
  
}



</script>

<template>

  <nav class="navbar navbar-expand">
    <img src="../../public/logo-sidearea-1-1.png" alt="Logo Marèe">
    <div>
      <ul>
          <li>
              <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
              <router-link :to="{ name: 'OurTeam' }">OurTeam</router-link>
          </li>
          <li>
              <router-link :to="{ name: 'WhatWeOffer' }">WhatWeOffer</router-link>
          </li>
        </ul>
    </div>
  </nav>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>

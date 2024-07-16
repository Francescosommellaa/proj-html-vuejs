<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import Home from './Pages/Home.vue';
import NotFound from './Pages/NotFound.vue';
import OurTeam from './Pages/OurTeam.vue';
import WhatWeOffer from './Pages/WhatWeOffer.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
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
  <div class="container">
    <AppHeader />
    <route-view></route-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppWorkingProcess from './components/AppWorkingProcess.vue';
import AppCarosel from './components/AppCarosel.vue';
import AppWorkContacts from './components/AppWorkContacts.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppCarosel,
    AppWorkingProcess,
    AppWorkContacts,

  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <!-- <AppCarosel /> -->
  <AppHeader />
  <router-view></router-view>
  
   
  <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss';
</style>

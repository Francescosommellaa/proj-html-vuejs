<script>



import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,


  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppCarosel />
  <AppHeader />
  <router-view></router-view>
  <AppFooter />

</template>

<style lang="scss">
@use './styles/general.scss';
</style>

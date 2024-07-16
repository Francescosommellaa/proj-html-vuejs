<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <AppHeader />
  <route-view></route-view>
  <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

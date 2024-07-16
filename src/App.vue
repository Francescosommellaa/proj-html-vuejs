<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>

  <route-view></route-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

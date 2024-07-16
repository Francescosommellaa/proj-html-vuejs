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
  <div class="container">
    <route-view></route-view>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

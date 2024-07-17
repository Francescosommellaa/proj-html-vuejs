<script>
import { store } from '../store'
export default {
  name: 'AppFooter',
  data() {
    return {
      store,
    }
  },
}



</script>

<template>

  <div class="row ms-bg">
    <div class="col3">
      <img src="../../public/logo-sidearea-1-1.png" alt="">
    </div>
    <div class="col3"></div>
    <div class="col3"></div>
    <div class="col3"></div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles';

.ms-bg {
  background-color: $backgroud-color8;
}
</style>

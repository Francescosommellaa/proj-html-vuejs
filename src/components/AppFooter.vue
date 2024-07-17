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
    <div class="col-3">
      <img src="../../public/logo-sidearea-1.png" alt="logo footer">
      <h6>Let's Get Creative</h6>
    </div>
    <div class="col-3">
      <ul class="d-flex flex-column">
        <li class="ms-listlink ms-underline-fc3">maree@qodeinteractive.com</li>
        <li class="ms-listlink ms-underline-fc3">+44645 321 789</li>
      </ul>
    </div>
    <div class="col-3">
      <ul class="d-flex flex-column">
        <li class="ms-listlink ms-underline-fc3">Avenue d'Audeghem 10</li>
        <li class="ms-listlink ms-underline-fc3">1040 Brusless, Belgium</li>
      </ul>
    </div>
    <div class="col-3">
      <span>Stay in tuch with us</span>
      <div>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-pinterest-p"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-linkedin-in"></i>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/variabiles' as *;

.ms-bg {
  background-color: $backgroud-color8;
  padding: 6em 2em;
  font-size: 18px;
}
</style>

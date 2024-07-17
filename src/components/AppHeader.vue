<script>

export default {
  name: 'AppHeader',

}

</script>

<template>

  <nav class="navbar">
    <img src="../../public/logo-sidearea-1-1.png" alt="Logo Marèe">
    <div class="d-flex align-items-center ">
      <div>
        <ul class="d-flex align-items-center">
          <li class="ms-listlink ms-underline-fc3">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              Home
            </router-link>
          </li>
          <li class="ms-listlink ms-underline-fc1">
            <router-link :to="{ name: 'OurTeam' }" class="nav-link">
              OurTeam
            </router-link>
          </li>
          <li class="ms-listlink ms-underline-fc2">
            <router-link :to="{ name: 'WhatWeOffer' }" class="nav-link">
              WhatWeOffer
            </router-link>
          </li>
        </ul>
      </div>
      <img class="menu-header" src="../../public/svg/svg-1.svg" alt="Logo Marèe">
    </div>
  </nav>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.d-flex {
  gap: 2em;
  height: 60px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;

  .menu-header {
    height: 24px;
    width: 24px;
  }
}
</style>

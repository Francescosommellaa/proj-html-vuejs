<script>

export default {
  name: 'AppHeader',

}



</script>

<template>

  <nav class="navbar navbar-expand">
    <img src="../../public/logo-sidearea-1-1.png" alt="Logo Marèe">
    <div>
      <ul>
        <li>
          <router-link :to="{ name: 'Home' }" class="nav-link">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OurTeam' }" class="nav-link">
            OurTeam
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'WhatWeOffer' }" class="nav-link">
            WhatWeOffer
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>

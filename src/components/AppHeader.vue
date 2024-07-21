<script>
import AppSideBar from "./AppSideBar.vue";
import { store } from "../store";
import AppNavDrop from "./AppNavDrop.vue";

export default {
  name: "AppHeader",
  components: {
    AppSideBar,
    AppNavDrop,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <nav class="navbar">
    <router-link :to="{ name: 'Home' }" class="nav-link">
      <img id="anchor" class="logo-header hover-arrow-area" src="../../public/logo-sidearea-1-1.png" alt="Logo Marèe" />
    </router-link>
    <div class="d-flex align-items-center">
      <AppNavDrop />
      <img class="menu-header hover-big-area " src="../../public/svg/svg-1.svg" alt="Logo Marèe" type="button"
        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" />
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <button type="button" class="btn-close " data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <AppSideBar />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.d-flex {
  gap: 2em;
  height: 60px;
  margin: 0;
  font-size: 18px;
  font-weight: 700;

  .menu-header {
    height: 24px;
    width: 24px;
    margin-right: 4em;
  }
}
</style>

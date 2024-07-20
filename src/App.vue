<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppWorkingProcess from "./components/AppWorkingProcess.vue";
import AppCarosel from "./components/AppCarosel.vue";
import AppWorkContacts from "./components/AppWorkContacts.vue";
import { store } from "./store";
import AppProgres from "./components/AppProgres.vue";
import AppCardOffer from "./components/AppCardOffert.vue";
import AppSideBar from "./components/AppSideBar.vue";
import AppSideNav from "./components/AppSideNav.vue";
import AppNavDrop from "./components/AppNavDrop.vue";




export default {
  name: "App",
  components: {
    AppHeader,
    AppCarosel,
    AppWorkingProcess,
    AppWorkContacts,
    AppProgres,
    AppCardOffer,
    AppFooter,
    AppSideBar,
    AppSideNav,
    AppNavDrop
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>

  <div class="container-fluid">
    <!--  <AppNavDrop /> -->
    <AppSideNav />
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/variabiles" as *;
</style>

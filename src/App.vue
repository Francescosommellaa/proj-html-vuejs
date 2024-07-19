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

    <div class="position">
      <AppSideNav />
    </div>

    <AppHeader />
    <router-view></router-view>

    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/variabiles" as *;
// :root{

// cursor: url('../public/icons8-cursore-67.png'),auto;
// --cursor-size: 2px;
// }

.position {
  position: absolute;
  top: 0;
  width: 100vh;
  height: 100vh;
  
}
</style>

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
  methods: {
    /*     cursor() {
          // Rimuovi 'DOMContentLoaded' in quanto non necessario in un componente Vue montato
          const cursor = document.getElementById('puntatore-container');
          const cursorDot = cursor.querySelector('.puntatore');
    
          // Aggiorna la posizione del cursore
          document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX - 6}px`;
            cursor.style.top = `${e.clientY - 3}px`;
          });
    
          // Aggiungi classi in base all'hover sugli elementi desiderati
          document.querySelectorAll('.hover-area').forEach(el => {
            el.addEventListener('mouseenter', () => {
              cursor.classList.add('general-hover');
            });
            el.addEventListener('mouseleave', () => {
              cursor.classList.remove('general-hover');
            });
          });
        } */
  },
  mounted() {
    store.cursor();
  }
};
</script>

<template>
  <div class="container-fluid">
    <div id="puntatore-container">
      <div class="puntatore"></div>
    </div>
    <AppSideNav />
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/variabiles" as *;


html,
body,
* {
  cursor: none !important;
}

#puntatore-container {
  position: fixed;
  top: -3px;
  left: -6px;
  pointer-events: none;
  z-index: 9999999;
  mix-blend-mode: unset;
  display: block;
  width: 12px;
  height: 12px;
  visibility: visible
}

#puntatore-container .puntatore {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  outline: transparent solid 1px;
  background-color: $backgroud-color8;
  transition: .3s
}

#puntatore-container.general-hover .puntatore {
  transform: scale(1.5);
  background-color: $text-colors2
}

#puntatore-container.big-hover .puntatore {
  transform: scale(2.5);
  background-color: $text-colors2
}

#puntatore-container.big-hover {
  mix-blend-mode: darken
}

#puntatore-container.arrow-hover .puntatore {
  transform: scale(3);
  background-color: $backgroud-color8
}

#puntatore-container.arrow-hover {
  mix-blend-mode: color;
}

#puntatore-container.footer-hover .puntatore {
  background-color: $text-colors1
}

#puntatore-container.footer-text-hover .puntatore {
  transform: scale(1.5);
}

#puntatore-container.footer-icon-hover .puntatore {
  transform: scale(3);
  background-color: $text-colors2
}

#puntatore-container.footer-icon-hover {
  mix-blend-mode: color
}
</style>

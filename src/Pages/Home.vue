<script>
import AppCardOffert from "../components/AppCardOffert.vue";
import AppCardProject from "../components/AppCardProject.vue";
import AppCarosel from "../components/AppCarosel.vue";
import AppWorkContacts from "../components/AppWorkContacts.vue";
import AppWorkingProcess from "../components/AppWorkingProcess.vue";
import { store } from "../store";

export default {
    name: "Home",
    components: {
        AppCarosel,
        AppWorkingProcess,
        AppWorkContacts,
        AppCardOffert,
        AppCardProject,
    },
    mounted() {
        store.cardOffertdirection = true;
    }
};
</script>

<template>
    <AppCarosel />
    <AppCardProject />
    <AppWorkingProcess />
    <AppWorkContacts />
    <div class="row my-5 align-items-center justify-content-center">
        <div class="col-8">
            <AppCardOffert />
        </div>
    </div>
</template>

<style lang="scss" scoped>
h2 {
    color: black;
}
</style>

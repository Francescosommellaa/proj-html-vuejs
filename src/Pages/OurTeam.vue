<script>
import AppAccording from "../components/AppAccording.vue";
import AppCardTeam from "../components/AppCardTeam.vue";
import AppCaroselCit from "../components/AppCaroselCit.vue";
import AppCharacterDesign from "../components/AppCharacterDesign.vue";

export default {
    name: "OurTeam",
    components: {
        AppCaroselCit,
        AppAccording,
        AppCardTeam,
        AppCharacterDesign,
    },
};
</script>

<template>
    <AppCardTeam />
    <div class="row p-5">
        <div class="col-5 ms-auto">
            <AppAccording />
        </div>
        <div class="col-5 me-auto"></div>
    </div>

    <AppCaroselCit />
    <dic class="col-10">
        <AppCharacterDesign />
    </dic>
</template>

<style lang="scss" scoped></style>

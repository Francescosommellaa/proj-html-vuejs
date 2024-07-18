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
    <div class="row p-5  align-items-center" >
        <div class="col-5 ms-auto">
            <AppAccording />
        </div>
        <div class="col-5 ms-auto ">
            <h3>Vibes loving <span>intro</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores numquam id aspernatur eligendi totam mollitia deleniti, eaque maxime, veniam molestias officiis libero ipsum non assumenda voluptate ad. Tempora, nulla modi!</p>
        </div>
    </div>

    <AppCaroselCit />
    <dic class="col-10">
        <AppCharacterDesign />
    </dic>
</template>

<style lang="scss" scoped>
 @use "../styles/general.scss";
 @use "../styles/variabiles" as *;
    h3{
        text-align: center;
        font-size: 50px;
        font-weight: 500;
        margin-bottom: 30px;
        span{
            font-family: italic;
            font-weight: 800;
        }
    }

    p{
        color: $text-colors5;
    }
</style>

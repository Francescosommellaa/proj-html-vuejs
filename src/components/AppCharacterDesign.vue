<script>
import { store } from "../store";

export default {
    name: "AppCharacterDesign",
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div class="row justify-content-center align-items-center m-5">
        <div class="col-6 ms-auto">
            <img src="../../public/team-single-img-1.jpg" alt="foto team" />
        </div>

        <div class="col-4 me-auto">
            <h3>Character <span>design</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium .
            </p>
            <div class="ms_btn">read more</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

h3 {
    font-size: 3rem;

    span {
        font-family: italic;
        font-weight: 900;
    }
}
</style>

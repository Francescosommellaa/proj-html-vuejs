<script>
import { bottom } from "@popperjs/core";
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
    <div class="row row-cols-2 p-5 justify-content-center align-items-center">
        <div class="col">
            <img src="../../public/team-single-img-1.jpg" alt="foto team" />
        </div>
        <div class="col">
            <h3>Character <span>design</span></h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium .
            </p>
            <button class="ms_btn">read more</button>
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

    .ms_btn {
        text-transform: uppercase;
        border: 2px solid $border4;
        width: fit-content;
        padding: 10px 20px;
        font-weight: 800;
        cursor: pointer;
        transition: all 0.8s ease;
        // .ms_btn {
        //     text-transform: uppercase;
        //     border: 2px solid $border4;
        //     width: fit-content;
        //     padding: 10px 20px;
        //     font-weight: 800;
        //     cursor: pointer;
        //     transition: all 0.8s ease;

        //     &:hover {
        //         box-shadow: 0 0 0 5vw $border4 inset;
        //         color: white;
        //     }
    }

    h3 {
        font-size: 3rem;

        span {
            font-family: italic;
            font-weight: 900;
        }
    }
}
</style>

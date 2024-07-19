<script>
import { store } from "../store";
export default {
    name: "AppSideNav",
    classe:"",
    data() {
        return {
            store,
        };
    },
    methods:{    
        scroll(){
            classe="ds_ok"
    }

   }

};
</script>

<template>
    <a href="#">
        <div class="ms_btnside">
            <div class="round">
                <img src="../../public/svg/svg-4.svg" alt="round image">
            </div>

            <div class="shop">
                <img src="../../public/svg/svg-6.svg" alt="shop image">
            </div>
        </div>
    </a>

    <a  href="#anchor"> 
        <div @scroll="scroll" class="arrow" :class="classe">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
    </a>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.arrow {
    background-color: $backgroud-color8;
    width: fit-content;
    cursor: pointer;
    padding: 20px;
    font-size: 20px;
    position: fixed;
    bottom: 10px;
    right: 20px;
    color: white;
    z-index: 500;
    
    
}

.ds_ok{
    display: block;
}

.ms_btnside{
    position: fixed;
    top: 15%;
    right: 20px;
    width: 40px;
    height: 100px;
    z-index: 500;
    
    
    .round{
        background-color: red;
        padding: 10px;
        height: 45px;
        box-shadow: 2px 2px grey;
        img{
            color: rgb(255, 253, 253);
        }
    }
    .shop{
        background-image: rgb(232, 216, 216);
        padding: 10px;
        height: 45px;
        margin-top: 10px;
        border: 1px solid grey;
        box-shadow: 2px 2px grey;


    } 
}

</style>

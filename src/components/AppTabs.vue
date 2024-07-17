<script>
export default {
    name: 'AppTabs',
    data() {
        return {

        }
    },
    methods: {
        openCity(cityName) {

            var x = document.getElementsByClassName("city");
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(cityName).style.display = "block";
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-10">
            <div class="w3-bar w3-black ">
                <button class="w3-bar-item w3-button" @click="this.openCity('London')">London</button>
                <button class="w3-bar-item w3-button" @click="this.openCity('Paris')">Paris</button>
                <button class="w3-bar-item w3-button" @click="this.openCity('Tokyo')">Tokyo</button>
            </div>
        </div>
        <div class="col-10">
            <div id="London" class="w3-container city" style="display:none">
                <h2>London</h2>
                <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" class="w3-container city" style="display:none">
                <h2>Paris</h2>
                <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" class="w3-container city" style="display:none">
                <h2>Tokyo</h2>
                <p>Tokyo is the capital of Japan.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;
</style>
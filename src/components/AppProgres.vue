<script>
export default {
    name: 'AppProgres',
}
</script>

<template>
    <div class="row">
        <div class="col-10 mx-auto d-flex justify-content-between align-items-center">
            <h5>Animation</h5>
            <h6>50%</h6>
        </div>
        <div class="col-10 mx-auto ">
            <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="50" aria-valuemin="0"
                aria-valuemax="100" style="height: 4px;">
                <div class="progress-bar" style="width: 50%"></div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-10 mx-auto d-flex justify-content-between align-items-center">
            <h5>Design</h5>
            <h6>60%</h6>
        </div>
        <div class="col-10 mx-auto">
            <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="60" aria-valuemin="0"
                aria-valuemax="100" style="height: 4px;">
                <div class="progress-bar" style="width: 60%"></div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-10 mx-auto d-flex justify-content-between align-items-center ">
            <h5>Lettering</h5>
            <h6>90%</h6>
        </div>
        <div class="col-10 mx-auto ">
            <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="90" aria-valuemin="0"
                aria-valuemax="100" style="height: 4px;">
                <div class="progress-bar" style="width: 90%"></div>
            </div>
        </div>
    </div>


    <div class="row">
        <div class="col-10 mx-auto d-flex justify-content-between align-items-center">
            <h5>Animation</h5>
            <h6>70%</h6>
        </div>
        <div class="col-10 mx-auto">
            <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="70" aria-valuemin="0"
                aria-valuemax="100" style="height: 4px;">
                <div class="progress-bar" style="width: 70%"></div>
            </div>
        </div>
    </div>



</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.col-10 h5,
.col-10 h6 {
    text-transform: uppercase;
    font-size: medium;
    font-weight: bold;
    margin-top: 20px;

}

.progress-bar {
    background-color: $backgroud-color9 !important;
}
</style>
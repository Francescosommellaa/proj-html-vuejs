<script>
export default {
    name: 'AppProgres',
    data() {
        return {
            areaWorks: [{
                area: 'Animation',
                percent: 50,
                incris: 0,
            },
            {
                area: 'Design',
                percent: 60,
                incris: 0
            },
            {
                area: 'Lettering',
                percent: 90,
                incris: 0
            },
            {
                area: 'Animation',
                percent: 70,
                incris: 0
            }
            ]
        }
    },
    methods: {
        incrementCounter(index) {
            const targetPercent = this.areaWorks[index].percent;
            this.areaWorks[index].currentPercent = 0;
            const interval = setInterval(() => {
                if (this.areaWorks[index].currentPercent < targetPercent) {
                    this.areaWorks[index].currentPercent++;
                } else {
                    clearInterval(interval);
                }
            }, 500);
        }
    },
    mounted() {
        this.areaWorks.forEach((work, index) => {
            this.incrementCounter(index);
        });
    }

}
</script>

<template>
    <div v-for="work in this.areaWorks" :key="index" class="row">
        <div class="col-12 mx-auto d-flex justify-content-between align-items-center">
            <h5>{{ work.area }}</h5>
            <h6>{{ work.currentPercent }}%</h6>
        </div>
        <div class="col-12 mx-auto ">
            <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="{{work.percent}} "
                aria-valuemin="0" aria-valuemax="100" style="height: 4px;">
                <div class="progress-bar" :style="{ width: work.currentPercent + '%' }"></div>
            </div>
        </div>
    </div>
    <!-- <div class="col-12 mx-auto d-flex justify-content-between align-items-center">
        <h5>Design</h5>
        <h6>60%</h6>
    </div>
    <div class="col-12 mx-auto">
        <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="60" aria-valuemin="0"
            aria-valuemax="100" style="height: 4px;">
            <div class="progress-bar" style="width: 60%"></div>
        </div>
    </div>
    <div class="col-12 mx-auto d-flex justify-content-between align-items-center ">
        <h5>Lettering</h5>
        <h6>90%</h6>
    </div>
    <div class="col-12 mx-auto ">
        <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="90" aria-valuemin="0"
            aria-valuemax="100" style="height: 4px;">
            <div class="progress-bar" style="width: 90%"></div>
        </div>
    </div>
    <div class="col-12 mx-auto d-flex justify-content-between align-items-center">
        <h5>Animation</h5>
        <h6>70%</h6>
    </div>
    <div class="col-12 mx-auto">
        <div class="progress" role="progressbar" aria-label="4px high" aria-valuenow="70" aria-valuemin="0"
            aria-valuemax="100" style="height: 4px;">
            <div class="progress-bar" style="width: 70%"></div>
        </div>
    </div>
 -->



</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.col-12 h5,
.col-12 h6 {
    text-transform: uppercase;
    font-size: medium;
    font-weight: bold;
    margin-top: 20px;

}

.progress-bar {
    background-color: $backgroud-color9 !important;
}
</style>
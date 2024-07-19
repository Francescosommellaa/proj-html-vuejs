<script>
export default {
    name: "AppProgres",
    data() {
        return {
            areaWorks: [
                {
                    area: "Animation",
                    percent: 50,
                    incris: 0,
                },
                {
                    area: "Design",
                    percent: 60,
                    incris: 0,
                },
                {
                    area: "Lettering",
                    percent: 90,
                    incris: 0,
                },
                {
                    area: "Animation",
                    percent: 70,
                    incris: 0,
                },
            ],
        };
    },
    methods: {
        increment(index) {
            const targetPercent = this.areaWorks[index].percent;
            this.areaWorks[index].incris = 0;
            const interval = setInterval(() => {
                if (this.areaWorks[index].incris < targetPercent) {
                    this.areaWorks[index].incris++;
                } else {
                    clearInterval(interval);
                }
            }, 100);
        },
    },
    mounted() {
        this.areaWorks.forEach((work, index) => {
            this.increment(index);
        });
    },
};
</script>

<template>
    <div v-for="(work, index) in this.areaWorks" :key="index" class="row">
        <div class="col-12 mx-auto d-flex justify-content-between align-items-center">
            <h5>{{ work.area }}</h5>
            <h6>{{ work.incris }}%</h6>
        </div>
        <div class="col-12 mx-auto">
            <div class="progress" role="progressbar" aria-label="4px high" :aria-valuenow="work.percent"
                aria-valuemin="0" aria-valuemax="100" style="height: 4px">
                <div class="progress-bar" :style="{ width: work.incris + '%' }"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

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

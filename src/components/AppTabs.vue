<script>
export default {
    name: "AppTabs",
    data() {
        return {
            activestate: "idAnimation",
            tabsArea: [
                {
                    id: "idAnimation",
                    title: "Animation",
                    text: "Hinc assum pro ea. Meis verear an vel, ex quando legere scriptorem has, mea vide vidisse an.Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te.Ex mei illud illum verter.",
                },
                {
                    id: "idDesing",
                    title: "Desing",
                    text: " Paris is the capital of France. Integre appareat cu mea, te mel ferripercipitur efficiendi, in ius phaedrum invenire expetendis.Eius eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumesdemocritum per te.Ex mei illud illum laudem, quem bonorum ius ne.His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix propriae deseruisse.Inani expetendis ut cum.",
                },
                {
                    id: "idLettering",
                    title: "Lettering",
                    text: " Te sale iusto fabellas sed, eu sea tollit suscipiantur. Obliqueomnesque ne eum, id putent malorum admodum vel, vix no tantas admodum nominavi.Eius eirmod vel in, quo simul salutatus incorrupte ex, nislnonumes democritum per te.Ex mei illud illum laudem, quem bonorum iusne.His an omnes propriae fabellas, an duo aeterno expetend.",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="row">
        <div class="col-10">
            <div class="row border-bottom d-flex justify-content-between">
                <div v-for="tab in tabsArea" :id="tab.id" class="col-4 text-start"
                    :class="tab.id == activestate ? 'activ-color' : ''">
                    <button class="border-0 bg-transparent text-uppercase" @click="activestate = tab.id">
                        {{ tab.title }}
                    </button>
                </div>
            </div>
        </div>
        <div class="col-10">
            <div v-for="tab in tabsArea" class="w3-container description"
                :class="tab.id == activestate ? 'd-block' : 'd-none'">
                <p class="text-left">
                    {{ tab.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.activ-color {
    border-bottom: 5px solid $backgroud-color10;
}
</style>

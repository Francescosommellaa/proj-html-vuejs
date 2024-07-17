<script>
export default {
    name: 'AppTabs',
    data() {
        return {

        }
    },
    methods: {
        opendescription(sector, buttonName) {
            let bordercol = document.getElementsByClassName("col-4")
            var x = document.getElementsByClassName("description");
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                bordercol[i].classList.remove("activ-color");
            }
            document.getElementById(sector).style.display = "block";
            document.getElementById(buttonName).classList.add("activ-color");
            console.log(document.getElementById(buttonName));
        }
    }
}
</script>

<template>
    <div class="row">
        <div class="col-10">
            <div class="row border-bottom   d-flex justify-content-between">
                <div id="buttoAnimation" class="col-4 text-start activ-color"> <button
                        class="border-0 bg-transparent text-uppercase "
                        @click="this.opendescription('Animation', 'buttoAnimation')">Animation</button>
                </div>
                <div id="buttonDesign" class="col-4 text-center"> <button
                        class="border-0  bg-transparent text-uppercase "
                        @click="this.opendescription('Design', 'buttonDesign')">Design</button></div>
                <div id="buttonLettering" class="col-4 text-end"> <button
                        class="border-0 bg-transparent text-uppercase text-end"
                        @click="this.opendescription('Lettering', 'buttonLettering')">Lettering</button>
                </div>
            </div>

        </div>
        <div class="col-10">
            <div id="Animation" class="w3-container description">

                <p class='text-left'>Hinc assum pro ea. Meis verear an vel, ex quando legere scriptorem has, mea vide
                    vidisse
                    an. Eius
                    eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum
                    laudem, quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea
                    vix propriae deseruisse. Munere utamur vertere.</p>
            </div>

            <div id="Design" class="w3-container description" style="display:none">

                <p class='text-left'>Paris is the capital of France.
                    Integre appareat cu mea, te mel ferri percipitur efficiendi, in ius phaedrum invenire expetendis.
                    Eius
                    eirmod vel in, quo simul salutatus incorrupte ex, nisl nonumes democritum per te. Ex mei illud illum
                    laudem,
                    quem bonorum ius ne. His an omnes propriae fabellas, an duo aeterno expetenda explicari, ea vix
                    propriae
                    deseruisse. Inani expetendis ut cum.</p>
            </div>
            <div id="Lettering" class="w3-container description" style="display:none">

                <p class='text-left'>Te sale iusto fabellas sed, eu sea tollit suscipiantur. Oblique omnesque ne eum, id
                    putent malorum
                    admodum vel, vix no tantas admodum nominavi. Eius eirmod vel in, quo simul salutatus incorrupte ex,
                    nisl nonumes democritum per te. Ex mei illud illum laudem, quem bonorum ius ne. His an omnes
                    propriae fabellas, an duo aeterno expetend.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.activ-color {
    border-bottom: 5px solid $backgroud-color10;

}
</style>
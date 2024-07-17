<script>
import { store } from '../store'
export default {
    name: 'AppWorkContacts',
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <!-- sezione lavora con noi -->
    <section>
        <div class="container-fluid ">
            <div class="row">

                <div class="col-12">

                    <div class="ms_bg">
                        
                        <div class="container-fluid">

                            <div class="row justify-content-center">
                                <div class="col-4">
                                    <h2>Want to work with us? Send us <span>a message!</span></h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
   
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variabiles' as *;

.ms_bg{
    background-image: url('..//..//public/h-2-background-1.jpg');
    height: 600px;
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;
    h2{
        font-size: 40px;
        span{
            font-weight: 800;
            font-style: italic;
        }
    }
}

</style>
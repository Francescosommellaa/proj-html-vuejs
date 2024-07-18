<script>
    import { store } from '../store'
    export default {
        name: 'AppSideBar',
        data() {
            return {
                store,
            }
        },
    }

</script>

<template>
<div class="ms_container">
    <div class="ms_colsx"></div>
    <div class="ms_coldx">
        <div id="ex">
            <i class="fa-solid fa-xmark"></i>
        </div>
        <div id="logo">
            <a href="#"><img src="../../public/logo-sidearea-1-1.png" alt="logo marèe"></a>
        </div>
        <p>This is Marée, a colorful new portfolio for presenting your work. If you’re a modern illustrator or a designer, we made Marée for you.</p>
        <div class="ms_cont_social">
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>

        <form action="#">
            <input type="text" placeholder="Enter your Keyword...">
        </form>

    </div>

</div>


</template>

<style lang="scss" scoped>
    @use '../styles/general.scss';
    @use '../styles/variabiles' as *;

    .ms_container{
        height: 100vh;
        width: 100%;
        position: fixed;
        right: 0;
        z-index: 500;
        display: flex;

     
        .ms_colsx{
            width: 85%;
               // debug
            background-color: black;
        }

        .ms_coldx{
            width: 15%;
            padding: 20px;
            background-color: white;
            #ex{
                text-align: right;
                font-size: 40px;
                margin-top: 0;
            }
            &>*{
                margin-top: 50px;
            }

            .ms_cont_social{
                text-align: center;
                & >*{
                    margin: 0 10px ;
                    color: black;
                    font-size: 20px
                }
                a{
                    cursor: pointer;
                }

            }

            // form
            textarea:focus, input:focus{
                outline: none;
            }   

            input{
                border: none;
                border-bottom: 3px solid $border4;
                width:100%;
                line-height: 30px;
                padding: 5px;
                
                
            }
            
        }
    }
</style>
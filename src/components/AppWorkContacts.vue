<script>

export default {
    name: "AppWorkContacts",
};
</script>

<template>
    <!-- sezione lavora con noi -->
    <section>
        <div class="row row-cols-1 mx--0 ms_bg align-items-center p-5">
            <div class="col-12">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <h2>Want to work with us? Send us <span>a message!</span></h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur nobis architecto mollitia repellat aut at, ad facere
                            deserunt illo veritatis consectetur eveniet magni fuga! Enim
                            nesciunt animi vel nisi doloribus?
                        </p>
                    </div>
                </div>
                <div class="col-auto text-center">
                    <button class="text-center ms_btn_secondary hover-area">contact</button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.ms_bg {
    background-image: url("..//..//public/h-2-background-1.jpg");
    background-size: cover;
    object-position: center;
    background-repeat: no-repeat;

    h2 {
        font-size: 70px;
        text-align: center;

        span {
            font-weight: 800;
            font-style: italic;
        }
    }

    p {
        margin-top: 30px;
        font-size: 25px;
        text-align: center;
        color: $text-colors5;
    }
}
</style>

<script>

export default {
    name: "AppSideBar",

};
</script>

<template>
    <div id="logo">
        <a href="#"><img src="../../public/logo-sidearea-1-1.png" alt="logo marèe" /></a>
    </div>
    <p>
        This is Marée, a colorful new portfolio for presenting your work. If you’re
        a modern illustrator or a designer, we made Marée for you.
    </p>
    <div class="ms_cont_social">
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
    </div>

    <form action="#">
        <input type="text" placeholder="Enter your Keyword..." />
    </form>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

* {
    text-align: center;
}

#logo {
    margin-bottom: 50px;
}

p {
    color: $text-colors5;
}

.ms_cont_social {
    text-align: center;

    &>* {
        margin: 0 10px;
        color: black;
        font-size: 20px;
    }

    a {
        cursor: pointer;
    }
}

// form
textarea:focus,
input:focus {
    outline: none;
}

input {
    text-align: left;
    margin-top: 100px;
    border: none;
    border-bottom: 3px solid $border4;
    width: 100%;
    line-height: 30px;
    padding: 5px;
}
</style>

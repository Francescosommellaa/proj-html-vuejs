<script>
export default {
    name: "NotFound",
    data() {
        return {

        }
    },
    methods: {
        cursor() {
            // Rimuovi 'DOMContentLoaded' in quanto non necessario in un componente Vue montato
            const cursor = document.getElementById('puntatore-container');
            const cursorDot = cursor.querySelector('.puntatore');

            // Aggiorna la posizione del cursore
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = `${e.clientX - 6}px`;
                cursor.style.top = `${e.clientY - 3}px`;
            });

            // Aggiungi classi in base all'hover sugli elementi desiderati
            document.querySelectorAll('.hover-area').forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('general-hover');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('general-hover');
                });
            });
        }
    },
    mounted() {
        this.cursor();
    }
}


</script>

<template>
    <h2>Page Not Found</h2>

    <div id="puntatore-container">
        <div class="puntatore"></div>
    </div>
    <button class="hover-area">Page Not Found</button>
</template>

<style lang="scss" scoped>
h2 {
    color: black;
}


html,
body,
* {
    cursor: none !important;
}

#puntatore-container {
    position: fixed;
    top: -3px;
    left: -6px;
    pointer-events: none;
    z-index: 9999999;
    mix-blend-mode: unset;
    display: block;
    width: 12px;
    height: 12px;
    visibility: visible
}

#puntatore-container .puntatore {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    outline: transparent solid 1px;
    background-color: #c0e1cf;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s
}

#puntatore-container.general-hover .puntatore {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    background-color: #f5d8ca
}

#puntatore-container.general-hover-tp-arrows {
    mix-blend-mode: color
}

#edgtf-theme- general-hover-tp-arrows .puntatore {
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3);
    background-color: #c0e1cf
}

.edgtf-safari #puntatore-container.general-hover-tp-arrows {
    mix-blend-mode: unset
}

.edgtf-safari #puntatore-container.general-hover-tp-arrows .puntatore {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5)
}

#puntatore-container.general-hover-pag-nums-active {
    mix-blend-mode: multiply
}

#puntatore-container.general-hover-pag-nums-active .puntatore {
    -webkit-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
    background-color: #c0e1cf
}

#puntatore-container.general-hover-tp-bullets {
    mix-blend-mode: multiply
}

#puntatore-container.general-hover-tp-bullets .puntatore {
    -webkit-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
    background-color: #c0e1cf
}

#puntatore-container.general-hover-footer .puntatore {
    background-color: #fff
}

#puntatore-container.general-hover-social-icon {
    mix-blend-mode: darken
}

#puntatore-container.general-hover-social-icon .puntatore {
    -webkit-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
    background-color: #f5d8ca
}

#puntatore-container.general-hover-social-icon-footer {
    mix-blend-mode: color
}

#puntatore-container.general-hover-social-icon-footer .puntatore {
    -webkit-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
    background-color: #f5d8ca
}

.edgtf-safari #puntatore-container.general-hover-social-icon-footer {
    mix-blend-mode: darken
}

#puntatore-container.edgtf-clicked .puntatore {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    background-color: #c0e1cf
}

#puntatore-container.general-hover-search-opener {
    mix-blend-mode: multiply
}

#puntatore-container.general-hover-search-opener .puntatore {
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3)
}

#puntatore-container.general-hover-btt {
    mix-blend-mode: lighten
}

#puntatore-container.general-hover-btt .puntatore {
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3)
}

#puntatore-container.general-hover-burger-close {
    mix-blend-mode: multiply
}

#puntatore-container.general-hover-burger-close .puntatore {
    -webkit-transform: scale(3);
    -ms-transform: scale(3);
    transform: scale(3)
}

html:not(.touch) .edgtf-custom-cursor-enabled * {
    cursor: none !important
}

.no-touch #dgtf-theme-cursor input,
.no-touch #puntatore-container .tp-bullet,
.no-touch #puntatore-container a,
.no-touch #puntatore-container button {
    cursor: none !important
}

#puntatore-container.edgtf-visible {
    visibility: visible
}
</style>

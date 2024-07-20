<script>
import { store } from "../store";

export default {
    name: "AppNavDrop",
    data() {
        return {
            store,
            pages: [
                {
                    state: false,
                    color: "fc3",
                    pageTitle: "home",
                    sectionItems: [
                        { title: "Main Home", name: "Home" },
                        { title: "Floating Portfolio", name: "#" },
                        { title: "Portfolio Pinterest", name: "#" },
                        { title: "Animated Slider", name: "#" },
                        { title: "Portfolio Gallery", name: "#" },
                        { title: "Interactive Links", name: "#" },
                        { title: "Split Slider Showcase", name: "#" },
                        { title: "Portfolio Carousel", name: "#" },
                        { title: "Landing", name: "#" },
                        { title: "Main Home", name: "#" },
                    ],
                },
                {
                    state: false,
                    color: "fc2",
                    pageTitle: "Pages",
                    sectionItems: [
                        { title: "About Us", name: "#" },
                        { title: "About Me", name: "#" },
                        { title: "What We Offer", name: "WhatWeOffer" },
                        { title: "Working process", name: "#" },
                        { title: "Our Team", name: "OurTeam" },
                        { title: "Pricing Plans", name: "#" },
                        { title: "Contact Us", name: "#" },
                        { title: "Coming Soon", name: "#" },
                        { title: "404 Error Page", name: "NotFound" },
                    ],
                },
                {
                    state: false,
                    color: "fc1",
                    pageTitle: "Portfolio",
                    sectionArea: [
                        {
                            title: "types",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Standard", name: "#" },
                                { title: "Gallery", name: "#" },
                                { title: "Gallery Joined", name: "#" },
                                { title: "Masonry", name: "#" },
                                { title: "Mansonry Joined", name: "#" },
                                { title: "Pinterest", name: "#" },
                                { title: "Scattered", name: "#" },
                                { title: "Slider", name: "#" },
                            ],
                        },
                        {
                            title: "Layouts",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Two Columns", name: "#" },
                                { title: "Three Columns", name: "#" },
                                { title: "Three Columns Wide", name: "#" },
                                { title: "Four Columns", name: "#" },
                                { title: "Four Columns Wide", name: "#" },
                                { title: "Five Columns", name: "#" },
                                { title: "Five Columns Wide", name: "#" },
                                { title: "Six Columns", name: "#" },
                            ],
                        },
                        {
                            title: "Hover Types",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Slide In", name: "#" },
                                { title: "Float", name: "#" },
                                { title: "Overlay", name: "#" },
                                { title: "Zoom", name: "#" },
                                { title: "Shader", name: "#" },
                                { title: "Clip Image", name: "#" },
                            ],
                        },
                        {
                            title: "Singles",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Split Screen", name: "#" },
                                { title: "Full Width Slider", name: "#" },
                                { title: "Wide Slider", name: "#" },
                                { title: "Big Slider", name: "#" },
                                { title: "Small Slider", name: "#" },
                                { title: "Big Image", name: "#" },
                                { title: "Big Images", name: "#" },
                                { title: "Small Images", name: "#" },
                                { title: "Big Gallery", name: "#" },
                                { title: "Small Gallery", name: "#" },
                                { title: "Masonry", name: "#" },
                            ],
                        },
                    ],
                },
                {
                    state: false,
                    color: "fc5",
                    pageTitle: "Blog",
                    sectionItems: [
                        { title: "Right Sidebar", name: "#" },
                        { title: "Left Sidebar", name: "#" },
                        { title: "Centered", name: "#" },
                        {
                            title: "Post Type",
                            sectionstate: false,
                            subItems: [
                                { title: "Standard Post", name: "#" },
                                { title: "No Sidebar Post", name: "#" },
                                { title: "Gallery Post", name: "#" },
                                { title: "Audio Post", name: "#" },
                                { title: "Video Post", name: "#" },
                                { title: "Link Post", name: "#" },
                                { title: "Quote Post", name: "#" },
                            ],
                        },
                    ],
                },
                {
                    state: false,
                    color: "fc4",
                    pageTitle: "Shop",
                    sectionItems: [
                        { title: "Product List", name: "#" },
                        { title: "Product Single", name: "#" },
                        {
                            title: "Shop Layouts",
                            sectionstate: false,
                            subItems: [
                                { title: "Three Columns", name: "#" },
                                { title: "Three Columns Wide", name: "#" },
                                { title: "Four Columns", name: "#" },
                                { title: "Four Columns Wide", name: "#" },
                                { title: "Five Columns", name: "#" },
                                { title: "Five Columns Wide", name: "#" },
                            ],
                        },
                        {
                            title: "Shop Pages",
                            sectionstate: false,
                            subItems: [
                                { title: "My Account", name: "#" },
                                { title: "Cart", name: "#" },
                                { title: "Checkout", name: "#" },
                            ],
                        },
                    ],
                },
                {
                    state: false,
                    color: "fc6",
                    pageTitle: "Elements",
                    sectionArea: [
                        {
                            title: "Classic",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Accordions", name: "#" },
                                { title: "Tabs", name: "#" },
                                { title: "Buttons", name: "#" },
                                { title: "Blog List", name: "#" },
                                { title: "Clients", name: "#" },
                                { title: "Contact", name: "#" },
                                { title: "Contact Form", name: "#" },
                                { title: "Video Button", name: "#" },
                                { title: "Image Gallery", name: "#" },
                            ],
                        },
                        {
                            title: "Interactive",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Vertical Split Slider", name: "#" },
                                { title: "Portfolio Slider", name: "#" },
                                { title: "Interactive Link Showcase", name: "#" },
                                { title: "Portfolio List", name: "#" },
                                { title: "Shop List", name: "#" },
                                { title: "Process", name: "#" },
                                { title: "Team", name: "#" },
                                { title: "Testimonials", name: "#" },
                            ],
                        },
                        {
                            title: "Infographic",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Counter", name: "#" },
                                { title: "Countdown", name: "#" },
                                { title: "Progress Bar", name: "#" },
                                { title: "Pie Chart", name: "#" },
                                { title: "Pricing Tables", name: "#" },
                                { title: "Images With Text", name: "#" },
                                { title: "Icon List Item", name: "#" },
                                { title: "Icon With Text", name: "#" },
                            ],
                        },
                        {
                            title: "Typography",
                            sectionstate: false,
                            sectionItems: [
                                { title: "Headings", name: "#" },
                                { title: "Columns", name: "#" },
                                { title: "Section Title", name: "#" },
                                { title: "Blockquote", name: "#" },
                                { title: "Dropcaps", name: "#" },
                                { title: "Highlights", name: "#" },
                                { title: "Separators", name: "#" },
                                { title: "Custom Font", name: "#" },
                            ],
                        },
                    ],
                },
            ],
        };
    },
};
</script>

<template>
    <div class="d-flex align-items-center">
        <div class="dropdown drop-container" v-for="page in pages" @mouseover="page.state = true"
            @mouseout="page.state = false">
            <button class="dropbtn text-uppercase" :class="page.state ? `ms-underline ${page.color}` : ''">
                {{ page.pageTitle }}
            </button>
            <div v-show="page.state == true" class="dropdown-content text-nowrap"
                :class="page.sectionArea ? 'dropdown-content-area' : 'dropdown-content'">
                <div v-if="page.sectionArea" class="d-flex p-0">
                    <div v-for="area in page.sectionArea">
                        <h4 class="text-center text-uppercase">{{ area.title }}</h4>
                        <ul>
                            <li v-for="item in area.sectionItems">
                                <a :href="item.name" :class="page.state ? `ms-underline ${page.color}` : ''">{{
                                    item.title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul v-else>
                    <li v-for="section in page.sectionItems">
                        <div v-if="section.name == '#'" class="">
                            <a :href="section.name" :class="page.state ? `ms-underline ${page.color}` : ''">{{
                                section.title }}</a>
                        </div>

                        <div v-else-if="section.subItems" class="dropdown subitem"
                            @mouseover="section.sectionstate = true" @mouseout="section.sectionstate = false">
                            <div>
                                <i class="fa-solid fa-chevron-left"></i>
                                <button class="dropbtn color" :class="page.state ? `ms-underline ${page.color}` : ''">
                                    {{ section.title }}
                                </button>
                            </div>

                            <div v-show="section.sectionstate == true" class="dropdown-content-sub p-0">
                                <ul>
                                    <li v-for="subitem in section.subItems">
                                        <a :href="subitem.name"
                                            :class="page.state ? `ms-underline ${page.color}` : ''">{{ subitem.title
                                            }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <router-link v-else :to="{ name: section.name }" class="nav-link"
                            :class="page.state ? `ms-underline ${page.color}` : ''">
                            {{ section.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

.dropbtn {
    background-color: transparent;
    color: black;
    /* padding: 10px; */
    font-size: 16px;
    border: none;
    cursor: pointer;

    &:hover .dropbtn {
        text-decoration: var(--underline-bg);
    }
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-sub {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    /*  display: none; */
    position: absolute;
    right: -150%;
    background-color: $backgroud-color6;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content-area {
    position: absolute;
    right: 0;
    background-color: $backgroud-color6;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content-sub {
    position: absolute;
    right: 100%;
    top: 0;
    background-color: $backgroud-color6;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown-content-sub a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
}

.dropdown-content-sub a:hover {
    /*     background-color: $backgroud-color6; */
}

.dropdown-content a {
    color: black;
    padding: 10px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    /*    background-color: $backgroud-color6; */
}

.drop-container *:not(i) {
    font-weight: lighter !important;
    font-size: small !important;
}
</style>

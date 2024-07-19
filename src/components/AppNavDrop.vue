<script>

export default {
    name: 'AppNavDrop',
    data() {
        return {
            pages: [
                {
                    isActive: false,
                    color: 'fc3',
                    pageTitle: 'home',
                    sectionItems: [
                        { title: 'Main Home', name: 'Home' },
                        { title: 'Floating Portfolio', name: '#' },
                        { title: 'Portfolio Pinterest', name: '#' },
                        { title: 'Animated Slider', name: '#' },
                        { title: 'Portfolio Gallery', name: '#' },
                        { title: 'Interactive Links', name: '#' },
                        { title: 'Split Slider Showcase', name: '#' },
                        { title: 'Portfolio Carousel', name: '#' },
                        { title: 'Landing', name: '#' },
                        { title: 'Main Home', name: '#' },
                    ]
                },
                {
                    isActive: false,
                    color: 'fc2',
                    pageTitle: 'Pages',
                    sectionItems: [
                        { title: 'About Us', name: '#' },
                        { title: 'About Me', name: '#' },
                        { title: 'What We Offer', name: 'WhatWeOffer' },
                        { title: 'Working process', name: '#' },
                        { title: 'Our Team', name: 'OurTeam' },
                        { title: 'Pricing Plans', name: '#' },
                        { title: 'Contact Us', name: '#' },
                        { title: 'Coming Soon', name: '#' },
                        { title: '404 Error Page', name: 'NotFound' }
                    ]
                },
                {
                    isActive: false,
                    color: 'fc1',
                    pageTitle: 'Portfolio',
                    areaItems: [
                        {
                            pageTitle: 'types',
                            subItems: [
                                { title: 'Standard', name: '#' },
                                { title: 'Gallery', name: '#' },
                                { title: 'Gallery Joined', name: '#' },
                                { title: 'Masonry', name: '#' },
                                { title: 'Mansonry Joined', name: '#' },
                                { title: 'Pinterest', name: '#' },
                                { title: 'Scattered', name: '#' },
                                { title: 'Slider', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Layouts',
                            subItems: [
                                { title: 'Two Columns', name: '#' },
                                { title: 'Three Columns', name: '#' },
                                { title: 'Three Columns Wide', name: '#' },
                                { title: 'Four Columns', name: '#' },
                                { title: 'Four Columns Wide', name: '#' },
                                { title: 'Five Columns', name: '#' },
                                { title: 'Five Columns Wide', name: '#' },
                                { title: 'Six Columns', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Hover Types',
                            subItems: [
                                { title: 'Slide In', name: '#' },
                                { title: 'Float', name: '#' },
                                { title: 'Overlay', name: '#' },
                                { title: 'Zoom', name: '#' },
                                { title: 'Shader', name: '#' },
                                { title: 'Clip Image', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Singles',
                            subItems: [
                                { title: 'Split Screen', name: '#' },
                                { title: 'Full Width Slider', name: '#' },
                                { title: 'Wide Slider', name: '#' },
                                { title: 'Big Slider', name: '#' },
                                { title: 'Small Slider', name: '#' },
                                { title: 'Big Image', name: '#' },
                                { title: 'Big Images', name: '#' },
                                { title: 'Small Images', name: '#' },
                                { title: 'Big Gallery', name: '#' },
                                { title: 'Small Gallery', name: '#' },
                                { title: 'Masonry', name: '#' }
                            ]
                        }
                    ]
                },
                {
                    isActive: false,
                    color: 'fc5',
                    pageTitle: 'Blog',
                    sectionItems: [
                        { title: 'Right Sidebar', name: '#' },
                        { title: 'Left Sidebar', name: '#' },
                        { title: 'Centered', name: '#' },
                        {
                            title: 'Post Type',
                            isActive: false,
                            subItems: [
                                { title: 'Standard Post', name: '#' },
                                { title: 'No Sidebar Post', name: '#' },
                                { title: 'Gallery Post', name: '#' },
                                { title: 'Audio Post', name: '#' },
                                { title: 'Video Post', name: '#' },
                                { title: 'Link Post', name: '#' },
                                { title: 'Quote Post', name: '#' }
                            ]
                        }
                    ]
                },
                {
                    isActive: false,
                    color: 'fc4',
                    pageTitle: 'Shop',
                    sectionItems: [
                        { title: 'Product List', name: '#' },
                        { title: 'Product Single', name: '#' },
                        {
                            title: 'Shop Layouts',
                            isActive: false,
                            subItems: [
                                { title: 'Three Columns', name: '#' },
                                { title: 'Three Columns Wide', name: '#' },
                                { title: 'Four Columns', name: '#' },
                                { title: 'Four Columns Wide', name: '#' },
                                { title: 'Five Columns', name: '#' },
                                { title: 'Five Columns Wide', name: '#' }
                            ]
                        },
                        {
                            title: 'Shop Pages',
                            isActive: false,
                            subItems: [
                                { title: 'My Account', name: '#' },
                                { title: 'Cart', name: '#' },
                                { title: 'Checkout', name: '#' }
                            ]
                        }
                    ]
                },
                {
                    isActive: false,
                    color: 'fc6',
                    pageTitle: 'Elements',
                    areaItems: [
                        {
                            pageTitle: 'Classic',
                            subItems: [
                                { title: 'Accordions', name: '#' },
                                { title: 'Tabs', name: '#' },
                                { title: 'Buttons', name: '#' },
                                { title: 'Blog List', name: '#' },
                                { title: 'Clients', name: '#' },
                                { title: 'Contact', name: '#' },
                                { title: 'Contact Form', name: '#' },
                                { title: 'Video Button', name: '#' },
                                { title: 'Image Gallery', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Interactive',
                            subItems: [
                                { title: 'Vertical Split Slider', name: '#' },
                                { title: 'Portfolio Slider', name: '#' },
                                { title: 'Interactive Link Showcase', name: '#' },
                                { title: 'Portfolio List', name: '#' },
                                { title: 'Shop List', name: '#' },
                                { title: 'Process', name: '#' },
                                { title: 'Team', name: '#' },
                                { title: 'Testimonials', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Infographic',
                            subItems: [
                                { title: 'Counter', name: '#' },
                                { title: 'Countdown', name: '#' },
                                { title: 'Progress Bar', name: '#' },
                                { title: 'Pie Chart', name: '#' },
                                { title: 'Pricing Tables', name: '#' },
                                { title: 'Images With Text', name: '#' },
                                { title: 'Icon List Item', name: '#' },
                                { title: 'Icon With Text', name: '#' }
                            ]
                        },
                        {
                            pageTitle: 'Typography',
                            subItems: [
                                { title: 'Headings', name: '#' },
                                { title: 'Columns', name: '#' },
                                { title: 'Section Title', name: '#' },
                                { title: 'Blockquote', name: '#' },
                                { title: 'Dropcaps', name: '#' },
                                { title: 'Highlights', name: '#' },
                                { title: 'Separators', name: '#' },
                                { title: 'Custom Font', name: '#' }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};







</script>

<template>
    <div class="d-flex align-items-center">
        <div v-for="page in pages" :key="page.pageTitle" @mouseover="page.isActive = true"
            @mouseout="page.isActive = false">
            <div class="dropdown">
                <h5 class="dropdown-toggle" :class="'ms-listlink ms-underline ' + page.color" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    {{ page.pageTitle }}
                </h5>
                <ul class="dropdown-menu" v-show="page.isActive">
                    <!-- Controlla se esistono areaItems -->
                    <li v-if="page.areaItems" class="dropdown-submenu">
                        <div class="area-items-container">
                            <div v-for="area in page.areaItems" :key="area.pageTitle" class="dropdown-submenu">
                                <h6 :class="'ms-listlink ms-underline ' + page.color">{{ area.pageTitle }}</h6>
                                <ul class="dropdown-menu">
                                    <li v-for="subItem in area.subItems" :key="subItem.title" class="dropdown-item">
                                        <a v-if="subItem.name === '#'" :href="subItem.name" class="nav-link"
                                            :class="'ms-listlink ms-underline ' + page.color">
                                            {{ subItem.title }}
                                        </a>
                                        <router-link v-else :to="{ name: subItem.name }" class="nav-link"
                                            :class="'ms-listlink ms-underline ' + page.color">
                                            {{ subItem.title }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <!-- Se non ci sono areaItems, visualizza sectionItems -->
                    <li v-else v-for="section in page.sectionItems" :key="section.title" class="dropdown-item">
                        <a v-if="section.name === '#'" :href="section.name">{{ section.title }}</a>
                        <router-link v-else :to="{ name: section.name }" class="nav-link"
                            :class="'ms-listlink ms-underline ' + page.color">
                            {{ section.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../styles/general.scss";
@use "../styles/variabiles" as *;

/* .ms-listlink {
    font-size: 14px;
    color: #333;
    } */





.nav-link:hover {
    color: black;
    text-decoration: none;
}

.dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.dropdown-menu .dropdown-item {
    padding: 12px 16px;
    color: #333;
    text-decoration: none;
}

.dropdown-menu .dropdown-item:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>
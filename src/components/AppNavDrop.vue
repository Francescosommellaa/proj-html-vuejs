<script>

export default {
    name: 'AppNavDrop',
    data() {
        return {
            pages: [{
                state: false,
                color: 'fc3',
                page: 'home',
                section: [
                    {
                        title: 'Main Home',
                        name: 'Home'
                    },
                    {
                        title: 'Floating Portfolio',
                        name: '#'
                    },
                    {
                        title: 'Portfolio Pinterest',
                        name: '#'
                    },
                    {
                        title: 'Animated Slider',
                        name: '#'
                    },
                    {
                        title: 'Portfolio Gallery',
                        name: '#'
                    },
                    {
                        title: 'Interactive Links',
                        name: '#'
                    },
                    {
                        title: 'Split Slider Showcase',
                        name: '#'
                    },
                    {
                        title: 'Portfolio Carousel',
                        name: '#'
                    },
                    {
                        title: 'Landing',
                        name: '#'
                    },
                    {
                        title: 'Main Home',
                        name: '#'
                    },
                ]
            },
            {
                state: false,
                color: 'fc2',
                page: 'Pages',
                section: [
                    {
                        title: 'About Us',
                        name: '#'
                    },
                    {
                        title: 'About Me',
                        name: '#'
                    },
                    {
                        title: 'What We Offer',
                        name: 'WhatWeOffer'
                    },
                    {
                        title: 'Working process',
                        name: '#'
                    },
                    {
                        title: 'Our Team',
                        name: 'OurTeam'
                    },
                    {
                        title: 'Pricing Plans',
                        name: '#'
                    },
                    {
                        title: 'Contact Us',
                        name: '#'
                    },
                    {
                        title: 'Coming Soon',
                        name: '#'
                    },
                    {
                        title: '404 Error Page',
                        name: 'NotFound'
                    }]

            },
            {
                state: false,
                color: 'fc1',
                page: 'Portfolio',
                area: [{
                    page: 'types',
                    section: [{
                        title: 'Standard',
                        name: '#'
                    },
                    {
                        title: 'Gallery',
                        name: '#'
                    },
                    {
                        title: 'Gallery Joined',
                        name: '#'
                    },
                    {
                        title: 'Masonry',
                        name: '#'
                    },
                    {
                        title: 'Mansonry Joined',
                        name: '#'
                    },
                    {
                        title: 'Pinterest',
                        name: '#'
                    },
                    {
                        title: 'Scattered',
                        name: '#'
                    },
                    {
                        title: 'Slider',
                        name: '#'
                    }]
                },
                {
                    page: 'Layouts',
                    section: [{
                        title: 'Two Columns',
                        name: '#'
                    },
                    {
                        title: 'Three Columns',
                        name: '#'
                    },
                    {
                        title: 'Three Columns Wide',
                        name: '#'
                    },
                    {
                        title: 'Four Columns',
                        name: '#'
                    },
                    {
                        title: 'Four Columns Wide',
                        name: '#'
                    },
                    {
                        title: 'Five Columns',
                        name: '#'
                    },
                    {
                        title: 'Five Columns Wide',
                        name: '#'
                    },
                    {
                        title: 'Six Columns',
                        name: '#'
                    }]
                },
                {
                    page: 'Hover Types',
                    section: [{
                        title: 'Slide In',
                        name: '#'
                    },
                    {
                        title: 'Float',
                        name: '#'
                    },
                    {
                        title: 'Overlay',
                        name: '#'
                    },
                    {
                        title: 'Zoom',
                        name: '#'
                    },
                    {
                        title: 'Shader',
                        name: '#'
                    },
                    {
                        title: 'Clip Image',
                        name: '#'
                    }]
                },
                {
                    page: 'Singles',
                    section: [{
                        title: 'Split Screen',
                        name: '#'
                    },
                    {
                        title: 'Full Width Slider',
                        name: '#'
                    },
                    {
                        title: 'Wide Slider',
                        name: '#'
                    },
                    {
                        title: 'Big Slider',
                        name: '#'
                    },
                    {
                        title: 'Small Slider',
                        name: '#'
                    },
                    {
                        title: 'Big Image',
                        name: '#'
                    },
                    {
                        title: 'Big Images',
                        name: '#'
                    },
                    {
                        title: 'Small Images',
                        name: '#'
                    },
                    {
                        title: 'Big Gallery',
                        name: '#'
                    },
                    {
                        title: 'Small Gallery',
                        name: '#'
                    },
                    {
                        title: 'Masonry',
                        name: '#'
                    }]
                }]
            },
            {
                state: false,
                color: 'fc5',
                page: 'Blog',
                section: [
                    {
                        title: 'Right Sidebar',
                        name: '#'
                    },
                    {
                        title: 'Left Sidebar',
                        name: '#'
                    },
                    {
                        title: 'Centered',
                        name: '#'
                    },
                    {
                        title: 'Post Tipe',
                        state: false,
                        section: [{
                            title: 'Standard Post',
                            name: '#'
                        },
                        {
                            title: 'No Sidebar Post',
                            name: '#'
                        },
                        {
                            title: 'Gallery Post',
                            name: '#'
                        },
                        {
                            title: 'Audio Post',
                            name: '#'
                        },
                        {
                            title: 'Video Post',
                            name: '#'
                        },
                        {
                            title: 'Link Post',
                            name: '#'
                        },
                        {
                            title: 'Quote Post',
                            name: '#'
                        },
                        ]
                    }
                ]
            },
            {
                state: false,
                color: 'fc4',
                page: 'Shop',
                section: [
                    {
                        title: 'Product List',
                        name: '#'
                    },
                    {
                        title: 'Product Single',
                        name: '#'
                    },
                    {
                        title: 'Shop Layouts',
                        state: false,
                        section: [{
                            title: 'Three Columns',
                            name: '#'
                        },
                        {
                            title: 'Three Columns Wide',
                            name: '#'
                        },
                        {
                            title: 'Four Columns',
                            name: '#'
                        },
                        {
                            title: 'Four Columns Wide',
                            name: '#'
                        },
                        {
                            title: 'Five Columns',
                            name: '#'
                        },
                        {
                            title: 'Five Columns Wide',
                            name: '#'
                        }
                        ]
                    },
                    {
                        title: 'Shop Pages',
                        state: false,
                        section: [{
                            title: 'My Account',
                            name: '#'
                        },
                        {
                            title: 'Cart',
                            name: '#'
                        },
                        {
                            title: 'Checkout',
                            name: '#'
                        }
                        ]
                    }
                ]
            },
            {
                state: false,
                color: 'fc6',
                page: 'Elements',
                area: [{
                    page: 'Classic',
                    section: [{
                        title: 'Accordions',
                        name: '#'
                    },
                    {
                        title: 'Tabs',
                        name: '#'
                    },
                    {
                        title: 'Buttons',
                        name: '#'
                    },
                    {
                        title: 'Blog List',
                        name: '#'
                    },
                    {
                        title: 'Clients',
                        name: '#'
                    },
                    {
                        title: 'Contact',
                        name: '#'
                    },
                    {
                        title: 'Contact Form',
                        name: '#'
                    },
                    {
                        title: 'Video Button',
                        name: '#'
                    },
                    {
                        title: 'Image Gallery',
                        name: '#'
                    }]
                },
                {
                    page: 'Interactive',
                    section: [{
                        title: 'Vertical Split Slider',
                        name: '#'
                    },
                    {
                        title: 'Portfolio Slider',
                        name: '#'
                    },
                    {
                        title: 'Interactive Link Showcase',
                        name: '#'
                    },
                    {
                        title: 'Portfolio List',
                        name: '#'
                    },
                    {
                        title: 'Shop List',
                        name: '#'
                    },
                    {
                        title: 'Process',
                        name: '#'
                    },
                    {
                        title: 'Team',
                        name: '#'
                    },
                    {
                        title: 'Testimonials',
                        name: '#'
                    }]
                },
                {
                    page: 'Infographic',
                    section: [{
                        title: 'Counter',
                        name: '#'
                    },
                    {
                        title: 'Countdown',
                        name: '#'
                    },
                    {
                        title: 'Progress Bar',
                        name: '#'
                    },
                    {
                        title: 'Pie Chart',
                        name: '#'
                    },
                    {
                        title: 'Princing Tables',
                        name: '#'
                    },
                    {
                        title: 'Images Whith Text',
                        name: '#'
                    },
                    {
                        title: 'Icon List Item',
                        name: '#'
                    },
                    {
                        title: 'Icon Whith Text',
                        name: '#'
                    }]
                },
                {
                    page: 'Typography',
                    section: [{
                        title: 'Headings',
                        name: '#'
                    },
                    {
                        title: 'Columns',
                        name: '#'
                    },
                    {
                        title: 'Section Title',
                        name: '#'
                    },
                    {
                        title: 'Blockquote',
                        name: '#'
                    },
                    {
                        title: 'Dropcaps',
                        name: '#'
                    },
                    {
                        title: 'Highlights',
                        name: '#'
                    },
                    {
                        title: 'Separators',
                        name: '#'
                    },
                    {
                        title: 'Custom Font',
                        name: '#'
                    }]
                }]
            }
            ]
        }
    }
}


</script>

<template>
    <div class="d-flex align-items-center">
        <div v-for="page in pages" :class="'ms-listlink' + ' ' + 'ms-underline' + ' ' + page.color">{{ page.page }}
            <div>
                <ul>
                    <li> </li>
                </ul>
            </div>
        </div>
    </div>






    <div>
        <ul class="d-flex align-items-center">
            <li class="ms-listlink ms-underline fc3" @click="store.cardOffertdirection = false">
                <router-link :to="{ name: 'Home' }" class="nav-link">
                    Home
                </router-link>
            </li>
            <li class="ms-listlink ms-underline fc1" @click="store.cardOffertdirection = false">
                <router-link :to="{ name: 'OurTeam' }" class="nav-link">
                    OurTeam
                </router-link>
            </li>
            <li class="ms-listlink ms-underline fc2" @click="store.cardOffertdirection = true">
                <router-link :to="{ name: 'WhatWeOffer' }" class="nav-link">
                    WhatWeOffer
                </router-link>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>
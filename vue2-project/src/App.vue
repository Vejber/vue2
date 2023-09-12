<template>
  <div id="app">
    <!-- <IndexPage :cards="cards" /> -->
    <!-- <BlogPage :cards="cards"/> -->
    <!-- <BlogDetailsPage /> -->
    <CategoriesPage :cards="categoriesCards"/>
  </div>
</template>

<script>
import CategoriesPage from './components/pages/CategoriesPage.vue';

// import IndexPage from './components/pages/IndexPage.vue';
// import BlogPage from './components/pages/BlogPage.vue';
// import BlogDetailsPage from './components/pages/BlogDetailsPage.vue';
// import image from '@/assets/img/'

export default {
  name: 'App',
  components: {
    // IndexPage,
    // BlogPage
    // BlogDetailsPage,
    CategoriesPage
},

  data() {
    return {
        svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        cards:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign.png',
                        // imgSrc: 'vue2-project/src/assets/img/kitchenDesign.png',
                        // imgSrc: '../assets/img/kitchenDesign.png',
                        // imgSrc: '/Users/zenecka/vue2/vue2-project/src/assets/img/kitchenDesign.png',
                        imgSrc: 'kitchenDesign.png',
                        imgAlt: 'kitchenDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },
                

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: this.svg,
                                                // `<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 2,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingRoomDesign.png',
                        imgSrc: 'livingRoomDesign.png',
                        imgAlt: 'livingRoomDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas.',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 3,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign.png',
                        imgSrc: 'interiorDesign.png',
                        imgAlt: 'interiorDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 4,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign2.png',
                        imgSrc: 'kitchenDesign2.png',
                        imgAlt: 'kitchenDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 5,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingDesign2.png',
                        imgSrc: 'livingDesign2.png',
                        imgAlt: 'livingDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 6,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign2.png',
                        imgSrc: 'interiorDesign2.png',
                        imgAlt: 'interiorDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
        ],
        cardsPage2:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign.png',
                        imgSrc: 'kitchenDesign.png',
                        imgAlt: 'kitchenDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },
                

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: this.svg,
                                                // `<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 2,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingRoomDesign.png',
                        imgSrc: 'livingRoomDesign.png',
                        imgAlt: 'livingRoomDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas.',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 3,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign.png',
                        imgSrc: 'interiorDesign.png',
                        imgAlt: 'interiorDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 4,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign2.png',
                        imgSrc: 'kitchenDesign2.png',
                        imgAlt: 'kitchenDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 5,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingDesign2.png',
                        imgSrc: 'livingDesign2.png',
                        imgAlt: 'livingDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 6,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign2.png',
                        imgSrc: 'interiorDesign2.png',
                        imgAlt: 'interiorDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
        ],
        cardsPage3:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign.png',
                        imgSrc: 'kitchenDesign.png',
                        imgAlt: 'kitchenDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },
                

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: this.svg,
                                                // `<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 2,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingRoomDesign.png',
                        imgSrc: 'livingRoomDesign.png',
                        imgAlt: 'livingRoomDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas.',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 3,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign.png',
                        imgSrc: 'interiorDesign.png',
                        imgAlt: 'interiorDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 4,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign2.png',
                        imgSrc: 'kitchenDesign2.png',
                        imgAlt: 'kitchenDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 5,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingDesign2.png',
                        imgSrc: 'livingDesign2.png',
                        imgAlt: 'livingDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 6,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign2.png',
                        imgSrc: 'interiorDesign2.png',
                        imgAlt: 'interiorDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
        ],
        cardsPage4:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign.png',
                        imgSrc: 'kitchenDesign.png',
                        imgAlt: 'kitchenDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },
                

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: this.svg,
                                                // `<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 2,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingRoomDesign.png',
                        imgSrc: 'livingRoomDesign.png',
                        imgAlt: 'livingRoomDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas.',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 3,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign.png',
                        imgSrc: 'interiorDesign.png',
                        imgAlt: 'interiorDesign',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 4,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/kitchenDesign2.png',
                        imgSrc: 'kitchenDesign2.png',
                        imgAlt: 'kitchenDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Kitchan Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Let’s Get Solution For Building Construction Work',
                                p: 
                                    {
                                        text: '26 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 5,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/livingDesign2.png',
                        imgSrc: 'livingDesign2.png',
                        imgAlt: 'livingDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Living Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Low Cost Latest Invented Interior Designing Ideas',
                                p: 
                                    {
                                        text: '22 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
            {
                id: 6,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        // imgSrc: 'assets/img/interiorDesign2.png',
                        imgSrc: 'interiorDesign2.png',
                        imgAlt: 'interiorDesign2',
                        imgClass: 'card__img-trio',
                        divClass: 'card-img-text',
                        divText: 'Interior Design',
                    },

                child2: 
                    {
                        parentDivClass: 'card__info',
                        childDiv:
                            {
                                class: 'card__info_text',
                                h2: 'Best For Any Office & Business Interior Solution',
                                p: 
                                    {
                                        text: '25 December,2022 ',
                                        a: 
                                            {
                                                href: '#',
                                                class: 'card__button',
                                                svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',

                                            }
                                        
                                    }
                                
                            }
                        
                    },
                
            },
        ],

        categoriesCards:{
          
          'Bathroom':{
            
            card1:{
              imgSrc: 'categories-bathroom1.jpg',
              imgAlt: 'bathroom1',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card1',
            },
            card2:{
              imgSrc: 'categories-bathroom2.jpg',
              imgAlt: 'bathroom2',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card2',
            },
            card3:{
              imgSrc: 'categories-bathroom3.jpg',
              imgAlt: 'bathroom3',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card3',
            },
            card4:{
              imgSrc: 'categories-bathroom4.jpg',
              imgAlt: 'bathroom4',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card4',
            },
            card5:{
              imgSrc: 'categories-bathroom5.jpg',
              imgAlt: 'bathroom5',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card5',
            },
            card6:{
              imgSrc: 'categories-bathroom6.jpg',
              imgAlt: 'bathroom6',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card6',
            },
            card7:{
              imgSrc: 'categories-bathroom7.jpg',
              imgAlt: 'bathroom7',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card7',
            },
            card8:{
              imgSrc: 'categories-bathroom8.jpg',
              imgAlt: 'bathroom8',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal Bathroom',
              class: 'grid-card card8',
            },
            
          },
          'Bedroom':{
            
            card1:{
              imgSrc: 'bedroom1.jpg',
              imgAlt: 'bedroom1',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card1',
            },
            card2:{
              imgSrc: 'bedroom2.jpg',
              imgAlt: 'bedroom2',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card2',
            },
            card3:{
              imgSrc: 'bedroom3.jpg',
              imgAlt: 'bedroom3',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card3',
            },
            card4:{
              imgSrc: 'bedroom4.jpg',
              imgAlt: 'bedroom4',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card4',
            },
            card5:{
              imgSrc: 'bedroom5.jpg',
              imgAlt: 'bedroom5',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card5',
            },
            card6:{
              imgSrc: 'bedroom6.jpg',
              imgAlt: 'bedroom6',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card6',
            },
            card7:{
              imgSrc: 'bedroom7.jpg',
              imgAlt: 'bedroom7',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card7',
            },
            card8:{
              imgSrc: 'bedroom8.jpg',
              imgAlt: 'bedroom8',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal bedroom',
              class: 'grid-card card8',
            },
            
          },
          'Kitchen':{
            
            card1:{
              imgSrc: 'kitchen1.jpeg',
              imgAlt: 'kitchen1',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card1',
            },
            card2:{
              imgSrc: 'kitchen2.jpeg',
              imgAlt: 'kitchen2',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card2',
            },
            card3:{
              imgSrc: 'kitchen3.jpeg',
              imgAlt: 'kitchen3',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card3',
            },
            card4:{
              imgSrc: 'kitchen4.jpeg',
              imgAlt: 'kitchen4',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card4',
            },
            card5:{
              imgSrc: 'kitchen5.jpeg',
              imgAlt: 'kitchen5',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card5',
            },
            card6:{
              imgSrc: 'kitchen6.jpeg',
              imgAlt: 'kitchen6',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card6',
            },
            card7:{
              imgSrc: 'kitchen7.jpeg',
              imgAlt: 'kitchen7',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card7',
            },
            card8:{
              imgSrc: 'kitchen8.jpeg',
              imgAlt: 'kitchen8',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal kitchen',
              class: 'grid-card card8',
            },
            
          },
          'Living Area':{
            
            card1:{
              imgSrc: 'livingArea1.jpeg',
              imgAlt: 'livingArea1',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card1',
            },
            card2:{
              imgSrc: 'livingArea2.jpeg',
              imgAlt: 'livingArea2',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card2',
            },
            card3:{
              imgSrc: 'livingArea3.jpeg',
              imgAlt: 'livingArea3',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card3',
            },
            card4:{
              imgSrc: 'livingArea4.jpeg',
              imgAlt: 'livingArea4',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card4',
            },
            card5:{
              imgSrc: 'livingArea5.jpeg',
              imgAlt: 'livingArea5',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card5',
            },
            card6:{
              imgSrc: 'livingArea6.jpeg',
              imgAlt: 'livingArea6',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card6',
            },
            card7:{
              imgSrc: 'livingArea7.jpeg',
              imgAlt: 'livingArea7',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card7',
            },
            card8:{
              imgSrc: 'livingArea8.jpeg',
              imgAlt: 'livingArea8',
              li:{
                li1:'Decor',
                li2:'/',
                li3:'Architecture',
              },
              h3:'Minimal living area',
              class: 'grid-card card8',
            },
            
          },
          
        }
    };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: DM Serif Display;
  transition: 1s;
}

a {
  text-decoration: none;
  color: black;
}
a:hover {
  cursor: pointer;
}

svg:hover {
  cursor: pointer;
}

li {
  list-style-type: none;
}

button:hover {
  cursor: pointer;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.svg-lines {
  position: absolute;
  z-index: -1;
  display: flex;
  gap: 399px;
}

.header {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  margin-bottom: 60px;
}
.header__menu {
  display: flex;
  gap: 63px;
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.logo {
  font-size: 40px;
  font-weight: 400;
  line-height: 125%;
}

.top {
  height: 890px;
  display: flex;
  flex-direction: column;
}
.top__content {
  height: 2028px;
  /* background-image: url(../img/top-photo.png); */
  background-repeat: no-repeat;
  align-items: center;
  background-position: center;
  justify-content: center;
  border-radius: 65px;
  position: relative;
}
.top__content__block {
  position: absolute;
  top: 230px;
  left: 75px;
  width: 41%;
  display: flex;
  gap: 20px;
  flex-direction: column;
}
.top__content__block_h1 {
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
.top__content__block_p {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.top__content__block_button {
  display: flex;
  padding: 26px 49px 26px 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 50%;
  border-radius: 18px;
  background: #292F36;
  color: #FFF;
  font-family: Jost;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.36px;
  height: 75px;
  outline: none;
  border: 0px;
}
.top__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 130px;
  padding-top: 90px;
  width: 60%;
  align-self: center;
}
.top__text_h1 {
  color: #292F36;
  text-align: center;
  font-family: DM Serif Display;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
}
.top__text_p {
  color: #4D5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.main {
  margin-top: 90px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
}
.main__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 100px;
  margin-bottom: 100px;
}
.main__cards .border-radius-top-right {
  border-top-right-radius: 80px;
}
.main__cards .border-radius-top-left {
  border-top-left-radius: 80px;
}
.main__cards .border-radius-bottom-left {
  border-bottom-left-radius: 80px;
}
.main__cards .border-radius-bottom-right {
  border-bottom-right-radius: 80px;
}
.main__cards_card {
  width: 550px;
}
.main__cards_card_imgs {
  position: relative;
}
.main__cards_card .card__info {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.main__cards_card .card__info h2 {
  font-size: 25px;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}
.main__cards_card .card__info p {
  color: #4D5053;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.main__cards_card.trio {
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  padding: 21px;
  width: 382px;
}
.main__cards_card.trio .card__info_text {
  margin-top: -25px;
  display: flex;
  flex-direction: column;
}
.main__cards_card.trio .card__info_text h2 {
  text-align: start;
}
.main__cards_card.trio .card__info_text p {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  text-align: left;
  margin-top: 35px;
  color: #4D5053;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.main__cards_card.trio:hover {
  background-color: #F4F0EC;
}
.main__cards_card.trio:hover svg circle.beige-white {
  fill: white;
}
.main__cards_card .card__img-trio {
  border-top-left-radius: 62px;
  border-top-right-radius: 62px;
}
.main__cards_card .card-img-text {
  bottom: 25px;
  position: absolute;
  left: 25px;
  background-color: white;
  font-family: Jost;
  line-height: 150%;
  letter-spacing: 0.16px;
  border-radius: 8px 8px 8px 0px;
  height: 40px;
  width: 125px;
  align-items: center;
  display: flex;
  justify-content: center;
}
.main .blog-buttons {
  margin-top: 50px;
  margin-bottom: 105px;
  align-self: center;
  align-items: center;
  display: flex;
  gap: 20px;
}
.main .blog-buttons__button {
  width: 52px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid #CDA274;
  background-color: #fff;
  color: #292F36;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  text-transform: capitalize;
}
.main .blog-buttons__button:hover {
  background-color: #F4F0EC;
  border: #F4F0EC;
}
.main__info {
  height: 460px;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: rgb(244, 240, 236);
  left: 0px;
  justify-content: center;
  align-self: center;
  gap: 105px;
  margin-bottom: 95px;
}
.main__info_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.main__info h2 {
  color: #CDA274;
  font-family: DM Serif Display;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1.7px;
}
.main__info p {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.main__news {
  margin-top: 724px;
  display: flex;
  flex-direction: column;
}
.main__news h2 {
  color: #292F36;
  text-align: center;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 1px;
}
.main__news h2.text-left {
  align-self: flex-start;
  margin-bottom: 30px;
}
.main__news p {
  color: #4D5053;
  text-align: center;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
  width: 60%;
  align-self: center;
  margin-bottom: 55px;
}
.main__news_cards {
  display: flex;
  gap: 27px;
  flex-wrap: wrap;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 95px;
}
.footer__logo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-basis: 30%;
}
.footer__text {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.footer__icons {
  margin-top: 5px;
  display: flex;
  gap: 55px;
}
.footer__pages, .footer__contacts {
  flex-basis: 30%;
  padding-left: 45px;
}
.footer h2 {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
.footer menu li, .footer menu li a {
  color: #4D5053;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 300%;
  letter-spacing: 0.22px;
}

.blog-top {
  width: 100vw;
  /* background-image: url(../img/blog-top.jpg); */
  background-image: url(../src/assets/img/blog-top.jpg);
  height: 356px;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-position: center;
}

.blog-top__categories{
  background-image: url(../src/assets/img/categories-page-top.jpg);
}
.blog-top__box {
  background: white;
  width: 40%;
  height: 50%;
  border-radius: 37px 37px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.blog-top__box h1 {
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
.blog-top__box menu {
  display: flex;
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
  gap: 5px;
}
.blog-top.blog-details {
  /* background-image: url(../img/blog-detail-top.jpg); */
}

.latest-post {
  margin-top: 230px;
}
.latest-post h2 {
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
}
.latest-post__post {
  margin-top: 25px;
  display: flex;
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  padding: 22px;
  gap: 65px;
}
.latest-post__post_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  justify-content: space-around;
}
.latest-post__post_info .card__info_text {
  width: 100%;
}
.latest-post__post_info .card__info_text p {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.latest-post__post_info h3 {
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}
.latest-post__post_info p {
  color: #4D5053;
  font-family: Jost;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.latest-post__post img {
  border-radius: 62px;
}

.blogs-list {
  margin-top: 100px;
}

.blogs-list-content {
  padding: 25px;
  display: flex;
  gap: 52px;
  justify-content: space-between;
}

.blogs-box {
  width: 67%;
}

.tags-box {
  width: 33%;
}

.blog {
  cursor: pointer;
  margin: 0 0 45px 0;
}

.blog-content-img {
  width: 100%;
  border-radius: 50px;
}

.blog-content-img-wrapper {
  margin-bottom: 46px;
}

.blog-header {
  margin-bottom: 21px;
}

.blog-header__text {
  color: #292F36;
  font-family: DM Serif Display, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
}

.blog-date__text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.blog-crumbs__text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}

.blog-text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.blog-details-content-top {
  display: flex;
  padding: 53px 227px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  background: #F4F0EC;
  margin-bottom: 27px;
}

.blog-details-content-top__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blog-details-content-top__text {
  color: #CDA274;
  text-align: center;
  font-family: DM Serif Display, sans-serif;
  font-size: 25px;
  font-style: italic;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}

.blog-details-content-main {
  margin-bottom: 44px;
}

.blog-details-content-main__header {
  color: #292F36;
  font-family: DM Serif Display, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.blog-details-content-main__text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.blog-details-content-sub-img {
  border-radius: 50px;
  width: 100%;
}

.blog-details-content-sub-img-wrapper {
  margin-bottom: 35px;
}

.blog-details-content-sub__text {
  color: #4D5053;
  font-family: Jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.tag {
  padding: 9px 30px;
  border-radius: 10px;
  background: #F4F0EC;
  color: #292F36;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  cursor: pointer;
}

.tag:hover {
  background: #292F36;
  color: #fff;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}

.tag-clicked {
  background: #292F36;
  color: #fff;
  text-align: center;
  font-family: Jost, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
}

.tags-box {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 10px;
}

/* .categories-tabs{
        margin-top: 200px;
        margin-bottom: 60px;
        height: 75px;
        display: flex;
        border: 1px solid rgba(205, 162, 116, 1);
        border-radius: 20px;
        width: 40vw;
        justify-content: space-evenly;
}

.categories-tabs button{
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
  background-color: unset;
  border: 0px;
  border-radius: 20px;
  width: 25%;
}
.categories-tabs button:focus{
  background-color: rgba(205, 162, 116, 1);
  color: white;
}

.categories-catalog{
    display: flex;
    flex-direction: column;
    align-items: center;
} */
</style>

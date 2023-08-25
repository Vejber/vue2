// const app = new Vue();
// console.log(app);

const app = new Vue({
    el: '#news',
    data: {
        svg: '<svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        cards:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
                        imgSrc: 'img/kitchenDesign.png',
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
                        imgSrc: 'img/livingRoomDesign.png',
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
                        imgSrc: 'img/interiorDesign.png',
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
                        imgSrc: 'img/kitchenDesign2.png',
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
                        imgSrc: 'img/livingDesign2.png',
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
                        imgSrc: 'img/interiorDesign2.png',
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
                        imgSrc: 'img/kitchenDesign.png',
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
                        imgSrc: 'img/livingRoomDesign.png',
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
                        imgSrc: 'img/interiorDesign.png',
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
                        imgSrc: 'img/kitchenDesign2.png',
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
                        imgSrc: 'img/livingDesign2.png',
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
                        imgSrc: 'img/interiorDesign2.png',
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
                        imgSrc: 'img/kitchenDesign.png',
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
                        imgSrc: 'img/livingRoomDesign.png',
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
                        imgSrc: 'img/interiorDesign.png',
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
                        imgSrc: 'img/kitchenDesign2.png',
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
                        imgSrc: 'img/livingDesign2.png',
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
                        imgSrc: 'img/interiorDesign2.png',
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
                        imgSrc: 'img/kitchenDesign.png',
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
                        imgSrc: 'img/livingRoomDesign.png',
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
                        imgSrc: 'img/interiorDesign.png',
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
                        imgSrc: 'img/kitchenDesign2.png',
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
                        imgSrc: 'img/livingDesign2.png',
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
                        imgSrc: 'img/interiorDesign2.png',
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
    },
});
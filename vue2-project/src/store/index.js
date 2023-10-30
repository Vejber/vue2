import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        //начальное состояние
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
                  
        },
        cards:[
            {
                id: 1,
                parentClass: 'main__cards_card trio',
                child1:
                    {
                        divImgClass: 'main__cards_card_imgs',
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
        projectText:{
            h1: 'Minimal Look Bedrooms',
            upperParagraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ',
            downParagraph: 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.',
            sliderItems:[
                {id: 1, name: 'img1', img: 'slide.png', alt:'sliderItem1'},
                {id: 2, name: 'img2', img: 'slide.png', alt:'sliderItem2'},
                {id: 3, name: 'img3', img: 'slide.png', alt:'sliderItem3'},
            ]
        }
    },
    mutations:{
        // методы для изменения состояния
        SET_CATEGORIES_CARDS(state, categories_cards){
            state.categoriesCards = categories_cards;
        },
        SET_CARDS(state, cards){
            state.cards = cards
        },
        SET_CARDS_PAGE2(state, cardsPage2){
            state.cardsPage2 = cardsPage2
        },
        SET_CARDS_PAGE3(state, cardsPage3){
            state.cardsPage3 = cardsPage3
        },
        SET_CARDS_PAGE4(state, cardsPage4){
            state.cardsPage4 = cardsPage4
        },

        SET_PROJECT_TEXT(state, projectText){
            state.projectText = projectText
        }

    },
    actions:{
        // методы для асинхронных операций
    },
    getters:{
        // методы для чтения состояния
        getCategoriesCards:(state) => state.categoriesCards,
        getCards:(state) => state.cards,
        getCardsPage2:(state) => state.cardsPage2,
        getCardsPage3:(state) => state.cardsPage3,
        getCardsPage4:(state) => state.cardsPage4,
        getProjectText:(state) => state.projectText,
    },
    modules:{
        // модули Vuex для разделения хранилища на под-хранилища
    }
});
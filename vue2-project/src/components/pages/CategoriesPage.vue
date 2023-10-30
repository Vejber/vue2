<template>
    <div id="app">
        <div class="svg-lines center">
            <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.500092" y1="7.48501e-08" x2="0.500051" y2="3144.64" stroke="#E6E6E6"/>
            </svg>
            <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.500092" y1="7.48501e-08" x2="0.500051" y2="3144.64" stroke="#E6E6E6"/>
            </svg>
            <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.500092" y1="7.48501e-08" x2="0.500051" y2="3144.64" stroke="#E6E6E6"/>
            </svg>
            <svg width="1" height="3145" viewBox="0 0 1 3145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.500092" y1="7.48501e-08" x2="0.500051" y2="3144.64" stroke="#E6E6E6"/>
            </svg>                                                          
      </div>
        <HeaderComponent/>
        <div class="blog-top center blog-top__categories">
            <div class="blog-top__box">
                <h1>Our Project</h1>
                <menu>
                    <li><a href="index.html">Home</a></li>
                    <li>/</li>
                    <li><a href="blog.html">Blog</a></li>
                </menu>
            </div>
        </div>
        <div class="categories-catalog center">
            <div class="categories-tabs">
                <button class="categories-tabs__button"
                v-for="tab in tabs" :key="tab.id"
                @click="currentTab = tab, changeArray"
                >
                {{ tab }}
                </button>
            </div>
            <div class="grid-template center">
                <div
                v-for="card in theArray" :key="card.id" :class="card.class"
                >
                <img :src="require(`@/assets/img/${card.imgSrc}`)" :alt="card.imgAlt">
                <div class="card__info_text">
                        <p>
                        {{card.h3}} <br>
                        <menu>
                            <li v-for="li in card.li" :key="li.id">
                                {{ li }}
                            </li>
                        </menu>        
                        </p>
                        <a href="#" class="card__button">
                            <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                                <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>                  
                        </a>
                </div>
                </div>
            </div> 
            <div class="blog-buttons">
                <button class="blog-buttons__button" >01</button>
                <button class="blog-buttons__button" >02</button>
                <button class="blog-buttons__button" >03</button>
                <button class="blog-buttons__button" ><svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                    <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg></button>
            </div>
        </div>
        
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import FooterComponent from '../FooterComponent.vue';

export default {
    name: 'CategoriesPage',
    components: {
        HeaderComponent,
        FooterComponent,
    },
    data(){
        return{
            tabs:['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
            currentTab: 'Bathroom',
            cards: this.$store.getters.getCategoriesCards,
            theArray: [],
            
        }
    },

    
    computed:{
        changeArray(){
            Object.keys(this.cards).forEach(key =>{
                if(this.currentTab === key){
                    this.theArray = this.cards[key];
                }
            });
            return this.theArray;
        },
    },
}
</script>

<style lang="css" scoped>
    .categories-tabs{
        margin-top: 200px;
    }

    .categories-tabs{
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
    }

    .grid-template{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(10, 1fr);
        gap: 30px;
    }

    .grid-card{
        width: 30vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .grid-card h3{
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 125%;
        letter-spacing: 0.5px;
    }

    .grid-card li{
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: 0.22px;
    }

    .grid-card img{
        min-height: 87%;
        object-fit: cover;
        margin-bottom: 25px;
    }

    .card__info_text{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card__info_text p{
        display: flex;
        width: 70%;
        flex-direction: column;
        align-items: flex-start;
    }

    .card__info_text menu{
        display: flex;
    }

    .card1{
    grid-row: 1 / span 3;
    grid-column: 1;
    }
    .card2{
    grid-column: 2;
    grid-row: 1 / span 2;
    }
    .card3{
    grid-row: 3 / span 3;
    grid-column: 2;
    }

    .card4{
    grid-row: 4 / span 2;
    grid-column: 1;
    }

    .card5{
    grid-row: 6 / span 3;
    grid-column: 1;
    }

    .card6{
    grid-row: 6 / span 2;
    grid-column: 2;
    }

    .card7{
    grid-row: 8 / span 2;
    grid-column: 2;
    }

    .card8{
    grid-row: 9 / span 2;
    grid-column: 1;
    }

    .blog-buttons {
    margin-top: 60px;
    margin-bottom: 105px;
    align-self: center;
    align-items: center;
    display: flex;
    gap: 20px;
    }

    .blog-buttons__button {
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
    line-height: 150%;
    text-transform: capitalize;
    }
    
    .blog-buttons__button:hover {
    background-color: #F4F0EC;
    border: #F4F0EC;
    }

</style>
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
        <div class="blog-top center blog-top__project">
        </div>
        <div class="project__text center">
            <h1 class="project__text_header">
                {{ getProjectText.h1 }}
            </h1>
            <p class="project__text_upper-paragraph">
                {{ getProjectText.upperParagraph }}
            </p>
            <br>
            <p class="project__text_down-paragraph">
                {{ getProjectText.downParagraph }}
            </p>
        </div>
        <!-- <div class="container center">
            <div class="slide center">
                <img src="../../assets/img/slide.png" alt="slide">
            </div>
            <div class="slide center">
                <img src="../../assets/img/slide.png" alt="slide">
            </div>
            <div class="slide center">
                <img src="../../assets/img/slide.png" alt="slide">
            </div>
        </div> -->
        
        <!-- <CarouselComponent :carousel_data="projectText.sliderItems"/> -->
        <CarouselComponent />

        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import FooterComponent from '../FooterComponent.vue';
import CarouselComponent from '../CarouselComponent.vue';

export default {
    name: 'ProjectDetailsPage',
    // props:{
    //     carousel_data:{
    //         type: Array,
    //         default:() => []
    //     }
    // },
    components: {
        HeaderComponent,
        FooterComponent,
        CarouselComponent
    },
    data(){
        return{
            // tabs:['Bathroom', 'Bedroom', 'Kitchen', 'Living Area'],
            // currentTab: 'Bathroom',
            // theArray: [],
            // sliderItems:[
            //     {id: 1, name: 'img1', img: 'img1'},
            //     {id: 2, name: 'img2', img: 'img2'},
            //     {id: 3, name: 'img3', img: 'img3'},
            // ]
            
        }
    },

    computed:{
        // getHeader(){
        //     return this.$store.getters.getProjectText.h1
        // },

        // getUpperParagraph(){
        //     return this.$store.getters.getProjectText.upperParagraph
        // },
        // getDownParagraph(){
        //     return this.$store.getters.getProjectText.downParagraph
        // },

        getProjectText(){
            return this.$store.getters.getProjectText
        }
    }

    // computed:{
    //     changeArray(){
    //         Object.keys(this.cards).forEach(key =>{
    //             if(this.currentTab === key){
    //                 this.theArray = this.cards[key];
    //             }
    //         });
    //         return this.theArray;
    //     },
    // },
}
</script>

<style lang="css" scoped>
/* .app{
    display: flex;
    flex-direction: column;
} */
.blog-top__project{
    background-image: url(../../assets/img/projectDetailsTop.png);
}

.container {
    align-self: center;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  width: 300px;
  -webkit-overflow-scrolling: touch; /* для плавной прокрутки на мобильных устройствах */
}

.slide {
  flex: none;
  scroll-snap-align: start;
  width: 300px;
  text-align: center;
}

</style>
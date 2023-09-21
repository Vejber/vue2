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
        <CarouselItemComponent />
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import FooterComponent from '../FooterComponent.vue';
import CarouselItemComponent from '../CarouselItemComponent.vue';

export default {
    name: 'ProjectDetailsPage',

    components: {
        HeaderComponent,
        FooterComponent,
        CarouselItemComponent
    },
    data(){
        return{
        }
    },

    computed:{
        getProjectText(){
            return this.$store.getters.getProjectText
        }
    }
}
</script>

<style lang="css" scoped>
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

.project__text{
    margin-top: 200px;
    /* width: 660px; */
    gap: 20px;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
}

.project__text h1{
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;
}

.project__text p{
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
}

</style>
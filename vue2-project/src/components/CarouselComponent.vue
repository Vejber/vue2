<template>
    <!-- <div class="wrapper center"> -->
        <CarouselItemComponent/>
        
    <!-- </div> -->
</template>

<script>
// import HeaderComponent from '../HeaderComponent.vue';
// import FooterComponent from '../FooterComponent.vue';
// import CarouselComponent from '../CarouselComponent.vue';
import CarouselItemComponent from './CarouselItemComponent.vue'

export default {
    name: 'CarouselComponent',
    components: {
        CarouselItemComponent
    },
    data(){
        return{
            // currentSlideIndex: 0,
        }
    },

    computed:{
        getProjectTextSliderItems(){
            return this.$store.getters.getProjectText.sliderItems
        }
    }
}
</script>

<style lang="css" scoped>
/* .wrapper{
        max-width: 800px;
        overflow: hidden;
    } */
</style>
<template>
    <div class="wrapper center">
        <div class="wrapper-carousel"
        :style="{'margin-left': + '-' + (100 * currentSlideIndex) + '%'}"
        >
            <div class="v-carousel-item"
            v-for="item in this.item_data"
            :key="item.id"
            >
                <img :src="require('../assets/img/' + item.img)" :alt="item.alt">
            </div>

        </div>
        <div class="buttons">
                <button @click="prevSlide">button</button>
                <button>button</button>
                <button @click="nextSlide">button</button>
        </div>
    </div>
</template>

<script>
// import HeaderComponent from '../HeaderComponent.vue';
// import FooterComponent from '../FooterComponent.vue';
// import CarouselComponent from '../CarouselComponent.vue';

export default {
    name: 'CarouselItemComponent',
    data(){
        return{
            item_data: this.$store.getters.getProjectText.sliderItems,
            currentSlideIndex: 0,
        }
    },

    methods:{
        prevSlide(){
            if(this.currentSlideIndex > 0){
                this.currentSlideIndex--
            }
        },

        nextSlide(){
            this.currentSlideIndex++
        }
    },

    computed:{
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
    /* .wrapper-carousel{
        max-width: 800px;
        overflow: hidden;
    } */
    .wrapper-carousel{
        display: flex;
        /* flex-direction: column; */
    }

    .wrapper{
        max-width: 800px;
        overflow: hidden;
    }
</style>
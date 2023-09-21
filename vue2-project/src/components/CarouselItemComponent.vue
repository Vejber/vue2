<template>
    <div class="wrapper center">
        <div class="wrapper-carousel">
            <div class="v-carousel-item"
            v-for="item in this.item_data"
            :key="item.id"
            >
                <img :src="require('../assets/img/' + item.img)" :alt="item.alt" :style="style" class="slider-img">
            </div>

        </div>
        <div class="buttons">
                <button @click="prevSlide"></button>
                <button></button>
                <button @click="nextSlide"></button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CarouselItemComponent',
    data(){
        return{
            item_data: this.$store.getters.getProjectText.sliderItems,
            currentSlideIndex: 0,
            style:''
        }
    },

    methods:{
        prevSlide(){
            if(this.currentSlideIndex > 0){
                this.currentSlideIndex--;
                this.style = `margin-left:-${200 * this.currentSlideIndex}%;`
            }
        },

        nextSlide(){
            this.currentSlideIndex++;
            this.style = `margin-left:-${200 * this.currentSlideIndex}%;`
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
    .wrapper-carousel{
        display: flex;
        overflow: hidden;
    }

    .wrapper{
        overflow: hidden;
    }

    .slider-img{
        border-radius: 50px;
    }

    .buttons{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }
    .buttons button{
        border-radius: 50%;
        width: 10px;
        height: 10px;
        border: 2px solid black;
        background-color: white;
    }

    .project__text{
        margin-top: 200px;
        gap: 20px;
        display: flex;
        flex-direction: column;
    }
</style>
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
        <div class="blog-top center">
            <div class="blog-top__box">
                <h1>Articles & News</h1>
                <menu>
                    <li><a href="index.html">Home</a></li>
                    <li>/</li>
                    <li><a href="blog.html">Blog</a></li>
                </menu>
            </div>
        </div>
        <div class="latest-post center">
            <h2>Latest Post</h2>
            <div class="latest-post__post">
                <div class="latest-post__post_img">
                    <img src="../../assets/img/latest-post.png" alt="latest-post">
                </div>
                <div class="latest-post__post_info">
                    <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
                    <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief. Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <div class="card__info_text">
                        <p>
                        26 December,2022 
                        <a href="#" class="card__button">
                        <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/>
                            <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                  
                        </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="main center">
        <div class="main__news center" style="margin-top: unset;" id="news">
            <h2 class="text-left">Articles & News</h2>
            <CardsComponent :cards="cards"/>
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
import CardsComponent from '../CardsComponent.vue';
import FooterComponent from '../FooterComponent.vue';
// import FooterComponent from '../FooterComponent.vue';
export default {
    name: 'BlogPage',
    props:['cards'],
    components: {
        HeaderComponent,
        CardsComponent,
        FooterComponent,
    },
    data(){
        return{}
    }
    // components: { FooterComponent }
}
</script>

<style lang="scss" scoped>

</style>
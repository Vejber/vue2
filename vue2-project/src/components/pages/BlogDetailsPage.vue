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
        <div class="blog-top blog-details center"></div>
        <div class="#" id="blog">
            <BlogsListComponent class="center"></BlogsListComponent>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
import FooterComponent from '../FooterComponent.vue';
import BlogsListComponent from '../BlogsListComponent.vue';
export default {
    name: 'BlogDetails',
    components: {
        HeaderComponent,
        FooterComponent,
        BlogsListComponent
    },
    data(){
        return{}
    }
}
</script>

<style lang="css" scoped>

</style>
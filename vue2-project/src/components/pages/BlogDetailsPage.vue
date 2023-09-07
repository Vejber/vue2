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
  <!-- <button
  @click="currentTab = btn"
  v-for="btn in nameButtons"
  :key="btn.id"
  >
  {{btn}}
  </button> -->

  <!-- <component :is="changeTabs"></component> -->
  <!-- <blog
      :title="changeTabs.title"
      :img="changeTabs.img"
      :alt="changeTabs.alt"
      :p="changeTabs.p"
      :menu="changeTabs.menu"
      :blog_details="changeTabs.blog_details"
      :svg="changeTabs.svg"
      :p_quote="changeTabs.p_quote"
      :h2="changeTabs.h2"
      :p_under_quote="changeTabs.p_under_quote"
      :li_down="changeTabs.li_down"
      :down_img="changeTabs.down_img"
      :down_alt="changeTabs.down_alt"
      :p_down="changeTabs.p_down"
  >

  </blog> -->
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue';
// import CardsComponent from '../CardsComponent.vue';
import FooterComponent from '../FooterComponent.vue';
// import FooterComponent from '../FooterComponent.vue';
import BlogsListComponent from '../BlogsListComponent.vue';
export default {
    name: 'BlogDetails',
    // props:['cards'],
    components: {
        HeaderComponent,
        // CardsComponent,
        FooterComponent,
        BlogsListComponent
    },
    data(){
        return{}
    }
    // components: { FooterComponent }
}
</script>

<style lang="scss" scoped>

</style>
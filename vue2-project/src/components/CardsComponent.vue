<template>
    <div class="main__news_cards" style="overflow: hidden; flex-wrap: nowrap;">
          <div v-for="(card) in cards" :key="card.id" :class="card.parentClass">
            <!-- class="main__cards_card trio" -->
              
              <div :class="card.child1.divImgClass"><!-- <div class="main__cards_card_imgs"> -->
                  <img :src="require(`@/assets/img/${card.child1.imgSrc}`)" :alt="card.child1.imgAlt" :class="card.child1.imgClass">
                  <div :class="card.child1.divClass">{{card.child1.divText}}</div>
              </div>
              <div :class="card.child2.parentDivClass"> <!-- <div class="card__info" -->
                  <div :class="card.child2.childDiv.class"> <!-- card__info_text -->
                      <h2> {{card.child2.childDiv.h2}} </h2>
                      <p>
                          {{card.child2.childDiv.p.text}}
                          <a :href="card.child2.childDiv.p.a.href">
                              <svg width="52" height="53" viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="beige-white" cx="26" cy="26.267" r="26" fill="#F4F0EC"/><path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>

                          </a>
                      </p>
                  </div>
              </div>
          </div>
      </div>
</template>

<script>
    export default {
        name: 'CardsComponent',
        data(){
            return{
                cards: this.$store.getters.getCards
            }
        }
    }
</script>

<style lang="css" scoped>

</style>
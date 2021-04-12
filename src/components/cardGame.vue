<template>
    <div :class="classy">
                  <div class="most__recommend--list-item" >
                    <div class="most__recommend--list-item_image">
                      <img v-if="flag" :src="bgImage" alt=""/>
                      <img v-else :src="game.background_image" alt=""/>
                      <div class="list-item_image--rating">
                        <i class="icon icon-star-rating"></i>
                        <span v-if="game.rating">{{game.rating}}</span>
                      </div>
                    </div>
                    <div class="most__recommend--list-item_desc">
                      <p>{{game.name}} </p>
                    </div>
                    <router-link :to="{path:`/game-details/${game.id}`}" class="btn btn-block button-more">
                      More Info
                    </router-link>
                  </div>
                </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:['classy','game','flag','bgImage'],
  
}
</script>
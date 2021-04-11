<template>
    <section class="most__recommend mt-5" id="game-list">
        <div class="container">
          <div class="row">
            <div class="col-12 white__bg">
              <div class="most__recommend--title d-flex align-items-center" v-if="this.$store.state.SearchResultData.results && this.$store.state.SearchResultData.results.length> 0">
                <h4 class="mr-auto">
                  {{listName}}
                </h4>
                <router-link :to="{path:'/search'}" class="d-flex align-items-center">See all <i class="icon icon-arrow"></i></router-link>
              </div>
              <div class="most__recommend--list d-flex flex-wrap" v-if="catFilterFlag">
                <game-item v-for="(game,i) in recentGames[0].slice(start,end)" :flag="true" :bg-image="tagBgImg" :key="i" :game="game" :classy="'col-xl-20 col-md-4 col-sm-6 col-12'"></game-item>
              </div>
              <div class="most__recommend--list d-flex flex-wrap" v-else>
                <game-item v-for="(game,i) in recentGames.slice(start,end)" :key="i" :game="game" :classy="'col-xl-20 col-md-4 col-sm-6 col-12'"></game-item>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>
<script>
export default {
    name:'game-list',
    data(){
        return{

        }
    },
    props:['recentGames','start','end','listName','catFilterFlag',"tagBgImg"],
  
    
}
</script>
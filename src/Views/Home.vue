<template>
  <div id="game-details">
    <header-items/>

      <section class="category">
        <div class="category__cat--slider" v-if="tags && tags.results && tags.results.length>0">
          <carousel :autoWidth="true" :margin="10" :autoplay="true" :nav="false" :loop="true" :dots="false" :center="true" :autoplayHoverPause="true">
          <div class="item" :class="{'active': index == i}" v-for="(tag,i) in tags.results" :key="tag.id" @click.prevent="filterByTag(tag) , addActive(i)">{{tag.name}} <i :class="{'active': index == i}" class="icon icon-checked"></i></div>
          </carousel>
        </div>
      </section>


      <section class="features__games mt-5">
        <div class="container">
          <div class="row">
            <div class="features__games--bg">
            <div class="col-12 d-flex flex-wrap px-0">
              <div class="col-xl-9 col-lg-9 col-md-12 col-12 px-0">
                <div class="features__games--bg-img">
                <img v-if="feature && feature.background_image"
                  :src="feature.background_image"
                  class="img-fluid"
                  alt=""
                />
                <img v-else
                  src="../assets/img/banners/feature.jpg"
                  class="img-fluid"
                  alt=""
                />
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-12 col-12 white__bg">
                <div class="features__games--description" v-if="feature">
                  <h2>
                    {{feature.name}}
                    <span class="slug">{{feature.slug}}</span>
                  </h2>
                  <div class="features__games--description-text">
                   <p>SURF the urban wave! DODGE the oncoming trains!</p>
                  </div>
                  <span class="features__games--description-downloads">
                    {{feature.added}}K downloads
                  </span>
                  <router-link :to="{path:`/game-details/${feature.id}`}" class="btn btn-block features__games--description-more">
                    More Info
                  </router-link>
                </div>
                  <div class="features__games--description" v-else>
                  <h2>
                    subway surfers
                    <span class="slug"> sybo games </span>
                  </h2>
                  <div class="features__games--description-text">
                   <p>SURF the urban wave! DODGE the oncoming trains!</p>
                  </div>
                  <span class="features__games--description-downloads">
                    300K downloads
                  </span>
                  <button class="btn btn-block features__games--description-more">
                    More Info
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
<game-list v-if="this.tagGames && this.tagGames.length>0" :tagBgImg="tagBgImg" :catFilterFlag="true" :recent-games="this.tagGames" :start="'0'" :end="'5'" :listName="'Category Filter'"></game-list>

<game-list :recent-games="this.$store.state.SearchResultData.results" :start="'13'" :end="'18'" :listName="'Most Recommendation'"></game-list>
<game-list :recent-games="this.$store.state.SearchResultData.results" :start="'15'" :end="'20'" :listName="'Most Popular'"></game-list>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { getTags } from '../servicesRequests';
export default {

  name: 'home',
  data(){
    return{
      feature:{},
      tags:{},
      tagGames:[],
      tagBgImg:'',
      index:null,
    }
  },
  components: { carousel },
  methods:{
    getFeatureData(){
      this.getAllfilterTags();
      let len = this.$store.state.SearchResultData.results.length;
      // this for get random index from array of games to display it in feature section
       this.feature =  this.$store.state.SearchResultData.results[Math.floor(Math.random() * len)];
    },
    getAllfilterTags(){
      getTags().then(response=>{
        this.tags = response.data
      })
    },
    filterByTag(singleTage){
      if(this.tags){
        let found = this.tags.results.find((tag) => tag.id == singleTage.id)
        if(found){
          this.tagActive = false;
          this.tagGames= [];
          this.tags.results.map((tagGame)=>{
            this.tagGames.push(tagGame.games)
            this.tagBgImg = singleTage.image_background
               this.tagActive = true;
          })
        }
      
      }
    },
    addActive(i){
      this.index = i
    }
  },
  computed:{
  },
  mounted(){
    
  },
  created(){
  this.getFeatureData();
  },
  watch:{
   feature(){
     window.setTimeout(()=>{
             this.getFeatureData();
           },8000);
      },
      getAllfilterTags(){
        this.getAllfilterTags()
      }
      // tagGames(){

      // }
  }
}
</script>

<style>

</style>

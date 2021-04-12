<template>
  <div id="game-detials">
    <header-items />
    <section class="detail__games mt-5">
      <div class="container">
        <div class="row">
          <div class="detail__games--bg">
            <div class="col-12 d-flex flex-wrap px-0">
              <div class="col-xl-12 col-lg-12 col-md-12 col-12 px-0 mb-4">
                <div class="detail__games--image-wrap">
                  <img
                    :src="pageData.background_image"
                    class="img-fluid"
                    alt=""
                  />
                </div>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-12 white__bg">
                <div class="detail__games--description" :class="read?'':'read-more'">
                  <h2>
                    {{ pageData.name_original }}
                    <span class="slug"> {{ pageData.slug }} </span>
                  </h2>
                  <span class="detail__games--description-downloads mb-4">
                    {{ pageData.twitch_count }} downloads
                  </span>
                  <div class="detail__games--description-text">
                    <div v-html="pageData.description"></div>
                  </div>
                  <video width="100%" v-if="pageData && pageData.clip && pageData.clip.preview" :poster="pageData.clip.preview" controls>
                    <source :src="pageData.clip.clips.full" type="video/mp4" />
                    <source :src="pageData.clip.clips.full" type="video/ogg" />
                   
                  </video>

                </div>
                  <button class="btn detail__games--description-more" @click="readMore()">
                    {{readMoreText}}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <game-list :listName="'Most Recommended'" :recent-games="this.$store.state.SearchResultData.results" :start="'12'" :end="'17'"></game-list>
  </div>
</template>

<script>
// import { bus } from '../main'; 
import GameList from '../components/GameList.vue';
import { getGameDetails } from "../servicesRequests";
export default {
  components: { GameList },
  name: "game-details",
  data() {
    return {
      id: this.$route.params.id,
      pageData: {},
      read:true,
      readMoreText:'See More',
      recentGames:[],
    };
  },
  methods: {

    getGameDetail() {
      getGameDetails(this.id).then((respons) => {
        this.pageData = respons.data;
         this.$store.commit("getSearchResult");
       
      });
    },
    readMore(){
      this.read = !this.read
      if(!this.read){
        this.readMoreText= 'See Less'
      }else{
        this.readMoreText = 'See More'
      }
    },
    
  },
  created() {
    this.getGameDetail();
    
  },
  watch:{
    $route(to) {
      this.id = to.params.id;
      window.location.reload();
        this.getGameDetail();
    },
  }
};
</script>

<style></style>

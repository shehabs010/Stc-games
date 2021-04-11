<template>
  <div id="search-list">
      <header-items/>
      <div class="container">
      <div class="most__recommend--list mt-5">
        <div class="row">
          <div class="col-12 d-flex flex-wrap ">
      <game-item v-for="game in this.$store.state.SearchResultData.results"
        :key="game.id"
        :game="game" :classy="'col-xl-20 col-md-4 col-sm-6 col-12'"></game-item>
        </div>
        </div>
      </div>
      </div>
       <scroll-loader :loader-method="getNextPage" :loader-enable="loading">
    </scroll-loader>
  </div>
</template>

<script>
export default {
  data() {
    return {
      term: "",
    };
  },
  methods: {
      getNextPage(){
      this.$store.commit('gotoNextPage')
    },
  },
  mounted(){
     this.getNextPage()
  },
  created() {
    if (this.term != null) {
      this.$store.commit("getSearchResult");
    }
    this.term = window.localStorage.searchTerm;
  },
  watch: {
    $route(to) {
      this.term = to.query.query;
      this.term = window.localStorage.searchTerm;
      this.$store.commit('getSearchResult');
    },
  },
};
</script>

import Vue from 'vue'
import Vuex from 'vuex'
import {getResultItems,gotoNextPages} from './servicesRequests';
Vue.use(Vuex);
let searchTerm = window.localStorage.getItem('searchValue');

export const store = new Vuex.Store({

    state: {
        SearchResultData: {
            results: [],
            next: null,
          },
          filters:{
              sortby:'relevance',
              type:'video'
          },
        searchInput:searchTerm,
    },
    mutations: {
        SearchQuery:function (state,term){
            //let self = this;
            state.searchInput = term;
            window.localStorage.setItem('searchTerm', state.searchInput);
            this.commit('getSearchResult')
        },
        getSearchResult:function(state){
            state.SearchResultData.nextPageToken = null;
            getResultItems(state.searchInput)
              .then((response) => {
                state.SearchResultData = [];
                state.term = "";
                state.SearchResultData = response.data;
                //this.loading = false;
              })
              .catch(function(error) {
                // handle error
                console.log(error);
              });
        },
      
        gotoNextPage(state) {
            // if (!this.loading) {
              gotoNextPages(state.SearchResultData.next).then((response) => {
                if (response.data.results.length > 0) {
                  state.SearchResultData.results.push(...response.data.results);
                  // state.SearchResultData.pageInfo = response.data.pageInfo;
                  state.SearchResultData.next = response.data.next;
                }
              });
            // }
          },

    },
  
});
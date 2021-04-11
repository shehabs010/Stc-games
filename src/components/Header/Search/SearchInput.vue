<template>
<div>

 <div class="header__section--search-popup" :class="open?'active':''">
 <form class="d-flex" @submit.prevent="saveTermToStore()">
       <a href="" @click.prevent="closeSearch"><i class="fas fa-times"></i></a>
        <input class="form-control" type="text" v-model="query" placeholder="Search" aria-label="Search">
   </form>

   <div class="d-flex flex-wrap px-5 auto-complete-list justify-content-center" v-if="query">
       <card-game :game="search" v-for="search in autoCompletes" :key="search.id"></card-game>
   </div>
     

 </div>
</div>
  
</template>

<script>
import cardGame from '../../cardGame.vue';
// import { bus } from '../../../main';
export default {
  components: { cardGame },
    name:"search-input",
    data(){
      return{
        query:'',
       
      }
    },
    props:['open'],

    methods:{
  
      closeSearch(){
        this.query= "";
        this.$emit('update:open',false);
      } 
    },
    computed:{
      searchLoactStorage(){
        return this.$store.state.searchTerm
      },
      autoCompletes:function(){
        let results = this.$store.state.SearchResultData.results;
        if(this.query){
        var autoCompleteList = results.filter((item) =>{
          
           return  this.query.toLowerCase().split(' ').every(v => item.name.toLowerCase().includes(v))
        });
        }
        return autoCompleteList;
      }
    },
 
     created(){
          this.$store.commit('SearchQuery');
     }
    
}
</script>
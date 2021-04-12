<template>
      <!--============
  =======  Header
============================= -->
      <header class="header__section" id="header-items">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-5 col-6 mr-auto">
              <div class="header__section--logo d-flex">
                <router-link to="" class="d-block">
                  <img
                    class="img-fluid"
                    src="../../assets/img/logo.svg"
                    alt=""
                  />
                </router-link>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-5 col-6">
              <div class="header__section--search d-flex justify-content-end">
                 <a href="#" @click.prevent="show()" class="mr-4"><i class="icon icon-search"></i></a>
               <Search  :open.sync="open"/>
                <a href="#"><i class="icon icon-points"></i></a>
                
              </div>
            </div>
          </div>
        </div>
      </header>
</template>

<script>
// import { bus } from '../../main';

import Search from './Search/SearchInput';
export default {
    name:"header-items",
    data(){
      return{
       open:false,
       
      }
    },
    props:[],
    components:{
      Search
    },  
    methods:{
     show(){
       this.open =true;
     }
     

        // bus.$emit('getQuery',this.query);
      
    },
    computed:{
    },
    watch:{
   
     },created(){
      
     }
    
}
</script>
import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/Views/Home.vue';
import SearchResult from '@/Views/Search.vue';
import GameDetails from '@/Views/GameDetails.vue';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '',
            name: 'search-result',
            component: Home
        },
        {
            path: `/search`,
            name: 'search-result',
            component: SearchResult
        },
        {
            path: '/game-details/:id',
            name: 'game',
            component: GameDetails,
        },
        {
            path: '*',
            redirect: '/',

        }
    ]
});


export default router
<template>
    <div class="home-container">
        <div v-if="categoryIds.length > 0" class="music-list-wrapper">
            <div v-for="(category, index) in categoryIds" :key="index" class="music-list-item">
                <div >
                    <img src="../../assets/img/more.png" class="music-list-more" v-on:click="goToMoreMusicLists(category)" type="button"/>
                    <MusicListsView :categoryId="category" :categoryName="categoryNames[index]" />
                </div>
            </div>

        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>
</template>

<script>
import MusicListsView from './MusicListsView.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: 'HomeView',
    components: {
        MusicListsView
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        const categoryIds = ref(['10000000', '165', '167']);
   
        const categoryNames = ref(['华语', '流行', '摇滚']);
        
        const goToMoreMusicLists = (categoryId) => {
            console.log('test')
            console.log("fdfa", categoryId)
            console.log('test')
            
            store.dispatch('setMusicListsData', {categoryId: categoryId});       //只是存入了歌单id
            router.push({ path: `/musiclistsview/${categoryId}` });
        };

        return {
            categoryIds,
            categoryNames,
            goToMoreMusicLists
        }
    }
}
</script>


<style scoped> 
.music-list-more {
    float: right;
    width: 40px;
}
</style>
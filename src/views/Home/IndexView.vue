<template>
    <div class="home-container">
        <div v-if="categoryIds.length > 0" class="music-list-wrapper">
            <div v-for="(category, index) in categoryIds" :key="index" class="music-list-item">
                <div >
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
import { ref } from 'vue';

export default {
    name: 'HomeView',
    components: {
        MusicListsView
    },
    setup() {
        const categoryIds = ref(['10000000', '165', '167']);
        //加载多个歌单

        const categoryNames = ref(['华语', '流行', '摇滚']);
        return {
            categoryIds,
            categoryNames
        }
    }
}
</script>



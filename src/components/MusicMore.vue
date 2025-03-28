<template>
    <div class="home-container">
        <div v-if="categoryInfo?.categoryId" class="music-list-wrapper">
            <div>
                <MusicListsView :categoryId="categoryInfo.categoryId || '10000000'" :limit="20"/>
            </div>
        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>
</template>

<script>
import MusicListsView from '../views/Home/MusicListsView.vue';
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'MusicMore',
    components: {
        MusicListsView
    },
    setup() {
        const store = useStore();
        let categoryInfo = computed(() => {
            return store.state.musicListsData;
        });
        onMounted(() => {
            console.log(categoryInfo.value)
            console.log(categoryInfo.value.categoryId)
        })

        return {
            categoryInfo
        }
    }
}
</script>

<!-- 预期是期望展示多张歌单的页面 -->>

<!-- 这个是为了展示hot歌曲版本 -->

<template>
    <div class="music-list-container">
        <div class="list-name"> <strong>{{ categoryName }}</strong> <img src="../../assets/img/more.png" class="music-list-more" v-on:click="goToMoreMusicList" type="button"/> </div>
        <div v-if="musicLists.length > 0" class="music-list-wrapper">

            <div v-for="(musicList, index) in musicLists" :key="index" class="music-list-item"
                @click="goToMusicListDetail(musicList)">
                <img :src="musicList.imgurl" :alt="musicList.dissname" class="music-list-image" />
                <div class="music-list-info">
                    <p class="music-list-name">{{ musicList.dissname }}</p>
                </div>
            </div>
        </div>
        <div v-else class="loading">
            <p>加载中...</p>
        </div>
    </div>
</template>

<script>
import api from '../../api';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';

export default {
    name: 'MusicListsView',
    props: {
        title: String,
        description: String,
        categoryId: {
            String,
            default: '10000000'
        },   //传入的歌单类别
        categoryName: {
            String,
            default: '热门歌单'
        },
        limit: {
            type: Number,
            default: 6 //默认只展示六个歌单
        },

    },
    setup(props) {
        const router = useRouter();
        const store = useStore();
        let musicLists = ref([]);
        const fetchMusicLists = async () => {
            console.log(props.categoryId);
            try {
                console.log(1);
                const response = await api.getSongLists({
                    categoryId: props.categoryId,
                    limit: props.limit
                }); // 传递歌单 ID      
                //console.log(2);            
                //console.log(response);
                musicLists.value = response.response.data.list; // 提取每个歌单的数据
                console.log(musicLists)
            } catch (error) {
                console.error('Hot-获取歌单失败：', error);
            }
        };
        // 跳转到歌单详情页
        const goToMusicListDetail = (musicList) => {
            console.log(musicList.dissid);
            store.dispatch('setMusicListData', musicList);
            router.push({ path: `/musiclistview/${musicList.dissid}` });
        };

        onMounted(() => {
            fetchMusicLists();
        });

        return {
            musicLists, // 存储多个歌单的数据
            goToMusicListDetail
        };
    }

};
</script>

<style scoped>
.music-list-more {
    float: right;
    width: 20px;
}


.music-list-container {
    padding: 20px;
    background-color: #f4f4f4;
}

.music-list-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.music-list-item {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.music-list-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.music-list-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
}

.music-list-info {
    padding: 10px;
}

.music-list-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin: 0;
    text-align: center;
}

.list-name {
    font-size: 40px;
    width: 100%;
}

.loading {
    text-align: center;
    font-size: 18px;
    color: #666;
    padding: 20px;
}
</style>
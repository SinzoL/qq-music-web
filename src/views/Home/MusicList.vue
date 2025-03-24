<template>
  <div class="music-list-container">
    <div v-if="musicLists.length > 0" class="music-list-wrapper">
      <div
        v-for="(musicList, index) in musicLists"
        :key="index"
        class="music-list-item"
        @click="goToMusicListDetail(musicList)"
      >
        <img :src="musicList.logo" :alt="musicList.dissname" class="music-list-image" />
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

export default {
  name: 'MusicList',
  data() {
    return {
      musicLists: [], // 存储多个歌单的数据
    };
/*************  ✨ Codeium Command ⭐  *************/
  /**
   * 生命周期函数，在组件创建完成后执行
   * 加载多个歌单的数据
   */
/******  327f4035-3b75-4fe1-aaaa-8a4dbe1b8130  *******/  },

  created() {
    this.fetchMusicLists();
  },
  methods: {
    // 获取多个歌单的数据
    async fetchMusicLists() {
      try {
        const disstids = ['9400846766', '9401874144', '9400750103', 
        '9401908448', '9400803274', '9400808562']; // 多个歌单的 ID
        const requests = disstids.map(disstid =>
          api.getMusicList({ 'disstid': disstid }) // 传递歌单 ID
        );
        const responses = await Promise.all(requests); // 并发请求
        this.musicLists = responses.map(res => res.response.cdlist[0]); // 提取每个歌单的数据
      } catch (error) {
        console.error('获取歌单失败：', error);
      }
    },
    // 跳转到歌单详情页
    goToMusicListDetail(musicList) {
      console.log(musicList.dissid);
      this.$store.dispatch('setMusicListData', musicList);
      console.log('store: ', this.$store.state.musicListData)
      this.$router.push({ path: `/musiclistview/${musicList.disstid}`});
    },
  }
};
</script>

<style scoped>
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

.loading {
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 20px;
}
</style>

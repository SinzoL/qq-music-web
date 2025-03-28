<!-- 展示一张歌单内部的具体内容 -->

<template>
  <div v-if="musiclist" class="music-list-view">
    <img :src="musiclist.logo" alt="歌单封面" class="music-list-view__cover">
    <h2 class="music-list-view__title">
      {{ musiclist.dissname }}
    </h2>
    <div class="music-list-view__meta">
      <p>创建时间：{{ new Date(musiclist.ctime) }}</p>
      <p>歌曲数量：{{ musiclist.songnum }}</p>
    </div>

    <ul class="music-list-view__list">
      <li v-for="song in musiclist.songlist" :key="song.id" class="music-list-view__item">

        <img :src="song.album.picUrl || musiclist.logo" alt="歌曲封面" class="music-list-view__cover">

        <div class="music-list-view__info">
          <h3 class="music-list-view__name">{{ song.name }}</h3>
          <p class="music-list-view__artist">
            歌手：{{ song.singer[0].name }}
          </p>
          <p class="music-list-view__album">
            专辑：{{ song.album.name }}
          </p>
        </div>
        <div class="music-list-view__duration">
          时长: {{ formatDuration(song.interval) }}
        </div>
        <button class="music-list-view__play-btn" @click="playSong(song)">
          播放
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'MusicListView',
  setup() {
    const store = useStore();
    const musiclist = computed(() => {
      return store.state.musicListData;
    })
    const formatDuration = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainSecs = seconds % 60;
      return `${minutes}:${remainSecs < 10 ? '0' + remainSecs : remainSecs}`;
    };
    return {
      musiclist,
      formatDuration
    }
  },

  mounted() {
    console.log('test')
    console.log(this.musiclist);
  }

}
</script>

<style scoped lang="scss">
// 变量定义
$primary-color: #ff5722;
$hover-color: #e64a19;
$text-dark: #222;
$text-light: #888;
$bg-gradient: linear-gradient(135deg, #f9f9f9, #e3e3e3);
$shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.05);
$shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
$border-radius: 8px;
$transition: all 0.3s ease;

// 歌单容器
.music-list-view {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: $border-radius;
  background: $bg-gradient;
  box-shadow: $shadow-md;

  // 标题样式
  &__title {
    font-size: 22px;
    margin-bottom: 15px;
    color: $text-dark;
    font-weight: bold;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: $primary-color;
      margin: 10px auto 0;
    }
  }

  // 歌曲列表
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  // 歌曲项
  &__item {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: $border-radius - 2;
    background: #fff;
    box-shadow: $shadow-sm;
    transition: $transition;

    &:hover {
      transform: translateY(-2px);
      box-shadow: $shadow-md;

      .music-list-view__play-btn {
        background: $hover-color;
      }
    }
  }

  // 歌曲封面
  &__cover {
    width: 50px;
    height: 50px;
    border-radius: $border-radius - 2;
    object-fit: cover;
    margin-right: 15px;
    box-shadow: $shadow-sm;
  }

  // 歌曲信息
  &__info {
    flex-grow: 1;
  }

  // 歌曲名称
  &__name {
    font-size: 18px;
    margin: 0;
    color: $text-dark;
    font-weight: 600;
  }

  // 歌手信息
  &__artist {
    margin: 5px 0 0;
    color: $text-light;
    font-size: 14px;
  }

  // 播放按钮
  &__play-btn {
    background: $primary-color;
    color: #fff;
    padding: 8px 12px;
    border: none;
    border-radius: $border-radius - 4;
    cursor: pointer;
    font-size: 14px;
    transition: $transition;
    min-width: 70px;
    text-align: center;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>

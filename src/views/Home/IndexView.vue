<template>
    <div class="home">
        <h1>新歌榜</h1>
        <MusicList/>
    </div>
</template>

<script>
import MusicList from './MusicList.vue'

export default {
    name: 'HomeView', 
    components: {
        MusicList
    }
}
</script>


<style scoped>

</style>
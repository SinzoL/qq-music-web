<!-- 显示更多音乐 -->
<!-- 将会使用已经定义好了的MulicListsView -->>

<template>
    <MusicListsView :categoryId="0" :categoryName="'更多音乐'" />
</template>

<script> 
import MusicListsView from './MusicListsView.vue';

export default {
    name: 'MusicMore',
    components: {
        MusicListsView
    }
}


</script>
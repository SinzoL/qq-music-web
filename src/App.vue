<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue';


export default {
  name: 'App',
  components: {
  },
  setup() {
    onMounted(() => {
      document.title = 'MoonTooth'; // 这里可以写你的网站名称
    });
  }
}
</script>
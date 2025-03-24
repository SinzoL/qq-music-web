<template>
  <div>
    <div>
      <ul class="top-nav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/search">搜索</router-link></li>
        <li><router-link to="/mine">我的</router-link></li>
        <li><router-link to="/topic">主题</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style scoped lang="scss">
.top-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  height: 60px;
  background: rgba(49, 194, 124, 0.9);
  /* 半透明绿 */
  backdrop-filter: blur(10px);
  /* 毛玻璃效果 */
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  /* 底部边框，提升层次感 */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  /* 轻微阴影 */

  li {
    margin: 0 15px;

    a {
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      transition: color 0.3s ease-in-out, transform 0.2s ease;

      &:hover {
        color: #a4eacb;
        /* 浅绿色 */
        transform: scale(1.1);
        /* 悬浮微微放大 */
      }

      &.router-link-exact-active {
        color: #c2d64d;
        /* 选中状态的深绿色 */
        font-weight: bold;
        position: relative;

        /* 底部高亮线 */
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 3px;
          background-color: #1dbf60;
          position: absolute;
          bottom: -5px;
          left: 0;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>

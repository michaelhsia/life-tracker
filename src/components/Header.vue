<script lang="ts" src="./Header.ts"></script>

<template>
  <div>
    <ul>
      <li><router-link to="/">首頁</router-link></li>
      <li><router-link to="/location">旅遊地點</router-link></li>
      <li><router-link to="/game">推薦遊戲</router-link></li>
    </ul>
  </div>
</template>



<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    margin-right: 8px;

    a {
      text-decoration: none;
    }
  }


}
</style>

<script lang="ts" src="./Header.ts"></script>

<template>
  <div class="text-align-left w-">
    <ul>
      <li><a href="#">首頁</a></li>
      <li><a href="#">旅遊地點</a></li>
      <li><a href="#">推薦遊戲</a></li>
    </ul>
  </div>
  {{ msg }}
  <input type="text" v-model="msg">
</template>



<style scoped>
.text-align-left {
  margin-right: auto;
}

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

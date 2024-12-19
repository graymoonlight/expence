<template>
  <v-app>
    <v-container>
      <h1 class="text-center">Калькулятор расходов</h1>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>

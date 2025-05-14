<template>
  <div class="foodheaven-view">

    <ToolbarComponent></ToolbarComponent>

    <!-- Contenido de las vistas, debe tener un <router-view /> donde se renderizan las vistas hijas -->
    <router-view />
  </div>
</template>

<script setup>
import ToolbarComponent from '@/comida/presentation/tool-bar.component.vue';
</script>

<style scoped>

</style>

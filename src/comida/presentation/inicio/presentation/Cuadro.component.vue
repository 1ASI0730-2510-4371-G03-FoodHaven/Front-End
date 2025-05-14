<script setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <div class="contenedor">
    <h2>{{ $t('cuadro.title') }} <span>60</span></h2>
    <p>{{ $t('cuadro.text') }}</p>
  </div>
</template>

<style scoped>
  .contenedor{
    width: 400px;
    padding: 40px;
    height: 200px;
    border-radius: 10px;
    border: 1px solid black;
    margin-left: 20px;
  }
  .contenedor span{
    color: white;
    background-color: #53b453;
    border-radius: 10px;
    padding: 5px;
    margin: 5px;
  }

  @media (max-width: 680px) {
    .contenedor{

      height: 270px;
      padding: 10px;

    }
  }

</style>
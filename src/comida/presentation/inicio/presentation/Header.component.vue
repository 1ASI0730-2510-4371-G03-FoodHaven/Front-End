<script setup>
import pv_cuadro from "@/comida/presentation/inicio/presentation/Cuadro.component.vue";
import pv_calendar from "@/comida/presentation/inicio/presentation/Calendar.component.vue";


import { useI18n } from 'vue-i18n';

const { t } = useI18n();

</script>

<template>
  <h1>{{ $t('header.title') }}</h1>
  <p>{{ $t('header.paragraph1') }} <span>{{ $t('header.span') }}</span> {{ $t('header.paragraph2') }}</p>

  <div class="contenedor-header">

    <pv_cuadro/>
    <pv_calendar/>
  </div>

  <div class="contenedor-fechas">
    <a href="#">{{ $t('cuadro.dia1') }}</a>
    <a href="#">{{ $t('cuadro.dia2') }}</a>
    <a href="#">{{ $t('cuadro.dia3') }}</a>
    <a href="#">{{ $t('cuadro.dia4') }}</a>
    <a href="#">{{ $t('cuadro.dia5') }}</a>
    </div>



</template>

<style scoped>
  h1{
    margin: 20px;
    text-align: center;
    font-size: 40px;
  }

  p{
    text-align: center;
    margin-bottom: 30px;
  }
  span{
    font-weight: bold;
  }

  .contenedor-header{
    display: flex;
    justify-content: center;
    height: 300px;
  }
  .contenedor-fechas{
    display: flex;
    max-width: 700px;
    margin: 0 auto;
    justify-content: space-between;
  }

  .contenedor-fechas a {
    text-decoration: none;
    color: black;
    border: 1px solid black;
    padding: 20px;
    border-radius: 10px;

  }

  .contenedor-fechas a:hover {
    background-color: #45ce45;
    border: none;
    color: white;
  }
</style>
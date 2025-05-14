<script setup>
import CardCenasComponent from "@/comida/presentation/inicio/presentation/CardCenas.component.vue";
import {defineProps} from "vue";
import {ComidaAssembler} from "@/comida/presentation/inicio/application/comida.assembler.js";
import {RecetasApiService} from "@/comida/presentation/inicio/application/recetas-api.service.js";
import {onBeforeMount, ref} from "vue";

const recetasApiService = new RecetasApiService();

const articles = ref([])

onBeforeMount(async () => {
  articles.value = ComidaAssembler.toEntitiesFromResponse(await recetasApiService.getArticles2());

});

defineProps({
  comidas: {
    type: Array,
    required: true
  }
});

</script>

<template>

  <div class="contenedor-principal-cenas">
    <h2>Cenas</h2>
    <hr>

    <div class="contenedor-cenas">
      <card-cenas-component v-for="comida in comidas"
                            :key="comida.id"
                            :comida="comida"
                            />
    </div>
  </div>


</template>

<style scoped>
.contenedor-cenas{
  display: grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 30px;
}
.contenedor-principal-cenas{
  max-width: 1200px;
  margin: 40px auto 20px;

}
hr{
  margin-bottom: 30px;
}

@media (max-width: 680px) {
  .contenedor-cenas{
    grid-template-columns:1fr 1fr ;


  }
  .contenedor-principal-cenas {
    padding: 50px;
  }

}
</style>
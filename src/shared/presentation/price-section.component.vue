<script>
export default {
  name: 'PriceSectionComponent',
}
</script>

<template>
  <!-- Sección de Precios -->
  <section class="container my-5" id="precios">
    <h1 class="text-center mb-4">Precios</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
      <!-- Plan Estándar -->
      <div class="col d-flex">
        <div
            class="card text-center precio-card w-100 text-white border-green precio-f"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h2 class="card-title nowrap">Plan Estándar</h2>
              <h3 class="card-subtitle text-black price nowrap">
                S/ 400.00 / mes
              </h3>
              <ul class="list-unstyled mt-4 mb-4 text-start mx-auto">
                <li>✓ Incluye almuerzo diario</li>
                <li>✓ Control nutricional con contador de calorías</li>
                <li>✓ Acceso completo a planificación y entregas</li>
              </ul>
            </div>
            <a href="login.html" class="btn btn-outline-light rounded-pill mt-auto"
            >Elegir plan</a
            >
          </div>
        </div>
      </div>

      <!-- Plan Tempranero -->
      <div class="col d-flex">
        <div
            class="card text-center precio-card w-100 text-white border-green precio-f"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h2 class="card-title nowrap">Plan Tempranero</h2>
              <h3 class="card-subtitle text-black price nowrap">
                S/ 500.00 / mes
              </h3>
              <ul class="list-unstyled mt-4 mb-4 text-start mx-auto">
                <li>✓ Incluye desayuno y almuerzo</li>
                <li>✓ Control nutricional con contador de calorías</li>
                <li>✓ Acceso completo a planificación y entregas</li>
              </ul>
            </div>
            <a href="login.html" class="btn btn-outline-light rounded-pill mt-auto"
            >Elegir plan</a
            >
          </div>
        </div>
      </div>

      <!-- Plan Bajadón -->
      <div class="col d-flex">
        <div
            class="card text-center precio-card w-100 text-white border-green precio-f"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h2 class="card-title nowrap">Plan Bajadón</h2>
              <h3 class="card-subtitle text-black price nowrap">
                S/ 800.00 / mes
              </h3>
              <ul class="list-unstyled mt-4 mb-4 text-start mx-auto">
                <li>✓ Incluye almuerzo y cena</li>
                <li>✓ Control nutricional con contador de calorías</li>
                <li>✓ Acceso completo a planificación y entregas</li>
              </ul>
            </div>
            <a href="login.html" class="btn btn-outline-light rounded-pill mt-auto"
            >Elegir plan</a
            >
          </div>
        </div>
      </div>

      <!-- Plan Full -->
      <div class="col d-flex">
        <div
            class="card text-center precio-card w-100 text-white border-green precio-f"
        >
          <div class="card-body d-flex flex-column justify-content-between">
            <div>
              <h2 class="card-title nowrap">Plan Full</h2>
              <h3 class="card-subtitle text-black price nowrap">
                S/ 1000.00 / mes
              </h3>
              <ul class="list-unstyled mt-4 mb-4 text-start mx-auto">
                <li>✓ Incluye desayuno, almuerzo y cena</li>
                <li>✓ Control nutricional con contador de calorías</li>
                <li>✓ Acceso completo a planificación y entregas</li>
                <li>✓ Soporte al cliente prioritario</li>
              </ul>
            </div>
            <a href="login.html" class="btn btn-outline-light rounded-pill mt-auto"
            >Elegir plan</a
            >
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-muted mt-5">
      *Es el precio base, los precios pueden variar de acuerdo a la selección
      de platos.
      <br />
      *Hay la posibilidad de un plan cena y desayuno al mismo precio que el
      "Tempranero"
    </p>
  </section>
</template>

<style scoped>

</style>
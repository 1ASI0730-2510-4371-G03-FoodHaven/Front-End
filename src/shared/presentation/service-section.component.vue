<script>
export default {
  name: 'ServiceSectionComponent',
}
</script>

<template>
  <!-- Servicios -->
  <section class="container mt-5" id="servicios">
    <h1 class="text-center mb-4">Servicios</h1>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-calendar-check display-4 mb-3"></i>
            <h2 class="card-title">Planificación Semanal</h2>
            <p class="card-text">
              Organiza tus comidas de la semana según tus necesidades
              nutricionales y preferencias personales.
            </p>
          </div>
        </div>
      </div>

      <!-- Selección de Proveedores -->
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-shop-window display-4 mb-3"></i>
            <h2 class="card-title">Proveedores Personalizados</h2>
            <p class="card-text">
              Conéctate con una red diversa de proveedores que se adaptan a
              tus gustos y estilo de vida.
            </p>
          </div>
        </div>
      </div>

      <!-- Control Nutricional -->
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-heart-pulse-fill display-4 mb-3"></i>
            <h2 class="card-title">Control Nutricional</h2>
            <p class="card-text">
              Sigue tu dieta con un contador de calorías y balance nutricional
              adaptado a tus objetivos.
            </p>
          </div>
        </div>
      </div>

      <!-- Entregas Flexibles -->
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-truck display-4 mb-3"></i>
            <h2 class="card-title">Entrega a Domicilio</h2>
            <p class="card-text">
              Recibe tus comidas en el horario que prefieras, directamente en
              tu casa u oficina.
            </p>
          </div>
        </div>
      </div>

      <!-- Reservas Especiales -->
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-star-fill display-4 mb-3"></i>
            <h2 class="card-title">Gran calidad</h2>
            <p class="card-text">
              Podemos presumir de tener gran calidad tanto en sabor como en salubridad.
            </p>
          </div>
        </div>
      </div>

      <!-- Suscripción Flexible -->
      <div class="col">
        <div class="card h-100 text-center servicio">
          <div class="card-body">
            <i class="bi bi-credit-card-2-front-fill display-4 mb-3"></i>
            <h2 class="card-title">Planes de Suscripción</h2>
            <p class="card-text">
              Elige entre diferentes planes mensuales según la cantidad de
              comidas y servicios que necesitas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
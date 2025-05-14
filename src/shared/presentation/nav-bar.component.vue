<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-xxl">
      <a class="navbar-brand me-auto" href="#">
        <img src="@/assets/images/logo.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top" />
        <span class="text-food">Food</span><span class="text-heaven">Heaven</span>
      </a>

      <!-- Menú lateral -->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <a class="navbar-brand" href="#">
            <img src="" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
            <span class="text-food">Food</span><span class="text-heaven">Heaven</span>
          </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#">Inicio</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#acerca">Acerca de</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#servicios">Servicios</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#comofunciona">¿Cómo funciona?</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#precios">Precios</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#reseñas">Reseñas</a></li>
            <li class="nav-item"><a class="nav-link mx-lg-2" href="#contactanos">Contáctanos</a></li>
          </ul>
          <div class="d-lg-none text-center mt-3">
            <router-link to="/login" class="btn btn-outline-success w-75 rounded-pill">Iniciar Sesión</router-link>
          </div>
        </div>
      </div>

      <!-- Botón login + Language alineados a la derecha -->
      <div class="d-none d-lg-flex align-items-center ms-auto gap-3">
        <router-link to="/login" class="btn btn-outline-success rounded-pill">Iniciar Sesión</router-link>
        <Language />
      </div>

      <!-- Botón menú hamburguesa -->
      <button
          class="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
import Language from "@/comida/presentation/language-switcher,component.vue";

export default {
  name: 'NavbarComponent',
  components: {Language}
}
</script>

<style scoped>
.end-toolbar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
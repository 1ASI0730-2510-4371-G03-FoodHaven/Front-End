<template>
      <div style="transform: scale(0.70); transform-origin: top center;">
        <v-date-picker
            elevation="12"
            color="green"
            hide-header
            show-current="false"
            class="custom-calendar"
            style="border-radius: 10px; font-family: Poppins; border: 1px solid black;"


        />
      </div>
</template>

<style scoped>


/* Oculta la parte verde (header del picker) */
.custom-calendar .v-date-picker-header {
  display: none !important;
}

/* También oculta la parte de “Enter date” si aparece */
.custom-calendar .v-date-picker-title {
  display: none !important;
}

.custom-calendar .v-row {
  display: none !important;
}


</style>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg1.p-4.brad.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 Le damos la bienvenida al componente formativo denominado #[b.t1 “Coordinar campaña ambiental según normativa vigente”] para iniciar visualice el siguiente video y conozca más: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/NQL-u3FAp3w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen) 
        figcaption Video. Coordinar campaña ambiental según normativa vigente            


    p(data-aos="fade-down") Para la elaboración de este componente, se ha abordado a varios autores conocidos en coordinación de campaña ambiental según la normativa vigente, de los cuales se han citado y referenciado conceptos y ejemplos para los fines educativos. Se entiende que el conocimiento es social y, por lo tanto, debe ser utilizado por aquellos que necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos que estén interesados en acercarse a asuntos básicos de prevención y control ambiental.                  
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

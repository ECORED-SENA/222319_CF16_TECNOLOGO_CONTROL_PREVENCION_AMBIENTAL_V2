<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Responsabilidad social empresarial

    p(data-aos="fade-down").mb-5 Las organizaciones se ven cada vez más presionadas por los consumidores, los ciudadanos y las autoridades ambientales para que se comprometan a ofrecer productos y servicios con criterios de sostenibilidad e incluyan dentro de sus activos la protección ambiental, el cumplimiento de la normativa en temas relacionados con el respeto de los derechos laborales y humanos, la transparencia de la información y establezcan canales de comunicación directos y eficientes, con las comunidades en las zonas donde desarrollan sus actividades. 

    .row.justify-content-center.align-items-center.mb-5     
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span  Criterios de la RSE
        img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/71.svg')
        figcaption Nota. Adaptado de Escuela Nacional de Instructores (2016, p. 24).

    p(data-aos="fade-down").mb-5 Se debe tener en cuenta: 

    SlyderF.text-center(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/72.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Compromiso de toda la gestión 
            p.mb-0 La Responsabilidad Social Empresarial (RSE) es el compromiso de las organizaciones, el cual toca toda su gestión y busca lograr positivos impactos en los diferentes sectores de la sociedad.    

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/73.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Impactos múltiples
            p.mb-0 Este compromiso asumido permite gestionar de manera adecuada los impactos sociales, económicos y ecológicos con sus partes interesadas, el ambiente y la sociedad en su conjunto (Orjuela, 2020).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Normativa 
            p.mb-0 A nivel nacional, el Instituto Colombiano de Normas Técnicas ICONTEC (2019) ha publicado la Norma GTC- ISO 26000; aunque esta norma no es certificable, sí orienta a cualquier tipo de organización que de manera voluntaria quiera implementar la RSE.    

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/75.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Involucrando partes interesadas
            p.mb-0 Con la implementación de la RSE, se establecen las características, principios, prácticas, asuntos que se deben incluir, así como las condiciones para promocionar y desarrollar la política que exprese un compromiso responsable y que, también, involucre las partes interesadas bajo su influencia y permita establecer una adecuada comunicación en todos los niveles.                                        
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

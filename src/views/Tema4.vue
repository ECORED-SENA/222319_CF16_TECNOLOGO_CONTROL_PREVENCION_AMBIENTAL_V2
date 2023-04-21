<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Actores sociales
    p(data-aos="fade-down").mb-5 En una sociedad constituida por diferentes tipos de personas, donde se destacan tanto los hombres como las mujeres, los niños y niñas, la familia, la comunidad, entre otros, es importante reconocer cómo se clasifican los diferentes actores que hacen parte de este ecosistema social en el que se vive.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/47.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La identificación de la población y, de manera simultánea, la identificación de necesidades de capacitación por tipo de población, para la aplicación de las estrategias de la campaña ambiental, se convierten en objetivo fundamental de trabajo porque el éxito del proceso depende, en mayor proporción, de la comunidad misma, de las formas organizativas que ella tenga y del territorio y contexto que habita. 

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") ¿Qué es un actor social?

    p(data-aos="fade-down").mb-5 Un actor social es un sujeto naturalmente configurado para vivir en colectivo, pero estructurado a partir de una conciencia de identidad propia individual; es un portador de valores, poseedor de un cierto número de recursos que le permiten actuar en el seno de una sociedad, con vistas a defender los intereses de los miembros que la componen y/o de los individuos que representa, para dar respuesta a las necesidades identificadas como prioritarias. Se incluyen:   

    .row.justify-content-center.align-items-center.mb-5.text-center           
      .col-lg-4.my-3(data-aos="fade-left")
        .bg13.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')
          .row.justify-content-center.mb-4(data-aos="flip-down")        
            .col-auto.bgw.p-2.rouned 
              h5(data-aos="fade-down").mb-0 Grupo e individuos
          p(data-aos="fade-down") También puede ser entendido como un grupo de intervención, que percibe a sus miembros como productores de su historia, para la transformación de su situación.
      .col-lg-4.my-3
        .bg14.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')
          .row.justify-content-center.mb-4(data-aos="flip-down")        
            .col-auto.bgw.p-2.rouned 
              h5(data-aos="fade-down").mb-0 Acción bidireccional
          p(data-aos="fade-down") O sea que el actor social actúa sobre el exterior, pero también sobre sí mismo. En ambos casos, el actor se ubica como sujeto colectivo, entre el individuo y el Estado.
      .col-lg-4.my-3(data-aos="fade-right")
        .bg13.p-3.brad.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')
          .row.justify-content-center.mb-4(data-aos="flip-down")        
            .col-auto.bgw.p-2.rouned 
              h5(data-aos="fade-down").mb-0 Sujetos aportantes
          p(data-aos="fade-down") En dicho sentido, es generador de estrategias de acción (acciones sociales), que contribuyen a la gestión y transformación de la sociedad. (Touraine, 1984).

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Caracterización

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/51.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para realizar una respectiva identificación de los diversos actores sociales y sus potenciales aportes a la campaña ambiental, es importante tener en cuenta las siguientes características. Con ellas es más fácil evaluar a los actores que habría en las comunidades; dicho de otra manera, se trata de definir quién hace qué, en nombre de quién, cómo, con qué objetivo, con quién y con qué resultados. Lo que esto busca es detectar el tipo e intensidad de las relaciones establecidas entre los actores sociales, así como los modos de relación (desde los más conflictivos a los más consensuales), con la finalidad de definir los ejes prioritarios de la acción social, los factores de bloqueo y las posibilidades de resolución de los conflictos.  

    .row.justify-content-center.align-items-center.mb-5.bg12.p-4           
      .col-lg-10
        h5(data-aos="fade-down") Según Kullock et al. (1993), se tiene en cuenta:
        p(data-aos="fade-down").mb-5 Estos actores pueden ser clasificados de diversas maneras según su papel en la sociedad y sus características específicas. A continuación se presentan algunas de las formas de caracterizar a los actores sociales:
        h4(data-aos="fade-down").text-center.mb-4 Caracterización  de los actores sociales: 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") El actor social y el contexto

    p(data-aos="fade-down").mb-5 Los actores sociales dependen en gran medida del contexto en el que se desarrollan; su idiosincrasia y cultura marcan una tendencia específica en los tipos de actores que se encuentran en una población; entre ellos están:  

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
          .row(titulo="Organizaciones comunitarias y juntas vecinales")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/53.png")
              
            .col-md-7.mb-4.mb-md-0
              p Las organizaciones comunitarias de base son la forma asociativa más representativa de los habitantes y en las cuales las actividades se focalizan en el mejoramiento de las condiciones de vida existentes (clubes de madres, asociaciones de jóvenes, asociaciones de padres, y otras). En el mismo sentido, las juntas vecinales constituyen la organización representativa de un sector ante las autoridades administrativas competentes y se ven, así, encargadas por el poder político de las negociaciones entre el sector público y los habitantes. 
          .row(titulo="Las ONG y los colectivos emprendedores")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/54.png")
              
            .col-md-7.mb-4.mb-md-0
              p Las Organizaciones No Gubernamentales defienden ciertos derechos de los habitantes (de carácter humanitario, económico, cultural o político) y se constituyen en grupos de presión ante las instancias involucradas. Por su parte, los colectivos emprendedores son individuos o asociaciones que gerencian el desarrollo e implementación de proyectos y/o emprendimientos, motivo de las EIA y defienden sus intereses de grupo. 
          .row(titulo="Grupos de presión coyuntural y agrupaciones políticas")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/55.png")
              
            .col-md-7.mb-4.mb-md-0
              p Los grupos de presión de carácter coyuntural se caracterizan por su existencia transitoria en relación con un problema limitado en su extensión y en el tiempo, mientras que las agrupaciones políticas defienden a sus afiliados sobre la base de valores ideológicos (construcción teórica de la sociedad y de su evolución), dando lugar a acciones tendientes a hacer evolucionar la organización social en relación con sus valores y con los fines defendidos. 
          .row(titulo="Propietarios de bienes raíces y agentes inmobiliarios")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/56.png")
              
            .col-md-7.mb-4.mb-md-0
              p En tanto los propietarios de bienes raíces son los poseedores de parcelas y de los inmuebles potencialmente afectados en procesos o situaciones diversas, los agentes inmobiliarios operan en el mercado de las propiedades urbanas y rurales. 
          .row(titulo="El sector financiero")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/57.png")
              
            .col-md-7.mb-4.mb-md-0
              p Se trata de la banca hipotecaria, mutuales, cooperativas de crédito y de ahorro, banca comercial; quienes juegan un rol de intermediación del crédito ante el público. 
          .row(titulo="El sector público y los sindicatos")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/58.png")
              
            .col-md-7.mb-4.mb-md-0
              p El sector público son todos aquellos operadores principales en materia de planificación, programación, gestión, supervisión y fiscalización; tienen, en principio, la función de implementar las reglamentaciones y propender al bien común. Por su parte, los sindicatos tienen por objetivo la defensa de los intereses económicos y sociales de los trabajadores incluidos en un mismo rubro de actividades productivas. 
          .row(titulo="Promotores ambientales")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/59.png")
              
            .col-md-7.mb-4.mb-md-0
              p Buscan optimizar la relación de la intervención propuesta con el medio ambiente. (Kullock et al., 1993).                                                                     
</template>

<script>
export default {
  name: 'Tema4',
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

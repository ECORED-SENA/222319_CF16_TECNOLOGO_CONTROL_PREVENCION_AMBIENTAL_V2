<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Estilos de aprendizaje

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/91.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La forma de aprender depende sustancialmente de la condición física y mental para incorporar la información que se asimila, por ende, cada individuo tiene una particular forma de aprender. En este punto, se estudiarán los diferentes estilos de aprendizaje que permiten que cada persona asimile la información que recibe de manera única y singular. Según García (2020), “los estilos de aprendizaje son la forma consistente en la que los estudiantes responden o utilizan los estímulos en el entorno del aprendizaje, es decir, las condiciones educativas bajo las cuales un estudiante es más probable que aprenda”.  

    .row.justify-content-center.align-items-end.mb-5          
      .col-lg-7.my-3
        .row.justify-content-start.mb-4        
          .col-auto.bg4.p-3(data-aos="flip-down")
            h5.mb-0(data-aos="fade-down") Sobre cómo se prefiere aprender 

        .color-fondo-text.bg-color.mb-5(data-aos="fade-down")
          .color-fondo-text__texto.p-2.ps-4 
            p Los estilos de aprendizaje no se refieren realmente a lo que aprenden los estudiantes, sino cómo prefieren aprender y, en muchas ocasiones, cómo les resulta más fácil aprender. Los estilos de aprendizaje son una mezcla de factores cognitivos, afectivos y fisiológicos característicos, que sirven como indicadores relativamente estables de cómo el alumno percibe, interactúa y responde al entorno de aprendizaje.

        .row.justify-content-start.mb-4        
          .col-auto.bg4.p-3(data-aos="flip-down")
            h5.mb-0(data-aos="fade-down") Formas predilectas de aprendizaje?

        .color-fondo-text.bg-color1(data-aos="fade-down")
          .color-fondo-text__texto.p-2.ps-4 
            p Para Alonso, Gallego y Honey (1995), autores del libro Los estilos de aprendizaje, procedimientos de aprendizaje y mejora, “es necesario saber más sobre los estilos de aprendizaje y cuál de éstos define nuestra forma predilecta de aprender. Esto es esencial, tanto para los aprendices como para los maestros”. Estos autores afirman que existen 4 estilos de aprendizaje: aprendizajes activos, reflexivos, teóricos y pragmáticos; los cuales se explican a continuación, de acuerdo con lo indicado por García (2000): 
      .col-lg-5.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/92.png')

    SlyderF.text-center(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/93.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Aprendizaje activo 
            p.mb-0 En los aprendizajes activos, los estudiantes disfrutan de nuevas experiencias, no son escépticos y poseen una mente abierta.    
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/94.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Aprendizaje reflexivo 
            p.mb-0 En los aprendizajes reflexivos, los individuos observan las experiencias desde distintos ángulos. También analizan datos, no sin antes haber reflexionado con determinación.         
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/95.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Aprendizaje teórico 
            p.mb-0 En el aprendizaje teórico, los aprendices suelen tener una personalidad perfeccionista. También son analíticos, pero les gusta sintetizar y buscan integrar los hechos en teorías coherentes, sin dejar cabos sueltos y preguntas sin respuesta.    
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/96.svg' alt='')

        .tarjeta.color-primario.bg10.ts.h-100
          .p-4.pt-5
            h4 Aprendizaje pragmático 
            p.mb-0 Cuando el estilo de aprendizaje es pragmático, son más bien prácticos y necesitan comprobar sus ideas. Son realistas a la hora de tomar decisiones y resolver una cuestión, y orientan su aprendizaje hacia la necesidad de dar respuestas a problemas concretos.                            

    p(data-aos="fade-down").my-5 En la siguiente tabla, profundice en los aspectos y elementos importantes de los estilos de aprendizaje, según Honey y Mumford: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Estilos de aprendizaje

    .tabla-a.color-acento-botones.mb-2
      table
        thead
          tr(style='background-color: #BADC61')
            th.anch Estilo
            th Características
        tbody
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Activos</b>
            td Estas personas se implican en los asuntos de los demás y centran a su alrededor todas las actividades que emprenden con entusiasmo. Son de mente abierta, nada escépticos. Sus días están llenos de actividad. Piensan que, por lo menos una vez, hay que intentarlo todo. Son espontáneos, creativos, innovadores, deseosos de aprender y resolver problemas.
          tr
            td.text-center <b>Reflexivos</b>
            td Gustan considerar las experiencias y observarlas desde diferentes perspectivas. Reúnen datos, analizándolos con detenimiento antes de llegar a alguna conclusión. Son prudentes, observan bien y consideran todas las alternativas posibles antes de realizar un movimiento. Escuchan a los demás y no actúan hasta apropiarse de la situación. Son ponderados, pacientes, inquisidores, lentos y detallistas.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Teóricos</b>
            td Adaptan e integran las observaciones dentro de las teorías lógicas y complejas. Enfocan los problemas de forma vertical y escalonada, por etapas lógicas. Tienden a ser perfeccionistas. Integran los hechos en teorías coherentes. Les gusta analizar y sintetizar. Son profundos en su sistema de pensamiento, a la hora de establecer principios, teorías y modelos. Para ellos, si es lógico, es bueno. Buscan la racionalidad y la objetividad huyendo de lo subjetivo y de lo ambiguo.
          tr
            td.text-center <b>Pragmáticos</b>
            td Predomina en ellos la aplicación práctica de las ideas. Descubren el aspecto positivo de las nuevas ideas y aprovechan la primera oportunidad para experimentarlas. Les gusta actuar rápidamente y con seguridad con aquellas ideas y proyectos que les atraen. Tienden a ser impacientes. Pisan la tierra cuando hay que tomar una decisión o resolver un problema.
    figcaption Nota: Castro, S; Guzmán de Castro. (2005). Los estilos de aprendizaje en la enseñanza y el aprendizaje: Una propuesta para su implementación.  


</template>

<script>
export default {
  name: 'Tema8',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Métodos contemporáneos de enseñanza

    p(data-aos="fade-down").mb-5 Las nuevas tendencias en enseñanza, y tomando como referencia la tecnología que avanza a pasos agigantados de la mano a las nuevas formas de comunicación, llevan a concebir actualizadas metodologías, dentro de las que se encuentran: 

    .row.justify-content-center.align-items-center.bg12.mb-5
      .col-lg-6(data-aos="fade-down")
        .p-4
          h5(data-aos="fade-down") Por lo anterior, se debe prestar atención especial a:
          ul.lista-ul.fa-ul(data-aos="fade-left")
            li 
              i.fas.fa-check.c1
              p.mb-0 Aprendizaje basado en proyectos.
            li 
              i.fas.fa-check.c1
              p.mb-0 Aprendizaje basado en problemas.
            li 
              i.fas.fa-check.c1
              p.mb-0 #[i Flipped classroom] (aula invertida).
            li 
              i.fas.fa-check.c1
              p.mb-0 Pensamiento de diseño (#[i design thinking]).
            li 
              i.fas.fa-check.c1
              p.mb-0 Gamificación.
            li 
              i.fas.fa-check.c1
              p.mb-0 Aprendizaje basado en el pensamiento (#[i thinking based learning]).
            li 
              i.fas.fa-check.c1
              p.mb-0 Aprendizaje cooperativo.
            li 
              i.fas.fa-check.c1
              p.mb-0 Método Montessori.         
      .col-lg-6.p-0
        img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/40.png') 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-acento-botones.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p(data-aos="fade-down").mb-0 En el material complementario puede revisar el video “Métodos de enseñanza”, para conocer más del tema. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=UFZwIEKe-y4" target="_blank")
                    span Ver video
                    i.fab.fa-youtube 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/41.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Lo dicho hasta aquí confirma que la educación va dirigida a diversas poblaciones, no solo infantil y adolescente, sino también a población de mayores y adultos mayores. #[b ¡Cuánto más la educación ambiental!] Gracias al acceso generalizado a la información, la educación, con cualquier enfoque, va siendo concebida de otras maneras. Según Area y Adell (2009, p. 2), en estos momentos, el campo de la educación superior, de la educación de personas adultas, de la formación en los ámbitos empresariales y de formación ocupacional, de las enseñanzas medias, entre otros, ofrecen sus cursos no sólo en las modalidades tradicionales de aulas físicas, sino también a través de lo que se conoce como aulas virtuales. La educación virtual se ha convertido en un gran aliado de la educación, #[b a continuación se presentan  algunos métodos son:]

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")           
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
          .row(titulo="El <i>e-learning</i>")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/42.png")
              
            .col-lg-7.mb-4.mb-md-0.my-3
              p El #[i e-learning] es una modalidad de enseñanza que utiliza redes de ordenadores para impartir cursos o planes formativos a individuos geográficamente dispersos. Esta modalidad de educación se lleva a cabo a través de recursos informáticos y de telecomunicaciones, permitiendo la interacción del alumno con el docente en tiempos diferidos.
          .row(titulo="Versatilidad educativa")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/43.png")
              
            .col-lg-7.mb-4.mb-md-0.my-3
              p El avance tecnológico y el crecimiento de la tendencia en educación virtual lleva al #[i e-learning] a convertirse, de ahora en adelante, en la herramienta más versátil, económica y, sobre todo, accesible para todos; por eso, los aportes de enseñanza se pueden enmarcar en el contexto del avance y las nuevas revoluciones educativas. 
          .row(titulo="Los aportes del <i>e-learning</i>")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/44.png")
              
            .col-lg-7.mb-4.mb-md-0.my-3
              p Con las nuevas modalidades de enseñanza-aprendizaje, es cada vez más factible extender y facilitar el acceso a la formación de colectivos e individuos que no pueden acceder a la modalidad presencial. También se incrementa la autonomía y responsabilidad del estudiante en su propio proceso de aprendizaje.  
          .row(titulo="Virtualidad colaborativa")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/45.png")
              
            .col-lg-7.mb-4.mb-md-0.my-3
              p La virtualización de los programas de estudio, en cualquiera de las áreas, ofrece gran potencial interactivo entre profesor-alumno. Asimismo, flexibilidad en los tiempos y espacios educativos, acceso a multiplicidad de fuentes y datos distintos a los ofrecidos por el profesor, en cualquier momento y desde cualquier lugar. Esta nueva forma favorece el aprendizaje colaborativo entre comunidades virtuales de docentes y estudiantes.
          .row(titulo="Nuevos rumbos")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/46.png")
              
            .col-lg-7.mb-4.mb-md-0.my-3
              p Debemos entender que el #[i e-learning] es la tendencia que cada día nos es más familiar. Esta nueva modalidad es la que va a conducir la educación por un nuevo rumbo, y cuánto mejor que sirva como herramienta para la educación ambiental, que permite llegar a toda una población o comunidad interesada por preservar el ambiente en el que vive. 

    .row.justify-content-center.align-items-center   
      .col-lg-10
        .tarjeta.color-acento-botones.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p(data-aos="fade-down").mb-0 En el material complementario puede revisar el video “¿Qué es #[i e-learning]?”, para conocer más del tema. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=I72PK-ffZME" target="_blank")
                    span Ver video
                    i.fab.fa-youtube 
</template>

<script>
export default {
  name: 'Tema3',
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

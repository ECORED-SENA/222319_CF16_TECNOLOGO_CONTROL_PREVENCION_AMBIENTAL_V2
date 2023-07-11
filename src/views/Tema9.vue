<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Instrumentos de evaluación

    p(data-aos="fade-down").mb-5 Para realizar un adecuado diagnóstico, seguimiento y medición de la eficacia y efectividad de las actividades inherentes a las labores que se realizan en un proceso de promotoría, como, por ejemplo, en una campaña de reciclaje, el promotor debe hacer uso de la evaluación. 
    
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/97.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 La evaluación es una parte fundamental en el proceso y una herramienta muy valiosa para el buen funcionamiento del programa, para lo cual, lo más adecuado es una evaluación continuada. Dentro de los instrumentos más comunes, se tienen: las listas de verificación, las encuestas y las evaluaciones a través de los cuestionarios de conocimiento.   

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Listas de verificación
    .row.justify-content-center.align-items-center.mb-5          
      .col.my-3
        .color-fondo-text.bg-color.mb-5(data-aos="fade-down")
          .color-fondo-text__texto.p-2.ps-4 
            p Son documentos que se elaboran como una planilla o cuestionario, son una ayuda para el evaluador y permiten realizar, de manera ordenada y secuencial, las observaciones durante el desarrollo de una inspección, tarea, proceso.   
      .col-auto.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/98.svg')

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Encuestas            
    .row.justify-content-center.align-items-center.mb-5
      .col-auto.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/99.svg')            

      .col.my-3
        .color-fondo-text.bg-color1(data-aos="fade-down")
          .color-fondo-text__texto.p-2.ps-4 
            p Permiten obtener información relacionada con un tema, problema o situación. Para su diseño, se necesita saber su finalidad, qué se pretende con su utilización, determinar la población y la muestra, definir los recursos que se necesitarán, establecer la duración, forma de aplicación (muestral y poblacional), realizar un piloto y prever el modelo de cómo se va a procesar la información. Se utilizan instrumentos como los cuestionarios orales o escritos y pueden ser realizadas por medio de correo electrónico, llamada o de manera personal, entre otros.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/100.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 #[b Dentro de las ventajas que trae consigo la encuesta,] es que la información recolectada puede ser crucial para empezar acciones de mejora o establecer las condiciones de ciertos temas, de acuerdo con la finalidad de la encuesta y la importancia que brinda. Como desventaja, se tiene el hecho de que la información recolectada no sea veraz o no haya sido contestada con responsabilidad y honestidad (Ariza, 2014).               

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Listas de chequeo

    p(data-aos="fade-down").mb-5 Este instrumento de evaluación, muy flexible y adaptable a diferentes contextos, se conforma por una serie de ítems o variables a evaluar. Tales ítems son listados, los cuales el evaluador va a marcar de acuerdo con los criterios de evaluación establecidos. Por lo general, se valoran de manera positiva o negativa y si se manifiestan o no en el momento o a partir de la observación.   

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/101.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 A través de una lista de chequeo, se pueden evaluar aprendizajes, conductas, atributos, destrezas, acciones o procedimientos. Actividades que se pueden evaluar con este instrumento: desempeño en una tarea concreta (técnica, artística o científica), productos desarrollados en el campo, un laboratorio, un taller, entre otras. Se recomienda su uso para evaluación cualitativa, ya que permite obtener el nivel de logro, sea individual o grupa 

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Evaluación para promotorías y capacitaciones

    p(data-aos="fade-down").mb-5 Para hacer un adecuado cierre de las actividades desarrolladas en la promotoría ambiental, se requiere realizar una evaluación integral, que contemple no solo la adquisición de conocimientos, a través de la aplicación de los cuestionarios, encuestas de satisfacción o informes de capacitación, sino que debe incluir todos los elementos que se desarrollaron o hicieron falta incluir dentro del proceso. También debe incluir la participación de los beneficiarios, teniendo presente: 

    .row.justify-content-center.align-items-center(data-aos="fade-right")           
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
          .row(titulo="Aspectos que debe cubrir")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/102.png")
              
            .col-lg-7.my-3
              p Dentro de los aspectos que puede cubrir una evaluación, se tienen, por ejemplo, el cumplimiento de los objetivos, metas y actividades, a través del uso de sistema de indicadores. El grado de participación asociada a la asistencia, cualificación, número de actores e instituciones involucrados, acuerdos y pactos firmados, compromisos establecidos, agendas concertadas, planes y productos obtenidos y derivados.   
          .row(titulo="Conocimientos, competencias y habilidades")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/103.png")
              
            .col-lg-7.my-3
              p También, la evaluación ha de incluir registro del nivel de conocimiento adquirido, de la adquisición de competencias, habilidades y destrezas desarrolladas, de la efectividad en el uso medios de comunicación y capacitación de empleados, y, desde luego, el impacto en el desarrollo de la cultura ambiental en los individuos, la organización y la sociedad. 
          .row(titulo="Cultura ambiental")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/104.png")
              
            .col-lg-7.my-3
              p En los procesos de promotoría ambiental, interesa, de manera relevante, medir el nivel de cultura ambiental a partir de los valores relacionados con la temática ambiental ejecutada, como la protección del medio ambiente, la prevención de la contaminación, el respeto a la tierra. Igualmente, es posible incluir dentro de la evaluación el análisis frente a las creencias, como variables que anteceden y predicen actitudes y comportamientos en pro del medio ambiente.   
          .row(titulo="Actitudes ambientales adquiridas o potenciadas")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/105.png")
              
            .col-lg-7.my-3
              p Otro elemento para incluir en la evaluación son las actitudes ambientales, ya que tienen una gran influencia sobre el comportamiento cuando otros factores no impiden que este se lleve a cabo, sobre todo en lo referente a los comportamientos individuales de consumo y de participación ambiental. Y finalmente, incluir las conductas pro-ambientales, como grado de conocimiento de las causas y efectos de la problemática ambiental, motivación, capacidad de generar cambios y el grado de convencimiento de que su acción tendrá efectividad (Miranda, 2013).  
          .row(titulo="Mejora continua")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/106.png")
              
            .col-lg-7.my-3
              p Es importante ver la evaluación como parte del proceso permanente de mejora continua; como una actividad recurrente para mejorar el desempeño y no como un medio coercitivo (Organización Internacional de Normalización). De allí que esta sirva en todas las etapas para identificar las oportunidades de mejora y poder establecer las acciones preventivas y correctivas que de ella se deriven, permitiendo aprender de los problemas y actuar para que no se vuelvan a presentar (González, 2005).  
          .row(titulo="Fortalecimiento de las áreas del proceso")
            .col-lg-5.my-3     
              img.img-mov(src="@/assets/curso/temas/107.png")
              
            .col-lg-7.my-3
              p Entonces, se deben identificar las áreas con problemas, las disposiciones para mitigar impactos, definir las responsabilidades para investigar y actuar, así como la metodología para identificar la causalidad y la solución de problemas identificados (Toro, 2017).                                                                        
</template>

<script>
export default {
  name: 'Tema9',
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

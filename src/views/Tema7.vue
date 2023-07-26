<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Procesos de participación ciudadana

    p(data-aos="fade-down").mb-5 La Constitución Política de Colombia de 1991 incorporó los derechos colectivos y del medio ambiente como un tema central en las aspiraciones, obligaciones y compromisos del Estado, frente al derecho a gozar de un ambiente sano de los ciudadanos y la sociedad.  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png')
      .col-lg-6.my-3
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p.mb-0 Es considerada como una constitución verde, al recoger las principales preocupaciones de los movimientos ambientalistas y compromisos que se asumirían posteriormente en la Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo (1992), la Agenda 21 y la firma de importantes convenios y tratados internacionales en materia de protección ambiental, como el Convention on Biological Diversity (s. f.), donde se considera que los derechos colectivos y de medio ambiente son interdependientes con los derechos fundamentales, como el derecho a la vida digna, a la salud, entre otros. De allí que se conciban la defensa y protección ambiental como un derecho, no solo para las generaciones presentes, sino también para las generaciones venideras. 
     

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Grupos focales

    p(data-aos="fade-down").mb-5 Se considera grupo focal a un número representativo de personas de la comunidad que es seleccionado, teniendo en cuenta que comparten condiciones similares, intereses afines o puntos de vista específicos frente a un problema o una oportunidad identificada al interior de la comunidad. Para ellos, se debe tener en cuenta: 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8.my-3
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
          .row(titulo="Se selecciona cuando…")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/78.png")
              
            .col-md-7.mb-4.mb-md-0
              p Un grupo focal es seleccionado cuando es necesario o existe un número alto de participantes, lo que puede dificultar abordar los temas a profundidad.  
          .row(titulo="Puntos de vista comunitarios")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/79.png")
              
            .col-md-7.mb-4.mb-md-0
              p Igualmente, se puede emplear si hay un tema particular que requiere tener el punto de vista de las personas que más se relacionen con el asunto o presenten mayor interés o afectación.  
          .row(titulo="Participación voluntaria")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/80.png")
              
            .col-md-7.mb-4.mb-md-0
              p Se recomienda que la participación de los individuos del grupo focal sea voluntaria, aunque muchas veces operan como delegados de sus comunidades, a través de una asamblea, o son direccionados por informantes claves.  
          .row(titulo="Modalidad de las actividades")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/81.png")
              
            .col-md-7.mb-4.mb-md-0
              p Las actividades para el trabajo con estos grupos son: definir el tema de interés, seleccionar o vincular los participantes, desarrollar, sistematizar y evaluar el taller.  
          .row(titulo="Discusión, participación, articulación")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/82.png")
              
            .col-md-7.mb-4.mb-md-0
              p Un ejemplo de grupo focal puede ser el trabajo con representantes del comité ambiental de las Juntas de Acción Comunal de un sector o una localidad, que quieren discutir sobre cómo recuperar los espacios verdes en su territorio.                                                                    
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png')

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down") 
        h5.mb-0(data-aos="fade-down") Descripción de los procesos de participación ciudadana
    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/83.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Con la promulgación de la Constitución de 1991, se estableció que el estado debe garantizar la protección de la biodiversidad y la integridad del ambiente, así como la planeación para el aprovechamiento y manejo del patrimonio natural del país (Ministerio Editorial, 1995). Para dar cumplimento a los mandatos dados por la constitución, se establecieron principios orientadores de la gestión ambiental, a través de la Ley 99 de 1993. Con la expedición de esta norma, se organizó el Sistema Nacional Ambiental (SINA), se creó el Ministerio del Medio Ambiente con su estructura orgánica y se establecieron las funciones de las Corporaciones Autónomas Regionales (CAR).         

    p(data-aos="fade-down").text-center.mb-5 También se establecieron algunos mecanismos de participación, en materia ambiental, como son:

    .row.justify-content-center.align-items-center.mb-5.bg12.p-4(data-aos="fade-right")           
      .col-lg-10
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Sistema Nacional<br> Ambiental SINA")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 El SINA se estructuró como un sistema para la institucionalidad ambiental en Colombia, donde se articulan las políticas, normativas, instituciones, entre otras, desde una participación ciudadana activa. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Participación <br>ambiental")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Para garantizar la aplicación de los principios orientadores de la gestión y la conservación ambiental, se ha concebido la participación ambiental como un derecho humano fundamental dentro la institucionalidad ambiental y legal del país.    
          .tarjeta.color-acento-botones--borde.p-4(titulo="Ambientes sanos y<br> dignos")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Además, se han establecido un número significativo de mecanismos de participación ciudadana, los cuales tienen como finalidad garantizar el ejercicio, el goce y el disfrute de un ambiente sano en condiciones de dignidad humana. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Interlocución social")
            .row.justify-content-center.align-items-center
              .col-12
                p.mb-0 Igualmente, se ha favorecido establecer mecanismos de diálogo e interlocución social con diversos actores, para el abordaje pacífico de los conflictos socio-ambientales presentes en los territorios, como una estrategia de articulación y coordinación de los planes, programas y proyectos a nivel interinstitucional; todo ello con la participación de los diferentes estamentos de la sociedad y en el marco de los principios de la sostenibilidad ambiental. (Wilches-Chaux, 2012). 

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down") 
        h5.mb-0(data-aos="fade-down") Estrategias de participación ciudadana

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/84.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Muchas veces, los proyectos y actividades fracasan por falta de participación de los beneficiarios. En este sentido, se hace necesario que, antes de seleccionar las estrategias de intervención, se evalúe el estado y grado de participación ciudadana existente. Esto es fundamental, ya que permite seleccionar los mecanismos, instancias y medios para fortalecerla y dinamizarla. Para Geilfus (1998), “la participación es un proceso que puede pasar por varios niveles, como son: pasividad, suministro de información, participación por consulta, participación por incentivos, participación funcional, participación interactiva y autodesarrollo”.                                                         
    .row.justify-content-center.align-items-center.mb-5.bg12.p-4(data-aos="fade-right")           
      .col-lg-10 
        p(data-aos="fade-down").mb-5 A continuación, conozca la propuesta de Geilfus sobre la participación ciudadana. Con base en ella, usted podrá afianzar elementos importantes, desde lo conceptual, relativos a este importante tema: 

        h4(data-aos="fade-down").text-center.mb-4 Escalera de la participación, adaptada de Geilfus

        img.img-a.img-t.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/85.svg', alt='La "Escalera de la Participación" de Geilfus representa de manera visual y gradual la participación ciudadana y su influencia en procesos institucionales, sociales y organizacionales. Se inicia en la "pasividad", donde las personas solo reciben información, y progresa a través de etapas que incluyen suministro de información, consulta, incentivos, participación funcional e interactiva. Culmina en "autodesarrollo", donde los grupos locales toman iniciativas propias sin esperar intervenciones externas. Esta escalera refleja la ruta hacia la autonomía y el empoderamiento progresivo de la comunidad.')
               
        .row.justify-content-between.mx-0.bg16.mb-3(data-aos="flip-down")
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/86.svg', alt='')
          .col
            .p-3.my-4.me-2
              p(data-aos="fade-down").mb-0 Se requiere, además, conocer las estrategias para ejercer el derecho de participación, en cuanto a la gestión ambiental en Colombia. Podríamos citar, a manera de ejemplo, las promovidas por la Política Nacional de Educación Ambiental: Proyectos Ambientales Escolares (PRAES), Proyectos Ciudadanos de Educación Ambiental (PROCEDAS). Existen también los Comités Técnicos Interinstitucionales (CIDEAS) a nivel municipal y departamental, procesos de formación como promotores ambientales, entre otras.                 

        .row.justify-content-between.mx-0.bg17.mb-5(data-aos="flip-down")
          .col-auto.p-0
            img(data-aos="zoom-in")(src='@/assets/curso/temas/87.svg', alt='')
          .col
            .p-3.my-4.me-2
              p(data-aos="fade-down").mb-0 Igualmente, vale la pena saber que se puede hacer uso de los mecanismos de participación ciudadana definidos por la Constitución Política Nacional, la Ley 99 de 1993, Ley 134 de 1994, Ley 757 de 2015 y las demás que se estipulan en el marco normativo colombiano (SUIN-JURISCOL, 2020). 

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down") 
        h5.mb-0(data-aos="fade-down") Mecanismos de participación ciudadana 

    p(data-aos="fade-down").mb-5 En lo concerniente a la protección de los derechos colectivos y del ambiente, se puede mencionar la existencia de un número considerable de instrumentos, que puede conocer en la siguiente tabla: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Mecanismos de participación ciudadana  

    .tabla-a.color-acento-botones.mb-2
      table
        thead
          tr(style='background-color: #BFE4DA')
            th.anch Nombre
            th Descripción
        tbody
          tr(style='background-color: #F6F6F6')
            td.text-center <b>El derecho a intervenir en procedimientos administrativos ambientales</b>
            td Mediante este mecanismo, cualquier persona, sea natural o jurídica, pública o privada, sin necesidad de demostrar interés jurídico alguno, puede intervenir en los procedimientos administrativos que adelanta la autoridad ambiental en los siguientes aspectos: para la expedición, modificación o cancelación de permisos o licencias ambientales de actividades que afecten o puedan afectar el medio ambiente, o para la imposición o revocación de sanciones por el incumplimiento de normas y regulaciones ambientales.
          tr
            td.text-center <b>Petición de información en materia ambiental</b>
            td Permite que cualquier persona (natural o jurídica) solicite información a la autoridad ambiental con respecto a los elementos susceptibles de producir contaminación y los peligros que el uso de dichos elementos pueda ocasionar a la salud humana.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Derecho de petición</b>
            td Consiste en la posibilidad que tiene cualquier persona, natural o jurídica, de dirigirse respetuosamente ante las autoridades, en forma verbal o escrita, con el fin de obtener información y recibir una pronta respuesta.
          tr
            td.text-center <b>Audiencia pública ambiental</b>
            td Su objeto es dar a conocer a las organizaciones sociales, la comunidad, o las entidades públicas y privadas lo siguiente: la solicitud de licencias, permisos o concesiones ambientales, o la existencia de un proyecto o actividad, los impactos que éste puede generar o genere, y las medidas de manejo propuestas o implementadas para prevenir, corregir o compensar dichos impactos.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Consulta previa</b>
            td Es un derecho fundamental de los pueblos indígenas y las comunidades negras, que se convierte en un trámite obligatorio. Debe ejecutarse de acuerdo con los usos y costumbres de cada etnia, cada vez que se pretendan tomar decisiones que afecten a esos pueblos y comunidades.
          tr
            td.text-center <b>Veeduría ciudadana</b>
            td Son un mecanismo de participación que permite a los ciudadanos o a las organizaciones comunitarias ejercer vigilancia, fiscalización y evaluación en varios campos: sobre la gestión pública que adelantan las autoridades administrativas, políticas, judiciales, electorales, legislativas y órganos de control.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Cabildo abierto</b>
            td Consiste en una reunión de los Concejos Distritales o Municipales o de las Juntas Administradoras Locales, en la que pueden participar los habitantes, con el fin de discutir asuntos de interés para la comunidad y buscarles soluciones.
          tr
            td.text-center <b>Consulta popular</b>
            td Es una institución mediante la cual una pregunta de carácter general sobre un asunto de trascendencia nacional, departamental, municipal, distrital o local es sometida por el gobernante a consideración del pueblo para que este se pronuncie formalmente al respecto.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Acciones de tutela</b>
            td La acción de tutela es un mecanismo constitucional de participación que tiene como objetivo proteger los derechos fundamentales, es decir, aquellos que son inherentes a la persona y prevalecen frente a cualquier norma que pretenda desconocerlos. Se orienta a garantizar la protección inmediata y evitar que se produzca la vulneración de un derecho fundamental.
          tr
            td.text-center <b>Acción de cumplimiento</b>
            td Tiene como objetivo asegurar el cumplimiento de una norma con fuerza material de ley o el cumplimiento de un acto administrativo. Eso se logra una vez el juez da la orden respectiva a la autoridad demandada.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Acción popular</b>
            td Su objetivo es proteger y defender los derechos e intereses colectivos de toda acción u omisión de las autoridades o de los particulares que hayan violado o amenacen violar estos derechos.
          tr
            td.text-center <b>Acción de grupo</b>
            td Es una garantía constitucional que permite a un número plural de personas acudir ante la justicia para reclamar el reconocimiento y la reparación de un daño ocasionado a un derecho o interés colectivo, cuando la causa de los daños sea la misma para todas las personas.
          tr(style='background-color: #F6F6F6')
            td.text-center <b>Acción de inconstitucionalidad</b>
            td Es un mecanismo que tienen todas las personas naturales en su calidad de ciudadanos colombianos y que los faculta para impugnar ante la Corte Constitucional las normas que sean violatorias de la Constitución Política.
          tr
            td.text-center <b>Acción de nulidad</b>
            td La acción de nulidad es un mecanismo legal que puede utilizar cualquier persona para anular un acto administrativo.
    figcaption.mb-5 Nota. Tomada de Lora et al. (2008). 

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down") 
        h5.mb-0(data-aos="fade-down") Instancias de la participación ciudadana

    p(data-aos="fade-down").mb-5 Conocer las instancias de participación permite reconocerse como agentes de cambio y transformación social; para ello, es importante ejercer una ciudadanía activa, que contribuya a la defensa del ambiente. Igualmente, los promotores ambientales se apoyan en las diferentes instancias e instituciones para construir procesos de liderazgo y participación dentro de las comunidades y organizaciones con las que se relacionan. Para ello, se debe tener en cuenta: 

    .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Corresponsabilidad de los actores    
            p Al interior de las diferentes instancias, existen espacios que promueven la corresponsabilidad de los actores, la planeación participativa, el ejercicio del derecho a la participación y el diálogo de saberes. Es deber de cada miembro de la comunidad vincularse con los diferentes actores y es deber de las instituciones generar las condiciones para brindar los espacios de participación para que la voz de las comunidades y de la naturaleza se escuche de manera efectiva. Considerar la participación como un servicio público permite construir y fortalecer la democracia.           
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/88.png')  
        .row.justify-content-center.mt-3
          .col-lg-4.mb-4.mb-md-0.my-3
            h4 Instancias contempladas por la Ley   
            p Dentro de las instancias, en cuanto a la gestión ambiental definidas por la ley, se tiene: conformar y hacer parte de organizaciones no gubernamentales (ONG), organizaciones comunitarias (Juntas de acción comunal, grupos ecológicos, entre otros), organizaciones étnico-territoriales, veedurías ciudadanas, entre otras; integrar los consejos comunitarios de grupos étnicos, resguardos indígenas, entre otros; integrar los consejos directivos de las CAR, los Consejos Ambientales Regionales, Concejos territoriales de Planeación, Comisiones Ambientales Locales, entre otros (Lora et al., 2008. p 108).          
          .col-lg-7.my-3
            img.img-a.img-t(src='@/assets/curso/temas/89.png')  
        .row.justify-content-center.mt-3
          .col-11
            h4 Actores en instancias institucionales y sociales    
            p En las instancias institucionales y sociales, la participación ciudadana involucra la participación activa de diferentes actores, tales como: 

            .titulo-sexto.color-acento-contenido
                h5 Figura 4.
                span Actores institucionales y sociales en cuanto a la participación ciudadana 
            .bgw.brad.bsha.p-4                
              img.img-a(src='@/assets/curso/temas/90.png') 
              figcaption Nota. Tomada de Wilches-Chaux (2012, p. 24).          

</template>

<script>
export default {
  name: 'Tema7',
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

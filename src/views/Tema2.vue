<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Comunicación asertiva en procesos de promotoría ambiental

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comunicación se convierte en la herramienta más necesaria para realizar un proceso de educación ambiental; esta debe ser en doble vía y eminentemente asertiva para que la retroalimentación y el mensaje lleguen con efectividad. Para tener en cuenta cómo influye de manera importante la comunicación en los diversos procesos de promotoría ambiental, es necesario partir del concepto de comunicación. Según Gambini et al., (2018, p. 10), #[b.t1 “la palabra deriva del latín communicare, que significa “compartir algo, poner en común”.] 

    .row.mb-5.text-center
      .col-sm-6.col-xl-4.mb-4.mb-xl-0(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/16.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Proceso natural
              p Por lo tanto, la comunicación es un fenómeno inherente a la relación que los seres vivos mantienen cuando se encuentran en grupo.

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/17.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Proceso dinámico
              p La comunicación es un proceso que se inicia en la intención de una persona, quien construirá un mensaje y lo transmitirá por un canal apropiado; luego, la otra persona decodificará el mensaje para comprenderlo. A su vez, esta persona receptora puede convertirse en un nuevo emisor.

      .col-sm-6.col-xl-4.mb-4.mb-sm-0(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/18.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Proceso dinamizador
              p De esta manera, una vez que se participa en una relación comunicativa, esta estará actualizándose mediante el permanente intercambio de roles de emisor y receptor.   

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") ¿Qué y cómo nos comunicamos? 

    p(data-aos="fade-down").mb-5 Lo que comunicamos y cómo lo comunicamos, parte específicamente del proceso de transferencias de información, por ende, “en todo lo que hacemos, decimos o dejamos de hacer, estamos comunicando algo. En esta relación puede no haber palabras, por ejemplo, entre pasajeros de un medio de transporte, donde lo esperable es que no se converse entre extraños. Si no hablamos, igual estamos comunicando, ya sea con la posición de nuestro cuerpo, con nuestras miradas, la expresión facial, etc. En ese sentido, es importante siempre tener en cuenta que existen estas dos formas de comunicarnos: verbal y no verbal”. (Gambini et al., 2018, p. 10) 

    .row.justify-content-center.mb-4           
      .col-lg-6.my-3
        .bg10.px-4.h-100.j
          .row.justify-content-center.align-items-center         
            .col-auto.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.png') 
            .col.my-3
              p(data-aos="fade-down").mb-0 La comunicación verbal se refiere a la comunicación a través de la palabra, lo que decimos o escribimos, mientras que la comunicación no verbal corresponde a gestos, actitudes, posturas corporales, tono de voz o miradas.             
      .col-lg-6.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png')   

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-acento-botones.bgv.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p(data-aos="fade-down").mb-0 En el material complementario puede revisar el video “Comunicación verbal y no verbal”, para conocer más del tema. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=UJ9Fyu5ew90" target="_blank")
                    span Ver video
                    i.fab.fa-youtube

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Los elementos de la comunicación

    p(data-aos="fade-down").mb-5 Cuando hay comunicación, se establece una relación entre dos fuentes. Según Gambini et al. (2018, p. 16), “La comunicación consiste en la emisión y recepción de mensajes entre dos o más personas o animales. Quienes se comunican buscan aportar y obtener información acerca de un determinado asunto. Se conoce como proceso comunicativo, por lo tanto, al conjunto de actividades vinculadas a este intercambio de datos. Dicho proceso requiere de, al menos, un emisor y de un receptor”.  

    .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
      p(data-aos="fade-down").mb-0 La comunicación es, sin duda, una parte esencial de la vida humana y consta de varios elementos. Para llevar a cabo el proceso de intercambio de información de manera efectiva, se requieren al menos los siguientes actores: 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")           
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg11")
          .row(titulo="El emisor (codificador)")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/21.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es la persona que emite o envía el mensaje. Cuando la persona que idea y crea el mensaje es la misma que lo transmite, fuente y emisor se consideran un solo elemento.  
          
          .row(titulo="El receptor (decodificador)")
            .col-md-5                   
              img.img-mov(src="@/assets/curso/temas/22.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es la persona o grupo de personas a quien o a quienes se dirige el mensaje. Es el destinatario o la audiencia objetivo de la comunicación y todo aquel que acepte el mensaje.  

          .row(titulo="El código")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/23.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es el sistema estructurado de signos, como son los lenguajes español, inglés, etc., u otros lenguajes como la música o la pintura.    
          
          .row(titulo="El mensaje")
            .col-md-5                   
              img.img-mov(src="@/assets/curso/temas/24.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es el contenido expresado y transmitido por el emisor al receptor, el cual tiene un contenido (ideas que constituyen el mensaje) y el tratamiento, que sería el modo de decir las cosas, lo cual facilita el entendimiento del mensaje.  
          .row(titulo="El canal")
            .col-md-5     
              img.img-mov(src="@/assets/curso/temas/25.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es el medio o vehículo físico por el cual se envía y viaja el mensaje. Una carta, un cartel, el periódico, la computadora, las ondas sonoras y electromagnéticas, etc.  
          
          .row(titulo="La retroalimentación")
            .col-md-5                   
              img.img-mov(src="@/assets/curso/temas/26.png")
              
            .col-md-7.mb-4.mb-md-0
              p Es el elemento clave que propicia la interacción o transacción entre el emisor y el receptor, ya que ambas partes se aseguran de que el mensaje fue recibido y compartido. También el mensaje mismo es fuente de retroalimentación; por ejemplo, cuando una persona está escribiendo y, después de leer el texto, corrige los errores.

          .row(titulo="El contexto")
            .col-md-5                   
              img.img-mov(src="@/assets/curso/temas/27.png")
              
            .col-md-7.mb-4.mb-md-0
              p Se refiere al ambiente físico, la situación social y el estado psicológico en que se encuentran emisor y receptor en el momento de la comunicación. (p. 17).

    .row.justify-content-start.mb-4        
      .col-auto.bg4.p-3(data-aos="flip-down")
        h5.mb-0(data-aos="fade-down") Técnicas de expresión y comunicación oral               

    p(data-aos="fade-down").mb-5 Cuando se trata de aplicar técnicas didácticas para capacitar a determinada población, existen diversos tipos de recursos. En cuanto a las técnicas de expresión y comunicación oral, muy aportantes en una campaña ambiental, se requiere considerar las más empleadas y aquellas que generan gran impacto en el proceso de capacitación, instrucción o educación ambiental.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/28.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 Es mediante ellas como la población y personas del proceso asimilarán con mayor propiedad el mensaje, asumirán responsabilidades, comprenderán su implicación en el proceso ambiental y, sobre todo, se convertirán en potenciales transmisores del enfoque e intención de la campaña.  

    .tarjeta.tarjeta-verde.p-4(data-aos="fade-right") 
      SlyderA(tipo="b")
        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 La exposición.  
            p “Se puede decir que la exposición académica es aquella presentación oral que se realiza en un contexto académico (aula de la universidad, conferencia, etc.) con la principal intención de dar a conocer un tema específico siguiendo un orden (introducción, desarrollo y conclusión), utilizando un lenguaje formal” (Gambini et al., 2018, p. 88).  
            h5 Las principales características de la exposición académica son:  
            ul.lista-ul 
              li 
                i.fas.fa-check.c1
                | Cumple una función referencial (informa o explica un tema). 
              li 
                i.fas.fa-check.c1
                | Uso del lenguaje objetivo y formal (estándar culto). 
              li 
                i.fas.fa-check.c1
                | Presentación de las ideas de manera ordenada y progresiva. 
              li 
                i.fas.fa-check.c1
                | Manejo de vocabulario científico y técnico referente al tema.             
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')  

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 El debate 
            p Es importante tener en cuenta que otra técnica de expresión que permite integrar de forma objetiva una comunidad y conocer lo que piensan es el debate. “El debate (del lat. debattuĕre ‘discutir, disputar sobre algo’) es una técnica, tradicionalmente de comunicación oral, que consiste en la discusión de opiniones antagónicas sobre un tema o problema. En esta técnica, dos o más expertos conversan sobre un tema ante el grupo siguiendo un esquema previo”. (Gambini et al., 2018, p. 119). 

            p Dentro de las características más sobresalientes del debate, está la de ofrecer información y actualización de opiniones y puntos de vista significativos para el auditorio. También, el debate aumenta la fluidez del diálogo gracias a la reducción del número de expertos. Finalmente, el debate permite un repaso exhaustivo de las posturas de los especialistas. 
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/31.png', alt='') 

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 La mesa redonda 
            p Una de las técnicas más empleadas para compartir ideas y debatirlas en pro de un objetivo común es la mesa redonda, y, según Gambini et al. (2018, p. 114), “es una técnica donde se presentan diferentes puntos de vista, no necesariamente contradictorios, acerca de un tema determinado, ante un público y con la ayuda de un moderador”. 
            h5 Las principales características de la exposición académica son: 
            ul.lista-ul 
              li 
                i.fas.fa-check.c1
                | Fomentar el diálogo entre los participantes para desarrollar el tema desde diferentes áreas o puntos de vista. 
              li 
                i.fas.fa-check.c1
                | Facilitar el interés hacia determinadas cuestiones, motivando a la investigación o a la acción y búsqueda de soluciones.                               
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')      

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 El foro 
            p Se trata de una técnica en la cual varias personas discuten un tema determinado, ante un auditorio, bajo la conducción de un coordinador. Suele utilizarse como complemento de otras técnicas previas (panel, conferencia, etc.), dando lugar, en ocasiones, a otras técnicas específicas (cinefórum, discofórum, etc.). (Gambini et al., 2018, p. 115). 
            h5 Mediante el foro, y más aún en el contexto de una campaña ambiental, es posible:  
            ul.lista-ul 
              li 
                i.fas.fa-check.c1
                | Desarrollar una deliberación sistemática sobre el tema previamente considerado. 
              li 
                i.fas.fa-check.c1
                | Conocer genéricamente las opiniones y actitudes del grupo. 
              li 
                i.fas.fa-check.c1
                | Fomentar la libre expresión con mínimas limitaciones. 
              li 
                i.fas.fa-check.c1
                | Aumentar la transmisión de información.             
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/33.png', alt='') 

        .row.justify-content-center.mt-3
          .col-lg-6.mb-4.mb-md-0.my-3
            h4 El seminario.  
            p El seminario se constituye en la técnica que agrupa a mayor cantidad de personas, generalmente en un auditorio, pero puede ser cualquier espacio adaptado para acoger a todos los individuos convocados. El seminario permite difundir el mensaje de manera directa a los espectadores. El seminario es la técnica grupal que tiene por objeto la investigación o estudio intensivo de un tema en reuniones de trabajo debidamente planificadas. Constituye un verdadero grupo de aprendizaje activo, pues los miembros indagan por sus propios medios, como se muestra a continuación:  
            .row
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span #[b Ver Información]
                  .indicador--click(v-if="mostrarIndicador")             
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/34.png', alt='') 

    ModalA(:abrir-modal.sync="modal1") 
      .row.justify-content-center
        .col-lg-9.position-relative
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/35.png", alt="alt").img100
              .col
                h5 Pensamiento crítico
                p.mb-0 Esta técnica del seminario busca promover el pensamiento crítico y reflexivo.
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/36.png", alt="alt").img100
              .col
                h5 Razonamiento y responsabilidad
                p.mb-0 Mediante el seminario, es posible intensificar el razonamiento objetivo y la responsabilidad individual y colectiva del grupo, para trabajar en la investigación de los diferentes tópicos del tema.
          .crd.crd--avatarHorizontal.crd--med.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/37.png", alt="alt").img100
              .col
                h5 26 de enero
                p.mb-0 Según el portal www.comunidadism.es (2020), el día 26 de enero se celebra el «Día Mundial de la Educación Ambiental», que tiene su origen en 1975, año en que se celebró en Belgrado (capital de la República de Serbia), el Seminario Internacional de Educación Ambiental, donde participaron expertos de más de 70 países. 
          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/38.png", alt="alt").img100
              .col
                h5 Principios de la E.A.
                p.mb-0 En este evento, se establecieron los principios de la Educación Ambiental en el marco de los programas de las Naciones Unidas.                         
          .crd.crd--avatarHorizontal.crd--last.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/39.png", alt="alt").img100
              .col
                h5 Carta de Belgrado
                p.mb-0 Como resultado, se publicó la Carta de Belgrado, en la cual se plasman las reivindicaciones fundamentales de la Educación Ambiental.                                    
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
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

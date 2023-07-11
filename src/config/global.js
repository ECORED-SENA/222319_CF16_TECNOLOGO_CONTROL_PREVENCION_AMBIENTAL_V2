export default {
  global: {
    componenteFormativo: 'Coordinar campaña ambiental según normativa vigente',
    descripcionCurso:
      'En este componente formativo, se abordarán los conceptos básicos que definen y orientan un programa de promotoría ambiental, de acuerdo con la planificación del proyecto y las necesidades de la población y el sector productivo, las cuales van encaminadas al desarrollo del trabajo con la comunidad o población objeto de capacitación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'La campaña ambiental',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Comunicación asertiva en procesos de promotoría ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Métodos contemporáneos de enseñanza',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Actores sociales',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Tipos de pruebas en procesos de enseñanza-aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Responsabilidad social empresarial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Procesos de participación ciudadana',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Estilos de aprendizaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Instrumentos de evaluación',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. La campaña ambiental',
      referencia:
        'TheEcoFace. (2012). <i>Responsabilidad Ambiental</i>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OGC5dhILjpU',
    },
    {
      tema: '2.Comunicación asertiva en procesos de promotoría ambiental',
      referencia:
        'Ortiz, W. (2017).<i> Comunicación verbal y no verbal</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UJ9Fyu5ew90',
    },
    {
      tema: '3. Métodos contemporáneos de enseñanza',
      referencia:
        'Plataforma Elearning. (2017). <i>¿Qué es elearning?</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I72PK-ffZME',
    },
    {
      tema: '3. Métodos contemporáneos de enseñanza',
      referencia:
        'Cursos On-Line Masivos. (2018). <i>Métodos de enseñanza</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UFZwIEKe-y4',
    },
  ],
  glosario: [
    {
      termino: 'Canal',
      significado:
        'es el medio o vehículo físico por el cual se envía y viaja el mensaje. Una carta, un cartel, el periódico, la computadora, las ondas sonoras y electromagnéticas, etc. (Gambini et al., 2018)',
    },
    {
      termino: 'Código',
      significado:
        'es el sistema estructurado de signos, como los lenguajes español, inglés, etc., u otros lenguajes, como la música, la pintura. (Gambini et al., 2018)',
    },
    {
      termino: 'Comunicación no verbal',
      significado:
        'corresponde a gestos, actitudes, posturas corporales, tono de voz o miradas. (Gambini et al., 2018)',
    },
    {
      termino: 'Comunicación verbal',
      significado:
        'se refiere a la comunicación a través de la palabra, lo que decimos o escribimos. (Gambini et al., 2018)',
    },
    {
      termino: 'Contexto',
      significado:
        'se refiere al ambiente físico, la situación social y el estado psicológico en que se encuentran emisor y receptor en el momento de la comunicación.  Gambini et al., 2018)',
    },
    {
      termino: 'Emisor',
      significado:
        'es la persona que emite o envía el mensaje. Cuando la persona que idea y crea el mensaje es la misma que lo transmite, fuente y emisor se considera un solo elemento. (Gambini et al., 2018)',
    },
    {
      termino: 'Mensaje',
      significado:
        'es el contenido expresado y transmitido por el emisor al receptor, el cual tiene un contenido (ideas que constituyen el mensaje) y el tratamiento, que sería el modo de decir las cosas, lo cual facilita el entendimiento del mensaje. (Gambini et al., 2018)',
    },
    {
      termino: 'Receptor',
      significado:
        'es la persona o grupo de personas a quien o a quienes se dirige el mensaje. Es el destinatario o la audiencia objetivo de la comunicación y todo aquel que acepte el mensaje. (Gambini et al., 2018)',
    },
    {
      termino: 'Retroalimentación',
      significado:
        'es el elemento clave que propicia la interacción o transacción entre el emisor y el receptor, ya que ambas partes se aseguran de que el mensaje fue recibido y compartido. También el mensaje mismo es fuente de retroalimentación, por ejemplo, cuando una persona está escribiendo y, después de leer el texto, corrige los errores. (Gambini et al., 2018)',
    },
  ],
  referencias: [
    {
      referencia:
        'Area, M. y Adell, J. (2009). <i>E-Learning: Enseñar y Aprender en Espacios Virtuales.</i>',
      link: 'https://tecedu.webs.ull.es/textos/eLearning.pdf',
    },
    {
      referencia:
        'Ariza, C. (2014). <i>Técnicas de recolección de información II</i> [Video]. YouTube.',
      link: 'https://youtu.be/S2L1EB-yu_Y',
    },
    {
      referencia:
        'Castro, S; Guzmán de Castro. (2005).Los estilos de aprendizaje en la enseñanza y el aprendizaje: Una propuesta para su implementación. [Revista de Investigación, núm. 58]. Universidad Pedagógica Experimental Libertador Caracas, Venezuela.',
      link: 'https://www.redalyc.org/pdf/3761/376140372005.pdf',
    },
    {
      referencia:
        'Conferencia de las Naciones Unidas sobre el Medio Ambiente y el Desarrollo. (1992). <i>Declaración de Río sobre el Medio Ambiente y el Desarrollo</i>. Naciones Unidas.',
      link:
        'https://www.un.org/spanish/esa/sustdev/documents/declaracionrio.htm',
    },
    {
      referencia:
        'Convention on Biological Diversity. (s. f.).<i> What’s new</i>. UN Environment Programme.',
      link: 'https://www.cbd.int/convention/',
    },
    {
      referencia:
        'Crozier, M. y Friedberg, E. (2014). <i>L&apos;acteur et le système. Seuil</i>.',
    },
    {
      referencia:
        'Escuela Nacional de Instructores. (2016). <i>Responsabilidad Social</i>. SENA.',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/2708/1/responsabilidad_social_empresarial.pdf',
    },
    {
      referencia:
        'Gambini, W., Herencia, A., Ugarte, P., Vásquez, A. y Villarroel, I. (2018). <i>Manual del Taller de Expresión Oral</i>. Universidad de San Martín de Porres.',
    },
    {
      referencia:
        'Geilfus, F. (1998).<i> 80 herramientas para el desarrollo participativo: diagnóstico, planificación, monitoreo, evaluación</i>. IICA-Holanda/LADERAS C.A.',
      link:
        'https://www.jica.go.jp/project/spanish/panama/2515031E0/data/pdf/3-01_01.pdf',
    },
    {
      referencia:
        'González, M. (2005). <i>Gestión Ambiental Modulo 4. Gerencia Integral H.S.E.Q. </i>UIS.',
    },
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas  [ICONTEC]. (2019). <i>Guía de responsabilidad social empresarial</i> (GTC-ISO 26000).',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=76038',
    },
    {
      referencia:
        'Instituto de Investigaciones Biológicas Alexander von Humboldt. (2020). <i>¿Cuántas especies registradas hay en colombia?</i> Biodiversidad en cifras.',
      link: 'https://cifras.biodiversidad.co/',
    },
    {
      referencia:
        'Kullock, D., Boley, J-C., Civelli, H., Cunha, A. y Gandini, C. (1993). <i>Planificación Participativa y Hábitat Popular</i>. Universidad de Buenos Aires.',
    },
    {
      referencia:
        'Ley 99 de 1993. Por la cual se crea el Ministerio del Medio Ambiente, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables, se organiza el Sistema Nacional Ambiental, SINA y se dictan otras disposiciones. Enero 27 de 1975. DO. No. 51.478.',
    },
    {
      referencia:
        'Lora, A., Muñoz, L. y Rodríguez, G. (2008). <i>Manual de acceso a la información ya la participación ambiental en Colombia</i>. Iniciativa de Acceso Colombia.',
      link: 'https://repository.urosario.edu.co/handle/10336/30058',
    },
    {
      referencia:
        'Ministerio Editorial. (1995). <i>Carpeta ecológica No. 11</i>. Ecología La Cumbre de la Tierra.',
    },
    {
      referencia:
        'Miranda, L. (2013). Cultura ambiental: un estudio desde las dimensiones de valor, creencias, actitudes y comportamientos ambientales. <i>Producción + Limpia, 8</i>(2), p. 94-105.',
      link:
        'http://www.scielo.org.co/scielo.php?pid=S1909-04552013000200010&script=sci_abstract&tlng=es',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2020). <i>Elaboración de listas de verificación</i>.',
      link:
        'https://www.paho.org/hq/index.php?option=com_content&view=article&id=10935:2015-elaboracion-listas-verificacion&Itemid=42210&lang=es',
    },
    {
      referencia:
        'Orjuela, B. (2020). <i>Guía de implementación de responsabilidad social empresarial en empresas que buscan competitividad sostenible</i>. Universidad Militar Nueva Granada.',
      link: 'http://hdl.handle.net/10654/36464.',
    },
    {
      referencia:
        'Servicio de Asistencia Técnica para Bibliotecas Populares. (2020). <i>Guía para realizar una campaña de concientización</i>. Comisión Nacional de Bibliotecas Populares.',
      link:
        'https://www.conabip.gob.ar/sites/default/files/guia_para_realizar_una_campana_de_concientizacion.pdf',
    },
    {
      referencia: 'SUIN-Juriscol. (2020). <i>Normas</i>. Minjusticia.',
      link: 'http://www.suin-juriscol.gov.co/legislacion/normatividad.html',
    },
    {
      referencia:
        'Toro, R. (2017). <i>¿Cómo realizar la mejora continua ISO 14001 al implementar un Sistema de Gestión Ambiental?</i> Nueva ISO 14001.',
      link:
        'https://www.nueva-iso-14001.com/2017/04/mejora-continua-iso-14001/',
    },
    {
      referencia:
        'Torres, M. (2003). <i>Educación Ambiental. Política Nacional</i>. Ministerio de Ambiente, Vivienda y Desarrollo Territorial y Ministerio de Educación.',
      link:
        'https://www.uco.edu.co/extension/prau/Biblioteca%20Marco%20Normativo/Politica%20Nacional%20Educacion%20Ambiental.pdf',
    },
    {
      referencia:
        'Touraine, A. (1984). <i>Le retour de l&apos;acteur. Essai de sociologie</i>. Fayard.',
    },
    {
      referencia:
        'Wilches-Chaux, G. (2006). <i>Brújula, bastón y lámpara para trasegar los caminos de la educación ambiental</i>. Ministerio de Ambiente, Vivienda y Desarrollo Territorial.',
      link:
        'http://sie.car.gov.co/bitstream/handle/20.500.11786/35711/00419.pdf?sequence=1',
    },
    {
      referencia:
        'Wilches-Chaux, G. (2012). <i>Guía para la promoción y desarrollo de procesos participativos de gestión ambiental en el territorio CAR</i>. Corporación Autónoma Regional de Cundinamarca.',
      link: 'https://www.car.gov.co/uploads/files/5ace3952b1ef4.pdf',
    },
    {
      referencia:
        'World Air Quality Index Project. (s. f.). <i>Contaminación del aire de Bogotá</i>.',
      link: 'https://aqicn.org/city/bogota/es/',
    },
    {
      referencia:
        'WWF. <i>(2017). WWF-Colombia presenta ‘Colombia Viva - Informe 2017’, el primer gran análisis del estado de los ecosistemas del país.</i>',
      link: 'https://www.wwf.org.co/?uNewsID=316652',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructora',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Regional Distrito - Capital Centro de Gestión Industrial',
        },
        {
          nombre: 'Gloria Esperanza Ortiz Russi',
          cargo: 'Evaluador y diseñador instruccional',
          centro: 'Regional Distrito - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y pedagógico',
          centro: 'Regional Distrito - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima – Centro Agropecuario La Granja',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

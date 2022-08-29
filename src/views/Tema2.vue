<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo de vida de los proyectos
    .row.bg3
      .row.justify-content-center
        .col-lg-6.mt-5
          p.mt-5.mb-4 El ciclo de vida de un proyecto siempre se da de forma sistemática, es decir, las etapas que conlleva se interrelacionan unas con otras. De acuerdo con Mondragón (2017), en términos generales, un proyecto tiene tres fases bien definidas: preinversión, inversión y operación.
          p.s1.p-4 El ciclo de vida del proyecto se asemeja a un sistema y este se relaciona con las entradas, la transformación y la entrega de productos o salidas, considerando las entradas como las necesidades u oportunidades de negocio. 
          p.mt-4 Analice con atención la siguiente gráfica; asimile más y mejor el ciclo de vida de un proyecto, identificando sus tres grandes fases:
        .col-lg-6
          img(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen')
      TabsC.color-acento-contenido.mt-5
        .py-3.py-md-4.bac1(titulo="<strong>Preinversión</strong>")
          .row.justify-content-center.bac
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i1.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Idea
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i2.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Perfil
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i3.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Prefactibilidad
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i4.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Factibilidad
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i5.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Diseño

        .py-3.py-md-4(titulo="<strong>Inversión</strong>")
          .row.justify-content-center.bac
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i6.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Inversión
            .col-md-1
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i7.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Ejecución
            .col-md-1
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i8.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Producción de bienes y servicios
            .col-md-1
            .col-md-2.mb-4.mb-md-0.wii.mt-5
              img(src='@/assets/curso/tema2/i9.svg', alt='Texto que describa la imagen')
              .row
                p.text-center.mt-3.b1 Acompañamiento físico y financiero
        .py-3.py-md-4(titulo="<strong>Operación</strong>")
          .row.justify-content-center.bac
            .col-md-6.mb-4.mb-md-0
              img(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')

            .col-md-3.mt-5
              p.s2.text-center.p-2.mt-5 La población usa bienes y servicio
              p.s2.text-center.p-3 Se determina el impacto
      .row.justify-content-center.mt-5
        .col-lg-6.mt-4
          p Por otro lado, para la Agencia Presidencial de Cooperación Internacional (APC Colombia, 2020), el ciclo del proyecto se divide en siete etapas:
          ul.lista-ul
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Programación
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Identificación.

            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Valoración.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Diseño y formulación.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Negociación.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Ejecución (de la cual hacen parte el monitoreo y el seguimiento).
            li
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 Evaluación.
        .col-lg-6
          img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            .h4 ¡Atención!
            p La Alcaldía Mayor de Bogotá, a través de su Secretaría de Planeación (2018), propone un modelo que recoge conceptos de los dos esquemas expuestos anteriormente, con el cual se tiene una visión mucho más amplia de lo que concierne al ciclo de vida de un proyecto.
      
      p Con base en la información desarrollada hasta este punto, le ampliamos las etapas que se pueden definir para el ciclo de vida de un proyecto. Analice con atención cada etapa y sus fases, y procure llevar registro de lo más destacado en su libreta personal de apuntes:             
      SlyderB.mb-5.mt-5(:datos="datosSlyder")
      
      .tarjeta.color-acento-contenido.p-4.mb-5.mt-5
        .row.justify-content-around.align-items-center
          .col-12.col-sm-12.col-lg-12.wix.mt-4.mb-4
            img(src="@/assets/curso/tema2/ico10.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-1 Perfil y prefactibilidad en proyectos.
                p.text-small Amplíe algunos conceptos y generalidades de la fase de prefactibilidad.
              .col-sm-auto.caq
                a.boton.color-acento-botones(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                  span.caq Descargar
                  i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Etapa de preinversión',
        texto:
          'Aquí se realizan los estudios necesarios para delimitar mejor la problemática y establecer qué alternativa de solución es la más indicada para abordarla. Dentro de la preinversión, están las fases denominadas perfil, prefactibilidad y factibilidad, en las cuales se da un acopio y análisis de información necesaria para reducir niveles de incertidumbre, frente a la implementación del proyecto. Asimismo, en esta etapa se desarrollan actividades de formulación y estructuración.',
        imagen: require('@/assets/curso/tema2/4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fase de perfil',
        texto:
          'Es parte de la etapa de preinversión y en ella hay preparación para el análisis de la idea de proyecto, teniendo en cuenta información primaria (recolectada directamente en el sitio donde se realizará el proyecto, a través del trabajo de campo) e información secundaria, obtenida con estudios, diagnósticos o documentos, debidamente avalados, que den cuenta de las realidades del territorio. ',
        imagen: require('@/assets/curso/tema2/5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fase de prefactibilidad',
        texto:
          'Hace parte de la etapa de preinversión y en ella se hace un análisis más detallado de la información disponible, recurriendo a estudios especializados que den cuenta de la realidad del territorio en el cual se llevará a cabo el proyecto. Los principales estudios que tienen lugar en esta fase son los mostrados en la gráfica.',
        imagen: require('@/assets/curso/tema2/6.svg'),
      },
      {
        titulo: 'Fase de factibilidad',
        texto:
          'Es la última fase de la etapa de preinversión; aquí se analizan, en detalle, los estudios requeridos que dan cuenta del porqué de la alternativa seleccionada. Para ello, es necesario el uso de técnicas de evaluación ex ante, dentro de las cuales se menciona el análisis beneficio-costo o el análisis costo-eficiencia. Dentro de los aspectos que se profundizan en esta fase, están los estudios técnicos en administración de riesgos, aspectos financieros y fuentes de financiación, entre otros.',
        imagen: require('@/assets/curso/tema2/7.png'),
      },
      {
        titulo: 'Etapa de inversión',
        texto:
          'En ella, se llevan a la práctica las actividades planeadas en la formulación del proyecto, entre otras, la gestión de trámites, obtención de permisos, firma de contratos y procesos administrativos del proyecto. Cuando el proyecto es de inversión pública, en esta etapa se realiza la entrega de los bienes y/o servicios para atender las necesidades de las comunidades vinculadas a la iniciativa.',
        imagen: require('@/assets/curso/tema2/8.png'),
      },
      {
        titulo: 'Etapa de operación',
        texto:
          'Está relacionada con el tiempo de duración del proyecto y da respuesta a las necesidades planteadas en la formulación. Los gastos de operación son estimados en la etapa de preinversión y son absolutamente necesarios para garantizar la sostenibilidad de la iniciativa en el tiempo. Una falla en la previsión de estos recursos puede poner en riesgo el cierre financiero del proyecto, afectando el logro de objetivos. En definitiva, la etapa de operación es la puesta en marcha de actividades usando recursos previstos en el diseño.',
        imagen: require('@/assets/curso/tema2/9.png'),
      },
      {
        titulo: 'Seguimiento',
        texto:
          'Es parte de la etapa de operación y consiste en un constante acompañamiento al desarrollo de las actividades previstas en la formulación, con lo cual se espera reducir los riesgos y atender las contingencias que se puedan presentar durante esta etapa crítica.',
        imagen: require('@/assets/curso/tema2/10.png'),
      },
      {
        titulo: 'Etapa de evaluación Ex Post',
        texto:
          'En esta última etapa, se hace un análisis de los impactos del proyecto con base en los criterios definidos en los objetivos propuestos en la formulación. Estos impactos son observables desde lo social, financiero, económico, ambiental, comercial o comunitario, de acuerdo con el carácter del proyecto y la situación final o situación esperada. En esta etapa se revisan, en detalle, las posibles desviaciones que sufrió el proyecto durante su ejecución y que, de alguna forma, produjeron ajustes frente a lo planeado inicialmente.',
        imagen: require('@/assets/curso/tema2/11.png'),
      },
    ],
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

<style lang="sass">
.cajon.color-acento-contenido
  background-color: rgba(206,211,113,0.25)
.slyder-b.mb-5.mt-5 .col-lg-8
  width: 100%
</style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Proyectos
    .row.bg1
      p El desarrollo e implementación de cualquier idea, bien sea la puesta en marcha de una alternativa de negocio, la solución de alguna problemática que afecte a una comunidad, la satisfacción de alguna necesidad de un sector de la población o la construcción de una obra de infraestructura, necesariamente, debe pasar por un riguroso proceso de planificación y análisis.
      img(data-aos="fade-down")(src='@/assets/curso/tema1/i1.jpg', alt='Texto que describa la imagen')
      .row.justify-content-center.mt-5
        .col-lg-6
        
          p Con la planificación, el análisis y la identificación de los recursos que se requieren:
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/icom1.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul.bf1
                  .p-4.mt-3
                    p <strong>1.</strong> Se favorece la reducción de los riesgos.
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/icom2.svg' alt='AvatarTop')
                .tarjeta.tarjeta--azul.bf1
                  .p-4.mt-3
                    p <strong>2.</strong>  Aumentan las posibilidades de éxito.
          .row
            .col-lg-12
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema1/icom3.png' alt='AvatarTop')
                .tarjeta.tarjeta--azul.bf1
                  .p-4.mt-3
                    p <strong>3.</strong>  Se facilita la identificación de factores que pueden afectar el logro los de objetivos propuestos.               
    .row.bg2.mt-4.justify-content-center
      p El proyecto puede, entonces, entenderse como ese conjunto de acciones interrelacionadas y coordinadas que permiten alcanzar un conjunto de objetivos, determinados previamente de forma precisa, los cuales pueden ser posteriormente verificados. (APC Colombia, 2020). 
      p Igualmente, un proyecto puede interpretarse como:
      .col-lg-6
        .row.mb-5.justify-content-center.mt-5
          .col-md-6.col-lg.mb-5.mb-lg-0.t2
            .tarjeta-avatar
              img.padds(src='@/assets/curso/tema1/icono.svg' alt='AvatarTop')

              .tarjeta.color-primario
                .p-4
                  p <strong>Soluciones inteligentes</strong>
                  p La búsqueda de una solución inteligente al planteamiento de un problema, tendiente a resolver una necesidad humana, o como un plan de trabajo con acciones sistemáticas.

          .col-md-6.col-lg.mb-5.mb-lg-0.t2
            .tarjeta-avatar
              img.padds(src='@/assets/curso/tema1/icono2.svg' alt='AvatarTop')

              .tarjeta.color-primario
                .p-4
                  p <strong>Búsqueda de logros</strong>
                  p Acciones y procesos coordinados entre sí, valiéndose de los medios necesarios y posibles, en busca de objetivos específicos por alcanzar en un tiempo previsto.
      
      p Para que un proyecto sea considerado como tal, existen algunas características generales que este debe cumplir, tal como se presenta en el siguiente esquema:
      .row.mt-5
        .col-lg-5
          .row.mb-5
            .col-md-12.mb-5.mb-md-0
              LineaTiempoD.color-primario
                p.text-small(numero="1" titulo="Único") Cada proyecto es irrepetible, pues atiende situaciones muy particulares.
                
                p.text-small(numero="2" titulo="Objetivo") Tiene objetivos claros, bien definidos y concretos.
                
                p.text-small(numero="3" titulo="Beneficiarios") Siempre se identifican beneficiarios del proyecto.
                
                p.text-small(numero="4" titulo="Ámbito geográfico ") Se desarrolla en un área geográfica específica. 
                p.text-small(numero="5" titulo="Contexto") Siempre se desarrolla de forma articulada con la realidad del entorno. 
                p.text-small(numero="6" titulo="Actividades") Las actividades planteadas responden a los objetivos del proyecto. 
                p.text-small(numero="7" titulo="Temporal") Tiene lugar en un espacio de tiempo limitado. Nunca es permanente.   
                
        .col-lg-7
          img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
        separador
        #t_1_1.titulo-segundo.color-acento-contenido
          h2 1.1  Clasificación
        .row
          .col-lg-5.mt-4
            p Debido a que los proyectos tienen diversos campos de acción, no es posible establecer categorías concretas para agruparlos. Sin embargo, dependiendo de criterios como su complejidad, fuente de financiación, contenido, entre otros, es posible clasificarlos.
            p No obstante una clasificación que abarque la mayoría de los criterios que se pueden tener en cuenta para agrupar los tipos de proyectos, es posible encontrar otras subcategorías que dependen del área en la que estos se lleven a cabo, sus objetivos, su cobertura o el tipo de población hacia la cual se dirigen las acciones.
          .col-lg-1
          .col-lg-5
            img(src='@/assets/curso/tema1/5.svg' alt='AvatarTop')
          .col-lg-1
        p.mt-5 Le presentamos una clasificación basada en criterios muy generales, comunes a la mayoría de proyectos:
        .titulo-sexto.color-acento-botones.mt-5
          h5 Tabla 1 
          span Tipos de proyectos de acuerdo con los criterios de clasificación
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                th.wt1 CRITERIO
                th.wt1 TIPO DE PROYECTO
                th CARACTERÍSTICA
            tbody
              tr
                <td rowspan="4" class="tc"> Financiación</td>
                td.text-center Públicos
                td Se financian a través de recursos públicos o estatales. 25


              tr
                td.text-center Privados


                td Utilizan recursos provenientes del sector privado.


              tr
                td.text-center Mixtos
                td Combinan recursos de diversas fuentes, públicas y privadas.

              tr
                td.text-center Cooperación
                td Usan recursos provenientes de donaciones o subvenciones de entidades cooperantes. 

              tr
                <td rowspan="4" class="tc"> Disciplina</td>
                td.text-center Informáticos
                td Se dirigen al desarrollo de herramientas de software.

              tr
                td.text-center Empresariales
                td Constitución o conformación de empresas para un fin determinado. 

              tr
                td.text-center Productivos
                td Enfocados en la producción de algún bien o la prestación de un servicio en particular. 

              tr
                td.text-center Infraestructura
                td Desarrollo de obras de infraestructura para atender necesidades de tipo público o privado.

              tr
                <td rowspan="2" class="tc"> Complejidad</td>
                td.text-center Simples

                td Involucran pocos recursos y no integran demasiados componentes. Tienen una escala local.

              tr
                td.text-center Complejos
                td Alta demanda de recursos, muchos componentes. Se realizan a escala regional o nacional. 

              tr
                <td rowspan="6" class="tc"> Finalidad</td>
                td.text-center Educativos
                td Proyectos para la transferencia de conocimientos o tecnologías. 

              tr
                td.text-center Sociales
                td Buscan impactos positivos en un sector de la sociedad en particular. 

              tr
                td.text-center Comunitarios
                td Se desarrollan para atender las necesidades de una comunidad determinada. 
              tr
                td.text-center Investigación
                td Estos buscan resolver problemas de investigación en diversas áreas del conocimiento. 

              tr
                td.text-center Producción
                td Obtención de bienes o la prestación de servicios. 

              tr
                td.text-center Culturales
                td Promoción, protección y/o divulgación de una expresión cultural de una comunidad o región. 

        p <i> Nota. Tomada de economipedia.com</i>
        .row.justify-content-center.mt-5
          .col-lg-8
            .row
              .col-lg-6
                .cajon.color-acento-contenido.p-4.mb-4
                  .h4 ¡Atención!
                  p En el caso de los proyectos productivos, es posible diferenciar dentro de ellos otras subclases, las cuales se definen de acuerdo con el sector económico al cual pertenece la iniciativa.
              
              .col-lg-6
                .cajon.color-acento-contenido.p-4.mb-4
                  .h4 ¡Importante!
                  p Sin embargo, en términos generales, la estructura de un proyecto y los pasos que se deben tener en cuenta para su formulación son los mismos, independientemente del tipo o subclase de proyecto.
        
        separador      
        #t_1_2.titulo-segundo.color-acento-contenido
          h2 1.2  Componentes de un proyecto
        .row
          .col-lg-6.mt-4
            p Los proyectos son, básicamente, un conjunto de acciones y actividades que se realizan de una manera secuencial, involucrando recursos económicos, humanos y técnicos, entre otros elementos, con el fin de lograr un objetivo propuesto. 

            p Para que tal conjunto de acciones cumpla con los requisitos mínimos para ser considerado un proyecto, debe contener, por lo menos, los componentes que se describen en el siguiente recurso:
          .col-lg-1

          .col-lg-5
            img(src='@/assets/curso/tema1/6.svg' alt='AvatarTop')
    figure.mb-5.mt-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/KENhedZ8sUc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: rgba(226,226,226,0.25)
.col-md-6.col-lg.mb-5.mb-lg-0.t2 .tarjeta-avatar .tarjeta
  @media screen and ( max-width: 420px)
    width:280px!important
.linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #D2E1F1!important
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
  background-color: #F8F8F8!important
.linea-tiempo-d.color-primario .linea-tiempo-d__item--selected .linea-tiempo-d__item__number
  background-color: #DDEDCA!important
.tarjeta-avatar
  @media screen and ( max-width: 420px)
    padding-left: 35px
</style>

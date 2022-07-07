<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade")
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Formulación del proyecto
    p El éxito de la implementación de un proyecto depende, en gran medida, de un correcto proceso de formulación, pues es allí donde se identifica el problema, se analizan los posibles impactos de la propuesta, se establecen sus objetivos, actividades, metas, recursos, alcances y la forma como se integrarán todos los elementos que constituyen la iniciativa para llevarla a feliz término.
    img(src='@/assets/curso/tema3/1.png', alt='Texto que describa la imagen')
    p.mt-4 En la formulación de un proyecto, independientemente de su clasificación, existen algunos elementos que se deben tener en cuenta para que este se enfoque en la resolución del problema o satisfacción de la necesidad, cualquiera que sea el caso, de la manera más eficientemente posible. Estos son algunos de ellos:
    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 1 
      span Requisitos para la formulación de un proyecto
    .row.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/2.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-5.a
              p <strong>1.</strong> Identificación del problema o necesidad. 

      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              p <strong>2.</strong> Elaboración del árbol de problemas para establecer las causas del problema y sus efectos. 
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              p <strong>3.</strong>  Construcción del árbol de objetivos a partir del árbol de problemas. 

      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones
            .p-4
              p <strong>4.</strong>  Selección de la alternativa de solución más indicada.  
    .row.justify-content-center.mt-5

      .col-lg-6.mt-5
        .row.mt-5
        SlyderF(columnas="col-12")
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 Matriz de Marco Lógico
                p Se conoce como MML y es la teoría de proyectos propuesta por el Departamento de Planeación Nacional (DNP), usada ampliamente en el mundo entero, desde los años 70, cuando surgió en los Estados Unidos.
              
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 Utilidad de la MML
                p Esta metodología permite presentar de forma sistemática y lógica los objetivos de un proyecto o programa y su implementación refleja las condiciones de causalidad que se dan entre estos.
              
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 Beneficios de la MML
                p Esta metodología facilita la verificación del alcance de los objetivos e identifica los riesgos que puedan influir en el éxito del proyecto.
              
      .col-lg-5.as
        img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop')
      .col-lg-1
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Diagnóstico e identificación
    .row.justify-content-center
      .col-lg-6
        p.mt-3 El desarrollo del proceso de formulación depende de un diagnóstico acertado de las realidades y particularidades de un territorio, una comunidad o un segmento de la población, ya que, al conocer a fondo los comportamientos, las condiciones geográficas del territorio, la dinámica de los mercados y demás elementos que convergen en un determinado lugar, es más probable identificar las necesidades reales y procurar soluciones duraderas a las problemáticas detectadas.
        .row.texto11
          .col-lg-12.texto1.p-4
            p A través de la captura de información de una zona geográfica específica o una comunidad en particular, se puede dar una lectura general sobre una o varias situaciones; sin embargo, para que el proceso de diagnóstico sea más efectivo, es necesario que la información que se recopile proceda de diversas fuentes, con el propósito de contrastar los datos y enriquecer las discusiones alrededor de algún tema en especial. 
        p.mt-3 Un proceso de diagnóstico se puede realizar de forma participativa (comunitaria) o a través de herramientas como:
        ul.lista-ul.mt-4
          li.mb-0 
            i.fas.fa-angle-right.color-acento-contenido
            p.mb-0 Encuestas
          li.mb-0 
            i.fas.fa-angle-right.color-acento-contenido
            p.mb-0 Estudios
          li.mb-0 
            i.fas.fa-angle-right.color-acento-contenido
            p.mb-0 Sondeos

          li.mb-0 
            i.fas.fa-angle-right.color-acento-contenido
            p.mb-0 Mapas parlantes

          li.mb-0 
            i.fas.fa-angle-right.color-acento-contenido
            p.mb-0 Foros o encuentros

      .col-lg-6
        img.posa(src='@/assets/curso/tema3/7.png' alt='AvatarTop')
    p.mt-4 Para que un proceso de diagnóstico genere información suficiente para la elaboración de un perfil, debe recoger los siguientes elementos:
      .row.mt-5
        .col-lg-5
          .row.mb-5
            .col-md-12.mb-5.mb-md-0
              LineaTiempoD.color-primario
                p(numero="1" titulo="Territorio") Identificación y descripción de las características físicas del territorio.
                
                p(numero="2" titulo="Análisis") Análisis de las características socioeconómicas del territorio. 
                
                p(numero="3" titulo="Servicios") Acceso a servicios básicos e infraestructura. 
                
                p(numero="4" titulo="Población") Descripción de la población. 
                p(numero="5" titulo="Convivencia") Convivencia y seguridad ciudadana. 
                p(numero="6" titulo="Institucionalidad") Presencia institucional.
        .col-lg-1        
        .col-lg-5
          img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop')
        .col-lg-1
    #t_9_9.titulo-segundo.color-acento-contenido
      h2  Análisis del entorno
    p En este primer momento del diagnóstico, es importante delimitar la zona de estudio, la cual corresponde a una zona geográfica en particular (un barrio, una vereda, un municipio, una región, una ciudad). Al restringir el diagnóstico a una zona en particular, se puede ser mucho más eficiente en el proceso de captura y análisis de la información, con lo cual se obtiene un diagnóstico más acertado. 
    p Analice, con atención, los elementos principales que abarca el análisis del entorno, los cuales dan cuenta de las realidades que configuran el territorio:
    .row
      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-8
                img(src='@/assets/curso/tema3/ico1.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-4 <strong>Geográfico y biofísico</strong>

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-6
                img(src='@/assets/curso/tema3/ico2.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-5 <strong>Socioeconómico</strong>

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-6
                img(src='@/assets/curso/tema3/ico3.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-4 <strong>Servicios e infraestructura</strong>

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-6
                img(src='@/assets/curso/tema3/ico4.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-5 <strong>Socioculturales</strong>

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-6
                img(src='@/assets/curso/tema3/ico5.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-4 <strong>Seguridad y convivencia</strong>
      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-secundario
            .row.justify-content-center
              .col-lg-6
                img(src='@/assets/curso/tema3/ico6.svg' alt='AvatarTop')
            .p-4
              p.text-center.textcolor1.mt-4 <strong>Articulación interinstitucional</strong>
    .row
      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-4
              p.text-center.textcolor1 <strong>Geográfico y biofísico</strong>
              p.text-center Clima, accidentes geográficos, suelos, recursos naturales, problemáticas ambientales, hidrografía.

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-3
              p.text-center.textcolor1 <strong>Socioeconómico</strong>
              p.text-center Fuentes de empleo, ingresos, demografía, actividades económicas, productividad, usos del suelo, acceso a medios productivos. 

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-3
              p.text-center.textcolor1 <strong>Servicios e infraestructura</strong>
              p.text-center Vías, red eléctrica, saneamiento básico, comunicación, agua potable, sistemas de riego, medios de transporte, costos de transporte. 

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-4
              p.text-center.textcolor1 <strong>Socioculturales</strong>
              p.text-center Usos y costumbres, tradiciones, organizaciones comunitarias, liderazgos, participación ciudadana, agremiaciones.

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-3
              p.text-center.textcolor1 <strong>Seguridad y convivencia</strong>
              p.text-center Presencia de actores armados, inseguridad, violencia, violencia doméstica, respuesta institucional, redes de apoyo.

      .col-md-2.col-lg-2.mb-5.mb-lg-2
        .tarjeta-avatar
          .tarjeta.color-acento-botones1
            .p-2
              p.text-center.textcolor1 <strong>Articulación interinstitucional</strong>
              p.text-center Presencia institucional, proyectos y programas desarrollados, cooperación internacional, convenios y contratos, gobernanza. 
    p.mt-4 Para que la información recopilada en el diagnóstico sea de utilidad para el proceso de estructuración del proyecto, es necesario que esta sea principalmente de tipo cuantitativo, de modo que sea más sencillo agrupar datos, obtener estadísticas y observar tendencias que den sustento a las observaciones realizadas por parte del equipo estructurador. 
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          .h5 Tenga en cuenta
          p La información descriptiva es igualmente importante, sin embargo, cada una de las afirmaciones que se haga en el documento, en lo posible, debe tener un respaldo estadístico. 
    
    #t_9_9.titulo-segundo.color-acento-contenido.mt-5
      h2   Análisis del sector productivo  
    .row
      .col-lg-7
        p Otro de los componentes importantes del diagnóstico es el análisis de sector productivo, el cual se enfoca en la descripción de las características y componentes específicos de la actividad económica en la cual tiene lugar la iniciativa de proyecto. 
        p Este análisis se enfoca, sobre todo, en los comportamientos del mercado, la oferta y demanda de bienes y servicios que se da al interior del sector económico, las relaciones comerciales y los encadenamientos productivos que se desarrollan alrededor de la iniciativa estudiada. 
        p Se presentan, en el siguiente recurso, los elementos clave que debe contener el análisis del sector productivo para que aporte información relevante al proceso de formulación del proyecto:
      .col-lg-5
        img(src='@/assets/curso/tema3/9.png' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-10.mt-5
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/10.png', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="0%" y="9%" numero="+")
            .h5.mb-2 Indicadores
            p En la formulación de un proyecto, es indispensable analizar el sector productivo en el cual este tendrá su aplicación.
            P Para que el análisis del sector productivo aporte información relevante para el proceso de formulación del proyecto, debe contener elementos como:

          .tarjeta.color-acento-botones.p-3(x="0%" y="32%" numero="+")
            .h5.mb-2 1. Productividad del sector
            p Se deben revisar, de manera general, los volúmenes de producción en el contexto nacional, regional y/o municipal, para, de esta forma, establecer qué aspectos pueden favorecer o limitar su desarrollo. Esta informacion que puede proceder de fuentes primarias (encuestas, sondeos, entrevistas) o  de fuentes secundarias (estudios, tesis de grado, artículos, cofras oficiales), debe dar cuenta del estado actual del sector en términos económicos y monetarios.

          .tarjeta.color-acento-botones.p-3(x="0%" y="53%" numero="+")
            .h5.mb-2 2. Áreas destinadas a la actividad
            p Es importante establecer dónde se lleva a cabo la actividad productiva o en qué área geográfica este sector en particular tiene mayor participación. Esto da una lectura general de las perspectivas y potencialidades de la actividad productiva.
          .tarjeta.color-acento-botones.p-3(x="0%" y="75%" numero="+")
            .h5.mb-2 3. Empleos generados
            p Un indicador de la importancia del sector productivo y su posición dentro de la economía nacional es la identificación de su aporte en la generación de empleo, bien sea de forma directa o indirecta, para lo cual, es importante conocer los encadenamientos productivos. 
          .tarjeta.color-acento-botones.p-3(x="100%" y="75%" numero="+")
            .h5.mb-2 7. Relación con objetivos de desarrollo y planes de gobierno
            p De esta forma, será posible identificar la oferta institucional aplicable al sector y conseguir el apoyo necesario para adelantar las ideas de negocio relacionadas con el entorno productivo.  
          .tarjeta.color-acento-botones.p-3(x="100%" y="53%" numero="+")
            .h5.mb-2 6. Estudio de necesidades
            p Es importante conocer cuáles son las limitantes del sector productivo, para, de esta forma, diseñar estrategias que permitan superarlas y atenderlas de manera oportuna. 
          .tarjeta.color-acento-botones.p-3(x="100%" y="32%" numero="+")
            .h5.mb-2 5. Aporte al producto interno bruto
            p Con la identificación de los volúmenes de producción y de comercialización, es posible establecer los aportes de ese sector de la economía al producto interno bruto del país, lo cual es fundamental para la gestión de recursos y el reconocimiento del sector en el ámbito de la economía nacional. 
          .tarjeta.color-acento-botones.p-3(x="100%" y="9%" numero="+")
            .h5.mb-2 4. Volúmenes de comercialización
            p Este dato entrega una medida de los recursos anuales que se transan alrededor del sector productivo analizado, lo cual se puede emplear para determinar su importancia dentro de la economía nacional, regional o municipal. 
    #t_9_9.titulo-segundo.color-acento-contenido.mt-5
      h2  Recolección de información
    p La recolección de información es una de las etapas más importantes del proceso de diagnóstico, debido a que la calidad del producto final, el planteamiento de los problemas y las alternativas de solución dependen del tipo de información que se recoja, de sus características y de la forma como se organizan los datos para su posterior análisis. 
    p Para la recolección de información diagnóstica, en la formulación de proyectos, es necesario tener en cuenta los elementos que se describen a continuación:
    SlyderB.mb-5.mt-5.b.p-4(:datos="datosSlyder")
    .row.bg4
      #t_9_9.titulo-segundo.color-acento-contenido.mt-5
        h2  Procesamiento de datos
      .row
        .col-lg-4
          .row.justify-content-center
            .col-lg-9
              img(src='@/assets/curso/tema3/17.svg', alt='Texto que describa la imagen')
        .col-lg-8
          p Las herramientas para el procesamiento de datos son muy diversas y sus aplicaciones son casi que ilimitadas. Dependiendo de los objetivos del estudio o del análisis, existen herramientas casi que a la medida de cada necesidad, por medio de las cuales es posible procesar los datos y obtener como resultado tendencias, reportes, comparaciones y salidas, que facilitan la comprensión de la realidad y la interpretación de las dinámicas que se dan en el territorio.
          p Le presentamos las principales utilidades del procesamiento de datos; explore el recurso que se muestra a continuación y procure llevar registro de lo más destacado en su libreta personal de apuntes:
      figure.mb-5.mt-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      separador
      #t_3_2.titulo-segundo.color-acento-contenido.mt-5
        h2  3.2  Planteamiento del problema o necesidad
      .row
        .col-lg-7
          .row.texto11
            .col-lg-12.texto1.p-4
              p La matriz de marco lógico está diseñada para resolver problemas, por lo que su planteamiento es la base para el proceso de formulación del proyecto o la satisfacción de una necesidad manifiesta. Los proyectos tienen la finalidad de sobrepasar esos obstáculos o barreras para llegar a una situación potencial o deseada.
          p.mt-4 Para este paso inicial, del planteamiento del problema o necesidad, es importante tener en cuenta tres elementos esenciales:
          ul.lista-ul.mt-4
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 <strong>Situación actual:</strong> diagnóstico del presente, en el cual existe una problemática o una necesidad por satisfacer. 
            
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 <strong>Situación potencial:</strong>  cómo se esperaría que esté la situación en un tiempo determinado. 
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p.mb-0 <strong>Barreras: </strong>  obstáculos que existen para que la situación actual no esté como la situación potencial.  

        
        .col-lg-5.tt
          img(src='@/assets/curso/tema3/18.svg', alt='Texto que describa la imagen')
      #t_9_9.titulo-segundo.color-acento-contenido.mt-5
        h2  Identificar el problema
      p Aparentemente, identificar un problema es una tarea sencilla, pues en el día a día cualquier persona tiene situaciones difíciles a las cuales enfrentarse, lo cual, necesariamente, requiere identificarlas y actuar de acuerdo con lo registrado en sus observaciones. Sin embargo, delimitar un problema es un ejercicio mucho más complejo de lo que comúnmente se cree, debido a que a menudo se confunden sus causas con sus consecuencias.
      p Por fortuna, en el proceso de formulación de proyectos, existen herramientas que dirigen el trabajo y facilitan la identificación y delimitación de los problemas, con lo cual es posible, a través del proyecto, atender las situaciones (obstáculos) y facilitar el tránsito hacia una situación potencial o deseada. 
      p Independientemente del tipo de diagnóstico que se realice, es necesario que, en la identificación del problema, se respondan las siguientes preguntas:
      .row.mt-5
        .col-lg-6
          .row.mb-5
            .col-md-12.mb-5.mb-md-0
              LineaTiempoD.color-primario
                p(numero="1" titulo="¿En qué consiste el problema?") Se debe describir qué obstáculos se interponen para llegar a la situación deseada.
                
                p(numero="2" titulo="¿Cómo se evidencia el problema?") Establecer cómo se hace visible el problema dentro de la comunidad o zona afectada.
                
                p(numero="3" titulo="¿Qué causa el problema?") Establecer las causas inmediatas, aquello que lo produce.
                
                p(numero="4" titulo="¿Qué factores agravan la situación?") Qué elementos, de alguna u otra forma, hacen que la situación empeore.
        .col-lg-1
        .col-lg-4
          img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop')
        .col-lg-1
      p.mt-4 A continuación, se consideran algunos problemas identificados de manera correcta e incorrecta:
      .titulo-sexto.color-acento-botones.mt-5
        h5 Tabla 2
        span   Manera correcta e incorrecta de identificar un problema central
      .row
        .col-lg-11
          .tabla-a.color-secundario.mb-5 
            table
              thead
                tr
                  th Forma incorrecta
                  th Forma correcta
              tbody
                tr
                  td No se cuenta con insumos para la producción de hortalizas.
                  td Reducción en la producción de hortalizas.

                tr
                  td Los productores no están capacitados en operación de equipos de cómputo.
                  td Deficiencias en el manejo de registros de las unidades productivas.

                tr
                  td Bajos ingresos de la población por situaciones de desempleo y alta informalidad en las calles del municipio.
                  td Pobreza
      .row
        .col-lg-5
          img(src='@/assets/curso/tema3/20.svg' alt='AvatarTop')

        .col-lg-1
        .col-lg-6
          p Una vez se ha identificado el problema central, tenga en cuenta que:
          ul.lista-ul.mt-4
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Es necesario empezar a establecer sus causas y sus consecuencias.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Entre más información se tenga sobre el problema y sus orígenes, es posible desarrollar alternativas de solución.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Las alternativas de solución deben permitir actuar sobre los elementos que lo originan y no sobre las situaciones que de allí se derivan.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Cuando un problema central no se identifica de manera correcta, la formulación de los indicadores igualmente será incorrecta.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Si los indicadores están incorrectamente formulados, se carecerá de efectividad en la solución de las problemáticas.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Si no hay efectividad en la solución de problemáticas, no se lograrán los objetivos del proyecto, entre otras dificultades.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p No lograr los objetivos del proyecto es muy grave, ya que implica una mala utilización de los recursos y el incumplimiento de los compromisos adquiridos con las comunidades. 
    #t_9_9.titulo-segundo.color-acento-contenido.mt-5
      h2  Árbol de problemas
    p El árbol de problemas trata de <strong>la identificación del problema central</strong> y de todos los elementos que, de una u otra forma, se relacionan con este (causas y efectos). Se usa para establecer qué está originando la situación (causas directas e indirectas) y la manera como dicha situación repercute en otros niveles de la comunidad o el área geográfica estudiada (efectos directos e indirectos).
    .titulo-sexto.color-acento-botones.mt-5
      h5 Figura 2
      span  Estructura del árbol de problemas para elaboración de proyectos
    img(src='@/assets/curso/tema3/ss.svg' alt='AvatarTop')
    p.mt-5 Con la elaboración del árbol de problemas, se allana el camino para la identificación de alternativas de solución a la problemática planteada. 
    .row.mt-5
      .col-lg-7
        h4.mt-5 ¿Por qué árbol de problemas?
        p El árbol de problemas se denomina de esta manera debido a que existen múltiples ramificaciones que representan las relaciones entre las causas (pensadas como raíces del problema) y sus efectos (entendidas como ramas superiores). 
        h4.mt-5 ¿Cómo se diseña este árbol?
        p En el análisis de situaciones reales, es posible que un problema central tenga varias causas directas y que estas, a su vez, tengan una misma causa indirecta, por lo que, en cuanto a la forma como se construye el árbol, no hay un diseño predeterminado, sino que, por el contrario, este es un reflejo de las condiciones particulares de cada entorno analizado.
      .col-lg-5
        .row.justify-content-center
          .col-lg-10
            img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop')
    .titulo-sexto.color-acento-botones.mt-5
      h5 “¿Cómo se diseña este árbol?”.
    img(src='@/assets/curso/tema3/45.svg' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-7.mt-5
        p En la construcción del árbol de problemas, es fundamental reflexionar sobre:
        ul.lista-ul.mt-4
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿El problema está bien expresado?</strong> Para que el problema este bien expresado, debe presentarse como una situación negativa.
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿A quiénes afecta?</Strong> Analizar si afecta solo a un sector de la población, a un número determinado de personas o a una comunidad. 
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿Cómo afecta?</Strong> Definir cómo el problema genera los impactos mencionados. 
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿Desde cuándo afecta?</Strong> Establecer el tiempo que esa situación en particular lleva en el territorio. 
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿Es una situación modificable?</Strong> Revisar si la problemática se puede revertir o si se pueden reducir sus impactos. 
          li.mb-0 
            i.fas.fa-check.color-acento-contenido
            p <Strong>¿Qué interrelación tiene con otros problemas?</Strong> Identificar relaciones de causalidad.  
      .col-lg-5
        img(src='@/assets/curso/tema3/22.svg' alt='AvatarTop')
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          .h5 ¡Atención!
          p La construcción del árbol de problemas se realiza con el fin de identificar las causas del problema central, para, de esta forma, acceder a ubicar las mejores alternativas de solución.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3  Justificación 
    .row.justify-content-center
      .col-lg-8
        p.p-4.c1 Otro de los aspectos que es fundamental para la elaboración del perfil es la justificación, la cual consiste en la presentación de los argumentos que ponen de manifiesto la necesidad de implementar el proyecto, en la medida en que soluciona un problema y atiende las necesidades de una población identificada.
        .row.mt-4
          .col-lg-10
            p Para la construcción de la justificación del proyecto, se pueden tener en cuenta preguntas orientadoras, como las que se enuncian y detallan a continuación:
      .col-lg-4
        img(src='@/assets/curso/tema3/23.svg' alt='AvatarTop')
    .row.mt-5
      .col-lg-1
      .col-lg-9
        .row
          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-secundario
                .row.justify-content-center
                  .col-lg-6
                    img(src='@/assets/curso/tema3/ico11.svg' alt='AvatarTop')
                .p-4
                  p.text-center.textcolor1.mt-5 <strong>¿En qué aspectos mejora la situación actual?</strong>

          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-secundario
                .row.justify-content-center
                  .col-lg-6
                    img(src='@/assets/curso/tema3/ico12.svg' alt='AvatarTop')
                .p-4
                  p.text-center.textcolor1.mt-5 <strong>¿Por qué se considera que esa es la solución pertinente?</strong>

          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-secundario
                .row.justify-content-center
                  .col-lg-6
                    img(src='@/assets/curso/tema3/ico13.svg' alt='AvatarTop')
                .p-4
                  p.text-center.textcolor1.mt-5 <strong>¿Cuál es el valor agregado o aporte del proyecto?</strong>
        .row
          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-acento-botones1
                .p-4
                  h5 ¿En qué aspectos mejora la situación actual?
                  p.mt-5 Identificar los aspectos puntuales en los cuales habrá mejoras con respecto a la situación inicial. Se debe tener información confiable, en lo posible, cuantificable, sobre los indicadores que se afectarán. Puede darse información sobre aumento de productividad, mejoramiento de la disponibilidad de algún bien o servicio. 

          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-acento-botones1
                .p-4
                  h5 ¿Por qué se considera que esa es la solución pertinente?
                  p.mt-5 Se debe tener claridad sobre las alternativas que se tenían para solucionar el problema o satisfacer la necesidad, y por qué la escogida resultó ser la más viable. Esta información se debe argumentar con base en la información recopilada en el diagnóstico.  
          .col-md-4.col-lg-4.mb-5.mb-lg-4
            .tarjeta-avatar.aa
              .tarjeta.color-acento-botones1
                .p-4
                  h5 ¿Cuál es el valor agregado o aporte del proyecto?
                  p.mt-5 En la justificación, se debe mencionar qué aspectos mejorarán con la implementación del proyecto, no solo en lo relacionado con el logro de los objetivos, sino con los impactos adicionales que su implementación tendrá sobre una comunidad, un territorio o un segmento de la población. 
      .col-lg-2
    separador
    #t_3_4.titulo-segundo.color-acento-contenido.mt-5
      h2  3.4  Identificación de objetivos
    .row.justify-content-center
      .col-lg-7
        .row.texto11
          .col-lg-12.texto1.p-3
            p En la formulación de los proyectos, es necesario identificar las alternativas de solución por medio de las cuales se superarán las barreras y se llegará, finalmente, a la situación esperada o potencial. Para esto, se debe tomar como base el árbol de problemas y, a partir de este, elaborar un árbol de objetivos, el cual se constituye en un esquema donde se visualizan las condiciones que se deben cumplir para lograr ese estado deseado.
        p.mt-4 Con base en la Metodología de Marco Lógico (MML), el objetivo general del proyecto tiene su origen al convertir en positivo el problema central del árbol de problemas. Igualmente, los objetivos específicos, también denominados medios, se dan al pasar a positivo las causas del problema, mientras que los efectos directos e indirectos se transforman en fines directos e indirectos del proyecto, respectivamente. 
        p De ahí la importancia de construir un árbol de problemas consistente y basado en las situaciones identificadas en el proceso de diagnóstico, tal como se presenta en el siguiente esquema de problemas y objetivos:
      .col-lg-5
        img(src='@/assets/curso/tema3/24.svg' alt='AvatarTop')
    .titulo-sexto.color-acento-botones.mt-5
      h5 Tabla 3
      span Transformación del árbol de problemas en árbol de objetivos
    img(src='@/assets/curso/tema3/25.svg' alt='AvatarTop')
    p.mt-5 Le presentamos algunos de los errores más comunes que suelen encontrarse en la construcción de los objetivos generales y específicos de los proyectos:
    SlyderB.mb-5.mt-5.b.p-4(:datos="datosSlyder2")
    separador
    #t_3_5.titulo-segundo.color-acento-contenido.mt-5
      h2  3.5   Análisis de alternativas
    .row
      .col-lg-8.mt-5
        p Las alternativas son las diferentes opciones que existen para atender un problema o satisfacer una necesidad. Incluso, se considera que son las distintas formas que se tienen para alcanzar un objetivo determinado. Por lo tanto, el análisis de alternativas consiste en la comparación de las diferentes opciones que se tienen para solucionar el problema, utilizando criterios técnicos, ambientales, financieros o tecnológicos, entre otros.
        p A modo de ejercicio, y para afianzar la comprensión del análisis de alternativas, considere, en el siguiente cuadro, las alternativas propuestas al problema planteado y determine, para usted, cuál sería la más apropiada.
      .col-lg-4
        img(src='@/assets/curso/tema3/28.png' alt='AvatarTop')
    .titulo-sexto.color-acento-botones.mt-5
      h5 Tabla 4
      span Ejemplo de formulación de alternativas de solución de problemas
    .tabla-a.color-secundario.mb-5 
      table
        thead
          tr
            th.aaa Problema identificado
            th Alternativas de solución posibles

        tbody
          tr
            td
              p.mt-5.mb-5 Bajos rendimientos por hectárea de los cafetales pertenecientes a las familias cafeteras de la asociación El Turpial.
            ul.lista-ul.mt-5.mb-5
              li 
                i.fas.fa-angle-right.color-acento-contenido
                p Renovar el 100 % de los cafetales de las familias cafeteras de la asociación El Turpial. 

              li
                i.fas.fa-angle-right.color-acento-contenido
                p Implementar un plan de fertilización general para el 100 % de las familias cafeteras de la asociación El Turpial. 
              li 
                i.fas.fa-angle-right.color-acento-contenido
                p Desarrollar un plan de manejo agronómico de los cultivos de café con el 100 % de los miembros de la asociación El Turpial.  
    p Ahora, tenga en cuenta los siguientes tres aspectos y reconsidere o confirme su elección:
    .row.justify-content-center.mt-5

      .col-lg-6.mt-5
        .row.mt-5
        SlyderF(columnas="col-12")
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 ¿Por qué?
                p Al momento de seleccionar la alternativa, es importante señalar por qué se escoge esa y no otra de las que se tenían perfiladas en el análisis inicial, teniendo en cuenta razones técnicas, operativas, financieras o los riesgos asociados con su implementación.
              
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 Explicación
                p Elegida una de las alternativas, se procede con su explicación, que es el espacio donde se exponen los detalles relacionados con su implementación, los alcances, las razones que se tuvieron en cuenta para su elección y qué elementos presentes en el diagnóstico respaldan esta decisión.
              
          .row.justify-content-center.mb-3
            .col-lg-12
              .cajon.color-acento-contenido.p-4.mb-4
                .h5 Indicar estrategias
                p Posteriormente, se expone un resumen de la alternativa, indicando las estrategias que se tendrán en cuenta para la solución del problema o la satisfacción de las necesidades de las comunidades con la ejecución del proyecto. 
              
      .col-lg-5.as
        img(src='@/assets/curso/tema3/29.svg' alt='AvatarTop')
      .col-lg-1
    p.mt-5 De acuerdo con la APC Colombia (2016), la factibilidad de las alternativas de solución se analiza teniendo en cuenta aspectos como los que se detallan a continuación:
      .row.mt-5
        .col-lg-6
          img(src='@/assets/curso/tema3/30.svg' alt='AvatarTop')
        .col-lg-6
          .row.mb-5
            .col-md-12.mb-5.mb-md-0
              LineaTiempoD.color-primario
                p(numero="1" titulo="Viabilidad técnica") Se elige la alternativa que desde el punto de vista técnico sea la más indicada para implementar. 
                
                p(numero="2" titulo="Aceptabilidad por parte de las comunidades") Debe ser una alternativa que vaya en sintonía con los usos y costumbres de una comunidad en particular. 
                
                p(numero="3" titulo="Financiamiento requeridos frente al disponible") Es importante verificar si la disponibilidad de recursos es suficiente para cubrir la alternativa seleccionada. 
                
                p(numero="4" titulo="Capacidad institucional") Establecer si la entidad operadora está en capacidad de desarrollar la alternativa seleccionada. 
                p(numero="5" titulo="Impacto ambiental") Se recomienda implementar las actividades que generen el menor impacto ambiental posible. 
    
    separador
    #t_3_6.titulo-segundo.color-acento-contenido.mt-5
      h2  3.6   Definición de actividades
    p Una vez se han identificado los objetivos específicos del proyecto y se ha priorizado la alternativa de solución, es necesario definir las acciones que permitirán, finalmente, materializar las estrategias propuestas. Para determinar las acciones que tendrán lugar dentro del proyecto, se tomarán los objetivos específicos y se describirán las acciones necesarias para lograrlos.
    p Los responsables de la ejecución del proyecto se deben encargar de que todas las actividades propuestas en la planeación se lleven a cabo en el plano real, pues es la única forma de que se produzcan los resultados esperados, se logren los objetivos específicos y se ataquen las causas del problema central.
    p Para que el cumplimiento de los objetivos pueda verificarse, tenga en cuenta:
    .row.justify-content-center
      .col-lg-6
        .row
          .col-md-6.col-lg-6.mb-5.mb-lg-6
            .tarjeta-avatar.aa
              .tarjeta.color-secundario
                .row.justify-content-center
                  .col-lg-6
                    img(src='@/assets/curso/tema3/ico14.svg' alt='AvatarTop')
                .p-4
                  p.text-center.textcolor1.mt-5 <strong>Logros específicos</strong>

          .col-md-6.col-lg-6.mb-5.mb-lg-6
            .tarjeta-avatar.aa
              .tarjeta.color-secundario
                .row.justify-content-center
                  .col-lg-6
                    img(src='@/assets/curso/tema3/ico15.svg' alt='AvatarTop')
                .p-4
                  p.text-center.textcolor1.mt-5 <strong>Detallar actividades</strong>
        .row
          .col-md-6.col-lg-6.mb-5.mb-lg-6
            .tarjeta-avatar.aa
              .tarjeta.color-acento-botones1
                .p-4
                  h5 Logros específicos
                  p.mt-5 Es necesario traducirlos a logros específicos, lo que implica la formulación de metas y el establecimiento de una serie de actividades, en orden cronológico, que deben darse dentro de unos plazos establecidos.

          .col-md-6.col-lg-6.mb-5.mb-lg-6
            .tarjeta-avatar.aa
              .tarjeta.color-acento-botones1
                .p-4
                  h5 Detallar actividades
                  p.mt-5 Es así como se debe determinar con detalle qué actividades se llevarán a cabo para alcanzar los objetivos y las metas propuestas. 
    p Le presentamos la matriz de definición de actividades por objetivo, la cual favorece la planeación de las actividades en la operación del proyecto: 
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones.mt-5
          h5 Tabla 5
          span Matriz de definición de actividades por objetivos específicos del proyecto 
        img(src='@/assets/curso/tema3/31.svg' alt='AvatarTop')
        p.mt-4.text-small Nota. Adaptado de Secretaría Distrital de Planeación, Alcaldía Mayor de Bogotá (2018).
    .row.justify-content-center.mt-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          .h5 Utilidad de la matriz
          .row
            .col-lg-10
              ul.lista-ul.mt-4
                li.mb-0 
                  i.fas.fa-angle-right.color-acento-contenido
                  p.mb-0 Determina a qué objetivo está aportando con el desarrollo de las actividades. 

                li.mb-0 
                  i.fas.fa-angle-right.color-acento-contenido
                  p.mb-0 Define las actividades para lograr cada uno de los objetivos específicos propuestos. 
                li.mb-0 
                  i.fas.fa-angle-right.color-acento-contenido
                  p.mb-0 Establece los insumos necesarios para cumplir con las actividades señaladas. 
                li.mb-0 
                  i.fas.fa-angle-right.color-acento-contenido
                  p.mb-0 Estima los costos de los recursos necesarios para cumplir con las actividades. 
                li.mb-0 
                  i.fas.fa-angle-right.color-acento-contenido
                  p.mb-0 Establece el horizonte de tiempo para desarrollar las actividades propuestas. 
            .col-lg-2
              img(src='@/assets/curso/tema3/ico16.svg' alt='AvatarTop')
    p.mt-5 Junto con la definición de las actividades, es necesario elaborar un cronograma de actividades por medio del cual sea posible realizar, posteriormente, el seguimiento a la ejecución. El modelo de cronograma más empleado en la gestión de proyectos es el diagrama de Gantt (Unesco 2016), el cual consiste en un cuadro de doble entrada en cuya columna izquierda se anotan las actividades en secuencia temporal y a la derecha se dibujan unas barras que representan su duración, como se presenta en el siguiente ejemplo:
    .row.bg5  
      .titulo-sexto.color-acento-botones.mt-5
        h5.text-small Tabla 6
        span.text-small Ejemplo de cronograma basado en el diagrama de Gantt    
      img(src='@/assets/curso/tema3/32.svg' alt='AvatarTop')
      .row.justify-content-center.mt-5
        .col-lg-6
          p Con base en este cronograma de actividades:
          ul.lista-ul.mt-4
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Es posible llevar a cabo el seguimiento a la ejecución de las actividades.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p La representación gráfica permite contrastar las actividades ejecutadas contra las actividades planeadas.
            li.mb-0 
              i.fas.fa-angle-right.color-acento-contenido
              p Cuando se encuentren inconsistencias, se puedan tomar las medidas correctivas correspondientes. 
        .col-lg-6   
          img(src='@/assets/curso/tema3/33.png' alt='AvatarTop')
      separador   
      #t_3_7.titulo-segundo.color-acento-contenido.mt-5
        h2  3.7  Costos, presupuesto y flujo neto de caja    
      .row
        .col-lg-7
          p Uno de los pasos críticos en el proceso de formulación de un proyecto es la estimación del presupuesto y los costos de la implementación. Para lograr una matriz de costos acorde con la realidad del proyecto, es necesario que, en la fase de diagnóstico, se hayan estimado correctamente las cifras y los valores de los bienes e insumos, ya que cualquier desfase en ese tipo de informaciones puede tener consecuencias bastante negativas en el proceso de estructuración.
          .row.texto11
            .col-lg-12.texto1.p-3        
              p De acuerdo con Mondragón (2017), el presupuesto es el instrumento que determina los costos totales del proyecto y prevé los ingresos financieros para cubrirlos. El presupuesto debe indicar la cuantía de los gastos originados por los recursos necesarios para desarrollar el proyecto y las fuentes de financiación previstas.
        .col-lg-5   
          img(src='@/assets/curso/tema3/34.png' alt='AvatarTop')
      p.mt-5 Para la estimación del presupuesto de un proyecto, es necesario:
      .row.justify-content-center
        .col-lg-6
          .row
            .col-md-6.col-lg-6.mb-5.mb-lg-6
              .tarjeta-avatar.aa
                .tarjeta.color-secundario1
                  .row.justify-content-center
                    .col-lg-6
                      img(src='@/assets/curso/tema3/ico17.svg' alt='AvatarTop')
                  .p-4
                    p.text-center.textcolor1.text-center <strong>Analizar:</strong> cada una de las actividades propuestas.

            .col-md-6.col-lg-6.mb-5.mb-lg-6
              .tarjeta-avatar.aa
                .tarjeta.color-secundario1
                  .row.justify-content-center
                    .col-lg-6
                      img(src='@/assets/curso/tema3/ico18.svg' alt='AvatarTop')
                  .p-4
                    p.text-center.textcolor1.text-center <strong>Estimar:</strong> los costos en los que se debe incurrir para poder realizarlas.
      p Para el ejercicio de planificación, se puede emplear un formato diseñado para tal efecto, como el que se muestra a continuación:
      .titulo-sexto.color-acento-botones.mt-5
        h5.text-small Tabla 7
        span.text-small Ejemplo de formato de estimación de costos de un proyecto
      img(src='@/assets/curso/tema3/35.svg' alt='AvatarTop')
      .row.justify-content-center.mb-3.mt-5
        .col-lg-8
          .cajon.color-acento-contenido.p-4.mb-4
            .h5 ¡Importante!
            p Para establecer el presupuesto, es necesario identificar el número de unidades productivas, familias, personas o empresas por atender con el proyecto, para que, de esta forma, se estimen los costos para cada una de ellas y, a partir de allí, se establezcan los costos totales de la iniciativa.
      p Dentro de un proyecto, los tipos de costos que se analizan son los siguientes:    
      SlyderB.mb-5.mt-5.b.p-4(:datos="datosSlyder3")
      .tarjeta.color-acento-contenido.p-3.mb-5.mt-5
        .row.justify-content-around.align-items-center
          .col-12.col-sm-12.col-lg-12.wix.mt-4.mb-4
            img(src="@/assets/curso/tema2/ico10.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h5.mb-1.tw Flujo Neto De Caja E Indicadores De Decisión.
                p.text-small.tw Amplíe sus conocimientos y los conceptos trabajados hasta este punto.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
    separador
    #t_3_8.titulo-segundo.color-acento-contenido.mt-5
      h2  3.8   Metas, indicadores y medios de verificación
    p Las metas constituyen propósitos medibles, por medio de los cuales se alcanzan los objetivos del proyecto. Estas se pueden establecer, en cuanto a productos puntuales esperados, con la ejecución del proyecto o, igualmente, respecto a resultados con relación a su impacto en el logro de los objetivos.
    p En cuanto a la metas y su clasificación, se enuncian dos tipos de metas, con su respectiva ejemplificación:
    .row.bg7
      .row.justify-content-center.mt-5
        .col-lg-4.bg6
          p.text-white.text-center.mt-3 <strong>Meta de resultado</strong>
          p.text-white.text-center.mt-5 <strong>Meta de producto</strong>
        .col-lg-8
          p.ahs.p-3 Incrementar en un 20 % la productividad de los cafetales de las familias vinculadas al proyecto. 
          p.ahs.p-3 Entrega de 100 kits de fertilización para igual número de familias cafeteras vinculadas al proyecto. 
      p.mt-5 Por su parte, un indicador es una representación establecida mediante la relación entre dos o más variables, a partir del cual se registra, procesa y presenta información relevante, con el fin de medir el avance o retroceso en el logro de un determinado objetivo, en un periodo de tiempo determinado (APC Colombia 2020). 
      p Conozca, ahora, las características principales de un indicador:
      .row.justify-content-center.mt-5
        .col-lg-10.mt-5
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema3/41.png', alt='Texto que describa la imagen')

            .tarjeta.color-primario.p-3(x="0%" y="9%" numero="+")
              .h5.mb-2 Objetividad: 
              p Debe expresar los resultados, independientemente del juicio de quien lo utiliza.
            .tarjeta.color-primario.p-3(x="0%" y="32%" numero="+")
              .h5.mb-2 Medible objetivamente:
              p   Se debe poder medir, independientemente de la forma de pensar de quien lo hace.
            .tarjeta.color-primario.p-3(x="0%" y="57%" numero="+")
              .h5.mb-2 Relevancia:
              p  Debe reflejar una dimensión importante del logro del objetivo.
            .tarjeta.color-primario.p-3(x="0%" y="83%" numero="+")
              .h5.mb-2 Aporte marginal:
              p  Siempre debe aportar información relevante, independientemente de si existen indicadores similares.  
            .tarjeta.color-primario.p-3(x="100%" y="67%" numero="+")
              .h5.mb-2 Monitoreable:
              p  Debe poder verificarse de manera independiente.  
            .tarjeta.color-primario.p-3(x="100%" y="43%" numero="+")
              .h5.mb-2 Economía:
              p  La información necesaria para medir este indicador debe estar disponible a un costo razonable. 
            .tarjeta.color-primario.p-3(x="100%" y="18%" numero="+")
              .h5.mb-2 Pertinencia:
              p  Efectivamente mide lo que se desea medir.      
      .row.justify-content-center
        .col-lg-7
          .row.texto11
            .col-lg-12.texto1.p-2    
              P Debido a la diversidad de áreas temáticas en las cuales se pueden desarrollar proyectos y a la infinidad de tipologías de proyectos que es posible encontrar en diversos ámbitos, se ha desarrollado también una gran cantidad de indicadores y tipos de indicadores, los cuales se encargan de medir el desempeño en el desarrollo de las actividades, la capacidad de gestión, los impactos o los procesos que tienen lugar al interior de los proyectos. 
          P.mt-4 Le presentamos un listado de categorías en las que se pueden agrupar o clasificar los indicadores; analícelo con atención y procure llevar registro de los más importantes en su libreta personal de apuntes:  
        .col-lg-5
          img(src="@/assets/curso/tema3/42.png")
      .titulo-sexto.color-acento-botones.mt-5
        h5.text-small Tabla 8
        span.text-small Principales tipos de indicadores empleados en la formulación de proyectos
      .tabla-a.color-secundario.mb-5 
        table
          thead
            tr
              th.w1 Tipo de indicador
              th Descripción
              th.w2 Ejemplo

          tbody
            tr
              td De impacto
              td Contribuyen a la solución de las necesidades existentes en el área de intervención.
              td Porcentaje de variación de los ingresos de las familias cultivadoras de café vinculadas al proyecto.

            tr
              td De gestión
              td Miden el avance o retroceso en el logro de determinado objetivo. 
              td Porcentaje de beneficiarios del proyecto que recibieron asistencia técnica en sus predios. 

            tr
              td De producto
              td Miden de manera cuantitativa los bienes o servicios provistos.
              td Número de kits de fertilización entregados a las familias cultivadoras de café. 
            tr
              td De procesos
              td Mide el desarrollo de las etapas programadas dentro de las actividades del proyecto. 
              td Número de capacitaciones en planes de fertilización en café. 
            tr
              td De resultados
              td Establecen si hubo cambios respecto a la situación inicial encontrada en el diagnóstico. 
              td Incremento en la productividad por hectárea de los cultivos de café de los beneficiarios. 
        .row.justify-content-center.mt-5
          .col-lg-8
            .row
              .col-lg-6
                .cajon.color-acento-contenido.p-4.mb-4
                  .h5 ¡ATENCIÓN!
                  p Tras la definición de los indicadores, es importante establecer los medios de verificación, los cuales consisten en las fuentes de información de acceso público, donde se presenta el valor de los indicadores o, al menos, los datos necesarios para su cálculo.
              
              .col-lg-6
                .cajon.color-acento-contenido.p-4.mb-4
                  .h5 ¡IMPORTANTE!
                  p.mb-5 Estos pueden corresponder a información primaria (encuestas, entrevistas, visitas, registros contables, informes de auditoría) o a fuentes secundarias (estadísticas, estudios, informes, publicaciones, entre otras).
      p Analice el ejemplo que se presenta en el siguiente esquema:           
      .titulo-sexto.color-acento-botones.mt-5
        h5.text-small Tabla 9

        span.text-small Ejemplo de medios de verificación respecto a los indicadores propuestos
      .tabla-a.color-secundario.mb-5 
        table
          thead
            tr
              th Indicador
              th Medio de verificación

          tbody
            tr
              td Porcentaje de variación de los ingresos de las familias cultivadoras de café vinculadas al proyecto.
              td Registro de venta de café en cooperativas y establecimientos comerciales. 
            tr
              td Porcentaje de beneficiarios del proyecto que recibieron asistencia técnica en sus predios. 
              td Récord de visita a fincas de beneficiarios vinculados al proyecto. 
            tr
              td Número de kits de fertilización entregados a las familias cultivadoras de café. 
              td Actas de entrega de kits de fertilización. 
            tr
              td Número de capacitaciones en planes de fertilización en café. 
              td Listados de asistencia a capacitaciones – registro fotográfico.  
            tr
              td Productividad por hectárea de los cultivos de café de los beneficiarios. 
              td Registros de ventas de café en cooperativas y establecimientos comerciales – área cultivada en café de acuerdo con sistema de información cafetera. 
      separador
      #t_3_9.titulo-segundo.color-acento-contenido.mt-5
        h2  3.9  Supuestos    
      .row
        .col-lg-7
          p “En vista de que el trabajo de formulación se realiza de forma hipotética, es necesario establecer unos supuestos, los cuales son factores externos a la instancia responsable, cuya ocurrencia es importante para el logro de los objetivos del programa” APC Colombia (2020). Otros autores coinciden en que los supuestos son factores críticos de éxito o de riesgo, en lo relacionado con el logro de los objetivos del proyecto. En vista de esto, para cada supuesto, es necesario identificar los riesgos asociados que tengan una probabilidad razonable de ocurrencia.
          p En relación con los supuestos de riesgo o de éxito, es importante tener en cuenta los siguientes aspectos:
        .col-lg-5
          img(src="@/assets/curso/tema3/43.png")
      .row.mt-5
        .col-lg-6
          img(src='@/assets/curso/tema3/44.svg' alt='AvatarTop')
        .col-lg-6
          .row.mb-5
            .col-md-12.mb-5.mb-md-0
              LineaTiempoD.color-primario
                p(numero="1" titulo="Formulación") Los riesgos se deben formular como si no fueran a ocurrir y convertirlos de esta manera en supuestos. 
                
                p(numero="2" titulo="A nivel de actividades") A nivel de actividades, los supuestos serán los que harán posible completar los componentes según lo planeado. 
                
                p(numero="3" titulo="A nivel de componentes") A nivel de los componentes, serán los que harán posible que los componentes del programa alcancen el propósito.
                
                p(numero="4" titulo="En términos de propósito") A nivel de propósito, serán los que harán posible que el programa contribuya significativamente al logro del fin. 
                p(numero="5" titulo="Sostenibilidad de beneficios") A nivel de fin, serán los que harán posible la sostenibilidad de los beneficios generados por el programa. 
                p(numero="6" titulo="Conclusión de la formulación") Una vez definidos los supuestos, se da por concluida la etapa de formulación del proyecto.
      p.mt-5 Una vez definidos los supuestos, se da con ello por concluida la etapa de formulación del proyecto, la cual se evidencia a través de la construcción del documento de perfil del proyecto y el diligenciamiento de la matriz de marco lógico.
      p En el siguiente ejemplo, identifique cómo se agrupa la información del proyecto en una Matriz de Marco Lógico (MML):
      .titulo-sexto.color-acento-botones.mt-5
        h5.text-small Tabla 10
        span.text-small Ejemplo de diligenciamiento de la MML de un proyecto agrícola
      .tabla-a.color-secundario.mb-5 
        table
          thead
            tr
              th Objetivos
              th Indicadores
              th Medios de verificación
              th Supuestos

          tbody
            tr
              td <strong>FIN</strong> <br><br> Mejoramiento de la productividad de café pergamino seco por unidad de área.
              td Productividad por hectárea de los cultivos de café de los beneficiarios.  
              td Registros de ventas de café en cooperativas y establecimientos comerciales – área cultivada en café de acuerdo con sistema de información cafetera. 
              td Se mejora la productividad de café pergamino seco por unidad de área. 
            tr
              td <strong>PROPÓSITO</strong> <br><br> Mejorar las prácticas de fertilización de cultivos. 
              td Número de kits de fertilización entregados a las familias cultivadoras de café. 
              td Actas de entrega de kits de fertilización. 
              td Se mejoran las prácticas de fertilización de los cultivos de café. 
            tr
              td <strong>COMPONENTES</strong> <br><br> C1. Realización de análisis de suelos. 
              td Porcentaje de beneficiarios que realizan análisis de suelos. 
              td Documento de análisis de suelos. 
              td Todos los beneficiarios del proyecto realizan análisis de suelos. 
            tr
              td C2. Apoyo a la elaboración de planes de fertilización.  
              td Porcentaje de familias que reciben apoyo para elaborar planes de fertilización. 
              td Récord de visitas – planes de fertilización individual. 
              td Todos los beneficiarios del proyecto cuentan con planes de fertilización. 
            tr
              td <strong>ACTIVIDADES</strong> <br><br> A1. Toma de muestras de suelo. 
              td Número de muestras de suelo tomadas en los predios de las familias beneficiarias del proyecto. 
              td Registro de envío de muestras de suelos - documento análisis de suelos. 
              td Todos los beneficiarios del proyecto toman muestras de suelos. 
            tr
              td A2. Asistencia técnica.
              td Porcentaje de beneficiarios del proyecto que reciben asistencia técnica en sus predios. 
              td Récord de visita a fincas de beneficiarios vinculados al proyecto. 
              td Todos los beneficiarios del proyecto reciben asistencia técnica. 
    separador    
    #t_3_10.titulo-segundo.color-acento-contenido.mt-5
      h2  3.10  Implementación       
    p Tras el proceso de diseño e identificación del proyecto, viene la fase de implementación, la cual implica el momento de aplicación de todos los elementos planeados para resolver las situaciones descritas en la identificación del problema central.
    p Explore el siguiente recurso y profundice en las generalidades clave de la implementación de un proyecto:  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                                                                                                                                                                                     
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Fuentes de información',
        texto:
          'Es clave identificar qué tipo de información se requiere y cuál es la finalidad de su recolección, lo cual se realiza en un trabajo previo de planificación del proceso de diagnóstico, que permite el manejo eficiente de los recursos y, sobre todo, del tiempo. Las fuentes de información pueden ser primarias o secundarias, y su utilización depende de la disponibilidad de información y del propósito de la consulta.',
        imagen: require('@/assets/curso/tema3/11.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fuentes primarias',
        texto:
          'Son aquellas que implican trabajo de campo por parte del equipo que construye el diagnóstico, donde es necesario desplazarse hasta el territorio y utilizar herramientas que permitan recabar información de importancia. En este sentido, se pueden emplear elementos como entrevistas (estructuradas y no estructuradas), foros, diagnósticos participativos, encuestas y sondeos de opinión, entre otros, para conocer más sobre una situación particular, una organización, un territorio o una comunidad. ',
        imagen: require('@/assets/curso/tema3/12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Fuentes secundarias',
        texto:
          'Estas refieren a datos asociados a estudios previos, realizados por entidades públicas o privadas, universidades, centros de investigación y consultoría, o por organismos de seguimiento y monitoreo, entre otros. Las fuentes secundarias deben estar debidamente acreditadas, para asegurar la calidad de la información proporcionada y evitar sesgos o la utilización de datos inconsistentes que reflejen situaciones distintas a las que realmente existen en el territorio. También es importante emplear información reciente, pues muchos estudios pueden entregar información errónea o desactualizada sobre alguna situación en especial. ',
        imagen: require('@/assets/curso/tema3/13.png'),
      },
      {
        titulo: 'Instrumentos de recolección',
        texto:
          'En la actualidad, existen muchas herramientas informáticas para el acopio y procesamiento de información en campo, ahorrando tiempo de digitación y sistematización de los datos. Pero estos sistemas pueden presentar complejidad en los formularios, dificultades para el acceso a la red en algunos territorios apartados, necesidad de capacitación especializada al personal para su uso, o dificultad de ingreso con equipos electrónicos a algunos territorios con problemas de inseguridad. Sin embargo, el uso de estas herramientas es cada vez más común por sus aplicaciones prácticas.',
        imagen: require('@/assets/curso/tema3/14.png'),
      },
      {
        titulo: 'Herramientas adicionales',
        texto:
          'Además de equipos electrónicos, existen formatos de encuesta, formularios, entrevistas estructuradas y demás herramientas que resultan bastante prácticas de emplear en el territorio. Aunque ocupan mucho tiempo para su diligenciamiento y, posteriormente, para su transcripción y análisis. Alguna información se puede recopilar en forma de medios audiovisuales, los cuales resultan bastante prácticos para conocer las impresiones de las comunidades sobre alguna situación en particular y las problemáticas más comunes presentes en sus territorios. ',
        imagen: require('@/assets/curso/tema3/15.png'),
      },
      {
        titulo: 'Información cuantitativa',
        texto:
          'Es importante que la información que se recolecte sea principalmente de carácter cuantitativo, ya que esta permite evidenciar tendencias y corroborar información cualitativa sobre las situaciones que tienen lugar en el territorio. La información cuantitativa es fundamental en el proceso de formulación, debido a que los objetivos y los indicadores del proyecto requieren cifras concretas que permitan evaluar la efectividad de las acciones desarrolladas. ',
        imagen: require('@/assets/curso/tema3/16.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Errores en la construcción de objetivos generales',
        texto:
          'Errores en la construcción de objetivos generales <br> - Incluir alternativas de solución, por ejemplo: "mediante", "a través de", "por medio de". <br> - Confundir el objetivo general con algún producto que se desea entregar, por ejemplo: "construcción de beneficiaderos", "entrega de despulpadoras". <br> - Describir el objetivo como una acción parcial o desarticulada, por ejemplo: "adquirir 1.000 bultos de fertilizante". <br>- Incluir los fines o alcances del proyecto: "para mejorar la calidad de vida, para mejorar la productividad". ',
        imagen: require('@/assets/curso/tema3/26.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Errores en la construcción de objetivos específicos',
        texto:
          '- Contar con un solo objetivo específico. <br> - Describir los objetivos específicos de manera demasiado amplia. <br> - Confundir los objetivos específicos con las actividades del proyecto.<br> - Utilizar verbos operativos para describir los objetivos: adquirir, contratar.',
        imagen: require('@/assets/curso/tema3/27.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Costos de preinversión',
        texto:
          'Son los que se tienen en cuenta en el estudio de viabilidad del proyecto, en medio del cual, se establece la pertinencia, o no, de continuar con el proceso de formulación. Generalmente, estos recursos se emplean para el desarrollo de estudios de prefactibilidad y factibilidad. ',
        imagen: require('@/assets/curso/tema3/36.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costos de inversión',
        texto:
          'Son aquellos que se relacionan con la implementación del proyecto. Pueden incluir el costo de equipos, herramientas, bienes, insumos, asesoría especializada y gastos operativos, entre otros costos. ',
        imagen: require('@/assets/curso/tema3/37.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Créditos',
        texto:
          'Estos se tienen en cuenta cuando parte de la financiación de los proyectos se realiza con el apoyo de un crédito. Este, a su vez, genera costos por el pago de intereses, los cuales, igualmente, deben incluirse en la tabla de costos.  ',
        imagen: require('@/assets/curso/tema3/38.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Costos de operación',
        texto:
          'Estos se dan cuando, para el funcionamiento y sostenibilidad del proyecto, se requiere de un equipo, un servicio o un bien. Generalmente, estos gastos se dan en los primeros meses de funcionamiento del proyecto, mientras se genera sostenibilidad.  ',
        imagen: require('@/assets/curso/tema3/40.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Análisis adicionales',
        texto:
          'Además de los costos del proyecto, es necesario analizar los ingresos que se obtendrán durante su ejecución, para construir el flujo neto de caja (FNC) y así determinar su viabilidad financiera. El FNC facilita la toma de decisiones respecto a si se implementa o no la iniciativa, a partir de los indicadores establecidos.',
        imagen: require('@/assets/curso/tema3/39.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ], // variables de vue
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

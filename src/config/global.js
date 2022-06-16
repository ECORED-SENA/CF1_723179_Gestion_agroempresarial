export default {
  global: {
    componenteFormativo: 'Bases técnicas para la formulación de proyectos',
    descripcionCurso:
      'Este componente ofrece fundamentos de la teoría de proyectos, enfatizando en delimitación del problema, definición de objetivos, identificación de población objeto y desarrollo de una secuencia lógica para la presentación de proyectos susceptibles de ser financiados. El aprendiz se afianzará en gestión de proyectos, adopción de estrategias de seguimiento y análisis de alternativas de solución, para responder efectivamente a problemáticas propias del sector.',
    imagenBannerPrincipal: require('@/assets/curso/1.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Componentes de un proyecto',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ciclo de vida de los proyectos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formulación del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Diagnóstico e identificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Planteamiento del problema o necesidad',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Justificación',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Identificación de objetivos',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Análisis de alternativas',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Definición de actividades',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Costos, presupuesto y flujo neto de caja',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Metas, indicadores y medios de verificación',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Supuestos',
            hash: 't_3_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.10',
            titulo: 'Implementación',
            hash: 't_3_10',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Agencia Presidencial de Cooperación Internacional  [APC Colombia]. (2020). Herramientas para la formulación de proyectos de cooperación internacional. ',
      link:
        'https://www.apccolombia.gov.co/sites/default/files/2020-10/herramientasformulacio%CC%81nproyectos.pdf',
    },
    {
      referencia:
        'Alcaldía Mayor de Bogotá D.C. (2019). Manual de indicadores de gestión de impacto. ',
      link:
        'http://www.ipes.gov.co/images/informes/SDE/Mapa_de_Procesos/Proceso_Planeacion_Estrategica_y_Tactica/2020/Ms_017_Manual_De_Indicadores_De_Gestion_E_Impacto.pdf.pdf',
    },

    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2018). Formulación Proyectos de Inversión. ',
      link: 'http://www.sdp.gov.co/sites/default/files/tallerproyectos_mga.pdf',
    },

    {
      referencia:
        'Departamento Nacional de Planeación (2016). Documento Guía del módulo de capacitación virtual en teoría de proyectos.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Inversiones%20y%20finanzas%20pblicas/Teoria%20de%20Proyectos.pdf',
    },
    {
      referencia:
        'Departamento Administrativo de Planeación Departamental. (2020). Formulación de proyectos de inversión pública. Gobernación del Valle del Cauca. ',
      link:
        'https://www.valledelcauca.gov.co/loader.php?lServicio=Tools2&lTipo=viewpdf&id=45824',
    },
    {
      referencia:
        'Ingenio empresa. (2018). Desarrollo de un proyecto con la metodología de marco lógico en 10 pasos [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=hzIsxXPeCwU',
    },
    {
      referencia:
        'JDELCA Asesoría Empresarial. (2021). ¿Cómo calcular la viabilidad económica de una inversión? (Indicadores del proyecto) - Caso en Excel [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=HFzq3J5Oq1w',
    },
    {
      referencia:
        'Mondragón, D. (2017). Formulación y evaluación de proyectos. Fundación Universitaria del Área Andina.',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/1318/Formulaci%C3%B3n%20y%20Evaluaci%C3%B3n%20de%20Proyectos.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura [UNESCO]. (2016). Serie “Herramientas de apoyo para el trabajo docente”. Texto 2. Formulación de Proyectos. ',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000247006',
    },
    {
      referencia: 'Vásquez, R. (2015). Tasa de descuento. Economipedia. ',
      link: 'https://economipedia.com/definiciones/tasa-descuento.html',
    },
  ],
  glosario: [
    {
      termino: 'Ex ante',
      significado:
        'Proceso de evaluación que se realiza antes de la implementación del proyecto para determinar la viabilidad de la propuesta.',
    },
    {
      termino: 'Ex post',
      significado:
        'Evaluación que se realiza después de la implementación del proyecto para medir los impactos de la intervención.',
    },
    {
      termino: 'Objetivos de Desarrollo Sostenible',
      significado:
        'Consisten en una colección de 17 objetivos globales orientados a la preservación y cuidado del medioambiente, el fin de la pobreza y una prosperidad económica a nivel global.',
    },
    {
      termino: 'Producto interno bruto',
      significado:
        'Es el valor de mercado de todos los bienes y servicios finales producidos usando los factores de producción disponibles dentro de un país en un periodo determinado.',
    },
  ],
  complementario: [
    {
      tema: 'Costos, presupuesto y flujo neto de caja',
      referencia:
        'JDELCA Asesoría Empresarial. (2021). ¿Cómo calcular la viabilidad económica de una inversión? (Indicadores del proyecto) - Caso en Excel [Video]. YouTube.',
      tipo: 'Video de YouTube.',
      link: 'https://www.youtube.com/watch?v=HFzq3J5Oq1w',
    },
    {
      tema: 'Formulación del proyecto',
      referencia:
        'Ingenio Empresa. (2018). Desarrollo de un proyecto con la metodología de marco lógico en 10 pasos [Video]. YouTube. ',
      tipo: 'Video de YouTube.',
      link: 'https://www.youtube.com/watch?v=hzIsxXPeCwU',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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

var tsEntertainmentApp = angular.module('tsEntertainmentApp', []);
tsEntertainmentApp.controller('VenuesListCtrl', function($scope) {
  $scope.venues = [
        {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Abásolo Tejada, José.",
                "titulo": "Cultura del agua y seguridad hídrica.",
                "referencia": "2019. Ministerio de Agricultura y Riego, Dirección de Planificación y Desarrollo de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 21 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4221/ANA0002761.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3kwPQEO",
                "resumen_comentario": "Aborda el marco de implementación de la gestión integrada de recursos hídricos en el Perú, el valor del agua y los retos de la Autoridad Nacional del Agua (ANA) en cultura del agua.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Acosta, Alberto y Martínez, Esperanza. (Compiladores)",
                "titulo": "Agua: Un derecho humano fundamental.",
                "referencia": "2010. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 363 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/agua-acosta.pdf",
                "acortado": "https://bit.ly/3kCAZss",
                "resumen_comentario": "El reconocimiento del agua y el saneamiento básico como un derecho humano, se amplía a su establecimiento como un bien nacional estratégico de uso público, un patrimonio de la sociedad, y un componente fundamental de la naturaleza, la misma que tiene derecho propio a existir y mantener sus ciclos vitales, se contrapone a los procesos de mercantilización y privatización promovidos por el neoliberalismo en América Latina."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Aguilar, María Gracia; Calero, Diego; Cigarán, María Paz; Chambi, Carolina; Proaño, Carolina y Zevallos, Pía.",
                "titulo": "Avances en la acción climática de América Latina: Contribuciones nacionalmente determinadas al 2019.",
                "referencia": "2019. Euroclima: Serie de Estudios Temáticos Nº 13. Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH; Comisión Económica para América Latina y el Caribe (Cepal); Fundación Avina. Bruselas: Comisión Europea, EuropeAid. 178 pp.",
                "link": "https://www.cepal.org/sites/default/files/pdf_estudio_avances_agosto_2019_-_21-8v2.pdf",
                "acortado": "https://bit.ly/3mM1mhg",
                "resumen_comentario": "Busca sistematizar los enfoques metodológicos, experiencias y oportunidades que potencian la implementación de las contribuciones nacionalmente determinadas (NDC) en América Latina, proveer espacios de intercambio de experiencias entre los países de la región, así como de actividades de aprendizaje Sur-Sur, de acuerdo a las necesidades y fortalezas identificadas en los avances de las NDC.",
                "observaciones": "Incluye fichas nacionales, estudios de caso y buenas prácticas de NDC en países de América Latina y Europa."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alianza Biodiversidad.",
                "titulo": "Biodiversidad: Sustento y culturas. Desastres del sistema agroalimentario industrial.",
                "referencia": "2020. Acción por la Biodiversidad. Revista Nº 104.  52 pp.",
                "link": "http://www.biodiversidadla.org/Revista/104",
                "acortado": "https://bit.ly/2EoNxEp",
                "resumen_comentario": "Publicación periódica orientada a informar sobre la diversidad biológica y cultural, en temas como el uso y conservación de la biodiversidad, el impacto de la biotecnología, patentes y políticas públicas, así como experiencias y propuestas en América Latina, dirigida a las comunidades locales, indígenas, campesinos y pequeños productores",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Amat y León, Carlos. (Coordinador)",
                "titulo": "El cambio climático no tiene fronteras: Impacto del cambio climático en la Comunidad Andina.",
                "referencia": "2008. Lima: Secretaría General de la Comunidad Andina. 40 pp.",
                "link": "http://www.comunidadandina.org/StaticFiles/OtrosTemas/MedioAmbiente/libro_cambioclimatico.pdf",
                "acortado": "https://bit.ly/3iXdABx",
                "resumen_comentario": "Presenta las características de la región andina, su vulnerabilidad al cambio climático y sus posibles efectos económicos, con el fin de motivar una investigación más amplia acerca de los impactos del cambio climático sobre sectores económicos y ecosistemas sensibles, que permita trabajar en escenarios de cambio climático y obtener información para la toma de decisiones de política y planificación del territorio en la región."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Avanzini Pinto, Guillermo y Salcedo Janampa, Soraya.",
                "titulo": "Reporte: Prueba piloto de indicadores de los principios de gobernanza del agua de la OCDE. Escala nacional: Perú. Escala regional: Autoridad Administrativa del Agua (AAA).",
                "referencia": "2019. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 168 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/3451",
                "acortado": "https://bit.ly/3kEVXHg",
                "resumen_comentario": "Es un importante insumo para la planificación y gestión de los recursos hídricos a nivel nacional y de las Autoridades Administrativas del Agua. Participaron en la prueba piloto 261 organizaciones públicas, privadas y de la sociedad civil, quienes expresaron su percepción sobre el estado del sistema de gobernanza del agua a través del Marco de políticas, Marco institucional y Marco de instrumentos.",
                "observaciones": "Presentado en el 8° Foro Mundial del Agua en Brasilia, en marzo de 2018."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Certificado azul: Promoviendo empresas hídricamente responsables.",
                "referencia": "2020. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 22 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4527",
                "acortado": "https://bit.ly/3ck33Or",
                "resumen_comentario": "Expone el reconocimiento a las buenas prácticas de uso eficiente del agua, denominado Certificado Azul, sus principios, procedimiento de certificación, beneficios, logros e indicadores.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Cómo aprovechamos mejor nuestra agua.",
                "referencia": "2017. Ministerio de Agricultura y Riego, Dirección de Estudios de Proyectos Hidráulicos Multisectoriales. Lima: Autoridad Nacional del Agua (ANA). 14 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/2639/ANA0001349.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3cqzFpB",
                "resumen_comentario": "Presenta de forma sencilla y amigable los conceptos de cuenca e infraestructura hidráulica, así como los problemas que se presentan, las soluciones técnicas y las entidades encargadas de la protección y gestión del agua.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Compendio nacional de estadísticas de recursos hídricos 2018.",
                "referencia": "2018. Ministerio de Agricultura y Riego. Sistema Nacional de Información de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 122 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/3257",
                "acortado": "https://bit.ly/3607TPM",
                "resumen_comentario": "Información sobre temáticas para la gestión de recursos hídricos como la oferta de agua superficial, volúmenes de embalses, agua subterránea, derechos de uso de agua, volúmenes de uso de agua utilizado, autorizaciones de vertimientos y reúso de agua residual tratada, y retribución económica del agua.",
                "observaciones": "Datos de 2017."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Compendio nacional de estadísticas de recursos hídricos 2019.",
                "referencia": "2019. Ministerio de Agricultura y Riego. Sistema Nacional de Información de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 270 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4231",
                "acortado": "https://bit.ly/3mInl94",
                "resumen_comentario": "Información sobre temáticas para la gestión de recursos hídricos como la oferta de agua superficial, volúmenes de embalses, agua subterránea, derechos de uso de agua, volúmenes de uso de agua utilizado, autorizaciones de vertimientos y reúso de agua residual tratada, identificación de puntos críticos y retribución económica del agua.",
                "observaciones": "Datos de 2018."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Guía del promotor de cultura del agua.",
                "referencia": "2018. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 52 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/2540",
                "acortado": "https://bit.ly/2RLUKRW",
                "resumen_comentario": "Brinda instrumentos y herramientas que faciliten los procesos de aprendizaje en la promoción de la cultura del agua, contribuyendo a un trabajo interinstitucional sinérgico a favor del desarrollo sostenible regional y nacional.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Guía para realizar inventarios de fuentes de agua subterránea.",
                "referencia": "2020. Ministerio de Agricultura y Riego, Dirección de Calidad y Evaluación de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 76 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4495",
                "acortado": "https://bit.ly/3cmquq7",
                "resumen_comentario": "Documento técnico que estandariza los criterios y procedimientos para la ejecución del inventario de fuentes de agua subterránea. Incluye actividades preliminares, trabajo de campo y de gabinete, e informe final, así como las instrucciones para un registro de los datos en la ficha de campo.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Instrumentos de gestión vinculados a la calidad de los recursos hídricos.",
                "referencia": "2016. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 6 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/2626/ANA0001336.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/32QghiF",
                "resumen_comentario": "La autoridad en materia de recursos hídricos presenta un resumen de los marcos normativos, políticas, estrategias, ámbitos de acción, líneas de trabajo, organismos, funciones y normas técnicas para la protección y gestión de estos recursos.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "La mejor calidad para todos,",
                "referencia": "2017. Ministerio de Agricultura y Riego, Dirección de Gestión de Calidad de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 14 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/2640/ANA0001350.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/2RR9wXM",
                "resumen_comentario": "Presenta de forma amigable y sencilla el ciclo del agua, los conceptos de contaminación y calidad de los recursos hídricos, así como los estándares de calidad, los actores involucrados y los monitoreos participativos.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Lineamientos para la elaboración de los diagnósticos de la calidad de los recursos hídricos superficiales.",
                "referencia": "2020. Ministerio de Agricultura y Riego, Dirección de Calidad y Evaluación de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 36 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4515",
                "acortado": "https://bit.ly/35XllUo",
                "resumen_comentario": "Establece los lineamientos para la formulación de los diagnósticos de calidad de los recursos hídricos superficiales por unidad hidrográfica, como base para promover la sostenibilidad y conservación de las fuentes naturales de agua y sus bienes asociados."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Plan Estratégico Institucional 2019 – 2024.",
                "referencia": "2019. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 54 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4200",
                "acortado": "https://bit.ly/2RLwDTw",
                "resumen_comentario": "Los objetivos del ente rector del Sistema Nacional de Gestión de los Recursos Hídricos del país, y los mandatos asumidos desde su creación, en el marco de los Objetivos de Desarrollo Sostenible (ODS), las prioridades de gobierno, la modernización del Estado y el cumplimiento de las políticas nacionales pertinentes."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Una buena ley, una buena vida.",
                "referencia": "2017. Ministerio de Agricultura y Riego, Dirección de Administración de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 14 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/2644/ANA0001351.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3cpZhmK",
                "resumen_comentario": "Presenta de forma sencilla y amigable la normativa, los derechos, los actores involucrados, las buenas prácticas y las entidades encargadas de la protección y gestión de los recursos hídricos, como las Administraciones Locales de Agua (ALA), las Autoridades Administrativas del Agua (AAA) y la Dirección de Administración de Recursos Hídricos.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autoridad Nacional del Agua (ANA).",
                "titulo": "Yaku noticias.",
                "referencia": "2020. Boletín N° 5. Lima: Autoridad Nacional del Agua (ANA). 24 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4550",
                "acortado": "https://bit.ly/35ZQF56",
                "resumen_comentario": "Contiene información sobre las actividades del Ministerio de Agricultura y Riego y la Autoridad Nacional del Agua, así como artículos de interés sobre temas del agua.",
                "observaciones": "Boletín."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Banco Interamericano de Desarrollo (BID) y Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "La economía del cambio climático en el Perú.",
                "referencia": "2014. Banco Interamericano de Desarrollo (BID); Comisión Económica para América Latina y el Caribe (Cepal). Lima: Ministerio del Ambiente y Ministerio de Economía y Finanzas. 152 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/37419/1/S1420992_es.pdf",
                "acortado": "https://bit.ly/2ZY6wgH",
                "resumen_comentario": "Permite entender las dinámicas socioeconómicas y ambientales, identificando cómo el cambio climático afectará el bienestar y la producción, a partir del impacto en algunos sectores de la actividad económica, usando modelos climáticos que permiten describir la evolución del clima sobre la base de posibles escenarios. El cambio climático afectaría más a la pesca, agricultura, hidroenergía, ganadería altoandina, minería, turismo, salud e la infraestructura."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Beekman, Gertjan; Cruz Majluf, Salvador; Espinoza, Nelson; García Benevente, Eleno; Herrera Toledo, César; Medina Hidalgo, Daniela; Williams, David y García-Winder, Miguel.",
                "titulo": "Agua, alimento para la tierra.",
                "referencia": "2014. San José: Instituto Interamericano de Cooperación para la Agricultura (IICA). 135 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/agua_alimento_para_la_tierra.pdf",
                "acortado": "https://bit.ly/301bskJ",
                "resumen_comentario": "Dada la dependencia que la agricultura tiene del agua, se requiere encontrar nuevos paradigmas para revitalizar la actividad agrícola en un escenario de menor disponibilidad de agua, mayor competencia por este líquido y mayor conciencia sobre la necesidad de proteger ese recurso. Se identifica áreas de oportunidad para construir una agenda focalizada en mejorar el uso del agua en la agricultura mediante un manejo integral de los recursos hídricos, asegurando el abasto de alimentos, impulsando el desarrollo incluyente y contribuyendo a la sustentabilidad de los recursos naturales en los países del hemisferio."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bioversity International.",
                "titulo": "La incorporación de la biodiversidad agrícola en sistemas alimentarios sostenibles: Fundamentos científicos para un Índice de agrobiodiversidad.",
                "referencia": "2016. Bioversity International. Maccarese: Agrobiodiversity Index. 32 pp.",
                "link": "https://www.bioversityinternational.org/fileadmin/user_upload/online_library/Mainstreaming_Agrobiodiversity/Summary_Mainstreaming_Agrobiodiversity_Spanish.pdf",
                "acortado": "https://bit.ly/2ZXvyfI",
                "resumen_comentario": "Muestra un avance en el proceso de creación de un índice capaz de medir las dimensiones de la biodiversidad agrícola. Esto permitirá a los países tomar decisiones políticas y a las empresas realizar buenas prácticas para fomentar la diversidad hacia sistemas alimentarios sostenibles, así como la capacidad gestionar los progresos hacia objetivos a escala mundial, como los Objetivos de Desarrollo Sostenible y las Metas de Aichi para la Diversidad Biológica.",
                "observaciones": "Resumen de la publicación del mismo nombre."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Burneo, Zulema.",
                "titulo": "El proceso de concentración de la tierra en el Perú: Presiones comerciales sobre la tierra..",
                "referencia": "2011. Coalición Internacional para el Acceso a la Tierra (ILC); Cirad. Lima: Centro Peruano de Estudios Sociales (Cepes). 80 pp.",
                "link": "http://biblioteca.clacso.edu.ar/Peru/cepes/20170323043255/pdf_591.pdf",
                "acortado": "https://bit.ly/33PHJfN",
                "resumen_comentario": "Describe la estructura de tenencia y propiedad de la tierra que el Estado construye para adecuarla al modelo liberal, adjudicando áreas ganadas por irrigación a grandes dueños por sobre los pequeños propietarios y comunidades. Señala la contradicción entre el interés extractivo del capital privado y los requerimientos nacionales de seguridad alimentaria, así como sus efectos sociales y políticos, conflictos por el agua, y la desigualdad social que genera la nueva concentración de la propiedad de la tierra dedicada a la producción agroindustrial exportadora."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Caballero, José_María.",
                "titulo": "Agricultura, reforma agraria y pobreza campesina.",
                "referencia": "1980. Centro Internacional de Investigación para el Desarrollo (CIID-IDRC), Canadá. Lima: Instituto de Estudios Peruanos (IEP). 80 pp.",
                "link": "https://repositorio.iep.org.pe/bitstream/IEP/574/2/coleccionminima6.pdf",
                "acortado": "https://bit.ly/2S2mD8F",
                "resumen_comentario": "Explora ‒como parte del debate de la cuestión agraria‒ el declive del sector agrario y su posición y comportamiento en el proceso peruano de industrialización; las características y consecuencias de la reforma agraria llevada a cabo por el régimen militar a partir de 1969; y la situación del campesinado pobre andino, las causas de su miseria, sus perspectivas."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cancino, Ignacio.",
                "titulo": "La agroexportación y el acceso al agua para consumo humano en Ica.",
                "referencia": "2013. Centro Peruano de Estudios Sociales (Cepes). Lima: Red Peruana por una Globalización con Equidad (RedGE). 36 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/estudio_agroexportacion_acceso%20al%20agua_cancino_0.pdf",
                "acortado": "https://bit.ly/2EmCA66",
                "resumen_comentario": "Muestra la conexión directa entre la economía agroexportadora del valle de Ica, principalmente la producción de espárragos, y las condiciones de vida de la población rural, sobre todo en el acceso al agua para consumo humano. La disminución alarmante del agua subterránea hace difícil para los pobladores acceder al agua de subsuelo, principal fuente de agua potable, pues su extracción compite en desventaja con la que realiza la gran producción agroexportadora."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Internacional de la Papa (CIP).",
                "titulo": "Conservación y uso sostenible de la biodiversidad agrícola: Libro de consulta.",
                "referencia": "2004. Vol. I. Laguna: Centro Internacional de la Papa (CIP); Perspectivas de los Usuarios con la Investigación y el Desarrollo Agrícola (Upward). 305 pp.",
                "link": "https://idl-bnc-idrc.dspacedirect.org/bitstream/handle/10625/35113/119605_v1.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3iUPfMD",
                "resumen_comentario": "Los agricultores, apacentadores de ganado y pescadores, especialmente aquellos que practican sistemas diversificados, son los principales administradores de la biodiversidad agrícola, base de Ia seguridad alimentaria global. Tales recursos son reconocidos por los servicios ambientales que brindan a las comunidades locales, que juegan un rol esencial en documentar su conocimiento, mantener los inventarios de biodiversidad y conservar los cultivos usando los bancos genéticos comunales."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "La información geoespacial en el planeamiento estratégico: Análisis territorial de los servicios básicos.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 52 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2019/01/INFORMACI%C3%93N-GEOESPACIAL-CEPLAN.pdf",
                "acortado": "https://bit.ly/33NEXYo",
                "resumen_comentario": "El territorio contribuye a explicar las principales dinámicas existentes, aportando información para proponer formas de intervenir; la información geoespacial, es decir, la que tiene un atributo espacial y una ubicación en el territorio, es vital para tomar decisiones apropiadas en los campos ambiental, económico y social, como la gestión del riesgo de desastres, el mapeo de deforestación, la expansión urbana, los catastros de actividades productivas, entre otros."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Perú: Informe Anual 2018 para el Desarrollo Sostenible.",
                "referencia": "2018. Cooperación Alemana (GIZ). Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 160 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/dlm_uploads/2019/01/Informe-Anual-CEPLAN_16042019.pdf",
                "acortado": "https://bit.ly/2RQeDHC",
                "resumen_comentario": "Recorre la realidad peruana e internacional describiendo el contexto en el que se construye una visión concertada de país al 2030 y lo que dará continuidad a las políticas de Estado más allá del 2021, mostrando que, a pesar de los avances, el déficit se mantiene en casi todos los campos de acción pública y privada, así como las condiciones para el desarrollo integral en todo el territorio."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Perú: Informe Nacional Voluntario sobre la implementación de la Agenda 2030 para el Desarrollo Sostenible.",
                "referencia": "2017. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 68 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2017/07/INVPeru-04-07-2017-para-web.pdf",
                "acortado": "https://bit.ly/3mG8awZ",
                "resumen_comentario": "Forma parte de los procesos de seguimiento y evaluación de la Agenda 2030 para el Desarrollo Sostenible, en el contexto del Plan Estratégico de Desarrollo Nacional (PEDN), iniciado con la visión de futuro del Perú. Describe cómo se está construyendo las políticas y el entorno para la implementación de la Agenda 2030, y cuáles son los siguientes pasos.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Vulnerabilidad de las personas en el territorio: más allá del ingreso.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 76 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2019/09/CEPLAN-Vulnerabilidad-de-las-personas-en-el-territorio.pdf",
                "acortado": "https://bit.ly/2EnauHV",
                "resumen_comentario": "Identifica la vulnerabilidad de las personas en el territorio para los distintos sectores y niveles de gobierno; el índice de vulnerabilidad es una herramienta relevante para focalizar políticas públicas hacia la población vulnerable. Además, muestra una visión del bienestar de la población más allá del nivel de gasto de los hogares, y se enfoca en las carencias que impiden generar oportunidades para salir del rezago en ciertos segmentos de la población."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Peruano de Estudios Sociales (Cepes) e Instituto del Bien Común (IBC).",
                "titulo": "Huancavelica: El territorio de las comunidades campesinas de la mancomunidad Amuzceh.",
                "referencia": "2018. Huancavelica: Centro Peruano de Estudios Sociales (Cepes). 20 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/06/cartilla-siccam-web.pdf",
                "acortado": "https://bit.ly/32T4rED",
                "resumen_comentario": "El conocimiento del territorio mediante un registro actualizado, identificación del patrimonio local, información armonizada y un catastro comunal, favorece la titulación, la seguridad jurídica y el manejo de los conflictos en las comunidades, contribuyendo al desarrollo territorial local.",
                "observaciones": "Cartilla. Incluye mapas georreferenciados de comunidades campesinas."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cerdán Moreno, Carlos Alberto.",
                "titulo": "Determinación de la afectación a la disponibilidad de agua en torno a la mina Yanacocha, Cajamarca, con la aplicación de software libre e información secundaria.",
                "referencia": "2015. Ponencia en el XI Congreso Nacional de Geografía. 21 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Cerd%C3%A1n_C-Afectaci%C3%B3n_disponibilidad_Agua_Yanacocha_FINAL.pdf",
                "acortado": "https://bit.ly/2FUaTSV",
                "resumen_comentario": "Debido a reclamos a la empresa por parte de poblaciones aledañas a la mina Yanacocha, entre ellos, por afectación a la disponibilidad de agua debido a la disminución del caudal de manantiales y canales de riego, e incluso el secado de los mismos, se realizó un balance hídrico en la zona. El análisis de la precipitación en la zona de la mina, los caudales de consumo y de vertimiento de la mina, y la información de EIAs y otros, determinaron que existía tal afectación.",
                "observaciones": "Ponencia."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chargoy, Juan Pablo.",
                "titulo": "Huella de agua: Los impactos al agua que no se ven.",
                "referencia": "2020. Centro de Análisis de Ciclo de Vida y Diseño Sustentable (Cadis). Lima: Autoridad Nacional del Agua (ANA). 35 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4526/ANA0003026.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3clCf09",
                "resumen_comentario": "Explica el concepto de huella de agua de acuerdo a la Organización Internacional de Normalización (ISO), así como el desarrollo de capacidades en el tema en el sector industrial de México.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Coalición flamenca para la Cooperación Norte-Sur, Bogdan Vanden Berghe.",
                "titulo": "Desarrollando una política ambiental y un plan de acción ambiental.",
                "referencia": "2019. 40 pp.",
                "link": "http://www.coeeci.org.pe/wp-content/uploads/2019/05/manual-politica-ambiental.pdf",
                "acortado": "https://bit.ly/35WQ1VI",
                "resumen_comentario": "Busca contribuir a la reducción del impacto ambiental que genera la actividad humana, a través de una política y plan de acción ambiental, para lo que se requiere compromiso de la organización y definición de roles y responsabilidades, que serán importantes para todo el proceso.",
                "observaciones": "Manual para organizaciones interesadas en reducir su huella ambiental."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Collette, Linda; Jiménez, Juan y Azzu, Nadine.",
                "titulo": "La importancia de la biodiversidad agrícola para la seguridad alimentaria, la nutrición y la calidad de vida en América Central.",
                "referencia": "2007. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 26 pp.",
                "link": "http://ribuni.uni.edu.ni/48/9/importa_biodiversidad.pdf",
                "acortado": "https://bit.ly/3mLk5Kb",
                "resumen_comentario": "La biodiversidad es fundamental para la producción agrícola y la seguridad alimentaria, a pesar de la erosión producida en la variabilidad de los organismos debido al impacto negativo del patrón de crecimiento agrícola. La conservación de la biodiversidad debe ser integrada con las prácticas agrícolas, de manera sostenible, para asegurar la producción de alimentos, la calidad de vida y la salud de los ecosistemas.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión de Recursos Genéticos para la Alimentación y la Agricultura.",
                "titulo": "El estado de la biodiversidad para la alimentación y la agricultura en el mundo.",
                "referencia": "2019. Comisión de Recursos Genéticos para la Alimentación y la Agricultura de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Roma: FAO. 16 pp.",
                "link": "http://www.fao.org/3/CA3229ES/ca3229es.pdf",
                "acortado": "https://bit.ly/3iWl5IV",
                "resumen_comentario": "Describe la situación de la utilización sostenible y la conservación de la diversidad de plantas, animales y microorganismos a nivel genético, de especies y ecosistemas, presentes en los sistemas de producción agrícola, ganadera, forestal y acuática, y promueve la elaboración de políticas, instituciones y capacidades de apoyo sensibles a las necesidades y desafíos de la gestión futura de la biodiversidad para la alimentación y la agricultura.",
                "observaciones": "Resumen."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Episcopal de Acción social (Ceas)",
                "titulo": "Cambio climático.",
                "referencia": "2011. Lima: Comisión Episcopal de Acción Social (Ceas). 6 pp. ",
                "link": "https://ceas.org.pe/publicaciones/0000000_TRIPTICO%20CAMBIO%20CLIMATICO.pdf",
                "acortado": "https://bit.ly/2HryF9z",
                "resumen_comentario": "Informa y llama la atención sobre el cambio climático en el Perú y cuánto afecta a la biodiversidad en el territorio. ",
                "observaciones": "Tríptico."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Multisectorial para la Pacificación y Desarrollo Económico Social de la Zona del Huallaga (Codehuallaga).",
                "titulo": "Plan de Desarrollo Territorial para la Zona del Huallaga al 2021.",
                "referencia": "2015. Comisión Multisectorial para la Pacificación y Desarrollo Económico Social de la Zona del Huallaga (Codehuallaga). Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 168 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2016/08/Ceplan-PLAN-HUALLAGA-25-08-2016.pdf",
                "acortado": "https://bit.ly/2Hh6byY",
                "resumen_comentario": "La zona del Huallaga, a pesar del narcotráfico y el terrorismo, posee múltiples potencialidades, recursos naturales como sus bosques y gran biodiversidad, abundancia de agua que asegura la siembra de cultivos de exportación, paisajes y experiencias culturales que posibilitan múltiples tipos de turismo. El Plan ha plasmado un conjunto de estrategias articuladas con el Plan Estratégico de Desarrollo Nacional y desarrolladas con un enfoque metodológico prospectivo, con participación de la ciudadanía, apoyo de autoridades políticas y la opinión de actores clave de la zona en el proceso de elaboración de escenarios futuros."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Nacional de Diversidad Biológica (Conadib).",
                "titulo": "Estrategia Nacional de Diversidad Biológica al 2021 y Plan de Acción 2014-2018 (EPANDB).",
                "referencia": "2014. Comisión Nacional de Diversidad Biológica (Conadib); Punto Focal del Convenio sobre la Diversidad Biológica (CDB). Lima: Ministerio del Ambiente (Minam). 114 pp.",
                "link": "https://sinia.minam.gob.pe/documentos/estrategia-nacional-diversidad-biologica-2021-plan-accion-2014-2018",
                "acortado": "https://bit.ly/3hOa5vS",
                "resumen_comentario": "La conservación de la biodiversidad en Perú está amenazada por la minería ilegal, la deforestación, los cultivos ilícitos, el comercio ilegal de especies y los efectos del cambio climático. Ante la oportunidad de una mejor valoración de los servicios ecosistémicos, los negocios con la biodiversidad nativa bajo criterios de sostenibilidad, el manejo forestal comunitario y el financiamiento de iniciativas de conservación de los bosques y la biodiversidad, la Estrategia busca detener el deterioro de la diversidad biológica, mejorar su gestión e incrementar el uso sostenible y la distribución justa y equitativa de sus beneficios.",
                "observaciones": "Decreto Supremo Nº 009-2014- Minam. 5 de noviembre de 2014."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comunidad Andina (CAN).",
                "titulo": "Gestión ambiental en los países de la Comunidad Andina. ",
                "referencia": "2012. En: Revista de la Integración N° 9. Lima: Secretaría General de la Comunidad Andina. 77 pp.",
                "link": "http://www.comunidadandina.org/StaticFiles/OtrosTemas/MedioAmbiente/revista9.pdf",
                "acortado": "https://bit.ly/2EoPv7L",
                "resumen_comentario": "Examina las políticas, estrategias y planes nacionales de gestión ambiental de los países de la Comunidad Andina, así como las experiencias y proyectos relacionados, así como normativa y estudios regionales sobre cambio climático, biodiversidad, recursos genéticos y gestión del riesgo de desastres.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comunidad Andina (CAN).",
                "titulo": "Geo Andino 2003: Perspectivas del medio ambiente.",
                "referencia": "2003. Programa de las Naciones Unidas para el Medio Ambiente (Pnuma); Universidad del Pacífico, Centro de Investigación. Lima: Secretaría General de la Comunidad Andina. 194 pp.",
                "link": "http://www.comunidadandina.org/StaticFiles/OtrosTemas/MedioAmbiente/libro_GEO_Andino1.pdf",
                "acortado": "https://bit.ly/3j67Ghm",
                "resumen_comentario": "Describe las características geográficas, económicas, sociales y ambientales de los países andinos, su marco institucional y normativo, así como el estado del suelo, agua dulce, áreas costeras y marinas, bosques, montañas y áreas urbanas. Analiza la vulnerabilidad frente al cambio climático, la gobernabilidad y las perspectivas de una agenda ambiental común.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley de Mecanismos de Retribución por Servicios Ecosistémicos.",
                "referencia": "2014. Congreso de la República. 3 pp.",
                "link": "http://extwprlegs1.fao.org/docs/pdf/per135640.pdf",
                "acortado": "https://bit.ly/3iUD0zP",
                "resumen_comentario": "Norma que promueve, regula y supervisa los mecanismos de retribución por servicios ecosistémicos, que se derivan de acuerdos voluntarios que establecen acciones de conservación, recuperación y uso sostenible para asegurar la permanencia de los ecosistemas.",
                "observaciones": "Ley N° 30215. 11 de junio de 2014."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley Forestal y de Fauna Silvestre.",
                "referencia": "2011. Congreso de la República. 25 pp.",
                "link": "http://www.leyes.congreso.gob.pe/Documentos/Leyes/29763.pdf",
                "acortado": "https://bit.ly/35UJlYp",
                "resumen_comentario": "Norma que asigna derechos sobre el bosque, da pautas para el ordenamiento y la zonificación forestal y desarrolla la institucionalidad del sector, permitiendo un mejor manejo de los recursos para la fiscalización y sanción de los actores involucrados, entre otros.",
                "observaciones": "Ley N° 29763. 21 de julio de 2011."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley N° 29338: Ley de los recursos hídricos. 2009.",
                "referencia": "2019. Autoridad Nacional del Agua (ANA), Ministerio de Agricultura y Riego. 146 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/228/ANA0000044.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/32Qbpu2",
                "resumen_comentario": "Ley que regula el uso y la gestión integrada de los recursos hídricos y comprende el agua superficial, subterránea, continental y los bienes asociados a ésta, y se extiende al agua marítima y atmosférica en lo que resulte aplicable, así como la actuación del Estado y los particulares.",
                "observaciones": "También contiene el reglamento de la Ley."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley que modifica la Ley N° 29338, Ley de los recursos hídricos, mediante el establecimiento de los criterios técnicos para la identificación y delimitación de las cabeceras de cuenca.",
                "referencia": "2017. Ministerio del Ambiente.",
                "link": "http://www.minam.gob.pe/wp-content/uploads/2017/08/LEY-30640-modifica-Ley-de-Recursos-H%C3%ADdricos.pdf",
                "acortado": "https://bit.ly/3mKQaS3",
                "resumen_comentario": "Ley que regula la conservación y protección de las cabeceras de cuenca, incorporando en el artículo 75 de la Ley 29338, Ley de Recursos Hídricos, los criterios técnicos para la identificación y delimitación de las cabeceras de cuenca, a fin de evaluar la implementación de medidas especiales para su protección y conservación según su vulnerabilidad."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cottyn, Hanne; Jahncke, Javier; Montoya, Luis; Pérez, Ela y Tempelmann, Mattes. (Editores)",
                "titulo": "Las luchas sociales por la tierra en América Latina: Un análisis histórico, comparativo y global.",
                "referencia": "2016. Universidad Nacional Mayor de San Marcos (UNMSM), Facultad de Ciencias Sociales; Ghent Centre for Global Studies, Ghent University; Muqui, Red de Propuestas y Acción. Lima: Fondo Editorial de la UNMSM.  216 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Las-luchas-sociales-por-la-tierra.pdf",
                "acortado": "https://bit.ly/33PX5kj",
                "resumen_comentario": "En la historia, la lucha por la tierra ha sido un factor importante en la forja de la sociedad latinoamericana, formando movimientos sociales dinámicos. Se propone unir perspectivas tanto históricas como contemporáneas a través de agendas compartidas, constituyendo un marco de análisis y acción para conocer más profundamente las trayectorias y estructuras extractivistas, y apoyar la construcción de alternativas populares detrás de las luchas por la tierra en un mundo globalizado.",
                "observaciones": "Trabajos presentados en la conferencia internacional “Las luchas sociales por la tierra en América Latina: Un análisis histórico, comparativo y global”. Lima, 2015."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Del Castillo, Laureano.",
                "titulo": "Agua y coronavirus.",
                "referencia": "2020. En: La revista agraria N° 189. Año 21. Lima: Centro Peruano de Estudios Sociales (Cepes). Pp. 16-19.",
                "link": "https://larevistagraria.files.wordpress.com/2020/05/lra-189-web-compressed.pdf",
                "acortado": "https://bit.ly/301I4uC",
                "resumen_comentario": "La disponibilidad de agua para la producción de alimentos y la relación entre el acceso al agua y la mortalidad infantil, entre otros, preocupa aún más en esta pandemia, lo cual más grave en el área rural, donde se prioriza la agricultura moderna de exportación por sobre la agricultura familiar.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Derecho, Ambiente y Recursos Naturales (Dar).",
                "titulo": "Gobernanza y transparencia en fondos climáticos.",
                "referencia": "2018. Lima: Derecho, Ambiente y Recursos Naturales (Dar). 36 pp.",
                "link": "http://www.dar.org.pe/wp-content/uploads/2018/02/Transparencia-en-fondos-climaticos-7-feb-B-1.pdf",
                "acortado": "https://bit.ly/3iTF3nz",
                "resumen_comentario": "Para cumplir con los compromisos del gobierno ante la CMNUCC, se requiere que los fondos para la lucha contra el cambio climático estén en el marco de gobernanza y transparencia con el fin de promover un desarrollo sostenible. Por ello, es primordial que se promuevan los mecanismos de movilización de recursos aplicados al diseño de fondos climáticos, como el Programa de Inversión Forestal (FIP, por sus siglas en inglés)."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Díaz Palacios, Julio; Arana Cardó, Martín; Torres Guevara, Juan y Patrucco Núñez-Carvallo, Sandro.",
                "titulo": "Historia ambiental del Perú: Siglos XVIII y XIX.",
                "referencia": "2016. Ministerio del Ambiente; Universidad Nacional Agraria La Molina; Pontificia Universidad Católica del Perú. Lima: Ministerio del Ambiente. 466 pp.",
                "link": "https://sinia.minam.gob.pe/documentos/historia-ambiental-peru-siglos-xviii-xix",
                "acortado": "https://bit.ly/32QlRl4",
                "resumen_comentario": "Abarca el pensamiento ilustrado y las expediciones científicas; el descubrimiento y estudio del territorio, el clima y los fenómenos naturales; el aprovechamiento de los recursos naturales y sus impactos en el ambiente; la problemática ambiental urbana; las relaciones entre la alimentación y la diversidad biológica; las políticas, organización y gestión del ambiente; y las manifestaciones culturales."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Durán Romero, Gemma y Sánchez Díez, Ángeles.",
                "titulo": "Cambio climático y derecho a la alimentación.",
                "referencia": "2012. Prosalus, Salud y Desarrollo; Cáritas Española; Ayuda en Acción; Ongawa; Acción contra el Hambre. 92 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Cambio%20clim%C3%A1tico%20y%20derecho%20a%20la%20alimentaci%C3%B3n.pdf",
                "acortado": "https://bit.ly/3kJtIXF",
                "resumen_comentario": "Presenta una síntesis de las relaciones entre cambio climático, seguridad alimentaria y derecho a la alimentación, así como la necesidad de atacar las diferentes causas que provocan la crisis alimentaria y dar respuestas tanto adaptativas como mitigadoras frente al cambio climático."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren, Fernando.",
                "titulo": "Agro y coronavirus.",
                "referencia": "2020. En: La revista agraria N° 189. Año 21. Lima: Centro Peruano de Estudios Sociales (Cepes). Pp. 4-9.",
                "link": "https://larevistagraria.files.wordpress.com/2020/05/lra-189-web-compressed.pdf",
                "acortado": "https://bit.ly/301I4uC",
                "resumen_comentario": "Los sucesivos gobiernos han ignorado la agricultura familiar, sabiendo que su producción alimenticia abastece a los mercados, y ahora, durante la pandemia, no se están dando medidas adecuadas para la actividad agraria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren, Fernando; Baumeister, Eduardo y Merlet, Michel.",
                "titulo": "Informe continental: El acceso a la tierra en América Latina.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO); Asociación para contribuir a mejorar la Gobernanza de la Tierra, del Agua y de los Recursos naturales (Agter). Lima: Centro Peruano de Estudios Sociales (Cepes). 50 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/informe-continental.pdf",
                "acortado": "https://bit.ly/3cnIEYF",
                "resumen_comentario": "Ofrece una visión de la evolución del acceso a la tierra y los recursos naturales en América Latina, dando elementos cuantitativos y cualitativos para apreciar esta transformación respecto a los pequeños productores, y la evolución del peso relativo de la producción empresarial que utiliza mano de obra asalariada frente a la producción campesina familiar.",
                "observaciones": "Documento preparado en el marco del Foro mundial sobre el acceso a la tierra (FMAT) 2016."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Escobal, Javier y Armas, Carmen.",
                "titulo": "Estructura agraria y dinámica de pobreza rural en el Perú.",
                "referencia": "2015. Documento de investigación Nº 79. Centro Internacional de Investigaciones para el Desarrollo (CIID-IDRC), Canadá. Lima: Grupo de Análisis para el Desarrollo (Grade). 72 pp.",
                "link": "https://www.grade.org.pe/wp-content/uploads/ddt79.pdf",
                "acortado": "https://bit.ly/33TbWKL",
                "resumen_comentario": "Explora los cambios en la estructura agraria, como el tamaño promedio de la propiedad, su concentración y fragmentación, el uso de la tierra, y su relación con la pobreza rural. Las unidades agropecuarias que tenían una mayor cantidad de tierra agrícola —en equivalente de riego— y una estructura de propiedad menos fragmentada muestra reducciones importantes en las tasas de pobreza rural."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fernández, Ernesto.",
                "titulo": "Agua, cultura y educación en América Latina y el Caribe.",
                "referencia": "2019. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco). En: Autoridad Nacional del Agua (ANA). 14 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4240/ANA0002779.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/362Plyb",
                "resumen_comentario": "Señala que la educación y cultura del agua son elementos clave para la seguridad hídrica y destaca la existencia del grupo de trabajo en educación y cultura del agua de la Unesco.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Flores Rojas, Diana.",
                "titulo": "Cómo vigilar la calidad del agua en los Andes: Guía didáctica de herramientas de monitoreo comunitario.",
                "referencia": "2017. Red Muqui. Cajamarca: Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides). 18 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/publicaciones/Tomo-7.pdf",
                "acortado": "https://bit.ly/3iSYWve",
                "resumen_comentario": "Muestra las características de la vigilancia y monitoreo ambiental, su sustento legal, y expone de forma general tres tipos de monitoreo de la calidad del agua: físico - químico, biológico, y de hábitats y biodiversidad. En cada tipo de monitoreo enlaza a otras guías, documentos u organizaciones especializadas, con las que es importante contactar para usar dicha herramienta.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Francou, B.; Rabatel, A.; Soruco, A.; Sicart, J. E.; Silvestre, E. E.; Ginot, P.; Cáceres, B.; Condom, T.; Villacís, M.; Ceballos, J. L.; Lehmann, B.; Anthelme, F.; Dangles, O.; Gomez, J.; Favier, V.; Maisincho, L.; Jomelli, V.; Vuille, M.; Wagnon, P.; Lejeune, Y.; Ramallo, C. y Mendoza, J.",
                "titulo": "Glaciares de los Andes tropicales: Víctimas del cambio climático.",
                "referencia": "2013. Banco Mundial, GEF. Lima: Comunidad Andina de Naciones (CAN); Proyecto “Adaptación al impacto del retroceso acelerado de glaciares en los Andes tropicales” (Praa); Institut de recherche pour le développement (IRD). 98 pp.",
                "link": "https://www.researchgate.net/publication/259759577_GLACIARES_DE_LOS_ANDES_TROPICALES_VICTIMAS_DEL_CAMBIO_CLIMATICO_CAN_PRAA_IRD/link/02e7e52dadc4d267eb000000/download",
                "acortado": "https://bit.ly/302aS6e",
                "resumen_comentario": "Presenta un resumen de los procesos físicos naturales que ocurren en los glaciares, y las formas de medirlos, modelarlos y hacer estimaciones futuras. También menciona el mejor conocimiento disponible en materia de retroceso glaciar, ofrece cálculos del retroceso pasado, y estimaciones del futuro. Asimismo, refleja algunos de los estudios principales de estimación de impactos del retroceso glaciar y la aceleración de este proceso desde 1976, como consecuencia del cambio climático. Analiza especialmente la pérdida de glaciares en Perú, Bolivia, Ecuador, Colombia y Venezuela, y sus efectos y consecuencias visibles en la disponibilidad del agua a partir de las altas cuencas, así como el impacto sobre los ecosistemas."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "French, Adam.",
                "titulo": "¿Una nueva cultura de agua?: Inercia institucional y gestión tecnocrática de los recursos hídricos en el Perú.",
                "referencia": "2016. Autoridad Nacional del Agua (ANA). En: Anthropologica N° 37. 26 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4446/ANA0002871.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/2FY1sBF",
                "resumen_comentario": "La actual institucionalidad del agua refleja la persistencia de una cultura tecnocrática basada en la ingeniería del siglo XX. Se muestra cómo la burocracia en el Perú ha consolidado una autoridad centralizada sobre el agua mediante una variante de la GIRH que prioriza los derechos formales del agua, el valor económico del recurso hídrico, y un enfoque en la eficiencia del uso del agua.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fundación Aquae.",
                "titulo": "Calculadora de huella hídrica.",
                "referencia": "2020. Fundación Aquae.",
                "link": "https://www.fundacionaquae.org/calculadoras-aquae/calculadora-huella-hidrica/",
                "acortado": "https://bit.ly/3mKl0KM",
                "resumen_comentario": "Una forma de luchar contra el cambio climático es reducir la huella hídrica, es decir, el volumen de agua que se usa de manera directa por las actividades cotidianas, y el volumen total de agua dulce que se utiliza para producir los bienes y servicios que se consumen.",
                "observaciones": "Calculadora. Esta herramienta permite medir la huella hídrica."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Galarza, Elsa y Ruiz, José Luis.",
                "titulo": "Economía nacional y cambio climático: Una política integrada.",
                "referencia": "2018. Consorcio de Investigación Económica y Social (Cies). En: Economía y Sociedad Nº 95. Centro de Investigaciones de la Universidad del Pacífico (Ciup). 8 pp.",
                "link": "http://www.cies.org.pe/sites/default/files/files/articulos/economiaysociedad/economia_nacional_y_cambio_climatico_-_una_politica_integrada.pdf",
                "acortado": "https://bit.ly/3clmeHq",
                "resumen_comentario": "Considera el enfoque del cambio climático —en los lineamientos de la política económica— como un factor de riesgo y como una oportunidad. Éste debe estar en los instrumentos de manejo de la economía peruana en un diseño institucional con enfoque transversal del cambio climático y un manejo financiero ordenado y eficiente, estableciendo los programas de desarrollo con enfoque de cambio climático, direccionando la demanda y oferta de financiamiento",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gobierno Regional de Cajamarca.",
                "titulo": "Zonificación Económica y Ecológica (ZEE) de Cajamarca.",
                "referencia": "s/f. Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides); Broederlijk Delen. Cajamarca: Gobierno Regional de Cajamarca. 16 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Cartilla%20ZEE.pdf",
                "acortado": "https://bit.ly/33PsQu2",
                "resumen_comentario": "Instrumento de sensibilización y difusión sobre la Zonificación Ecológica y Económica (ZEE) de Cajamarca, que orienta la toma de decisiones sobre el mejor uso de los recursos naturales y la adecuada ocupación del territorio, considerando las necesidades de la población y las oportunidades de desarrollo, en armonía con el ambiente.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gonzales Lizarme, Gilber y Zegarra Vargas, Juan Carlos.",
                "titulo": "Retroceso glaciar en el Perú 1948 – 2019: Impactos en el recurso hídrico.",
                "referencia": "2020. Dirección de Calidad de Evaluación y Recursos Hídricos Área de Evaluación de Glaciares y Lagunas. Lima: Autoridad Nacional del Agua (ANA). 29 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4551/ANA0003031.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3mIMdgT",
                "resumen_comentario": "Trata sobre las cordilleras nevadas en el Perú y los impactos del cambio climático, así como la evaluación de los recursos hídricos en las microcuencas glaciares, el retroceso glaciar y sus impactos en el recurso hídrico.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gonzáles Posso, Camilo; Freire, José Luis; Morales, Manolo y Chacón Daniela.",
                "titulo": "Tierras, territorio y ambiente en la región andina: Una mirada a la problemática de tierras en Colombia, Ecuador y Perú.",
                "referencia": "2012. International Alert, UE. Quito: Indepaz, Corporación de Gestión y Derecho Ambiental (Ecolex); Centro de Colaboración Cívica Socios Perú. 104 pp.",
                "resumen_comentario": "Examina la situación de la tenencia de la tierra en los países andinos, mostrando la inseguridad jurídica y los marcos legales inadecuados e inaplicables, que generan conflictos, y destaca los beneficios de una legislación adecuada y el acceso a la titulación, en cuanto a costos, seguridad en la tenencia, acceso al crédito, inversión y cuidado ambiental.",
                "observaciones": "No disponible en internet."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo de Trabajo Multisectorial de naturaleza temporal encargado de generar información técnica para orientar la implementación de las Contribuciones Nacionalmente Determinadas (GTM-NDC).",
                "titulo": "Informe final del Grupo de Trabajo Multisectorial de naturaleza temporal encargado de generar información técnica para orientar la implementación de las Contribuciones Nacionalmente Determinadas (GTM-NDC).",
                "referencia": "2018. Gobierno del Perú; Centro Nacional de Planeamiento Estratégico (Ceplan). Lima: Ministerio del Ambiente. 929 pp.",
                "link": "http://www.minam.gob.pe/cambioclimatico/wp-content/uploads/sites/127/2019/01/190107_Informe-final-GTM-NDC_v17dic18.pdfPA%C3%91OL.pdf",
                "acortado": "https://bit.ly/3kC6Nxy",
                "resumen_comentario": "El GTM-NDC definió 91 medidas de adaptación y 62 de mitigación con las que se busca cumplir con la meta del 30 % de reducción de emisiones de GEI en el 2030, representando un gran desafío que exige desarrollar mayor información, aumentar el alcance de las condiciones habilitantes y, sobre todo, mejorar las capacidades en los diferentes actores, en especial del sector público (nacional, regional y local), para mejorar la gestión integral del cambio climático, para lo cual se requiere el concurso de la sociedad civil, el sector privado, los pueblos indígenas y la cooperación internacional.",
                "observaciones": "Informe. No disponible."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guabloche, Judith.",
                "titulo": "Perú: Cumplimiento de los Objetivos de Desarrollo Sostenible.",
                "referencia": "2018. Banco Central de Reserva del Perú (BCRP). En: Revista Moneda Nº 175. 7 pp.",
                "link": "https://www.bcrp.gob.pe/docs/Publicaciones/Revista-Moneda/moneda-175/moneda-175-04.pdf",
                "acortado": "https://bit.ly/3hSfimn",
                "resumen_comentario": "La elaboración de indicadores es una tarea importante para el seguimiento de los ODS. El país ha avanzado en ello, pero aún falta mucho en lo relacionado con el planeta, como cambio climático, consumo y producción sostenible, conservación de ecosistemas y biodiversidad, así como en los temas sociales, como la reducción de pobreza, acceso a servicios básicos, cobertura educativa y de salud, entre otros.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guardamino, Lucía; Haeberli, Wilfried; Muñoz, Randy; Drenkhan, Fabián; Tacsi, Arnaldo y Cochachín, Alejo.",
                "titulo": "Proyección de lagunas futuras en las cordilleras glaciares del Perú.",
                "referencia": "2019. Ministerio de Agricultura y Riego, Proyecto Glaciares. Lima: Autoridad Nacional del Agua (ANA). 64 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/3597",
                "acortado": "https://bit.ly/2HpzmjB",
                "resumen_comentario": "La simulación de lagunas futuras es base para la planificación y adaptación tempranas ante el cambio climático, la reducción del suministro hídrico estacional proveniente de los deshielos glaciares y la mayor variabilidad de las precipitaciones. Representan futuros lugares de almacenamiento de agua y nuevas posibilidades de uso, pero también probables amenazas, por lo que una gestión prospectiva e integrada de los recursos hídricos, los riesgos y ordenamiento del territorio, permite enfrentar los impactos de los cambios hidroclimáticos y socioeconómicos."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guevara Pérez, Edilberto y De la Torre Villanueva, Abelardo Amador.",
                "titulo": "Gestión integrada de los recursos hídricos por cuenca y cultura del agua.",
                "referencia": "2019. Ministerio de Agricultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 434 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4302/ANA0002801.pdf?sequence=4&isAllowed=y",
                "acortado": "https://bit.ly/2HpznnF",
                "resumen_comentario": "Investigación sobre la evaluación y selección de métodos para establecer los aspectos fundamentales de la ley de recursos hídricos con respecto a la cultura del agua: cantidad, calidad, oportunidad y sostenibilidad. Incluye la unidad de gestión; los modelos gerenciales aplicados a la gestión del agua; los métodos para la conservación y protección del agua en la cuenca; los aspectos políticos, sociales y económicos, así como los éticos y legales de la gestión del agua; el monitoreo y evaluación de los proyectos de aprovechamiento hídrico; y la situación de los recursos hídricos del Perú."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Honty, Gerardo y Gudynas, Eduardo.",
                "titulo": "Cambio climático y transiciones al Buen Vivir: Alternativas al desarrollo para un clima seguro.",
                "referencia": "2014. Red Peruana por una Globalización con Equidad (RedGE); CooperAcción. Lima: Centro Latino Americano de Ecología Social (Claes). 60 pp.",
                "link": "http://transiciones.org/wp-content/uploads/2015/11/CambioClimaticoTransicionesBuenVivir.pdf",
                "acortado": "https://bit.ly/2RTedA0",
                "resumen_comentario": "Describe los aspectos más relevantes en torno a la crisis climática, los desafíos energéticos y el deterioro ambiental, en los que el extractivismo juega un papel preponderante, proponiendo caminos alternativos basados en transiciones, que se traducen en políticas, instrumentos y medidas concretas para transitar de la crisis hacia el Buen Vivir."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Islas Vargas, Maritza.",
                "titulo": "Lecciones desde la emergencia: Entre el coronavirus y el cambio climático.",
                "referencia": "2020. En: Pensar la pandemia. Observatorio Social del Coronavirus. México: Clacso.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/se/20200527015834/48-Maritza-Islas-Vargas.pdf",
                "acortado": "https://bit.ly/3mIvD0t",
                "resumen_comentario": "Las condiciones para que el Covid-19 se volviera una amenaza global, además de las desigualdades y la precariedad en la que viven millones de personas, tienen que ver con el cambio climático y la respuesta que ha dado la sociedad.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Levaggi Tapia, Renato.",
                "titulo": "La protección del derecho a la tierra en Cusco.",
                "referencia": "2020. En: La revista agraria N° 189. Año 21. Lima: Centro Peruano de Estudios Sociales (Cepes). Pp. 25-28.",
                "link": "https://larevistagraria.files.wordpress.com/2020/05/lra-189-web-compressed.pdf",
                "acortado": "https://bit.ly/301I4uC",
                "resumen_comentario": "El tratamiento de la diversidad cultural en el campo de la justicia, en particular en los derechos a la tierra, y los avances del papel de los jueces y la coordinación entre los sistemas de justicia, afirman la seguridad jurídica de las comunidades y las fortalece frente a los problemas socioambientales y a conflictos con empresas extractivas.",
                "observaciones": "Caso del distrito judicial de Cusco."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "López Linares, Roberto y López Tocón, Lídice.",
                "titulo": "Perú y la Ocde: Brechas laborales, sanitarias y ambientales.",
                "referencia": "2020. Red Peruana por una Globalización con Equidad (RedGE). 20 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/RedGE%20OCDE%20final%20V6.pdf",
                "acortado": "https://bit.ly/32QNmLn",
                "resumen_comentario": "Subraya las debilidades y brechas que el Perú muestra comparado con los estándares Ocde, mostrando lo mucho que falta para estar cerca a promedios aceptables, algunos de los cuales requieren plazos medianos y largos, en las áreas laboral (salario, informalidad, trabajo infantil), salud (servicios inadecuados) y ambiente (ordenamiento territorial, remediación ambiental, agua, residuos sólidos, deforestación)."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mahmood, Moazam; Lee, Sangheon y Grimshaw, Damian.",
                "titulo": "Perspectivas sociales y del empleo en el mundo 2018: La sostenibilidad medioambiental con empleo.",
                "referencia": "2018. Ginebra: Organización Internacional del Trabajo (OIT). 210 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_638150.pdf",
                "acortado": "https://bit.ly/3kzXlKY",
                "resumen_comentario": "Se analiza la repercusión del cambio climático y la degradación ambiental en los mercados de trabajo, en particular respecto de la cantidad y la calidad del empleo, y realizan estimaciones sobre los cambios laborales previstos. En el futuro, la transformación estructural en el contexto del cambio climático puede compensar la pérdida de puestos de trabajo, y la economía verde ser un motor de crecimiento del empleo.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Guía para realizar inventarios de fuentes de agua subterránea.",
                "referencia": "2020. Ministerio de Agricultura y Riego, Dirección de Calidad y Evaluación de Recursos Hídricos. Lima: Autoridad Nacional del Agua (ANA). 76 pp.",
                "link": "https://sinia.minam.gob.pe/normas/aprueban-guia-realizar-inventarios-fuentes-agua-subterranea",
                "acortado": "https://bit.ly/3cm7bxj",
                "resumen_comentario": "Herramienta técnica que coadyuva a la toma de decisiones en la evaluación y gestión de los recursos hídricos subterráneos. Describe las etapas del inventario: actividades preliminares, trabajo de campo y de gabinete, e informe final, así como instrucciones para el registro de las fuentes de agua subterránea.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Lineamientos para la elaboración de los diagnósticos de la calidad de los recursos hídricos superficiales.",
                "referencia": "2020. Lima: Autoridad Nacional del Agua (ANA). 35 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4515",
                "acortado": "https://bit.ly/35XllUo",
                "resumen_comentario": "Busca armonizar la información existente, instrumentos y herramientas respecto a la calidad del agua, como base para promover la sostenibilidad y conservación de las fuentes naturales y sus bienes asociados, cuyos resultados constituirán un insumo para los planes y estrategias en una cuenca o unidad hidrográfica."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Manual Nº 1: Organización de usuarios de agua con fines agrarios.",
                "referencia": "2015. Ministerio de Agricultura y Riego. Dirección General de Infraestructura Agraria y Riego (Dgiar). 28 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4287/ANA0002787.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3kJuEv9",
                "resumen_comentario": "Provee información para la capacitación sobre organizaciones de usuarios de agua con fines agrarios, con base en la Ley Nº 30157, Ley de Organizaciones de Usuarios de Agua y su Reglamento (D. S. Nº 005-2015-Minagri), y los contenidos de los manuales del ex Pronamachs.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Manual Nº 2: Operación de infraestructura de sistema de riego.",
                "referencia": "2015. Ministerio de Agricultura y Riego. Dirección General de Infraestructura Agraria y Riego (Dgiar). 20 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4288/ANA0002788.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/2ZZAv7H",
                "resumen_comentario": "Proporciona conceptos básicos para la operación de la infraestructura de sistema de riego, teniendo en consideración los contenidos de los manuales del ex Pronamachs.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Manual Nº 3: Mantenimiento de infraestructura de sistemas de riego.",
                "referencia": "2015. Ministerio de Agricultura y Riego. Dirección General de Infraestructura Agraria y Riego (Dgiar). 36 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4289/ANA0002789.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/35XU3x7",
                "resumen_comentario": "Brinda conceptos básicos para el mantenimiento de la infraestructura de los sistemas de riego, teniendo en consideración los contenidos de los manuales del ex Pronamachs.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Manual Nº 4: Riego parcelario.",
                "referencia": "2015. Ministerio de Agricultura y Riego. Dirección General de Infraestructura Agraria y Riego (Dgiar). 28 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4290/ANA0002790.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/30hbmpx",
                "resumen_comentario": "Provee información para la capacitación en riego parcelario a las organizaciones de usuarios de agua con fines agrarios, en lo que respecta a preparación del terreno, construcción de composturas y aplicación de lámina de agua en parcelas de laderas, teniendo en cuenta los contenidos de los manuales del ex Pronamachs.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Manual Nº 5: Medición de agua.",
                "referencia": "2015. Ministerio de Agricultura y Riego. Dirección General de Infraestructura Agraria y Riego (Dgiar). 32 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4291/ANA0002791.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/2RPcVGr",
                "resumen_comentario": "Contiene información referida a la capacitación en medición de caudales para las organizaciones de riego, para que puedan tener los criterios para realizar la medición del agua en sus sistemas de riego.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Plan de Gestión de Riesgos y Adaptación al Cambio Climático en el Sector Agrario: Período 2012-2021 (Plangracc-A).",
                "referencia": "2012. Programa de Cooperación Técnica de la FAO TCP/PER/3301 “Plan de Gestión de Riesgos y Adaptación al Cambio Climático en el sector Agrario” período 2012-2021. Lima: Ministerio de Agricultura y Riego. 344 pp.",
                "link": "https://sinia.minam.gob.pe/documentos/plan-gestion-riesgos-adaptacion-cambio-climatico-sector-agrario",
                "acortado": "https://bit.ly/3mLOcBd",
                "resumen_comentario": "Contiene acciones estratégicas que contribuyen a la reducción de la vulnerabilidad frente al cambio climático, de la población relacionada con la actividad agraria, e incide con una propuesta de política sectorial en la perspectiva de la planificación e inversión estatal en investigación e información, reducción de riesgos climáticos, preparación y respuesta a emergencias de origen climático y mejoramiento de capacidades."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "El Perú y el cambio climático: Tercera Comunicación Nacional del Perú a la Convención Marco de las Naciones Unidas sobre el Cambio Climático",
                "referencia": "2016. Comisión Nacional sobre Cambio Climático. Lima: Ministerio del Ambiente (Minam). 319 pp.",
                "link": "http://bvs.minsa.gob.pe/local/MINSA/3688.pdf",
                "acortado": "https://bit.ly/2FILlZa",
                "resumen_comentario": "Reporte a la Convención Marco de las Naciones Unidas sobre el Cambio Climático (CMNUCC), que incluye los inventarios de emisiones de gases de efecto invernadero (GEI), además de una descripción de las medidas formuladas e implementadas por el Perú para la gestión y planificación de la reducción de emisiones de GEI y la adaptación al cambio climático, incluyendo sus aspectos normativos.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Guía de evaluación del estado del ecosistema de bofedal.",
                "referencia": "2019. Ministerio del Ambiente, Dirección de Monitoreo y Evaluación de los Recursos Naturales del Territorio. 62 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4391",
                "acortado": "https://bit.ly/33PWhw3",
                "resumen_comentario": "Herramienta que describe el proceso de evaluación y estimación del estado de los bofedales, dirigida a las entidades que desarrollan acciones de conservación y recuperación (remediación, rehabilitación o restauración) de ecosistemas y servicios ecosistémicos de bofedal.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "La Contribución Nacional del Perú (iNDC): Agenda para un desarrollo climáticamente responsable.",
                "referencia": "2016. Ministerio del Ambiente, Dirección General de Cambio Climático, Desertificación y Recursos Hídricos. 44 pp.",
                "link": "http://www.minam.gob.pe/cambioclimatico/wp-content/uploads/sites/11/2015/12/LA-CONTRIBUCI%C3%93N-NACIONAL-DEL-PER%C3%9A11.pdf",
                "acortado": "https://bit.ly/3kDWJ77",
                "resumen_comentario": "La iNDC contempla una reducción del 30 % de las emisiones de Gases de Efecto Invernadero (GEI) para 2030, como parte de un escenario Business as Usual (BaU). Un 20 % es a través de inversiones y gastos con recursos internos, públicos y privados, y el restante 10 % de la reducción está supeditado a la disponibilidad de financiamiento externo internacional y a las condiciones favorables."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "La respuesta peruana al cambio climático.",
                "referencia": "s/f. Contribuciones Nacionalmente Determinadas. 16 pp.",
                "link": "http://www.minam.gob.pe/cambioclimatico/wp-content/uploads/sites/127/2018/06/Dossier-NDC.pdf",
                "acortado": "https://bit.ly/3kDWJ77",
                "resumen_comentario": "El Grupo de Trabajo Multisectorial de naturaleza temporal encargado de generar información técnica para la implementación de las contribuciones previstas y determinadas a nivel nacional en la Convención Marco de las Naciones Unidas sobre el Cambio Climático, conformado por trece ministerios y Ceplan (Resolución Suprema Nº 005-2016-Minam), estableció las Contribuciones Nacionalmente Determinadas como un compromiso contra el cambio climático en Perú.",
                "observaciones": "No disponible."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Ley marco sobre cambio climático.",
                "referencia": "2018. Ministerio del Ambiente. 57 pp.",
                "link": "http://www.minam.gob.pe/cambioclimatico/wp-content/uploads/sites/127/2018/12/LMCC_ESPA%C3%91OL.pdf",
                "acortado": "https://bit.ly/2RRIXlg",
                "resumen_comentario": "Esta norma permite que el país esté mejor preparado para enfrentar los eventos climáticos y generar las condiciones para el crecimiento de industrias limpias y sostenibles, además de ser un mandato claro que compatibiliza con los Objetivos de Desarrollo Sostenible (ODS) de las Naciones Unidas.",
                "observaciones": "Ley Nº 30754. 17 de abril de 2018."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Mecanismos de financiamiento para la conservación de los ecosistemas y la biodiversidad.",
                "referencia": "2011. Ministerio del Ambiente, Dirección de Evaluación, Valoración y Financiamiento del Patrimonio Natural. 136 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4433/ANA0002933.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/3hYdsAq",
                "resumen_comentario": "Herramienta de consulta sobre el financiamiento para la conservación, que muestra los mecanismos de financiamiento para asegurar una calidad ambiental adecuada para el desarrollo integral de las personas y la conservación y aprovechamiento sostenible del patrimonio natural, como establece la Política Nacional del Ambiente.",
                "observaciones": "Conversatorio internacional."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Perú 2030: La visión del Perú que queremos.",
                "referencia": "2016. Programa de las Naciones Unidas para el Desarrollo (Pnud). Lima: Ministerio del Ambiente. 184 pp.",
                "link": "http://www.minam.gob.pe/wp-content/uploads/2016/07/Peru-2030_la-visi%C3%B3n-del-Per%C3%BA-que-queremos.pdf",
                "acortado": "https://bit.ly/2HnVTxc",
                "resumen_comentario": "Contiene la visión de un país ético, integrado, saludable, socialmente equitativo y sostenible, bajo las pautas de lo que se debe hacer para ser ambientalmente sano y tener calidad de vida, establecidas en los ODS y la Evaluación del Desempeño Ambiental (EDA), con estrategias en diversidad biológica, manejo forestal sostenible, desertificación, sequía y género, y acciones de adaptación y mitigación del cambio climático en bosques, energía e industria."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Plan de Acción de Adaptación y Mitigación frente al Cambio Climático.",
                "referencia": "2010. Ministerio del Ambiente (Minam). 152 pp.",
                "link": "https://sinia.minam.gob.pe/documentos/plan-accion-adaptacion-mitigacion-frente-cambio-climatico",
                "acortado": "https://bit.ly/3kGbiqV",
                "resumen_comentario": "En base a los Lineamientos Estratégicos de Adaptación y Mitigación frente al Cambio Climático de la Comisión Nacional de Cambio Climático (CNCC), se establece los procesos de planificación teniendo en consideración los impactos del cambio climático, para los programas, proyectos y acciones de corto y mediano plazo a nivel nacional, sectorial, regional y local."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Política Nacional del Ambiente.",
                "referencia": "2009. Ministerio del Ambiente (Minam). 48 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/12216/1633.pdf",
                "acortado": "https://bit.ly/301GzN3",
                "resumen_comentario": "Formulada sobre la base del análisis de la situación ambiental del país, tomando en cuenta las políticas y lineamientos que sustentan la elaboración de planes y estrategias nacionales sobre biodiversidad, bosques, cambio climático, residuos sólidos, saneamiento, sustancias químicas, entre otros, así como el proceso descentralizado de consulta pública efectuado por el Minam.",
                "observaciones": "Decreto Supremo Nº 012-2009-Minam. 23 de Mayo de 2009."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Protocolo Nacional de Monitoreo de la Calidad Ambiental del Aire.",
                "referencia": "2019. Ministerio del Ambiente, Dirección General de Calidad Ambiental. 102 pp.",
                "link": "https://sinia.minam.gob.pe/normas/decreto-supremo-que-aprueba-protocolo-nacional-monitoreo-calidad",
                "acortado": "https://bit.ly/3cjYd3G",
                "resumen_comentario": "Instrumento que permite estandarizar los criterios técnicos para el monitoreo ambiental del aire en el país, a fin de generar información de calidad, comparable, compatible, confiable y representativa."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mujíca, Luis.",
                "titulo": "Vida y agua en Caraz y Espinar.",
                "referencia": "2017. Lima: Comisión Episcopal de Acción Social (Ceas). 118 pp. ",
                "link": "https://ceas.org.pe/publicaciones/0000000_Vida%20y%20agua%20en%20Caraz%20y%20Espinar%20WEB.pdf",
                "acortado": "https://bit.ly/3kGxEss",
                "resumen_comentario": "Tiene como objetivo tomar en cuenta los conocimientos que mujeres y varones utilizan para manejar el agua en las cuencas de Parón-Llullán (Caraz, Ancash) y Cañipía (Espinar, Cusco), así como la importancia de la revaloración de los conocimientos endógenos que han permitido la supervivencia de las culturas a lo largo de cientos de años.",
                "observaciones": "Investigación etnográfica en Ancash y Cusco."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Muqui, Red de Propuesta y Acción.",
                "titulo": "Agua, minería y cambio climático: Posicionamiento de la Red Muqui frente al cambio climático en el Perú.",
                "referencia": "2014. Derechos Humanos sin Fronteras (DHSF), Cusco; Centro de Cultura Popular Labor, Pasco; Red Regional Agua, Desarrollo y Democracia (Redad), Piura; Derechos Humanos y Medio Ambiente (Dhuma), Puno; Comisión Episcopal de Acción Social (Ceas), Ancash. Lima: Muqui, Red de Propuesta y Acción. 64 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/agua_mineria_cambio_climatico_final.pdf",
                "acortado": "https://bit.ly/3cl7E2V",
                "resumen_comentario": "Aborda casos de cuencas hidrográficas con actividad minera y sus impactos en el contexto del cambio climático, y en base a ello se plantean propuestas de políticas públicas para las autoridades del Estado, a nivel nacional, regional y local, a fin de que se puedan implementar medidas de adaptación, para lograr reducir los gases de efecto invernadero y sus impactos en el agua.",
                "observaciones": "Casos de Pasco, Cusco, Piura, Puno y Ancash."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nagatani, Kakuko; Oliveros, Luis Alberto; Gómez Gamarra, Rosario y Galarza Contreras, Elsa.",
                "titulo": "Geo Amazonía: perspectivas del medio ambiente en la Amazonía.",
                "referencia": "2009. Programa de las Naciones Unidas para el Medio Ambiente (Pnuma); Organización del Tratado de Cooperación Amazónica (Otca); Universidad del Pacífico (UP); Instituto de Investigaciones de la Amazonía Peruana (IIAP). 324 pp.",
                "link": "http://repositorio.iiap.gob.pe/handle/IIAP/369",
                "acortado": "https://bit.ly/300jEle",
                "resumen_comentario": "Después de más de dos años de trabajo y la participación de aproximadamente 150 científicos y expertos de los países amazónicos, realizado bajo la metodología GEO (Global Environment Outlook), se presenta una evaluación integral del estado de un ecosistema de trascendencia global como la Amazonía.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Noriega Silva, Rosmery Elizabeth Amalia.",
                "titulo": "Aplicación del esquema de extracción secuencial BCR para evaluar el riesgo en el ecosistema.",
                "referencia": "2020. Autoridad Nacional del Agua (ANA). 16 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4522/ANA0003022.pdf?sequence=1&isAllowed=y",
                "acortado": "https://bit.ly/2EoHfoa",
                "resumen_comentario": "Trata sobre los manantiales como refugio de la biodiversidad, y la acumulación de metales tóxicos en sedimentos y biota de estas fuentes naturales de agua, analizado mediante un método químico analítico BCR. Asimismo, identifica los riesgos y retos sobre el tema.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Agricultura sostenible y biodiversidad: Un vínculo indisocialble.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 48 pp.",
                "link": "http://www.fao.org/3/a-i6602s.pdf",
                "acortado": "https://bit.ly/3mMyMMK",
                "resumen_comentario": "Explica cómo la biodiversidad y los ecosistemas favorecen al bienestar de las personas y proporcionan una alimentación sana, agua potable, protección y recursos naturales para nuestras necesidades básicas. La agricultura es uno de los mayores usuarios de la biodiversidad, pero también tiene el potencial de contribuir a la conservación de dicha biodiversidad."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Biodiversidad para una agricultura sostenible: El trabajo de la FAO sobre el uso de la biodiversidad en la alimentación y la agricultura.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 32 pp.",
                "link": "http://www.fao.org/3/CA2227ES/ca2227es.pdf",
                "acortado": "https://bit.ly/2ZXHluo",
                "resumen_comentario": "Los sistemas alimentarios modernos tienen un efecto profundo en los patrones de producción y consumo de alimentos y el uso de un número limitado de especies, a menudo con una base genética reducida, aumenta la vulnerabilidad de los sistemas agrícolas y pone en riesgo la seguridad alimentaria y la nutrición, por lo que es necesario salvaguardar y hacer uso de la biodiversidad –es decir, la variedad de vida en nuestro planeta– para superar los desafíos globales a los que nos enfrentamos."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y Programa de las Naciones Unidas para el Medio Ambiente (Pnuma).",
                "titulo": "El estado de los bosques del mundo 2020: Los bosques, la biodiversidad y las personas.",
                "referencia": "2020. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO); Programa de las Naciones Unidas para el Medio Ambiente (Pnuma). Roma: FAO. 224 pp.",
                "link": "http://www.fao.org/3/ca8642es/CA8642ES.pdf",
                "acortado": "https://bit.ly/3cuui96",
                "resumen_comentario": "La degradación y pérdida de los bosques contribuyen a perturbar el equilibrio de la naturaleza y a aumentar el riesgo y exposición de las personas a las enfermedades zoonóticas, como la pandemia del Covid-19. Se evalúa los progresos en el logro de metas mundiales sobre la biodiversidad forestal y se expone la efectividad de las políticas, medidas y enfoques para la conservación y el desarrollo sostenible, mediante la gobernanza; la armonización de políticas; la seguridad de la tenencia de la tierra; el respeto a los derechos de las comunidades locales y pueblos indígenas; y las modalidades innovadoras de financiación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Orihuela Romero, Carlos Enrique.",
                "titulo": "Efecto económico del cambio climático sobre los cultivos permanentes de la agricultura peruana: Período 2011 – 2050.",
                "referencia": "2014. Cooperación Belga al Desarrollo. Lima: Consorcio de Investigación Económica y Social (Cies). 157 pp.",
                "link": "https://www.cies.org.pe/sites/default/files/investigaciones/informefinalcc.pdf",
                "acortado": "https://bit.ly/2G5dNE0",
                "resumen_comentario": "Busca cuantificar monetariamente el impacto del cambio climático sobre los principales cultivos permanentes de la agricultura peruana, mediante un análisis desagregado a nivel departamental para varios escenarios durante el periodo 2011-2050. Los resultados econométricos indican que los eventuales efectos del cambio climático serán mínimos en términos macroeconómicos, aunque no se conoce en qué medida cambiaría la dinámica económica y sus efectos en las pequeñas economías altamente dependientes de estos cultivos.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Papa Francisco.",
                "titulo": "Carta encíclica Laudato Si’ del Santo Padre Francisco sobre el cuidado de la casa común.",
                "referencia": "2015. Ciudad del Vaticano. 192 pp.",
                "link": "http://w2.vatican.va/content/dam/francesco/pdf/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si_sp.pdf",
                "acortado": "https://bit.ly/2Eo1zGc",
                "resumen_comentario": "Se centra en el planeta Tierra como lugar en el que viven las personas, defendiendo la naturaleza, la vida y las reformas energéticas, criticando, desde una perspectiva teológica, el desarrollo irresponsable y el consumismo, con un alegato en favor de una acción mundial unificada \"para combatir la degradación ambiental y el cambio climático\".",
                "observaciones": "Alabado seas. 24 de mayo de 2015."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pezo, Danilo; Muschler, Reinhold; Tobar, Diego y Pulido, Astrid.",
                "titulo": "Intervenciones y tecnologías ambientalmente racionales (TAR) para la adaptación al cambio climático del sector agropecuario de América Latina y el Caribe (ALC).",
                "referencia": "2019. Fondo Regional de Tecnología Agropecuaria (Fontagro); Fondo para el Medio Ambiente Mundial (FMAM); Centro Agronomico Tropical de Investigación y Enseñanza (Catie). Nueva York: Banco Interamericano de Desarrollo (BID). 272 pp.",
                "link": "https://reliefweb.int/sites/reliefweb.int/files/resources/Intervenciones_y_tecnologi%CC%81as_ambientalmente_racionales_TAR_para_la_adaptacio%CC%81n_al_cambio_clima%CC%81tico_del_sector_agropecuario_de_Ame%CC%81rica_Latina_y_el_Caribe_ALC_es.pdf",
                "acortado": "https://bit.ly/3mTP0Ea",
                "resumen_comentario": "Resalta las necesidades e identifica opciones efectivas para fomentar el desarrollo sistemático de acciones de adaptación en Latinoamérica, pues solamente una mayor integración entre las iniciativas de organismos financieros, técnicos y educativos, tanto estatales como privados, ofrece los beneficios y sinergias necesarias para poder enfrentar los retos cada vez más complejos del cambio climático."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático.",
                "titulo": "Al servicio de los bosques.",
                "referencia": "2020. Boletín 10 años del Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático (PNCBMCC). Lima: Ministerio del Ambiente (Minam). 3 pp.",
                "link": "http://www.bosques.gob.pe/archivo/f94790_Boletin-10aos-Programa-Bosques.pdf",
                "acortado": "https://bit.ly/32PXbcy",
                "resumen_comentario": "Contiene información, logros y avances durante luna década del Programa Bosques al servicio de la conservación y la reducción de emisiones de gases de efecto invernadero, con el objetivo de conservar 54 millones de hectáreas de bosques tropicales como una contribución a la mitigación del cambio climático y a la promoción del desarrollo sostenible.",
                "observaciones": "Boletín."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático.",
                "titulo": "Cobertura y deforestación en los bosques húmedos amazónicos 2018.",
                "referencia": "2019. Apuntes del bosque Nº 1. Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático (PNCBMCC). Lima: Ministerio del Ambiente (Minam). 96 pp.",
                "link": "http://www.bosques.gob.pe/archivo/Apuntes-del-Bosque-N1.pdf",
                "resumen_comentario": "Contiene información oficial sobre el estado actual los bosques, en colaboración con Serfor de Minagri, que puede servir como insumo para el diseño de políticas y acciones de prevención y control ante casos de deforestación, así como la promoción del uso sostenible del patrimonio forestal y el desarrollo de sus poblaciones, entre otros fines."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático.",
                "titulo": "Estrategia nacional sobre bosques y cambio climático.",
                "referencia": "2016. Programa Nacional de Conservación de Bosques para la Mitigación del Cambio Climático (PNCBMCC). Lima: Ministerio del Ambiente (Minam). 206 pp.",
                "link": "http://www.bosques.gob.pe/archivo/ff3f54_ESTRATEGIACAMBIOCLIMATICO2016_ok.pdf",
                "resumen_comentario": "Considera objetivos estratégicos enfocados en mitigación y adaptación, con ocho acciones estratégicas y seis trasversales con varias líneas de implementación, analizando el contexto internacional y la deforestación de los bosques húmedos amazónicos. Es una guía que traza el rumbo a seguir a nivel regional y local, con un conjunto de planes, programas y proyectos, así como un portafolio de inversiones para asegurar su implementación.",
                "observaciones": "Decreto Supremo Nº 007-2016-Minam."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Prosalus, Salud y Desarrollo.",
                "titulo": "Biodiversidad y derecho a la alimentación.",
                "referencia": "2007. Prosalus, Salud y Desarrollo; Cáritas Española; Veterinarios sin Fronteras; Ingeniería sin Fronteras. 154 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Biodiversidad_y_derecho_a_la_alimentacion.pdf",
                "resumen_comentario": "Presenta temas relacionados con la biodiversidad y el derecho a la alimentación, incluidos en un encuentro de expertos (ONG, organizaciones agrarias y ecologistas, universidades, Ministerio de Agricultura, Pesca y Alimentación, organismos internacionales como FAO y Foro Rural Mundial) que debatió sobre recursos fito y zoogenéticos, desarrollo rural, políticas agrarias, organismos modificados genéticamente, derechos de consumidores, biocombustibles y soberanía alimentaria.",
                "observaciones": "Seminario de expertos “Protección de la biodiversidad y realización del derecho a la alimentación”. Madrid, 2007."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pulgar-Vidal, Manuel.",
                "titulo": "El Perú frente al cambio climático: Respuestas nacionalmente apropiadas frente a un problema complejo y una gobernanza climática en crisis.",
                "referencia": "2010. En: Agenda Internacional, Año XVII, N° 28. 19 pp.",
                "link": "http://www.keneamazon.net/Documents/Publications/Virtual-Library/Impacto/156.pdf",
                "resumen_comentario": "La elevada vulnerabilidad del Perú está determinada por amenazas crecientes, como el fenómeno de El Niño, el incremento del nivel del mar; alto grado de exposición por el patrón de ocupación del territorio, retroceso de glaciares, distribución poblacional, —la mayoría vive donde escasea el agua—; alto grado de sensibilidad de la población, recursos y sectores debido a situaciones de pobreza e inequidad; país megadiverso con una economía dependiente del clima; incipiente capacidad de adaptación por una débil institucionalidad, escasa organización social para gestionar desastres, y marcos regulatorios que no consideran los riesgos del cambio climático.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Quimbayo Díaz, Paola Andrea.",
                "titulo": "La biodiversidad agrícola como estrategia y crecimiento en Colombia. Tres casos de estudio: La Gulupa, Artesanías y Araza.",
                "referencia": "2015. Universidad Militar Nueva Granada, Facultad de Relaciones Internacionales y Estudios Políticos. Bogotá D.C. 68 pp.",
                "link": "https://repository.unimilitar.edu.co/bitstream/handle/10654/14053/PROYECTO%20DE%20LA%20BIODIVERSIDAD.pdf;jsessionid=6CC58511CCA43B04AA696F5823DF993D?sequence=2",
                "resumen_comentario": "Muestra cómo la diversidad agrícola puede ser una estrategia de crecimiento y desarrollo, a través de mejores políticas ambientales, sociales e institucionales, que promuevan la investigación científica y una producción eficiente y sostenible que disminuya los impactos ambientales y que mejore la calidad de vida de la población rural.",
                "observaciones": "Monografía de grado."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Quintero, Marcela. (Editora)",
                "titulo": "Servicios ambientales hidrológicos en la región andina: Estado del conocimiento, la acción y la política para asegurar su provisión mediante esquemas de pago por servicios ambientales.",
                "referencia": "2010. Consorcio para el Desarrollo Sostenible de la Ecorregión Andina (Condesan). Lima: Instituto de Estudios Peruanos (Iep). 278 pp.",
                "link": "http://siar.minam.gob.pe/puno/sites/default/files/archivos/public/docs/1536879952_quinteros_servicios_ambientales_region_andina.pdf",
                "resumen_comentario": "Examina el conocimiento científico, la política y la acción acerca de los mecanismos de financiamiento de la protección o recuperación de los servicios ambientales hidrológicos generados en los Andes, y muestra una visión integral del estado del arte sobre estos servicios, así como sus mitos, vacíos y certezas. Pone énfasis en la visión andina del agua y su manejo, su importancia para la sociedad y su  integración en los esquemas de mercado de servicios ambientales en Latinoamérica.",
                "observaciones": "Serie Agua y sociedad N° 12."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salas, A.; van Beem, J. y Chávez, O.",
                "titulo": "Biodiversidad agrícola de la papa.",
                "referencia": "2012. Centro Internacional de la Papa (CIP). 56 pp.",
                "link": "http://www.psi.gob.pe/docs/%5Cbiblioteca%5Cexposiciones%5C2012%5CBiodiversidad%20Agr%C3%ADcola%20de%20la%20Papa.pdf",
                "resumen_comentario": "Expone las evidencias de la papa en el Perú antiguo, su origen, proceso de domesticación y filogenia de especies cultivadas, así como su recorrido alrededor del mundo, taxonomía, distribución, producción, germoplasma, y las especies existentes en Perú.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Secours Catholique, Cáritas Francia.",
                "titulo": "Migraciones por motivos ambientales.",
                "referencia": "2020. Documento de análisis y posicionamiento. Secours Catholique, Cáritas Francia. 24 pp.",
                "link": "https://caritaslatinoamerica.org/wp-content/uploads/2020/01/Migraciones-Ambientales_Nota-de-analisis-y-posicionamiento_SCCF_ES.pdf",
                "resumen_comentario": "El término “migrante por motivos ambientales” se refiere a la persona que por un riesgo ambiental repentino o progresivo, se ve obligada a dejar su hogar habitual, lo cual la lleva a atravesar una frontera. Presenta el contexto en el que las poblaciones huyen de su lugar de residencia por razones ambientales, asumiendo la protección del ambiente, la defensa de las personas vulnerables y sus derechos fundamentales durante el proceso migratorio."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ráez Luna, Ernesto F.",
                "titulo": "Visiones, prioridades y urgencias del Perú ante la emergencia climática global: Reflexiones a partir de las contribuciones nacionalmente determinadas (NDC) y sus implicaciones urbano-rurales.",
                "referencia": "2020. Rainforest Foundation, Noruega. Lima: Movimiento Ciudadano frente al Cambio Climático (Mocicc). 84 pp.",
                "link": "https://www.mocicc.org/wp-content/uploads/2020/03/T-web-VISIONES-PRIORIDADES-Y-URGENCIAS-DEL-PER%C3%9A.pdf",
                "resumen_comentario": "Busca poner en perspectiva las contribuciones nacionalmente determinadas (NDC) del Perú, desde el contexto mundial contemporáneo de crisis ambiental global, la dinámica urbano-rural del país y la relevancia real de dichas contribuciones para enfrentar los desafíos ambientales prioritarios del país, altamente vulnerable al cambio climático. Las NDC son las acciones de un país para reducir sus emisiones de gases de efecto invernadero (GEI) para la mitigación y adaptación al cambio climático."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salazar, Beatriz.",
                "titulo": "El medio ambiente: El eslabón más débil en las defensas frente a nuevas pandemias.",
                "referencia": "2020. En: La revista agraria N° 189. Año 21. Lima: Centro Peruano de Estudios Sociales (Cepes). Pp. 10-15.",
                "link": "https://larevistagraria.files.wordpress.com/2020/05/lra-189-web-compressed.pdf",
                "resumen_comentario": "La evidencia científica muestra que el deterioro de los ecosistemas y la biodiversidad multiplica el riesgo de nuevas enfermedades. Perú, debido al modelo económico que demanda recursos naturales, no está tomando salvaguardias para evitarlo.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schauwecker, Simone; Kronenberg, Marlene y Cruz, Rolando.",
                "titulo": "El futuro del clima y de los glaciares en el Perú.",
                "referencia": "2017. Proyecto Glaciares. Universidad de Zurich; Meteodat GmbH; y Unidad de Glaciología y Recursos Hídricos (UGRH) de la Autoridad Nacional del Agua del Perú (ANA). Lima: Care Perú. 20 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4137/ANA0002717.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Resume los resultados de la investigación sobre el futuro del clima y del retroceso glaciar hacia fines del siglo XXI en la región andina tropical de Perú. Forma parte de lo desarrollado en el marco del proyecto Glaciares, así como de la experiencia empírica emprendida por la Unidad de Glaciología y Recursos Hídricos (UGRH) de la Autoridad Nacional del Agua del Perú (ANA)."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Secretaría del Convenio sobre la Diversidad Biológica.",
                "titulo": "La biodiversidad y la agricultura: Salvaguardando la biodiversidad y asegurando alimentación para el mundo.",
                "referencia": "2008. Programa de las Naciones Unidas para el Medio Ambiente (Pnuma). Montreal: Secretaría del Convenio sobre la Diversidad Biológica. 60 pp.",
                "link": "https://www.cbd.int/doc/bioday/2008/ibd-2008-booklet-es.pdf",
                "resumen_comentario": "Los agricultores y productores gestionan la biodiversidad agrícola, actuando como custodios de la tierra y de los recursos naturales y como administradores de la biodiversidad, con el objetivo de preservar los recursos para las generaciones futuras, convirtiéndose en aliados en los esfuerzos globales para administrar mejor la biodiversidad.",
                "observaciones": "Día internacional de la diversidad biológica."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Superintendencia Nacional de los Registros Públicos (Sunarp).",
                "titulo": "Guía general para la inscripción de actos de las organizaciones de usuarios de agua.",
                "referencia": "2018. Lima: Superintendencia Nacional de los Registros Públicos (Sunarp). 142 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/3020",
                "resumen_comentario": "Brinda a los usuarios de agua, una herramienta que facilita la inscripción de los actos que soliciten al Registro; describe los requisitos registrales, así como los formatos y modelos con textos útiles; y muestra las principales normas aprobadas desde 2014 hasta la actualidad, que conforman el marco legal vigente.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Tuppia, Pilar; Verano, José; Angulo, Enrique y Gálvez, Modesto.",
                "titulo": "Guía metodológica para la construcción de reservorios artesanales, zanjas y abrevaderos.",
                "referencia": "2018. Ministerio de Agricultura y Riego. Lima: Servicio Nacional Forestal y de Fauna Silvestre (Serfor). 29 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4399/ANA0002909.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Guía para acondicionar fuentes de agua para el manejo de vicuñas en la sierra altoandina, construyendo infraestructura para la captación, conservación y manejo del agua, así como su implementación, asistencia técnica y adiestramiento a los beneficiarios.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vargas Espejo, Víctor; Vargas Machuca Guerrero, Elizabeth; Cabrera Amaro, Natalia; Guerrero Ciprian, Karen y Talavera Morales, José.",
                "titulo": "Estudio de desarrollo territorial: Perú 2016.",
                "referencia": "2016. Organización para la Cooperación y el Desarrollo Económicos (Ocde). Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 16 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2016/07/OECD-Territorial-Review-04-11.pdf",
                "resumen_comentario": "Plantea desarrollar un enfoque más estratégico de las inversiones en los factores que favorecen el crecimiento de la productividad, como las competencias laborales, innovación, infraestructura y entorno empresarial. Ello requiere un enfoque integral que aborde el desarrollo de las ciudades y las zonas rurales, teniendo en cuenta las particularidades locales, bajo un enfoque de abajo hacia arriba (bottom-up) en las políticas públicas, adaptando las inversiones a las necesidades regionales.",
                "observaciones": "Extracto de OECD Territorial Reviews. Perú, 2016. Publicado por Ocde en octubre 2016."
            },
            {
                "eje_estrategico": "Primer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zegarra Méndez, Eduardo.",
                "titulo": "Economía del agua: Conceptos y aplicaciones para una mejor gestión.",
                "referencia": "2014. Centro Internacional de Investigaciones para el Desarrollo (CIID), Canadá. Lima: Grupo de Análisis para el Desarrollo (Grade). 224 pp.",
                "link": "http://www.grade.org.pe/wp-content/uploads/LIBROGRADEECONOMIAAGUA.pdf",
                "resumen_comentario": "Aplica los conceptos económicos al agua, reconociendo que se trata de un «bien económico especial», y que instrumentos económicos como las tarifas, os pagos por retribuciones por uso, derechos y transacciones condicionadas de agua pueden generar un uso eficiente, equitativo y sostenible del recurso si están adecuadamente estructurados y se basan en un soporte social e institucional apropiado."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alimonda, Héctor; Toro Pérez, Catalina y Martín, Facundo. (Coordinadores)",
                "titulo": "Ecología política latinoamericana : Pensamiento crítico, diferencia latinoamericana y rearticulación epistémica.",
                "referencia": "2017. Universidad Autónoma Metropolitana, México; Agencia Sueca de Desarrollo Internacional (Asdi). Buenos Aires: Consejo Latinoamericano de Ciencias Sociales (Clacso). 448 pp.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/gt/20171030111951/GT_Ecologia_politica_Tomo_I.pdf",
                "resumen_comentario": "Presenta el debate epistemológico de la ecología política latinoamericana, que se entronca con la práctica teórica, política y territorial que ha caracterizado a la región. Propone fortalecer un diálogo constructivo de saberes entre la academia y los movimientos sociales, especialmente los de base territorial campesina e indígena, que están haciendo aportes a la comprensión de estas dinámicas."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Asociación Interétnica de Desarrollo de la Selva Peruana (Aidesep).",
                "titulo": "Estrategia climática de Aidesep.",
                "referencia": "2016. Rainforest Foundation Norway (RFN). Lima: Asociación Interétnica de Desarrollo de la Selva Peruana (Aidesep). 52 pp.",
                "link": "http://aidesep.org.pe/sites/default/files/media/documento/Estrategias%20Clima%CC%81ticas_0.pdf",
                "resumen_comentario": "Resumen de los componentes de la estrategia de Aidesep en lo relativo a extractivismo, reforestación, fondos climáticos, salvaguardas, reducción de GEI, RIA, derechos territoriales, género, vigilancia, compromisos, políticas públicas, y acciones de mitigación y adaptación al cambio climático; entendida como un proceso dinámico e interrelacionado con la acción estatal y de la CMNUCC."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alavez Ruiz, Aleida.",
                "titulo": "Interculturalidad: Conceptos, alcances y derecho.",
                "referencia": "2014. México: Ediciones Mesa Directiva. Cámara de Diputados. 301 pp.",
                "link": "https://cpalsocial.org/documentos/568.pdf",
                "resumen_comentario": "Incursiona en la construcción histórica del concepto de interculturalidad y, una vez ubicado el marco teórico, aborda medidas que propician el diálogo y las relaciones interculturales. Trata los aspectos en que se debe construir y ejercer una gobernabilidad adecuada, en un marco de democracia y búsqueda de la equidad social."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Álvarez-Calderón Gallo, Diana.",
                "titulo": "Diálogo intercultural: Pautas para un mejor diálogo en contextos de diversidad intercultural.",
                "referencia": "2015. Ministerio de Cultura, Lima, Perú. 46 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/DIALOGO%20INTERCULTURAL%20-%20A5.pdf",
                "resumen_comentario": "Brinda pautas para que entidades públicas y sus servidores puedan entablar diálogos basados en el respeto y la equidad en contextos de diversidad cultural."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Anaya, James.",
                "titulo": "Las industrias extractivas y los pueblos indígenas.",
                "referencia": "2013. Consejo de Derechos Humanos, Asamblea General de las Naciones Unidas (ONU). 29 pp.",
                "link": "https://www.acnur.org/fileadmin/Documentos/BDL/2015/10177.pdf",
                "resumen_comentario": "Se ocupa de los derechos humanos de los pueblos indígenas en relación con las industrias extractivas y las normas internacionales. Plantea observaciones y recomendaciones que señalan nuevos modelos de extracción de recursos que serían compatibles con las normas internacionales y propicios a la realización de los derechos de los pueblos indígenas.",
                "observaciones": "Informe del Relator Especial sobre los derechos de los pueblos indígenas."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Araujo Raurau, Ana Lucía.",
                "titulo": "El impacto de la expansión de la agricultura comercial en la gobernanza y gestión indígena de la tierra.",
                "referencia": "2019. Centro Peruano de Estudios Sociales (Cepes); Consorcio de Investigación Económica y Social (Cies). 144 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2020/07/el_impacto_de_la_expansion_de_la_agricultura_comercial_en_la_gobernanza_y_gestion_indigena_de_la_tierra-1.pdf",
                "resumen_comentario": "Examina la crisis de la economía de subsistencia indígena y los cambios en las dinámicas de gobernanza y gestión de la tierra, debido a la expansión de la agricultura comercial, así como la reconfiguración del poder económico a nivel local, los cambios en la lógica de distribución de la tierra y las relaciones de género en la organización económica de la comunidad y las familias.",
                "observaciones": "Investigación. Informe final."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Asociación Interétnica de Desarrollo de la Selva Peruana (Aidesep).",
                "titulo": "Guía metodológica para la operatividad de Redd+ indígena amazónico.",
                "referencia": "s/f. WWF Perú. Lima: Asociación Interétnica de Desarrollo de la Selva Peruana (Aidesep). 54 pp.",
                "link": "http://www.aidesep.org.pe/sites/default/files/media/documento/Gui%CC%81a%20RIA%20Peru%20%28ESP%29_1.pdf",
                "resumen_comentario": "Detalla el marco conceptual de la Redd+ Indígena Amazónico (Ria), propuesta de adecuación de la política internacional y nacional de REDD+ a la cosmovisión, derechos y propuestas de los pueblos indígenas de la Amazonia, así como los procesos, acciones y actividades para su implementación a escala territorial.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Banco Mundial.",
                "titulo": "Latinoamérica indígena en el siglo XXI: Primera década.",
                "referencia": "2015. Washington, D.C.: Banco Mundial. 120 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Latinoamerica-indigena-primera-decada.pdf",
                "resumen_comentario": "La primera década del milenio dejó a los pueblos indígenas de la región, por un lado, con beneficios notables, como la ampliación sin precedentes de su capacidad para decidir qué tipo de futuro desean colectivamente, y por otro, de persistente exclusión, que todavía limita su capacidad para beneficiarse del Estado sin renunciar a sus culturas e identidades. Sin embargo, ha acumulado experiencia para afrontar los desafíos e impulsar la inclusión de los pueblos indígenas hacia una sociedad justa y equitativa."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bernal Chávez, Andrea; Rodríguez Pajares, Héctor y García Blasco, Beatriz.",
                "titulo": "¿Cómo podemos defender nuestros derechos? Manual de normas jurídicas para la protección de los territorios y recursos naturales de los pueblos indígenas.",
                "referencia": "2019. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 60 pp.",
                "link": "https://www.caaap.org.pe/2020/07/14/como-podemos-defender-nuestros-derechos/",
                "resumen_comentario": "Busca contribuir con la formación de dirigentes y líderes de comunidades y  organizaciones indígenas para la protección de sus derechos colectivos en relación, tanto al aprovechamiento de los recursos naturales, como a la promoción y ejecución de actividades por parte del Estado y de empresas privadas en sus territorios."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Biffi Isla, Valeria.",
                "titulo": "Buenas prácticas interculturales en la gestión pública: Experiencias 2014 – 2015.",
                "referencia": "2016. Lima: Ministerio de Cultura. 130 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Libro-BPI-2014-2015.pdf",
                "resumen_comentario": "Presenta las características, impacto social, lecciones aprendidas y dificultades en la implementación de las buenas prácticas interculturales, que adecúan su diseño a las particularidades culturales del grupo social al que dirigen sus servicios, valoran las identidades culturales y fomentan el diálogo intercultural para el ejercicio de la ciudadanía.",
                "observaciones": "Concurso Buenas prácticas interculturales en la gestión pública: La diversidad es lo nuestro."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Blouin, Cécile; Jave, Iris; Hurtado, Eduardo; Jáuregui, Ariana y Vargas, Génesis.",
                "titulo": "Estudio sobre el perfil socio económico de la población venezolana y sus comunidades de acogida: Una mirada hacia la inclusión.",
                "referencia": "2019. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP). Lima: Fundación Panamericana para el Desarrollo (Padf). 88 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/08/02195731/estudio-final-.pdf",
                "resumen_comentario": "Capta las percepciones que la población migrante venezolana, así como la población peruana receptora, tienen sobre el proceso de inclusión e integración social, económica y cultural que se ha venido llevando a cabo en los últimos años, para ayudar a focalizar con mayor precisión futuras intervenciones de asistencia local o de búsqueda de políticas públicas inclusivas.",
                "observaciones": "Investigación realizada en 9 distritos de Lima y 2 distritos de Tumbes."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Carrasco, Noelia.",
                "titulo": "Miradas decoloniales, interculturales y ecología política en la gobernanza de territorios.",
                "referencia": "2020. Universidad del Zulia. En: Utopía y Praxis Latinoamericana. Revista internacional de filosofía y teoría social. Año 25, N° 88. Maracaibo: Centro de Estudios Sociológicos y Antropológicos (Cesa). 9 pp.",
                "link": "https://www.redalyc.org/jatsRepo/279/27962172003/html/index.html",
                "resumen_comentario": "Los procesos de gobernanza de territorios exigen comprender sus vocaciones productivas y condiciones de diversidad. Reflexión desde una perspectiva decolonial, intercultural y ecológico política sobre gobernanza de aguas en territorios en los que conviven el capitalismo transnacional con la economía y cultura campesina e indígena, en el monocultivo forestal, donde cotidianamente se dialoga y negocia una comprensión múltiple en torno al agua.",
                "observaciones": "Artículo. Casos de las regiones de Biobío y Ñuble, en el centro sur de Chile."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Castillo Fernández, Marlene.",
                "titulo": "Defender y cuidar los territorios, la naturaleza y nuestros pueblos indígenas amazónicos andinos: Por una Amazonía del Buen Vivir.",
                "referencia": "2017. Fórum Solidaridad Perú. 62 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/DOCUMENTO%20S%C3%8DNTESIS%20APORTES%20VIII%20FOSPA%20-Marlene.pdf",
                "resumen_comentario": "Integra las propuestas y aportes del VIII Foro Social Panamazónico, con el fin de visibilizar, comunicar y colocar en la agenda de los movimientos sociales, la opinión pública y las políticas de Estado, los temas de territorio y territorialidad, y cuidado y tratamiento de los bienes de la naturaleza amazónico-andina, desde el enfoque del Buen Vivir.",
                "observaciones": "VIII Foro Social Panamazónico, realizado del 28 de abril al 1 de mayo del 2017 en Tarapoto, Perú."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Amazónico de Antropología y Aplicación Práctica (Caaap).",
                "titulo": "Aportes a la construcción de una educación intercultural: Propuesta educativa del Caaap.",
                "referencia": "2015. Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 22 pp.",
                "link": "https://www.caaap.org.pe/wp-content/uploads/2015/08/CAAAP-Propuesta-Educativa-Jul15-P.57.pdf",
                "resumen_comentario": "Cuestiona a la escuela tradicional que reproduce y legitima la cultura dominante y al Estado que impone la homogenización cultural, y propugna cambios para el reconocimiento de la dignidad de hombres y mujeres, incluyendo sus diferencias culturales. El reto sigue siendo incorporar la pluralidad cultural del país y el derecho a una educación bilingüe intercultural reconocidos en la Constitución y las leyes.",
                "observaciones": "Propuesta institucional."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Amazónico de Antropología y Aplicación Práctica (Caaap).",
                "titulo": "Gestión pública e interculturalidad",
                "referencia": "2016. Agencia Española de Cooperación Internacional (Aecid). Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 60 pp. ",
                "link": "https://www.caaap.org.pe/2017/documentos/Gestion-Publica-e-Interculturalidad-caaap.pdf",
                "resumen_comentario": "Trata sobre los enfoques del desarrollo, desde el que es visto sólo como crecimiento económico hasta el desarrollo humano, así como las dimensiones del desarrollo desde los derechos humanos, interculturalidad, género y ambiente, incluyendo la gestión pública con enfoque intercultural. Concluye abordando los conceptos del desarrollo sostenible y el Buen Vivir."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Amazónico de Antropología y Aplicación Práctica (Caaap).",
                "titulo": "Una historia para ser contada: La búsqueda de justicia y vida digna.",
                "referencia": "2016. Coordinadora Nacional de Derechos Humanos (CNDDHH); Agencia Española de Cooperación Internacional para el Desarrollo (Aecid). Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 56 pp.",
                "link": "https://www.caaap.org.pe/2017/documentos/Una-historia-para-ser-contada-CAAAP.pdf",
                "resumen_comentario": "Reflexiona respecto a la importancia de la identidad étnico cultural de los adolescentes, y el reconocimiento, valoración e interacción respetuosa con la diversidad, así como de su ejercicio ciudadano en la escuela, sus comunidades y el país; a través de actividades de aprendizaje sobre los siguientes temas: Todos hacemos la historia; los pueblos indígenas tienen derechos; y vivir sin discriminación.",
                "observaciones": "Guía pedagógica para docentes de secundaria."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Corte Interamericana de Derechos Humanos (CIDH).",
                "titulo": "Amicus Curiae: Estándares internacionales y jurisprudencia comparada sobre demarcación de territorios indígenas y Derechos Económicos, Sociales, Culturales y Ambientales.",
                "referencia": "2019. Fundación para el Debido Proceso (DPLF); Human Rights Research and Education Centre, University of Ottawa; Núcleo de Estudios en Sistemas Internacionales de Derechos Humanos, Universidad Federal de Paraná; Clínica Internacional de Derechos Humanos de la Universidad de Guadalajara; O’Neill Institute for National and Global Health Law, Georgetown University Law Center. Lima: Instituto de Democracia y Derechos Humanos, Pontificia Universidad Católica del Perú (IDEHPUCP). 53 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/04/02201731/amicus_curiae_caso_lhaka_honhat_y_otros_vs-_argentina.pdf",
                "resumen_comentario": "Las comunidades indígenas afectadas acuden a la Corte con el objetivo de lograr el reconocimiento de su propiedad territorial bajo un título común e indiviso para todas las comunidades, reclamo vinculado con la demanda de mantener sus formas de vida y relación con la naturaleza según su cultura. Estas comunidades carecen de título de propiedad y tienen la condición de ocupantes de hecho del territorio que han habitado ancestralmente. Se declara la responsabilidad internacional del Estado argentino por el retardo en la demarcación y ausencia de titulación definitiva del territorio de las comunidades indígenas, y se establece medidas de reparación.",
                "observaciones": "Caso de las comunidades indígenas miembros de la Asociación Lhaka Honhat (Nuestra Tierra)."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Correa Aste, Norma.",
                "titulo": "Iniciativas públicas y privadas a favor de la pobreza rural indígena y afrodescendiente en América Latina: Balance y perspectivas.",
                "referencia": "2018. Lima: Instituto de Estudios Peruanos (IEP). 51 pp.",
                "link": "https://repositorio.iep.org.pe/bitstream/IEP/1145/1/Norma-Correa_Iniciativas-publicas-privadas-reduccion-pobreza-America-Latina.pdf",
                "resumen_comentario": "Uno de los desafíos de las políticas públicas en América Latina es la persistencia de la pobreza indígena y afrodescendiente. Ofrece un balance de las iniciativas públicas y privadas para la superación de la pobreza rural indígena y afrodescendiente en la región, centrándose en la protección social, la inclusión económica y el emprendimiento, y propone una agenda de innovación en políticas públicas para los grupos étnicos, adaptando la oferta de servicios y programas al contexto sociocultural."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cruz Pérez, Miguel Alejandro.",
                "titulo": "Cosmovisión andina e interculturalidad.",
                "referencia": "2018. En: Chakiñan, Revista de Ciencias Sociales y Humanidades N° 5. Ecuador. 14 pp.",
                "link": "https://dialnet.unirioja.es/servlet/articulo?codigo=6521988",
                "resumen_comentario": "Analiza la cosmovisión andina y la interculturalidad como fuente para promover el desarrollo sostenible desde el sumak kawsay, y la visión del mundo y la naturaleza, con una representación igualitaria y mutua en la relación de las personas entre sí, como parte del ecosistema vivo y el ámbito natural. Concluye que el progreso, desde la perspectiva de la cosmovisión andina, no es armónico con el patrimonio material, como sucede en el sistema globalizado.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cuentas Robles, Manuel D.",
                "titulo": "Los pueblos indígenas: Agentes de cambio para la mitigación del cambio climático y adaptación a sus efectos.",
                "referencia": "2020. Ponencia en conversatorio “Impactos que produce el cambio climático en los recursos hídricos y sus consecuencias para la vida”. En: Autoridad Nacional del Agua (ANA). 20 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/4524/ANA0003024.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Aborda el cambio climático, sus causas, consecuencias y efectos en los pueblos indígenas, así como la problemática de este colectivo ante este fenómeno. Señala, además, que para una acción climática exitosa, los pueblos indígenas deben ser considerados agentes de cambio.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "De Sousa Santos, Boaventura.",
                "titulo": "Descolonizar el saber, reinventar el poder.",
                "referencia": "2003. Universidad de la República, Comisión Sectorial de Extensión y Actividades en el Medio (Cseam). Montevideo: Ediciones Trilce. 113 pp.",
                "link": "http://www.boaventuradesousasantos.pt/media/Descolonizar%20el%20saber_final%20-%20C%C3%B3pia.pdf",
                "resumen_comentario": "Busca identificar construcciones teóricas surgidas de los movimientos sociales en varios continentes, y analiza el pensamiento dominante construido a partir de las necesidades de la dominación capitalista y colonial, y propone combatirlo con una “epistemología basada en la ecología de saberes” y en la “traducción intercultural”, planteando una reformulación de la lucha por los derechos humanos desde una concepción intercultural."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Enríquez Gómez, Bladimir Alexander.",
                "titulo": "La gobernanza en un escenario intercultural y plurinacional: El caso de la gestión pública del Gobierno Autónomo Descentralizado municipal de Otavalo-Ecuador, 2014-2016.",
                "referencia": "2017. Medellín: Universidad Eafit. 36 pp.",
                "link": "https://repository.eafit.edu.co/handle/10784/11490",
                "resumen_comentario": "Muestra las limitaciones de la gobernanza en la gestión pública intercultural, fruto de la escasa cultura administrativa de autoridades y funcionarios municipales en los asuntos interculturales; la presencia de brechas en la “eficacia simbólica del derecho”; y la ausencia de participación ciudadana en los procesos de decisión. Propone un modelo de gobernanza en red, que direccione la gestión pública en materia intercultural, mediante la cooperación para el desarrollo de políticas de interculturalidad.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Faúndez, Alejandra y Weinstein, Marisa.",
                "titulo": "Ampliando la mirada: La integración de los enfoques de género, interculturalidad y derechos humanos.",
                "referencia": "2012. Fondo de Población de las Naciones Unidas (UNFPA); Programa de las Naciones Unidas para el Desarrollo (PNUD); Fondo de las Naciones Unidas para la Infancia (Unicef). Santiago de Chile: Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (ONU Mujeres). 116 pp.",
                "link": "https://www.onu.org.mx/wp-content/uploads/2015/11/AmpliandolaMirada.pdf",
                "resumen_comentario": "Articular estos enfoques en América Latina y el Caribe da respuestas a los derechos de las mujeres y las niñas, los pueblos indígenas, poblaciones afrodescendientes y otros grupos en exclusión, marginalidad y desventaja, que históricamente han sido privados de los recursos y la protección de sus derechos. Se debe armonizar sus derechos colectivos e individuales a fin de que hombres y mujeres, en función de su género y etapa del ciclo vital, logren el desarrollo humano.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Feiring, Birgitte.",
                "titulo": "Comprender el Convenio sobre pueblos indígenas y tribales, 1989 (núm. 169).",
                "referencia": "2013. Oficina Internacional del Trabajo, Departamento de Normas Internacionales del Trabajo. Ginebra: OIT. 60 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---ed_norm/---normes/documents/publication/wcms_205230.pdf",
                "resumen_comentario": "Busca responder algunas preguntas sobre el Convenio 169 y, en especial, el propósito, alcance y aplicación práctica del derecho a la consulta. Los pueblos indígenas no pueden invocar directamente el Convenio ante los órganos de control de la OIT, sino a través de los mandantes tripartitos. Asimismo, apoya la aplicación de los derechos de los pueblos indígenas, a comprender su papel para dar efecto al Convenio, y asistir a las empresas para que se apoyen en el Convenio ante las oportunidades de inversión.",
                "observaciones": "Manual para los mandantes tripartitos de la OIT."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Feiring, Birgitte.",
                "titulo": "Los derechos de los pueblos indígenas y tribales en la práctica: Una guía sobre el convenio núm. 169 de la OIT.",
                "referencia": "2009. Organización Internacional del Trabajo (OIT). Ginebra: OIT. 201 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_126163.pdf",
                "resumen_comentario": "Busca aportar a los gobiernos y a las organizaciones de pueblos indígenas y tribales y de trabajadores y empleadores, una herramienta práctica para la implementación de los derechos de las comunidades y los pueblos indígenas, sobre la base de experiencias, buenas prácticas y lecciones aprendidas.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fundación Ecuménica para el Desarrollo y la Paz (Fedepaz).",
                "titulo": "Un río de esperanzas: Situación de las comunidades awajún de San Ignacio, Cajamarca.",
                "referencia": "2015. Observatorio de Conflictos Mineros en el Perú; Terre des Hommes France. Lima: Fundación Ecuménica para el Desarrollo y la Paz (Fedepaz). 10 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Informe%20un%20rio%20de%20esperanzas%20-%20fedepaz.pdf",
                "resumen_comentario": "Muestra la presencia de la minería en las comunidades nativas de Supayaku y Naranjos en territorio awajún, cuya actividad de exploración ha causado impacto y contaminación en la tierra, el agua y la flora y fauna, vulnerando sus derechos a la consulta previa, la salud, la seguridad alimentaria y un ambiente sano, y generando conflictos entre las propias comunidades.",
                "observaciones": "Informe 2015."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "García-Cobián Castro, Erika; Paliza Flores, Maritza; Pilares Salazar, Carmen y Santivañéz Anto, Gisela.",
                "titulo": "Guía metodológica de transversalización del enfoque de interculturalidad en programas y proyectos del sector gobernabilidad, a partir de la experiencia del Programa “Buen Gobierno y Reforma del Estado” del Perú.",
                "referencia": "2013. Editorial. Lima: Deutsche Gesellschaft für Internationale Zusammenarbeitl (Giz). 64 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Guia%20metodologica%20de%20transversalizacion%20del%20enfoque%20de%20interculturalidad.pdf",
                "resumen_comentario": "Tiene el propósito de orientar la incorporación del enfoque intercultural en las políticas y las reformas del Estado. En este sentido, apoya a la gobernabilidad y a la gestión pública de los tres niveles de gobierno en la reducción de los índices de pobreza y marginación, mediante diversas líneas de trabajo que incidan en la mejora del acceso a los servicios públicos de los grupos más vulnerables de la población, tomando en cuenta positivamente la diversidad cultural.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "González Ibarra, Miguel Rodrigo.",
                "titulo": "Gobernanza intercultural y ciudadanía política en Pátzcuaro, Michoacán, México.",
                "referencia": "2019. Universidade Federal do Oeste do Pará. En: Revista Exitus, Vol. 9, N° 4. 30 pp.",
                "link": "http://ufopa.edu.br/portaldeperiodicos/index.php/revistaexitus/article/view/1035/0",
                "resumen_comentario": "Analiza la importancia de la ciudadanía y la gobernanza intercultural en los procesos de gobierno y construcción de políticas públicas locales; de qué forma se concibe la ciudadanía activa a través de la participación solidaria; y el aporte del Consejo Ciudadano de la Región Lacustre de Pátzcuaro, en la construcción de ciudadanía política y gobernanza intercultural.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Halla, Marcio.",
                "titulo": "Gobernanza territorial indígena en América Latina.",
                "referencia": "2018. Consorcio de Apoyo a Pueblos Indígenas, Comunidades Locales y Bosques; Usaid. Forest trends. 119 pp.",
                "link": "https://www.forest-trends.org/wp-content/uploads/2019/05/Livro-23alt_16largESP1.pdf",
                "resumen_comentario": "Presenta diversas perspectivas sobre los temas clave de la gobernanza territorial indígena en América Latina, fruto de las reflexiones y aprendizajes acumulados por organizaciones indígenas y ONGs, que han compartido entre sus líderes y equipos técnicos a lo largo de procesos de formación y capacitación e intercambio de experiencias."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hallazi Méndez, Luis A. y Bravo Valencia, Juliana. (Coordinadores)",
                "titulo": "Informe alternativo 2018: Cumplimiento de las obligaciones del Estado peruano del Convenio 169 de la OIT.",
                "referencia": "2018. Grupo de Trabajo sobre Pueblos Indígenas de la Coordinadora Nacional de Derechos Humanos (CNDH). 76 pp.",
                "link": "http://derechoshumanos.pe/wp-content/uploads/2018/10/Informe_Alternativo_2018.pdf",
                "resumen_comentario": "Frente a la memoria del Estado peruano sobre la implementación del Convenio 169 de la OIT, visibiliza la situación de los pueblos indígenas, ya que, pese a las obligaciones del Convenio, tratados internacionales y normas locales, se siguen violando los derechos humanos de las poblaciones autóctonas. Presenta información y recomendaciones sobre los derechos territoriales y la consulta previa, así como de la salud, la educación y la justicia intercultural, entre otros.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Huamaní, Giselle y Villapolo, Leslie.",
                "titulo": "Manual de mediación intercultural.",
                "referencia": "2016. Coordinación Nacional de Intérpretes y Traductores en Lenguas Indígenas. Lima: Cooperación Alemana (Giz). 107 pp.",
                "link": "https://cpalsocial.org/documentos/778.pdf",
                "resumen_comentario": "Está dirigido a los intérpretes de lenguas originarias y a mediadores culturales. Propone posibles intervenciones de los traductores e intérpretes, tanto durante la prestación intercultural de un servicio público, como durante la mediación intercultural en conflictos sociales.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Huber, Ludwig.",
                "titulo": "Ensayando identidades: Estado e indígenas en el Perú contemporáneo.",
                "referencia": "2019. Instituto de Estudios Peruanos (IEP). En: Revista Argumentos, Edición N° 1, Año 13. 8 pp.",
                "link": "http://argumentos-historico.iep.org.pe/wp-content/uploads/2019/05/Huber-L.-2019-Ensayando-identidades.-Estado-e-ind%c3%adgenas-en-Per%c3%ba-contempor%c3%a1neo.pdf",
                "resumen_comentario": "Explora la construcción social de identidades étnicas en el Perú; en particular, indaga sobre la categoría de «pueblos indígenas», partiendo de la premisa que el actor decisivo en la construcción de esos «pueblos» es el Estado. Visita Cañaris, al norte de Perú, y examina la Ley de Consulta Previa, la Base de Datos de Pueblos Indígenas (BDPI) del Viceministerio de Interculturalidad, y los criterios para elegir una identificación étnica del Censo Nacional de 2017.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP).",
                "titulo": "Avances y retos en materia de derechos de los pueblos indígenas y tribales: Reflexiones del Primer Conversatorio en Jurisprudencia Interamericana.",
                "referencia": "2017. Pontificia Universidad Católica del Perú (PUCP); Konrad-Adenauer-Stiftung e. V. (KAS). Lima: Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP). 33 pp.",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/110620/avances-y-retos-jurisprudencia-interamericana.pdf?sequence=5&isAllowed=y",
                "resumen_comentario": "Balance de las decisiones adoptadas por la Comisión y la Corte Interamericana, con miras a enriquecer y orientar positivamente sus futuros pronunciamientos, a partir de la amplia jurisprudencia producida en materia de derechos indígenas por ambas instituciones, y la diversidad de desafíos que enfrentan los pueblos indígenas y tribales en el continente.",
                "observaciones": "Primer Conversatorio en Jurisprudencia Interamericana."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP).",
                "titulo": "Gobernanza Intercultural: Construyendo ciudadanía desde el fortalecimiento de capacidades y la incidencia en líderes indígenas amazónicos.",
                "referencia": "2019. Bischöfliches Hilfswerk Misereor e. V. Lima: Pontificia Universidad Católica del Perú (PUCP). 20 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/04/05160140/sistematizacion-misereor.pdf",
                "resumen_comentario": "Es importante la formación de líderes indígenas a fin de dotarles de información sobre el funcionamiento del Estado y de herramientas para la participación política, sobre la base de una estrategia pedagógica basada en el interaprendizaje y el diálogo intercultural que rompa con los estereotipos y permita una deliberación política inclusiva que apunte a construir ciudadanía intercultural.",
                "observaciones": "Documento de sistematización de proyecto."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP).",
                "titulo": "Informe alternativo sobre Perú para el Comité para la Eliminación de la Discriminación Racial: Situación de los derechos de los pueblos indígenas.",
                "referencia": "2018. Instituto del Bien Común (IBC); EarthRights Internacional (ERI); Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP). 15 pp.",
                "link": "http://cdn01.pucp.education/idehpucp/wp-content/uploads/2018/04/03164642/informe-cerd-pueblos-indigenas-peru-.pdf",
                "resumen_comentario": "Aborda aspectos de la información estadística disponible y el derecho a la identidad, la tierra y el territorio de los pueblos indígenas, el derecho a la consulta previa, la especial situación de los pueblos indígenas en aislamiento voluntario o contacto inicial (PIACI), la administración de justicia, y el derecho a la educación, incluyendo la normativa vigente, documentos de la sociedad civil, así como solicitudes de acceso a la información pública a entidades estatales con base en la Ley de Transparencia y Acceso a la Información Pública, Ley Nº 278063.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jaspers Faijer, Dirk; Del Popolo, Fabiana; Cunningham, Mirna y Rivera Zea, Tarcila. (Coordinadores)",
                "titulo": "Los pueblos indígenas en América Latina: Avances en el último decenio y retos pendientes para la garantía de sus derechos.",
                "referencia": "2014. Centro Latinoamericano y Caribeño de Demografía (Celade), División de Población de la Comisión Económica para América Latina y el Caribe (Cepal); Fundación Ford. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 410 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/37222/1/S1420521_es.pdf",
                "resumen_comentario": "Contribuye a mostrar los logros de la región en los derechos de los pueblos indígenas, así como las dificultades y desafíos urgentes que se deben considerar en la implementación y seguimiento de la agenda para el desarrollo después de 2015. Rescata el aporte de los pueblos indígenas a la construcción de un nuevo paradigma del desarrollo y ofrece recomendaciones de política para transitar hacia la construcción de democracias pluriculturales."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jave, Iris y Uchuypoma, Diego.",
                "titulo": "Diagnóstico sobre experiencias de formación en los pueblos indígenas: Los casos de San Martín y Ucayali.",
                "referencia": "2017. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP); Bischöfliches Hilfswerk Misereor e. V. Lima: Pontificia Universidad Católica del Perú (PUCP). 66 pp.",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/110621/2017-Diagn%c3%b3stico%20sobre%20experiencias%20de%20formaci%c3%b3n%20en%20los%20pueblos%20ind%c3%adgenas.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Contiene una sistematización de las experiencias de formación en gobernanza e incidencia política de dos organizaciones indígenas amazónicas regionales: la Coordinadora de Pueblos Indígenas de San Martín (Codepisam) y la Organización Regional de Aidesep en Ucayali (Orau); así como un análisis de cuánto estas han aportado al ejercicio de la ciudadanía en la agenda pública regional y nacional de los pueblos indígenas.",
                "observaciones": "Los casos de la Codepisam (San Martín) y la Orau (Ucayali)."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jurado Nacional de Elecciones (JNE).",
                "titulo": "La interculturalidad en los planes de gobierno.",
                "referencia": "2018. Elecciones regionales y municipales 2018. Lima: Jurado Nacional de Elecciones (JNE). 10 pp. ",
                "link": "https://observaigualdad.jne.gob.pe/phone/pdfs/planes_gobierno/ReportePglimaINTERCULTURALIDAD.pdf",
                "resumen_comentario": "Revisa el eje de interculturalidad de los planes de gobierno de 21 partidos políticos aspirantes al Concejo Metropolitano de Lima en las elecciones regionales y municipales del año 2018, identificando su inclusión, problemática, alternativas y acciones concretas."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kaluf F., Cecilia.",
                "titulo": "Diversidad cultural: Materiales para la formación docente y el trabajo de aula.",
                "referencia": "2005. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco). Santiago de Chile: Oficina Regional de Educación de la Unesco para América Latina y el Caribe (Orealc). 522 pp.",
                "link": "https://unesdoc.unesco.org/ark:/48223/pf0000151226",
                "resumen_comentario": "Busca ayudar a transformar el pensamiento de los docentes y las prácticas educativas en torno a cómo se enfrenta la diversidad cultural en la escuela. Está dirigido a docentes y estudiantes de los distintos niveles de enseñanza y se compone de materiales teóricos y de actividades prácticas de apoyo a los profesores, que pueden ser adaptados a la realidad específica del aula, la escuela, la región o el país."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kogan, Liuba.",
                "titulo": "Enfoque intercultural: Aportes para la gestión pública.",
                "referencia": "2014. Lima: Ministerio de Cultura. 48 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/EnfoqueinterculturalAportesparalagestionpublica.pdf",
                "resumen_comentario": "Examina el Estado nacional en el marco de la diversidad cultural y la ciudadanía intercultural. Propone prácticas interculturales en la gestión pública en los planos normativo, ético y en la práctica cotidiana del servidor público; así como la integralidad, la transversalidad, la institucionalidad, el reconocimiento y la igualdad como requisitos de las políticas interculturales."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kumar Dhir, Rishabh; Cattaneo, Umberto; Cabrera Ormaza, María Victoria; Coronado, Hernán y Oelz, Martin.",
                "titulo": "Aplicación del Convenio sobre pueblos indígenas y tribales N° 169 de la OIT: Hacia un futuro inclusivo, sostenible y justo.",
                "referencia": "2020. Informe 2019. Berna: Organización Internacional del Trabajo (OIT). 160 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_735627.pdf",
                "resumen_comentario": "Presenta la situación socioeconómica de las mujeres y hombres indígenas, en aspectos como población, empleo, pobreza, así como los progresos en políticas públicas, particularmente en relación con instituciones, consulta y participación. Reconoce el papel fundamental del Convenio como marco para la justicia social y el desarrollo inclusivo y para realizar una acción climática significativa.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Landa Arroyo, César.",
                "titulo": "Derecho a la tierra y al territorio de los pueblos indígenas u originarios.",
                "referencia": "2020. Lima: Ministerio de Cultura, Perú. 162 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Derecho_a_la_tierra.pdf",
                "resumen_comentario": "Analiza el marco jurídico peruano que sustenta el reconocimiento de los 55 pueblos indígenas u originarios, 51 pueblos amazónicos y 4 andinos, con el objeto de proteger sus derechos a la tierra y al territorio, indispensables para su subsistencia, así como la historia y cultura subyacente, como punto de partida para la construcción de su identidad colectiva. También el derecho a la propiedad y personería jurídica de los pueblos indígenas, y al acceso y uso de recursos naturales."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lanegra, Iván.",
                "titulo": "La evaluación de la política pública de la consulta previa.",
                "referencia": "2017. En: Revista Argumentos, Edición N° 3, Año 11. Lima: Instituto de Estudios Peruanos (IEP). 7 pp.",
                "link": "http://argumentos-historico.iep.org.pe/wp-content/uploads/2018/01/LANEGRA-2018-Evaluaci%c3%b3n-de-la-pol%c3%adtica-p%c3%bablica-de-consulta-previa.pdf",
                "resumen_comentario": "Busca identificar los temas básicos para evaluar esta política –y la vigencia efectiva del derecho indígena–. Si bien son evidentes los logros alcanzados en la dimensión procedimental de los procesos de consulta tras la dación de la ley y el reglamento de consulta previa, no obstante, la asimetría de capacidades e información entre las partes –desfavorable para los pueblos indígenas– no ha permitido hasta hoy aprovechar al máximo la herramienta.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lerner Febres, Salomón y Giusti, Miguel (editores).",
                "titulo": "Postsecularización: Nuevos escenarios del encuentro entre culturas.",
                "referencia": "2017. Pontificia Universidad Católica del Perú (PUCP). Lima: Fondo Editorial PUCP. 404 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2018/03/19200837/postsecularizacion.pdf",
                "resumen_comentario": "Explora la identidad de comunidades intelectuales que conjugan la fe y la razón para aproximarse a la vivencia intercultural e interactúan en mundos distintos buscando lo uno en lo múltiple y viceversa, orientando la mirada a las realidades políticas y económicas empíricas, para proponer una convivencia y un orden ético.",
                "observaciones": "Actas del Tercer Congreso Regional Latinoamericano de Comiucap. Disponible sólo fragmento."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Leyva, Ana.",
                "titulo": "Consúltame de verdad: Aproximación a un balance sobre consulta previa en el Perú en los sectores minero e hidrocarburífero.",
                "referencia": "2018. Acción Solidaria para el Desarrollo (CooperAcción). Lima: Oxfam América. 78 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/17072%20Consultame%20la%20verdad%20web.pdf",
                "resumen_comentario": "Se evalúa lo conseguido durante la implementación de la consulta previa en el Perú, principalmente en las actividades minera e hidrocarburífera, experiencias que todavía producen insatisfacción en los pueblos indígenas, más aún si están vinculadas con el territorio y sus recursos. Hay que repensar el marco legal de consulta previa y las limitantes en las normas sectoriales."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "López, Luis Enrique.",
                "titulo": "Interculturalidad, educación y ciudadanía: Perspectivas latinoamericanas.",
                "referencia": "2009. Funproeib Andes. La Paz: Ediciones Plural. 500 pp.",
                "link": "http://www.funproeibandes.org/wp-content/uploads/2018/12/inter_edu_cuidadania.pdf",
                "resumen_comentario": "Reflexiona sobre lo que en el campo educativo acontecía en América Latina, a raíz de la impronta que en la región habían tenido los movimientos indígenas, buscando nexos entre la educación, cultura y política, hacia el proceso de interculturalización del sistema educativo y del conjunto de la sociedad."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "López Chegne, Sara.",
                "titulo": "Análisis técnico de los resultados del Censo Agrario y valoración de los datos para políticas públicas futuras.",
                "referencia": "2014. Confederación Nacional Agraria (CNA); Fundación Ford. Proyecto “Llipinchis yupasunchis” Todos/as contamos: Visibilización de los pueblos indígenas del Perú”. 43 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/INFORME%20%20CENAGRO%20resumen.pdf",
                "resumen_comentario": "Propone un proceso de construcción participativa de conceptos y metodología para integrar el componente étnico y de diversidad cultural en la información oficial, las estadísticas y los censos, a fin de contribuir a la visibilización de los pueblos indígenas en las fuentes de datos que genera el Estado.",
                "observaciones": "Resumen."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Maron, Aimee; Bucheli, Brenda; Hidalgo, Jessica y Livschitz, Karina.",
                "titulo": "Seguridad jurídica en la tenencia de la tierra en la Iniciativa para la Conservación en la Amazonía Andina (ICAA): Lecciones aprendidas.",
                "referencia": "2016. Unidad de Apoyo de la Iniciativa para la Conservación en la Amazonía Andina (ICAA) de International Resources Group (IRG), Sociedad Peruana de Derecho Ambiental (SPDA), Corporación de Gestión y Derecho Ambiental (Ecolex), Social Impact (SI), Patrimonio Natural (PN) y Conservation Strategy Fund (CSF). Agencia de los Estados Unidos para el Desarrollo Internacional (USAID). Lima: Instituto de Ciencias de la Naturaleza, Territorio y Energías Renovables de la Pontificia Universidad Católica del Perú (Inte-PUCP). 62 pp.",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/54231/lecciones_seguridadjuridica.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Plantea la seguridad jurídica en la tenencia de la tierra y se exponen las lecciones identificadas en cuanto a la titulación y formalización de tenencia y uso de tierras, referidas a la facilitación de procesos de resolución de conflictos; el fortalecimiento del marco legal, que incluye la estrategia desarrollo de las políticas, leyes, acuerdos y regulaciones; y el fortalecimiento de capacidades para el manejo de conflictos y saneamiento, que incluye la estrategia capacitar a usuarios en el uso de instrumentos legales. Tal vez la lección más importante validada con este estudio es la que enfatiza que resolver la tenencia de la tierra es un aspecto fundamental en cualquier trabajo de conservación.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mato, Daniel. (Coordinador)",
                "titulo": "Educación superior y pueblos indígenas y afrodescendientes en América Latina: Normas, políticas y prácticas.",
                "referencia": "2012. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco). Caracas: Instituto Internacional para la Educación Superior en América Latina y el Caribe (Iesalc). 355 pp.",
                "link": "https://unesdoc.unesco.org/ark:/48223/pf0000216433",
                "resumen_comentario": "Expone cómo las políticas de educación superior de países de la región condicionan y dificultan el desarrollo de instituciones interculturales de educación superior (IIES) y de programas interculturales en instituciones «convencionales», analizando los contextos normativos, experiencias concretas y opiniones de actores significativos respecto de la situación en cada país."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "Ayacucho: Cartilla informativa sobre pueblos indígenas u originarios.",
                "referencia": "2020. Lima: Ministerio de Cultura, Perú. 2 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Cartilla%20Ayacucho%202020.pdf",
                "resumen_comentario": "Reúne información sobre la situación de los pueblos indígenas en la región Ayacucho, quechuas y ashaninkas. Detalla información sobre población, pobreza, acceso a servicios básicos, educación, consulta previa, servicios lingüísticos, autoidentificación étnica, entre otros. Además, presenta información sobre la situación de las mujeres indígenas, especialmente sobre tasa de fecundidad y violencia física y sexual.",
                "observaciones": "Cartilla informativa."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "¿Cómo somos? Diversidad cultural y lingüística del Perú.",
                "referencia": "2019. Lima: Ministerio de Cultura, Perú. 19 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Cartilla%20informativa%20AILI%2023.05.19.pdf",
                "resumen_comentario": "Presenta los resultados de las preguntas sobre autoidentificación étnica y lengua materna de los Censos Nacionales 2017. Considera elementos como lengua materna, costumbres y antepasados; además, presenta su ubicación geográfica e información básica sobre el tema.",
                "observaciones": "Cartilla informativa."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "El enfoque intercultural en la gestión pública.",
                "referencia": "s/f. Lima: Ministerio de Cultura, Perú. 19 pp.",
                "link": "https://sgp.pcm.gob.pe/wp-content/uploads/2016/06/07a-Patricia-Balbuena-Enfoque-Intercultural.pdf",
                "resumen_comentario": "Presenta, de manera didáctica, los ejes de la política intercultural del gobierno del Perú, para establecer los mecanismos de acción del Estado que garantizan el ejercicio de los derechos de la población, en especial de los pueblos indígenas y la población afroperuana, buscando la eliminación de la discriminación, reconociendo la diversidad cultural, y contribuyendo a la inclusión social y a la integración nacional.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "Memoria: Seminario internacional Del indigenismo a la interculturalidad.",
                "referencia": "2019. Ministerio de Cultura. Dirección Desconcentrada de Cultura de Cusco. 154 pp.",
                "link": "https://www.culturacusco.gob.pe/wp-content/uploads/2017/07/CONTENIDO-SEMINARIO-DEL-INDIGENISMO.pdf",
                "resumen_comentario": "Reflexiones que abordan temas del indigenismo y la interculturalidad, desde su aspecto histórico hasta la gestión y políticas públicas en el Perú. Hace un balance de lo avanzado y las tareas pendientes, de modo que se valore la diversidad como una condición para el desarrollo humano y la consolidación de la democracia.",
                "observaciones": "Memoria. Seminario internacional Del indigenismo a la interculturalidad. Cusco, octubre de 2018."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "Política nacional de lenguas originarias, tradición oral e interculturalidad.",
                "referencia": "2017. Ministerio de Cultura. En: Diario El Peruano, 10 de agosto de 2017. 31 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/politica-nacional-de-lenguas.pdf",
                "resumen_comentario": "Se aprueba la política nacional de obligatorio cumplimiento para los sectores e instituciones del Estado y niveles de gobierno, que tiene como objetivo garantizar los derechos lingüísticos de personas hablantes de lenguas indígenas u originarias en el Perú. Sus lineamientos generales están agrupados en los ejes de estatus, adquisición y desarrollo de lenguas indígenas u originarias.",
                "observaciones": "Decreto Supremo N° 005-2017-MC. 9 de agosto de 2017."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "¿Qué es la consulta previa?",
                "referencia": "S/f. Lima: Ministerio de Cultura, Perú. 19 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Queeslaconsultaprevia.pdf",
                "resumen_comentario": "Dirigida a los pueblos indígenas y sus organizaciones, presenta información sobre el marco normativo que respalda el derecho a la consulta previa y el rol del Ministerio de Cultura en la garantía de su ejercicio.",
                "observaciones": "Cartilla informativa."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Cultura.",
                "titulo": "Transversalización del enfoque intercultural en la gestión pública.",
                "referencia": "2016. Viceministerio de Interculturalidad. Huaraz, Ancash. 21 pp.",
                "link": "https://storage.servir.gob.pe/archivo/2016/interculturalidad/huaraz/Exposicion_TEI-HUARAZ-SERVIR.pdf",
                "resumen_comentario": "Presenta las políticas culturales y las competencias interculturales del país, con los enfoques y puntos de trabajo para fortalecer y desarrollar dichas políticas, poniendo énfasis en las referidas a la cultura en la gestión pública. ",
                "observaciones": "Presentación. "
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Justicia y Derechos Humanos.",
                "titulo": "Conociendo nuestros derechos y deberes.",
                "referencia": "2014. Ministerio de Justicia y Derechos Humanos; Unión Europea. Lima, Perú. 120 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Conociendo_nuestros_derechos_y_deberes_Material_de_orientacion_legal_intercultural.pdf",
                "resumen_comentario": "Documento de orientación legal, dirigido a dirigentes e integrantes de las comunidades nativas que se encuentran involucradas en algún conflicto o que en el futuro requieran información para plantear una queja, demanda o denuncia."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Morales, Cielo y Naser, Alejandra.",
                "titulo": "Panorama de la gestión pública en América Latina y el Caribe: Un gobierno abierto centrado en el ciudadano.",
                "referencia": "2018. Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes) de la Comisión Económica para América Latina y el Caribe (Cepal). Santiago de Chile: Cepal. 209 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/42396/4/S1701222_es.pdf",
                "resumen_comentario": "Muestra los instrumentos de gestión pública en los países de América Latina y el Caribe. Aborda la situación de la planificación, presupuesto, ejecución, seguimiento y evaluación de las políticas públicas. Examina el panorama de la gestión pública en la región, desde el paradigma del gobierno abierto, con la articulación de iniciativas de transparencia, rendición de cuentas, participación ciudadana y colaboración de actores para la producción de valor público."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nuguer, Victoria y Powell, Andrew. (Coordinadores)",
                "titulo": "La inclusión en tiempos de Covid -19.",
                "referencia": "2020. Banco Interamericano de Desarrollo (Bid). 102 pp.",
                "link": "https://publications.iadb.org/publications/spanish/document/La-inclusion-en-tiempos-de-COVID-19.pdf",
                "resumen_comentario": "América Latina y el Caribe ha avanzado en el aumento de ingresos, la inclusión y reducir la pobreza. Sin embargo, el crecimiento ha caído, frustrando a sectores empobrecidos y generando protestas. La pandemia de Covid-19 ha revertido parte de los progresos y amenaza con sumir a la región en disparidades aún mayores. Urgen políticas fiscal, financiera y monetaria, que muevan la actividad económica e impulsen oportunidades para los pobres, sobre todo rurales, así como abordar la desigualdad regional y el cambio climático."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Sistemas alimentarios y Covid-19 en América Latina y el Caribe: El rol de las medidas de protección social.",
                "referencia": "2020. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y Comisión Económica para América Latina (Cepal). Boletín Nº 7. Santiago: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "link": "http://www.fao.org/3/ca9435es/CA9435ES.pdf",
                "resumen_comentario": "Se analiza las alternativas de protección social existentes, con especial atención en las zonas rurales, en un momento en que, durante la pandemia, los recursos tienen que ser destinados a los principales afectados por esta crisis, la población vulnerable, en este caso las personas sin fuentes de ingreso (desempleados, ancianos, niños, niñas y dependientes), trabajadores informales e indígenas.",
                "observaciones": "Boletín."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Alianza con la sociedad civil.",
                "referencia": "2019. París: Unesco. 5 pp.",
                "link": "https://es.unesco.org/creativity/publications/sociedad-civil",
                "resumen_comentario": "La participación de la sociedad civil garantiza sistemas de gobernanza cultural sostenibles, para lo cual se requiere procesos participativos, recursos financieros, capacidades y redes de promoción.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Fondo Internacional para la Diversidad Cultural.",
                "referencia": "2018. París: Unesco. 3 pp.",
                "link": "https://es.unesco.org/creativity/publications/fondo-internacional-para-diversidad-cultural",
                "resumen_comentario": "El Fondo apoya el surgimiento de sectores culturales dinámicos en países en desarrollo, fortaleciendo la creación, producción, distribución y acceso a los bienes y servicios culturales.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Textos fundamentales de la Convención de 2005 sobre la protección y la promoción de la diversidad de expresiones culturales",
                "referencia": "2017. París: Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).146 pp.",
                "link": "https://unesdoc.unesco.org/ark:/48223/pf0000260710_spa.page=13",
                "resumen_comentario": "Norma los bienes y servicios culturales, que generan empleo y desarrollo, fomentando su acceso y promoviendo la reducción de las brechas culturales y digitales.",
                "observaciones": "Contiene la Convención y textos complementarios."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de los Estados Americanos (OEA).",
                "titulo": "Democracia y participación política de los pueblos indígenas.",
                "referencia": "2013. Washington D. C.: Organización de los Estados Americanos (OEA), Departamento de Derecho Internacional. 156 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Democracia%20y%20participacion%20politica%20de%20los%20pueblos%20indigenas.pdf",
                "resumen_comentario": "Presenta la participación de pueblos indígenas en el diseño institucional de la OEA, la importancia de la democracia y aspectos estratégicos en comunicación, y los desafíos de las mujeres indígenas en la participación política. Promueve la incorporación de los pueblos indígenas en la toma de decisiones en políticas públicas, así como la sensibilización de la población respecto a estas temáticas."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización Internacional del Trabajo (OIT).",
                "titulo": "Convenio Núm. 169 de la OIT sobre pueblos indígenas y tribales en países independientes: Declaración de las Naciones Unidas sobre los Derechos de los Pueblos Indígenas.",
                "referencia": "2014. Organización Internacional del Trabajo (OIT). Lima: OIT / Oficina Regional para América Latina y el Caribe. 134 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_345065.pdf",
                "resumen_comentario": "El Convenio establece el derecho de los pueblos indígenas a mantener y fortalecer sus culturas, formas de vida e instituciones, y a participar en las decisiones que les afectan. Igual garantiza su derecho a decidir sus prioridades en el desarrollo, en tanto afecte sus vidas, creencias, instituciones y bienestar espiritual, y a utilizar las tierras que ocupan, así como a controlar su desarrollo económico, social y cultural."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización Internacional del Trabajo (OIT).",
                "titulo": "Los pueblos indígenas en la mira: Objetivos de Desarrollo Sostenible.",
                "referencia": "s/f. Servicio de Género, Igualdad y Diversidad (Ged), Organización Internacional del Trabajo (OIT). 12 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---ed_emp/---ifp_skills/documents/publication/wcms_533596.pdf",
                "resumen_comentario": "Los pueblos indígenas son agentes decisivos del cambio y sus prácticas de subsistencia, conocimientos tradicionales y modos de vida son fundamentales para luchar contra el cambio climático y concretar la visión de la Agenda 2030 para el Desarrollo Sostenible."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pajuelo Teves, Ramón.",
                "titulo": "Participación política indígena en la sierra peruana: Una aproximación desde las dinámicas nacionales y locales.",
                "referencia": "2006. Fundación Konrad Adenauer. Lima: Instituto de Estudios Peruanos (Iep). 132 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/particpacion-politica-indigena.pdf",
                "resumen_comentario": "Exploración de las transformaciones ocurridas en el Perú respecto a la participación política indígena, considerando tanto las dinámicas nacionales como locales. Brinda información sobre la participación política indígena en el Perú, poniendo énfasis en la sierra, y describiendo el esquema y las condiciones políticas del movimiento indígena, desde la cuestión de la identificación étnica hasta un caso concreto en el país."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Palomino, Moisés y Yeckting, Fabiola.",
                "titulo": "Las municipalidades rurales del Perú y su trabajo de puesta en valor de los activos culturales.",
                "referencia": "s/f. Rimisp, Centro Latinoamericano para el Desarrollo Rural, Dinámicas Territoriales Locales y Territorios con Identidad Cultural. Lima: Instituto de Estudios Peruanos (IEP). 46 pp.",
                "link": "https://rimisp.org/wp-content/files_mf/1484160437Municipalidades_rurales_Peru_activos_culturales.pdf",
                "resumen_comentario": "Revalorar la diversidad cultural permite iniciativas para mejorar ingreso de las familias y contribuye al desarrollo económico local, regional y nacional. Contiene mapeo de emprendimientos basados en activos culturales (Ebac) y herramientas para facilitar el trabajo con éstos.",
                "observaciones": "Incluye experiencias en Ancash, Cusco, La Libertad, Lambayeque, Puno y Apurímac."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pereira, Liz.",
                "titulo": "Ruta a la gobernanza intercultural en la Amazonía ecuatoriana.",
                "referencia": "2014. Quito: Fundación Futuro Latinoamericano. 23 pp.",
                "link": "https://www.ffla.net/",
                "resumen_comentario": "Análisis de las limitaciones y desafíos hacia la construcción de una gobernanza intercultural, proceso realizado con las organizaciones indígenas amazónicas de las provincias de la Amazonía ecuatoriana Pastaza y Morona Santiago."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Poder Judicial.",
                "titulo": "Protocolo de Coordinación entre Sistemas de Justicia.",
                "referencia": "2014. Poder Judicial. Lima: Consejo Ejecutivo del Poder Judicial. 33 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Protocolo%20de%20coordinacion%20entre%20sistemas%20de%20justicia.pdf",
                "resumen_comentario": "Tiene el objetivo de atender las demandas de jueces ordinarios, jueces de paz y autoridades comunales y ronderas, de reglas y pautas que les permitan coordinar y cooperar para que los derechos de acceso a la justicia y a la jurisdicción especial, en este caso la justicia intercultural, sean fortalecidos en todo el territorio del país.",
                "observaciones": "Resolución Administrativa Nº 333-2013-CE-PJ. 27 de diciembre de 2013."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Poder Judicial.",
                "titulo": "Resolución Administrativa N° 335-2019-CE-PJ. Crean el Observatorio de Justicia Ambiental del Poder Judicial.",
                "referencia": "2019. Poder Judicial. 2 pp.",
                "link": "https://sinia.minam.gob.pe/normas/crean-observatorio-justicia-ambiental-poder-judicial",
                "resumen_comentario": "El Observatorio de Justicia Ambiental es una plataforma virtual que brindará información y conocimiento al Poder Judicial, comunidades nativas, asociaciones civiles, universidades, empresas privadas y ciudadanía; en torno a las políticas públicas y el debate de los actores relevantes de la justicia ambiental en el Perú.",
                "observaciones": "Resolución administrativa."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pontificia Universidad Católica del Perú (PUCP).",
                "titulo": "De vuelta al mundo: ¿Cómo podemos cambiar frente al cambio climático?",
                "referencia": "2019. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP), Instituto de Ciencias de Naturaleza, Territorios y Energías Renovables (INTE PUCP) Lima: Pontificia Universidad Católica del Perú (PUCP).",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/09/02180641/relatorias-xv.pdf",
                "resumen_comentario": "Aproximación al conocimiento del cambio climático, un acercamiento a su base científica, un seguimiento a las respuestas internacionales y nacionales para hacerle frente, visibilizando los impactos de las variaciones climáticas sobre el planeta, los cuales inciden sobre los derechos humanos, en especial, de las poblaciones indígenas.",
                "observaciones": "XV Encuentro de Derechos Humanos."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa Desarrollo y Diversidad Cultural.",
                "titulo": "Lineamientos para la construcción de políticas públicas interculturales.",
                "referencia": "2009. Ministerio Coordinador de Patrimonio del Ecuador; Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco). 314 pp.",
                "link": "https://unesdoc.unesco.org/ark:/48223/pf0000188176",
                "resumen_comentario": "Trata sobre contenido y perspectiva de la interculturalidad, da a conocer experiencias en este campo, alienta a los funcionarios del sector público y de las organizaciones de la sociedad civil a la incorporación de este eje transversal de política pública, y propone el diálogo hacia el diseño de políticas públicas interculturales.",
                "observaciones": "Memoria. Seminario de Políticas Públicas e Interculturalidad. Quito, 2009."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ramón Valarezo, Galo.",
                "titulo": "Territorio, identidad e interculturalidad.",
                "referencia": "2019. Consorcio de Gobiernos Autónomos Provinciales del Ecuador (Congope); Incidencia Pública Ecuador. Quito: Ediciones Abya-Yala. 220 pp.",
                "link": "https://biblio.flacsoandes.edu.ec/libros/digital/57514.pdf",
                "resumen_comentario": "Reflexión sobre la interculturalidad y el territorio a partir de la gestión de los gobiernos locales y regionales, desde conceptos como identidad, cultura, educación, comunicación, salud, pueblos y nacionalidades, y migración, entre otros; entendiendo la interculturalidad como una estrategia de resolución de conflictos culturales referentes a la diversidad del país.",
                "observaciones": "Serie Territorios en Debate Nº 10."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Regalado Gutiérrez, José.",
                "titulo": "Los derechos de los pueblos indígenas: Un reto para la gobernabilidad, la democracia y la ciudadanía.",
                "referencia": "2010. En: Diálogo Político. Año XXVII, Nº 4. Publicación trimestral de la Konrad Adenauer Stiftung A. C. (Kas). 14 pp.",
                "link": "https://www.corteidh.or.cr/tablas/r26353.pdf",
                "resumen_comentario": "Aborda los retos de fortalecer la gobernabilidad, la democracia y la ciudadanía en el contexto pluricultural de América Latina. Las políticas de Estado y sus instituciones no han integrado la diversidad en su enfoque y desarrollo, estando al margen de la población y su realidad, que exige a los Estados e instituciones responder a los estándares fijados para la protección y cumplimiento de los derechos de los pueblos indígenas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Riascos de la Peña, Juan Carlos; Ormaza, Paulina; Zambrana, Gonzalo y Silva, Cynthia.",
                "titulo": "Caracterización de las áreas indígenas y comunitarias para la conservación en Bolivia, Ecuador y Colombia.",
                "referencia": "2008. Centro Para el Desarrollo Sostenible (Cenesta), en representación de las comisiones CEESP (Comisión de Política Ambiental, Económica y Social) y WCPA (Comisión Mundial de Áreas Protegidas) de la Unión Internacional para la Conservación de la Naturaleza (UICN). 42 pp.",
                "link": "https://www.iccaconsortium.org/wp-content/uploads/2015/08/regional-review-andes-2008-es.pdf",
                "resumen_comentario": "La superposición histórica de visiones, interpretaciones y enfoques de prioridades entre autoridades ambientales y las organizaciones de los pueblos tradicionales de Colombia, Ecuador y Bolivia, se manifiesta, entre otros, en el traslape de áreas protegidas y territorios de grupos étnicos, planteando un desafío para las políticas de los Estados que apoyan la consolidación de objetivos de conservación de la naturaleza y territorios gestionados directamente por estas comunidades.",
                "observaciones": "Informe. Proyecto “Understanding and Promoting Community Conserved Areas (CCAs) for Conservation of Biodiversity and Sustainable Use of Natural Resources in Andean Region”."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rodríguez, Héctor.",
                "titulo": "Balance de los procesos de consulta previa a nivel nacional y regional.",
                "referencia": "2019. Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 8 pp.",
                "link": "https://www.caaap.org.pe/2019/documentos/BALANCE-DE-PROCESOS-DE-CONSULTA-PREVIA-EN-EL-PERu-JUNIO-2019.pdf",
                "resumen_comentario": "Consigna la información de los procesos de consulta previa registrados en la base de datos del Viceministerio de Interculturalidad del Ministerio de Cultura, entre los concluidos, suspendidos y los que aún continúan en marcha, los cuales, año tras año, van incrementándose de acuerdo a la política económica del gobierno y la exigencia por parte de los pueblos de que se aplique y respete la Ley de Consulta Previa.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rojas Feria, Carlos.",
                "titulo": "El derecho territorial de los pueblos y comunidades indígenas.",
                "referencia": "2016. Grupo Internacional de Trabajo sobre Asuntos Indígenas (IWGIA); Cooperación Alemana, Giz GmbH. Servicios en Comunicación Intercultural (Servindi). 32 pp.",
                "link": "https://ia601200.us.archive.org/17/items/CARTILLAPERICO_201608/CARTILLA_PERICO.pdf",
                "resumen_comentario": "Busca difundir ideas referidas a los estándares internacionales sobre tierras y territorios, dirigida a líderes indígenas que enfrentan amenazas sobre sus territorios ancestrales, muchos aún pendientes de titulación debido a la desidia de un Estado de espaldas a sus necesidades, como la seguridad jurídica territorial.",
                "observaciones": "Cartilla ilustrada."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rojas, Ileana.",
                "titulo": "Salud intercultural y demandas de los pueblos indígenas en el contexto Covid-19.",
                "referencia": "2020. Programa de Biodiversidad y Pueblos Indígenas de la SPDA. Lima: Sociedad Peruana de Derecho Ambiental (SPDA). 50 pp.",
                "link": "https://spda.org.pe/?wpfb_dl=4601",
                "resumen_comentario": "Ante la enorme urgencia por brindar atención a la salud de los pueblos indígenas, buscando su protección sin dejar los criterios de respeto por su identidad cultural, el Estado peruano tiene dificultades de índole estructural, relacionados con la normativa y legitimidad institucional; ni siquiera ha podido aprobar el Plan Sectorial de Salud Intercultural. La alta vulnerabilidad de los pueblos indígenas frente al Covid-19, amplía la brecha histórica de acceso a un sistema de salud que se adecúe a sus formas de vida y costumbres.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Saad, Paulo; Cunningham, Myrna; Del Popolo, Fabiana y Pop, Álvaro.",
                "titulo": "Los pueblos indígenas de América Latina, Abya Yala y la Agenda 2030 para el Desarrollo Sostenible: Tensiones y desafíos desde una perspectiva territorial.",
                "referencia": "2020. Documentos de proyectos. Santiago: Comisión Económica para América Latina y el Caribe (Cepal) y Fondo para el Desarrollo de los Pueblos Indígenas de América Latina y el Caribe (FILAC). 268 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45664/51/S2000125_es.pdf",
                "resumen_comentario": "Presenta el conocimiento actualizado relativo a los derechos territoriales y la situación de los bosques, la demografía y el derecho al bienestar de estos pueblos, con el fin de contribuir al seguimiento de la implementación de la Agenda 2030 y al cumplimiento de los compromisos asumidos por los países de la región."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salmón, Elizabeth.",
                "titulo": "Introducción al Sistema Interamericano de Derechos Humanos.",
                "referencia": "2019. Pontificia Universidad Católica del Perú (PUCP). Lima: Fondo Editorial PUCP. 421 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/04/16195933/introduccion-al-sistema-interamericano-ddhh-indice.pdf",
                "resumen_comentario": "Es una entrada a los antecedentes y orígenes del SIDH; a su marco normativo; al soporte institucional de sus órganos; al sistema de peticiones y casos, que es el más visible y activo del sistema; y, finalmente, a sus principales aportes en la protección y promoción de los derechos humanos en la región; con el fin de fortalecer su uso en defensa de los derechos humanos.",
                "observaciones": "No disponible en internet."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salmón, Elizabeth (coordinadora); Bregaglio, Renata; Olivera, Jean Franco y Ocampo, Diego.",
                "titulo": "La consulta previa, libre e informada en el Perú: Hacia la inclusión del interés indígena en el mundo de los derechos humanos.",
                "referencia": "2012. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP); Fundación Konrad Adenauer. Lima: Pontificia Universidad Católica del Perú (PUCP).",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/111921/2012-La%20consulta%20previa%2c%20libre%20e%20informada.%20La%20inclusi%c3%b3n%20del%20inter%c3%a9s%20ind%c3%adgena%20en%20el%20mundo%20de%20los%20derechos%20humanos.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Busca propiciar que la participación indígena se nutra de los estándares que provienen del Derecho internacional de los derechos humanos. Incluye cuestiones como a quiénes y por qué se consulta, los elementos constitutivos de un pueblo indígena, el objetivo de su consulta, el rol del Estado y la acción de sus interesados, así como la regulación de la consulta previa, libre e informada en el Perú, entre otros."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sandoval, Pablo; Muñoz, Rocío; Agüero, José Carlos; Oré, Gustavo y Torrejón, Sandra.",
                "titulo": "La diversidad cultural en el Perú.",
                "referencia": "2014. Ministerio de Cultura. 38 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/LadiversidadculturalenelPeru.pdf",
                "resumen_comentario": "Presenta información sobre pueblos indígenas y población afroperuana, y un marco conceptual y legal sobre la diversidad cultural en el Perú, así como sus retos y posibilidades, a fin de promover su visibilización y valoración positiva como componente importante del desarrollo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "San Román, Jesús Víctor.",
                "titulo": "Perfiles históricos de la Amazonía peruana.",
                "referencia": "1994. Centro de Estudios Teológicos de la Amazonía (Ceta); Instituto de Investigaciones de la Amazonía Peruana (IIAP). Iquitos: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 282 pp.",
                "link": "http://www.caaap.org.pe/Libros/Perfiles-historicos-de-la-amazonia-peruana.pdf",
                "resumen_comentario": "Breve sucesión de datos históricos significativos, con referencia a los ríos Napo y Amazonas, aunque integrados en la perspectiva general de la selva. Busca penetrar en el mundo cultural del poblador, desde una visión histórica que muestre las vivencias que han marcado al hombre actual, y la experiencia histórica de la selva peruana."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Santos, Lucía; Castillo, Pedro y del Castillo, Laureano. (Comp.)",
                "titulo": "Derechos de las comunidades campesinas y nativas: Principales leyes y reglamentos.",
                "referencia": "2018. Lima: Centro Peruano de Estudios Sociales (Cepes). 204 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2018/02/derechos_comunidades.pdf",
                "resumen_comentario": "El marco legal relacionado con el derecho a la tierra y al territorio, incluyendo a las comunidades nativas y el desarrollo agrario de selva y ceja de selva, las modificaciones importantes e información útil para las organizaciones.",
                "observaciones": "Incluye leyes y reglamentos pertinentes."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Shady Solís, Ruth.",
                "titulo": "Conocimientos ancestrales y gestión del agua.",
                "referencia": "2019. Ministerio de Cultura. Caral, Supe. En: Autoridad Nacional del Agua (ANA). 42 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/4216",
                "resumen_comentario": "Muestra la diversidad del Perú en materia geográfica y ecológica, y su influencia en las vertientes hidrográficas. Expone, además, las tecnologías apropiadas para el manejo de la tierra y agua, en el marco de las culturas prehispánicas.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sherpa, Lucky; Beeckmans, Ruth; Raj, Sushil; Richardson, Andy y Requesens, Arturo.",
                "titulo": "Aplicación de la Declaración de la ONU sobre los derechos de los pueblos indígenas.",
                "referencia": "2014. Oficina del Alto Comisionado para los Derechos Humanos (Acnudh). Programa de las Naciones Unidas para el Desarrollo (PNUD); Foro Permanente para las Cuestiones Indígenas del Departamento de Asuntos Económicos y Sociales (Daes); Fondo Internacional de Desarrollo Agrícola (Fida). Ginebra: Unión Interparlamentaria (UIP). 84 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Aplicacion%20de%20la%20Declaracion%20de%20la%20ONU%20sobre%20los%20derechos%20de%20los%20ppii%20Manual%20para%20parlamentarios.pdf",
                "resumen_comentario": "Instrumento para que parlamentarios tengan conocimiento de los derechos de los pueblos indígenas de acuerdo a las normas internacionales, y ofrece ideas prácticas para la aplicación de la Declaración de las Naciones Unidas. Incluye buenas prácticas de reconocimiento y ejercicio de los derechos de los pueblos indígenas en el mundo, así como un instrumento para que los parlamentarios evalúen la situación de los pueblos indígenas en sus propios países, como punto de partida para su aplicación efectiva.",
                "observaciones": "Manual para parlamentarios N° 23."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sociedad Peruana de Derecho Ambiental (SPDA).",
                "titulo": "Uniendo fuerzas: Titulación de territorios indígenas en Perú.",
                "referencia": "2020. Programa de Biodiversidad y Pueblos Indígenas de la SPDA; The Tenure Facility. Lima: Sociedad Peruana de Derecho Ambiental (SPDA). 36 pp.",
                "link": "https://spda.org.pe/?wpfb_dl=4599",
                "resumen_comentario": "Promueve iniciativas vinculadas a generar condiciones para que los pueblos indígenas obtengan seguridad jurídica sobre sus tierras, fuente de vida e identidad, sobre la base de la gestión integral del territorio, desarrollo de capacidades, el fortalecimiento institucional de actores claves, mejora del marco legal y la tenencia segura y titulación."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Solano Silva, Dante.",
                "titulo": "Servicios públicos con pertinencia cultural: Guía para la aplicación del enfoque intercultural en la gestión de servicios públicos.",
                "referencia": "2015. Ministerio de Cultura, Viceministerio de Interculturalidad; Programa Pro Descentralización de Usaid. 268 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/guiaparalaaplicaciondelenfoqueinterculturalenlagestiondelosserviciospublicos-final.pdf",
                "resumen_comentario": "Presenta conceptos, lineamientos y herramientas para el diseño y gestión de servicios públicos con pertinencia cultural. Contiene información sobre lenguas indígenas peruanas, mapa etnolingüístico y de la población afroperuana, glosario y un compendio normativo e instrumentos para la incorporación de la perspectiva intercultural en los servicios públicos.",
                "observaciones": "Guía. Se divide en dos partes y cinco cuadernillos."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sudario Manrique, Rosa Elena.",
                "titulo": "Comunicar el cambio climático en clave intercultural.",
                "referencia": "2014. Fundación Friedrich Ebert. Lima: Servicios en Comunicación Intercultural (Servindi). 56 pp.",
                "link": "https://ia600303.us.archive.org/14/items/ComunicarElCambioClimaticoManual/Comunicar%20el%20cambio%20climatico%20-%20manual.pdf",
                "resumen_comentario": "Describe las formas más conocidas del tratamiento de la comunicación intercultural; postula criterios básicos para su desarrollo y lineamientos para su aplicación. Define conceptos fundamentales sobre interculturalidad y comunicación intercultural, y los relaciona con el periodismo ambiental y la gestión de la comunicación en el contexto del cambio climático.",
                "observaciones": "Manual de capacitación."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sudario Manrique, Rosa Elena.",
                "titulo": "Derecho a la comunicación: Realidad y desafío en América Latina. Pueblos indígenas y políticas públicas de radiodifusión.",
                "referencia": "2013. Lima: Servicios en Comunicación Intercultural (Servindi). 430 pp.",
                "link": "https://ia600500.us.archive.org/33/items/DerechoComunicacionRealidadDesafiosAmericaLatina/Derecho_Comunicacion_Realidad_Desafios_America_Latina.pdf",
                "resumen_comentario": "Ofrece al movimiento indígena del Perú y América Latina un marco de referencia comparativo regional de las políticas públicas referidas al ejercicio del derecho a la comunicación de los pueblos indígenas, que facilite articular propuestas para la agenda indígena en comunicación. Su importancia reside en crear un marco teórico-técnico que permita sostener desde el campo de la comunicación y el derecho, los compromisos asumidos por los Estados de la región sobre la necesidad de democratizar la comunicación y diversificar la información a través de marcos regulatorios de radiodifusión que reconozcan la validez de los medios comunitarios y de políticas públicas de comunicación diferenciales."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Trivelli, Carolina; Escobal, Javier y Revesz, Bruno.",
                "titulo": "Desarrollo rural en la sierra: Aportes para el debate.",
                "referencia": "2009. Cipca; Grade; IEP; Cies. Lima, Perú. 360 pp.",
                "link": "http://biblioteca.clacso.edu.ar/gsdl/collect/pe/pe-009/index/assoc/D12563.dir/pdf_179.pdf",
                "resumen_comentario": "Ofrece una mirada acerca del desarrollo rural en la sierra peruana, partiendo de que es un espacio complejo y heterogéneo, tanto desde el punto de vista socioeconómico, como cultural, geográfico y ecológico, examinando los gobiernos locales, los mercados de productos, el sector público nacional y local, y los programas de cooperación para el desarrollo en la sierra."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Valdiviezo, Laura Alicia y Valdiviezo Arista, Luis Martín.",
                "titulo": "Política y práctica de la interculturalidad en la educación peruana: Análisis y propuesta.",
                "referencia": "2008. En: Revista Iberoamericana de Educación N°. 45. Organización de Estados Iberoamericanos para la Educación, la Ciencia y la Cultura (Oei) 12 pp. ",
                "link": "https://rieoei.org/historico/deloslectores/2088Valdiviezo.pdf",
                "resumen_comentario": "Propone tanto una perspectiva epistemológica de la interculturalidad como sus posibilidades de reinterpretación e innovación desde la práctica educativa. Expone el discurso intercultural en el Perú en base a experiencias locales, y muestra la conexión teórica entre la interculturalización de la educación y de la democracia, pues son procesos que requieren una deconstrucción de prácticas sociales de exclusión racial, cultural y lingüística, así como de estructuras ideológicas engranadas en las instituciones educativas, económicas y políticas del país."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vallenas, Kantuta y Alza, Carlos.",
                "titulo": "Gobernabilidad, desarrollo y democracia: Un enfoque de derechos humanos en las políticas públicas.",
                "referencia": "2004. En. Derecho & Sociedad N°. 22. Lima, Perú. 14 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Gobernabilidad%2C%20desarrollo%20y%20democracia.pdf",
                "resumen_comentario": "Analiza las políticas públicas y la gobernabilidad, entendiéndolas como el alineamiento entre necesidades y capacidades de un sistema sociopolítico, que no puede prescindir de conceptos como derechos humanos, desarrollo y democracia, vectores que deben guiar los procesos políticos y sociales.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vargas-Hernández, José G.",
                "titulo": "Gobernanza intercultural.",
                "referencia": "2016. En: Revista Doxa digital, Vol. 6, Nº 11. 31 pp.",
                "link": "https://journals.sfu.ca/doxa/index.php/doxa/article/viewFile/1/20",
                "resumen_comentario": "Plantea la gobernanza intercultural como alternativa a los modelos y sistemas de gobernanza existentes, en tanto espacios de diálogo, formas de participación ciudadana, desarrollo y formación de competencias interculturales, y diseño del modelo de gestión, presentando las tendencias y principales retos que se plantean con la implementación de este modelo de gobernanza.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vega Díaz, Ismael.",
                "titulo": "Buscando el río: Identidad, transformaciones y estrategias de los migrantes indígenas amazónicos en Lima Metropolitana.",
                "referencia": "2014. Centro Amazónico de Antropología y Aplicación Práctica (Caaap); Municipalidad Metropolitana de Lima; Unión Europea. Lima: Terra Nuova. 114 pp.",
                "link": "http://www.caaap.org.pe/Libros/Buscando-el-rio-ismael-vega.pdf",
                "resumen_comentario": "Análisis e interpretación de las características del proceso migratorio, la identidad étnica cultural y las estrategias de inserción social de los indígenas amazónicos en la ciudad de Lima. Los pueblos a los que pertenece la población seleccionada son Shipibo, Awajún, Wampis, Asháninka, Shawi, Kukama Kukamiria y Kechwa Lamista."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vega Díaz, Ismael; Hallazi Méndez, Luis A. y Bernal Chávez, Andrea S.",
                "titulo": "¿Y los pueblos indígenas en el Perú?: Cumplimiento de las obligaciones del Estado peruano a 30 años del Convenio 169 de la OIT.",
                "referencia": "2019. Grupo de Trabajo sobre Pueblos Indígenas de la Coordinadora Nacional de Derechos Humanos. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 96 pp.",
                "link": "http://www.caaap.org.pe/Libros/Informe%20Alternativo%202019.pdf",
                "resumen_comentario": "Situación de los pueblos indígenas en el Perú, revisando temas relacionados principalmente con vulneraciones de sus derechos. Se presenta información sobre los derechos de los pueblos indígenas, entrevistas a líderes indígenas, y se realiza recomendaciones para el Estado peruano y la Organización Internacional del Trabajo.",
                "observaciones": "Informe alternativo 2019."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vega Díaz, Ismael; Rodríguez Pajares, Héctor y O´Diana Rocca, Richard.",
                "titulo": "¿Cómo va la aplicación de la consulta previa en el Perú?: Avances y retos.",
                "referencia": "2017. Plataforma por la Gobernanza Responsable de la Tierra”, Perú, de la International Land Coalition (ILC), América Latina y El Caribe. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 106 pp.",
                "link": "https://drive.google.com/file/d/19FoYRQSjRqYnQCF85vt21RKR8EvUGU9u/view",
                "resumen_comentario": "La consulta previa es la base del diálogo intercultural, pero las relaciones asimétricas entre Estado e indígenas les ponen en desventaja para ejercer su autonomía. Las normas han facilitado la inversión privada de las empresas extractivas, por sobre los derechos indígenas y los estándares ambientales, y no está claro el carácter vinculante de la consulta, a lo que contribuye la falta de un enfoque intercultural de los funcionarios, y la debilidad de las organizaciones indígenas.",
                "observaciones": "Revisión de 42 casos de consulta a nivel de gobiernos nacional, regional y local."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Villapolo, Leslie y Vega, Ismael. (Coord.)",
                "titulo": "Territorio integral Tajimat awajún: Fundamentos legales, antropológicos y políticos.",
                "referencia": "2018. Organización Regional de los Pueblos Indígenas de la Amazonía Norte del Perú (Orpian-P). Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 48 pp.",
                "link": "http://www.caaap.org.pe/Libros/TERRITORIO-AWAJUN.pdf",
                "resumen_comentario": "El territorio integral del pueblo Awajún se fundamenta en el derecho a la libre determinación y otros derechos reconocidos en normas internacionales y nacionales sobre pueblos indígenas, así como las evidencias histórico-antropológicas.",
                "observaciones": "Memorias, reflexiones y conocimientos sobre el territorio, a partir de talleres con personas awajún y estudios de investigadores."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zambrano, Gustavo. (Coordinador)",
                "titulo": "Documento de sistematización del proyecto Gobernanza intercultural: Construyendo desde el fortalecimiento de capacidades y la incidencia en líderes amazónicos.",
                "referencia": "2019. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (Idehpucp); Misereor. Lima, Perú. 20 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/04/05160140/sistematizacion-misereor.pdf",
                "resumen_comentario": "Exhibe los resultados de un proyecto de gobernanza intercultural llevado a cabo para fortalecer las capacidades de líderes indígenas que habitan en comunidades nativas de la Amazonía peruana, con el propósito de brindarles herramientas para tomar decisiones en favor de sus comunidades.",
                "observaciones": "Informes y documentos de trabajo."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zambrano, Gustavo. (Coordinador) Berganza, Isabel; Cuentas, Vanessa y Hurtado, Eduardo.",
                "titulo": "Bagua: Entendiendo al Derecho en un contexto culturalmente complejo.",
                "referencia": "2017. Pontificia Universidad Católica del Perú (PUCP); Universidad Antonio Ruiz de Montoya; Konrad-Adenauer-Stiftung e. V. (Kas). Lima: Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP). 100 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2017/11/30200600/kas-bagua_reducido.pdf",
                "resumen_comentario": "Analiza el Derecho como un elemento sociocultural capaz de interactuar con otros, de tal manera que se vaya recreando la forma de entender y hacer Derecho en el país, tomando en cuenta los factores que pudieron tener un rol, positivo o negativo, en la incorporación de estándares de derechos humanos en materia de administración de justicia que puedan aplicarse a casos en los que estén presentes miembros de pueblos indígenas.",
                "observaciones": "Caso Curva del Diablo, Bagua."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ricard Zapata‐Barrero,",
                "titulo": "Índice de gobernanza intercultural.",
                "referencia": "2014. Grup de Recerca Interdisciplinari sobre Immigració Departament de Ciències Polítiques i Socials, Universitat Pompeu Fabra. Barcelona: Gritim-UPF. Policy Series Nº 3. 94 pp.",
                "link": "https://www.upf.edu/documents/3329791/3455370/igigritim.pdf/e8764f8e-85be-4bff-aae5-35f173920a82",
                "resumen_comentario": "Busca identificar algunas variables significativas y potenciales hipótesis en torno al proceso que implica desplegar una serie de mecanismos y de acciones para asegurar un marco adecuado de gobernanza para diseñar políticas y programas interculturales.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zapata-Barrero, Ricard y Pinyol Jiménez, Gemma.",
                "titulo": "Manual para el diseño de políticas públicas.",
                "referencia": "2013. Grup de Recerca Interdisciplinari sobre Immigració, Barcelona. 322 pp.",
                "link": "https://rm.coe.int/1680301bc4",
                "resumen_comentario": "Los gobiernos locales necesitan criterios mínimos comunes para gestionar las dinámicas sociales que supone la diversidad. Defiende la estrategia de la interculturalidad como enfoque político público, basado en una forma de interpretar la diversidad como un recurso positivo, una cultura y un bien públicos. Brinda instrumentos conceptuales y prácticos para ayudar a las ciudades a incorporar la interculturalidad como proyecto urbano.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Segundo eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zúñiga Lossio, Mario y Okamoto, Tami.",
                "titulo": "Sin derechos no hay consulta: Aproximación a las miradas indígenas sobre el proceso de consulta previa en el lote 192 de la Amazonía peruana.",
                "referencia": "2019. Acción Solidaria para el Desarrollo (CooperAcción). Lima: Oxfam América. 178 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Sin_derechos_no_hay_consulta.pdf",
                "resumen_comentario": "Expone los instrumentos legales del derecho de consulta de los pueblos indígenas, y el marco procedimental en el subsector de hidrocarburos en el Perú, cuestionando la exclusión de procedimientos para otorgar derechos a empresas en la exploración y explotación. Incluye la consulta previa de 2015 en el lote 192, que el Estado resolvió de manera unilateral, causando movilizaciones indígenas y mostrando que este proceso sigue en formación y disputa."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Abramo, Laís. (Coordinador)",
                "titulo": "Panorama social de América Latina 2019.",
                "referencia": "2019. División de Desarrollo Social y la División de Estadísticas de la Comisión Económica para América Latina y el Caribe (Cepal). Santiago de Chile: Cepal. 264 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44969/5/S1901133_es.pdf",
                "resumen_comentario": "Analiza la evolución de la pobreza y pobreza extrema, la desigualdad de ingresos y el gasto social en América Latina, así como la migración, que ha cobrado importancia en la agenda política y social de la región. Aboga por un pacto social que consolide los acuerdos entre los diversos actores, brindando legitimidad y solidez a las políticas y reformas estructurales, en aras de una mayor igualdad.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Acción contra el Hambre.",
                "titulo": "Emprender en economía social.",
                "referencia": "2014. Programa Formativo en Economía Social, Taller 1. Proyecto Vives. Madrid: Acción contra el Hambre. 19 pp.",
                "link": "https://www.accioncontraelhambre.org/sites/default/files/documents/taller_1._emprender_en_economia_social.pdf",
                "resumen_comentario": "Contiene un panorama general de la economía social, sus tendencias y nuevas expresiones, principios y valores, así como las peculiaridades económicas de las entidades de economía social y sus fuentes de financiación, certificados de calidad y auditoría social.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alió, Mª Àngels y Fransualdo de Azevedo, Francisco.",
                "titulo": "La economía social y solidaria en la transición ambiental.",
                "referencia": "2015. Universidade Federal do Ceará. Mercator. En: Fortaleza, v. 14, Nº 3. 20 pp.",
                "link": "https://www.scielo.br/pdf/mercator/v14n3/1984-2201-mercator-14-03-0089.pdf",
                "resumen_comentario": "Ensayo sobre la capacidad de la población para transformarse en actor social activo en el proceso de cambio hacia una sociedad más justa y con mejores relaciones de equilibrio con la naturaleza. Muestra que los emprendimientos de economía social y solidaria conforman nuevas formas de organización que inciden en forma positiva en la transformación social y ecológica, y destaca la incidencia de las cooperativas en los procesos de transición ambiental.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alvarado Guerrero, Javier.",
                "titulo": "Sistematización de las intervenciones de SOS FAIM en las finanzas rurales del Perú 1994 – 2015.",
                "referencia": "2017. Lima: Centro Peruano de Estudios Sociales (Cepes) y SOS Faim, con el apoyo de la cooperación belga al desarrollo. 64 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/cepes_2016_sistematizacion_intervenciones_sos-faim.pdf",
                "resumen_comentario": "Estudia las intervenciones para desarrollar un mercado financiero inclusivo con los pequeños productores rurales, con énfasis en el sistema de microfinanzas, el crédito agropecuario, las Ong y cooperativas de ahorro y crédito, tomando en cuenta su cobertura y sostenibilidad.",
                "observaciones": "Se presenta estudios de caso."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Álvarez, Juan Fernando; Marcuello, Carmen; Morais, Leandro; Radrigán, Mario y De Sá, Jorge.",
                "titulo": "Anuario iberoamericano de la economía social 2018.",
                "referencia": "2019. Nº 3. Observatorio Iberoamericano del Empleo y la Economía Social y Cooperativa (Oibescoop). Valencia: Centro Internacional de Investigación e Información sobre la Economía Pública, Social y Cooperativa (Ciriec España). 160 pp.",
                "link": "http://www.oibescoop.org/wp-content/uploads/Anuario-OIBESCOOP-2019-def.pdf",
                "resumen_comentario": "Reflexión sobre la situación de la economía social en Iberoamérica en relación a los agentes de la economía social, clases y perspectivas; las principales políticas públicas y sus estructuras de apoyo a la economía social; el marco legal y normativo, sus cambios y reformas; y unas conclusiones con las cuestiones más relevantes."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Angulo, Nedda y Casamayor, Susana. (sistematización) ",
                "titulo": "Memoria: Por una Integración solidaria de los pueblos de América Latina y El Caribe. III Encuentro latinoamericano de economía solidaria y comercio justo. ",
                "referencia": "2010. Grupo Red de Economía Solidaria del Perú (Gresp). 88 pp. ",
                "link": "http://base.socioeco.org/docs/memoria_de_iii_encuentro_ripess_lac_montevideo.pdf",
                "resumen_comentario": "Desde la perspectiva de la economía social y solidaria (ESS) en América Latina, muestra la contribución y los avances del movimiento social de economía solidaria, a través de la potenciación de lazos de cooperación entre organizaciones y redes de economía solidaria. Contiene direcciones de organizaciones de ESS en América Latina.",
                "observaciones": "Memoria del III Encuentro latinoamericano de economía solidaria y comercio justo. Montevideo, Uruguay, 2008."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Angulo, Nedda y Fernández, Massiel. (Compiladoras)",
                "titulo": "Afirmando prácticas democráticas y estrategias solidarias para un desarrollo sustentable.",
                "referencia": "2007. Grupo Red de Economía Solidaria del Perú (Gresp); Departamento de Desarrollo Económico, Universidad de La Habana. 167 pp. ",
                "link": "http://base.socioeco.org/docs/memoria_del_ii_encuentro_la_de_es_y_cj_-_ripess_la.pdf",
                "resumen_comentario": "Busca interconectar las experiencias de ESS y comercio justo, identificar sus potencialidades y debilidades en el mercado, analizar las experiencias estatales latinoamericanas de promoción de la ESS, y elaborar una agenda común de este movimiento en América Latina.",
                "observaciones": "Memoria del II Encuentro Latinoamericano de Economía Solidaria y Comercio Justo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Anzoleaga Ayllón, Franz Roland.",
                "titulo": "Cadenas de valores inclusiva: Manual para impulsar negocios sostenibles y equitativos en cadena de valor inclusiva.",
                "referencia": "2017. Lima: Cuso Internacional. 85pp.",
                "link": "http://www.coeeci.org.pe/wp-content/uploads/2017/08/Manual-Cadenas-de-Valor-Inclusivas-_Cuso-International.pdf",
                "resumen_comentario": "Se propone una metodología de desarrollo de cadenas de valor inclusivas, ofreciendo un enfoque pragmático para analizar e intervenir en sistemas de mercado. Refuerza el aspecto inclusivo de los enfoques de sistemas de mercados, reconociendo que las políticas convencionales para la reestructuración y la reforma del mercado no son suficientes para reducir la pobreza y mejorar el bienestar social.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Artavia-Jiménez, María Leonela; Chaves Ortiz, Jorge Arturo; Cordero-Bonilla, Jonathan y Valverde Morales, Marcelo.",
                "titulo": "Economía solidaria y economía humana: Para enriquecer el análisis económico.",
                "referencia": "2019. Centro Dominico de Investigación (Cedi). En: Revista Cultura Económica, Año XXXVII, N° 97. 30 pp.",
                "link": "https://repositorio.uca.edu.ar/bitstream/123456789/9114/1/economia-solidaria-economia-humana.pdf",
                "resumen_comentario": "Desde la perspectiva del desarrollo humano armonioso de L. J. Lebret, “pasar de una etapa menos humana a una condición más humana\", la ciencia económica se convierte en una ciencia interdisciplinaria y con un fundamento ético, superando el fallo epistemológico de la economía, para generar una relación amistosa entre la humanidad y la naturaleza, con hombres y mujeres por igual, así como resaltar la solidaridad y metas humanizadoras en otros aspectos.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Askunze, Carlos.",
                "titulo": "Empresas de economía solidaria.",
                "referencia": "s/f. Euzkadi: Red de Economía Alternativa y Solidaria (Reas), Gizatea. 4 pp.",
                "link": "http://www.economiasolidaria.org/files/3_empresas_economia_solidaria.pdf",
                "resumen_comentario": "Propone a las empresas solidarias como un modelo alternativo al convencional en la creación y gestión de actividades empresariales, reivindicando a la actividad económica como un medio al servicio de las personas y de la comunidad en la que se desarrollan.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Askunze, Carlos.",
                "titulo": "Más allá del capitalismo: Alternativas desde la economía solidaria.",
                "referencia": "2013. En: Documentación social N° 168. 20 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/economia_solidaria_askunze.pdf",
                "resumen_comentario": "La economía solidaria propone iniciativas prácticas en todos los ámbitos del ciclo económico (financiación, producción, distribución y consumo), poniendo como objetivo a las personas y a la sostenibilidad de la vida.",
                "observaciones": "Monografía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Askunze Elizaga, Carlos.",
                "titulo": "Economía solidaria: Transformar la economía para transformar nuestro mundo.",
                "referencia": "2019. Bilbao: Red de Economía Alternativa y Solidaria (Reas). 60 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/1_guia_contenidos.pdf",
                "resumen_comentario": "Análisis del funcionamiento de la economía y de sus límites ambientales y sociales, y alternativas que presenta la economía solidaria en los ámbitos de las finanzas, los trabajos y las empresas, el mercado y el consumo o las economías comunitarias.",
                "observaciones": "Propuesta de contenidos."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Atienza, María; Canela, Diana; Carrero, Gael; Ortiz, Paula; Piñeiro, Conchi y Salsón, Sandra.",
                "titulo": "Guía de análisis de prácticas de corresponsabilidad en la economía social y solidaria.",
                "referencia": "2019. Madrid: Mares Madrid. 36 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/Gui%CC%81a-de-ana%CC%81lisis-de-pra%CC%81cticas-de-corresponsabilidad-en-la-economi%CC%81a-social-y-solidaria.pdf",
                "resumen_comentario": "Tiene como objetivo contribuir a que las mujeres y hombres que forman parte de entidades de la economía social y solidaria entiendan mejor sus prácticas de corresponsabilidad, midan su alcance y analicen si son realmente transformadoras y estratégicas, facilitando la aplicación efectiva de los principios de la economía social y solidaria para construir empresas vivibles y viables.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Asociación Española de Recuperadores de Economía Social y Solidaria (Aeress).",
                "titulo": "Memoria de la Asociación Española de Entidades Recuperadoras de Economía Social y Solidaria en España.",
                "referencia": "2011. Ministerio de Trabajo e Inmigración. Asociación Española de Recuperadores de Economía Social y Solidaria (Aeress). 36 pp.",
                "link": "http://www.aeress.org/content/download/2176/16143/file/Presentaci%C3%B3n_AERESS%20por%20una%20econom%C3%ADa%20social,%20solidaria%20y%20ecol%C3%B3gica.pdf",
                "resumen_comentario": "Explica cómo trabajan las entidades recuperadoras de Economía Social y Solidaria, en cuanto a gestión ambiental y servicios de intervención social, y su participación en procesos de consulta legislativa y programas de inclusión social, así como en las redes de entidades de economía solidaria y empresas de inserción.",
                "observaciones": "Memoria."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Barbero Sierra, Celia; Etchenique, Ana; Del Pozo Villar, Gema y Tuderini, Juan Carlos.",
                "titulo": "El planeta, las personas y el futuro: Guía de consumo responsable y medio ambiente.",
                "referencia": "2008. Confederación (de ámbito estatal) de Consumidores y Usuarios (Cecu). Madrid: Instituto de Promoción y Apoyo al Desarrollo (Fundación Ipade). 36 pp.",
                "link": "https://www.torrelodones.es/images/archivos/consumo_turismo_empresas/consumo/conssost_web.pdf",
                "resumen_comentario": "Expone los problemas ambientales del planeta, cómo contribuyen a ello los hábitos de los consumidores, el modelo de consumo del siglo XX y la propuesta de consumo responsable del siglo XXI. Muestra sus efectos en la energía, transporte, combustibles, agua, madera, ocio y tiempo libre, agricultura y alimentación, así como las alternativas posibles a través de la democracia y la participación.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Barrena Mera, Patricia y Almenara Sánchez, Alejandro.",
                "titulo": "Consumo responsable: Manual para una compra consciente.",
                "referencia": "2009. Consejo de la Juventud de Extremadura. 163 pp.",
                "link": "https://www.inexsos.com/descargas/consumoresponsablemanualparaunacompraconsciente.pdf",
                "resumen_comentario": "El consumo se puede reducir con sencillas pautas de conducta que no mermarán la calidad de vida, y cuestionando los patrones heredados para promover un cambio de actitud a nivel individual y colectivo. Se explica qué es el consumo responsable, las características de la sociedad de consumo, qué se esconde tras las promesas de un producto, y comparte información y prácticas para actuar a favor de otro tipo de consumo.",
                "observaciones": "Manual. Presenta una serie de fichas y dinámicas en forma de taller."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bonilla Castillo, Víctor Enrique.",
                "titulo": "Economía social solidaria como buen vivir: Diagnóstico en América Latina.",
                "referencia": "2018. Corporación Universitaria Minuto de Dios (Uniminuto). En: Perspectivas Nº 12. 7 pp.",
                "link": "https://revistas.uniminuto.edu/index.php/Pers/article/view/1838",
                "resumen_comentario": "La economía social y solidaria se propone abrir mercados que logren mejorar la calidad de vida de las personas, priorizando los intereses colectivos y minimizando los propios. Analiza este modelo económico en América Latina, buscando una participación activa de las sociedades con menores opciones de incidir en la economía, y facilitando alternativas para un cambio significativo en su labor y condiciones de vida.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Borzaga, Carlo; Salvatori, Gianluca y Bodini, Riccardo.",
                "titulo": "La economía social y solidaria y el futuro del trabajo.",
                "referencia": "2018. Instituto Europeo de Investigación sobre Empresas Cooperativas y Sociales (Euricse). Ginebra: Organización Internacional del Trabajo (OIT). 50 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---ed_emp/---emp_ent/---coop/documents/publication/wcms_649952.pdf",
                "resumen_comentario": "Presenta argumentos teóricos y datos empíricos referentes al papel de las organizaciones de ESS, en cuanto a su potencial para crear trabajo decente. Subraya la capacidad de la ESS para crear empleo en sectores emergentes, por ejemplo, en la economía plateada, y para contribuir a la formalización de la economía. Asimismo, las implicaciones políticas de estos cambios y la manera como pueden apoyar el desarrollo de la ESS en el futuro del trabajo.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cabanes Morote, Mar y Gómez López, José Daniel.",
                "titulo": "Economía social y soberanía alimentaria: Aportaciones de las cooperativas y asociaciones agroecológicas de producción y consumo al bienestar de los territorios.",
                "referencia": "2014. Universidad de Alicante. En: Revista de Economía Pública, Social y Cooperativa Nº 82. Valencia: Centre International de Recherches et d'Information sur l'Economie Publique, Sociale et Coopérative (Ciriec España). 30 pp.",
                "link": "https://www.redalyc.org/pdf/174/17433883005.pdf",
                "resumen_comentario": "Aborda los fundamentos de la soberanía alimentaria como derecho de los pueblos en la construcción de sus sistemas agroalimentarios y principio fundamental de bienestar de los territorios. Plantea, como iniciativa innovadora y agroecológica de desarrollo rural, la dinamización y recuperación de los espacios rurales y la promoción de canales cortos de comercialización agroalimentaria por parte de agentes endógenos de la economía social y solidaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cáritas.",
                "titulo": "Economía y personas: Con valores hay derechos. Informe de economía solidaria 2018.",
                "referencia": "2019. Madrid: Cáritas Española. 16 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/Informe-economi%CC%81a-solidaria-2018-Caritas.pdf",
                "resumen_comentario": "Desde un enfoque de la economía basado en los derechos humanos y en la doctrina social de la Iglesia, fomentan actividades de inserción laboral y empleo inclusivo, comercio justo respetando derechos de los productores y sus comunidades, iniciativas empresariales no lucrativas, finanzas éticas, consumo responsable y sostenibilidad ambiental.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Canadiense de Estudios y Cooperación Internacional (Ceci).",
                "titulo": "Manual de economía solidaria y comercio justo: Guía del formador.",
                "referencia": "2008. Red Nacional de Comercialización Comunitaria (Renacc). La Paz: Programa Uniterra, Centro Canadiense de Estudios y Cooperación Internacional (Ceci). 44 pp.",
                "link": "http://redmujeres.org/wp-content/uploads/2019/02/economia_solidaria_comercio_justo.pdf",
                "resumen_comentario": "Facilita el análisis sobre qué se entiende por economía solidaria y comercio justo, muestra la forma de hacer viable la solidaridad en las diversas actividades, y provee de herramientas para construir espacios, gestionar la articulación con el Estado y fortalecer los lazos con instituciones y organizaciones populares.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cobos Fontana, Mabel Svetlana.",
                "titulo": "El proceso de institucionalización de la economía popular y solidaria en Ecuador y su impacto en las organizaciones socioeconómicas populares y solidarias en el marco del buen vivir o sumak kawsay (2007-2016).",
                "referencia": "2016. Universidad de Chile, Facultad de Humanidades, departamento de historia. Instituto de Estudios Avanzados. 167 pp.",
                "resumen_comentario": "La investigación tiene como objetivo analizar la percepción de las organizaciones socioeconómicas solidarias y populares de la sierra ecuatoriana sobre el proceso de institucionalización de la Economía Popular y Solidaria en Ecuador, llevado a cabo por el Estado desde 2007 a 2016.",
                "observaciones": "Estudio de caso. Tesis para optar a grado. No disponible en internet."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Colectivo de Economía Fundamental.",
                "titulo": "¿Qué viene después de la pandemia? Un programa de diez puntos para la renovación fundamental.",
                "referencia": "2020. Foundational Economy Collective (FEC). En: El Trimestre Económico, vol. LXXXVII, Nº 347. Fondo de Cultura Económica (FCE). 19 pp.",
                "link": "https://www.eltrimestreeconomico.com.mx/index.php/te/article/view/1109",
                "resumen_comentario": "Durante la pandemia mundial por la Covid-19 y ante una inminente crisis, surgen preocupaciones respecto de las consecuencias económicas que la situación acarreará, así como de la suficiencia de la respuesta de los gobiernos. Se hace propuestas para las decisiones de política económica que surjan de esta crisis con el fin de sacar adelante las economías regionales y nacionales una vez que la pandemia sea superada.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "El desafío social en tiempos del Covid-19.",
                "referencia": "2020. Comisión Económica para América Latina y el Caribe (Cepal). 22 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45527/5/S2000325_es.pdf",
                "resumen_comentario": "Muestra las cifras macroeconómicas derivadas de la crisis sanitaria global y se miden sus diferentes impactos socioeconómicos, que evidencian un aumento de la pobreza, la pobreza extrema, y reflejan la matriz de la desigualdad en la región. Ante las grandes brechas históricas que la pandemia ha agravado, se reitera que es el momento de implementar políticas universales, redistributivas y solidarias con enfoque de derechos, para no dejar a nadie atrás.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "Enfrentar los efectos cada vez mayores del Covid -19 para una reactivación con igualdad: Nuevas proyecciones.",
                "referencia": "2020. Comisión Económica para América Latina y el Caribe (Cepal). 26 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45782/4/S2000471_es.pdf",
                "resumen_comentario": "La actividad económica en el mundo está cayendo más de lo previsto como consecuencia de la crisis por el coronavirus y, con ello, aumenta el impacto externo negativo sobre América Latina y el Caribe. Los esfuerzos de la región deben recibir mayor financiamiento en condiciones favorables y alivio de la deuda, y avanzar hacia la igualdad para un control eficaz de la pandemia y una recuperación económica sostenible.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "Sectores y empresas frente al COVID-19: Emergencia y reactivación.",
                "referencia": "2020. Comisión Económica para América Latina y el Caribe (Cepal). 24 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45734/4/S2000438_es.pdf",
                "resumen_comentario": "Antes de la pandemia, la estructura productiva de la región presentaba una heterogeneidad estructural que limitaba su desarrollo. Ahora son más evidentes sus debilidades y tensiones económicas, sociales y ambientales. Se requiere políticas para mitigar la destrucción de capacidades y adaptar la estructura productiva, incentivos distintos a los actuales para que las empresas y el Estado diversifiquen la estructura económica y puedan evitar retrocesos sociales y ambientales.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal) y Organización Panamericana de la Salud (OPS).",
                "titulo": "Salud y economía: Una convergencia necesaria para enfrentar el Covid-19 y retomar la senda hacia el desarrollo sostenible en América Latina y el Caribe.",
                "referencia": "2020. Comisión Económica para América Latina y el Caribe (Cepal); Organización Panamericana de la Salud (OPS). 27 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45840/4/S2000462_es.pdf",
                "resumen_comentario": "La región es en particular vulnerable por sus altos niveles de informalidad, urbanización, pobreza y desigualdad, así como por sus sistemas frágiles de salud y protección social, por lo que si no se controla la curva de contagio de la pandemia, no se podrá reactivar la economía de los países. Indica que las políticas de salud, económicas y sociales, y el aumento del gasto fiscal, son necesarios para controlar la pandemia y permitir la reactivación y la reconstrucción.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Confederación de Cooperativas de Colombia (Confecoop).",
                "titulo": "Pacto por la economía solidaria y cooperativa: Una cultura para la prosperidad colectiva.",
                "referencia": "s/f. Programa Cooperativas por Colombia. Bogotá: Confederación de Cooperativas de Colombia (Confecoop). 7 pp.",
                "link": "https://confecoop.coop/wp-content/uploads/2019/01/Pacto-por-la-econom%C3%ADa-solidaria-y-el-cooperativismo.pdf",
                "resumen_comentario": "El Pacto, alineado con la Agenda 2030 y sus Objetivos de Desarrollo Sostenible (ODS), busca fortalecer los procesos socioempresariales que contribuyen al crecimiento bajo la figura cooperativa y de empresa de economía solidaria, con el fin de aportar en términos de producción y generación de empleo, y contribuir a una sociedad más solidaria.",
                "observaciones": "Pacto por la ESS de cooperativas de Colombia."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Coraggio, José Luis.",
                "titulo": "Economía social y solidaria: El trabajo antes que el capital.",
                "referencia": "2011. Editores: Alberto Acosta y Esperanza Martínez. Fundación Rosa Luxemburg. Quito: Ediciones Abya Yala.  412 pp.",
                "link": "https://www.coraggioeconomia.org/jlc/archivos%20para%20descargar/economiasocial.pdf",
                "resumen_comentario": "La ética del mercado libre de restricciones sociales está signada por el individualismo, el utilitarismo, la insatisfacción como modo de vida, la competencia de todos contra todos, y la irresponsabilidad frente a la naturaleza y la sociedad. Ante ello, la economía social y solidaria es un proyecto colectivo que pretende reinstitucionalizar la economía en función de la reproducción y desarrollo pleno de la vida de todos.",
                "observaciones": "Incluye un análisis de la economía popular solidaria en Ecuador."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Corragio, José Luis; Arancibia, María Inés y Deux, María Víctoria ",
                "titulo": "Guía para el mapeo y revelamiento de la economía popular solidaria en Latinoamérica y Caribe. ",
                "referencia": "2010. Grupo Red de Economía Solidaria en Perú (Gresp). 90 pp. ",
                "link": "https://base.socioeco.org/docs/gu_a_para_mapeo_y_relevamiento_eps_en_lac.pdf",
                "resumen_comentario": "Tiene como intención realizar un aporte conceptual y metodológico que permita analizar críticamente las prácticas de promoción – acción de la economía popular solidaria en territorios de Latinoamérica y Caribe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Coscione, Marco.",
                "titulo": "Los beneficios y retos del comercio justo: Los casos de Cosurca (Colombia) y Banelino (República Dominicana).",
                "referencia": "2019. Coordinadora Latinoamericana y del Caribe de Pequeños Productores y Trabajadores de Comercio Justo (Clac). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 148 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44615/1/cepal_clac2019_es.pdf",
                "resumen_comentario": "Reflexiona sobre los beneficios y retos del comercio justo para los pequeños agricultores organizados, abordando los aspectos comerciales y la revisión de los criterios Fairtrade en el ámbito social y del desarrollo, la participación de mujeres y jóvenes, la construcción de paz desde los territorios a través de los cultivos orgánicos y de comercio justo, y la producción orgánica en biodiversidad.",
                "observaciones": "Casos de Colombia y República Dominicana."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Coscione, Marco y Mulder, Nanno. (Editores)",
                "titulo": "El aporte del comercio justo al desarrollo sostenible.",
                "referencia": "2017. Coordinadora Latinoamericana y del Caribe de Pequeños Productores y Trabajadores de Comercio Justo (Clac). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 136 pp.",
                "link": "https://www.cepal.org/es/publicaciones/42404-aporte-comercio-justo-al-desarrollo-sostenible",
                "resumen_comentario": "Proporciona un panorama del comercio justo en América Latina y el Caribe, los principales flujos de exportación, una caracterización del movimiento por un comercio justo, su desarrollo histórico e institucional, y las potencialidades para ampliar su impacto en la región, como un aliado importante para el logro de los objetivos de la Agenda 2030.",
                "observaciones": "Casos de Bolivia, Brasil, Chile, Colombia, Ecuador y República Dominicana."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cotera Fretel, Alonso.",
                "titulo": "La economía solidaria y el comercio justo: Un aporte al desarrollo sostenible y sustentable en el Perú.",
                "referencia": "2015. Coordinadora de Entidades Extranjeras de Cooperación Internacional (Coeeci). En: Contribución de la cooperación internacional y de la sociedad civil al desarrollo del Perú. 7 pp.",
                "link": "http://www.coeeci.org.pe/wp-content/uploads/2016/07/Estudio-COEECI-2015_Articulo-9.pdf",
                "resumen_comentario": "Trata sobre la historia y desarrollo de la economía solidaria y el comercio justo en el Perú, desde la creación de pequeños grupos locales y redes que han promovido la economía local, sus logros, y los desafíos que afronta para trascender, ser una estrategia de empleabilidad e ingresos para los pequeños productores, incorporarse en las políticas públicas y ser parte de una propuesta de desarrollo orientada al conjunto de la sociedad.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cueto Fuentes, Eduardo Nicolás; Arboleda Álvarez, Olga Lucía; Zabala Salazar, Hernando y Echeverry Correa, Francisco Javier.",
                "titulo": "Una década de economía social y solidaria en Colombia: Análisis de la producción investigativa y académica 2005 – 2015.",
                "referencia": "2018. Bogotá: Corporación Universitaria Minuto de Dios (Uniminuto) y Universidad Católica Luis Amigó. 210 pp.",
                "link": "https://repository.uniminuto.edu/bitstream/handle/10656/7235/Libro_Una%20Decada%20de%20Economia%20Social.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Busca recuperar la producción escrita con rigor académico que sobre la economía social y solidaria se ha publicado en Colombia, con el fin de analizar sus contenidos teóricos, conceptuales y metodológicos. Se propone identificar avances, logros, enfoques, tendencias, líneas de trabajo, ámbitos de problematización y objetos de estudio que, desde la investigación, aporten al campo del conocimiento de la economía social y solidaria."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Dávila Ladrón de Guevara, Ricardo; Vargas Prieto, Amanda; Blanco, Lina; Roa, Edgar; Cáceres, Luz Estela y Vargas, Luis Alfredo.",
                "titulo": "Características de la economía solidaria colombiana: Aproximaciones a las corrientes influyentes en Colombia.",
                "referencia": "2018. En: Revista de Economía Pública, Social y Cooperativa. Madrid: Ciriec. 31 pp. ",
                "link": "https://base.socioeco.org/docs/ciriec_9303_davila_et_al.pdf",
                "resumen_comentario": "Presentar una reflexión teórica que permitirá tener una guía de análisis para definir la economía solidaria en Colombia. A través de una metodología cualitativa basada en el método de análisis documental y utilizando diferentes técnicas de recolección de información, analiza dos corrientes demográficas que han tenido incidencia en la definición de la economía solidaria en este país.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "De Bago Ruiz, Luis.",
                "titulo": "Reformas legislativas en el derecho social y solidario iberoamericano.",
                "referencia": "2011. Madrid: Fundación Iberoamericana de Economía Social (Fundibes). 251 pp. ",
                "link": "http://www.oibescoop.org/wp-content/uploads/2011_REFORMAS-LEGISLATIVAS.pdf",
                "resumen_comentario": "Compendia estudios de los distintos países latinoamericanos sobre el modelo jurídico, la situación actual y los problemas que hay que afrontar en cada lugar para mejorar el estatus de la economía social."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "De la Cuesta González, Marta. (Coordinadora)",
                "titulo": "La economía circular: Una opción inteligente.",
                "referencia": "2020. Dossieres EsF N° 37. Madrid: Economistas sin Fronteras. 42 pp.",
                "link": "https://ecosfron.org/wp-content/uploads/2020/03/Dossieres-EsF-37-La-Econom%C3%ADa-Circular.pdf",
                "resumen_comentario": "Varios expertos tratan sobre esta nueva forma de entender la economía que empieza a estar presente en las políticas económicas y ambientales, explicando qué es, en qué principios se basa, sus prioridades, cómo avanzar en esta transición de lo lineal a lo circular, y qué herramientas y estrategias se están desarrollando.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "De la Cuesta González, Marta y Estela Barnet, Oriol. (Coordinadores)",
                "titulo": "La economía fundamental: Contribuyendo al bienestar de la ciudadanía.",
                "referencia": "2020. Dossieres EsF N° 38. Madrid: Economistas sin Fronteras. 36 pp.",
                "link": "https://ecosfron.org/wp-content/uploads/2020/07/Dossieres-EsF-38-La-Econom%C3%ADa-Fundamental.pdf",
                "resumen_comentario": "Recoge algunas reflexiones sobre la economía fundamental, que incluye la educación, la atención de salud, la vivienda, los servicios públicos y el suministro de alimentos, poniendo ejemplos de su aplicabilidad, con el fin de ayudar a aterrizar a esta nueva forma de entender la economía.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Del Río, Enrique; Ramírez, Raquel y Aguado, Jeromo.",
                "titulo": "Soberanía alimentaria y economía solidaria son inseparables.",
                "referencia": "2013. Fundación Agricultura Viva. En: Soberanía alimentaria, biodiversidad y culturas Nº 12 (Nuevas fórmulas de economía). 7 pp.",
                "link": "https://core.ac.uk/download/pdf/132085924.pdf",
                "resumen_comentario": "La soberanía alimentaria, como derecho de los pueblos a decidir sus sistemas de producción y distribución de alimentos, mediante agriculturas locales que producen alimentos sanos y cuidan de los ecosistemas, debe ir acompañada de la soberanía cultural y económica, construida desde empresas de la ESS en el mercado social y nuevos espacios de intercambio solidario.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Díaz Carmona, Estela M.",
                "titulo": "El consumo ético entre los jóvenes universitarios españoles.",
                "referencia": "2018. Instituto de la Juventud. En: Revista de Estudios de Juventud Nº 119. 26 pp.",
                "link": "http://www.injuve.es/sites/default/files/2019/03/publicaciones/cap8_el_consumo_etico_entre_los_jovenes_universitarios_espanoles.pdf",
                "resumen_comentario": "Analiza los hábitos de la juventud universitaria hacia el consumo ético. Se concluye que la adopción de formas de consumo ético sigue siendo bajo; las mujeres muestran una actitud más proanimalista en sus decisiones de consumo; y existe una asociación entre el consumo ético y la adscripción política y religiosa. Estos hallazgos son de importancia para promover el consumo ético, hacia una sociedad menos antropocéntrica y más igualitaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Díaz Muñoz, José Guillermo.",
                "titulo": "Economías solidarias en América Latina.",
                "referencia": "2015. Guadalajara: Instituto Tecnológico y de Estudios Superiores de Occidente (Iteso). 406 pp.",
                "link": "https://www.cpalsocial.org/documentos/401.pdf",
                "resumen_comentario": "Realiza una contextualización de la economía solidaria en el mundo, sobre la base de la construcción de alternativas de ESS mediante el análisis de sus procesos desde las esferas económica, política y social, y las dimensiones ambiental, de género, glocal y cultural identitaria, así como las tendencias de la ESS y la construcción de un movimiento social en América Latina.",
                "observaciones": "Tesis."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Economistas sin Fronteras (EsF).",
                "titulo": "Prácticas y herramientas para impulsar la economía social y solidaria: Una reflexión compartida.",
                "referencia": "2018. Dossieres EsF N.º 31. Madrid: Economistas sin Fronteras (EsF). 50 pp.",
                "link": "https://ecosfron.org/wp-content/uploads/Dossieres-EsF-31-Pr%C3%A1cticas-y-herramientas-para-impulsar-la-ESS.pdf",
                "resumen_comentario": "Aborda cuestiones referidas a los emprendimientos desde la ESS (financiación, gerencia, legal), sus límites y oportunidades, así como nuevas vías para avanzar a convertir empresas tradicionales en ESS y el fomento de iniciativas de personas que trabajan desde la precariedad, pensando en cómo las herramientas de la ESS sobre el trabajo colectivo pueden mejorar sus condiciones."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Espelt, Richard y Fransualdo de Azevedo, Francisco.",
                "titulo": "Evolución e impacto de la economía social y solidaria en Brasil y Cataluña: Dos perspectivas complementarias.",
                "referencia": "2018. Universitat de Barcelona y Geocrítica. 22 pp.",
                "link": "http://www.ub.edu/geocrit/XV-Coloquio/EspeltAzevedo.pdf",
                "resumen_comentario": "Reseña la conceptualización de la economía social y solidaria y su articulación en Brasil y Cataluña, para identificar las organizaciones y herramientas que resultan claves en su expansión en estos territorios.",
                "observaciones": "Artículo. XX Coloquio Internacional de Geocrítica: Las ciencias sociales y la edificación de una sociedad postcapitalista."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fajardo García, Gemma y Senent Vidal, María José.",
                "titulo": "Economía social: Identidad, desafíos y estrategias.",
                "referencia": "2014. Red Universitaria Eurolatinoamericana en Economía Social y Cooperativa (Rulescoop). Valencia: Centro Internacional de Investigación e Información sobre la Economía Pública, Social y Cooperativa (Ciriec). 441 pp.",
                "link": "http://www.relats.org/documentos/ESSLibro1.pdf",
                "resumen_comentario": "Analiza el derecho cooperativo en un mundo globalizado, el futuro de las cooperativas, así como su papel y el de las empresas sociales en la reforma de los sistemas de bienestar social; presenta el “estado de la ciencia” en los subsectores analizados; y muestra la evolución de la economía social y solidaria en Latinoamérica y Europa."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Figueroa Espinel, Julián Francisco y Castillo Sandoval, Darío.",
                "titulo": "Conceptualizaciones ambientales en la economía: La búsqueda de una economía solidaria ambiental.",
                "referencia": "s/f. Alianza Cooperativa Internacional (Aci). Pontificia Universidad Javeriana, Unidad de Estudios Solidarios.  7 pp.",
                "link": "https://www.aciamericas.coop/IMG/pdf/6._sostenibilidad_julian_figueroa.pdf",
                "resumen_comentario": "Recoge elementos relevantes no usados hasta ahora para relacionar la economía solidaria y los sistemas de gestión ambiental, y se enfoca en la iniciativa del cooperativismo internacional llamada “Pacto Verde Cooperativo”, que invita a que de manera voluntaria este tipo de organizaciones incluyan buenas prácticas de gestión ambiental al interior de sus procesos productivos y oferta de servicios.",
                "observaciones": "Coloquio de sostenibilidad."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fonteneau, Bénédicte; Wanyama, Fredrick; Pereira Morais, Leandro y De Poorter, Mathieu.",
                "titulo": "Economía social y solidaria: Construyendo un entendimiento común",
                "referencia": "2010. Centro Internacional de Formación, Organización Mundial del Trabajo (OIT). Turín: Academia sobre Economía Social y Solidaria. 100 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---ed_emp/---emp_ent/---coop/documents/publication/wcms_546400.pdf",
                "resumen_comentario": "Presenta un mapa de los tipos de empresas y organizaciones de economía social y solidaria, su gobernanza y gestión, las políticas públicas para apoyar su desarrollo a nivel nacional e internacional, y examina cómo estas entidades contribuyen a un marco de desarrollo internacional.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gallero Moreiras, Adrián.",
                "titulo": "Guía didáctica de economía social y solidaria.",
                "referencia": "2017. European Regional and Development Fund through the Urban Innovative Actions Initiative (UIA). Madrid: Proyecto Mares. 60 pp.",
                "link": "https://maresmadrid.es/wp-content/materiales-mares-mad/materiales-comunicacion/publicaciones/Guia-diactica-economia-social-y-solidaria-MARES.pdf",
                "resumen_comentario": "Hace referencia a experiencias de la ciudadanía para afrontar la crisis, como iniciativas de autoempleo, recuperación de espacios en desuso, creación de redes de economía y de apoyo mutuo, etc. Promueve la creación de empresas de economía social y solidaria, la generación de tejido productivo y comunitario, y buenas prácticas ciudadanas e institucionales para una ciudad sostenible, saludable y cooperativa.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "García Ramos, Luz Elvia.",
                "titulo": "La economía social, solidaria y el cooperativismo: Clave estratégica para la expansión y fortalecimiento de la región.",
                "referencia": "2015. Universidad de Guadalajara, Centro Universitario de Ciencias Económico Administrativas. México: Red Universitaria Eurolatinoamericana en Estudios Cooperativos y de Economía Social (Rulescoop). 17 pp.",
                "link": "http://sedici.unlp.edu.ar/bitstream/handle/10915/49940/Documento_completo__.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Analiza la participación de las universidades y las comunidades en la Economía Social, Solidaria y el Cooperativismo (ESSyC), con el fin de promover un paradigma científico basado en la formación de nuevos profesionales competitivos, de calidad y solidarios dentro de su entorno social, propiciando su inclusión en el mercado laboral y la incorporación de estas propuestas en las políticas públicas.",
                "observaciones": "IX Congreso Internacional Rulescoop."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guerra, Pablo.",
                "titulo": "La economía solidaria en Latinoamérica.",
                "referencia": "2010. En: Papeles de relaciones ecosociales y cambio global N° 110. Montevideo. 10 pp.",
                "link": "https://base.socioeco.org/docs/la_economia_solidaria_en_latinoamerica_p_guerra.pdf",
                "resumen_comentario": "Trata sobre la economía social y solidaria en Latinoamérica, presentando los desafíos de la economía informal, donde la economía solidaria debe introducirse para ser parte del desarrollo local y comunitario.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grez, Francisco. (Ed.)",
                "titulo": "Pobreza y desigualdad. Informe latinoamericano 2017: No dejar a ningún territorio atrás.",
                "referencia": "2018. Rimisp, Centro Latinoamericano para el Desarrollo Rural. Santiago: Fondo Internacional de Desarrollo Agrícola (Fida); International Development Research Center (IDRC, Canadá). 198 pp.",
                "link": "http://rimisp.org/Informe_Rimisp_2017_Fin_Completo.pdf",
                "resumen_comentario": "Aborda la desigualdad territorial desde la perspectiva de las brechas sociales y las posibilidades de desarrollo de los territorios y de sus habitantes, considerando indicadores a nivel subnacional para algunos de los Objetivos de Desarrollo Sostenible y la implementación de la Agenda 2030, incluyendo los resultados del Índice de Equidad Territorial (IET-ODS).",
                "observaciones": "Incluye experiencias de Colombia y Ecuador."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo Red de Economía Solidaria Perú (Gresp) y Grupo Social Economy Forum (Gsef).",
                "titulo": "Mapeo de la economía social y solidaria de Perú.",
                "referencia": "2018. Secretariado Gsef. 53 pp.",
                "link": "https://gsef-net.org/sites/default/files/PERU%20SSE%20Mapping_ES.pdf",
                "resumen_comentario": "Realiza un mapeo de la situación en el Perú de las organizaciones y redes de economía social y solidaria, que fue llevado a cabo a través de entrevistas realizadas entre 2017 y 2018.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guerra, Pablo ",
                "titulo": "Economía de la solidaridad: Construcción de un camino a veinte años de las primeras elaboraciones.",
                "referencia": "2003. III jornadas en Historia Económica. Montevideo. 11 pp. ",
                "link": "https://base.socioeco.org/docs/guerra_historia_e_s_03.pdf",
                "resumen_comentario": "Efectúa un recorrido histórico sobre las fuentes de información de la economía social y solidaria en América Latina y el surgimiento de las mismas en dos décadas.",
                "observaciones": "Documento preparado para las III Jornadas en Historia Económica. Montevideo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hopp, Magdalena Víctoria.",
                "titulo": "Economía social y solidaria: Conceptos, prácticas y políticas públicas. Debates y propuestas comprometidas con la construcción de “otra economía”.",
                "referencia": "2016. Hegoa, Instituto de Estudios sobre Desarrollo y Cooperación Internacional de la Universidad del País Vasco. En: Revista Idelcoop N° 222. 6 pp.",
                "link": "https://www.idelcoop.org.ar/sites/www.idelcoop.org.ar/files/revista/articulos/pdf/resenas_pg_175-180.pdf",
                "resumen_comentario": "Aborda la economía social y solidaria a partir de debates conceptuales, análisis de experiencias y prácticas, y de políticas públicas para la construcción de “otra economía”, así como los aportes de la economía feminista y su potencial para pensar una economía solidaria que tome en cuenta la crítica a la organización patriarcal de la sociedad capitalista que reproduce las desigualdades de género.",
                "observaciones": "Reseña del libro Economía social y solidaria: Conceptos, prácticas y políticas públicas. Debates y propuestas comprometidas con la construcción de “otra economía”."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Promoción de Exportaciones e Inversiones (Pro Ecuador).",
                "titulo": "Anuario de exportaciones del sector asociativo y comercio justo 2017.",
                "referencia": "2018. Ministerio de Comercio Exterior e Inversiones. Quito: Instituto de Promoción de Exportaciones e Inversiones (Pro Ecuador). 20 pp.",
                "link": "https://base.socioeco.org/docs/anuario-comercio-justo-2018.pdf",
                "resumen_comentario": "Expone las tendencias y perspectivas de los consumidores del comercio justo, la situación de organizaciones de la Economía Popular y Solidaria (EPS), sus productos y productores, los requisitos y procedimientos para la certificación de comercio justo, y la evolución de las exportaciones de EPS y comercio justo de Ecuador.",
                "observaciones": "Anuario."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kühn, Stefan; Milasi, Santo y Grimshaw, Damian.",
                "titulo": "Perspectivas sociales y del empleo en el mundo: Tendencias 2019.",
                "referencia": "2019. Ginebra: Organización Internacional del Trabajo (OIT). 126 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_713013.pdf",
                "resumen_comentario": "Da una visión general sobre las tendencias mundiales y regionales en materia de empleo, desempleo, participación en la fuerza laboral y productividad, así como la calidad del empleo y la pobreza laboral. También examina los ingresos y el malestar social, y hace un balance del progreso del ODS 8.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "León Zúñiga, Lilliana María y León Zúñiga, María del Carmen. (Compiladoras)",
                "titulo": "Mujeres, economía solidaria y consumo responsable.",
                "referencia": "2014. Evangelischer Entwicklungsdienst (EED), Acta Alliance Alemana. San José de Costa Rica: Asociación Educativa Centro de Comunicación Voces Nuestras. 214 pp.",
                "link": "https://caritaslatinoamerica.org/wp-content/uploads/2017/05/archivos_selacc_Mujeresecosol.pdf",
                "resumen_comentario": "Desde el concepto desarrollado por Hinkelammert y Mora, que proponen una economía para la vida y generar condiciones que permitan una vida digna y la satisfacción plena de las necesidades, se plantea una reflexión de las mujeres sobre su participación económica como un paso importante en el proceso de valoración del trabajo desde ellas mismas y para el resto de la sociedad.",
                "observaciones": "VII Concurso de Mujeres: Voces, Imágenes y Testimonios. 2013."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Manrique Guzmán, Arturo; Vargas Casas, Luis y Cabrera Manrique, Saúl.",
                "titulo": "Contribución de la cooperación internacional y de la sociedad civil al desarrollo del Perú 2015.",
                "referencia": "2016. Coordinadora de Entidades Extranjeras de Cooperación Internacional (Coeeci). 212 pp.",
                "link": "https://www.eclosio.ong/wp-content/uploads/2019/01/estudio-contribuciy-n-de-la-cooperaciy-n-internacional-y-de-la-sociedad-civil-al-desarrollo-del-pery-.pdf",
                "resumen_comentario": "Propone una reflexión sobre la contribución de las organizaciones de la sociedad civil al desarrollo del país, ilustrando sus aportes y los desafíos futuros de los modelos económicos que predominan en el mundo, explorando alternativas con un enfoque de derechos y en armonía con ecosistemas sustentables, en el que economía solidaria y comercio justo tienen un rol destacado."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Marañón Pimentel, Boris. (Coordinador)",
                "titulo": "La economía solidaria en México.",
                "referencia": "2013. Universidad Nacional Autónoma de México (Unam), Instituto de Investigaciones Económicas. 224 pp.",
                "link": "http://ru.iiec.unam.mx/2469/2/EconomiaSolidariaTexto.pdf",
                "resumen_comentario": "Indaga si las iniciativas colectivas pueden resolver las necesidades materiales de sus integrantes, así como sus posibilidades para perfilarse como embriones de una sociedad anticapitalista, al introducir en sus prácticas cotidianas una modificación de las relaciones sociales, y en qué medida pueden constituirse en sujetos colectivos que apunten no sólo a otra economía, sino a una sociedad alternativa."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Desarrollo Social, Argentina.",
                "titulo": "Cuadernillo del formador: Programa Formador de formadores.",
                "referencia": "s/f. Santa Fe: Programa de Formación para promotores de la Economía Social. 85 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/CUADERNILLO%20DEL%20FORMADOR.pdf",
                "resumen_comentario": "Analiza los condicionantes para el fortalecimiento de la economía social; identifica oportunidades para los emprendimientos productivos; reconoce la participación democrática y asociativa en el proceso productivo; y compara los procesos de la cadena productiva en una economía tradicional y en una economía social.",
                "observaciones": "Guía para formadores."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mogrovejo, Rodrigo; Mora, Alberto y Vanhuynegem, Philippe.",
                "titulo": "El cooperativismo en América Latina: Una diversidad de contribuciones al desarrollo sostenible.",
                "referencia": "2012. Organización Internacional del Trabajo (OIT); Alianza Cooperativa Internacional para las Américas (ACI Américas). La Paz: Oficina de la OIT para los Países Andinos. 404 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_188087.pdf",
                "resumen_comentario": "Diagnóstico del cooperativismo en cinco países de la región desde un punto de vista histórico y actual. Se tomó en cuenta que en ellos existen situaciones propias del movimiento cooperativo que pueden servir de base para el desarrollo de nuevos modelos de organización cooperativa en los demás países.",
                "observaciones": "Casos de Bolivia, Costa Rica, Guatemala, Paraguay y Perú."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mogrovejo, Rodrigo; Vanhuynegem, Philippe y Vásquez, Miguel.",
                "titulo": "Visión panorámica del sector cooperativo en Perú: El renacimiento de un modelo.",
                "referencia": "2012. Organización Internacional del Trabajo (OIT); Alianza Cooperativa Internacional para las Américas (ACI Américas); Ministerio de la Producción. La Paz: Oficina de la OIT para los Países Andinos. 108 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---americas/---ro-lima/documents/publication/wcms_185026.pdf",
                "resumen_comentario": "La falta de interés del Estado durante varias décadas respecto al tema cooperativo implicó un descenso en la generación de empleo directo. En los últimos años se reconoce la importancia del cooperativismo en la historia del Perú, orientando su potencial económico y social a las poblaciones vulnerables —respecto a las que el sector privado muestra poca presencia—, y a alimentar las políticas públicas para el desarrollo sostenible de la economía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Monje-Reyes, Pablo.",
                "titulo": "Economía solidaria, cooperativismo y descentralización: La gestión social puesta en práctica.",
                "referencia": "2011. En: Cadernos Ebape.BR, vol. 9, Nº 3. Río de Janeiro: Escola Brasileira de Administração Pública e de Empresas (Ebape). 21 pp.",
                "link": "https://www.redalyc.org/pdf/3232/323227831003.pdf",
                "resumen_comentario": "Analiza las formas de organización social que pueden fortalecer el rol de los actores sociales subalternos, proponiendo un debate conceptual sobre descentralización, gestión social y cooperativismo, en el marco de las buenas prácticas en economía solidaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Montoya, Luis. (Editor)",
                "titulo": "¿Otras economías? Experiencias económico- sociales y solidarias en el Perú.",
                "referencia": "2017. Hegoa, Instituto de Estudios sobre Desarrollo y Cooperación Internacional de la Universidad del País Vasco.  Lima: Editorial Universidad Nacional Mayor de San Marcos (UNMSM). 269 pp.",
                "link": "http://www.hegoa.ehu.es/",
                "resumen_comentario": "Publicación colectiva cuyo objetivo es examinar los procesos de diferentes experiencias de economías sociales y solidarias, con una aproximación a los antecedentes e inicio de los debates a fines del siglo XIX y primera década del XX; analiza los años 60 y 70, y la producción de los 80, 90 y los 15 primeros años del XXI, presentando un  balance y una propuesta de agenda para los próximos años."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Monzón Campos, José Luis y Chaves Ávila, Rafael.",
                "titulo": "La economía social en la Unión Europea.",
                "referencia": "2012. Centro Internacional de Investigación e Información sobre la Economía Pública, Social y Cooperativa (Ciriec). Bruselas: Comité Económico y Social Europeo (Cese). 126 pp.",
                "link": "https://www.eesc.europa.eu/resources/docs/qe-30-12-790-es-c.pdf",
                "resumen_comentario": "El objetivo es brindar información sobre la ESS en Europa y ampliar su ámbito para incluir a los Estados miembros de la UE, así como examinar las definiciones, el estado, la contribución, los instrumentos jurídicos y las políticas públicas que rodean a la economía social y la repercusión de la crisis económica.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Moreno, José Ángel. (Coord.)",
                "titulo": "Prácticas y herramientas para impulsar la Economía Social y Solidaria: Una reflexión compartida.",
                "referencia": "2018. Dossieres EsF N° 31. Madrid: Economistas sin Fronteras. 50 pp.",
                "link": "https://www.reasred.org/sites/default/files/reaslibrary/attachments/Dossieres-EsF-31-Pra%CC%81cticas-y-herramientas-para-impulsar-la-ESS.pdf",
                "resumen_comentario": "Contiene artículos sobre la puesta en marcha de políticas locales orientadas a la promoción de economías que transformen el territorio para lograr un desarrollo local integral, incluyendo el consumo responsable y soluciones empresariales innovadoras, que consolidan el tejido productivo de la Economía Social y Solidaria (ESS).",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mozas Moral, Adoración y Bernal Jurado, Enrique.",
                "titulo": "Desarrollo territorial y economía social.",
                "referencia": "2006. Ciriec-España. En: Revista de economía pública, social y cooperativa. 18 pp.",
                "link": "https://www.redalyc.org/pdf/174/17405505.pdf",
                "resumen_comentario": "En este trabajo se presenta a las entidades de economía social como agentes de desarrollo, analizando las repercusiones que han generado sobre la economía social, el cambio de política de desarrollo y los rasgos distintivos de estas entidades, que las configuran como impulsoras del mismo.",
                "observaciones": "Artículo. "
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mutuberría Lazarini, Valeria y Plotinsky, Daniel (Compiladores) ",
                "titulo": "La economía social y solidaria en la historia de Latinoamérica y el Caribe: Cooperativismo, desarrollo comunitario y Estado.",
                "referencia": "2015. Instituto de la Cooperación (Idelcoop). Fundación de Educación, Investigación y Asistencia Técnica. Tomo I. 321 pp.",
                "link": "http://www.ripess.org/wp-content/uploads/2017/08/congreso_de_historia_y_economia_social_-_tomo_1.pdf",
                "resumen_comentario": "Recopilación de textos orientados a relatar experiencias y prácticas sobre las diferentes expresiones que se desarrollan en Latinoamérica y el Caribe en el amplio campo de la economía social y solidaria, presentados en el Congreso internacional La economía social y solidaria en la historia de Latinoamérica y el Caribe: Cooperativismo, desarrollo comunitario y Estado."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Obando, Diego.",
                "titulo": "Economía solidaria: ¿En función de un desarrollo alternativo o de un neocapitalismo?",
                "referencia": "2009. En: Alteridad, revista de educación. Universidad Politécnica Salesiana, Ecuador. 11 pp.",
                "link": "https://www.redalyc.org/pdf/4677/467746245008.pdf",
                "resumen_comentario": "Hace un análisis sobre el escenario político y el marco legal constitucional en Ecuador, planteando estrategias para llevar a cabo e implementar la economía solidaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Informe sobre la economía creativa 2013: Ampliar los cauces de desarrollo local.",
                "referencia": "2014. Nueva York: Programa de las Naciones Unidas para el Desarrollo (PNUD). París: Unesco. 190 pp.",
                "link": "http://www.unesco.org/culture/pdf/creative-economy-report-2013-es.pdf",
                "resumen_comentario": "Muestra el papel de las industrias culturales y creativas del ámbito subnacional centrado en jóvenes, mujeres e indígenas, para lograr un desarrollo inclusivo desde lo local, las regiones, ciudades y comunidades.",
                "observaciones": "Incluye estudios de caso de varios países."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas (ONU).",
                "titulo": "La economía social y solidaria y el reto del desarrollo sostenible.",
                "referencia": "2014. Grupo de Trabajo Interinstitucional de las Naciones Unidas sobre Economía Social y Solidaria. 46 pp.",
                "link": "http://www.relats.org/documentos/ESSNUnidas.pdf",
                "resumen_comentario": "Documento de posición que surge como respuesta a la preocupación de que el proceso de elaboración de una agenda de desarrollo post-2015 y el establecimiento de los Objetivos de Desarrollo Sostenible (ODS) haya prestado una atención insuficiente al papel de la Economía Social y Solidaria (ESS)."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Paz, Álvaro; Montoya, María Paz y Asensio, Raúl H. (Ed.)",
                "titulo": "Escalando innovaciones rurales.",
                "referencia": "2013. Fondo Internacional de Desarrollo Agrícola (FIDA); International Development Research Center (IDRC, Canadá). Lima: Instituto de Estudios Peruanos (IEP).  413 pp.",
                "link": "https://rimisp.org/wp-content/files_mf/1484160049Escalando_innovaciones_rurales.pdf",
                "resumen_comentario": "La innovación en el trabajo, rutinas y relaciones sociales de las poblaciones rurales a partir de su experiencia más la tecnología agroecológica, son la base de estrategias para la seguridad alimentaria, la inclusión social y el desarrollo territorial rural.",
                "observaciones": "Trabajos del Seminario Internacional sobre Escalamiento de Innovaciones Rurales. Lima, 2012."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pérez, Ángel.",
                "titulo": "Aproximación a la economía social y solidaria: Cooperativismo venezolano.",
                "referencia": "2017. En: Revista Economía, XLII, Nº 43. 37 pp.",
                "link": "https://www.redalyc.org/pdf/1956/195654622007.pdf",
                "resumen_comentario": "Describe iniciativas de producción y prestación de servicios sociales y personales, distintas a la empresa privada y a la administración pública, organizadas en base a la libre asociación, los principios de cooperación y autogestión. Además, resume la historia del cooperativismo venezolano y muestra una imagen gráfica de una cooperativa a inicios del siglo XX.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pérez de Mendiguren, Juan Carlos; Etxezarreta Etxarri, Enekoitz y Guridi Aldanondo, Luis.",
                "titulo": "¿De qué hablamos cuando hablamos de Economía Social y Solidaria? Concepto y nociones afines.",
                "referencia": "2008. Bilbao: XI Jornadas de Economía Crítica. 26 pp.",
                "link": "https://www.economiasolidaria.org/files/Economia_social_y_solidaria_concepto_nociones.pdf",
                "resumen_comentario": "Explica la historia y el proceso desde una forma particular de integrar la lógica del mercado junto a la de la solidaridad y la redistribución, de entidades que adoptan forma internas de gestión que pueden asemejarse a las de las empresas mercantiles o a las de las asociaciones cívicas tradicionales del tercer sector, hasta lo que es hoy la economía social y solidaria."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pérez de Mendiguren, Juan Carlos y Etxezarreta, Enekoitz.",
                "titulo": "Sobre el concepto de economía social y solidaria: Aproximaciones desde Europa y América Latina.",
                "referencia": "2015: En: Revista de Economía Mundial N° 40.  22 pp.",
                "link": "http://sem-wes.org/sites/default/files/revistas/08%20P%C3%A9rezdeMendiguren%20REM40.pdf",
                "resumen_comentario": "El término Economía Social y Solidaria, como amalgama de los conceptos Economía Social y Economía Solidaria, se ha consolidado como referencia sobre la posibilidad de construir otras formas de entender lo económico y otras formas de ser y hacer empresa. Con esta idea se pretende reunir en un único término el potencial de cambio, transformación e innovación que se encierra en cada uno de los conceptos anteriores."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pérez de Uralde, José María.",
                "titulo": "La economía social en Iberoamérica: Un acercamiento a su realidad.",
                "referencia": "2006. Fundación Iberoamericana de la Economía Social (Fundibes). Madrid. 438 pp.",
                "link": "http://www.oibescoop.org/wp-content/uploads/2006_FUNDIBES-ES-Iberoamerica-vol1.pdf",
                "resumen_comentario": "Compendio de investigación que presenta la situación de la economía social y solidaria en gran parte de Iberoamérica, ahondando en situaciones particulares en diferentes países en América del Sur."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pineda Salazar, Ramón y Titelman, Daniel. (Coordinadores)",
                "titulo": "Estudio económico de América Latina y el Caribe 2019. El nuevo contexto financiero mundial: Efectos y mecanismos de transmisión en la región.",
                "referencia": "2019. División de Desarrollo Económico de la Comisión Económica para América Latina y el Caribe (Cepal). Santiago de Chile: Cepal. 243 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44674/221/S1900414_es.pdf",
                "resumen_comentario": "Resume desempeño de la economía regional en 2018 y su evolución en 2019, así como las características y desafíos que se plantean para sus políticas macroeconómicas. Analiza el crecimiento económico junto a sus potenciales vulnerabilidades, y los cambios ocurridos en el sistema financiero internacional tras la crisis mundial de 2007-2008.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Poirier, Yvon.",
                "titulo": "Economía social solidaria y sus conceptos cercanos. Orígenes y definiciones: Una perspectiva internacional.",
                "referencia": "2014. Québec: Red Intercontinental de Promoción de la Economía Social Solidaria (Ripess). 26 pp.",
                "link": "http://www.ripess.org/wp-content/uploads/2017/09/Economie-solidaria-y-sus-conceptos-cercanos-Poirier-Julio-2014.pdf",
                "resumen_comentario": "Muestra las diferencias entre los conceptos de economía social y solidaria desde 1830, y las distintas formas actuales de conceptualizar el trabajo en las diferentes culturas y contextos, usando francés, inglés, español o portugués, como parte de la construcción del movimiento global de economía solidaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Puig, Carlos. (Coordinador)",
                "titulo": "Economía social y solidaria: Conceptos, prácticas y políticas públicas.",
                "referencia": "2016. Agencia Vasca de Cooperacion para el Desarrollo. Bilbao: Instituto de Estudios sobre Desarrollo y Cooperación Internacional (Hegoa), Universidad del País Vasco. 193 pp.",
                "link": "http://publicaciones.hegoa.ehu.es/uploads/pdfs/300/ESS_Conceptos,_practicas_y_politicas_publicas.pdf?1488539889",
                "resumen_comentario": "Tiene como objetivo apoyar programas e iniciativas en torno a la economía social y solidaria, así como los derechos económicos de las mujeres, incidiendo en políticas públicas, particularmente en Bolivia, Ecuador, Perú y la región andina."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Radrigán Rubio, Mario.",
                "titulo": "Manual de buenas prácticas de la economía social y el empleo en América Latina.",
                "referencia": "2011. Fundación Iberoamericana de Economía Social (Fundibes). Madrid. 192 pp.",
                "link": "http://www.oibescoop.org/wp-content/uploads/2011_Manual_Buenas_Practicas_ES_Empleo_Am_Latina.pdf",
                "resumen_comentario": "Pone de manifiesto la importancia y dinamismo de la economía social, de su propia responsabilidad social, y la vigencia de los principios y valores en que se sustentan, tales como la solidaridad, la intercooperación, la ayuda mutua, el trabajo en equipo y la respuesta a problemas de las comunidades locales; y de cómo las buenas prácticas, puestas de relieve, son un elemento necesario para conseguir el bienestar social.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ramírez Babativa, Diana Carolina y González Rico, Juan Carlos.",
                "titulo": "La economía solidaria: Cooperativismo como una alternativa de desarrollo en las zonas de posconflicto en Colombia.",
                "referencia": "2018. Bogotá: Universidad Militar Nueva Granada, Facultad de Ciencias Económicas. 30 pp.",
                "link": "https://repository.unimilitar.edu.co/bitstream/handle/10654/20562/RamirezBabativaDianaCarolina%2C%20GonzalezRicoJuanCarlos2018.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Da a conocer a los precursores del cooperativismo en Colombia, su normatividad, cómo se enfoca este sistema solidario en el acuerdo de paz dentro del Plan Nacional de Fomento a la Economía Solidaria (Planfes), y las repercusiones de la creación de cooperativas por parte de Canadá, así como los obstáculos que se presentan para su implementación y cómo se pueden solucionar.",
                "observaciones": "Monografía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ramírez-Díaz, Luis Francisco; Herrera-Ospina, José de Jesús y Londoño-Franco, Luis Fernando.",
                "titulo": "El cooperativismo y la economía solidaria: Génesis e historia.",
                "referencia": "2016. En: Cooperativismo y Desarrollo, Volumen 24, Nº 109. 13 pp.",
                "link": "https://core.ac.uk/download/pdf/234118517.pdf",
                "resumen_comentario": "Presenta el pensamiento filosófico sobre los comienzos de la economía solidaria; ilustra su desarrollo y el del cooperativismo desde su concepción hasta su aporte al mejoramiento de la calidad de vida; da una mirada desde las corrientes surgidas; y plantea la economía solidaria como respuesta a las crisis sociales y como base para el progreso de las comunidades.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ramírez Sanz-Pastor, Cristina",
                "titulo": "¿La economía solidaria puede contribuir a mejorar la situación económica y social actual?",
                "referencia": "2015. Facultad de Ciencias Económicas y Empresariales, Universidad Pontificia Comillas. Madrid. 50 pp.",
                "link": "https://repositorio.comillas.edu/jspui/bitstream/11531/4195/1/TFG001143.pdf",
                "resumen_comentario": "Pone en cuestión al capitalismo contemporáneo como sistema productivo, realizando un análisis ético y de justicia, en la medida en que genera una gran riqueza con sus actividades productivas pero no lleva a cabo una distribución justa. Plantea la necesidad de humanizar el sistema económico e incorporar la economía solidaria como motor de desarrollo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ramón Gancedo, María y Ferrero Carrera, Germán.",
                "titulo": "Manual de buenas prácticas para el emprendimiento social en el ámbito rural.",
                "referencia": "2019. León: Social Soluciones S. Cooperativa de Iniciativa Social. 56 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/Manual%20de%20Buenas%20Pr%C3%A1cticas.pdf",
                "resumen_comentario": "Recursos utilizados en iniciativas de empresas sociales en el ámbito rural desde los principios y valores de la economía social y solidaria, para abordar problemas sociales y ambientales a través de actividades económicas sostenibles, democráticas y basadas en el apoyo mutuo.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red de Redes de Economía Alternativa y Solidaria (Reas).",
                "titulo": "Carta de la economía solidaria.",
                "referencia": "2011. Red de Redes de Economía Alternativa y Solidaria (Reas). 13 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/pages_attachments/CARTA_ECONOMIA_SOLIDARIA_REAS.pdf",
                "resumen_comentario": "Presenta los seis principios de la economía solidaria (equidad, trabajo, sostenibilidad ambiental, cooperación, sin fines lucrativos y compromiso con el entorno), así como los ejes transversales de su labor.",
                "observaciones": "Declaración."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red de Redes de Economía Alternativa y Solidaria (Reas).",
                "titulo": "Dossier presentación: 25 años en red, caminando por la economía solidaria.",
                "referencia": "2011. Red de Redes de Economía Alternativa y Solidaria (Reas). 20 pp.",
                "link": "https://www.reasred.org/sites/default/files/reaslibrary/attachments/DOSSIER%20RDR%202020.pdf",
                "resumen_comentario": "Los principios y objetivos de la economía social y solidaria, el fortalecimiento del trabajo en red, la incorporación de la perspectiva feminista, el mercado social, las finanzas éticas y los instrumentos del sector, son tratados en este texto."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red de Redes de Economía Alternativa y Solidaria (Reas).",
                "titulo": "Guía de iniciativas de economía solidaria.",
                "referencia": "2020. Red de Redes de Economía Alternativa y Solidaria (Reas).",
                "link": "https://docs.google.com/spreadsheets/d/1-QlRMVacnbEsFFml_oMruhTFNQUMO77VA0Rww6oGvw8/edit#gid=0&fvid=259503354",
                "resumen_comentario": "Recopilación de iniciativas de denuncia, resistencia y alternativas que se están llevando a cabo para hacer frente al Covid-19, elaboradas desde la ciudadanía, campañas de consumo, grupos de apoyo y otros.",
                "observaciones": "Sólo disponible en internet."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red Intercontinental de Promoción de la Economía Social Solidaria (Ripess).",
                "titulo": "Visión global de la economía social solidaria: Convergencias y contrastes en los conceptos, definiciones y marcos conceptuales.",
                "referencia": "2015. Red Intercontinental de Promoción de la Economía Social Solidaria (Ripess). 16 pp.",
                "link": "http://www.ripess.org/wp-content/uploads/2017/08/RIPESS_Vision-Global_ESP1.pdf",
                "resumen_comentario": "Explora la economía social solidaria posicionándola como la vía para un cambio transformador y sistémico, y reafirma sus valores. Analiza los temas de los actores, sectores y prácticas que constituyen la ESS, las estrategias de los movimientos, y sus relaciones con diversos conceptos claves.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Retolaza Ávalos, José Luis y Ruiz Roqueñi, Maité.",
                "titulo": "Políticas de género en la economía solidaria.",
                "referencia": "2005. Asociación Aurkilan. Universidad del País Vasco. En: Han Larremanak Nº 13. 14 pp.",
                "link": "https://www.researchgate.net/publication/28148147_Politicas_de_genero_en_la_economia_solidaria",
                "resumen_comentario": "La economía solidaria supone un intento de superar la centralidad de la empresa respecto a la persona y las relaciones de asimetría que van a la discriminación, y la desigualdad de la mujer en la empresa. Se contrasta las herramientas metodológicas y el resultado de las políticas de género aplicadas en empresas solidarias. Se propone líneas de actuación que permitan pasar de una política pasiva de igualdad de género a una activa en la que el trabajo de la persona vea una perspectiva no discriminante."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ribó i Flos, Jordi.",
                "titulo": "Guía sobre la economía social y solidaria.",
                "referencia": "2010. Confederación Sindical de Comisiones Obreras (Ccoo). 160 pp.",
                "link": "https://www.ccoo.es/7b87c937a2a31bec210192511b97d5f2000001.pdf",
                "resumen_comentario": "Tiene como objetivo servir a los trabajadores que quieren constituir una empresa de economía, considerándola como la puerta de su reingreso a la actividad laboral y al sindicato como un apoyo a su proyecto emprendedor, con el fin de mantener sus empleos y sus proyectos económicos.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rodríguez, Juan Carlos y Ravines, Andrea.",
                "titulo": "Estudio de sistematización de la práctica de las finanzas rurales en el Perú desde el sector de la economía social y solidaria.",
                "referencia": "2019. Fondo de Garantía Latinoamericana (Fogal); Islas de Paz; Otra Tierra; Cooperación Belga al Desarrollo. Lima: Sos Faim. 66 pp.",
                "link": "http://www.coeeci.org.pe/wp-content/uploads/2019/09/finanzas-rurales-economia-solidaria.pdf",
                "resumen_comentario": "Busca ordenar y reconstruir la información existente sobre la práctica de las finanzas rurales en Perú dentro del sector de la economía social solidaria, desde la experiencia del Programa común de promoción de la agricultura familiar sostenible y de la economía social para un mundo más justo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Roitman, Roberto D.",
                "titulo": "¿De qué hablamos cuando hablamos de economía social?",
                "referencia": "2016. Mendoza: Marcos Mattar Ediciones. 102 pp.",
                "link": "https://bdigital.uncu.edu.ar/objetos_digitales/8617/libro-ess-completo.pdf",
                "resumen_comentario": "Describe los conceptos de la Economía Social y Solidaria, sus aportes al desarrollo local y a las políticas públicas, su origen, los actores económicos, y la experiencia en Argentina.",
                "observaciones": "Al final de cada capítulo, contiene guías de sistematización y divulgación."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Romero, Marcela; Villagra, Eliana; Sigliano, Fernanda; Bragulat, Jorge; Nuñez, Jorge; Rozenhaus, Julieta; Laguens, Julian; Pubill, Juan; Sage, Federico y Brunengo, Miguel. ",
                "titulo": "Foro de profesionales por la economía social. ",
                "referencia": "2016. Instituto Nacional de Asociativismo y Economía Social. Buenos Aires, Argentina. 153 pp.",
                "link": "http://www.ripess.org/wp-content/uploads/2017/08/Libro-Econom%C3%ADa-Solidaria.pdf",
                "resumen_comentario": "El foro de profesionales tiene como fin reunir a profesionales de distintos ámbitos, con el objetivo de efectuar un abordaje transdisciplinario de la economía social y solidaria. ",
                "observaciones": "Contiene cuatro paneles realizados en el Foro."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ruiz Osoro, Pepe y Calero Blanco, Vane.",
                "titulo": "Economía solidaria: Transformar la economía para transformar nuestro mundo.",
                "referencia": "2019. Bilbao: Red de Economía Alternativa y Solidaria (Reas). 60 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/2_propuesta_didactica.pdf",
                "resumen_comentario": "Actividades didácticas con diversas metodologías planteadas para grupos de personas que trabajen el tema de la economía solidaria con una propuesta de contenidos  sobre transformar la economía para transformar nuestro mundo.",
                "observaciones": "Propuesta didáctica."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Saguier, Marcelo y Brent, Zoe.",
                "titulo": "Regionalismo y economía social y solidaria en Sudamérica.",
                "referencia": "2015. En: Relaciones Internacionales Nº 48. 22 pp.",
                "link": "http://www.relats.org/documentos/ESSSaguier.pdf",
                "resumen_comentario": "Analiza la incorporación de la agenda de economía social y solidaria en los procesos de Unasur y Mercosur, examinando cómo se utiliza en la cooperación regional y qué significa ello para la integración y el desarrollo. Los procesos regionales adoptan un concepto acotado de la ESS como un instrumento de política social para el combate a la pobreza, limitando su potencial transformador en tanto prácticas socioproductivas que son alternativas al extractivismo como tendencia dominante en la región.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salgado, Vinicio.",
                "titulo": "Caracterización y diseño de una estrategia andina de fortalecimiento y fomento de la economía social y solidaria (ESS) como pilar del desarrollo productivo en la Comunidad Andina.",
                "referencia": "2011. Comunidad Andina (Can); Unión Europea (UE). Economía y comercio con justicia y solidaridad. 122 pp.",
                "link": "http://intranet.comunidadandina.org/Documentos/Reuniones/DTrabajo/SG_CAMIPYME_I_dt%204.pdf",
                "resumen_comentario": "Recoge la situación actual de los actores que se identifican con la ESS, e intenta plasmar, desde el mismo sector, los planteamientos que permitirán la definición de un plan de fomento y armonización de políticas de apoyo a un mercado andino como instrumento de la Economía Social y Solidaria, y como pilar del desarrollo productivo de los países andinos, hacia una sociedad más justa, humana y solidaria.",
                "observaciones": "Experiencias productivas de ESS en Ecuador, Colombia, Bolivia y Perú."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sánchez Álvarez, Carlos.",
                "titulo": "Economía social y solidaria en el espacio eurolatinoamericano: La innovación social para la internacionalización de cooperativas. ",
                "referencia": "2012. En: Revista Cooperativismo y desarrollo N° 101. 23 pp.",
                "link": "https://base.socioeco.org/docs/25-53-1-sm.pdf",
                "resumen_comentario": "Se centra en el concepto dual de la economía social y solidaria, con el objetivo de presentar las características del sector en Colombia y en Europa, y así establecer puntos comunes y de interés para su fortalecimiento en el espacio eurolatinoamericano.",
                "observaciones": "Artículo. Fue ganador del concurso de investigación Rymel Serrano Uribe, 2012."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sánchez Trujillo, Magda Gabriela; García Guerrero, M. Gabriela y Rangel Ángeles, M. Teresa.",
                "titulo": "Economía social: Conceptos y prácticas como alternativa de desarrollo socioeconómico en México.",
                "referencia": "2012. México: Universidad Autónoma del Estado de Hidalgo. 9 pp.",
                "link": "https://www.uaeh.edu.mx/investigacion/productos/5571/1sanchezestrategias_sustentables.pdf",
                "resumen_comentario": "Presenta un breve recorrido por los principales aspectos en que se ha desarrollado la economía social solidaria en México y otras regiones de Latinoamérica y el primer mundo, con acciones que han sido incorporados en un movimiento mundial que busca alternativas de desarrollo socioeconómico territorial."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sancho, Santiago José. (Editor)",
                "titulo": "Manual de economía social para jóvenes.",
                "referencia": "s/f. Confederación Intercooperativa Agropecuaria Limitada (Coninagro); Asociación de Cooperativas Vitivinícolas (Acovi). Mendoza: Juventud de Cooperativas Vitivinícolas (Jucovi). 97 pp.",
                "link": "http://www.acovi.com.ar/manual/Manual%20de%20economia%20social.pdf",
                "resumen_comentario": "Aborda aspectos doctrinales que forman la base del cooperativismo, que ha liderado la transformación de sectores de la economía, como el vitivinícola. Promociona la economía social y el cooperativismo como una forma de organizar a los jóvenes en función del esfuerzo propio y la ayuda mutua, esperando ser un aporte clave para la generación de organizaciones nuevas de la economía social y fortalecer las existentes.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Taccari, Daniel.",
                "titulo": "Anuario Estadístico de América Latina y el Caribe 2019 / Statistical Yearbook for Latin America and the Caribbean.",
                "referencia": "2020. División de Estadísticas de la Comisión Económica para América Latina y el Caribe (Cepal). Santiago de Chile: Cepal. 150 pp.",
                "link": "https://www.cepal.org/es/publicaciones/45353-anuario-estadistico-america-latina-caribe-2019-statistical-yearbook-latin",
                "resumen_comentario": "Presenta estadísticas básicas que caracterizan la situación económica, sociodemográfica y ambiental de la región, con indicadores demográficos y sociales. Incluye información sobre población, servicios, distribución del ingreso, pobreza y género; comercio internacional y cuentas nacionales; y ambiente, en lo referido a recursos energéticos, biológicos e hídricos, biodiversidad, calidad, regulación y gobernanza ambiental.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Trivelli, Carolina.",
                "titulo": "Crédito en los hogares rurales del Perú.",
                "referencia": "s/f. Investigaciones Breves N° 4. Lima: Consorcio de Investigación Económica y Social (Cies). 64 pp.",
                "link": "http://cies.org.pe/sites/default/files/files/investigacionesbreves/archivos/ib-04.pdf",
                "resumen_comentario": "Busca identificar las características de hogares rurales que determinan el acceso a fuentes de financiamiento, incorporando diversas variables no convencionales, como el peso de las relaciones personales, los sistemas alternativos de garantías, posibilidad del prestamista de monitorear sus préstamos; distintas de las garantías típicamente exigidas, determinantes del acceso al crédito."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Valadez, Celina.",
                "titulo": "El buen vivir y la economía solidaria: Miradas desde la educación popular.",
                "referencia": "2013. Dinamismo juvenil. México D. F.: Instituto de Asistencia e Integración Social. 32 pp.",
                "link": "https://cpalsocial.org/documentos/703.pdf",
                "resumen_comentario": "Desde el enfoque de la pedagogía de la educación popular de Paulo Freire, promueve iniciativas económicas de carácter colectivo, como la formación de cooperativas de producción y servicios, impulsando circuitos económicos solidarios basados en el concepto del Buen Vivir.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vázquez Pimentel, Diego Alejo; Macías Aymar, Iñigo y Lawson, Max.",
                "titulo": "Premiar el trabajo, no la riqueza: Para poner fin a la crisis de desigualdad, debemos construir una economía para los trabajadores, no para los ricos y poderosos.",
                "referencia": "2018. Oxford: Oxfam Internacional. 92 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Premiar%20el%20trabajo,%20no%20la%20riqueza.pdf",
                "resumen_comentario": "Se está produciendo el mayor aumento de la historia en el número de millonarios, incremento que podría haber terminado con la pobreza extrema en el mundo. La riqueza de unos pocos se erige sobre el trabajo peligroso y mal remunerado de una mayoría. Los gobiernos deben promover una sociedad más igualitaria dando prioridad a los trabajadores y a los pequeños productores agrarios en vez de a los más ricos y poderosos.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vélez-Tamayo, Julián Mauricio.",
                "titulo": "Construcción del concepto de economía solidaria: Una mirada a la teoría económica comprensiva.",
                "referencia": "2014. En: Revista Cooperación y desarrollo Vol. 22, N°. 105. 13 pp.",
                "link": "https://revistas.ucc.edu.co/index.php/co/article/view/690/1506",
                "resumen_comentario": "Propone un giro de las teorías propuestas por Luis Razeto Migliario; además de mostrar los aspectos más importantes de dicha teoría, expone los resultados de las aproximaciones de algunas organizaciones de carácter agropecuario en tres municipios de Antioquia, Colombia.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vélez-Tamayo, Julián Mauricio. ",
                "titulo": "La economía campesina: Configuradora de la economía social y solidaria.",
                "referencia": "2017. En: Revista Espacios. Vol. 38, N°. 16. 9 pp.",
                "link": "https://www.revistaespacios.com/a17v38n16/a17v38n16p11.pdf",
                "resumen_comentario": "Busca principalmente relacionar estos tipos de economía no convencional a formas que persisten en la actualidad bajo realidades productivas que usualmente son clasificadas como capitalistas. Para ello, se realizó una categorización de las realidades productivas de cinco municipios del oriente antioqueño, Colombia, constatando una relación profunda entre la economía social y la economía campesina, con la participación, principalmente, de la acción del Estado.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "VSF Herrien Bidezko Elikadura y Emaús Fundación Social.",
                "titulo": "Economía solidaria: Camino para crear sistemas alimentarios locales.",
                "referencia": "2015. Construyendo soberanía alimentaria en Euskal Herria. Cuaderno Nº 3. 20 pp.",
                "link": "http://base.socioeco.org/docs/economia-solidaria.pdf",
                "resumen_comentario": "Un desafío clave para el futuro en lo referente a los mercados alimentarios locales basados en la soberanía alimentaria, es cómo sustentar bases económicas viables capaces de generar una red al margen del actual modelo capitalista. Para ello, la economía solidaria persigue construir espacios compartidos y relaciones de producción, distribución, consumo y financiación basadas en la justicia, la cooperación, la reciprocidad y la ayuda mutua.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Wanderley, Fernanda.",
                "titulo": "Desafíos teóricos y políticos de la economía social y solidaria: Lectura desde América Latina.",
                "referencia": "2015. Postgrado en Ciencias del Desarrollo (Cides), Universidad Mayor de San Andrés; Instituto de Estudios sobre Desarrollo y Cooperación Internacional (Hegoa), Universidad del País Vasco / EHU. La Paz: Plural editores. 137 pp.",
                "link": "http://base.socioeco.org/docs/desafios_teoricos_y_politicos_ess_en_al.pdf",
                "resumen_comentario": "Presenta una lectura crítica de la discusión académica y política sobre economía social y solidaria, y analiza los desafíos de la agenda actual de investigación. Discute algunos temas como el papel del mecanismo de mercado en la construcción de otra economía; el sentido de la cooperación frente a la competencia de la asociatividad y la acción colectiva; y la equidad de género en la relación entre economía solidaria y economía feminista."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Wanderley, Fernanda.",
                "titulo": "Entre los conceptos minimalista y maximalista de economía social y solidaria: Tensiones teóricas y agenda futura de investigación.",
                "referencia": "2017. Universidad Central del Ecuador, Facultad de Ciencias Económicas. En: Revista Económica Vol. 69, N°. 109. La economía social y solidaria: Contribuciones a su conceptualización. 20 pp.",
                "link": "http://www.iisec.ucb.edu.bo/assets_iisec/publicacion/revista_economica_1.pdf",
                "resumen_comentario": "Analiza críticamente los conceptos presentes en la economía social y solidaria en América Latina, minimalista y maximalista, y, sobre esta base, propone temas emergentes de la agenda de investigación, como el rol del mercado en la economía social y solidaria, la relación entre solidaridad sistémica y de proximidad, la construcción de cooperación y confianza, y la equidad de género.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Yacamán, Carolina; Ruiz Salgado, Antonio y Navarro Gómez, Alberto.",
                "titulo": "Entidades sin ánimo de lucro y economía social y solidaria: Formas de trabajo para la conservación de la naturaleza y la gestión de los recursos naturales.",
                "referencia": "2018. Observatorio del Tercer Sector Ambiental. Cuaderno de campo N° 17. Madrid: Asociación de Fundaciones para la Conservación de la Naturaleza. 34 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/Econom%C3%ADa%20Solidaria%20y%20Gesti%C3%B3n%20de%20los%20Recursos%20Naturales.pdf",
                "resumen_comentario": "Examina el impacto global del modelo productivo y la intervención de las organizaciones no lucrativas en el mercado, en una economía enraizada en el territorio, y revisa experiencias de la economía social y solidaria orientadas a un modelo de desarrollo local sostenible y comunitario."
            },
            {
                "eje_estrategico": "Tercer eje",
                "icono": "img/icono_pdf.png",
                "autor": "Yaselga, Patricia y Jara, Irene.",
                "titulo": "El proceso de circuitos económicos solidarios interculturales.",
                "referencia": "s/f. Quito: Fundación de Servicio de Desarrollo Alternativo (Sedal). 36 pp.",
                "link": "https://dspace.ups.edu.ec/bitstream/123456789/10826/1/El%20proceso%20de%20los%20circuitos%20economicos%20solidarios%20interculturales.pdf",
                "resumen_comentario": "Muestra cómo realizar talleres de economía solidaria y patrimonio cultural y la manera cómo los circuitos económicos solidarios hacen movilizar a otros campos de la economía local.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Acosta, Alberto y Brand, Ulrich.",
                "titulo": "Salidas del laberinto capitalista: Decrecimiento y postextractivismo.",
                "referencia": "2018. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 228 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/Libro-Salidas-del-Laberinto.pdf",
                "resumen_comentario": "No será fácil salir del extractivismo y de la sociedad del crecimiento y del desperdicio sin un cambio cultural profundo de las estructuras mentales y cognitivas, asociadas a los patrones de consumo del modo de vida global dominante. Experiencias innovadoras y enfoques económicos alternativos apuestan por el decrecimiento, y en América Latina se advierte que el giro ecoterritorial de las luchas y las experiencias ligadas con la economía social y el conocimiento ancestral de los pueblos originarios, pujan por fortalecer al principio del Buen Vivir, aun cuando la opción extractivista es claramente dominante."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Aguilar García, Elizabeth Gabriela.",
                "titulo": "El extractivismo en América Latina y su dimensión teológica desde un encare decolonial.",
                "referencia": "2019. Universidad Nacional de Costa Rica. En: Praxis. Revista de Filosofía Nº 79. 17 pp.",
                "link": "https://www.revistas.una.ac.cr/index.php/praxis/article/view/11841",
                "resumen_comentario": "Los efectos de las prácticas extractivistas en Latinoamérica han sido devastadores para el ambiente y la salud de las comunidades. Frente al paradigma que concibe a la naturaleza como una fuente de riqueza a explotar, legitimado por la Biblia y secularizado en la idea de progreso, se propone una perspectiva decolonial que considere el aprendizaje de otras cosmovisiones y formas de relacionarse con la naturaleza, respetuosas de la vida y la diversidad en el planeta en un diálogo fraterno entre las culturas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alarco, Germán; Castillo, César y Leiva, Favio.",
                "titulo": "Riqueza y desigualdad en el Perú: Visión panorámica.",
                "referencia": "2019. Lima: Oxfam América. 198 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Riqueza-y-desigualdad-en-el-Peru-vision-panoramica.pdf",
                "resumen_comentario": "La Encuesta Nacional de Hogares (Enaho) es una herramienta fundamental para la lucha contra la pobreza y desigualdad en el Perú, sin embargo presenta un subreporte de los ingresos y gastos de los sectores más pudientes de la sociedad y de las clases medias altas, quienes casi nunca responden a la encuesta, lo que la convierte en un instrumento limitado para determinar el índice de desigualdad (o índice Gini), requisito para diseñar políticas públicas para redistribuir la riqueza y luchar contra la pobreza y la desigualdad."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alayza, Alejandra y Gudynas, Eduardo (Editores).",
                "titulo": "Transiciones: Postextractivismo y alternativas al extractivismo en el Perú.",
                "referencia": "2011. Red Peruana por una Globalización con Equidad (RedGE). Lima: Centro Peruano de Estudios Sociales (Cepes). 234 pp.",
                "link": "https://dar.org.pe/archivos/publicacion/transiciones_extractivismo.pdf",
                "resumen_comentario": "La perspectiva de un desarrollo que se sostiene en la visión extractivista privilegia el corto plazo, y obvia mirar estos procesos desde las implicancias que este modelo de desarrollo tiene para las generaciones futuras. Las disputas sobre dónde desarrollar actividades extractivas incluyen una discusión de este modelo, en la cual las poblaciones locales demandan participar y ser consultadas, insistiendo en el reconocimiento del valor de los ecosistemas y los recursos naturales como fuentes de vida, así como de otras opciones de desarrollo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Altomonte, Hugo y Sánchez, Ricardo J.",
                "titulo": "Hacia una nueva gobernanza de los recursos naturales en América Latina y el Caribe.",
                "referencia": "2016. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 258 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/40157/1/S1600308_es.pdf",
                "resumen_comentario": "Argumenta sobre la importancia de institucionalizar el empleo de fondos de estabilización, acumulación de reservas y los mecanismos de ahorro en los períodos de auge y, a la vez, acumular la holgura fiscal necesaria para mitigar el impacto en los períodos de precios bajos. La región demanda un cambio en el paradigma de explotación de los recursos naturales, mediante una gobernanza compatible con la sostenibilidad, a través de pactos sociales en un marco de equidad y transparencia."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Arias Minaya, Luis.",
                "titulo": "El Perú hacia la OCDE: La agenda pendiente para la política tributaria 2018-2021.",
                "referencia": "2018. Grupo de Justicia Fiscal (GJF). Lima: Oxfam América. 82 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/El%20Per%C3%BA%20hacia%20la%20OCDE.%20La%20agenda%20pendiente%20para%20la%20pol%C3%ADtica%20tributaria%202018-2021.pdf",
                "resumen_comentario": "Plantea reformas transversales y específicas, las aplicables al sector extractivo y las que ayudarían a combatir la evasión fiscal, como el nivel de las tasas impositivas, las exoneraciones, beneficios tributarios y deducciones, y los regímenes especiales. Las específicas deben centrarse en los impuestos a la renta, predial y a la minería, para alcanzar un sistema tributario equitativo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Asencio, Fausto y Bruer, Verena. (Ed.)",
                "titulo": "Ordenamiento territorial de la región andino-amazónica.",
                "referencia": "2010. Ministerio del Ambiente, Dirección General de Ordenamiento Territorial; Instituto de Investigaciones de la Amazonía Peruana (IIAP); Secretaría General de la Comunidad Andina (CAN). Agencia Suiza para el Desarrollo y la Cooperación (Cosude); Comisión Económica para América Latina (Cepal). Iquitos: Programa Desarrollo Rural Sostenible (PDRS), Cooperación Alemana al Desarrollo (GTZ). 152 pp. ",
                "link": "https://repositoriodigital.minam.gob.pe/bitstream/handle/123456789/256/BIV01219.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Examina los procesos de ordenamiento territorial en la región andino-amazónica, en torno a la disponibilidad, los usos y la conservación de los recursos hídricos, genéticos y la biodiversidad, el ecoturismo y las áreas de conservación; los grandes proyectos y los conflictos ambientales; el manejo de cuencas y subcuencas, y la contaminación del recurso. De igual modo, los planes de vida y la cosmovisión territorial indígena y usos del territorio, así como el análisis de vulnerabilidad, la gestión del riesgo, mitigación y adaptación al cambio climático, y el impacto sobre los usos del territorio.",
                "observaciones": "Memoria de seminario taller internacional."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ávila, Gustavo; Baca, Epifanio y Quiñones, Carlos.",
                "titulo": "Vigilancia de las industrias extractivas: Reporte nacional Nº 20. Balance 2015.",
                "referencia": "2016. Sistema Vigila Perú; Natural Resource Governance Institute; Pan para el Mundo. Lima: Grupo Propuesta Ciudadana. 98 pp.",
                "link": "http://propuestaciudadana.org.pe/wp-content/uploads/2016/10/Reporte-N%C2%BA-20-Vigilancia-de-las-industrias-extractivas.pdf",
                "resumen_comentario": "Contiene un balance sobre la generación, distribución y uso de la renta de la minería, gas y petróleo en el Perú, además de otros temas como la transparencia ambiental y del gasto social, así como los costos de las empresas mineras.",
                "observaciones": "Reporte."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Azamar Alonso, Aleida y Ponce Sánchez, José Ignacio.",
                "titulo": "El neoextractivismo como modelo de crecimiento en América Latina.",
                "referencia": "2015. Universidad de La Habana. En: Economía y Desarrollo, vol. 154, núm. 1. 15 pp.",
                "link": "https://www.redalyc.org/pdf/4255/425541212014.pdf",
                "resumen_comentario": "En las últimas décadas, América Latina ha impulsado su crecimiento con la explotación de sus bienes naturales. No obstante, este modelo económico no ha sido capaz de desarrollar la capacidad técnica, y la especialización en actividades primarias ha limitado el progreso, ha fortalecido la dependencia, y lejos de robustecer las economías de los Estados, ha creado problemas sociales y crisis ambientales, a pesar de las ganancias que genera.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Azamar Alonso, Aleida.",
                "titulo": "Extractivismo: La falsa promesa de desarrollo en América Latina.",
                "referencia": "2015. En: teoria&pesquisa, Revista de ciencia política Vol. 24, Nº 1. 12 pp.",
                "link": "http://doi.editoracubo.com.br/10.4322/tp.24110",
                "resumen_comentario": "Plantea el modelo extractivista en Latinoamérica, por el que optaron gobiernos neoliberales y progresistas, como una forma de salir del atraso y la pobreza. Contradictoriamente, se muestra que varios países tienen tasas de crecimiento bajas y sus índices de pobreza no han disminuido, ya que el extractivismo no está presentando los resultados prometidos.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Azamar-Alonso, Aleida y Carrillo-González, Graciela.",
                "titulo": "Extractivismo y deuda ecológica en América Latina.",
                "referencia": "2017. Universidad de Caldas. En: Luna Azul Nº 45. 19 pp.",
                "link": "http://vip.ucaldas.edu.co/lunazul/downloads/Lunazul45_20.pdf",
                "resumen_comentario": "Señala que la deuda externa y la primarización del comercio latinoamericano coinciden con lo que ha sucedido históricamente en la región, generando empobrecimiento debido a que priorizan la explotación y el comercio de sus recursos naturales por encima de otras actividades productivas, lo cual ha fortalecido la dependencia estructural y el endeudamiento de América Latina con las naciones desarrolladas, aun cuando estos últimos tienen una deuda ecológica con los países subdesarrollados.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Azpur, Javier; Baca, Epifanio; Viale, Claudia y Monge, Carlos.",
                "titulo": "Extractivismo y transiciones hacia el postextractivismo en el Perú.",
                "referencia": "s/f. Grupo Propuesta Ciudadana (GPC); Revenue Watch Institute (RWI). 16 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/tema_1_Javier%20Azpur.pdf",
                "resumen_comentario": "Define el extractivismo, en tanto primacía de las actividades mineras, petroleras y gasíferas en la economía, y como base para el crecimiento y desarrollo del país, como una ideología que se impone sobre aquellas culturas que conciben la relación con la naturaleza de distinta manera, planteando, más que el solo cuestionamiento de la centralidad de la minería y la extracción de hidrocarburos, un cambio de ideologías y comportamientos.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Baca, Epifanio y Ávila, Gustavo.",
                "titulo": "Al final de una década de boom, ¿qué le dejó la minería al Perú? Balance 2004-2014.",
                "referencia": "2015. Agencia de los Estados Unidos para el Desarrollo Internacional (Usaid); Natural Resource Governance Institute; Pan para el Mundo. Sistema Vigila Perú. Lima: Grupo Propuesta Ciudadana. 16 pp.",
                "link": "http://www.propuestaciudadana.org.pe/sites/default/files/publicaciones/archivos/Al%20final%20de%20una%20d%C3%A9cada%20de%20boom%20%20Qu%C3%A9%20le%20dej%C3%B3%20la%20miner%C3%ADa%20al%20Per%C3%BA%20%20Balance%202004-2014.pdf",
                "resumen_comentario": "Aun cuando el boom extractivo permitió al Estado distribuir recursos entre los gobiernos subnacionales y ejecutar programas del proceso de descentralización, la inequitativa redistribución de recursos amplió las brechas sociales y económicas, dejando en evidencia la debilidad institucional del Estado, agravada por la corrupción, lo que impidió iniciar su reforma y modernización. Plantea un debate sobre el rol que cumplió la minería y un balance sobre el uso de la renta extractiva en el país.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bebbington, Anthony; Escobal, Javier; Soloaga, Isidro y Tomaselli, Andrés. (Ed.)",
                "titulo": "Trampas territoriales de pobreza, desigualdad y baja movilidad social: Los casos de Chile, México y Perú.",
                "referencia": "2016. México: Centro de Estudios Espinosa Yglesias, Universidad Iberoamericana y Rimisp, Centro Latinoamericano para el Desarrollo Rural. 389 pp.",
                "link": "http://rimisp.org/TRAMPASTERRITORIALES.final.pdf",
                "resumen_comentario": "Aborda las desigualdades territoriales y los patrones de desarrollo de tres países, analizando el territorio como factor clave del acceso diferenciado a las oportunidades, así como el papel de la segregación territorial y la debilidad institucional en la gobernanza.",
                "observaciones": "Casos de Chile, México y Perú."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Boisier, Sergio.",
                "titulo": "Desarrollo territorial y descentralización: El desarrollo en el lugar y en las manos de la gente.",
                "referencia": "2004. En: Revista eure Vol. XXX, Nº 90. Santiago de Chile: Centro de Anacción Territorio y Sociedad (Cats). 14 pp.",
                "link": "https://flacsoandes.edu.ec/sites/default/files/agora/files/1245798293.boisier__descentralizacion_0.pdf",
                "resumen_comentario": "Revisa, desde un enfoque conceptual, la descentralización en América Latina. Sostiene que, en la región, el centralismo es un fenómeno ligado a la cultura de los países, y asocia la descentralización a la revolución tecnológica, la reforma del Estado, las demandas de la sociedad civil y las tendencias privatizadoras del neoliberalismo. Plantea modernizar la gestión social del territorio y usar los espacios del proceso descentralizador para el fomento del desarrollo territorial.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bradley, Siân.",
                "titulo": "La transparencia en transición: El cambio climático, la transición energética y el Eiti.",
                "referencia": "2020. Extractive Industries Transparency Initiative (Eiti). Londres: Chatham House, The Royal Institute of International Affairs. 38 pp.",
                "link": "https://eiti.org/files/documents/transparency_in_transition.pdf",
                "resumen_comentario": "La transparencia apoya los esfuerzos para mejorar la gobernanza de los recursos petroleros, gasíferos y minerales, y para evitar los efectos negativos de la “maldición de los recursos”. La transición hacia una economía descarbonizada y sostenible está redefiniendo las industrias extractivas y, a su vez, los riesgos y las oportunidades que se derivan para los países productores, con profundas implicaciones para el perfil de la buena gobernanza de los recursos extractivos.",
                "observaciones": "Versión en inglés: Transparency in Transition Climate Change, Energy Transition and the Eiti."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Brown, Michael F.",
                "titulo": "Una paz incierta: Historia y cultura de las comunidades aguarunas frente al impacto de la carretera Marginal.",
                "referencia": "1984. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 280 pp.",
                "link": "http://www.caaap.org.pe/Libros/Brown_PazIncierta_LibroEntero.pdf",
                "resumen_comentario": "Historia de los aguarunas, descripción de su contexto socioeconómico y cultural, las relaciones intercomunitarias e interétnicas, la tecnología y la estética, hasta llegar a la inmigración y la presencia de empresas extractivas como resultado de la carretera Marginal, y sus consecuencias en la disponibilidad de tierras, los recursos naturales, la demografía, la vida y la cultura local.",
                "observaciones": "Incluye el ensayo “La cara oscura del progreso: El suicidio entre los aguaruna del Alto Río Mayo”, como apéndice."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Buitelaar, Rudolf M.;  Echeverri Perico, Rafael; Silva Lira, Iván y Riffo Pérez, Luis.",
                "titulo": "Estrategias y políticas nacionales para la cohesión territorial: Estudios de caso latinoamericanos.",
                "referencia": "2015. Serie Desarrollo Territorial Nº 19. Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes); Fundación Internacional y para Iberoamérica de Administración y Políticas Públicas (Fiiapp). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 71 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/37849/1/S1420715_es.pdf",
                "resumen_comentario": "Análisis comparativo realizado en trece países de América Latina en que se describe las formas de organización territorial, la estructura institucional de las políticas territoriales, y las principales estrategias, planes y políticas identificadas a nivel nacional y regional, presentando aspectos conceptuales relevantes y una discusión sobre la cohesión social, económica y territorial, y sus vínculos con las ideas de convergencia y cohesión territorial.",
                "observaciones": "Casos de Guatemala, Colombia, Costa Rica, México, El Salvador, Panamá, Argentina, Brasil, Perú, Ecuador, Uruguay y Bolivia."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Campana, Álvaro.",
                "titulo": "El ordenamiento territorial en el Perú: Avances y retos para las regiones y el país.",
                "referencia": "2014. Grupo Propuesta Ciudadana (GPC). 32 pp.",
                "link": "http://propuestaciudadana.org.pe/sites/default/files/publicaciones/archivos/Cartilla%20El%20Ordenamiento%20Territorial%20en%20el%20Per%C3%BA.pdf",
                "resumen_comentario": "Los procesos de Zonificación Ecológica y Económica (ZEE) y de Ordenamiento Territorial (OT) pueden contribuir a desarrollar políticas orientadas a lograr una mayor cohesión social y territorial; un uso y ocupación racionales, sostenibles y democráticos del territorio; y una dinámica institucional que supere la intervención desordenada y sectorial del Estado."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Campana Ocampo, Álvaro.",
                "titulo": "Desigualdad, desarrollo territorial y descentralización en el Perú.",
                "referencia": "2017. Grupo Propuesta Ciudadana (GPC). 32 pp.",
                "link": "http://www2.congreso.gob.pe/sicr/cendocbib/con5_uibd.nsf/414EEB8FBE2DE9150525824B00717BDD/$FILE/Desigualdad_desarrollo_territorial_y_descentralizaci%C3%B3n.pdf",
                "resumen_comentario": "Pone en discusión la desigualdad territorial, las políticas territoriales y el desarrollo territorial; la situación de las políticas territoriales en el Perú; la desigualdad social y sus causas históricas y estructurales; las dinámicas territoriales privadas y del Estado; y los desafíos que todo ello significa para la descentralización y la construcción de un nuevo modelo de desarrollo y de Estado que garantice un crecimiento sostenible, equitativo y democrático."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Carrión Sánchez, Diego y Sánchez Cárdenas, Ricardo.",
                "titulo": "Pensar las alternativas, imaginar la transición. Economía extractiva y efectos comparados: Turismo, petróleo y minería.",
                "referencia": "2014. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 109 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/Pensar_las_alternativas.pdf",
                "resumen_comentario": "Evalúa algunos de los efectos del apalancamiento de tres valores de uso (minería, petróleo y turismo) como ejes de acumulación, en el patrón de reproducción de capital, y se muestra evidencia sobre los diferentes efectos sobre la dinámica económica, empleo, salud, ambiente y género. Asimismo, los peligros de reducir el desafío de cambio de la matriz productiva a un simple intercambio de un valor de uso por otro como eje de acumulación, dejando intocados elementos estructurales.",
                "observaciones": "Propone lineamientos para la construcción de una propuesta de turismo comunitario, poniendo a este sector como una alternativa a la economía extractiva."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Catholic Climate Covenant.",
                "titulo": "Resumen del Laudato Si’: Sobre el cuidado de la casa común.",
                "referencia": "2015. Catholic Climate Covenant. 6 pp.",
                "link": "https://catholicclimatecovenant.org/files/resource/attachment/ResumendelLaudatoSie2809926ElLaudatoSi27enAcciocc81n.pdf",
                "resumen_comentario": "Hace un llamado a conversar sobre el modo como estamos construyendo el futuro del planeta y muestra lo que está pasando en “nuestro hogar común”. Plantea, desde un punto de vista teológico, la raíz humana de la crisis ecológica, y critica el “uso desproporcionado de los recursos naturales”, proponiendo una ecología integral para la vida.",
                "observaciones": "Resumen."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chávez Quijada, Mary.",
                "titulo": "Los pasivos ambientales mineros: Diagnóstico y propuestas.",
                "referencia": "2015. Centro de Cultura Popular Labor, Pasco; Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides), Cajamarca; Derechos Humanos y Medio Ambiente, Puno. Lima: Muqui, Red de Propuesta y Acción. 66 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/pasivosambientales2015.pdf",
                "resumen_comentario": "Brinda información acerca de las normas legales y el contexto nacional sobre los pasivos ambientales mineros, a través de casos específicos de la problemática ambiental y socioeconómica regional generada por éstos. Asimismo, se proponen lineamientos de políticas públicas para la gestión y manejo de los pasivos ambientales mineros.",
                "observaciones": "Casos de Cajamarca, Lima, Pasco y Puno."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chirif, Alberto.",
                "titulo": "Pueblos indígenas amazónicos e industrias extractivas en la selva.",
                "referencia": "2011. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap).",
                "link": "http://www.caaap.org.pe/website/2015/09/03/pueblos-indigenas-amazonicos-e-industrias-extractivas-en-la-selva/",
                "resumen_comentario": "Reflexión sobre las consecuencias que tiene para la Amazonía el progresivo deterioro de sus ríos, diversas formas de vida y la calidad de vida de los pueblos originarios, como resultado de la presencia de industrias extractivas que han traído consigo, a menudo, conflictos socioambientales entre las poblaciones afectadas, el Estado y las empresas.",
                "observaciones": "No disponible."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chirif, Alberto y Cornejo Chaparro, Manuel.",
                "titulo": "Imaginario e Imágenes de la época del caucho: Los sucesos del Putumayo.",
                "referencia": "2009. Lima: Centro Amazónico de Antropología y Aplicación Práctica (Caaap). 230 pp.",
                "link": "http://www.caaap.org.pe/Libros/LIBRO-IMAGINARIO-E-IMAGENES.pdf",
                "resumen_comentario": "Busca desterrar la imagen manipulada y anacrónica del indígena «salvaje y alejado de la historia», implantada en el imaginario popular para justificar los excesos cometidos por la sociedad. Se intenta contribuir al esclarecimiento de la realidad sociocultural de los pueblos de la Amazonía para que adquieran un espacio activo y participativo en el desarrollo del país."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Análisis de los cambios en la estructura productiva peruana.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 81 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2019/01/An%C3%A1lisis-de-los-cambios-en-la-estructura-productiva-peruana-CEPLAN.pdf",
                "resumen_comentario": "Tiene como propósito determinar las actividades que han incrementado o disminuido su efecto multiplicador sobre el valor agregado, el empleo y las remuneraciones de la economía formal, contribuyendo al estudio del entramado productivo y permitiendo enfocar políticas de diversificación a estos sectores con el fin de gatillar la economía y reducir las brechas en productividad, análisis importante dada la heterogeneidad económica y la dependencia de choques externos, asociados principalmente a cambios en los precios de las materias primas."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "El clúster productivo del cobre en el sur del Perú.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 61 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2019/12/CEPLAN-El-cluster-productivo-del-cobre-en-el-sur-del-Peru.pdf",
                "resumen_comentario": "Hace un diagnóstico de los factores de competitividad del clúster del cobre en el sur de Perú, a partir de la dotación de recursos, capital humano, disponibilidad de proveedores, infraestructura, entre otros factores. Asimismo, se analizan aspectos de la actividad minera y su relación con la población y el territorio, evidenciando la heterogeneidad en el acceso a los servicios básicos y las condiciones de bienestar de la población en los distritos en donde se ubican las unidades mineras.",
                "observaciones": "Casos de unidades mineras de Antapaccay (Cusco), Constancia (Cusco), Las Bambas (Apurímac), Cerro Verde (Arequipa), Toquepala (Tacna) y Cuajone (Moquegua)."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "El Perú en el que vivimos: Caracterización del territorio.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 79 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2018/11/El-Per%C3%BA-en-el-que-vivimos-CEPLAN.pdf",
                "resumen_comentario": "Describe los aspectos más relevantes del territorio nacional, de forma tal que permite entenderlo como un conjunto de sistemas, con características particulares y distintas capas cartográficas interrelacionadas entre sí, y los sistemas territoriales poblacional, relacional, ambiental, productivo, patrimonial y equipamental. Cada sistema contiene información sobre distintos aspectos que permiten tener una descripción holística del territorio, la cual refleja la diversidad geográfica, social, cultural, productiva, etc. de nuestro país."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "El Perú en los indicadores mundiales.",
                "referencia": "2016. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 271 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2016/08/INDICADORES_MUNDIALES_2016.pdf",
                "resumen_comentario": "El desarrollo al que aspiramos se compone de dimensiones que van más allá de lo económico, planteando la necesidad de enfocar esfuerzos en la mejora de ciertos indicadores complementarios, que van desde los sociales hasta los ambientales, que estén alineados con objetivos sociales e institucionales, y cuya mejora es crucial para consolidar el crecimiento sostenible. Ello permite analizar el desempeño del país en los últimos años e identificar las brechas que persisten y las áreas en que las políticas públicas son necesarias al plantear las estrategias de desarrollo, permitiendo dar una mirada a la situación del Perú en relación al resto de países de la región y del mundo.",
                "observaciones": "Contiene 109 indicadores organizados en 12 temas."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Guía para el Plan de Desarrollo Regional Concertado (PDRC).",
                "referencia": "2020. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 123 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/1088675/Proyecto-de-Guia-para-elaborar-PDRC-CEPLAN-16072020.pdf",
                "resumen_comentario": "Orienta la elaboración de los instrumentos que conduzcan al desarrollo integral de los territorios, convocando esfuerzos y enfocando recursos individuales e institucionales de la sociedad y el Estado, para mejorar las políticas y los planes estratégicos con enfoque territorial, con el fin de lograr el bienestar de la población y el desarrollo armónico y sostenible del país en condiciones adversas severas.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Perú: Proyecciones económicas y sociales.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 65 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2018/11/Per%C3%BA-proyecciones-econ%C3%B3micas-y-sociales-CEPLAN.pdf",
                "resumen_comentario": "Se simulan, en cuatro escenarios futuros, los comportamientos de diversas variables estratégicas, como la pobreza extrema o el acceso a servicios básicos, bajo distintas trayectorias de crecimiento económico y múltiples supuestos de tasas de crecimiento del PBI y los componentes de la demanda final de la economía (consumo, inversión, exportaciones), lo cual permite explorar su probable comportamiento con el propósito de anticiparlo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Nacional de Planeamiento Estratégico (Ceplan).",
                "titulo": "Proyecciones macroeconómicas al 2030.",
                "referencia": "2019. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 24 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2019/12/CEPLAN-Proyecciones-macroeconomicas-al-2030-actualizacion-nov-2019.pdf",
                "resumen_comentario": "Debido a la dependencia del entorno internacional, uno de los desafíos para los formuladores de política y planificadores es dimensionar los efectos de choques externos, negativos o positivos, que afectan las estimaciones de corto plazo, por lo que resulta importante conocer su dimensión y efecto en las políticas económicas en un periodo mayor a tres años, por lo que se construyen tres escenarios de futuro del crecimiento de la economía peruana hacia un periodo de 11 años."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chirinos P. Alejandr; Passuni P., Silvia y Rischmöller Y., Ursula.",
                "titulo": "Una mirada sobre el ordenamiento territorial desde lo local hacia lo nacional: Lecciones y recomendaciones desde las experiencias de ordenamiento del territorio en Cajamarca, Pitumarca y El Carmen de la Frontera.",
                "referencia": "2013. Aide au Développement Gembloux (ADG); Broederlijk Delen (BD); Centro Bartolomé de las Casas (CBC); Asociación Evangélica Luterana de Ayuda para el Desarrollo Comunal (Diaconía); Iles de Paix (IDP); Red de Acción en Agricultura Alternativa (Raaa); Cooperación Belga al Desarrollo. Lima: Acción Solidaria para el Desarrollo (CooperAcción). 160 pp.",
                "link": "http://cooperaccion.org.pe/wp-content/uploads/2015/09/00.%20Ordenamiento%20Territorial.%202013.pdf",
                "resumen_comentario": "Desde el análisis de experiencias de ordenamiento del territorio y desde los actores involucrados, identifica recomendaciones que contribuyan a mejorar estos procesos, promoviendo el enfoque intergeneracional y de género; destaca la pertinencia de estrategias regionales de OT y su relación con los conflictos por el uso del territorio, así como la articulación entre los niveles de gobierno y los instrumentos de gestión; y propone pistas para la discusión sobre la necesidad de una política pública nacional de ordenamiento y gestión territorial.",
                "observaciones": "Casos en región Cajamarca, Pitumarca (Cusco) y El Carmen de la Frontera (Piura)."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley del canon.",
                "referencia": "2001. Congreso de la República. 5 pp.",
                "link": "http://biblioteca.unmsm.edu.pe/redlieds/Proyecto/legislacion/Peru/Ley%2027506.pdf",
                "resumen_comentario": "Determina los recursos naturales cuya explotación genera canon y regula de manera general su distribución a favor de las municipalidades y gobiernos regionales, centros poblados y comunidades en cuya circunscripción se hallan dichos recursos, de conformidad con lo establecido por el Artículo 77° de la Constitución Política del Perú.",
                "observaciones": "Ley N° 27506. 9 de julio de 2001."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Transferencias por tipo de canon, regalías, participaciones y otros: Disparidad interdepartamental 2004 – 2019.",
                "referencia": "2019. Observatorio de la Descentralización, Unidad Técnica del Departamento de Comisiones del Congreso de la República. 36 pp.",
                "link": "http://www.congreso.gob.pe/Docs/DGP/Comisiones/files/publicaciones/canon2019a.pdf",
                "resumen_comentario": "Contiene la base legal del canon, los índices de distribución del canon y sobrecanon, regalías mineras, el Fondo de Desarrollo Socioeconómico de Camisea (Focam), cálculo de los índices del canon, el Foncomun, la distribución del canon minero, la renta de aduanas, y los canon minero, petrolero, hidroenergético, gasífero, pesquero y forestal, así como un análisis de la disparidad interdepartamental del canon.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Daguerre, Augustina; Vargas, Gina; Daza, Mar; Craenen, Thomas; Verbauwhede, Patricia; Raison, Emmanuel; Tenthof, Morritz; Hoetmer, Raphael y Kruyt, Suzanne.",
                "titulo": "Alternativas para la vida: Más allá del desarrollo.",
                "referencia": "2014. Broederlijk Denle. Lima: Programa Democracia y Transformación Global (PDTG). 90 pp.",
                "link": "https://democraciaglobal.org/wp-content/uploads/Alternativas-para-la-vida.pdf",
                "resumen_comentario": "Desde hace varios años, una crisis global está sacudiendo los cimientos de las sociedades occidentales, que va más allá de su naturaleza económica y fi­nanciera, cuestionando los fundamentos de la sociedad y su forma de vivir, a pesar de lo cual se siguen profundizando las mismas recetas económicas que han causado la crisis. El extractivismo y el rescate de bancos irresponsables, por ejemplo, mientras los trabajadores pierden su empleo o ven sus condiciones laborales y derechos deteriorados, es una situación que obliga a la sociedad civil a replantear sus quehaceres.",
                "observaciones": "Documento de sistematización. Encuentro en Pachacamac y Lima, del 25 al 29 de agosto de 2013."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Dammert, Juan Luis.",
                "titulo": "Acaparamiento de tierras en la Amazonía peruana: El caso de Tamshiyacu.",
                "referencia": "2017. Oxfam Perú. Lima: Wildlife Conservation Society (WCS). 96 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Acaparamiento%20de%20tierras%20en%20la%20Amazoni%CC%81a%20peruana.%20El%20caso%20de%20Tamshiyacu_0.pdf",
                "resumen_comentario": "Analiza las malas prácticas empresariales y las deficiencias estatales para regular el acceso a la tierra, mostrando las contradicciones del marco normativo aplicable a la titulación de predios y el cambio de uso de suelos, así como la necesidad de regular la expansión de los agronegocios en la Amazonía peruana.",
                "observaciones": "El caso de Tamshiyacu."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Damonte Valencia, Gerardo.",
                "titulo": "Construyendo territorios: Narrativas territoriales aymaras contemporáneas.",
                "referencia": "2011. Consejo Latinoamericano de Ciencias Sociales (Clacso); Fundación Tierra; Agencia Sueca de Desarrollo Internacional (Asdi). Lima: Grupo de Análisis para el Desarrollo (Grade). 158 pp.",
                "link": "http://www.grade.org.pe/upload/publicaciones/archivo/download/pubs/LIBROGRADE_CONSTRUYENDOTERRITORIOS.pdf",
                "resumen_comentario": "Analiza de manera comparativa la manera en que las comunidades aymaras peruanas y bolivianas constituyen territorios en la zona del lago Titicaca. A partir de conceptos de espacio social, narrativa territorial y territorio, establece las dimensiones culturales y políticas contenidas en la constitución territorial, y muestra a los territorios como construcciones colectivas, conscientes y cambiantes, sujetas por la memoria y experiencias sociales de los colectivos andinos."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Damonte, Gerardo y Glave, Manuel. (Editores)",
                "titulo": "Industrias extractivas y desarrollo rural territorial en los Andes peruanos: Los dilemas de la representación política y la capacidad de gestión para la descentralización.",
                "referencia": "2016. Centro Internacional de Investigaciones para el Desarrollo (IDRC), Canadá. Lima: Grupo de Análisis para el Desarrollo (Grade). 112 pp.",
                "link": "http://www.grade.org.pe/wp-content/uploads/LIBROGRADE_IndustriasExtractivas.pdf",
                "resumen_comentario": "Analiza la crisis de representatividad y la transformación de las formas de representación política local en ámbitos rurales, la proliferación de conflictos, y su efecto en las políticas de ordenamiento territorial en el contexto del desarrollo de grandes proyectos extractivos. Busca conocer a las organizaciones sociales más representativas en la sociedad rural, los avances de las políticas de ZEE y OT, y la información socioeconómica para la gestión territorial y consolidar estos procesos en las regiones con industrias extractivas en el país.",
                "observaciones": "Casos de La Granja, Querocoto (Cajamarca) y Challhuahuacho (Apurímac)."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Delgado Ramos, Gian Carlo. (Coordinador)",
                "titulo": "Ecología política del extractivismo en América Latina: Casos de resistencia y justicia socioambiental.",
                "referencia": "2013. Agencia Sueca de Desarrollo Internacional (Asdi). Buenos Aires: Consejo Latinoamericano de Ciencias Sociales (Clacso). 590 pp.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/posgrados/20131218030905/EcologiaPolitica.pdf",
                "resumen_comentario": "Se presenta diversos casos de conflictos ambientales y resistencias sociales en defensa del entorno natural en América Latina, asociados a la actividad minera energética y no energética; al uso y usufructo del agua; a la explotación de bosques, así como a la expansión de monocultivos de palma africana para la producción de biodiesel, aportando a la diversidad y complejidad de la ecología política de los recursos naturales en la región."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Díaz, Alejandra y Padilla, César.",
                "titulo": "¿Agua o minería? Resistencias comunitarias en América Latina. Informe N° 4.",
                "referencia": "2020. Misereor. Santiago de Chile: Observatorio de Conflictos Mineros de América Latina (OCMAL). 28 pp.",
                "link": "https://www.ocmal.org/wp-content/uploads/2020/03/Informe_-Agua-N%C2%BA4-1.pdf",
                "resumen_comentario": "Si continúa la explotación minera de las montañas en América del Sur, el proceso de destrucción de las fuentes de agua dulce será irreparable. Se presenta cinco casos de conflictos entre comunidades defensoras de Chile, Argentina y Bolivia en contra de empresas mineras que están destruyendo nevados y glaciares de la Cordillera de los Andes, sin que los Estados de estos tres países los defiendan legalmente.",
                "observaciones": "Comunidades de Chile, Argentina y Bolivia en la defensa de los glaciares y el agua contra la minería. Cinco casos."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Díaz, Alejandra y Padilla, César.",
                "titulo": "¿Agua o minería? Resistencias comunitarias en América Latina. Informe N° 5.",
                "referencia": "2020. Misereor. Santiago de Chile: Observatorio de Conflictos Mineros de América Latina (OCMAL). 82 pp.",
                "link": "https://www.ocmal.org/wp-content/uploads/2020/03/Informe_Agua-total-N%C2%BA5.pdf",
                "resumen_comentario": "Acentuadas por el cambio climático, las crisis hídricas se presentan cada vez con mayor frecuencia y duración. Por ello, en América Latina se levantan voces para defender el agua limpia, escasa, preciada, en peligro, mediante los procesos de resistencia y defensa de las aguas por las comunidades.",
                "observaciones": "19 historias de defensa del agua frente a la minería en América Latina."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Durand, Francisco.",
                "titulo": "Juegos de poder: Política tributaria y lobby en el Perú 2011 – 2017.",
                "referencia": "2017. Lima: Oxfam América. 86 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Juegos%20de%20poder.%20Pol%C3%ADtica%20tributaria%20y%20lobby%20en%20el%20Per%C3%BA%202011%20-%202017.pdf",
                "resumen_comentario": "Las normas tributarias con la finalidad de \"reactivar la economía\" que se dan en Perú, lejos de lograr ese objetivo, impulsaron una tributación inequitativa, que acentuó las brechas de desigualdad, pues se activaron lobbies compuestos por técnicos y funcionarios vinculados a grandes intereses corporativos, así como por los principales gremios empresariales del país, a la vez que los medios, a través de campañas, influyeron en la agenda pública alentando normas para impulsar o “destrabar” las grandes inversiones."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Echart Muñoz, Enara y Villarreal Villamar, María del Carmen.",
                "titulo": "Pacha. Defendiendo la tierra: Extractivismo, conflictos y alternativas en América Latina y Caribe.",
                "referencia": "2018. Grupo de Relaciones Internacionales y Sur Global (Grisul / Unirio), Escuela de Ciencia Política, Universidad Federal del Estado de Rio de Janeiro. Río de Janeiro: Periplos. 24 pp.",
                "link": "http://www.grisulunirio.com/wp-content/uploads/2018/11/Cartilha_Final_Espanhol-Web.pdf",
                "resumen_comentario": "Ilustra los impactos negativos del modelo de desarrollo extractivista, analizando especialmente las actividades de minería y sus efectos sobre el ambiente; las luchas y resistencias de las mujeres, indígenas y afrodescendientes; las acciones de las transnacionales; y algunos ejemplos de criminalización de los movimientos; así como alternativas formuladas a partir de las cosmovisiones de los pueblos de América Latina y El Caribe."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Echart Muñoz, Enara y Villarreal Villamar, María del Carmen.",
                "titulo": "Resistencias y alternativas al desarrollo en América Latina y Caribe: Luchas sociales contra el extractivismo.",
                "referencia": "2019. Grupo de Estudios de Relaciones Internacionales (Geri), Universidad Autónoma de Madrid (UAM). En: Relaciones Internacionales Nº 39. 24 pp.",
                "link": "https://revistas.uam.es/",
                "resumen_comentario": "Analiza el papel de los movimientos sociales en América Latina y Caribe, con foco en las luchas contra el extractivismo. Se ha realizado un mapeo de conflictos en torno a la minería para mostrar sus impactos en el ambiente, género, territorios indígenas, desplazamientos de población, entre otros, así como los procesos de criminalización surgidos. Muestra la tendencia regional de construcción de alternativas al modelo extractivista dominante.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren C., Lorenzo; Eguren L., Fernando y Durand, Francisco.",
                "titulo": "Concentración de la tierra y poder político en el Perú: ¿Liberalismo o mercantilismo?",
                "referencia": "2018. Lima: Centro Peruano de Estudios Sociales (Cepes) y Oxfam. 176 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/eguren-eguren-durand_liberalismo-o-mercantilismo_2018.pdf",
                "resumen_comentario": "Se examina la llamada modernización de la agricultura peruana, a partir de los subsidios y el impacto tributario de los principales proyectos de irrigación de la costa; la concentración de la propiedad de la tierra agrícola en las últimas dos décadas; y el proceso de reprivatización de tierras y su relación con el dominio del mercado."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Escobal, Javier; Ponce, Carmen; Pajuelo, Ramón y Espinoza, Mauricio.",
                "titulo": "Estudio comparativo de intervenciones para el desarrollo rural en la sierra sur del Perú.",
                "referencia": "2012. Ford Foundation. Lima: Grupo de Análisis para el Desarrollo (Grade). 166 pp.",
                "link": "http://www.grade.org.pe/upload/publicaciones/archivo/download/pubs/LIBROGRADE_INTERVENCIONESRURAL.pdf",
                "resumen_comentario": "Explora los efectos de proyectos en las estrategias de vida de los hogares beneficiados, sus estrategias de acumulación de activos, los cambios en su seguridad alimentaria y en sus percepciones de bienestar y empoderamiento. Asimismo, se documenta la relación que los proyectos establecen con los beneficiarios e instituciones locales, así como el impacto y distorsiones de la extracción de recursos naturales."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Flores Unzaga, César.",
                "titulo": "Conviviendo con la minería en el sur andino: Experiencias de diálogo en las provincias de Espinar, Chumbivilcas y Cotabambas.",
                "referencia": "2016. Acción Solidaria para el Desarrollo (CooperAcción). Lima: Oxfam Perú. 214 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Conviviendo%20con%20la%20mineria%20en%20el%20sur%20andino.pdf",
                "resumen_comentario": "Poblaciones rurales de Apurímac y Cusco, dedicadas a la ganadería y agricultura, llevan años de coexistencia con la minería. Estas comunidades no se oponen a la extracción minera, pero sí demandan que sus derechos sean respetados. Sus demandas se canalizan en una dinámica constante de conflicto y diálogo.  De esta manera, las organizaciones comunales vienen  negociando acuerdos con el Estado y con las empresas mineras, buscando lograr una convivencia social y una mejor gestión de los recursos extraídos a favor del desarrollo local.",
                "observaciones": "Experiencias de diálogo en las provincias de Espinar, Chumbivilcas y Cotabambas."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Flores Unzaga, César.",
                "titulo": "¿Milagro apurimeño?: La minería y el debate del crecimiento y desarrollo local.",
                "referencia": "2019. Grupo de Justicia Fiscal Perú (GJF); Acción Solidaria para el Desarrollo (CooperAcción). Lima: Oxfam América. 150 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/%C2%BFMilagro%20apurime%C3%B1o%20La%20miner%C3%ADa%20y%20el%20debate%20del%20crecimiento%20y%20desarrollo%20local.pdf",
                "resumen_comentario": "En Perú, el mayor aporte económico de la minería se basa en los aportes fiscales, principalmente a través del canon y regalías, que son trasladados a los gobiernos subnacionales. Sin embargo, a pesar de la sólida expansión minera del país, Pasco, Huancavelica, Cajamarca y Apurímac muestran altos niveles de pobreza y un bajo índice de desarrollo humano (IDH), y, además, Apurímac es una de las regiones con más conflictos sociales."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Flores Unzaga, César; Quiñones Huayna, Carlos; Baca Tupayachi, Epifanio y De Echave Cáceres, José.",
                "titulo": "Recaudación fiscal y beneficios tributarios en el sector minero a la luz de los casos Las Bambas y Cerro Verde.",
                "referencia": "2017. Acción Solidaria para el Desarrollo (CooperAcción); Oxfam Perú. Lima: Propuesta Ciudadana. 126 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Recaudaci%C3%B3n%20fiscal%20y%20beneficios%20tributarios%20en%20el%20sector%20minero%20a%20la%20luz%20de%20los%20casos%20Las%20Bambas%20y%20Cerro%20Verde_1.pdf",
                "resumen_comentario": "Las grandes empresas mantienen beneficios tributarios desde los años 90, como la depreciación acelerada y la deducción del impuesto a la renta de tercera categoría por inversiones en infraestructura de servicio público, así como contratos de estabilidad jurídica que las protegen de cambios en el esquema tributario. Es un sistema fiscal injusto, donde no hay equilibrio entre los grandes negocios y los derechos de las personas a elevar su calidad de vida, situación que genera conflictos sociales.",
                "observaciones": "Casos Las Bambas y Cerro Verde."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Glave Testino, Manuel.",
                "titulo": "Ordenamiento territorial y desarrollo en el Perú: Notas conceptuales y balance de logros y limitaciones.",
                "referencia": "2012. Grupo de Análisis para el Desarrollo (Grade). 44 pp.",
                "link": "http://biblioteca.clacso.edu.ar/Peru/grade/20121109041114/30_glave.pdf",
                "resumen_comentario": "Resume los diferentes alcances del concepto de ordenamiento territorial en la realidad peruana, el contexto en que se desarrolla, y cómo se operativiza su implementación, mostrando la manera en que el ordenamiento territorial y la zonificación ecológica y económica intervienen para promocionar un modelo de desarrollo sostenible en el país, en el marco del proceso de descentralización y ante los desafíos ambientales cada vez más evidentes."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo de Justicia Fiscal Perú (GJF).",
                "titulo": "Evasión y elusión tributaria: Causa y efecto de la injusticia fiscal.",
                "referencia": "2019. Acción Solidaria para el Desarrollo (CooperAcción); Oxfam Perú; Propuesta Ciudadana. Trujillo: Cedepas Norte. 2 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Hoja%20Informativa%20Evasion%20tributaria.pdf",
                "resumen_comentario": "La evasión y elusión tributaria son parte del fraude fiscal y del incumplimiento tributario, y están vinculadas al lavado de dinero, la fuga de capitales, el contrabando, la corrupción de funcionarios, entre otros. La evasión y la elusión en Perú son superiores a los de países desarrollados e incluso de América Latina. Ante ello, necesitamos una política de lucha contra el fraude fiscal, que nos ponga a la par del sistema fiscal internacional.",
                "observaciones": "Hoja informativa N° 3."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo de Justicia Fiscal Perú (GJF).",
                "titulo": "Las devoluciones tributarias: Un problema mayor para el balance fiscal.",
                "referencia": "2019. Acción Solidaria para el Desarrollo (CooperAcción); Oxfam Perú; Propuesta Ciudadana. Trujillo: Cedepas Norte. 2 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Hoja%20informativa%20N%C2%B0%201%20LAS%20DEVOLUCIONES%20TRIBUTARIAS_0.pdf",
                "resumen_comentario": "El sector minero es el principal beneficiario de las devoluciones, captando el 30 % del total, reflejando el impacto de megaproyectos mineros (Las Bambas, ampliación de Cerro Verde), los cuales tienen un enorme crédito fiscal. En 2017 las devoluciones superaron los 16 mil millones, cifra que equivale al presupuesto público para la salud.",
                "observaciones": "Hoja informativa N° 1."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo de Justicia Fiscal Perú (GJF).",
                "titulo": "Régimen fiscal minero: Reforma necesaria.",
                "referencia": "Lima:",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/HOJA%20GJF%205.pdf",
                "resumen_comentario": "No existe un régimen tributario adecuado al sector minero, y la consecuencia es que la participación del Estado en la renta minera es insuficiente. Aunque en los últimos diez años el valor de la producción minera aumentó, el pago de impuestos del sector ha disminuido; en 2007 el Estado recaudaba el 20 % de las exportaciones mineras, y en 2017 apenas captaba el 8 %. Resolver este desequilibrio requiere una revisión general del régimen tributario para la minería.",
                "observaciones": "Hoja informativa N° 5."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Grupo Propuesta Ciudadana.",
                "titulo": "Lo que debemos saber acerca del canon, sobrecanon y regalías petroleras y gasíferas.",
                "referencia": "s/f. Agencia de los Estados Unidos para el Desarrollo Internacional (Usaid); Revenue Watch Institute.  Grupo Propuesta Ciudadana. 10 pp.",
                "link": "http://propuestaciudadana.org.pe/sites/default/files/publicaciones/archivos/Encarte%20Hidrocarburos%20FINAL%20WEB.pdf",
                "resumen_comentario": "Contiene información sobre el sistema tributario que rige el sector petrolero y gasífero; la distribución y uso del canon, sobrecanon y regalías; y la transparencia existente en estos temas. Trata sobre el aporte de los hidrocarburos a la economía nacional, su régimen tributario, las transferencias por canon petrolero y gasífero, en qué se utilizan estos recursos, y la Iniciativa para la Transparencia de las Industrias Extractivas (Itie Perú)."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gudynas, Eduardo.",
                "titulo": "Extracciones, extractivismo y extrahecciones: Un marco conceptual sobre la apropiación de recursos naturales.",
                "referencia": "2013. Centro Latino Americano de Ecología Social (Claes). Observatorio del Desarrollo Nº 18. 18 pp.",
                "link": "http://ambiental.net/wp-content/uploads/2015/12/GudynasApropiacionExtractivismoExtraheccionesOdeD2013.pdf",
                "resumen_comentario": "Presenta una definición de extractivismo, precisando los límites bajo los cuales debería ser usado, y ubicándolo en el amplio contexto de las actividades humanas sobre el ambiente. Asimismo, el concepto de “extrahección” para referirse a actividades de apropiación de recursos naturales que se realizan con violencia y violan derechos, sean humanos como de la naturaleza.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Guereña, Arantxa.",
                "titulo": "Desterrados: Tierra, poder y desigualdad en América Latina.",
                "referencia": "2016. Oxford: Oxfam Internacional. 100 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Desterrados%20Tierra,%20poder%20y%20desigualdad%20en%20Am%C3%A9rica%20Latina_0.pdf",
                "resumen_comentario": "Explica por qué América Latina es la región más desigual del mundo en la distribución de la tierra. Más de la mitad de la tierra productiva de la región está concentrada en el 1% de las explotaciones agropecuarias. En Perú, el extractivismo y un proceso de concentración de tierras en la costa para cultivos de exportación, y la precaria seguridad jurídica de muchas comunidades de la sierra y selva sobre sus territorios, amenaza los medios de vida de miles de personas y acentúa la pobreza y desigualdad.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hurtado Caicedo, Francisco y Hoetmer, Raphael. (Coord.)",
                "titulo": "Abusos de poder contra defensores y defensoras de los derechos humanos, del territorio y del ambiente: Informe sobre extractivismo y derechos en la región andina.",
                "referencia": "2018. Asociación Pro Derechos Humanos (Aprodeh); Broederlijk Denle; Colectivo de Abogados José Alvear Restrepo (Cajar); Centro de Documentación e Información Bolivia (Cedib); Comisión Ecuménica de Derechos Humanos (Cedhu). 74 pp.",
                "link": "https://cedib.org/wp-content/uploads/2018/06/INFORME-ANDINO-%C3%9ALTIMA-VERSI%C3%93N.pdf",
                "resumen_comentario": "Da cuenta del modo en que se consolidan los proyectos extractivos, afectando a comunidades rurales en los países andinos. El extractivismo se consolida de manera sistemática a través de patrones de actuación similares en la región andina, adaptados según los procesos históricos y sociopolíticos de cada país, que son los patrones de abuso de poder a través del uso de la fuerza física, a través de las normas e instituciones, y a través de los discursos.",
                "observaciones": "Informe. Análisis de cuatro casos emblemáticos en el contexto de las actividades extractivas en Perú, Colombia, Ecuador y Bolivia."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Iniciativa para la Transparencia de las Industrias Extractivas.",
                "titulo": "Informe de progreso 2020.",
                "referencia": "2020. Iniciativa para la Transparencia de las Industrias Extractivas (Eiti). Oslo: Eiti International Secretariat. 42 pp.",
                "link": "https://eiti.org/files/documents/eiti_progressreport_2020_spanish.pdf",
                "resumen_comentario": "La corrupción en el sector extractivo es un obstáculo para el desarrollo. El Eiti, a través de la facilitación de datos y una plataforma para el escrutinio público, expone prácticas que se prestan a abusos. El Estándar Eiti establece requisitos sólidos de transparencia, de modo que sociedad civil, organismos anticorrupción y medios puedan utilizarlos para investigar la corrupción. Presenta casos exitosos de transparencia en diferentes partes de la cadena de valor del sector extractivo, desde la divulgación de acuerdos hasta el seguimiento de las transferencias de ingresos a las comunidades locales.",
                "observaciones": "Informe. Casos de Afganistán, República Democrática del Congo, Irak, Madagascar, Myanmar, República del Congo, Senegal, Alemania, Ghana, Nigeria y Zambia."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes).",
                "titulo": "Planificación para el desarrollo territorial sostenible en América Latina y el Caribe.",
                "referencia": "2019. Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes) de la Comisión Económica para América Latina y el Caribe (Cepal). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 213 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44731/1/S1900439_es.pdf",
                "resumen_comentario": "Aborda los desafíos territoriales del espacio nacional, estableciendo un horizonte —la reducción de las desigualdades territoriales—, así como los componentes estratégicos del diseño de políticas de desarrollo territorial para identificar los nodos críticos y las estrategias de gestión, proponiendo una metodología desde un inventario de estas políticas y los desafíos de la planificación con criterios de intersectorialidad, múltiples niveles, pluritemporalidad y participación de actores sociales, hacia la Agenda 2030."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jahncke, Javier y De Marino, Gloria.",
                "titulo": "Agenda Muqui: Minería informal, ilegal, artesanal y proceso de formalización minera en el Perú.",
                "referencia": "2019. Lima: Muqui, Red de Propuesta y Acción. 31 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/02/Miner%C3%ADa-Informal-Ilegal-Artesanal-y-Proceso-de-Formalizaci%C3%B3n-Minera-en-el-Per%C3%BA_v.-WEB-final.pdf",
                "resumen_comentario": "Examina las causas de la minería ilegal e informal y sus efectos ambientales, sociales, culturales y económicos, debido a que se realiza sin respetar los estándares de protección ambiental, con maquinaria y equipo inadecuados y en condiciones de riesgo para la salud humana y ambiental. Asimismo, el marco normativo y plantea propuestas de política pública.",
                "observaciones": "Caso de estudio: La Rinconada, Puno."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jahncke, Javier y Ballón, Eduardo. (Coordinadores)",
                "titulo": "Propuesta de políticas públicas para una nueva minería en el Perú.",
                "referencia": "2014. ICCO Cooperación, Brot für die Welt. Lima: Muqui, Red de Propuesta y Acción; Grupo Propuesta Ciudadana. 188 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Propuesta_Politicas_mineria.pdf",
                "resumen_comentario": "Propone agenda de políticas sobre la minería y su impacto en los recursos naturales y el territorio; la gestión ambiental y sus instrumentos; la pequeña minería, artesanal e ilegal; participación ciudadana y consulta previa a pueblos indígenas; derechos humanos y conflictividad social; descentralización; la agricultura en zonas mineras; gobiernos regionales y decisiones ambientales y mineras; educación ambiental; renta extractiva y diversificación económica."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kuramoto, Juana y Glave, Manuel.",
                "titulo": "Extractivismo y crecimiento económico en el Perú, 1930 - 1980.",
                "referencia": "2020. En: La economía peruana entre la gran depresión y el reformismo militar 1930 – 1980. Compendio de Historia Económica del Perú. Tomo V. Carlos Contreras (Editor). Lima: Banco Central de Reserva del Perú (BCRP); Instituto de Estudios Peruanos (IEP). 668 pp.",
                "link": "https://www.bcrp.gob.pe/docs/Publicaciones/libros/historia/5-gran-depresion-y-reformismo-militar.pdf",
                "resumen_comentario": "El crecimiento económico del Perú en el siglo XX ha estado marcado por los ciclos de expansión y caída de los sectores extractivos, cuyo proceso de consolidación y modernización estuvo caracterizado por reformas institucionales que promovieron, con variados instrumentos (seguridad jurídica, incentivos tributarios y otros económicos), la captación de inversión extranjera y la ampliación de la capacidad productiva. Sin embargo, los ciclos de expansión de la minería metálica, petróleo o pesca no han sido suficientes para que la economía peruana se consolide como una economía moderna."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lang, Miriam; López, Claudia y Santillana, Alejandra. (Compiladoras)",
                "titulo": "Alternativas al capitalismo: Colonialismo del siglo XXI.",
                "referencia": "2013. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 524 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/Alternativas-al-capitalismo.pdf",
                "resumen_comentario": "Partiendo del supuesto que, para superar el desarrollismo y el extractivismo, hay que buscar soluciones a escala regional y hasta internacional, se explora las políticas existentes y las opciones de integración regional latinoamericana. Plantea deconstruir ciertos mitos que siguen vigentes, concibiendo el modelo como el lugar del éxito, la modernización y el progreso, y reconocerlo como excluyente, colonial, expropiado en gran medida, explorando posibles transiciones a una era postextractivista en escenarios nacionales concretos."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lang, Miriam; Cevallos, Belén y López, Claudia. (Compiladoras)",
                "titulo": "La osadía de lo nuevo: Alternativas de política económica.",
                "referencia": "2015. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 198 pp.",
                "link": "http://transiciones.org/wp-content/uploads/2018/03/OsadiaNuevoPoliticaEconomica2015.pdf",
                "resumen_comentario": "Reúne planteamientos heterodoxos acerca de las políticas económicas, desafiando al supuesto de que no existen alternativas al recetario de los ‘expertos’ y poniendo en evidencia la vulnerabilidad en la que la apuesta por el extractivismo ha colocado a América Latina. Propone democratizar la economía, no dejando que el mercado regule las condiciones de la producción, los servicios, el consumo y el uso de bienes."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lang, Miriam y Mokrani, Dunia. (Compiladoras)",
                "titulo": "Más allá del desarrollo.",
                "referencia": "2011. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 323 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/Mas-alla-del-desarrollo.pdf",
                "resumen_comentario": "Los procesos de cambio en América Latina no han logrado salir de la matriz desarrollista y extractivista, por lo que es necesario construir alternativas que salgan del patrón impuesto al Sur en la división del trabajo que establece el mercado mundial, regido por lógicas neoliberales, económicas y también políticas e institucionales, apoyadas por el Estado patriarcal, colonial y clasista. Se explora, en la región andina, conceptos como el buen vivir, el Estado plurinacional y los derechos de la naturaleza, así como las consecuencias de las políticas extractivas, la incidencia de los movimientos sociales frente a éstas, y las posibles transiciones más allá del desarrollo"
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Li, Fabiana.",
                "titulo": "Desenterrando el conflicto: Empresas mineras, activistas y expertos en el Perú.",
                "referencia": "2017. Instituto de Estudios Peruanos (IEP). 348 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Desenterrando%20el%20conflicto.pdf",
                "resumen_comentario": "Analiza la manera agresiva de las modernas tecnologías mineras que, implicando tanto aspectos humanos como no humanos en su expansión, muestran el carácter invasivo de dichas tecnologías extractivas. Ello, unido a la escasez de agua, la contaminación y la pérdida de tierras de cultivo, ha generado respuestas de la población afectada, tomando por sorpresa a los políticos y a las propias empresas, que no supieron manejar la situación y que, en muchas ocasiones, han empleado la fuerza para reprimir a los opositores."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Luque González, Arturo; Herrero-García, Noelia y Peñaherrera Melo, Jacqueline.",
                "titulo": "Extractivismo en América Latina: ¿Bien común o democracia delegativa?",
                "referencia": "2018. Universidad Tecnológica Indoamérica Ambato (Ecuador); Universidad Rey Juan Carlos (URJC). 17 pp.",
                "link": "https://www.ucm.es/data/cont/media/www/pag-114977/ARTICULO_6_M+A2018.1.pdf",
                "resumen_comentario": "Analiza desde una perspectiva multidimensional los elementos facilitadores que promocionan y establecen las políticas de extractivismo, respecto a temas como la afectación del cambio climático, los procesos de corrupción, globalismo, secuelas generadas, etc., orientado hacia una propuesta alternativa.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lust, Jan y Denegri, Oswaldo.",
                "titulo": "Perú: Razones y bases económicas para la continuidad del modelo extractivista de desarrollo.",
                "referencia": "2018. Universidad Ricardo Palma. 23 pp.",
                "link": "http://repositorio.urp.edu.pe/bitstream/handle/URP/1490/27.%20Denegri%20Grande%20y%20Jan%20Lust%2C%20Per%C3%BA%20Razones%20y%20bases%20econ%C3%B3micas%20para%20la%20continuidad%20del%20modelo%20extractivista%20del%20desarrollo.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "La economía peruana depende para su crecimiento de la exportación de sus recursos minerales, causada por la división internacional del trabajo. Las políticas gubernamentales que promueven el modelo de desarrollo extractivo son el resultado de la correlación de fuerzas económicas en favor del capital extractivo y la dependencia fiscal del Estado del sector minero.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Makedonski Valdeavellano, Paul Maquet; Mendoza Nava, Armando y Romero Cano, Ana. (Editores)",
                "titulo": "Caminos de transición: Alternativas al extractivismo y propuestas para otros desarrollos en el Perú.",
                "referencia": "2014. Red Peruana por una Globalización con Equidad (RedGE). Lima: CooperAcción. 282 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/Caminos%20de%20Transici%C3%B3n%20-%20RedGE.pdf",
                "resumen_comentario": "Los límites del modelo basado en la exportación de materias primas, sin planificación ni regulación, genera conflictos sociales e impactos ambientales, y no impulsa un desarrollo económico sostenible. Por otra parte, está la necesidad de la transición hacia una economía diversificada y menos dependiente de la explotación de recursos naturales, diversificando la matriz productiva, generando valor agregado e incorporando la variable ambiental en la planificación y toma de decisiones sobre el territorio, especialmente en el contexto del cambio climático."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Martínez Espinoza, Manuel Ignacio.",
                "titulo": "El extractivismo minero en América Latina: Planteamientos, paralelismos y presunciones desde el caso de Guatemala.",
                "referencia": "2019. En: Perfiles latinoamericanos Nº 27. México: Facultad Latinoamericana de Ciencias Sociales (Flacso). 28 pp.",
                "link": "https://perfilesla.flacso.edu.mx/index.php/perfilesla/article/view/746/877",
                "resumen_comentario": "Plantea que, a pesar de constituir un fenómeno complejo, el extractivismo minero en América Latina tiene pautas que configuran un patrón en la región. A partir de un caso, señala el auge de la minería transnacional, el apoyo institucional, la apropiación territorial y la conflictividad social emergente, en contexto de un modelo primario exportador y la democracia con componentes de desigualdad, exclusión y deterioro ambiental.",
                "observaciones": "Artículo. Caso de mina Marlin, Guatemala."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mendoza Nava, Armando.",
                "titulo": "Beneficios tributarios: Problema fiscal pendiente.",
                "referencia": "2019. Grupo de Justicia Fiscal Perú (GJF). Lima: Oxfam Internacional. 12 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Beneficios_Tributarios_2019.pdf",
                "resumen_comentario": "En Perú existen beneficios tributarios cuya legitimidad y utilidad son cuestionables, excesivamente onerosos o con efectos indeseados, y casos donde el beneficio no alcanza a quienes corresponde, sino que es absorbido por grandes grupos de poder económico.",
                "observaciones": "Documento de trabajo N° 1."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mendoza Nava, Armando.",
                "titulo": "Brechas latentes: Índice de avance contra la desigualdad en el Perú 2017-2018.",
                "referencia": "2019. Lima: Oxfam América. 134 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Brechas-Latentes-Indice-2017-2018.pdf",
                "resumen_comentario": "La informalidad, la precariedad laboral, el retroceso en el bienestar de la población y el aumento de la pobreza monetaria, son algunos de los puntos abordados en el estudio. Analiza el avance contra la desigualdad desde la justicia tributaria, inversión en las personas, empleo digno, derechos económicos de las mujeres y gobernanza ambiental y de los recursos naturales."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Compendio normativo de ordenamiento territorial.",
                "referencia": "2015. Ministerio del Ambiente (Minam), Dirección General de Ordenamiento Territorial. Lima: Ministerio del Ambiente (Minam). 418 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/12084/01_compendio-normativo-ot.pdf",
                "resumen_comentario": "Las herramientas existentes de OT se diseñaron para entender las dinámicas, relaciones y funcionalidad del territorio, de modo que coincida su gestión y ocupación con sus cualidades naturales y desarrollo económico. Contiene información normativa relevante para vincular los planes e instrumentos de gestión del territorio y orientar adecuadamente los procesos de ordenamiento territorial a nivel nacional."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Contenido mínimo de las disposiciones internas que regulan las Comisiones Técnicas de Zonificación Ecológica y Económica (ZEE) en el ámbito regional o local.",
                "referencia": "2015. Ministerio del Ambiente (Minam). 7 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/11904/p_RM-056-2015-MINAM.pdf",
                "resumen_comentario": "Contiene el proceso que siguen las Comisiones Técnicas de Zonificación Ecológica Económica, cuyo objetivo es propiciar el acompañamiento en la elaboración, aprobación y ejecución de este instrumento técnico para el ordenamiento territorial, a cargo del nivel de gobierno correspondiente. Los grupos de trabajo de la Comisión incluyen expertos locales, con el propósito de incorporar los “saberes locales” y los conocimientos colectivos de los pueblos indígenas.",
                "observaciones": "Resolución Ministerial Nº 056-2015-Minam. 19 de marzo de 2015."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Instrumentos técnico normativos del ordenamiento territorial.",
                "referencia": "2016. Ministerio del Ambiente (Minam). 478 pp.",
                "link": "http://www.minam.gob.pe/ordenamientoterritorial/wp-content/uploads/sites/18/2013/10/Instrumentos_Tecnicos_Normativos_OT.pdf",
                "resumen_comentario": "Contiene lineamientos, metodologías, marco legal y pautas para elaborar instrumentos técnicos y el plan de ordenamiento territorial, para que sea resultado de un proceso coherente, concertado y regulado en función a las necesidades del país y los retos de desarrollo, entendido el plan como una herramienta técnica y un mecanismo de gestión que sustenta la decisión política en función a las competencias otorgadas.",
                "observaciones": "No disponible en internet."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Memoria descriptiva del mapa de vulnerabilidad física del Perú: Herramienta para la gestión del riesgo.",
                "referencia": "2011. Ministerio del Ambiente, Dirección General de Ordenamiento Territorial. 67 pp.",
                "link": "http://bvpad.indeci.gob.pe/doc/pdf/esp/doc1851/doc1851-contenido.pdf",
                "resumen_comentario": "El Perú, por su ubicación geográfica y características geológicas es considerado como el tercer país más vulnerable del mundo, después de Honduras y Bangladesh. Evalúa las condiciones naturales del territorio y los peligros a través de métodos estadísticos y cartográficos, con una herramienta para la gestión de riesgos y medidas de adaptación que, como instrumento técnico-científico, será útil para que decisores políticos contribuyan a disminuir las pérdidas económicas y de vidas humanas."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Ordenamiento territorial (OT) en el Perú 2011 – 2015: Avances concretos para la sostenibilidad y acciones del Minam en ejercicio de su rol rector.",
                "referencia": "2016. Informes sectoriales Nº 3: Ambiente. Lima: Ministerio del Ambiente (Minam). 270 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/12057/informe_ot.pdf",
                "resumen_comentario": "Presenta los avances realizados en las regiones donde ha culminado la Zonificación Ecológica Económica, e incorpora un análisis conceptual sobre el objetivo del ordenamiento territorial como sustento técnico para el proceso de toma de decisiones de gestión pública, complementada con la responsabilidad de las autoridades para el ejercicio de sus funciones, así como el reconocimiento al rol de los instrumentos de gestión ambiental y los mecanismos para atender conflictos por superposición de derechos para el aprovechamiento de los recursos naturales."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Monge, Carlos.",
                "titulo": "Las industrias extractivas y la transición post extractivista en América Latina.",
                "referencia": "2013. Revenue Watch Institute, América Latina. Bogotá: ParlAmericas. 33 pp.",
                "link": "http://www.parlamericas.org/uploads/documents/GT0%20-%20Tendencias%20y%20cuestiones%20centrales%20%28Monge%29.pdf",
                "resumen_comentario": "Aborda el ciclo largo de crecimiento económico y el incremento de la demanda global de energía y metales, con el consiguiente aumento de la dependencia del sector extractivo y la tendencia hacia economías primario exportadoras, alertando del peligro de shock externo y del aumento de la conflictividad social. Examina la matriz energética, el impacto del cambio climático, las políticas públicas alternativas al extractivismo, el neoextractivismo y la transición post extractivista.",
                "observaciones": "Presentación."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Morato, Ana.",
                "titulo": "Metodología prospectiva aplicada a la identificación de sectores productivos del futuro.",
                "referencia": "2015. Serie Documentos metodológicos Nº 4. Lima: Centro Nacional de Planeamiento Estratégico (Ceplan). 80 pp.",
                "link": "https://www.ceplan.gob.pe/wp-content/uploads/2016/07/sectores_de_futuro_25-04-2016.pdf",
                "resumen_comentario": "Propone una metodología para la identificación de sectores productivos y áreas prioritarias de desarrollo económico, «sectores productivos de futuro», que, a través de diferentes herramientas propias del análisis prospectivo, utiliza la consulta de expertos para arribar a conclusiones. La metodología propuesta identifica, desde una perspectiva de mediano y largo plazo, los sectores productivos con mayores probabilidades de tener un impacto positivo en el desarrollo del país."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Muqui, Red de Propuestas y Acción.",
                "titulo": "Balance y propuestas para el funcionamiento de los procesos de diálogo en el Perú.",
                "referencia": "2016. Red Regional Agua, Desarrollo y Democracia (Redad), Piura; Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides), Cajamarca; Pastoral Social de Dignidad Humana (Passdih), Arzobispado de Huancayo; Derechos Humanos Sin Fronteras (DHSF), Cusco. 68 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Balance-y-propuestas.pdf",
                "resumen_comentario": "La conflictividad social Perú ha originado mecanismos de diálogo como salida al conflicto y como espacios de acercamiento y negociación entre los actores, en respuesta a situaciones de crisis y para posibilitar los proyectos extractivos, pero no como una política de prevención. Se propone un marco normativo e institucionalizar el diálogo en políticas públicas, que privilegien su carácter trasversal, aplicable a todos los sectores y procesos.",
                "observaciones": "Estudios de caso en Piura, Junín, Cajamarca y Cusco."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Muqui, Red de Propuestas y Acción.",
                "titulo": "Propuestas de políticas y reformas normativas para el otorgamiento de concesiones mineras en el Perú.",
                "referencia": "2015. Grupo de Trabajo sobre Concesiones Mineras y Ordenamiento Territorial de la Red Muqui. 62 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/libro-concesiones-mineras-y-ordenamiento-final.pdf",
                "resumen_comentario": "Brinda información sobre el marco normativo y el avance territorial de las concesiones mineras desde una mirada económica e institucional, y se hace una evaluación comparativa de las políticas vigentes en el Perú y en otros países de la región sobre las concesiones, así como de la agenda y planteamientos de los diversos actores sociales, políticos e institucionales. Asimismo, presenta propuestas de política en medidas de corto, mediano y largo plazo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Neyra, Raquel.",
                "titulo": "Conflictos socioambientales en el Perú, extractivismo, colonialidad y violencia: La colonialidad como elemento vector del extractivismo.",
                "referencia": "2018. Programa de Posgrado en Desarrollo Sostenible y Desigualdades Sociales en la Región Andina (trAndeS). Working Paper Series Nº 4. Berlin: Lateinamerika-Institut, Freie Universität Berlin. 35 pp.",
                "link": "https://www.programa-trandes.net/Ressources/working_papers/WP-4-Neyra-Online.pdf",
                "resumen_comentario": "Analiza las divisiones en el poder y el trabajo heredados de la colonia que refuerzan el racismo inherente a la colonialidad, así como los métodos que se emplean para perpetuarlo en la actualidad y la violencia contra la población que resiste a los proyectos extractivos, que han multiplicado los conflictos socioambientales. Asimismo, qué alternativas están construyendo y cómo los movimientos por la justicia ambiental ayudan a reforzar la identidad y a encontrar salidas a la colonialidad."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nuguer, Victoria y Powell, Andrew. (Coordinadores)",
                "titulo": "Informe macroeconómico de América Latina y el Caribe 2020: Políticas para combatir la pandemia.",
                "referencia": "2020. Banco Interamericano de Desarrollo (Bid). 72 pp.",
                "link": "https://publications.iadb.org/publications/spanish/document/Informe_macroecon%C3%B3mico_de_Am%C3%A9rica_Latina_y_el_Caribe_2020_Pol%C3%ADticas_para_combatir_la_pandemia.pdf",
                "resumen_comentario": "Resumen de la evolución de la economía mundial y la forma en que puede repercutir en la región. Examina las condiciones antes de la crisis sanitaria y hace un análisis de las posibles respuestas de política, así como información sobre lo que están haciendo los países frente a la pandemia, desde una perspectiva regional.",
                "observaciones": "Informe. Contiene resúmenes a nivel de cada país."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Observatorio de Conflictos Mineros en el Perú (OCM).",
                "titulo": "25° informe del Observatorio de Conflictos Mineros en el Perú.",
                "referencia": "2019. Acción Solidaria para el Desarrollo (CooperAcción); Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides); Federación Ecuménica para el Desarrollo y la Paz (Fedepaz). 46 pp.",
                "link": "http://cooperaccion.org.pe/wp-content/uploads/2019/12/Bolet%C3%ADn-AMP-DICIEMBRE-2019.pdf",
                "resumen_comentario": "Examina los conflictos causados por la presencia de actividades extractivas en Ancash, región que concentra regularmente el mayor número de conflictos, seguida por Cusco, Loreto, Puno y Apurímac.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Observatorio Latinoamericano de Conflictos Ambientales (Olca) y Observatorio de Conflictos Mineros de América Latina (Ocmal).",
                "titulo": "Extractivismo en América Latina: Agua que no has de beber.",
                "referencia": "2014. Fundación Rosa Luxemburg, 11.11.11, MiningWatch, Misereor, Broederlijk Delen, y Global Greengrants Fund. Santiago: Observatorio Latinoamericano de Conflictos Ambientales (Olca) y Observatorio de Conflictos Mineros de América Latina (Ocmal). 145 pp.",
                "link": "http://extractivismo.com/wp-content/uploads/2016/07/ExtractivismoAmericaLatinaAgua.pdf",
                "resumen_comentario": "Diversas organizaciones que se encuentran en situación de conflicto socioambiental, contribuyen a las reflexiones latinoamericanas sobre extractivismo, compartiendo las alternativas que se visualizan en los territorios y avanzando en la redefinición de los sentidos que animan sus luchas, asumiendo que es la hora de proteger el agua y la vida en el continente, desde las perspectiva de los territorios.",
                "observaciones": "Memoria de seminario internacional."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pereira, Mauricio y Saade Hazin, Miryam. (Coordinadores)",
                "titulo": "Minería para un futuro bajo en carbono: Oportunidades y desafíos para el desarrollo sostenible.",
                "referencia": "2019. Deutsche Gesellschaft für Internationale Zusammenarbeit (Giz); Ministerio Federal de Cooperación Económica y Desarrollo de Alemania (BMZ). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 89 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44584/1/S1900199_es.pdf",
                "resumen_comentario": "Aborda la minería como actor en la agenda mundial para la gobernanza; analiza la creciente demanda global y su impacto para América Latina; los desafíos para la minería del siglo XXI; el clima, ambiente y territorio como elementos de una minería inteligente; y la innovación frente al clima. Busca debatir el papel de la minería en la Agenda de Desarrollo Sostenible, que ayude al mundo y a los países de la región a cumplir con los retos del cambio climático durante el siglo XXI.",
                "observaciones": "Seminario regional del mismo nombre. Santiago de Chile, junio de 2018."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Planifica Ecuador.",
                "titulo": "Plan de Desarrollo y Ordenamiento Territorial (PDOT): Documento ejecutivo para autoridades provinciales.",
                "referencia": "2019. Secretaría Técnica de Planifica Ecuador. 16 pp.",
                "link": "https://www.planificacion.gob.ec/wp-content/uploads/downloads/2019/08/Folletos-autoridades-provinciales.pdf",
                "resumen_comentario": "Presenta orientaciones para la elaboración del plan de ordenamiento territorial en los niveles local, municipal y provincial, explicando su rol articulador, sus enfoques y contenido, incluyendo un diagnóstico, una propuesta de modelo territorial y un modelo de gestión para administrar el territorio, así como la necesidad de institucionalizar el plan y alinearlo a la Agenda 2030.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Quispe Mogollón, Alicia.",
                "titulo": "Zonificación ecológica económica y ordenamiento territorial en Cajamarca.",
                "referencia": "2017. Grupo Propuesta Ciudadana. 62 pp.",
                "link": "http://propuestaciudadana.org.pe/wp-content/uploads/2017/06/ZEE-y-OT-Cajamarca.pdf",
                "resumen_comentario": "Muestra el proceso de elaboración de este instrumento técnico, producto del consenso entre actores sociales, económicos y políticos, identificando las potencialidades y limitantes que presenta el territorio de la región, y recomienda alternativas para el uso sostenible de los recursos naturales y la ocupación segura del espacio físico.",
                "observaciones": "Caso de Cajamarca."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Readhead, Alexandra; Mulé, Daniel y Op de Beke, Anton.",
                "titulo": "Examinando los crudos detalles: Auditorías gubernamentales de los costos de proyecto del petróleo y gas para maximizar la recaudación fiscal.",
                "referencia": "2018. Oxford: Oxfam International. 13 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Resumen%20ejecutivo-Examinando%20los%20crudos%20detalles.pdf",
                "resumen_comentario": "Analiza las prácticas de auditoría en Ghana, Kenia y Perú, y ofrece recomendaciones por tipo de actor, desde un punto de vista legal, de coordinación, de capacidad, de información, de margen de tiempo y de rendición de cuentas, para garantizar que los gobiernos recauden los impuestos de la explotación de sus recursos petroleros finitos y no renovables.",
                "observaciones": "Resumen ejecutivo."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Readhead, Alexandra; Mulé, Daniel y Op de Beke, Anton.",
                "titulo": "Examinando los crudos detalles: Auditorías gubernamentales de los costos de proyecto del petróleo y gas para maximizar la recaudación fiscal.",
                "referencia": "2018. Oxford: Oxfam International. 19 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Estudio%20de%20caso%20Peru%CC%81-Examinando%20los%20crudos%20detalles.pdf",
                "resumen_comentario": "La experiencia en el ámbito petrolero de la Superintendencia Nacional de Administración Tributaria (SUNAT) es limitada, y la mayoría de instituciones gubernamentales son benevolentes con las empresas, con el propósito de crear un clima demasiado favorable a los negocios. Perú debería aumentar sus esfuerzos por mejorar su administración fiscal, con una mayor frecuencia de las auditorías fiscales, nuevos precios de trasferencia, mejor coordinación entre sus instancias administrativas, y un mayor conocimiento del sector petrolero.",
                "observaciones": "Estudio de caso de Perú."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red Interquorum.",
                "titulo": "Alternativas al extractivismo.",
                "referencia": "2015. Revista Interquorum Nueva Generación Nº 19. Red Peruana por una Globalización con Equidad (RedGE); IPC Participa; Fundación Friedrich Ebert. Lima: Red Interquorum. 40 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/Revista%20IQ%2019%20FINAL%20VB.pdf",
                "resumen_comentario": "La creciente conflictividad socioambiental, asociada a las actividades extractivas, en especial la minería y los hidrocarburos, pone en el debate la viabilidad a largo plazo de un modelo de crecimiento basado en el extractivismo y el progresivo agotamiento de los recursos naturales, frente al que se presenta una estrategia de construir caminos y transición a un modelo alternativo, fundamentado en la defensa de los derechos humanos y la naturaleza.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rodríguez, Adrián G.",
                "titulo": "Bioeconomía en América Latina y el Caribe 2018.",
                "referencia": "2018. Programa de Cooperación Cepal – BMZ / Giz; Oficina Regional para América Latina y el Caribe de la Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 75 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44241/1/S1800922_es.pdf",
                "resumen_comentario": "Busca identificar oportunidades en políticas, regulaciones, investigación e innovación, así como el desarrollo de mercados para la bioeconomía en América Latina y el Caribe. Identifica sectores cuya concurrencia deviene necesaria para la implementación de políticas y estrategias en el sector público y las entidades generadoras de conocimiento; y la valorización económica y los mercados para la bioeconomía en el sector privado.",
                "observaciones": "Memoria del seminario regional del mismo nombre. Santiago, enero de 2018."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sandoval Escudero, Carlos.",
                "titulo": "Métodos y aplicaciones de la planificación regional y local en América Latina.",
                "referencia": "2014. Serie Desarrollo Territorial Nº 17. Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 85 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/36967/1/S201436_es.pdf",
                "resumen_comentario": "Presenta una revisión de las escuelas de la planificación del desarrollo, aplicadas a nivel territorial en América Latina y el Caribe, buscando establecer una relación entre el Estado y las corrientes metodológicas presentadas a lo largo del tiempo, entendiéndolas como una respuesta a la creciente complejidad, temática y procedimental, en que el sector público busca impulsar los procesos de desarrollo a nivel subnacional."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schoemaker, Ard.",
                "titulo": "Análisis de estudios de impacto ambiental: ¿Cómo revisar y entender los estudios de impacto ambiental (EIA)?",
                "referencia": "2016. Derechos Humanos sin Fronteras (DHSF); Cedep Ayllu; Broederlijk Delen. Lima: Programa Democracia y Transformación Global (PDTG); Muqui, Red de Propuesta y Acción; Acción Solidaria para el Desarrollo (CooperAcción). 56 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/03/BD-Public_Tomo-06.pdf",
                "resumen_comentario": "El Estudio de Impacto Ambiental (EIA) es un procedimiento que sirve para tomar en cuenta los aspectos ambientales en los proyectos, y para identificar los posibles impactos ambientales de una actividad propuesta y cómo pueden mitigarse. Este manual busca identificar, de forma rápida, las debilidades, carencias, deficiencias, omisiones y temas insuficientemente elaborados en el EIA, y los elementos donde éstos fallan.",
                "observaciones": "Manual. Caja de Herramientas Ambientales Nº 6."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schoemaker, Ard.",
                "titulo": "Glosario ambiental: Conociendo los términos ambientales usados en zonas mineras.",
                "referencia": "2016. Derechos Humanos sin Fronteras (DHSF); Cedep Ayllu; Broederlijk Delen. Lima: Programa Democracia y Transformación Global (PDTG); Muqui, Red de Propuesta y Acción; Acción Solidaria para el Desarrollo (CooperAcción). 44 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/03/BD_Public_tomo-1.pdf",
                "resumen_comentario": "Ante la necesidad de que la población local de las zonas donde habrá intervenciones externas, conozca más del medio ambiente, cómo se lo defiende y qué impactos podrían haber, se explica los términos ambientales usados en zonas mineras con el fin de incrementar las capacidades de diálogo, negociación y defensa territorial de los pobladores.",
                "observaciones": "Manual. Caja de Herramientas Ambientales Nº 1."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schoemaker, Ard.",
                "titulo": "Impacto minero: ¿Qué impactos ocasiona la gran y mediana minería en los diferentes aspectos de nuestras vidas y en nuestros territorios?",
                "referencia": "2016. Derechos Humanos sin Fronteras (DHSF); Cedep Ayllu; Broederlijk Delen. Lima: Programa Democracia y Transformación Global (PDTG); Muqui, Red de Propuesta y Acción; Acción Solidaria para el Desarrollo (CooperAcción). 32 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/03/BD-Public_tomo2.pdf",
                "resumen_comentario": "Busca dar una imagen amplia de los impactos de la minería, para que las poblaciones locales sepan qué es lo que pueden esperar cuando llega un proyecto minero. La información sobre la actividad minera es útil para que la población decida sobre el uso de sus territorios y recursos, evalúe si es de su conveniencia, y pueda dialogar y exigir a las empresas mineras y políticos que se prevenga y evite impactos mayores; decidiendo así sobre el futuro de sus vidas, sus familias y su comunidad.",
                "observaciones": "Manual. Caja de Herramientas Ambientales Nº 2."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schoemaker, Ard.",
                "titulo": "Línea de base ambiental comunitaria: ¿Qué es lo que las comunidades pueden hacer para generar sus propias líneas de base ambiental?",
                "referencia": "2016. Derechos Humanos sin Fronteras (DHSF); Cedep Ayllu; Broederlijk Delen. Lima: Programa Democracia y Transformación Global (PDTG); Muqui, Red de Propuesta y Acción; Acción Solidaria para el Desarrollo (CooperAcción). 28 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/03/BD-Public_tomo3.pdf",
                "resumen_comentario": "El objetivo de un estudio de línea de base es proporcionar información ambiental y social de inicio, sobre la cual se va monitorear y evaluar el progreso y eficacia de una actividad o proyecto minero en un territorio, para conocer el estado del ambiente, la calidad del agua, aire, suelo, flora y fauna, con el fin de comparar la situación actual con la futura.",
                "observaciones": "Manual. Caja de Herramientas Ambientales Nº 3."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schoemaker, Ard.",
                "titulo": "Monitoreo ambiental interinstitucional: ¿Cómo participar en monitoreos ambientales interinstitucionales estatales? Pautas para mejorar la calidad de los procesos de monitoreo ambiental interinstitucional.",
                "referencia": "2016. Derechos Humanos sin Fronteras (DHSF); Cedep Ayllu; Broederlijk Delen. Lima: Programa Democracia y Transformación Global (PDTG); Muqui, Red de Propuesta y Acción; Acción Solidaria para el Desarrollo (CooperAcción). 44 pp.",
                "link": "https://muqui.org/wp-content/uploads/2020/03/BD-Public_Tomo-05.pdf",
                "resumen_comentario": "Muestra pautas y recomendaciones para participar en monitoreos ambientales interinstitucionales, en los que participan actores de diferentes entidades, como el Estado, la sociedad civil, la empresa privada, las Ong, las universidades, entre otros. Busca que municipalidades locales, Ong y gobiernos regionales sepan cuáles son los puntos de atención, tanto técnica como políticamente, que tienen que tomar en cuenta al participar en un monitoreo ambiental interinstitucional estatal o multiactor.",
                "observaciones": "Manual. Caja de Herramientas Ambientales Nº 5."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schuldt, Jürgen; Acosta, Alberto; Barandiarán, Alberto; Folchi, Mauricio; CEDLA-Bolivia; Bebbington, Anthony; Alayza, Alejandra y Gudynas, Eduardo.",
                "titulo": "Extractivismo, política y sociedad.",
                "referencia": "2009. Fundación Rosa Luxemburgo Stiftung de Alemania. Quito: Centro Andino de Acción Popular (Caap); Centro Latinoamericano de Ecología Social (Claes). 226 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/extractivismo.pdf",
                "resumen_comentario": "Analiza la insustentabilidad, los efectos y los conflictos sociales de los modelos de desarrollo en América Latina, basados casi exclusivamente en el extractivismo de los recursos naturales, renovables o no. Ilustra el papel desempeñado por el Estado y las empresas, el escalamiento de los conflictos sociales alrededor de los sectores extractivos y los mecanismos de consulta con las comunidades locales, así como el neoextractivismo alentado por el progresismo, donde permanecen los impactos sociales y ambientales."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Scurrah, Martín.",
                "titulo": "Propuestas para transitar al postextractivismo a nivel regional.",
                "referencia": "2015. Red Peruana por una Globalización con Equidad (RedGE); Fundación Friedrich Ebert. Lima: CooperAcción. 24 pp.",
                "link": "http://www.redge.org.pe/sites/default/files/Post%20extractivismo-a%20nivel%20regional%20FINAL_0.pdf",
                "resumen_comentario": "Presenta una descripción del extractivismo y sus características en Perú, y de las transiciones desde la perspectiva de las regiones. Asimismo, algunas propuestas para emprender transiciones al post extractivismo a nivel regional y algunas reflexiones sobre las posibilidades y las limitaciones de promover transiciones en contextos nacionales, favorables o no."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Soberanía Alimentaria, Biodiversidad y Culturas.",
                "titulo": "Extractivismo minero y territorio.",
                "referencia": "2015. En: Revista Soberanía Alimentaria, Biodiversidad y Culturas Nº 22. 56 pp.",
                "link": "https://www.soberaniaalimentaria.info/images/descargas/sabc_22.pdf",
                "resumen_comentario": "Acercamiento al boom extractivista desde la perspectiva de género y la soberanía alimentaria. Aborda el impacto hacia el paisaje y medios de vida de los campesinos, para quienes agricultura y ganadería son actividad principal, y la conexión de agricultura intensiva e industria de fertilizantes, demandante de minerales que agota a la propia tierra, así como la manera en que ello afecta a sus relaciones y el vínculo de las mujeres con la tierra.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Soto Baquero, Fernando; Beduschi Filho, Luiz Carlos y Falconi, César. (Editores)",
                "titulo": "Desarrollo territorial rural: Análisis de experiencias en Brasil, Chile y México.",
                "referencia": "2007. Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO); Banco Interamericano de Desarrollo (BID). Santiago de Chile: Oficina Regional de la FAO para América Latina y el Caribe. 290 pp.",
                "link": "http://www.fao.org/3/a-a1253s.pdf",
                "resumen_comentario": "Presenta lecciones prácticas para un abordaje territorial en el diseño de programas públicos, con el fin de sistematizar procesos en que actores con intereses y contextos sociales, históricos y geográficos diferentes, experimentan la cooperación bajo formatos institucionales que consideran la diversificación de la participación social. Considera una visión que va más allá del análisis sobre desarrollo local, prestando especial atención a la dimensión política de los procesos de desarrollo.",
                "observaciones": "Casos en Brasil, Chile y México."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Svampa, Maristella.",
                "titulo": "Las fronteras del neoextractivismo en América Latina: Conflictos socioambientales, giro ecoterritorial y nuevas dependencias.",
                "referencia": "2019. Universidad de Guadalajara; Ministerio Federal de Educación e Investigación en Alemania. Guadalajara: Centro Maria Sibylla Merian de Estudios Latinoamericanos Avanzados en Humanidades y Ciencias Sociales (Calas). 145 pp.",
                "link": "http://calas.lat/sites/default/files/svampa_neoextractivismo.pdf",
                "resumen_comentario": "Sintetiza la expansión del neoextractivismo en Latinoamérica, abordando la ilusión desarrollista, la conflictividad socioambiental, la valoración del territorio, y las complejidades del giro ecoterritorial como tendencia en las luchas socioambientales, el reconocimiento de los derechos indígenas, las nuevas formas de feminismo popular, la nueva dependencia en relación con China, y una reflexión sobre la crisis sistémica, retomando el concepto de antropoceno, que une la crisis socioecológica de alcance planetario con la crítica a los modelos de desarrollo vigentes."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Tempelmann, Mattes; Berrospi, Edwin Alejandro; Jahncke, Javier; Daza, Mar y García, Nury.",
                "titulo": "Metodologías para el fortalecimiento de organizaciones sociales con enfoque de alternativas al desarrollo: Manual dirigido a facilitadoras y facilitadores.",
                "referencia": "2018. Proyecto Amigo; Muqui, Red de Propuesta y Acción; Programa Democracia y Transformación Global (PDTG). 106 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Metodologia-para-el-fortalecimiento-de-Organizaciones-sociales-con-enfoque-de-Alternativas-al-Desarrollo.pdf",
                "resumen_comentario": "Busca acompañar, de manera participativa, los procesos de fortalecimiento organizacional junto con la elaboración de la agenda de cambio social de las organizaciones sociales de base y sus respectivos planes de acción, aportando a su visión colectiva y a los cambios territoriales postextractivistas, así como al diseño y ejecución de políticas públicas legítimas, justas y sostenibles.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Torrens, João.",
                "titulo": "Hacia un desarrollo territorial incluyente: Marco conceptual.",
                "referencia": "s/f. Cuaderno de Trabajo sobre Inclusión Nº 1. Instituto Interamericano de Cooperación para la Agricultura (IICA). 82 pp.",
                "link": "https://repositorio.iica.int/bitstream/handle/11324/2710/BVE17038764e.pdf;jsessionid=FAE40FF6676D79F407DE36F4ABFD568D?sequence=1",
                "resumen_comentario": "Aborda la relación entre ruralidad, territorios rurales y agricultura familiar, enfatizando en los elementos del enfoque territorial y de la gestión social de los territorios rurales. Busca conceptualizar la agricultura familiar, segmento rural en que se encuentran los grupos sociales más excluidos; y analiza las dinámicas de la exclusión en la agricultura y los territorios rurales, destacando la importancia de la asociatividad para los procesos de inclusión económica, social y política."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vargas Koch, Camilo; Bittner, Constantin; Dreier, Vanessa; Fichtl, Moritz; Gottmann, Annika y Thomas, Wiebke.",
                "titulo": "Alternativas de desarrollo en las regiones mineras de Perú: Impactos ambientales de la minería e ingresos alternativos en la agricultura en Junín y Cajamarca.",
                "referencia": "2018. Misereor; Muqui, Red de Propuesta y Acción. Berlín: Humboldt-Universität zu Berlin, Centro de Desarrollo Rural (Seminar für Ländliche Entwicklung, SLE). 248 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Alternativas-de-Desarrollo-en-Las-Regiones-Mineras-de-Peru.pdf",
                "resumen_comentario": "Analiza los problemas de las regiones mineras del Perú y el potencial de la agricultura como estrategia de diversificación. La demanda global y la presión por explotar grandes yacimientos mineros, aumenta el riesgo de destruir zonas de valor ambiental con ecosistemas frágiles y así los medios de subsistencia de la agricultura familiar. Plantea impulsar procesos participativos de ZEE desde los gobiernos regionales y locales, que establezcan las potencialidades para el desarrollo, y contribuir al diálogo político con propuestas para pasar de un modelo extractivista hacia una economía sostenible.",
                "observaciones": "Casos de Junín y Cajamarca."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Velardi, Nicoletta y Zeisser Polatsik, Marco. (Editores)",
                "titulo": "Anales Seminario internacional Desarrollo territorial y extractivismo: Luchas y alternativas en la región andina.",
                "referencia": "2012. Centro de Estudios Regionales Andinos Bartolomé de Las Casas (CBC); Acción Solidaria para el Desarrollo (CooperAcción); Groupe de Recherche et d’Echanges Technologiques (Gret). Cuzco: Centro de Estudios Regionales Andinos Bartolomé de Las Casas (CBC). 268 pp.",
                "link": "http://biblioteca.clacso.edu.ar/Peru/cbc/20170222021706/pdf_1263.pdf",
                "resumen_comentario": "Tiene como objetivo analizar experiencias e iniciativas de gestión de territorios andinos en zonas de actividades extractivas. Se presenta las estrategias indígenas en la Amazonía peruana en el proceso de zonificación ecológica y económica, y la situación de la región surandina afectada por el crecimiento rápido de la minería, así como alternativas al modelo de desarrollo en torno a la noción de Buen Vivir, con énfasis en el rol de los actores, el Estado y las empresas, y concluye con un debate sobre el posextractivismo.",
                "observaciones": "Seminario internacional Desarrollo territorial y extractivismo: Luchas y alternativas en la región andina, Bolivia, Ecuador y Perú. Cuzco, 7 y 8 de noviembre de 2011."
            },
            {
                "eje_estrategico": "Cuarto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Villanueva Carrión, Milagros J.",
                "titulo": "Evaluación, análisis y sustento a la información complementaria del Informe de Subsanación de Observaciones del EIA Modificado al 2014, realizado por la empresa minera Yanacocha.",
                "referencia": "2016. Gobierno Regional de Cajamarca, Gerencia Regional de Recursos Naturales. 47 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/INFORME%20N%C2%BA%2003-2016-GR.CAJRENAMASG.GMAMVC.pdf",
                "resumen_comentario": "Concluye que la zona en la que se pretende instalar las operaciones de extracción de cobre y oro a tajo abierto por el proyecto minero Conga de la mina Yanacocha. es el ecosistema jalca (páramo), del que nacen cinco subcuencas, poniendo en riesgo a la actividad agropecuaria de cuatro distritos, con unas 21 mil unidades agropecuarias y 48 mil ha que producen unos treinta cultivos alimenticios y 60 mil Tn de leche fresca anual, entre otras actividades económicas.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Acción por la Biodiversidad.",
                "titulo": "Agroecología para la soberanía alimentaria: Tierra, semillas y territorios libres de violencias.",
                "referencia": "2020. Fundación Rosa Luxemburgo; Ministerio Federal de la Cooperación Económica y Desarrollo de Alemania (BMZ). Buenos Aires: Biodiversidad en América Latina y el Caribe. 20 pp.",
                "link": "http://www.biodiversidadla.org/Agencia-de-Noticias-Biodiversidadla/Agroecologia-para-la-Soberania-Alimentaria",
                "resumen_comentario": "Propone una agroecología de base campesina enfocada en un feminismo campesino acorde a las necesidades de los territorios y sus habitantes; el rescate y difusión del conocimiento ancestral que permitió preservar y reproducir las semillas nativas y criollas durante generaciones; y el acceso a la tierra por parte de los campesinos que la trabajan.",
                "observaciones": "Cuadernillo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "ActionAid USA.",
                "titulo": "Agrocombustibles: Fogoneros del hambre. Cómo las políticas de Estados Unidos para el etanol de maíz aumentan el precio de los alimentos en México.",
                "referencia": "2012. Washington: ActionAid USA. 20 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/agrocombustibles-fogoneros-del-hambre.pdf",
                "resumen_comentario": "El incremento de la producción de agrocombustibles ha contribuido de manera importante al aumento de precios de los alimentos a nivel mundial, un golpe duro para los países en desarrollo que son importadores de alimentos. Este informe examina lo que ocurrió con el maíz en México, país que depende de la importación de alimentos.",
                "observaciones": "Informe basado en “The Cost to Mexico of US Corn Ethanol Expansion”, de Timothy A. Wise. Universidad de Tufts."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alvarado, Fernando; Siura, Saray y Manrique, Antonieta.",
                "titulo": "Perú: Historia del movimiento agroecológico 1980-2015.",
                "referencia": "2015. Universidad Nacional Agraria La Molina (UNALM). En: Agroecología Nº 10. Red de Agricultura Ecológica. 8 pp.",
                "link": "http://raeperu.org/documentos",
                "resumen_comentario": "El movimiento agroecológico peruano fue influenciado por organizaciones de la sociedad civil, productores ecológicos organizados, la academia, oportunidades de mercado y acciones de incidencia política, que han impulsado un marco normativo favorable hacia la agricultura ecológica y el reconocimiento de los pequeños productores como base de la alimentación local.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Armesto, M. S. y Hernández, A. J.",
                "titulo": "La agricultura ecológica en Perú: Historia, actores involucrados y análisis de proyectos.",
                "referencia": "2006. Red de Acción al Uso de Alternativas de Agroquímicos (Raaa) Madrid: Departamento de Ecología, Universidad de Alcalá. 10 pp.",
                "link": "https://www.agroecologia.net/recursos/publicaciones/publicaciones-online/2006/CD%20Congreso%20Zaragoza/Ponencias/29%20Armesto%20Com-%20La%20agricultura.pdf",
                "resumen_comentario": "Revisión de la agricultura ecológica y orgánica en Perú, mostrando las actividades, los principales actores involucrados en proyectos con práctica agroecológica, incluyendo empresas que gozan de certificados que garantizan “producto ecológico”, así como los principales productos con esta garantía, y se expone proyectos desde los ejes legislativo-normativo, económico y social.",
                "observaciones": "Ponencia en VII Congreso SEAE Zaragoza, 2006."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Asociación Ecología, Tecnología y Cultura en los Andes (ETC Andes).",
                "titulo": "Leisa: Revista de agroecología.",
                "referencia": "2020. Leisa, edición latinoamericana, vol. 36 Nº 2: Cambio climático y coyuntura 2020, reflexiones y respuestas. Lima: Asociación ETC Andes. 32 pp.",
                "link": "http://www.leisa-al.org/web/images/stories/revistapdf/vol36n2.pdf",
                "resumen_comentario": "Publicación periódica que refleja el importante aporte de la agricultura familiar campesina a la alimentación de la población, más aún en el contexto de la pandemia, en que los agricultores han seguido produciendo, cosechando y abasteciendo de alimentos a los mercados locales y urbanos, superando condiciones de inequidad, como la carencia de facilidades para llegar a los mercados.",
                "observaciones": "Revista virtual."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Autre Terre.",
                "titulo": "Reconectar el campo con las ciudades intermedias.",
                "referencia": "2019. El barómetro de la agricultura familiar de 2019. Autre Terre, Iles de Paix y SOS Faim. 5 pp.",
                "link": "https://barometre-agricultures-familiales.org/reconnecter-les-campagnes-aux-villes-intermediaires",
                "resumen_comentario": "Las ciudades intermedias ofrecen oportunidades para compensar la presión demográfica y aumentar las posibilidades de las zonas rurales, mediante sistemas alimentarios territorializados, con iniciativas locales innovadoras en términos de gobernanza y gestión colectiva de los recursos, privilegiando la agricultura familiar y las redes de pequeñas empresas agroalimentarias.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ayuda en Acción; Cáritas Española; Ingeniería Sin Fronteras ApD.",
                "titulo": "Hacia una nueva gobernanza de la seguridad alimentaria.",
                "referencia": "2010. Agencia Española de Cooperación Internacional para el Desarrollo (AECID). Madrid: Prosalus, Salud y Desarrollo. 103 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Hacia_una_nueva_gobernanza_de_la_seguridad_alimentaria.pdf",
                "resumen_comentario": "Ofrece una síntesis ordenada y crítica sobre la crisis alimentaria, una reconstrucción del proceso de reforma de la gobernanza de la seguridad alimentaria mundial, un análisis de la gobernanza global, y opiniones de personas destacadas, representantes de organismos internacionales y de los ámbitos de derechos humanos, redes de sociedad civil y centros de estudio."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Barrionuevo, Ney; Albacete, Miguel; García, Daniela; Lindemann, Rafael y Quingaísa, Eugenia.",
                "titulo": "Circuitos alternativos de comercialización en el marco de la crisis del Covid-19.",
                "referencia": "2020. En: Análisis N° 6. Santiago: Rimisp, Centro Latinoamericano para el Desarrollo Rural. 12 pp.",
                "link": "https://webnueva.rimisp.org/wp-content/uploads/2020/06/06-Covid-19-Circuitos-cortos.pdf",
                "resumen_comentario": "En medio de la pandemia, los sistemas agroalimentarios han garantizado la disponibilidad de alimentos, provenientes de pequeños agricultores, en su mayoría de agricultura familiar, a través de circuitos alternativos de comercialización.",
                "observaciones": "Casos en Ecuador, Bolivia y Chile."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Beduschi, Luiz Carlos. (Coordinador)",
                "titulo": "Panorama de la pobreza rural en América Latina y el Caribe 2018: Soluciones del siglo XXI para acabar con la pobreza en el campo.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Santiago: Oficina Regional de la FAO para América Latina y el Caribe. 116 pp.",
                "link": "http://www.fao.org/3/CA2275ES/ca2275es.pdf",
                "resumen_comentario": "Constata la pobreza y la pobreza extrema rural en la región, y la persistencia de brechas entre los territorios rurales y urbanos, lo que es incompatible con el desarrollo sostenible y equitativo. Propone un conjunto de políticas públicas para reducir la pobreza a través de cinco ejes prioritarios de acción: sectores agrícolas eficientes, sostenibles e incluyentes; políticas de protección social ampliada; recursos naturales y ambiente, empleo rural no agrícola y paquetes de infraestructura."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Berrospi, Juan Edwin Alejandro.",
                "titulo": "Agricultura familiar y minería en el Perú.",
                "referencia": "2019. Muqui, Red de Propuesta y Acción. 98 pp.",
                "link": "https://muqui.org/wp-content/uploads/2019/11/Agricultura-Familiar-y-Minera-en-el-Per_.pdf",
                "resumen_comentario": "Se aborda propuestas de agricultura familiar en Cajamarca, Apurímac, Ayacucho, Junín y Pasco, donde se realizan actividades mineras, para conocer cómo se han desarrollado sin mayor apoyo del Estado y los riesgos que las pueden afectar."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Boix, Vicent.",
                "titulo": "La FAO y el acaparamiento de tierras.",
                "referencia": "s/f. En: Crisis alimentaria. 3 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/FAO_y_acaparamiento.pdf",
                "resumen_comentario": "Visión crítica de los enfoques oficiales del comercio de alimentos, los mercados agrícolas y la especulación de tierras, que afectan a las comunidades locales y a los pequeños agricultores, así como a la seguridad alimentaria. Propone salvaguardar el acceso a la tierra y a otros recursos naturales para los sectores más vulnerables, y ayudar a los Estados afectados por el acaparamiento de tierras a legislar para garantizar estos derechos.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Carrión, Diego y Herrera, Stalin.",
                "titulo": "Ecuador rural del siglo XXI: Soberanía alimentaria, inversión pública y política agraria.",
                "referencia": "2012. Instituto de Estudios Ecuatorianos. Fundación Rosa Luxemburg, Oxfam-Crece, CDES, FIAN Ecuador. Quito: Instituto de Estudios Ecuatorianos. 182 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/EcuadorRural.pdf",
                "resumen_comentario": "Evalúa los efectos de la política e inversión pública, analizando los indicadores económicos del modelo de agricultura: la orientación de la inversión en el agro, la situación de la población rural, y un diálogo retrospectivo con los modelos de desarrollo en Ecuador. En el contexto latinoamericano, el documento muestra los límites y desafíos para el desarrollo de un modelo de agricultura en el marco de la soberanía alimentaria.",
                "observaciones": "Analiza los años 2007-2010 del gobierno de Rafael Correa, Ecuador."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cavassa, Augusto y Vázquez-Caisedo, Gloria.",
                "titulo": "Informe sobre los progresos y desafíos en la implementación del derecho a la alimentación en Perú.",
                "referencia": "2010. Prosalus; Asociación Arariwa. 76 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/PERU%20Informe%20final%20derecho%20a%20la%20alimentaci%C3%B3n.pdf",
                "resumen_comentario": "Además de dar información general sobre la situación de hambre y pobreza y el marco legal sobre el derecho a la alimentación en el Perú, examina la institucionalidad y el progreso de los derechos sociales, económicos y culturales en el país, y propone acciones regionales y locales sobre seguridad alimentaria desde la sociedad civil y el gobierno central.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal) y Organización de la Naciones Unidas para la Alimentación y la Agricultura (Fao).",
                "titulo": "Cómo evitar que la crisis del Covid-19 se transforme en una crisis alimentaria: Acciones urgentes contra el hambre en América Latina y el Caribe.",
                "referencia": "2020. Comisión Económica para América Latina y el Caribe (Cepal) y Organización de la Naciones Unidas para la Alimentación y la Agricultura (Fao). 33 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45702/4/S2000393_es.pdf",
                "resumen_comentario": "La pandemia afecta las actividades del sistema alimentario (producción, transformación, distribución, comercio y consumo de alimentos), el bienestar social y la seguridad alimentaria. Se hacen recomendaciones de política para sostener la demanda y gestionar el comercio de alimentos durante la emergencia, y para evitar que su prolongación conduzca a una crisis alimentaria regional.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cidse: Juntos en pro de la justicia global.",
                "titulo": "Los principios de la agroecología: Hacia sistemas alimentarios justos, resilientes y sostenibles.",
                "referencia": "2018. Broederlijk Delen (Bélgica), Cafod (Inglaterra y Gales), CCFD-Terre Solidaire (Francia), Entraide et Fraternité (Bélgica), Focsiv (Italia), KOO/DKA (Austria), Misereor (Alemania), SCIAF (Escocia) y Trócaire (Irlanda). Bruselas: Cidse: Juntos en pro de la justicia global. 12 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Los_Principios_de_la_Agroecologia_CIDSE_2018.pdf",
                "resumen_comentario": "Explora el concepto de agroecología, cómo se ve, y muestra que cuando se toma como un todo, puede llevar a efectos muy positivos en términos de derechos humanos y derecho a la alimentación. Asimismo, contribuye a abordar las causas de los problemas a los que nuestras sociedades se enfrentan actualmente, desafiando las estructuras de poder existentes."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Congreso de la República.",
                "titulo": "Ley de Promoción de la Producción Orgánica o Ecológica, Ley Nº 29196.",
                "referencia": "2008. Congreso de la República. En: Diario oficial El Peruano, 29 de enero de 2008. 3 pp.",
                "link": "http://www.leyes.congreso.gob.pe/Documentos//2006_2011/ADLP/Normas_Legales/29196-LEY.pdf",
                "resumen_comentario": "Tiene como objetivo fomentar la producción orgánica del sistema agrícola, manteniendo la fertilidad de los suelos y un manejo adecuado del agua, para contribuir a la seguridad alimentaria y a la conservación de los ecosistemas y de la diversidad biológica, como una alternativa de desarrollo económico y social.",
                "observaciones": "Ley."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Consejo de Derechos Humanos de la Asamblea General de las Naciones Unidas.",
                "titulo": "Los desastres naturales y el derecho a la alimentación.",
                "referencia": "2018. Asamblea General de las Naciones Unidas. Informe presentado al Consejo de Derechos Humanos. 24 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Efecto%20de%20los%20desastres%20naturales%20sobre%20el%20derecho%20a%20la%20alimentaci%C3%B3n.pdf",
                "resumen_comentario": "Examina los efectos de los desastres naturales en el derecho a la alimentación y los medios de subsistencia de las personas, el modo en que los desastres contribuyen al hambre, y las medidas para reducir las violaciones de los derechos humanos y los daños al ambiente. Destaca la importancia de lograr una convergencia entre la ayuda alimentaria de urgencia, la asistencia alimentaria y la cooperación al desarrollo, a fin de asegurar el derecho a la alimentación."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Convención Nacional del Agro Peruano (Conveagro).",
                "titulo": "Boletín informativo: Ley de Promoción y Desarrollo de la Agricultura Familiar, Ley Nº 30355, y su Reglamento.",
                "referencia": "2018. Boletín Nº 1. Convención Nacional del Agro Peruano (Conveagro). 12 pp.",
                "link": "http://conveagro.org.pe/wp-content/uploads/2019/01/BOLETIN-OFICIAL-0118.pdf",
                "resumen_comentario": "Normas que organizan la intervención del Estado a favor de los agricultores familiares, sobre la base del uso sostenible de los recursos naturales, con el fin de promover su acceso a la producción, servicios y bienes públicos. Se complementan con la Estrategia Nacional de la Agricultura Familiar 2015 -2021 y el Plan Nacional de Promoción y Desarrollo de la Agricultura Familiar 2015 – 2021.",
                "observaciones": "Boletín."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Coopman, Pierre y Grenade, François.",
                "titulo": "El barómetro de la agricultura familiar 2018.",
                "referencia": "2019. SOS Faim; Îles de Paix; Autre Terre. 24 pp.",
                "link": "http://www.coeeci.org.pe/wp-content/uploads/2019/02/barometro-agricultura-familiar-.pdf",
                "resumen_comentario": "La agricultura familiar es la forma de agricultura más extendida en el mundo; lejos de estar anticuada, se adapta y responde a los cambios del entorno. El Barómetro analiza los problemas actuales que la configuran y transforman, y evalúa cómo las tendencias globales benefician o perjudican a la agricultura familiar.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Correa Da Silva, Víctor Eladio; Del Castillo Torres, Dennis; Inga Sánchez, Herminio; Paredes Dávila, Elvis Javier; Pinedo Panduro, Mario Herman y Freitas Alvarado, Luis.",
                "titulo": "Agroforestería familiar inundable y procesos de adaptación al medio ambiente en Loreto.",
                "referencia": "2019. Ministerio del Ambiente. Lima: Instituto de Investigaciones de la Amazonía Peruana (IIAP). 168 pp.",
                "link": "http://repositorio.iiap.gob.pe/handle/IIAP/392",
                "resumen_comentario": "Se presentan sistemas productivos ubicados en suelos de áreas inundables, donde habita la mayor parte de la población rural. Se caracterizan sistemas de producción de predios familiares identificados por su buen manejo de los recursos naturales y la biodiversidad, y la aplicación de tecnologías con escasos insumos químicos, amigables con el medio ambiente.",
                "observaciones": "Estudio de ocho predios situados en las cuencas de los ríos Ucayali y Amazonas."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cruz, Luisa.",
                "titulo": "Una gobernanza responsable en la tenencia de la tierra: Factor esencial para la realización del derecho a la alimentación.",
                "referencia": "2010. Dirección de Economía del Desarrollo Agrícola (ESA), Departamento de Desarrollo Económico y Social de la FAO; División de Medio Ambiente, Cambio Climático y Bioenergía (NRC), Departamento de Gestión de Recursos Naturales y Medio Ambiente de la FAO. 45 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Gobernanza_responsable_en_la_tenencia_de_la_tierra.pdf",
                "resumen_comentario": "Muestra el derecho a la alimentación como un objetivo primordial del conjunto de políticas públicas sobre desarrollo económico y social, y la relevancia de una gobernanza responsable de la tierra y demás recursos naturales. Además, presenta experiencias en distintos países y las oportunidades que se presentan al implementar una política de tenencia de tierras basada en un enfoque de derechos humanos cuyo objetivo sea hacer efectivo el derecho a la alimentación.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cumbre Mundial sobre la Alimentación.",
                "titulo": "Declaración de Roma sobre la seguridad alimentaria mundial.",
                "referencia": "1996. Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). 3 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Declaraci%C3%B3n%20de%20Roma%20sobre%20la%20Seguridad%20Alimentaria%20Mundial%E2%80%A6.pdf",
                "resumen_comentario": "Reconoce el derecho de toda persona al acceso a alimentos sanos y nutritivos, en consonancia con una alimentación apropiada y con el derecho fundamental de toda persona a no padecer hambre, asumiendo el compromiso de una voluntad política y dedicación a conseguir la seguridad alimentaria para todos y a realizar un esfuerzo para erradicar el hambre de todos los países, con el objetivo inmediato de reducir el número de personas desnutridas.",
                "observaciones": "Declaración de jefes de Estado y de gobierno."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "De la O Campos, Ana Paula; Davis, Benjamin; Villani, Chiara y Takagi, Maya.",
                "titulo": "Marco de la FAO sobre pobreza extrema rural: Hacia el logro de la meta 1.1 de los Objetivos de Desarrollo Sostenible.",
                "referencia": "2019. Programa estratégico para reducir la pobreza rural (PE 3) de la FAO. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 68 pp.",
                "link": "http://www.fao.org/3/ca4811es/CA4811ES.pdf",
                "resumen_comentario": "La mayor parte de la población mundial en extrema pobreza vive en zonas rurales; es la más vulnerable a la volatilidad de los precios de los alimentos, y la que más depende de la actividad agrícola y del acceso a los recursos naturales para su seguridad alimentaria. Esta población posee una capacidad productiva que es necesario apoyar, para erradicar el hambre, la inseguridad alimentaria y la malnutrición."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Domenech Rojo, Miguel Angel; Castellvi, Xavier; Villanueva, Arancha; Gonzalo Arroyo, Vanessa; del Agua, Elisa y Guijarro Lomeña, Alberto. (Coordinadores)",
                "titulo": "La incidencia de los biocombustibles en los países del Sur.",
                "referencia": "2011. Ingeniería Sin Fronteras, Asociación para el Desarrollo; Universidad Nacional Autónoma de Nicaragua; Soluciones Prácticas (antes ITDG). Madrid: Fundación Biodiversidad. 78 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Incidencia%20de%20los%20biocombustibles%20en%20los%20pa%C3%ADses%20del%20Sur.pdf",
                "resumen_comentario": "Analiza la incidencia de los biocombustibles en el desarrollo humano a partir de tres estudios de caso, con el propósito de identificar el impacto socioeconómico y ambiental sobre la biodiversidad, la seguridad alimentaria, la propiedad de la tierra, la disponibilidad de recursos hídricos y los precios de los combustibles. Asimismo, aporta información útil para la definición de criterios de sostenibilidad de los biocombustibles, y promueve la implantación de normas y sistemas de evaluación y certificación que garanticen que la producción de biocombustibles tenga efectos positivos y sostenibles en la población vulnerable de los países en desarrollo.",
                "observaciones": "Estudios de caso en Perú, Tanzania y Nicaragua."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren, Fernando; Baumeister, Eduardo y Merlet, Michel.",
                "titulo": "Informe continental: El acceso a la tierra en América Latina.",
                "referencia": "2018. Valencia: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y la Asociación para contribuir a mejorar la Gobernanza de la Tierra, del Agua y de los Recursos naturales (Agter). 50 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/informe-continental.pdf",
                "resumen_comentario": "Ofrece una visión sintética de la evolución del acceso a la tierra y a los recursos naturales en América Latina en las últimas décadas, particularmente respecto a los pequeños productores, así como de la producción empresarial que utiliza mano de obra asalariada con respecto a la producción campesina y familiar.",
                "observaciones": "Preparado en el marco del Foro Mundial sobre el Acceso a la Tierra (FMAT 2016)."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren, Fernando. (Compilador)",
                "titulo": "Seguridad alimentaria en el Perú.",
                "referencia": "2016. Lima: Centro Peruano de Estudios Sociales (Cepes). 212 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/seguridad-alimentaria-en-el-per%C3%BA.pdf",
                "resumen_comentario": "Conjunto de 66 artículos que tratan, desde diferentes ángulos, la problemática de los alimentos en el Perú y las políticas orientadas a garantizar la seguridad alimentaria, analizando la normativa, los programas de asistencia alimentaria, etc., en un marco de reducción de la desnutrición infantil.",
                "observaciones": "Compendio de artículos publicados en la Revista Agraria 2010-2015."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Eguren, Fernando y Pintado, Miguel.",
                "titulo": "Contribución de la agricultura familiar al sector agropecuario en el Perú.",
                "referencia": "2015. Coordinadora de Entidades Extranjeras de Cooperación Internacional (Coeeci). Lima: Centro Peruano de Estudios Sociales (Cepes). 73 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Constribucion%20a%20la%20agricultura%20familiar.pdf",
                "resumen_comentario": "Muestra la importancia de la agricultura familiar (AF) en cuanto a su contribución a la PEA ocupada del sector agropecuario, su aporte en la conformación del valor de la producción agrícola (VPA) y pecuaria (VPP), y su participación dentro del espacio agropecuario. Asimismo, analiza cómo varían los resultados al incluir las diferencias por género, región natural y departamentos."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Elver, Hilal.",
                "titulo": "El acceso a la justicia y el derecho a la alimentación: El camino a seguir.",
                "referencia": "2015. Asamblea General de las Naciones Unidas. Informe presentado al Consejo de Derechos Humanos. 24 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/info%20relatora%202015.pdf",
                "resumen_comentario": "Examina los obstáculos a los que se enfrentan quienes desean obtener reparaciones por violaciones al derecho a la alimentación, analizando el marco jurídico internacional y presentando ejemplos de buenas prácticas para alentar a los Estados a desarrollar recursos judiciales de conformidad con el Protocolo Facultativo del Pacto Internacional de Derechos Económicos, Sociales y Culturales. También se tratan algunas cuestiones relacionadas con las obligaciones extraterritoriales de los Estados en relación con el derecho a la alimentación.",
                "observaciones": "Informe de la Relatora Especial sobre el derecho a la alimentación, Hilal Elver."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Elver, Hilal.",
                "titulo": "El derecho a la alimentación en situaciones de conflicto.",
                "referencia": "2017. Asamblea General de las Naciones Unidas. Informe presentado al Consejo de Derechos Humanos. 26 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/El%20derecho%20a%20la%20alimentaci%C3%B3n%20en%20situaciones%20de%20conflicto_0.pdf",
                "resumen_comentario": "Contextualiza la difícil situación de inseguridad alimentaria grave en los países afectados por conflictos internos e internacionales, y examina la normativa en materia de derechos humanos y derecho internacional humanitario, pues el hambre, en entornos de combate, provoca bajas entre la población civil. Busca concienciar sobre la falta de aplicación de las normas y directrices existentes y el incumplimiento de los Estados y otros agentes políticos, frente a comportamientos delictivos que tienen un efecto directo en el derecho a la alimentación.",
                "observaciones": "Informe de la Relatora Especial sobre el derecho a la alimentación, Hilal Elver."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Elver, Hilal.",
                "titulo": "Malnutrición y derecho a la alimentación.",
                "referencia": "2016. Asamblea General de las Naciones Unidas. Informe presentado al Consejo de Derechos Humanos. 30 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Malnutrici%C3%B3n%20y%20derecho%20a%20la%20alimentaci%C3%B3n.pdf",
                "resumen_comentario": "Reitera la importancia del enfoque basado en derechos para lograr una alimentación adecuada, analizando los factores subyacentes que influyen en la nutrición, como los sistemas alimentarios industriales, los entornos insalubres y la creciente amenaza de las enfermedades no transmisibles, así como los efectos nocivos de la liberalización, la falta de regulación del comercio de alimentos y la gobernanza mundial de la nutrición.",
                "observaciones": "Informe provisional de la Relatora Especial sobre el derecho a la alimentación, Hilal Elver."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Esperante, Nicolás; Tangona, Natalia y Cuesta, Facundo.",
                "titulo": "Construyendo una agroecología para alimentar a los pueblos: Voces de producción, formación y comunicación en torno a la agroecología.",
                "referencia": "2020. Acción por la Biodiversidad. Fundación Rosa Luxemburgo; Ministerio Federal de la Cooperación Económica y Desarrollo de Alemania (BMZ). Buenos Aires: Biodiversidad en América Latina y el Caribe. 80 pp.",
                "link": "http://www.biodiversidadla.org/Agencia-de-Noticias-Biodiversidadla/Construyendo-una-agroecologia-para-alimentar-a-los-pueblos",
                "resumen_comentario": "La pandemia hace reflexionar sobre el sistema agroalimentario industrial que conlleva destrucción de la biodiversidad, la crisis climática, los agrotóxicos y la cría industrial de animales, que fue el caldo de cultivo del Covid-19, y fortalece la propuesta de la agroecología, cuestionando la concentración de la tierra, el monocultivo, la privatización de las semillas y las relaciones de poder subyacentes en el actual modelo agrícola."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Foro de la Tierra.",
                "titulo": "Declaración de Antigua. Gobernanza territorial inclusiva y sostenible para la seguridad alimentaria: Compartiendo lecciones de todo el mundo.",
                "referencia": "2013. International Land Coalition (ILC). Antigua: Global Land Forum 2013. 5 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/DeclaracionAntigua_ES.pdf",
                "resumen_comentario": "Asumen los compromisos de apoyar modelos de desarrollo y gestión ambiental basados en la gobernanza territorial y los sistemas locales de gestión alimentaria y de los recursos naturales; promover políticas públicas de inversión agrícola que sean equitativas, sostenibles, y que prioricen a los pequeños productores y la agricultura familiar; fortalecer los derechos de las mujeres y los indígenas a la tierra; y gobernanza de la tierra centrada en las personas.",
                "observaciones": "Asamblea de miembros de ILC. Antigua: 25 de abril de 2013."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Foro Mundial sobre Soberanía Alimentaria Nyéléni 2007.",
                "titulo": "Declaración de Nyéléni.",
                "referencia": "2007. Mali: Foro Mundial sobre Soberanía Alimentaria. 3 pp.",
                "link": "https://nyeleni.org/IMG/pdf/DeclNyeleni-es.pdf",
                "resumen_comentario": "El concepto de seguridad alimentaria se limitaba a promover alimentación suficiente a través del comercio, nacional e internacional. El principio de soberanía alimentaria apoya el derecho de los productores agrícolas a producir sus propios alimentos con independencia de las condiciones del mercado, como propugna el neoliberalismo, estimulando el desarrollo de modelos alternativos de producción, distribución y consumo.",
                "observaciones": "Declaración."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Foro Rural Mundial.",
                "titulo": "Manifiesto de Brasilia: Año internacional de la agricultura familiar.",
                "referencia": "2014. MDA, Contag, FAO, Oxfam y Action Aid. 10 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Manifiesto_de_Brasilia-2014.pdf",
                "resumen_comentario": "Plantea el derecho que toda nación tiene a desarrollar su propia producción local de alimentos a cargo de las mujeres y hombres de la agricultura familiar, hacia la seguridad y soberanía alimentarias, basado en la implementación de modelos agrícolas sostenibles y resilientes al cambio climático, como el modelo agroecológico, en la perspectiva de una economía solidaria.",
                "observaciones": "Encuentro “Alimentar al mundo, cuidar al planeta”. Brasilia, 14 y 15 de noviembre de 2014."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gennari, Pietro. (Coordinador)",
                "titulo": "El estado de la inseguridad alimentaria en el mundo. Cumplimiento de los objetivos internacionales para 2015 en relación con el hambre: Balance de los desiguales progresos.",
                "referencia": "2015. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO); Programa Mundial de Alimentos (PMA); Fondo Internacional de Desarrollo Agrícola (FIDA). Roma: FAO. 66 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/SOFI%202015.pdf",
                "resumen_comentario": "Se hace un balance de los progresos realizados hacia la consecución de los objetivos establecidos por la comunidad internacional en relación con el hambre, mostrando marcadas diferencias en los progresos entre los distintos países, y también entre las regiones y subregiones. Uno de los instrumentos más eficaces para luchar contra el hambre y la inseguridad alimentaria, y lograr el progreso sostenible y un crecimiento inclusivo, es la mejora de la productividad de los pequeños agricultores familiares, los pescadores y las comunidades forestales, así como su integración en el mercado y la economía rural, compromiso fundamental de quienes toman decisiones en todo nivel.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gitz, Vincent. (Coordinador)",
                "titulo": "Contribución del agua a la seguridad alimentaria y la nutrición.",
                "referencia": "2015. Grupo de alto nivel de expertos en seguridad alimentaria y nutrición (HLPE), Comité de Seguridad Alimentaria Mundial. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 155 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/HLPE-Report-9_Agua%20y%20SAN.pdf",
                "resumen_comentario": "Ofrece un resumen de los datos disponibles sobre las múltiples relaciones del agua con la seguridad alimentaria y la nutrición, desde el plano mundial hasta los hogares. Busca ayudar a los actores a mejorar la gestión del agua, la ordenación de los sistemas agrícolas y alimentarios en función del agua y la gobernanza de los recursos hídricos, asegurando el abastecimiento hídrico, el acceso a agua potable, y el saneamiento, potenciando la contribución del agua a la seguridad alimentaria y la nutrición, ahora y en el futuro.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gitz, Vincent. (Coordinador)",
                "titulo": "Las pérdidas y el desperdicio de alimentos en el contexto de sistemas alimentarios sostenibles.",
                "referencia": "2015. Grupo de alto nivel de expertos en seguridad alimentaria y nutrición (HLPE), Comité de Seguridad Alimentaria Mundial. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 133 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/HLPE-Report-8_Web_0.pdf",
                "resumen_comentario": "Analiza las pérdidas y el desperdicio de alimentos desde las perspectivas sistémica, de sostenibilidad —sus dimensiones ambiental, social y económica— y de la seguridad alimentaria y nutrición. Teniendo en cuenta que casi una tercera parte de los alimentos para consumo humano se pierden o desperdician a escala mundial, examina su relación con las diversas dimensiones de la seguridad alimentaria y la nutrición, pues la reducción de este fenómeno deviene en fundamental para mejorar la seguridad alimentaria y reducir la huella ambiental de los sistemas alimentarios.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Goicochea Medina, Jasmín.",
                "titulo": "Una mirada a la pequeña producción agrícola del Perú en tiempos de cuarentena.",
                "referencia": "2020. En: Pensar la pandemia. Observatorio Social del Coronavirus. Lima: Clacso.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/se/20200512071559/5-Jazmin-Goicochea-Medina.pdf",
                "resumen_comentario": "A pesar de su precariedad, la pequeña producción agrícola sigue proveyendo a los mercados durante la cuarentena, dando trabajo a más de dos millones en Perú, y mostrando su importancia para la soberanía alimentaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gonzálvez, Victor; Cifre, Helena; Raigón, María Dolores y Gómez, María José.",
                "titulo": "Prácticas agroecológicas de adaptación al cambio climático: Estudio diagnóstico.",
                "referencia": "2018. Proyecto Adapta Agroecología. Valencia: Sociedad Española de Agricultura Ecológica (Seae). 92 pp.",
                "link": "https://www.adaptecca.es/sites/default/files/documentos/2018-seae_estudio-adapta-agroecologia.pdf",
                "resumen_comentario": "Estudio participativo que recopila los resultados de experiencias e impulsa procesos y estrategias de cogeneración de tecnologías agroecológicas necesarias entre investigadores, asesores y productores, para reforzar su capacidad a la hora de afrontar las consecuencias del cambio climático y mejorar la adaptación."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Herrera, Stalin.",
                "titulo": "Frente a la crisis: ¡Agricultura familiar indígena campesina!",
                "referencia": "2020. En: Pensar la pandemia. Observatorio Social del Coronavirus. Quito: Clacso.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/se/20200518075718/38-Stalin-Herrera.pdf",
                "resumen_comentario": "Frente a la crisis sanitaria global, es necesario cambiar la mirada y un pacto social por el campo sobre la base de la producción de alimentos por pequeños productores campesinos, sus familias y comunidades indígenas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hidalgo, Francisco; Lizárraga, Pilar y Houtart, Francois. (Editores)",
                "titulo": "Agriculturas campesinas en Latinoamérica: Propuestas y desafíos.",
                "referencia": "2014. Clacso, Foro Mundial de Alternativas, Fundación Rosa Luxemburg, Sipae y Vicepresidencia de Bolivia. Quito: Instituto de Altos Estudios Nacionales (IAEN). 312 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/Agriculturacampesina.pdf",
                "resumen_comentario": "América Latina y el Caribe enfrentan una crisis que incluye el deterioro ambiental y la debacle alimentaria, caracterizada por el acaparamiento, concentración y extranjerización de las tierras de los campesinos e indígenas originarios, proceso operado desde nuevos latifundios, minería tóxica con tajos a cielo abierto, grandes presas que destruyen cuencas y un agronegocio extractivista, rentista y especulativo. Este panorama requiere fortalecer la agricultura campesina e indígena, como la familiar y la cooperativa, a través de un aprovechamiento sostenible, diversificado y respetuoso de la naturaleza."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hidalgo García, Inmaculada; Aquije Hernández, Elvira y Guijarro Lomeña, Alberto.",
                "titulo": "Articulación y acceso al mercado de productores ecológicos a través de las tecnologías de la información y la comunicación.",
                "referencia": "2015. Red de Agricultura Ecológica (Rae Perú); Agencia Española de Cooperación para el Desarrollo (Aecid). Madrid: Ongawa, Ingeniería para el Desarrollo Humano. 22 pp.",
                "link": "http://raeperu.org/documentos",
                "resumen_comentario": "Analiza el impacto de proyectos de tecnologías de la información y la comunicación (TIC) para el desarrollo denominado huella social, entendida como el “conjunto de efectos que se genera sobre la comunidad en la que una organización está presente”. Se aplica a una experiencia con las TIC en zonas rurales de Perú, con el fin de identificar aprendizajes que sirvan para mejorar las estrategias de otros proyectos con componente TIC en los que participe el sector empresarial.",
                "observaciones": "Estudio de caso de huella social TIC en Perú."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Higuchi, Angie.",
                "titulo": "Características de los consumidores de productos orgánicos y expansión de su oferta en Lima.",
                "referencia": "2015. Centro de Investigación de la Universidad del Pacífico (Ciup). Lima: Red de Agricultura Ecológica (Rae Perú). 33 pp.",
                "link": "http://raeperu.org/docs/Angie%20Higuchi%20-%20Consumidores%20-%20a02v42n77.pdf",
                "resumen_comentario": "La tendencia saludable ha contribuido al incremento de tiendas de alimentos orgánicos y naturales en zonas de ingresos medios y altos de Lima. Se destaca las características socioeconómicas de los consumidores de productos orgánicos y naturales, y grafica el aumento de tiendas en zonas con mayor poder adquisitivo, como resultado de la expansión y crecimiento económico de la capital.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Holt-Giménez, Eric.",
                "titulo": "De la crisis alimentaria a la soberanía alimentaria: El reto para los movimientos sociales.",
                "referencia": "s/f. Food First. 14 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/De%20Crisis%20Alimentaria%20a%20Soberan%C3%ADa%20Alimentaria.pdf",
                "resumen_comentario": "En última instancia, terminar con el hambre en el mundo significa reemplazar el monopolio del complejo agroindustrial con un sistema alimentario agroecológico y redistributivo. En este sentido, la soberanía alimentaria se concreta en iniciativas de pequeños productores para confrontar la crisis alimentaria y del hambre, un quehacer cotidiano que tiene el potencial de unir las extensas redes locales que realizan prácticas agroecológicas con las organizaciones transnacionales de defensa, en un amplio movimiento de base para generar una presión social capaz de inclinar la voluntad política a favor de la soberanía alimentaria."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Iles de Paix.",
                "titulo": "La digitalización de la agricultura, ¿una revolución?",
                "referencia": "2019. El barómetro de la agricultura familiar de 2019. Autre Terre, Iles de Paix y SOS Faim. 7 pp.",
                "link": "https://barometre-agricultures-familiales.org/la-digitalisation-de-l-agriculture",
                "resumen_comentario": "La digitalización de la agricultura ofrece oportunidades interesantes mediante el acceso a la información, al mercado, plataformas de intercambio entre pares, economía colaborativa, etc. Sin embargo, para la agricultura familiar representa un riesgo, pues llega poco a los más débiles, puede generar dependencia tecnológica, las estrategias son diseñadas según los intereses de quienes las desarrollan, y evita una transición agroecológica de los sistemas de producción.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Iles de Paix.",
                "titulo": "Por una alimentación sostenible que apoye a la agricultura familiar.",
                "referencia": "2019. El barómetro de la agricultura familiar de 2019. Autre Terre, Iles de Paix y SOS Faim. 7 pp.",
                "link": "https://barometre-agricultures-familiales.org/pour-une-assiette-durable-qui-soutienne-les-agricultures-familiales",
                "resumen_comentario": "La transición alimentaria debería permitir, a través de la modificación de nuestras dietas, la evolución del sistema alimentario hacia un modelo más sostenible, que respete la biodiversidad y los ecosistemas, culturalmente aceptable, económicamente equitativo y accesible, nutricionalmente seguro y sano, y que permita optimizar los recursos naturales y humanos, lo cual se ajusta mejor a la producción de la agricultura familiar.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Estudios del Hambre.",
                "titulo": "Guía de aplicación práctica: Enfoque de derecho a la alimentación en proyectos de cooperación.",
                "referencia": "2012. Prosalus, Salud y Desarrollo; Cáritas Española; Ayuda en Acción; Ongawa; Acción contra el Hambre. 52 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Guia_aplicacion_practica_del_derecho_a_la_alimentacion_en_proyectos.pdf",
                "resumen_comentario": "Da a conocer de manera sencilla en qué consiste un enfoque de derechos en la gestión de proyectos de desarrollo y cuáles son las particularidades de dicho enfoque en las intervenciones relacionadas con la seguridad alimentaria y la nutrición, analizando los tipos de proyectos de derecho a la alimentación y estableciendo pautas para la aplicación de este derecho en cada fase del ciclo de proyecto.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Kogan Valderrama, Andrés.",
                "titulo": "Agroecología frente a las pandemias modernas.",
                "referencia": "2020. Iberoamérica Social. 3 pp.",
                "link": "https://iberoamericasocial.com/agroecologia-frente-a-las-pandemias-modernas/",
                "resumen_comentario": "El modelo agroindustrial genera impactos socioambientales y daños irreparables para la salud de los humanos y no humanos, a través de las pandemias. La agroecología es una alternativa para afrontar la crisis civilizatoria actual, la cual, una vez más, se deja ver con la aparición del coronavirus, de posible origen zoonótico, debido a la destrucción de los hábitat.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Linares Bensimón, Carlos; Arce Rojas, Rodrigo; Pinedo García, Danny; De los Ríos Cáceres, Raúl Mauricio; Silva Sánchez, Max Erich; Ramírez Barbarán, Gustavo y Rojas Panduro, Saúl.",
                "titulo": "La veeduría forestal comunitaria: Una respuesta a los retos del manejo forestal comunitario.",
                "referencia": "2009. Proyecto Bosques Inundables. Pucallpa: Instituto de Investigaciones de la Amazonía Peruana (IIAP). 110 pp.",
                "link": "http://repositorio.iiap.gob.pe/bitstream/IIAP/281/1/Linares_libro_2009.pdf",
                "resumen_comentario": "Se aborda el tema de la destrucción de los bosques amazónicos y la tala ilegal desde la oferta, es decir, desde las propias comunidades indígenas y sus organizaciones, de modo que, ante las debilidades de una acción estatal más efectiva, sean las mismas comunidades las que asuman el rol de velar por sus bosques y ejercer un efectivo gobierno de sus recursos, a través de lo que los autores denominan el principio del “control social”."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Loarte Ruiz, Claudia F.",
                "titulo": "La agroecología como estrategia para tiempos difíciles.",
                "referencia": "2020. En: Pensar la pandemia. Observatorio Social del Coronavirus. Buenos Aires: Clacso.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/se/20200513074755/14-Claudia-F-Loarte-Ruiz.pdf",
                "resumen_comentario": "La fragilidad de los sistemas alimentarios dependientes amenaza la soberanía alimentaria, ante lo que la agroecología se presenta como un sistema capaz de responder de forma sostenible.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lönnqvist, Linda. (Coordinadora)",
                "titulo": "Morral de experiencias para la seguridad y soberanía alimentarias: Aprendizajes de organizaciones civiles en el sureste mexicano.",
                "referencia": "2018. Red de Agroecología Comunitaria (Community Agroecology Network, CAN); Fundación Kellogg. San Cristóbal de las Casas: El Colegio de la Frontera Sur (Ecosur). 216 pp.",
                "link": "http://canunite.org/wp-content/uploads/2018/08/MORRAL-de-experiencias-para-la-Seguridad-y-Soberan%C3%ADa-Alimentaria-CASSA-2018.pdf",
                "resumen_comentario": "Comparte buenas prácticas para la seguridad y soberanía alimentarias, que las organizaciones desarrollan para que su personal emprenda procedimientos participativos e inclusivos de las personas de las comunidades donde trabajan, y que son entendidas como procesos y actividades que devienen en cambios de pensamiento y de comportamiento relacionados con la participación comunitaria, las herramientas de trabajo y el modelo agroecológico.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Maletta, Héctor.",
                "titulo": "La pequeña agricultura familiar en el Perú: Una tipología microrregionalizada.",
                "referencia": "2017. Centro de Investigación de la Universidad del Pacífico (CIUP). En: IV Censo Nacional Agropecuario 2012: Investigaciones para la toma de decisiones en políticas públicas. Libro V. Lima: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 220 pp.",
                "link": "http://www.fao.org/3/a-i6759s.pdf",
                "resumen_comentario": "Construye una tipología detallada de las unidades productivas agropecuarias, focalizada en la agricultura familiar. De este modo, busca proporcionar un mapeo de la actividad agropecuaria nacional, analizar la estructura productiva rural y establecer las bases para crear un sistema de monitoreo sectorial geográficamente desagregado, que permita estudiar el impacto de las políticas públicas en la agricultura familiar."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Medina Rey, José María.",
                "titulo": "Agrocombustibles y seguridad alimentaria.",
                "referencia": "s/f. Instituto Español de Estudios Estratégicos. En: Cuadernos de Estrategia Nº 161, Seguridad alimentaria y seguridad global. 35 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Agrocombustibles_y_seguridad_alimentaria.pdf",
                "resumen_comentario": "El impacto del incremento del precio del petróleo en la subida de precios de los alimentos se debe, entre otros, al auge de los agrocombustibles, cuya producción ha tenido un crecimiento exponencial. Describe los agrocombustibles, los factores que han motivado su auge, en qué medida ofrecen un balance positivo en términos económicos, energéticos y ambientales, y, especialmente, qué impacto tienen sobre la seguridad alimentaria y el papel que han jugado en la crisis alimentaria.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Medina Rey, José María.",
                "titulo": "Cultivando resiliencia frente al cambio climático: Lecciones aprendidas para contribuir a la seguridad alimentaria y al derecho a la alimentación en América Latina y El Caribe.",
                "referencia": "2018. Oficina Regional de la FAO en América Latina; Prosalus, Salud, agua y alimentación. Madrid: Agencia Española de Cooperación Internacional para el Desarrollo (Aecid). 95 pp.",
                "link": "https://www.aecid.es/Centro-Documentacion/Documentos/Publicaciones%20AECID/Guia%20did%C3%A1ctica_rev.pdf",
                "resumen_comentario": "Sistematización de lecciones aprendidas sobre agricultura resiliente al cambio climático para contribuir a la seguridad alimentaria y nutricional y el derecho a la alimentación en América Latina y El Caribe, dado el importante papel económico y social que desempeña la agricultura en la región y su gran vulnerabilidad, planteando retos en materia de adaptación frente a la alta variabilidad de temperatura, las alteraciones en los patrones de precipitación y la mayor frecuencia e intensidad de eventos climáticos extremos."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Medina Rey, José María.",
                "titulo": "Hacia una ley del derecho a la alimentación en Perú.",
                "referencia": "2014. Prosalus, Salud y Desarrollo. 3 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/HACIA%20UNA%20LEY%20DEL%20DERECHO%20A%20LA%20ALIMENTACI%C3%93N%20EN%20PER%C3%9A.pdf",
                "resumen_comentario": "Las iniciativas para una ley sobre el derecho a la alimentación en Perú, impulsadas por la Comisión Andina de Juristas y la plataforma Foro Salud, reconocen el derecho a una alimentación adecuada y saludable, con énfasis en la población más pobre y vulnerable, y reconoce la obligación del Estado de garantizar y promover acciones encaminadas al pleno goce de este derecho.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Medina Rey, José María y Cascante, Kattya.",
                "titulo": "Especulación financiera y crisis alimentaria.",
                "referencia": "2011. Ayuda en Acción; Prosalus, Salud y Desarrollo; Cáritas Española; Ongawa. 113 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Especulacion_financiera_y_crisis_alimentaria.pdf",
                "resumen_comentario": "Aborda la crisis alimentaria desde la economía especulativa de los alimentos y la volatilidad de los precios de las materias primas agrícolas, con el consiguiente impacto sobre las poblaciones más vulnerables, especialmente en los países de bajos ingresos y déficit alimentario, poniendo en evidencia la necesidad de cambios para erradicar el hambre y controlar los precios internacionales de los alimentos, lo que supone limitar los oligopolios del sistema agroalimentario y evitar los abusos y corrupción del sistema."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Medina, José María y de Febrer, María Teresa.",
                "titulo": "Guía de incidencia para el derecho a la alimentación.",
                "referencia": "2011. Prosalus, Salud y Desarrollo; Ayuda en Acción; Cáritas; Ongawa; Acción contra el Hambre. 52 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Guia_de_incidencia_para_derecho_a_la_alimentacion.pdf",
                "resumen_comentario": "Busca facilitar la labor de incidencia en los temas relacionados con el derecho a la alimentación en el ámbito jurídico, político y social, para lograr que este derecho sea reconocido en todos los países. Se analiza el concepto de incidencia y las diferencias con lobby y cabildeo, la grave situación de millones de personas que pasan hambre en el mundo, y las propuestas para mitigar tanto sufrimiento humano.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Estrategia Nacional de Agricultura Familiar 2015-2021 (Enaf).",
                "referencia": "2015. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO); Fondo Internacional de Desarrollo Agrícola (Fida). Lima: Agrorural, Dirección de Desarrollo Agrario, Ministerio de Agricultura y Riego. 126 pp.",
                "link": "https://www.agrorural.gob.pe/wp-content/uploads/2016/02/enaf.pdf",
                "resumen_comentario": "Orienta la intervención integral del Estado a favor de resultados favorables para los agricultores familiares, en el marco de la inclusión social y económica de la población rural, reconociendo la contribución de los pueblos indígenas, las comunidades locales y los agricultores para la conservación y desarrollo de la diversidad biológica y los recursos fitogenéticos, base de la producción alimentaria y agrícola.",
                "observaciones": "Aprobada mediante Decreto Supremo Nº 009-2015- Minagri."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Plan Nacional de Agricultura Familiar 2019-2021.",
                "referencia": "2019. Ministerio de Agricultura y Riego. 87 pp.",
                "link": "https://cdn.www.gob.pe/uploads/document/file/426528/DECRETO_SUPREMO_N__0007-2019-MINAGRI.pdf",
                "resumen_comentario": "Presenta a las entidades, actores agrarios, organizaciones sociales y empresas, un documento de gestión de corto plazo con el fin de contribuir a la vigilancia y la participación de la agricultura familiar, forma de trabajo colectivo que garantiza la sostenibilidad del ambiente y la conservación de la biodiversidad, y contribuye a la seguridad alimentaria.",
                "observaciones": "Incluye Decreto Supremo Nº 007-2019-Minagri, que aprueba el Plan Nacional de Agricultura Familiar 2019-2021."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Plan Nacional de Seguridad Alimentaria y Nutricional 2015-2021.",
                "referencia": "s/f. Lima: Ministerio de Agricultura, Dirección General de Políticas Agrarias. 65 pp.",
                "link": "https://www.minagri.gob.pe/portal/download/pdf/seguridad-alimentaria/plan-acional-seguridad-2015-2021.pdf",
                "resumen_comentario": "Basado en la Estrategia Nacional de Seguridad Alimentaria y Nutricional 2013-2021 (Ensan), el Plan Nacional contiene las estrategias y las líneas de acción para que el Estado garantice la seguridad alimentaria y nutricional de la población, a través de la disponibilidad, acceso y uso adecuado de los alimentos.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Neven, David.",
                "titulo": "Desarrollo de cadenas de valor alimentarias sostenibles: Principios rectores.",
                "referencia": "2015. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 106 pp.",
                "link": "http://www.fao.org/3/b-i3953s.pdf",
                "resumen_comentario": "Establece el marco general y un conjunto de principios para guiar el desarrollo de cadenas de valor alimentarias sostenibles en la práctica, aplicando una perspectiva de sistemas para presentar tanto los desafíos principales como algunos de los métodos más prometedores para solucionarlos, contribuyendo a propiciar sistemas agrícolas y alimentarios incluyentes y eficientes.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ngongi, Namanga; Sheeran, Josette y von Braun, Joachim.",
                "titulo": "Respondiendo a la crisis alimentaria mundial: Tres perspectivas.",
                "referencia": "2009. Alianza para una Revolución Verde en África; Programa Mundial de Alimentos (PMA). Washington: Instituto Internacional de Investigación sobre Políticas Alimentarias (IFPRI). 32 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Respondiendo_a_la_crisis_alimentaria_mundial.pdf",
                "resumen_comentario": "El rápido incremento de los precios de los alimentos es una pesada carga sobre los consumidores de los países que son importadores de alimentos y genera una creciente inseguridad alimentaria. Esto ha afectado los mercados agrícolas y las reservas y provisión de alimentos accesible a las personas vulnerables, requiriendo respuestas de política pública, el sector privado, y también de la gente en las calles. Los actores privados situados en la cadena de valor de los productos alimentarios, junto a los pequeños productores, pueden desempeñar un papel clave en la estabilización de precios de los alimentos, mediante infraestructura, innovación y tecnología para mejorar la productividad agrícola.",
                "observaciones": "Artículos."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nicholls, Clara I. y Altieri, Miguel A. (Editores)",
                "titulo": "Nuevos caminos para reforzar la resiliencia agroecológica al cambio climático.",
                "referencia": "2017. Sociedad Científica Latinoamericana de Agroecología (Socla); Red Iberoamericana de Agroecología para el Desarrollo de Sistemas Agrícolas Resilientes al Cambio Climático (Redagres). 94 pp.",
                "link": "https://foodfirst.org/wp-content/uploads/2017/10/Libro-REDAGRES-Caminos-a-la-resiliencia.pdf",
                "resumen_comentario": "Las practicas agroecológicas que fortalecen la resiliencia de las comunidades rurales a la variabilidad climática incluyen la diversificación de agroecosistemas, los cuales son más resilientes cuando están insertos en una matriz de paisaje compleja, que incluya germoplasma local en sistemas de cultivos diversificados, manejados con suelos ricos en materia orgánica y técnicas de conservación-cosecha de agua."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Novo Vázquez, Amparo; Fernández Aller, Mª Celia y Silveira, Héctor. (Coordinadores)",
                "titulo": "Agricultura familiar y derecho a la alimentación: Reflexiones desde España, América Latina y el Caribe.",
                "referencia": "2019. Universidad de Oviedo; Observatorio del Derecho a la Alimentación de España; Observatorio del Derecho a la Alimentación en América Latina y El Caribe; Cátedra de Estudios de Gobernanza Global Alimentaria (Ceggla); Iniciativa América Latina y El Caribe sin Hambre. Oviedo: Ediciones Universidad de Oviedo. 186 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-materiales/LIBRO%20AGRICULTURA%20FAMILIAR.pdf",
                "resumen_comentario": "Trata sobre la necesidad de un enfoque de derechos de la agricultura familiar, su relación con los Objetivos de Desarrollo Sostenible, las vulneraciones y la protección del derecho a la alimentación, los aspectos estructurales del hambre, la necesidad de la autonomía alimentaria, el papel de la agricultura familiar en la protección de la biodiversidad agrícola, y las políticas públicas para promover la agricultura familiar, entre otros. "
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos.",
                "titulo": "El derecho a la alimentación adecuada.",
                "referencia": "2010. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Folleto informativo Nº 34. Ginebra: Oficina del Alto Comisionado de las Naciones Unidas para los Derechos Humanos. 66 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/El%20derecho%20a%20la%20alimentaci%C3%B3n%20adeucada%20-%20Folleto%20informativo%20OACDDHH.pdf",
                "resumen_comentario": "Explica en qué consiste el derecho a la alimentación adecuada, se ilustran sus consecuencias respecto de individuos y grupos determinados, y se abunda en las obligaciones de los Estados partes con respecto a este derecho humano. Contiene, además, una sinopsis de la responsabilidad nacional, regional e internacional y de los mecanismos de supervisión."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas (ONU).",
                "titulo": "El derecho a la alimentación: Resolución aprobada por la Asamblea General de la ONU el 19 de diciembre de 2016.",
                "referencia": "2017. Organización de las Naciones Unidas (ONU). 11 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/RES%20AGNU%202016.pdf",
                "resumen_comentario": "Reconoce que no se están cumpliendo las promesas hechas en la Cumbre Mundial sobre la Alimentación, en 1996, e invita a los Estados miembros a que den prioridad y proporcionen la financiación necesaria a la realización del derecho a la alimentación consagrado en la Declaración de Roma sobre la Seguridad Alimentaria Mundial y al cumplimiento de las metas del Objetivo 2 de la Agenda 2030 para el Desarrollo Sostenible y de otras metas relacionadas con la alimentación y la nutrición.",
                "observaciones": "Resolución aprobada en el septuagésimo primer período de sesiones de la ONU, 2016."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Directrices voluntarias sobre la gobernanza responsable de la tenencia de la tierra, la pesca y los bosques en el contexto de la seguridad alimentaria nacional.",
                "referencia": "2012. Comité de Seguridad Alimentaria Mundial (CSF). Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 48 pp.",
                "link": "http://www.fao.org/3/a-i2801s.pdf",
                "resumen_comentario": "Estipulan principios y normas internacionalmente aceptados para las prácticas responsables en el uso y control de la tierra, la pesca y los bosques, ofreciendo orientaciones para el mejoramiento de los marcos normativos, jurídicos y organizativos que regulan los derechos de tenencia; la transparencia de los sistemas de tenencia; y las capacidades de los organismos públicos, empresas, organizaciones de la sociedad civil y personas vinculadas con la tenencia y su gobernanza en el contexto de la seguridad alimentaria nacional."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "El derecho a la alimentación: Compromisos pasados, obligaciones actuales, acciones para el futuro. Una retrospectiva de diez años de las Directrices sobre el Derecho a la Alimentación.",
                "referencia": "2014. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 24 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/retrospectiva%20de%20diez%20a%C3%B1os%20de%20las%20Directrices.pdf",
                "resumen_comentario": "Examina los avances realizados en la década desde la aprobación de las Directrices voluntarias en apoyo de la realización progresiva del derecho a una alimentación adecuada en el contexto de la seguridad alimentaria nacional (Directrices sobre el Derecho a la Alimentación o RtFG, por sus siglas en inglés), sobre todo los relacionados con los marcos legales, los compromisos políticos, la coherencia en la implementación, los mecanismos y la coordinación de la gobernanza, la concienciación, las estrategias y las políticas públicas, y la ayuda externa para ejecutarlas.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "El estado de la seguridad alimentaria y la nutrición en el mundo 2019: Protegerse frente a la desaceleración y el debilitamiento de la economía.",
                "referencia": "2019. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO); Programa Mundial de Alimentos (PMA); Fondo Internacional de Desarrollo Agrícola (Fida); Organización Mundial de la Salud (OMS); Fondo de las Naciones Unidas para la Infancia (Unicef). Roma: FAO. 256 pp.",
                "link": "http://www.fao.org/3/ca5162es/ca5162es.pdf",
                "resumen_comentario": "La disminución del hambre de la que el mundo se había beneficiado durante más de un decenio llega a su fin y el hambre aumenta de nuevo, poniéndose de manifiesto que la prevalencia de la subalimentación se ha estabilizado y que, no obstante, la cifra absoluta de este indicador sigue creciendo, si bien con lentitud. No se cumplirá la meta del ODS de 2030 de reducir a la mitad el número de niños con retraso del crecimiento ni la meta de la Asamblea Mundial de la Salud para 2025 de reducir la prevalencia del bajo peso al nacer, entre otros.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "El estado mundial de la agricultura y la alimentación 2019: Progresos en la lucha contra la pérdida y el desperdicio de alimentos.",
                "referencia": "2019. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 198 pp.",
                "link": "http://www.fao.org/3/ca6030es/ca6030es.pdf",
                "resumen_comentario": "La pérdida de alimentos conlleva una presión innecesaria sobre el ambiente y los recursos naturales que se han utilizado para producirlos, desperdiciando recursos de la tierra y el agua, generando contaminación y emitiendo gases de efecto invernadero (GEI) sin motivo, afectando la seguridad alimentaria. Para intervenir con eficacia y adoptar medidas decisivas para hacerle frente se debe conocer en qué parte de la cadena de suministro se concentran las pérdidas y los desperdicios, y los motivos por los que se producen.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "El trabajo de la FAO en la agricultura familiar: Prepararse para el Decenio Internacional de la Agricultura Familiar (2019-2028) para alcanzar los ODS.",
                "referencia": "2018. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 36 pp.",
                "link": "http://www.fao.org/3/ca1465es/CA1465ES.pdf",
                "resumen_comentario": "El Decenio de la Agricultura Familiar 2019-2028 es una oportunidad para que los países desarrollen políticas públicas e inversiones para apoyar la agricultura familiar y contribuyan al cumplimiento de los ODS, abordando la agricultura familiar desde una perspectiva integral que incluya la erradicación de la pobreza rural, mejorando la participación de las organizaciones de productores agrícolas en el diálogo sobre políticas, y empoderando a los agricultores pobres para que participen en los procesos de toma de decisiones que afectan sus medios de subsistencia."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Enfoques agroecológicos y otros enfoques innovadores en favor de la sostenibilidad de la agricultura y los sistemas alimentarios que mejoran la seguridad alimentaria y la nutrición.",
                "referencia": "2019. Grupo de alto nivel de expertos en seguridad alimentaria y nutrición, Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Roma: Comité de Seguridad Alimentaria Mundial de las Naciones Unidas (CSA). 16 pp.",
                "link": "http://www.fao.org/fileadmin/user_upload/hlpe/hlpe_documents/HLPE_S_and_R/HLPE_2019_Agroecological-and-Other-Innovative-Approaches_S-R_ES.pdf",
                "resumen_comentario": "Parte del reconocimiento de los derechos humanos como base para garantizar unos sistemas alimentarios sostenibles, considerando que los siete principios Panther (participación, rendición de cuentas, no discriminación, transparencia, dignidad humana, empoderamiento y Estado de derecho) deberían regir las medidas individuales y colectivas para abordar las cuatro dimensiones de la seguridad alimentaria y la nutrición en las diferentes escalas.",
                "observaciones": "Informe. Fragmento."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Fichas técnicas sobre los 21 indicadores de los ODS bajo la custodia de la FAO.",
                "referencia": "2020. Versión en inglés: Factsheets on the 21 SDG indicators under FAO custodianship. A highlight of the main indicators with the greatest gaps in country reporting. Roma: FAO. 99 pp.",
                "link": "http://www.fao.org/3/ca8958en/CA8958EN.pdf",
                "resumen_comentario": "Analiza los indicadores de la Agenda 2030 relacionados con la agricultura, pesca y alimentación, indicando que no estamos en camino de lograr los ODS, complicado por el impacto del Covid-19, y proporciona información sobre la disponibilidad de datos y la cobertura del país; la metodología para analizar el indicador y el proceso para hacerlo como un estándar internacional Los datos son un requisito para medir el progreso hacia los ODS e informar sobre las políticas e inversiones necesarias para lograr las metas de la Agenda 2030.",
                "observaciones": "Versión original en inglés."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "La biodiversidad agrícola y los ecosistemas resilientes: Prácticas agrícolas tradicionales e identidad cultural.",
                "referencia": "2018. Sistemas Importantes del Patrimonio Agrícola Mundial (Sipam), Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 48 pp.",
                "link": "http://www.fao.org/3/i9187es/I9187ES.pdf",
                "resumen_comentario": "Los Sistemas Importantes del Patrimonio Agrícola Mundial (SIPAM) son paisajes estéticamente impresionantes que combinan la biodiversidad agrícola con ecosistemas resilientes y un valioso patrimonio cultural, aportando bienes y servicios, alimentos y medios de subsistencia para pequeños agricultores, por lo que se busca mitigar las amenazas que enfrentan los agricultores, y resaltar los beneficios de estos sistemas.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Laboratorio de datos para la innovación estadística.",
                "referencia": "2020. Iniciativa Mano de la Mano, FAO.",
                "link": "https://datalab.review.fao.org/index.html",
                "resumen_comentario": "El Laboratorio utiliza tecnologías de vanguardia para abordar los desafíos planteados por Mano de la Mano, una iniciativa de la FAO que busca la transformación agrícola y el desarrollo rural sostenible, poner fin al hambre y la malnutrición, y lograr los Objetivos de Desarrollo Sostenible.",
                "observaciones": "Web."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Los diez elementos de la agroecología: Guía para la transición hacia sistemas alimentarios y agrícolas sostenibles.",
                "referencia": "s/f. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 15 pp.",
                "link": "http://www.fao.org/3/i9037es/i9037es.pdf",
                "resumen_comentario": "Busca ayudar a poner en práctica la agroecología, determinando propiedades importantes de los sistemas y enfoques agroecológicos, así como consideraciones clave para el desarrollo de un entorno favorable para la agroecología. Constituye una orientación para los encargados de formular las políticas, especialistas y partes interesadas en la planificación, la gestión y la evaluación de las transiciones agroecológicas.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Marco de programación por país de la FAO para Perú 2018-2021.",
                "referencia": "2018. Lima: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 24 pp.",
                "link": "http://www.fao.org/fileadmin/user_upload/faoweb/peru/docs/MPP_2018-2021_Firmado.pdf",
                "resumen_comentario": "Establece la contribución de la FAO en relación a las prioridades gubernamentales del país (seguridad alimentaria, aprovechamiento sostenible de los recursos naturales, adaptación y mitigación del cambio climático, así como las necesidades de recursos y las posibles esferas de apoyo con una cartera indicativa de proyectos de los temas prioritarios.",
                "observaciones": "Documento."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO).",
                "titulo": "Sistemas de semillas resilientes: Marco de acción compartido.",
                "referencia": "2020. Global Alliance for the Future of Food. 26 pp.",
                "link": "https://futureoffood.org/wp-content/uploads/2020/02/Resilient-Seed-Systems-Shared-Action-Framework-Spanish.pdf",
                "resumen_comentario": "Los sistemas de semillas resilientes son fundamentales para los sistemas alimentarios sostenibles, los cuales deben ser renovables, resistentes, equitativos, diversos, saludables y estar interconectados. A la luz de los apremiantes desafíos globales, como el cambio climático y la seguridad alimentaria y nutricional, existe una imperiosa necesidad de mantener y mejorar la biodiversidad agrícola, protegiendo la diversidad de las semillas.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), OMS, PMA, Fida y Unicef.",
                "titulo": "El estado de la seguridad alimentaria y la nutrición en el mundo 2020: Transformación de los sistemas alimentarios para que promuevan dietas asequibles y saludables.",
                "referencia": "2020. Organización Mundial de la Salud (OMS); Fondo Internacional de Desarrollo Agrícola (Fida); Programa Mundial de Alimentos (PMA); Fondo de las Naciones Unidas para la Infancia (Unicef). Roma: FAO. 44 pp.",
                "link": "http://www.fao.org/3/ca9699es/CA9699ES.pdf",
                "resumen_comentario": "Con la pandemia se ha incrementado el número de personas en el mundo en situación de hambre e inseguridad alimentaria, que no tienen acceso a alimentos inocuos, nutritivos y suficientes, y que no pueden acceder a una dieta saludable, mostrando lo lejos que estamos de lograr el ODS2 (Hambre Cero), sin contar que esta situación genera costos sociales y sanitarios asociados a los hábitos alimenticios, requiriéndose una transformación de los sistemas alimentarios y medidas adaptadas a los diferentes contextos y países.",
                "observaciones": "Versión resumida."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), OPS, WFP y Unicef.",
                "titulo": "Panorama de la seguridad alimentaria y nutricional en América Latina y el Caribe 2018: Desigualdad y sistemas alimentarios.",
                "referencia": "2018. Santiago: FAO, OPS, WFP y Unicef. 134 pp.",
                "link": "http://www.fao.org/3/CA2127ES/CA2127ES.pdf",
                "resumen_comentario": "El crecimiento de la pobreza y la pobreza extrema, la migración y el deterioro de la nutrición, sumados a los patrones alimentarios poco saludables en la región, agrava esta situación en los territorios y poblaciones más desfavorecidas, contribuyendo a la desigualdad, el hambre y la malnutrición.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), OPS, WFP y Unicef.",
                "titulo": "Panorama de la seguridad alimentaria y nutricional en América Latina y el Caribe 2019: Hacia entornos alimentarios más saludables que hagan frente a todas las formas de malnutrición.",
                "referencia": "2019. Santiago: FAO, OPS, WFP y Unicef. 135 pp.",
                "link": "http://www.fao.org/3/ca6979es/ca6979es.pdf",
                "resumen_comentario": "Presenta un análisis basado en los entornos alimentarios, entendidos como los espacios de interacción entre las personas y las condiciones físicas, económicas, políticas y socioculturales que influyen en la manera que adquieren, preparan y consumen alimentos, y que explican las formas de malnutrición que afectan, en este caso, a América Latina y el Caribe, tales como la desigualdad social y económica en la región, y las dificultades que tiene la población vulnerable para acceder a una dieta saludable.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Panel Internacional de Expertos sobre Sistemas de Alimentación Sostenible (Ipes-Food).",
                "titulo": "El Covid-19 y la crisis en los sistemas alimentarios: Síntomas, causas y posibles soluciones.",
                "referencia": "2020. Panel Internacional de Expertos sobre Sistemas de Alimentación Sostenible (Ipes-Food). 12 pp.",
                "link": "http://www.ipes-food.org/_img/upload/files/COVID-19_CommuniqueES%281%29.pdf",
                "resumen_comentario": "Los confinamientos provocados por la pandemia muestran las disparidades críticas en los sistemas sanitarios y alimentarios, que empeorarán por el cambio climático en los próximos años, señal de alarma que debe ser atendida con urgencia. La crisis también ha mostrado que las comunidades se han unido para paliar las brechas en los sistemas alimentarios, y las autoridades han tomado medidas extraordinarias para garantizar la producción y suministro de alimentos. Queda asegurar que esto sea el punto de partida para una visión y transformación del sistema alimentario que genere resiliencia en todos los niveles.",
                "observaciones": "Comunicado."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pintado Linares, Miguel.",
                "titulo": "Agricultura familiar, orientación de la producción y nutrición infantil en el Perú.",
                "referencia": "2016. Lima: Centro Peruano de Estudios Sociales (Cepes). 56 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/agricultura-familiar-orientación-de-la-producción-y-nutrición-infantil-en-el-perú.pdf",
                "resumen_comentario": "La dureza de la desnutrición crónica infantil en el Perú varía en los distintos territorios y está relacionada con la actividad agropecuaria y la pobreza, por la que la agricultura familiar cobra importancia para reorientar la producción, promoviendo el autoconsumo y la variedad de cultivos."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pintado Linares, Miguel.",
                "titulo": "Agricultura familiar y situación alimentaria en Ancash.",
                "referencia": "2018. Lima: Centro Peruano de Estudios Sociales (Cepes). 50 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2018/12/af-ancash.pdf",
                "resumen_comentario": "Examina la importancia del sector agropecuario y, en especial, de la agricultura familiar, así como la orientación de la producción y su relación con la desnutrición crónica infantil y la seguridad alimentaria.",
                "observaciones": "Estudia la situación en el departamento de Ancash."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pintado Linares, Miguel.",
                "titulo": "Agricultura familiar y situación alimentaria en Puno.",
                "referencia": "2016. Lima: Centro Peruano de Estudios Sociales (Cepes). 34 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/af-y-situacion-alimentaria-en-puno.pdf",
                "resumen_comentario": "La paradoja de la mayor incidencia de desnutrición crónica infantil en los propios productores de alimentos, en particular donde hay agricultura familiar, tiene una explicación territorial, pues se da en lugares, como Puno, donde las familias tienen menos tierras de cultivo y menor acceso al agua.",
                "observaciones": "Estudia la situación en el departamento de Puno."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa de Desarrollo Post-2015, Departamento de Desarrollo Económico y Social de la FAO.",
                "titulo": "Alimentar a las personas, cuidar el planeta: FAO y la Agenda de Desarrollo Post-2015.",
                "referencia": "s/f. Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Roma: Equipo especial encargado del Programa de Desarrollo Post-2015, FAO.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/FAO%20y%20Agenda%20post%202015.pdf",
                "resumen_comentario": "Los frutos de la tierra nos han mantenido durante mucho tiempo, sin embargo, se debe revisar la manera en la que trabajamos la tierra para garantizar una alimentación para todos. Basados en los temas de la Agenda de Desarrollo Post-2015, que dio un marco global a los Objetivos de Desarrollo Sostenible, se muestran datos que ilustran los vínculos entre la seguridad alimentaria, la agricultura sostenible y el uso de los recursos naturales.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Prosalus; Cáritas Española y Veterinarios Sin Fronteras.",
                "titulo": "Derecho a la alimentación: Un derecho vulnerado.",
                "referencia": "2005. Prosalus, Salud y Desarrollo; Cáritas Española y Veterinarios sin Fronteras. 137 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Un_derecho_vulnerado.pdf",
                "resumen_comentario": "Con frecuencia las comunidades en situación de inseguridad alimentaria se ubican en terrenos marginales, poco aptos para la agricultura y con escasez de recursos productivos, como resultado de la expulsión de sus tierras y desplazamientos forzados debido a proyectos de infraestructura, explotaciones agropecuarias extensivas, mineras o de hidrocarburos, construcción de presas, entre otros. Recoge casos en comunidades campesinas indígenas de Guatemala y Perú, en los que la marginación política condujo a situaciones de violación del derecho a una alimentación adecuada.",
                "observaciones": "Ver \"Directrices voluntarias para la realización progresiva del derecho a una alimentación adecuada en un contexto de seguridad alimentaria nacional\", FAO, 2004."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Prosalus; Cáritas Española y Veterinarios Sin Fronteras.",
                "titulo": "Directrices voluntarias para el derecho a la alimentación.",
                "referencia": "2005. Prosalus, Salud y Desarrollo; Cáritas Española y Veterinarios sin Fronteras. 124 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Comentarios_Directrices_voluntarias.pdf",
                "resumen_comentario": "Se espera que las “Directrices voluntarias en apoyo a la realización progresiva del derecho a una alimentación adecuada, en el contexto de la seguridad alimentaria nacional”, propuestas por el Grupo de Trabajo Intergubernamental de la FAO y adoptadas por la comunidad internacional en 2004, sean una herramienta práctica de orientación a los gobiernos que permita mejorar los logros conseguidos en la lucha contra el hambre y la pobreza."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ravello Gutiérrez,  Luis Antonio; Luján Sánchez, Ángel Ramiro y Quispe Quispe,",
                "titulo": "Manual de procedimientos del Sistema de Garantía Participativo. Contribuyendo al cuidado de nuestra salud y el medio ambiente.",
                "referencia": "2015. Instituto de Desarrollo y Medio Ambiente (IDMA); Asociación Peruana de consumidores (Aspec). Lima: Asociación Nacional de Productores Ecológicos del Perú (Anpe Perú). 46 pp.",
                "link": "https://www.anpeperu.org/publicaciones",
                "resumen_comentario": "El Sistema de Garantía Participativo (SGP) es una alternativa viable para asegurar la cualidad ecológica de un producto a través de una metodología apropiada a la realidad de nuestra pequeña producción agroecológica, caracterizada por su escala familiar, diversidad de cultivos, pisos ecológicos y etnoculturales de cada región, advirtiendo su creciente valor y reconocimiento por los productores y sectores públicos y privados.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red Internacional para los Derechos Económicos, Sociales y Culturales(Red Desc) y Center of Concern.",
                "titulo": "Directrices de Kuala Lumpur: Directrices para integrar los derechos humanos en la política económica agrícola.",
                "referencia": "2010. Misereor; Comité catholique contre la faim et pour le développement; Norwegian Forum for Environment and Development; Fundación Ford. Kuala Lumpur: Red Internacional para los Derechos Económicos, Sociales y Culturales (Red Desc). 20 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Directrices%20para%20integrar%20los%20DDHH%20en%20pol%C3%ADtica%20econ%C3%B3mica%20agr%C3%ADcola.pdf",
                "resumen_comentario": "Las Directrices están diseñadas como herramienta para proveer información y una metodología que podrán ser empleadas para asegurar el rol de los derechos humanos en las reglas y políticas del comercio, las inversiones y las finanzas, así como las fiscales, monetarias y otras, con el fin de contribuir a una mejor aplicación del derecho internacional y de los derechos humanos en las políticas económicas vinculadas a la agricultura."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Red Pacto Mundial España.",
                "titulo": "Principios de agricultura sostenible y empresas.",
                "referencia": "2017. Pacto Mundial de las Naciones Unidas. 2 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/FAB%C2%B4s-d%C3%ADptico.pdf",
                "resumen_comentario": "Las empresas son un partner fundamental para los gobiernos y otros grupos de interés a la hora de implantar soluciones prácticas que hagan que los sistemas de seguridad alimentaria y agrícola sean sostenibles. Para potenciar el impacto positivo que las empresas pueden tener en este ámbito, los Principios sirven como un marco para la colaboración entre empresas, gobiernos, sociedad civil y otros grupos de interés, y que pueden adoptar las empresas para alinearse con los objetivos de la ONU.",
                "observaciones": "Principios de Agricultura Sostenible y Empresas (Food and Agriculture Business Principles, FAB por sus siglas en inglés)."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Revilla Santa Cruz, Luis.",
                "titulo": "Sistematización sobre organizaciones tradicionales para la conservación de los cultivos nativos a nivel nacional.",
                "referencia": "2006. Programa de las Naciones Unidas para el Desarrollo (PNUD). Lima: Instituto de Investigaciones de la Amazonía Peruana (IIAP). 56 pp.",
                "link": "http://repositorio.iiap.gob.pe/bitstream/IIAP/141/2/Revilla_Libro_2006.pdf",
                "resumen_comentario": "Información sobre la presencia de las organizaciones tradicionales relacionadas a los cultivos nativos, y su unidad organizativa, el ayllu o comunidad. Sus sistemas de reciprocidad y redistribución, cuya práctica cotidiana hace posible que las familias campesinas, indígenas y nativas, atiendan las necesidades relacionadas a la chacra, permiten conservar los cultivos nativos y sus parientes silvestres, favoreciendo la seguridad alimentaria de la población.",
                "observaciones": "Conservación in situ de la agrobiodiversidad andino-amazónica N° 2."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rosset, Peter.",
                "titulo": "Soberanía alimentaria: Reclamo mundial del movimiento campesino.",
                "referencia": "2004. En: Nyéléni Foro 2007. 6 pp.",
                "link": "https://nyeleni.org/IMG/pdf/RossetSobAlimFinal.pdf",
                "resumen_comentario": "La mejor forma de combatir el hambre y la pobreza es a través del desarrollo económico local, sobre todo en las áreas rurales, creando circuitos locales de producción y consumo, para que las familias de agricultores vendan sus productos y compren lo indispensable en poblaciones locales.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ruiz Muller, Manuel.",
                "titulo": "Propuesta de metodología e instrumentos para la protección de derechos intelectuales asociados a la agrobiodiversidad.",
                "referencia": "2006. Programa de las Naciones Unidas para el Desarrollo (PNUD). Lima: Instituto de Investigaciones de la Amazonía Peruana (IIAP). 18 pp.",
                "link": "http://repositorio.iiap.gob.pe/bitstream/IIAP/149/2/Manuel_Libro_2006.pdf",
                "resumen_comentario": "Investigación que trata sobre cómo proteger los conocimientos, innovaciones y prácticas de las comunidades campesinas y nativas relacionadas con la agrobiodiversidad; cómo proteger y regular el acceso y uso de datos e información generada a partir de la investigación realizada sobre la agrobiodiversidad; y cómo proteger nuevas variedades vegetales, cultivos nativos y sus parientes silvestres.",
                "observaciones": "Conservación in situ de la agrobiodiversidad andino-amazónica N° 1."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sabourin, Eric; Samper, Mario y Sotomayor, Octavio. (Coordinadores)",
                "titulo": "Políticas públicas y agriculturas familiares en América Latina y el Caribe: Balance, desafíos y perspectivas.",
                "referencia": "2014. Centro Internacional de Investigación Agrícola para el Desarrollo (Cirad); Instituto Interamericano de Cooperación para la Agricultura (IICA); Red de Políticas Públicas y Desarrollo Rural en América Latina (Red PP-AL); Cooperación Regional Francesa para América del Sur. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 300 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Politicas_PublicasAF_ALyC.pdf",
                "resumen_comentario": "Realiza un análisis transversal de las políticas públicas para la agricultura familiar en países latinoamericanos, abordando la situación de las agriculturas de base familiar y la evolución de las políticas enfocadas o que inciden directamente en ella, así como las definiciones, tipologías e instrumentos para orientar y aplicar esas políticas. Asimismo, valora sus resultados e impactos, perspectivas y los principales desafíos que enfrentan dichas políticas y las diversas agriculturas familiares del hemisferio.",
                "observaciones": "Estudios de caso en Argentina, Brasil, Chile, Colombia, Costa Rica, Cuba, Ecuador, México, Nicaragua, Perú y Uruguay."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salazar, Lina; Schling, Maja; Palacios, Ana Claudia y Pazos, Nicolás.",
                "titulo": "Retos para la agricultura familiar en el contexto del Covid-19: Evidencia de productores en ALC.",
                "referencia": "2020. Banco Interamericano de Desarrollo (BID). 16 pp.",
                "link": "https://publications.iadb.org/publications/spanish/document/Retos-para-la-agricultura-familiar-en-el-contexto-del-COVID-19-Evidencia-de-productores-en-ALC.pdf",
                "resumen_comentario": "Examina la situación del sector agrícola en ALC en el contexto del Covid-19, desde la perspectiva de los productores agropecuarios, para saber cómo la pandemia global los ha afectado y sus expectativas para el futuro. Hasta el momento ha habido problemas en la venta de productos, originado por asuntos de transporte, menor demanda y menor precio de venta, lo que implica una reducción en los ingresos y la capacidad de gasto de los productores, limitando la continuidad del ciclo agrícola."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Salcedo, Salomón y Guzmán, Lya. (Editores)",
                "titulo": "Agricultura familiar en América Latina y el Caribe: Recomendaciones de política.",
                "referencia": "2014. Santiago de Chile: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 498 pp.",
                "link": "http://www.fao.org/3/i3788s/i3788s.pdf",
                "resumen_comentario": "Sistematiza experiencias para contribuir a la formulación de políticas públicas orientadas a hacer frente a los retos que tienen los agricultores familiares, rescatando proyectos de fortalecimiento de la gestión de sus organizaciones, intensificación sostenible de su producción, acceso a mercados y cadenas de valor, así como la institucionalidad y las políticas. También profundiza en la realidad de la agricultura familiar y la forma en que los productores se relacionan con la seguridad alimentaria de la región, y enfrentan los efectos del cambio climático y la situación de las mujeres en las unidades productivas."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sanca Vega, Ingrid.",
                "titulo": "Mujeres rurales en el Perú: Indicadores claves para una vida digna.",
                "referencia": "2019. Asociación Servicios Educativos Rurales (Ser). 42 pp.",
                "link": "https://drive.google.com/file/d/19TBfVjq1kRVReaWW8gsqgCC5FFi9iYjD/view",
                "resumen_comentario": "El cambio climático, la desregulación ambiental, las políticas extractivistas y la inversión sin fiscalización, agravan las condiciones de las mujeres rurales e indígenas, poniendo en peligro su integridad. Se busca saber quiénes son, cómo se autoidentifican, sus niveles de educación, problemas de salud y acceso a servicios, a qué formas de violencia están expuestas, grados de autoridad, qué proponen y respuestas  que tienen del Estado peruano.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Schieck Valente, Flavio Luiz; Wolpold-Bosien, Martin; Immink, Maarten y Winter, Léa.",
                "titulo": "El acaparamiento de tierras y la nutrición: Desafíos para la gobernanza mundial.",
                "referencia": "2010. Observatorio del Derecho a la Alimentación y a la Nutrición. Heidelberg: Fian Internacional, Brot für die Welt (Pan para el Mundo) y Organización Intereclesiástica para la Cooperación al Desarrollo (Icco). 100 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Observatorio%20del%20derecho%20a%20la%20alimentaci%C3%B3n%20y%20nutrici%C3%B3n%202010.pdf",
                "resumen_comentario": "Vastas superficies de tierra han sido adquiridas o arrendadas por entidades extranjeras en países en desarrollo, provocando conflictos por la tierra, desalojos forzosos e incrementos en los precios de la tierra, el agua y otros recursos productivos, vulnerando el derecho a la alimentación y a la nutrición de las poblaciones locales. Analiza las políticas de respuesta a las crisis financiera, alimentaria y nutricional, con especial atención a la gobernanza del sistema alimentario y el acaparamiento de tierras."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "SOS Faim.",
                "titulo": "El rol de los jóvenes en las agriculturas familiares.",
                "referencia": "2019. El barómetro de la agricultura familiar de 2019. Autre Terre, Iles de Paix y SOS Faim. 5 pp.",
                "link": "https://barometre-agricultures-familiales.org/le-role-des-jeunes-dans-les-agricultures-familiales",
                "resumen_comentario": "En los países del Sur, las agriculturas familiares continúan siendo la principal realidad de la sociedad y, aunque la mayoría de los jóvenes ha nacido y crecido en ella, el acceso a las tierras está muy limitado y los ingresos que genera no alcanzan para una alimentación digna. Por ello, las organizaciones campesinas abogan por una transformación de las agriculturas familiares, tratando de volverlas más atractivas demostrando su potencial económico.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Stamoulis, Kostas; Sonnino, Andrea y Raney, Terri.",
                "titulo": "El estado mundial de la agricultura y la alimentación 2014: La innovación en la agricultura familiar.",
                "referencia": "2015. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 175 pp.",
                "link": "http://www.fao.org/3/a-i4040s.pdf",
                "resumen_comentario": "Los agricultores familiares necesitan innovar los sistemas que utilizan; pero también deben innovar los gobiernos en las políticas de apoyo a la agricultura familiar, las organizaciones de productores para responder mejor a sus necesidades, y las instituciones de investigación y extensión rural en la transferencia de tecnología. La innovación tiene que ser inclusiva, con la participación de los agricultores familiares en la generación, intercambio y utilización de conocimientos, de manera que asuman como propio el proceso.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Swinnen, Johan y McDermott, John. (Editores)",
                "titulo": "Covid-19 y la seguridad alimentaria mundial.",
                "referencia": "2020. Instituto Internacional de Investigación sobre Políticas Alimentarias (IFPRI). 144 pp.",
                "link": "http://ebrary.ifpri.org/utils/getfile/collection/p15738coll2/id/133762/filename/133971.pdf",
                "resumen_comentario": "La pandemia ha provocado no solo una crisis de salud sino también económica, representando una seria amenaza a la seguridad alimentaria, particularmente en los países más pobres. Analiza el impacto del Covid-19 y las respuestas políticas; brinda información sobre cómo la pandemia está afectando la pobreza mundial y la seguridad alimentaria y la nutrición, el comercio de alimentos y cadenas de suministro, el género, el empleo y una variedad de intervenciones de política; y reflexiona sobre prepararse mejor para futuros peligros. ",
                "observaciones": "En inglés. Covid-19 and global food security."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Toche, Eduardo.",
                "titulo": "Avances del gobierno en materia de la alimentación adecuada y la seguridad alimentaria y nutricional: Retos a futuro.",
                "referencia": "2016. Lima: Alianza por el Derecho Humano a la Alimentación Adecuada, Cepes, Desco, Idma y Welthungerhilfe. 24 pp.",
                "link": "https://larevistaagrariaperu.files.wordpress.com/2019/01/cuadernillosan_vf_3.pdf",
                "resumen_comentario": "Examina la forma cómo el gobierno afronta el reto de la seguridad alimentaria, mostrando los avances en aspectos normativos, elaboración de instrumentos e implementación de estrategias y planes, y propone un plan de acción mínimo poniendo énfasis en la disponibilidad, acceso, uso y estabilidad alimentaria.",
                "observaciones": "Cuadernillo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vía Campesina.",
                "titulo": "La agricultura campesina sostenible puede alimentar al mundo.",
                "referencia": "2011. Yakarta: La Vía Campesina. 18 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/LaAgriculturacampesinasostenible.pdf",
                "resumen_comentario": "Plantea que la crisis alimentaria se debe a factores como la especulación y acaparamiento de alimentos, fomentados por las empresas transnacionales de la alimentación y los fondos de inversión, reconociendo que el sistema alimentario de los agronegocios no puede alimentar al mundo, siendo la alternativa la agroecología y la agricultura familiar.",
                "observaciones": "Documento de trabajo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vicente-Almazán Castro, Lola; Herrera Gil, Mónica y Escobar Cruz, Michelle.",
                "titulo": "Sistemas alimentarios territorializados en España: 100 iniciativas locales para una alimentación responsable y sostenible.",
                "referencia": "2019. Cerai. Fundación Asamblea de Ciudadanos y Ciudadanas del Mediterráneo (FACM); Mensa Cívica y Resolis. 280 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/100iniciativasSATenEspa%C3%B1a-CERAI-publicacion.pdf",
                "resumen_comentario": "Una propuesta de reterritorialización progresiva de los eslabones de la cadena agroalimentaria y una evolución agroecológica de los procesos agrícolas de producción, hacia la construcción de Sistemas Alimentarios Territorializados (SAT), que buscan luchar contra las externalidades o impactos sociales, ambientales y culturales negativos, así como una metodología para identificar y clasificar las Iniciativas de Alimentación Responsable y Sustentable (IARS) y demostrar en qué son social y culturalmente responsables y sustentables.",
                "observaciones": "Contiene cien fichas de iniciativas agroalimentarias locales."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vicente, Lucía Magdalena; Vicente, Carlos Alberto y Acevedo, Carolina. (Coordinación)",
                "titulo": "Atlas del agronegocio transgénico en el Cono Sur: Monocultivos, resistencias y propuestas de los pueblos.",
                "referencia": "2020. Misereor. Buenos Aires: Acción por la Biodiversidad. 224 pp.",
                "link": "http://www.biodiversidadla.org/Atlas",
                "resumen_comentario": "Expone la producción industrial de alimentos, nuevas tecnologías, la defensa de semillas y territorios por parte de las mujeres, el rol de la ciencia, las exportaciones e impuestos, entre otros, mostrando las consecuencias de este modelo, que ve a los alimentos sólo como una mercancía, frente a otro que, de la mano de organizaciones campesinas, pueblos originarios y agricultores familiares, busca recuperar la producción de alimentos saludables para garantizar el derecho a la alimentación, en base a un modelo de producción agroecológica."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vivero Pol, José Luis.",
                "titulo": "Alimentos “low-cost” frente a alimentos “como bien común”: Ética y acciones colectivas para una transición alternativa.",
                "referencia": "s/f. En: Creative Commons Noncommercial Share alike. 5 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Alimentos%20low%20cost%20frente%20a%20alimentos%20como%20bien%20comun.pdf",
                "resumen_comentario": "Propone una perspectiva distinta ante las justificaciones productivistas (producir más y mejor), sociotécnicas (reducir el desperdicio de alimentos en la cadena productiva) y legales (la alimentación es un derecho) para ir hacia un nuevo sistema alimentario sostenible y justo para las personas que pasan hambre en un mundo de abundancia, y también para el creciente número de obesos que son estimulados por el sistema industrial para consumir productos procesados que proporcionan más calorías de las que requiere nuestro cuerpo.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Von Grebmer, Klaus; Bernstein, Jill; Patterson, Fraser; Wiemers, Miriam; Ní Chéilleachair, Réiseal; Foley, Connell; Gitter, Seth; Ekstrom, Kierstin; Fritschel, Heidi y Mukerji, Rupa.",
                "titulo": "Índice global del hambre 2019: El desafío del cambio climático.",
                "referencia": "2019. Concern Worldwide; Deutsche Welthungerhilfe e. V; Helvetas. Madrid: Ayuda en Acción. 72 pp.",
                "link": "https://www.globalhungerindex.org/pdf/es/2019.pdf",
                "resumen_comentario": "Aunque el compromiso de alcanzar el Hambre Cero para 2030 es una meta fundamental de los ODS, los logros obtenidos están amenazados o se están revirtiendo y varios países tienen niveles de hambre más altos. Se examina los principales factores que contribuyen al hambre y el entorno político en el que se dan, así como los conflictos, la desigualdad y los efectos del cambio climático que han contribuido a los altos niveles de hambre e inseguridad alimentaria. Muestra comparaciones regionales y las tendencias globales, y propone recomendaciones políticas.",
                "observaciones": "Informe. Casos de Haití y Níger. Incluye el cálculo del Índice Global del Hambre (Global Hunger Index, GHI)."
            },
            {
                "eje_estrategico": "Quinto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ziegler, Jean.",
                "titulo": "El derecho humano a la alimentación: Revisión del objetivo 1 de los Objetivos de Desarrollo del Milenio.",
                "referencia": "2004. Prosalus; Cáritas Española y Veterinarios Sin Fronteras. 121 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/El_derecho_humano_a_la_alimentacion.pdf",
                "resumen_comentario": "Plantea la realización del derecho a la alimentación desde una perspectiva de derechos humanos, es decir, se pretende lograr el respeto, la protección y garantía del derecho humano a una alimentación adecuada, convirtiendo la erradicación del hambre en una obligación."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Abramo, Laís. (Editora)",
                "titulo": "Trabajo decente y equidad de género en América Latina.",
                "referencia": "2006.Organización Internacional del Trabajo (OIT). Santiago de Chile. 316 pp.",
                "link": "https://www.observatoriodeltrabajo.org/ftp/trabajo%20decente%20y%20equidad%20de%20g%C3%A9nero%20en%20Am%C3%A9rica%20Latina%20(OIT).pdf",
                "resumen_comentario": "Profundiza en los análisis relativos a la situación de las mujeres trabajadoras y a la promoción de la igualdad de género en América Latina, en el contexto de la Agenda de Trabajo Decente."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alber, Gotelind.",
                "titulo": "Guía de comunicación: Género y cambio climático.",
                "referencia": "2019. Los Verdes ALE. Bruselas: Parlamento Europeo. 36 pp.",
                "link": "http://partidoequo.es/wp-content/uploads/2019/03/Guia-genero-cambio-climatico.pdf",
                "resumen_comentario": "Orienta sobre el papel de la mujer en el cambio climático. Destaca los aspectos del cambio climático que poseen una dimensión de género, en tanto las causas y efectos del cambio climático y las políticas con que se intente afrontarlo tienen diferente impacto sobre mujeres y hombres.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Alvarez Vispo, Isa y Begiristain Zubillaga, Mirene.",
                "titulo": "Feminismo para los sistemas alimentarios y la agroecología.",
                "referencia": "2019. Universidad del País Vasco, Euskal Herriko Unibertsitatea (UPV/EHU); Red Urgenci (Red Internacional de Agricultura Sostenida por la Comunidad). En: Revista Iberoamericana de Economía Solidaria e Innovación Socioecológica (Riesise) Vol. 2. 22 pp.",
                "link": "http://www.uhu.es/publicaciones/ojs/index.php/RIESISE/article/view/3658/3753",
                "resumen_comentario": "La propuesta de la agroecología es fruto del desarrollo teórico y práctico de los últimos años y de las alianzas entre los distintos movimientos sociales. Reflexiona en torno a cómo se está transformando el panorama del sistema alimentario, en qué dirección y para quién se construye agroecología, y qué papel juegan las mujeres y los enfoques feministas en ese conjunto de propuestas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Arana Zegarra, María Teresa.",
                "titulo": "Representaciones sociales de lideresas sobre impactos socioambientales de la minería y sus estrategias para defender el medioambiente.",
                "referencia": "2012. ACSUR Las Segovias. Cajamarca: Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides). 34 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Investigaci%C3%B3n%20Mujeres%20y%20participaci%C3%B3n%20GRUFIDES.pdf",
                "resumen_comentario": "Busca visibilizar los impactos socioambientales de las actividades mineras en las mujeres, sus estrategias de defensa y las herramientas de capacitación para fortalecer su rol en las organizaciones sociales, dando cuenta de los procesos relacionados con las representaciones sociales de las lideresas sobre la contaminación minera y como éstas se conducen en los conflictos socioambientales.",
                "observaciones": "Casos en Cajamarca, Celendín y Hualgayoc, provincias de Cajamarca."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Bascuas, Maisa; Roco Sanfilippo, Josefina; Piris, Silvia; Cabrera, Melissa; Ortega, Naroa y Pérez, Zaloa.",
                "titulo": "Construir, cuidar, habitar: Prácticas feministas en organizaciones de la economía solidaria.",
                "referencia": "2019. Papeles de Economía Solidaria N° 6. Bilbao: Redes de Economía Alternativa y Solidaria (Reas) Euskadi. 44 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary/attachments/Papeles%2006%20cas%20def.pdf",
                "resumen_comentario": "Experiencias de economía popular en puente con la economía feminista y un marco para la construcción de organizaciones en las que se trata de identificar y transformar las dinámicas heteropatriarcales y productivistas, para lo cual se presentan diversas herramientas y dispositivos puestas en práctica en la Economía Social y Solidaria."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Beghini, Valentina; Cattaneo, Umberto y Pozzan, Emanuela.",
                "titulo": "Un paso decisivo hacia la igualdad de género: En pos de un mejor futuro del trabajo para todos.",
                "referencia": "2019. Ginebra: Organización Internacional de Trabajo. 135 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_725969.pdf",
                "resumen_comentario": "Pone de manifiesto las principales diferencias de género y obstáculos que encuentran las mujeres para acceder al trabajo decente. Analiza los obstáculos estructurales –incluido el cuidado no remunerado– para la participación de las mujeres en el empleo remunerado, y la manera en que las leyes, políticas y prácticas de algunos países los han abordado, así como la necesidad de un enfoque multidimensional y las medidas que deberían adoptarse.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Belser, Patrick; Vázquez Álvarez, Rosalía y Xu, Ding.",
                "titulo": "Informe mundial sobre salarios 2018/19: ¿Qué hay detrás de la brecha salarial de género?",
                "referencia": "2019. Organización Internacional del Trabajo (OIT). Ginebra: Oficina Internacional del Trabajo, OIT. 191 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_712957.pdf",
                "resumen_comentario": "Ofrece una evaluación detallada de las desigualdades de remuneración por razón de género para entender mejor la brecha salarial como un tipo de desigualdad inaceptable en el mundo laboral, así como datos comparativos e información sobre las tendencias salariales mundiales y regionales.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Benavente, María Cristina y Valdés Barrientos, Alejandra.",
                "titulo": "Planes de igualdad de género en América Latina y el Caribe: Mapas de ruta para el desarrollo.",
                "referencia": "2019. Observatorio de Igualdad de Género en América Latina y el Caribe. Estudios Nº 1. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 87 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/41014/6/S1801212_es.pdf",
                "resumen_comentario": "Presenta una revisión y análisis de los procesos de diseño de los planes de igualdad de género vigentes en los países de América Latina y el Caribe, desde los elaborados en la década de 1990 hasta el presente siglo. Estos instrumentos constituyen verdaderos mapas de ruta de los Estados hacia la igualdad de género y la garantía de los derechos de las mujeres en la región, y permiten la generación de sinergias entre los planes de igualdad y los instrumentos de planificación para el desarrollo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Benavente Riquelme, María Cristina y Valdés B., Alejandra.",
                "titulo": "Políticas públicas para la igualdad de género: Un aporte a la autonomía de las mujeres.",
                "referencia": "2014. Agencia Española de Cooperación Internacional para el Desarrollo (Aecid) Libros de la Cepal N° 130. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 137 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/37226/6/S1420372_es.pdf",
                "resumen_comentario": "Expone el marco conceptual, la noción de justicia y su relación con la igualdad de género, y describe las políticas de siete países de América Latina, ordenadas según su relación con la autonomía física, económica y en la toma de decisiones, planteando algunas conclusiones y desafíos futuros.",
                "observaciones": "Casos de Brasil, Uruguay, Colombia, Bolivia, Costa Rica, Chile y México."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Betancourt Gallegos, Viviana.",
                "titulo": "Identidades y género: El valor de las mujeres en el desarrollo territorial.",
                "referencia": "2016. División de Políticas y Estudios, Subsecretaría de Desarrollo Regional y Administrativo, Gobierno de Chile. 40 pp.",
                "link": "http://www.subdere.gov.cl/sites/default/files/documentos/identidades_y_genero3.pdf",
                "resumen_comentario": "Muestra que las mujeres son un motor importante para los procesos de crecimiento respetuosos con el medio ambiente social y natural, relevando el valor de lo femenino para el desarrollo territorial. Realiza un recorrido por la teoría y las experiencias a fin de establecer aprendizajes replicables, desde la perspectiva de la descentralización y el desarrollo sustentable de los territorios."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Blanco, Lara y Jaime, Engell.",
                "titulo": "Transversalización de género en los Objetivos de Desarrollo Sostenible, Agenda 2030.",
                "referencia": "2017. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres). Panamá: Oficina Regional para las Américas y el Caribe de Onu Mujeres. 52 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2018/1/50969%20%20un%20women%20gender%20perspective%20on%20sdg%20item%202webcompressed.pdf?la=es&vs=729",
                "resumen_comentario": "Las estadísticas con enfoque de género son la base de las políticas públicas y permiten monitorear y evaluar su efectividad y eficiencia en la búsqueda de igualdad de género. Se relacionan transversalmente con todos los campos de la Agenda 2030 y este documento tiene el propósito de facilitar el trabajo de las personas que realizan seguimiento a los ODS."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Campos, Celsy.",
                "titulo": "Políticas y experiencias territoriales relevantes para el empoderamiento de las mujeres rurales en Paraguay: Un análisis desde el enfoque territorial.",
                "referencia": "2016. Centro Latinoamericano para el Desarrollo Rural (Rimisp). Asunción: Onu Mujeres en Paraguay. 166 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/imagenes/publicaciones/2017/05/territorio%20y%20gen%20paraguay%20rimispweb.pdf?la=es&vs=1317",
                "resumen_comentario": "Identifica, desde la perspectiva del enfoque territorial, experiencias de empoderamiento de las mujeres campesinas e indígenas, así como las fortalezas y oportunidades que se generan. Plantea que organizaciones acompañen este proceso para tener espacios de incidencia política en sus territorios y muestra a los gobiernos locales, oportunidades de generar procesos participativos y de actuar como agentes facilitadores de los capitales y activos para que las comunidades rurales se desarrollen.",
                "observaciones": "Estudios de caso de experiencias territoriales de mujeres rurales e indígenas en Paraguay."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Care y Onu Mujeres.",
                "titulo": "Análisis rápido de género para la emergencia de Covid-19 en América Latina y El Caribe.",
                "referencia": "2020. Care; Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres). 64 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/05/_lac%20report_spanish%20final%20jun2-comprimido.pdf?la=es&vs=143",
                "resumen_comentario": "América Latina y El Caribe registran los niveles de desigualdad más altos del mundo, con amplias brechas. La desigualdad de género persistente en la región complica la respuesta a la Covid-19, debido a la vulnerabilidad de las mujeres por los impactos en la salud y económicos de la pandemia, la pobreza y los empleos informales y precarios para generar ingresos. La respuesta a la crisis en los países de ALC ha sido variada y una vez que suspendan los confinamientos, será esencial que los actores humanitarios y encargados de formular políticas se aseguren de incluir la perspectiva de género en el plan de recuperación."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Carvajal, Laura María.",
                "titulo": "Extractivismo en América Latina: Impacto en la vida de las mujeres y propuestas de defensa del territorio.",
                "referencia": "2016. Iniciativa Colaborativa Mujeres, Territorio y Medio Ambiente. Bogotá: Fondo de Acción Urgente de América Latina y El Caribe. 57 pp.",
                "link": "https://cpalsocial.org/documentos/355.pdf",
                "resumen_comentario": "Busca visibilizar la labor de las mujeres en la protección de la naturaleza, y advertir las tendencias extractivas en la región que las ponen en riesgo. Muestra el modelo y los conflictos socioambientales que genera; legislaciones favorables a las industrias extractivas; la militarización de los territorios y las vulneraciones a los derechos de las mujeres. Presenta las propuestas de defensa del territorio desde las mujeres, resaltando la diversidad de enfoques, formas organizativas y de acción que han desarrollado en América Latina, llamando la atención sobre la insostenibilidad del modelo actual y la necesidad de transitar hacia un futuro posextractivista."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Casas Varez, Marina.",
                "titulo": "La transversalización del enfoque de género en las políticas públicas frente al cambio climático en América Latina.",
                "referencia": "2017. Organización de las Naciones Unidas (Onu). 102 pp. ",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/41101/1/S1700115_es.pdf",
                "resumen_comentario": "Identifica la relevancia del género en las causas y consecuencias del cambio climático; muestra resultados que agravan las desigualdades de género que existen históricamente en la sociedad; y pone en evidencia los impactos diferenciados de los efectos del calentamiento global en hombres y mujeres. Plantea políticas públicas de adaptación y mitigación frente al cambio climático que reconozcan las diferentes necesidades de ambos géneros, y la dimensión transversal del enfoque de género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Castillo, Mario.",
                "titulo": "La autonomía de las mujeres en escenarios económicos cambiantes.",
                "referencia": "2019. Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 224 pp. ",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/45032/S1900723_es.pdf?sequence=4",
                "resumen_comentario": "Evalúa los avances hacia mayores niveles de igualdad de género y autonomía de las mujeres, y analiza los procesos de globalización económica, la revolución digital, la economía del cuidado y el cambio climático, así como sus efectos en la vida de las mujeres en un contexto económico cambiante. Con políticas públicas adecuadas, ello puede ser una oportunidad hacia otro estilo de desarrollo con igualdad de género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Castro, Antonieta; Porras, Carolina y Ranaboldo, Claudia.",
                "titulo": "Género, participación y desarrollo territorial: Fichas bibliográficas.",
                "referencia": "2008. Instituto Internacional de Investigaciones y Capacitación de las Naciones Unidas para la Promoción de la Mujer (UN-Instraw). Santiago de Chile: Centro Latinoamericano para el Desarrollo Rural (Rimisp). 139 pp.",
                "link": "http://rimisp.org/wp-content/files_mf/137167110813663829302008_ranaboldo_porras_castro_genero_desarrollo_territorial_vfinal_N5.pdf",
                "resumen_comentario": "Presenta una revisión de bibliografía de experiencias de cinco países, sistematización, análisis y aportes conceptuales y metodológicos, relacionados con la gobernabilidad y la participación política de la mujer en el ámbito local, el desarrollo territorial rural con identidad cultural, y las dinámicas territoriales rurales y la dimensión de género.",
                "observaciones": "Documento de trabajo Nº 5. Fichas bibliográficas de Bolivia, Ecuador, Colombia, Perú y Guatemala."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Centro Latinoamericano para el Desarrollo Rural (Rimisp).",
                "titulo": "Género y territorio: Pobreza y desigualdad. Informe Latinoamericano 2015.",
                "referencia": "2016. Fondo Internacional de Desarrollo Agrícola (Fida); International Development Research Center (IDRC), Canadá. Santiago: Centro Latinoamericano para el Desarrollo Rural (Rimisp). 12 pp.",
                "link": "http://www.ruralcoop.cl/wp-content/uploads/2019/04/Genero-y-territorio.-sintesis-rimisp-esp-2015.pdf",
                "resumen_comentario": "Muestra que las posibilidades de asegurar la autonomía económica de las mujeres se distribuyen de manera desigual entre los distintos territorios al interior de los países, situación que afecta la calidad de vida de las mujeres que habitan esos territorios rezagados, y al conjunto de los procesos de desarrollo de los países de la región.",
                "observaciones": "Resumen de informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Clacso, Grupo de trabajo “Cuidados y género”.",
                "titulo": "Los graves impactos que tiene la pandemia en las desigualdades de género en la región.",
                "referencia": "2020. En: Pensar la pandemia. Observatorio Social del Coronavirus. Buenos Aires: Clacso.",
                "link": "http://biblioteca.clacso.edu.ar/clacso/se/20200527073358/75-Grupo-de-Trabajo-CLACSO-Cuidados-y-genero.pdf",
                "resumen_comentario": "En situaciones de emergencia se visibiliza el valor de los cuidados para el sostenimiento de la vida, trabajo femeninizado que no sólo sobrecarga su labor sino que las deja expuestas al contagio y a la pérdida de empleo, entre otros.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "40 años de agenda regional de género.",
                "referencia": "2017. Santiago de Chile: Cepal. 148 pp.",
                "link": "https://cpalsocial.org/documentos/608.pdf",
                "resumen_comentario": "Después de cuatro décadas de un intercambio regional sobre la integración de la mujer en el desarrollo económico y social, este espacio promueve que las demandas sociales por los derechos de las mujeres y la igualdad de género sean compromisos gubernamentales, y se reconozca el aporte de las mujeres a la sociedad y los obstáculos que enfrentan para mejorar su situación.",
                "observaciones": "Contiene gráficos, diagramas y mapas."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "Estrategia de Montevideo para la Implementación de la Agenda Regional de Género en el Marco del Desarrollo Sostenible hacia 2030.",
                "referencia": "2017. Comisión Económica para América Latina y el Caribe (Cepal); Gobierno del Uruguay. 44 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/41011/1/S1700035_es.pdf",
                "resumen_comentario": "La Estrategia de Montevideo es un compromiso político regional que busca guiar la implementación de los acuerdos de la Conferencia Regional sobre la Mujer de América Latina y el Caribe, nominada Agenda Regional de Género, y asegurar que sean la hoja de ruta para alcanzar la Agenda 2030 para el Desarrollo Sostenible a nivel regional desde la perspectiva de la igualdad de género, autonomía y derechos humanos de las mujeres.",
                "observaciones": "Aprobada en la XIII Conferencia Regional sobre la Mujer de América Latina y el Caribe. Montevideo, octubre de 2016."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Comisión Económica para América Latina y el Caribe (Cepal).",
                "titulo": "Informe regional sobre el examen de la Declaración y la Plataforma de Acción de Beijing en los países de América Latina y el Caribe a 25 años de su aprobación.",
                "referencia": "2019. Oficina Regional de las Américas y el Caribe de la Entidad de Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres). Santiago de Chile: División de Asuntos de Género de Cepal. 53 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/01/s1900912_es.pdf?la=es&vs=1103",
                "resumen_comentario": "Presenta los logros de ALC en la implementación de la Plataforma de Acción de Beijing, y los progresos en desarrollo inclusivo y erradicación de la pobreza; participación en la toma de decisiones; erradicación de la violencia; protección social; ambiente. Analiza los avances y desafíos en la aplicación de la Plataforma desde un enfoque de derechos, y en la implementación de la Agenda 2030 para el Desarrollo Sostenible.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Conceição, Pedro. (Autor principal)",
                "titulo": "Más allá del ingreso, más allá de los promedios, más allá del presente: Desigualdades del desarrollo humano en el siglo XXI. Panorama general.",
                "referencia": "2019. Informe sobre Desarrollo Humano 2019. Nueva York: Programa de las Naciones Unidas para el Desarrollo (PNUD). 46 pp.",
                "link": "http://hdr.undp.org/sites/default/files/hdr_2019_overview_-_spanish.pdf",
                "resumen_comentario": "Analiza el auge de una nueva generación de desigualdades. Junto a la reducción de la brecha —con un número sin precedentes de personas que consiguen huir de la pobreza y el hambre en todo el mundo—, se ve también que las capacidades de las personas para competir en el futuro han evolucionado. La desigualdad comienza en el nacimiento, define la libertad y las oportunidades de los niños, adultos, mujeres y personas mayores y se transmite a la siguiente generación; también las políticas para prevenirla pueden seguir el ciclo vital. Lo que ocurra después dependerá de las decisiones que tomemos.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Consejería Presidencial para la Equidad de la Mujer, Colombia.",
                "titulo": "Guía para la transversalidad del enfoque de género y derechos humanos de las mujeres en los planes de desarrollo a nivel territorial.",
                "referencia": "2016. Consejería Presidencial para la Equidad de la Mujer, Gobierno de Colombia. 12 pp.",
                "link": "http://www.equidadmujer.gov.co/oag/Documents/Gu%C3%ADa-transversalidad-enfoque-g%C3%A9nero-y-derechos-humanos-mujeres.pdf",
                "resumen_comentario": "Dirigida a autoridades territoriales para que incluyan acciones en los planes de desarrollo encaminadas a logar condiciones de igualdad efectiva entre mujeres y hombres, promoviendo la equidad de género a través del mecanismo de género, el fortalecimiento de las comisarías de familia para atender la violencia intrafamiliar, la creación de casas refugio, y procesos de formación, capacitación y fortalecimiento de la participación social y política de las mujeres.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Cortínez O’Ryan, Valentina.",
                "titulo": "Igualdad de género para el desarrollo territorial: Experiencias y desafíos para América Latina.",
                "referencia": "2016. Santiago: Rimisp, Centro Latinoamericano para el Desarrollo Rural. 22 pp.",
                "link": "http://www.rimisp.org/wp-content/files_mf/1466786058Igualdad_de_genero_para_el_desarrollo_territorial.pdf",
                "resumen_comentario": "Para lograr un desarrollo territorial dinámico, inclusivo y sostenible, es necesario valorar una amplia gama de actividades productivas y reproductivas en el territorio, así como a quienes las realizan, lo que significa, entre otros, abrir espacios para una mayor participación de las mujeres e incentivar su acceso a los canales de influencia y diálogo, como también a los activos que necesitan para contribuir mejor a este tipo de dinámicas territoriales.",
                "observaciones": "Serie Documentos de trabajo Nº 180. Grupo de Trabajo: Inclusión Social y Desarrollo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Chin, Keric.",
                "titulo": "El poder de las adquisiciones: Cómo adquirir productos y servicios de empresas que son propiedad de mujeres. Una guía sobre adquisiciones con perspectiva de género para las empresas.",
                "referencia": "2017. Onu Mujeres, Sección de Empoderamiento Económico. Montevideo: Onu Mujeres, Uruguay. 106 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2018/12/el%20poder%20de%20las%20adquisicioneswebcompressed.pdf?la=es&vs=4021",
                "resumen_comentario": "Promueve que las empresas incluyan la perspectiva de género en la compra y venta de productos, y la contratación de proveedores y emprendedoras. Si bien esto ya ha sido asumido por grandes cadenas como parte de su responsabilidad social, las empresas lideradas por mujeres aún no se posicionan en el mercado. Presenta información sobre las brechas que continúan rezagando a la mujer en la actividad comercial, y datos que evidencian los beneficios obtenidos por empresas que han tenido prácticas con perspectiva de género, ofreciendo consejos de cómo apoyar a dichas empresas.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Deere, Carmen Diana; Lastarria-Cornhiel, Susana y Ranaboldo, Claudia.",
                "titulo": "Tierra de mujeres: Reflexiones sobre el acceso de las mujeres rurales a la tierra en América Latina.",
                "referencia": "2011. La Paz: Coalición Internacional para el Acceso a la Tierra. 116 pp.",
                "link": "http://rimisp.org/wp-content/files_mf/1377805458tierramujeresreflexionesaccesotierraenamericalatina.pdf",
                "resumen_comentario": "Se dialoga sobre derechos a la tierra por parte de las mujeres dentro de territorios comunales, y la escasez de datos estadísticos discriminados por género sobre la distribución y el uso de la propiedad agraria en países latinoamericanos. También presenta una mirada más amplia a esta problemática, desde la perspectiva del desarrollo rural territorial."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Delgado, Deborah y Martínez, Vania.",
                "titulo": "En un ambiente tóxico: Ser madres después de un derrame de petróleo.",
                "referencia": "2020. Oxfam Internacional. Buenos Aires: Clacso. 80 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/En-un-ambiente-t%C3%B3xico.pdf",
                "resumen_comentario": "Documenta los procesos de cambio sufridos por la comunidad kukama de Cuninico (Loreto), tras el derrame de petróleo en 2014, y en especial del impacto diferencial de este desastre en las madres de la comunidad, que produjo carencia de agua limpia, perjuicio a la pesca (principal actividad de la comunidad) y a la soberanía alimentaria, crisis económica y afectación a la salud (como la salud reproductiva).",
                "observaciones": "Clacso, Grupo de Trabajo “Territorialidad en disputa”."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Departamento Nacional de Planeación (DNP) de Colombia.",
                "titulo": "Resumen de lineamientos estratégicos para la inclusión de la equidad de género para las mujeres en los planes de desarrollo territorial.",
                "referencia": "s/f. Bogotá: Departamento Nacional de Planeación (DNP) de Colombia. 7 pp.",
                "link": "https://colaboracion.dnp.gov.co/CDT/Desarrollo%20Social/Resumen%20lineamientos.pdf",
                "resumen_comentario": "Las políticas y acciones que pueden plantearse en el Plan de Desarrollo Territorial (PDT) impactan de manera diferente a hombres y mujeres, y las necesidades de unas y otros pueden ser distintas, por lo que es importante tener en cuenta la perspectiva de género a lo largo de todo el Plan, cuestionando si el diagnóstico es igual para mujeres que para hombres, así como las necesidades y posibles dificultades que tiene cada uno frente a una problemática específica como salud, educación, servicios públicos, etc.",
                "observaciones": "Resumen."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "De Schutter, Olivier.",
                "titulo": "Los derechos de la mujer y el derecho a la alimentación.",
                "referencia": "2012. Asamblea General de las Naciones Unidas. Informe presentado al Consejo de Derechos Humanos. 22 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/G%C3%A9nero%20y%20DA.pdf",
                "resumen_comentario": "Examina los factores que amenazan el derecho de las mujeres a la alimentación e identifica las esferas de actuación prioritaria, así como los obstáculos que dificultan el acceso de las mujeres al empleo, la protección social y los recursos para producir y procesar alimentos y desarrollar la cadena de valor. Pide a los Estados que incluyan las necesidades de las mujeres y niñas en sus estrategias de seguridad alimentaria, y transformen la división de funciones existente basada en el género.",
                "observaciones": "Informe del Relator Especial sobre el derecho a la alimentación, Olivier De Schutter."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "D’Souza, Asha y Van Klaveren, Annie.",
                "titulo": "Guía para la incorporación de la perspectiva de género en las estrategias de desarrollo económico local.",
                "referencia": "2010. Ginebra: Programa de Desarrollo Económico Local, Oficina para la Igualdad de Género, Organización Internacional del Trabajo (OIT). 50 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---gender/documents/publication/wcms_145711.pdf",
                "resumen_comentario": "Busca ayudar a los profesionales del desarrollo económico local –personal de organizaciones internacionales, organismos internacionales de desarrollo y autoridades locales– a precisar las necesidades y prioridades, en ocasiones disímiles, de los hombres y las mujeres; a facilitar la plena participación de ambos en el proceso de desarrollo económico local; y a lograr los objetivos y resultados relacionados con la igualdad de género.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Durand, Anahí; Hernández Asensio, Raúl y Zárate, Patricia.",
                "titulo": "Enfoque territorial para el empoderamiento de la mujer rural: Perú.",
                "referencia": "2015. Centro Latinoamericano para el Desarrollo Rural (Rimisp); Fondo Internacional para el Desarrollo Agrícola (Fida); ONU Mujeres. Lima: Programa Nuevas Trenzas Mujeres Rurales Jóvenes del Siglo XXI, Instituto de Estudios Peruanos (IEP).  80 pp.",
                "link": "https://repositorio.iep.org.pe/bitstream/IEP/1118/1/Durand-Anahi_Hernandez-Raul_Zarate-Patricia_Enfoque-territorial-empoderamiento-mujer-rural-Peru.pdf",
                "resumen_comentario": "A partir del análisis comparativo de estudios en cuatro países, se desarrolla la iniciativa de generar aprendizajes sobre el enfoque territorial para el empoderamiento de las mujeres en el ámbito rural para terminar con el hambre y la pobreza, y contribuir con propuestas para políticas públicas más efectivas e integradas referidas a los enfoques de género y de desarrollo territorial en América Latina.",
                "observaciones": "Informe de consultoría. Casos de Colombia, Chile, Guatemala y Perú."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fernández, Ignacia; Fernández, Juan; Albacete, Miguel y Castillo, Daniela.",
                "titulo": "Juventud rural y territorio: Informe latinoamericano sobre pobreza y desigualdad 2019.",
                "referencia": "2020. Santiago: Rimisp, Centro Latinoamericano para el Desarrollo Rural. 272 pp.",
                "link": "https://rimisp.org/informelatinoamericano/wp-content/uploads/2020/04/Rimisp-Informe-Latam-2019.pdf",
                "resumen_comentario": "Aborda los desafíos de equidad territorial que enfrenta la Agenda 2030, con énfasis en la juventud rural y la desigualdad territorial, mostrando los territorios rezagados en América Latina, las brechas territoriales y las dinámicas territoriales que favorecen la inclusión económica de los jóvenes.",
                "observaciones": "Revisa las brechas territoriales para el cumplimiento de los ODS y estudios de caso en México, El Salvador, Colombia, Ecuador, Perú, Bolivia y Chile."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Fondo Internacional de Desarrollo Agrícola (Fida).",
                "titulo": "Informe de género e inclusión social: Región andina.",
                "referencia": "2020. Roma: Fondo Internacional de Desarrollo Agrícola (Fida). 12 pp.",
                "link": "https://www.ifad.org/documents/38714170/41801153/genderbrief_andina.pdf/b25f2526-dca7-7b62-4731-e80f826133a2",
                "resumen_comentario": "La desigualdad de género persiste en los países andinos, a pesar de sus esfuerzos por mejorar. Aunque la mayoría muestra desarrollo humano por encima de la media, tienen retos que aún siguen vigentes, y enfrentan dificultades para alcanzar la igualdad de género, la salud reproductiva, el empoderamiento y el ingreso al mercado laboral.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Foti Laxalde, Marìa del Pilar y Caracciola Basco, Mercedes.",
                "titulo": "Capital social, economía solidaria y desarrollo territorial sostenible: El caso de las mujeres de la Federación de Cooperativas de Trabajo, Textiles del Sudeste, (Fecosud), Argentina.",
                "referencia": "2004. Cuaderno técnico de desarrollo rural Icca Nº 27. San José de Costa Rica: Instituto Interamericano de Cooperación para la Agricultura (IICA). 58 pp.",
                "link": "http://repositorio.iica.int/bitstream/handle/11324/7184/BVE18040242e.pdf;jsessionid=1A1322BBDAC6BC6C4F468B3CFC04A7F6?sequence=1",
                "resumen_comentario": "Propone un marco interpretativo y extrae algunas conclusiones para impulsar el desarrollo territorial sostenible con perspectiva de género, a partir de una experiencia, buscando promover la ampliación del capital social para conformar economías de escala que favorecieran una mayor competitividad en los mercados, y contribuir al desarrollo territorial mediante el trabajo mancomunado del municipio y las organizaciones de la sociedad.",
                "observaciones": "Caso en el municipio de Benito Juárez, provincia de Buenos Aires, Argentina."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Franchi, Valentina; Safa Barraza, Alejandra y Laub, Regina.",
                "titulo": "Desarrollo de cadenas de valor sensibles al género: Directrices para profesionales.",
                "referencia": "2020. Roma: Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). 116 pp.",
                "link": "http://www.fao.org/3/i9212es/I9212ES.pdf",
                "resumen_comentario": "Ayuda a diseñar intervenciones que brinden a mujeres y hombres las mismas oportunidades de beneficiarse del desarrollo de la cadena de valor agroalimentaria, ofreciendo herramientas prácticas y ejemplos de enfoques que fomentan una integración más sistemática de las diferentes dimensiones de la igualdad de género en las intervenciones de la cadena de valor en el sector agrícola y mejorar el impacto social de las mismas."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gabbert, Karin y Lang, Miriam. (Editoras)",
                "titulo": "¿Cómo se sostiene la vida en América Latina?: Feminismos y re-existencias en tiempos de oscuridad.",
                "referencia": "2019. Grupo Permanente de Trabajo sobre Alternativas al Desarrollo; Fundación Rosa Luxemburg, Oficina de la Región Andina. Quito: Ediciones Abya-Yala. 424 pp.",
                "link": "https://www.rosalux.org.ec/pdfs/como-se-sostiene-la-vida-en-america-latina.pdf",
                "resumen_comentario": "En América Latina, las alternativas civilizatorias se están cultivando en muchos escenarios, sosteniendo la vida en múltiples sentidos en contra de los modelos de desarrollo capitalistas y patriarcales que la destruyen. El desafío está en visibilizarlas, conectarlas y vigorizarlas, en condiciones hoy mucho más desfavorables, por lo que tienen que ser reconstruidas para responder al contexto de crisis global."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "García Cores, Arsenio.",
                "titulo": "Estándares de protección de derechos humanos de las mujeres: Herramientas necesarias para la defensa de su participación política.",
                "referencia": "2020. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres); Comisión Interamericana de Mujeres de la Oea (Cim / Oea). 142 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/08/estandares%20de%20proteccion%20de%20ddhh%20de%20las%20mujeres-comprimido.pdf?la=es&vs=1859",
                "resumen_comentario": "Compila analítica y conceptualmente la interrelación de resoluciones y sentencias de casos paradigmáticos que se han resuelto en el ámbito internacional. Así, la sociedad civil, los movimientos de mujeres y las entidades gubernamentales pueden darle a esta guía un uso estratégico para la prevención y atención de la violencia política contra las mujeres.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "García Q., Ana Isabel y Gomáriz M., Enrique.",
                "titulo": "La perspectiva de género y mujeres rurales en las estrategias y políticas de desarrollo territorial sostenible.",
                "referencia": "2004. Cuaderno Técnico Nº 24. San José de Costa Rica: Instituto Interamericano de Cooperación para la Agricultura (IICA). 39 pp.",
                "link": "http://repositorio.iica.int/bitstream/handle/11324/7181/BVE18040239e.pdf?sequence=1",
                "resumen_comentario": "Busca integrar las propuestas de desarrollo rural y de enfoque de género desde la visión territorial y de cambio de los roles tradicionalmente establecidos en el campo. Realiza un balance comparado de las políticas públicas para la equidad de género en países de la región, y plantea la integración de las mujeres rurales en la acción pública, en la perspectiva territorial del desarrollo rural.",
                "observaciones": "Cuaderno técnico."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Giuria El Helou, María Magdalena y Botta Areal, Macarena.",
                "titulo": "Mapeo y evaluación de herramientas existentes para la promoción del comercio entre mujeres empresarias y emprendedoras.",
                "referencia": "2020. Organización Internacional del Trabajo (OIT); Unión Europea (UE). Montevideo: Proyecto Ganar ganar, Onu Mujeres. 157 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/08/mapeo%20herramientas%20-%20julio%202020-comprimido.pdf?la=es&vs=3025",
                "resumen_comentario": "Los datos siguen mostrando brechas en la cantidad de emprendedoras y empresarias, barreras que enfrentan y el aprovechamiento de programas disponibles, por lo que conocer las herramientas para el desarrollo de oportunidades de comercio para las mujeres es fundamental. Se presenta las herramientas para la promoción del comercio de mujeres empresarias y emprendedoras, el acceso a las mismas, su utilización, así como las oportunidades y barreras que tienen."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Gonzáles Malca, Gabriela.",
                "titulo": "Mujeres indígenas peruanas frente a la crisis climática.",
                "referencia": "2019. Organización Nacional de Mujeres Indígenas Andinas y Amazónicas del Perú (Onamiap). Lima: Oxfam Perú. 12 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Mujeres-Indi%CC%81genas-peruanas-frente-a-la-crisis-clima%CC%81tica.pdf",
                "resumen_comentario": "Reflexión sobre el proceso de fortalecimiento, involucramiento y participación de las mujeres indígenas en la agenda climática, y su participación en el debate e influencia para generar políticas más efectivas frente a las amenazas climáticas, tomando en cuenta sus aportes, conocimientos y prácticas ancestrales.",
                "observaciones": "Basado en informe “Estudio de caso sobre la evolución y apropiación del tema de cambio climático por las mujeres de ONAMIAP”."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hernández Asensio, Raúl.",
                "titulo": "Nuevas (y viejas) historias sobre las mujeres rurales jóvenes de América Latina.",
                "referencia": "2012. Programa Nuevas Trenzas. Lima: Instituto de Estudios Peruanos (IEP). 42 pp.",
                "link": "https://repositorio.iep.org.pe/bitstream/IEP/929/2/hernandez_nuevasyviejas.pdf",
                "resumen_comentario": "Busca generar conocimiento sobre quiénes son hoy en día las mujeres rurales jóvenes de América Latina, trabajando a partir del análisis de su situación en seis países de la región. El objetivo es propiciar políticas de desarrollo rural que cuenten en su diseño y ejecución con información concreta, contrastada y actualizada sobre las mujeres rurales jóvenes, dejando los tópicos y las visiones estereotipadas sobre este colectivo.",
                "observaciones": "Casos en Colombia, Ecuador, El Salvador, Guatemala, Nicaragua y Perú."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hernández Breña, Wilson. (Editor)",
                "titulo": "Violencia contra las mujeres: La necesidad de un doble plural.",
                "referencia": "2019. Lima: Grupo de Análisis para el Desarrollo (Grade). 475 pp.",
                "link": "http://www.grade.org.pe/wp-content/uploads/LibroGRADEViolenciaSMujereS.pdf",
                "resumen_comentario": "Reúne diversas disciplinas, unidas por hilos conductores que señalan como responsables de la violencia contra las mujeres tanto a la estructura como a los individuos, así como a la presencia de patrones sexistas (percepciones, actitudes y conductas de hombres y mujeres, instituciones y espacios). Concluye que a ese doble plural de culpables de la violencia es al que debemos apuntar a eliminar y al que este texto pretende contribuir."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Hopp, Malena Víctoria; Maldovan Bonelli, Johanna; Frega, Mariana y Trajtemberg, Agustina.",
                "titulo": "Trabajo, género y desigualdades en la economía popular: Una mirada sobre la situación de los vendedores/as callejeros en tiempos de pandemia.",
                "referencia": "2020. Sociología del trabajo. Estudios culturales. Narrativas sociológicas y literarias. En: Trabajo y sociedad N°35. Vol. XXI. Santiago del Estero: Núcleo Básico de las Revistas Científicas Argentinas (Caicyt-Conicet). 19 pp.",
                "link": "https://ri.conicet.gov.ar/bitstream/handle/11336/109719/CONICET_Digital_Nro.e5e3327e-e729-48a2-9a35-55a1bffa28ce_A.pdf?sequence=2&isAllowed=y",
                "resumen_comentario": "Propone abordar la particular situación en la que se encuentran las vendedoras callejeras de la Ciudad Autónoma de Buenos Aires, considerando las dimensiones que permiten comprender las condiciones de (re)producción y profundización de las desigualdades en tiempos de crisis: el género y el acceso a las políticas públicas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Huaita, Marcela; Chanjan, Rafael y Saravia, María Alejandra.",
                "titulo": "Género y corrupción: Una mirada a los impactos diferenciados de la corrupción en el Perú.",
                "referencia": "2019. Instituto de Democracia y Derechos Humanos, Pontificia Universidad Católica del Perú (IDEHPUCP). 106 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2019/12/03211052/libro-para-web.pdf",
                "resumen_comentario": "Aborda el impacto diferenciado que la corrupción produce entre mujeres y varones, en especial en relación con situaciones de violencia contra la mujer (chantaje sexual y trata de personas), construyendo un diagnóstico sobre el acceso a la justicia por parte de las mujeres, con énfasis en los delitos de violencia de género y la trata de personas.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Instituto de Democracia y Derechos Humanos, Pontificia Universidad Católica del Perú (IDEHPUCP).",
                "titulo": "Re-pensando el género.",
                "referencia": "2017. Lima: Pontificia Universidad Católica del Perú (PUCP). 55 pp.",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/110624/2017-Relator%c3%adas%20XIII%20Encuentro%20repensando%20el%20g%c3%a9nero.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Se plantea la necesidad de visibilizar la historia de lucha que inicialmente lideró el movimiento feminista, las distintas formas de concebir el tema de género, y las subjetividades que supone el hecho de la diversidad sexual y la pluralidad cultural, así como un análisis sobre los altos índices de feminicidio y violencia contra la mujer.",
                "observaciones": "XIII Encuentro de Derechos Humanos."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jaramillo, Miguel y Ñopo, Hugo.",
                "titulo": "Impacto de la epidemia del coronavirus en el trabajo de las mujeres.",
                "referencia": "2020. Programa de las Naciones Unidas para el Desarrollo (PNUD). Lima: Ministerio de la Mujer y Poblaciones Vulnerables.  75 pp.",
                "link": "http://www.mimp.gob.pe/files/Impactos-de-la-epidemia-del-coronavirus-en-el-trabajo-de-las-mujeres-en-el-Peru.pdf",
                "resumen_comentario": "Aun cuando a corto (cuarentena para todos, menos actividades esenciales) y mediano plazo (reinicio de actividad productiva), el impacto de la epidemia es similar para hombres y mujeres, sin embargo, afecta en forma distinta a los grupos vulnerables, incluidas las mujeres en el entorno urbano y rural, con varios hijos, del trabajo agrícola, comercio y servicios, y en el sector informal. Identifica políticas para mejorar la empleabilidad de las mujeres, sugiriendo su monitoreo efectivo, así como la atención contra la violencia doméstica.",
                "observaciones": "Sobre Covid-19 y trabajo femenino."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Jave, Iris.",
                "titulo": "Guía para campañas electorales: Narrativas desde las mujeres indígenas.",
                "referencia": "2018. Instituto de Democracia y Derechos Humanos, Pontificia Universidad Católica del Perú (IDEHPUCP); Konrad-Adenauer-Stiftung (Kas); Organización Nacional de Mujeres Indígenas, Andinas y Amazónicas del Perú (Onamiap). Lima: Pontificia Universidad Católica del Perú (PUCP). 38 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2018/10/11222606/guia-mujeres.pdf",
                "resumen_comentario": "La participación de los pueblos indígenas en los asuntos públicos, particularmente de las mujeres indígenas, ha permitido conquistar espacios de intervención desde sus propias organizaciones a partir de la construcción de una agenda propia, en las que sus demandas adquieren mayor visibilización La Guía tiene como finalidad aportar herramientas prácticas a las mujeres indígenas, andinas y amazónicas que participan en política y que aspiran a diferentes cargos de representación a nivel local, regional y nacional, a partir de sus experiencias y trayectorias.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Laguna Morales, Marcela.",
                "titulo": "Manual y caja de herramientas de perspectiva de género para talleres comunitarios.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao). México: Secretaría de Agricultura, Ganadería, Desarrollo Rural, Pesca y Alimentación. 134 pp.",
                "link": "http://www.fao.org/3/i9926es/I9926ES.pdf",
                "resumen_comentario": "Material de autoinstrucción para que, a través de un proceso de lectura y, en lo posible, haber participado en las sesiones, cada promotor de campo prepare sus materiales y pueda planear un taller y facilitarlo a nivel comunitario, utilizando las dinámicas de integración que mejor se adapten al contexto, buscando aportar al desarrollo y empoderamiento de la comunidad y de las mujeres rurales.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lalich Li, Adriana. (Coord.)",
                "titulo": "El futuro del valle se construye en femenino.",
                "referencia": "2019. Mujeres del agua: Arequipa. Ministerio de Cultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 20 pp.",
                "link": "http://repositorio.ana.gob.pe/handle/20.500.12543/3810",
                "resumen_comentario": "Historias que muestran el liderazgo que las mujeres ejercen en la promoción de la cultura del agua, los procesos de renovación de las organizaciones de usuarios de agua y su participación en las instituciones relacionadas con la gobernanza del agua. Pone en valor la participación de los hombres y las mujeres en la gestión integrada de los recursos hídricos.",
                "observaciones": "Testimonios de usuarios –mujeres y hombres– que forman parte de diferentes juntas y comisiones de la cuenca Quilca-Chili, en Arequipa en el sur del Perú."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lalich Li, Adriana. (Coord.)",
                "titulo": "La “batalla” por el agua se juega en la cancha.",
                "referencia": "2019. Mujeres del agua: Tarapoto. Ministerio de Cultura y Riego. Lima: Autoridad Nacional del Agua (ANA). 20 pp.",
                "link": "http://repositorio.ana.gob.pe/bitstream/handle/20.500.12543/3642/ANA0002167.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Aprovechando el espíritu competitivo del presidente de su Junta –quien fue entrenador de un equipo de fútbol local–, la crónica está planteada en términos futbolísticos como un partido contra un rival complicado –la informalidad–, con un marcador en contra –la morosidad, la falta de compromiso y la baja educación–, que los usuarios vienen remontando con empuje y dedicación.",
                "observaciones": "Testimonios de usuarios –mujeres y hombres– que forman parte de organizaciones de la subcuenca del Bajo Mayo, en la región San Martín."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Larrañaga, Mertxe y Jubeto, Yolanda.",
                "titulo": "El desarrollo humano local: Aportes desde la equidad de género.",
                "referencia": "2011. Eusko Jaurlaritza, Gobierno Vasco. Cuadernos de Trabajo de Hegoa Nº 56. 64 pp.",
                "link": "http://publ.hegoa.efaber.net/uploads/pdfs/66/Cuadernos_Hegoa_56.pdf?1488539208",
                "resumen_comentario": "Aporta elementos para la mejora de la calidad de la cooperación desde el Desarrollo Humano Local (DHL) en proyectos llevados a cabo en Perú, Guatemala y Ecuador. Incide en la equidad de género y la participación popular, orientados al fomento de las capacidades para el bienestar de las personas, a partir de las visiones de quienes participaron en los proyectos."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "León Díaz, Nathaly.",
                "titulo": "Rutas especializadas para la formulación de los planes de desarrollo territoriales: Equidad de género.",
                "referencia": "s/f. Consejería Presidencial para la Equidad de la Mujer, Área de Política Pública y Plan para Garantizar una Vida Libre de Violencias. Departamento Nacional de Planeación, Colombia. 3 pp.",
                "link": "http://www.indepaz.org.co/wp-content/uploads/2017/12/11Rutas-Especializadas-Equidad-de-G%C2%AEnero.pdf",
                "resumen_comentario": "Presenta las políticas y lineamientos generales para que los gobiernos locales incluyan acciones de atención diferenciada para la protección de los derechos de las mujeres y problemas particulares como las dificultades para la generación de ingresos y empleo decente, altos niveles de violencia, baja participación política, y difícil acceso a la salud sexual y reproductiva, entre otros.",
                "observaciones": "Cartilla."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Lívano Herrera, Ana.",
                "titulo": "Diagnóstico de género de la provincia de Huancavelica.",
                "referencia": "2019. Grupo Género y Economía; Bélgica, Socio para el desarrollo. Lima: Interactuando con Territorios Vivos. 49 pp.",
                "link": "https://www.eclosio.ong/wp-content/uploads/2019/04/ITV-GGE_Diagnostico_Genero_Huancavelica-2018-1.pdf",
                "resumen_comentario": "Reconoce el trabajo de las mujeres, su rol y aportes en la producción agropecuaria familiar; las dificultades y actividades que realizan para el bienestar de las familias campesinas y el desarrollo de sus comunidades. Se analiza información directa de las mujeres, sus organizaciones, y de algunas autoridades hombres de las comunidades, utilizando el análisis de brechas y sus causas, así como las potencialidades, para proponer algunos cambios para la región."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mendoza, Armando.",
                "titulo": "Mujer y desigualdades económicas.",
                "referencia": "2017. Lima: Oxfam Perú. 62 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Mujer%20y%20desigualdades%20econ%C3%B3micas.pdf",
                "resumen_comentario": "Describe algunas de las brechas económicas que ponen en desventaja a las mujeres en Perú. Tras década y media de crecimiento económico e incremento general de los ingresos laborales, una mujer trabajadora sigue ganando en promedio apenas dos tercios de lo que percibe un hombre, la misma que década y media atrás. Los avances alcanzados para garantizar sus derechos y oportunidades son insuficientes.",
                "observaciones": "Documento de trabajo N° 4."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mesa de Género en Acción Humanitaria de Redlac.",
                "titulo": "Claves de género para la respuesta ante emergencias sanitarias.",
                "referencia": "2020. Grupo Regional sobre Riesgos, Emergencias y Desastres para América Latina y El Caribe (Redlac). Guatemala: Mesa de Género en Acción Humanitaria de Redlac. 12 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/05/redlac%20claves%20basicas%20ante%20emergencias%20sanitarias%202020-7-comprimido.pdf?la=es&vs=440",
                "resumen_comentario": "Las emergencias sanitarias afectan de manera distinta a las mujeres, y reconocerlo asegura una respuesta humanitaria sensible al género. El Covid-19 tiene impactos severos en mujeres vulnerables, afectadas por esta emergencia con desigualdad, discriminación y vulneración de sus derechos, a lo que han respondido con resiliencia y recuperación. Deben ser involucradas en los planes de respuesta y en la toma de decisiones. Se indican acciones de género para los sectores humanitarios, útiles para la respuesta ante esta pandemia.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de Agricultura y Riego.",
                "titulo": "Diagnóstico para fortalecer la equidad de género en las juntas de usuarios. Arequipa.",
                "referencia": "s/f. Ministerio de Agricultura y Riego; Banco Mundial. 8 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/Diagnostico-para-fortalecer-la-equidad-de-genero-en-las-Juntas-de-Usuarios-Arequipa.pdf",
                "resumen_comentario": "Busca identificar las necesidades y demandas de las mujeres integrantes de las juntas de usuarios, analizar las causas que limitan la participación de las mujeres, y conocer las relaciones de género que se entablan en estas organizaciones. Plantea recomendaciones para promover participaciones más igualitarias en estas organizaciones y en el acceso a los recursos.",
                "observaciones": "Juntas de Usuarios del Colca (Arequipa)."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio del Ambiente.",
                "titulo": "Una misma mirada a partir de muchas voces: Proceso de elaboración del Plan de Acción en Género y Cambio Climático del Perú.",
                "referencia": "2016. Ministerio del Ambiente (Minam). Dirección General de Cambio Climático, Desertificación y Recursos Hídricos del Minam. 244 pp.",
                "link": "http://www.minam.gob.pe/cambioclimatico/wp-content/uploads/sites/11/2015/12/G%C3%A9nero-y-CC_FINAL-2016.compressed.pdf",
                "resumen_comentario": "Presenta el proceso de elaboración participativo del Plan de Acción en Género y Cambio Climático del Perú, que busca incorporar el enfoque de género en las acciones nacionales hacia un desarrollo sostenible bajo en carbono y resiliente al clima. Narra, asimismo, historias emblemáticas de mujeres y hombres que hacen frente al cambio climático y avanzan en la reducción de las brechas de género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ministerio de la Mujer y Poblaciones Vulnerables.",
                "titulo": "Plan Estratégico Multisectorial de Igualdad de Género de la Política Nacional de Igualdad de Género.",
                "referencia": "2020. Ministerio de la Mujer y Poblaciones Vulnerables (MIMP). 28 pp.",
                "link": "https://sinia.minam.gob.pe/normas/decreto-supremo-que-aprueba-plan-estrategico-multisectorial-igualdad",
                "resumen_comentario": "El Plan Estratégico Multisectorial de Igualdad de Género (Pemig) busca el trabajo articulado con las entidades responsables para alinear sus instrumentos de planificación, según cada nivel de gobierno, a los objetivos prioritarios, lineamientos y servicios dispuestos en la Política Nacional de Igualdad de Género; y ejecutar los servicios de acuerdo a ciertos estándares, así como su seguimiento y evaluación.",
                "observaciones": "Decreto Supremo N° 002-2020-MIMP, que aprueba el Pemig de la Política Nacional de Igualdad de Género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Molano Bravo, María Elvira.",
                "titulo": "Mujeres que cuidan la naturaleza: Relatos de defensoras del ambiente en Colombia.",
                "referencia": "2019. Fundación Natura. Bogotá, Colombia. 106 pp.",
                "link": "file:///C:/Users/Johana/Downloads/Mujeres%20que%20cuidan%20la%20naturaleza%20Relatos%20de%20defensoras%20del%20ambiente%20en%20Colombia.pdf",
                "resumen_comentario": "Busca hacer visible el trabajo y la perseverancia de las mujeres pioneras en materia ambiental en Colombia, desde múltiples espacios como las comunidades, la academia y las instituciones públicas, y mostrar la importancia del liderazgo de las mujeres para hacer frente al cambio climático y construir un planeta sostenible.",
                "observaciones": "Experiencias de líderes ambientalistas colombianas."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Montero, Ester; Chantre, Maialen y Viniegra, Jaxin.",
                "titulo": "Mujeres productoras y soberanía alimentaria en Navarra: Una mirada desde el género.",
                "referencia": "2017. Navarra: Mundubat, Mugarik Gabe Nafarroa e IPES. 28 pp.",
                "link": "https://www.economiasolidaria.org/sites/default/files/reaslibrary_attachments/Mujeres%20productoras%20y%20soberan%C3%ADa%20alimentaria%20en%20Navarra%2C%20una%20mirada%20desde%20el%20g%C3%A9nero.pdf",
                "resumen_comentario": "Gran parte de la problemática que afecta al sector es común a ambos géneros, pero existen especificidades para las mujeres productoras, que, además, arrastran una triple invisibilización histórica (por mujeres, por rurales y por agricultoras). Así, la estrategia de género hacia la soberanía alimentaria plantea la incorporación de las reflexiones ecofeministas.",
                "observaciones": "Documento basado en talleres con mujeres productoras."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Mor, Tzili.",
                "titulo": "Manual para incorporar la perspectiva de género en proyectos y programas transformadores de neutralidad en la degradación de tierras.",
                "referencia": "2020. Mecanismo Mundial de la Convención de las Naciones Unidas de Lucha contra la Desertificación (CLD); Onu Mujeres. Fondo para el Medio Ambiente Mundial (FMAM) y Unión Internacional para la Conservación de la Naturaleza (UICN). 60 pp.",
                "link": "https://www.unwomen.org/-/media/headquarters/attachments/sections/library/publications/2019/manual-for-gender-responsive-land-degradation-neutrality-transformative-projects-es.pdf?la=es&vs=343",
                "resumen_comentario": "Contiene directrices estratégicas con el propósito de respaldar a los países que han definido metas de neutralidad en la degradación de tierras e incorporar la perspectiva de género en estas medidas, a fin de garantizar que las iniciativas no perpetúen las desigualdades históricas ni socaven los derechos de las mujeres sobre la tierra en las comunidades locales e indígenas.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nájara-Vázquez, Cinthia y Martínez-Romero, María.",
                "titulo": "Mujer, gobierno corporativo y eficiencia económica: Análisis para el caso de las empresas familiares agroalimentarias.",
                "referencia": "2020. Ciriec-España. En: Revista de Economía Pública, Social y Cooperativa, 99. 33 pp.",
                "link": "http://ciriec-revistaeconomia.es/wp-content/uploads/CIRIEC_9906_Najera_Martinez.pdf",
                "resumen_comentario": "La diversidad de género en el ámbito empresarial tiene relevancia y las empresas familiares han sido claves para la incorporación de las mujeres al mercado de trabajo, debido a los roles compartidos y al solapamiento de valores familiares y empresariales. Se analiza la participación femenina en órganos de gobierno corporativo y la eficiencia económica de empresas familiares agroalimentarias, cuyos resultados muestran un significativo impacto de la presencia femenina en puestos directivos.",
                "observaciones": "Revista virtual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Nobre, Miriam; Hora, Karla; Brito, Claudia y Parada, Soledad.",
                "titulo": "Atlas de las mujeres rurales de América Latina y el Caribe: Al tiempo de la vida y los hechos.",
                "referencia": "2017. Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao). Chile. 82 pp.",
                "link": "https://cpalsocial.org/documentos/652.pdf",
                "resumen_comentario": "Destaca que las mujeres juegan un rol fundamental en la transmisión del conocimiento, incluyendo la memoria histórica de los pueblos y los saberes técnicos, como el manejo agroecológico, la selección de semillas, la reproducción de plantas y los usos medicinales de las hierbas."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Onu Mujeres.",
                "titulo": "Caja de herramientas para el empoderamiento económico de las mujeres rurales emprendedoras.",
                "referencia": "2016. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres); Fondo Internacional de Desarrollo Agrícola (Fida). 74 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/07/guatemala_caja%20de%20herramientas%2016%20dic-compressed.pdf?la=es&vs=3347",
                "resumen_comentario": "Busca contribuir a la generación de conocimiento a través de algunas lecciones aprendidas e instrumentos desarrollados, brindando elementos prácticos a los técnicos que trabajan con mujeres rurales para potenciar el empoderamiento económico, y de manera más amplia, el desarrollo sostenible con enfoque de género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Onu Mujeres.",
                "titulo": "Cómo contribuir a crear espacios y hogares igualitarios ante la emergencia por el Covid-19: Recomendaciones y orientaciones prácticas para hombres.",
                "referencia": "2020. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres). 25 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/05/guatemala_heforsheencasa_vf-comprimido.pdf?la=es&vs=1911",
                "resumen_comentario": "Presenta recomendaciones para espacios colaborativos y relaciones basadas en el respeto y la igualdad, especialmente en el contexto de la pandemia del Covid-19, dirigidas a los hombres. Busca prevenir casos de violencia contra mujeres y niñas durante el aislamiento; reducir la desigualdad entre hombres y mujeres que se incrementa en este contexto; así como apoyar en la gestión de sus emociones, como medio de promover espacios libres de violencia.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Onu Mujeres.",
                "titulo": "Garantizando ciudades y espacios públicos seguros para mujeres y niñas durante la Covid-19.",
                "referencia": "2020. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres. Oficina de la Onu Mujeres involucradas en la producción. 14 pp.",
                "link": "https://www.unwomen.org/-/media/headquarters/attachments/sections/library/publications/2020/brief-covid-19-and-ensuring-safe-cities-and-safe-public-spaces-for-women-and-girls-es.pdf?la=es&vs=2854",
                "resumen_comentario": "Señala las implicaciones nacientes para garantizar la seguridad de las mujeres y las niñas en ciudades y espacios públicos durante las diferentes fases de la pandemia de Covid-19. Reconoce la violencia contra las mujeres y las niñas en espacios públicos y privados, y da ejemplos de medidas tomadas a nivel local en colaboración con gobiernos, organizaciones de derechos de mujeres y de base, en las ciudades afectadas por la pandemia."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Onu Mujeres.",
                "titulo": "Liderazgo local en clave de género frente al Covid-19: La igualdad y no discriminación como estrategia potencializadora de la respuesta a la crisis.",
                "referencia": "2020. Panamá: Oficina Regional de Onu Mujeres para las Américas y el Caribe. 12 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/07/liderazgo%20local%20en%20clave%20de%20genero%20frente%20al%20covid-19.pdf?la=es&vs=1724",
                "resumen_comentario": "Trata sobre la gestión programática para una visión de igualdad y no discriminación en el desarrollo territorial desde la perspectiva de género. Busca responder a la crisis sanitaria y a los nuevos retos, y potenciar las oportunidades de mitigación de los efectos de la pandemia y las bases para una recuperación socioeconómica.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Onu Mujeres.",
                "titulo": "Orientaciones para incorporar el enfoque de igualdad de género en la gestión de los procesos de evaluación de las intervenciones públicas.",
                "referencia": "2019. Entidad de las Naciones Unidas para la Igualdad de Género y el Empoderamiento de las Mujeres (Onu Mujeres). Quito: Secretaría Nacional de Planificación y Desarrollo, Ecuador. 25 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2019/10/guide%203%20-%20senplades.pdf?la=es&vs=2236",
                "resumen_comentario": "Es necesario fomentar la inclusión transversal de los enfoques de igualdad de género y derechos humanos, para el empoderamiento de las mujeres, en todos los niveles de actuación del Estado, incluyendo la evaluación. Contiene un marco conceptual y normativo, así como el alcance, requerimientos, preguntas orientadoras, criterios y tipos de evaluación de la intervención pública.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas (Onu).",
                "titulo": "El impacto del Covid-19 en América Latina y el Caribe.",
                "referencia": "2020. Organización de las Naciones Unidas (Onu). 29 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/07/sg_policy_brief_covid_lac_spanish.pdf?la=es&vs=3959",
                "resumen_comentario": "América Latina y el Caribe se han convertido en foco de la pandemia, en un contexto en el que ya existen enormes desigualdades, niveles elevados de trabajo informal y servicios de salud fragmentados. Una vez más, las poblaciones y las personas más vulnerables son las más afectadas, entre ellas los pueblos indígenas y las mujeres, que constituyen la mayoría de la fuerza de trabajo en los sectores afectados, y que ahora también deben soportar la carga de los cuidados adicionales."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas (Onu).",
                "titulo": "Integrar la perspectiva de género en el derecho a la alimentación: Informe de la Relatora Especial sobre el derecho a la alimentación.",
                "referencia": "2015. Organización de las Naciones Unidas (Onu). 24 pp.",
                "link": "https://derechoalimentacion.org/sites/default/files/pdf-documentos/Integrar%20la%20perspectiva%20de%20g%C3%A9nero%20en%20el%20derecho%20a%20la%20alimentaci%C3%B3n.pdf",
                "resumen_comentario": "Analiza los obstáculos estructurales, culturales, jurídicos, económicos y ecológicos con que tropiezan las mujeres para disfrutar de su derecho a la alimentación, y se exponen ejemplos de buenas prácticas que ilustran la incidencia positiva del mayor acceso a los bienes y el control de éstos por parte de las mujeres en la seguridad alimentaria familiar, la nutrición infantil y el bienestar de la mujer y de su familia. Se alienta a los Estados a ofrecer políticas con enfoque de género, para mejorar el acceso de la mujer a su derecho a la alimentación.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas (Onu).",
                "titulo": "Mejoramiento de la situación de la mujer y la niña en las zonas rurales.",
                "referencia": "2019. Organización de las Naciones Unidas (Onu). Informe del Secretario General ante la Asamblea General. 19 pp.",
                "link": "https://undocs.org/es/A/74/224",
                "resumen_comentario": "Examina las actividades emprendidas por los Estados miembros y las entidades de la Onu y se formulan recomendaciones para que las mujeres y las niñas, especialmente las más pobres de las zonas rurales, puedan mejorar sus medios de subsistencia, bienestar y resiliencia en un clima cambiante, con el fin de garantizar que no se deje atrás a ninguna mujer ni ninguna niña de las zonas rurales.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao).",
                "titulo": "Estrategia Regional de Género de la Fao para América Latina y el Caribe 2019-2023: Autonomía económica, igualdad de derechos y lucha contra el hambre y la malnutrición.",
                "referencia": "2019. Santiago de Chile: Oficina Regional de la Fao para América Latina y el Caribe. 38 pp.",
                "link": "http://www.fao.org/3/ca4665es/CA4665ES.pdf",
                "resumen_comentario": "Busca impulsar acciones que tengan un impacto significativo, como la inclusión productiva con enfoque de género, mejorar la disponibilidad de estadísticas oficiales desagregadas por sexo, y combatir las brechas entre mujeres y hombres en su resiliencia y capacidad de adaptación al cambio climático, entre otras iniciativas, como parte de la tarea de superar la desigualdad de género. Sólo con equidad de género habrá desarrollo sostenible, no solo para las mujeres, sino para todos los habitantes de la región"
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao).",
                "titulo": "Urge hacer políticas específicas para las trabajadoras agrícolas familiares no remuneradas en pos de una mayor equidad en el mundo rural.",
                "referencia": "s/f. Nota de política sobre las mujeres rurales 2. Oficina Regional de la Fao para América Latina y el Caribe. 4 pp.",
                "link": "http://www.fao.org/3/a-as106s.pdf",
                "resumen_comentario": "En América Latina, el 40 % de las mujeres rurales mayores de 15 años no tienen ingresos propios y sin embargo trabajan a diario, y mucho. Las mujeres que trabajan en la agricultura de forma no remunerada constituyen el universo más numeroso pero menos conocido de las mujeres dedicadas a actividades agrícolas, y son, en su mayoría, trabajadoras invisibles para las estadísticas oficiales ya que se clasifican como inactivas pese a que efectivamente sí trabajan.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Igualdad de género.",
                "referencia": "2019. París: Unesco. 5 pp.",
                "link": "https://es.unesco.org/creativity/publications/igualdad-de-genero",
                "resumen_comentario": "La Convención sobre la protección y la promoción de la diversidad de las expresiones culturales de la Unesco en 2005, promueve la adopción de medidas para incorporar a las mujeres en la creación, producción y distribución de bienes y servicios culturales.",
                "observaciones": "Folleto."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco).",
                "titulo": "Informe sobre género: Construyendo puentes para la igualdad de género.",
                "referencia": "2019. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco); United Nations Girls’ Education Initiative (Ungei). París: Unesco. 80 pp.",
                "link": "https://unesdoc.unesco.org/ark:/48223/pf0000369621?posInSet=14&queryId=N-c53bdcff-e641-4b6f-94c2-ad5819e79232",
                "resumen_comentario": "Explora los factores que perpetúan las desigualdades de género en las escuelas y proporciona herramientas que permiten a los gobiernos analizar la situación en sus propios países y formular estrategias para el cambio. También ofrece un estudio de los planes nacionales de educación, centrándose en los países con las mayores disparidades de género en el ámbito educativo.",
                "observaciones": "Informe de Seguimiento de la Educación en el Mundo 2019."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco) y Onu Mujeres.",
                "titulo": "Mujeres indígenas en contexto Covid-19: ¿Cómo les impacta?",
                "referencia": "2020. Organización de las Naciones Unidas para la Educación, la Ciencia y la Cultura (Unesco). México: Onu Mujeres. 4 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20mexico/documentos/publicaciones/2020/mayo%202020/brief%20mujeres%20indigenas.pdf?la=es&vs=222",
                "resumen_comentario": "Reconocer el impacto de Covid-19 en las mujeres y niñas, identificando sus necesidades, es central para fortalecer los esfuerzos de mitigación y recuperación, así como para asegurar una respuesta efectiva que garantice sus derechos. En el caso de las mujeres y niñas indígenas, las múltiples desigualdades hacen que estén en condiciones más graves aún ante los desastres y emergencias."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización Internacional del Trabajo (Oit).",
                "titulo": "Las mujeres en la gestión empresarial: Argumentos para un cambio.",
                "referencia": "2019. Oficina Internacional del Trabajo. Oficina de Actividades para los Empleadores (ACT / EMP). Ginebra: OIT. 154 pp.",
                "link": "https://www.ilo.org/wcmsp5/groups/public/---dgreports/---dcomm/---publ/documents/publication/wcms_700977.pdf",
                "resumen_comentario": "Muestra que una fuerza de trabajo en la que predomine el equilibrio de género y una cultura inclusiva, puede incidir en que haya más mujeres ocupando puestos de toma de decisiones. Explora los argumentos sobre una mayor diversidad de género en el lugar de trabajo y en la representación de las mujeres en los puestos directivos y consejos de administración de las empresas, y se evalúa el éxito cosechado por diversas iniciativas de inclusión.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización Internacional del Trabajo (Oit).",
                "titulo": "Manual de facilitadoras de auditorías de género: Metodologías para las auditorías participativas de género de la OIT.",
                "referencia": "2008. Ginebra: Oficina Internacional del Trabajo (Oit). 153 pp.",
                "link": "https://centroderecursos.cultura.pe/sites/default/files/rb/pdf/manual%20para%20facilitadores%20de%20genero.pdf",
                "resumen_comentario": "Tiene el propósito de ayudar a quien tiene a cargo la facilitación de una auditoría de género, ofreciendo una herramienta de fácil uso para la organización, ejecución y seguimiento de las auditorías, dando a los facilitadores un conjunto de instrumentos y lineamientos prácticos que se utilizarán durante el proceso de la auditoría de género.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Organización Panamericana de la Salud (OPS).",
                "titulo": "La economía invisible y las desigualdades de género: La importancia de medir y valorar el trabajo no remunerado.",
                "referencia": "2008. Organización Mundial de la Salud (OMS). Washington D. C.: Organización Panamericana de la Salud (OPS). 310 pp.",
                "link": "https://www.paho.org/Spanish/ad/ge/Desigualdad_genero.pdf",
                "resumen_comentario": "Trata sobre aspectos conceptuales, metodológicos y empíricos de la medición y valoración del tiempo dedicado por los miembros del hogar a actividades productivas no de mercado, que son invisibles desde el punto de vista de la contabilidad nacional de los países, regida por el Sistema de Cuentas Nacionales de 1993 (SCN 1993), y la elaboración de indicadores económicos y sociales que hagan visibles y contabilicen las contribuciones del trabajo no remunerado de las mujeres al desarrollo económico y social."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ortiz, Hivy y Suárez, Javiera.",
                "titulo": "Salud, saberes y sabores: Recuperando el conocimiento culinario tradicional de las mujeres de América Latina y el Caribe para el manejo y enriquecimiento de la biodiversidad alimentaria.",
                "referencia": "2018. Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao). Santiago de Chile: Oficina Regional de la Fao para América Latina y el Caribe. 58 pp.",
                "link": "http://www.fao.org/3/I8269ES/i8269es.pdf",
                "resumen_comentario": "Recopilación de recetas de mujeres rurales de América Latina y el Caribe, donde han incorporado la protección de la biodiversidad y la seguridad alimentaria y nutricional. Sus técnicas de cultivo, cosecha y resguardo de las semillas aseguran la calidad de los patrones alimentarios de sus familias y comunidades. Reconoce, superando la desigualdad de género y discriminación, el rol de las mujeres rurales e indígenas como oportunidad de promover el consumo de cultivos locales de la agricultura familiar.",
                "observaciones": "Recetario. Concurso de relatos y experiencias: Historias de mujeres rurales en América Latina y el Caribe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pajarín García, Marta y Leyra Fatou, Begoña. (Editoras)",
                "titulo": "Economía, género y desarrollo: Enfoques e iniciativas hacia la igualdad.",
                "referencia": "2016. Instituto Complutense de Estudios Internacionales (Icei), Universidad Complutense de Madrid. Cuadernos de Género Nº 4. 76 pp.",
                "link": "https://www.ucm.es/data/cont/docs/442-2019-01-30-Cuaderno_de_genero_4_2016.pdf",
                "resumen_comentario": "Análisis desde la perspectiva de género de la Agenda 2030 para el Desarrollo Sostenible, identificando las oportunidades y los retos que ésta implica para el logro de la igualdad de género como objetivo de desarrollo. Examina la participación económica de las mujeres, las iniciativas de presupuestos sensibles al género, las políticas de participación laboral de las mujeres, y la importancia del trabajo doméstico y de cuidados no remunerado, en el análisis económico y de las políticas públicas.",
                "observaciones": "Ponencias del seminario internacional del mismo nombre. Madrid, 4 de noviembre de 2015. "
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pauccar Meza, Nelly.",
                "titulo": "¡Sin mujeres indígenas, no! Aproximaciones desde la implementación de la consulta previa en la industria extractiva en el Perú.",
                "referencia": "2019. Organización Nacional de Mujeres Indígenas Andinas y Amazónicas del Perú (Onamiap). Lima: Oxfam Perú. 96 pp.",
                "link": "https://oi-files-cng-prod.s3.amazonaws.com/peru.oxfam.org/s3fs-public/file_attachments/Sin_mujeres_indigenas_no.pdf",
                "resumen_comentario": "Análisis de los derechos e impactos diferenciados que sufren las mujeres en contextos donde se desarrollan actividades extractivas, abordando también la situación de la mujer indígena en el Perú, su participación en los procesos de consulta en las actividades extractivas, las barreras existentes y el enfoque de género en la implementación de la consulta.",
                "observaciones": "Elaborado a partir del informe Consulta previa y enfoque de género en el Perú: Situación, impacto y recomendaciones."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pezza Cintrão, Rosângela.",
                "titulo": "Mujeres rurales y programas de compras públicas en América Latina y Caribe.",
                "referencia": "2019. Organización de las Naciones Unidas para la Alimentación y la Agricultura (Fao). Santiago de Chile: Oficina Regional para América Latina y el Caribe de FAO. 68 pp.",
                "link": "http://www.fao.org/3/ca2746es/ca2746es.pdf",
                "resumen_comentario": "Los programas estatales de compra de alimentos, incluyendo los mecanismos que promueven a las mujeres como proveedoras de los programas de compras públicas de la agricultura familiar, constituyen una oportunidad de inclusión económica productiva para las mujeres, para que tengan acceso a una remuneración adecuada. El aumento de ingresos y la comercialización son una ayuda para salir de la pobreza y mejorar su seguridad alimentaria.",
                "observaciones": "Estudios de caso en Colombia, Honduras, Paraguay, Perú y República Dominicana."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Pineda G., Esther y Moncada, Alicia.",
                "titulo": "Violencias y resistencias de las mujeres racializadas en los contextos extractivistas mineros de América Latina.",
                "referencia": "2018. Instituto de Estudios de América Latina y El Caribe (IEALC). En: Revista Observatorio Latinoamericano y Caribeño (Olac) Nº 2. 17 pp.",
                "link": "https://www.aacademica.org/estherpinedag/18.pdf",
                "resumen_comentario": "Trata sobre la violencia racista patriarcal en los proyectos extractivistas mineros en América Latina que, al interceptarse con variables como el género y la pertenencia étnica, favorecen la acentuación de las desigualdades y de la vulnerabilidad de las mujeres racializadas (afrodescendientes e indígenas), con especial interés en las mujeres organizadas y en resistencia.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Portal Farfán, Diana Carolina. (Editora)",
                "titulo": "Género e interculturalidad: El derecho a una vida libre de violencia y discriminación.",
                "referencia": "2016. Defensoría del Pueblo, Adjuntía para los Derechos de la Mujer; Red de Género e Interculturalidad de la Defensoría del Pueblo. 208 pp.",
                "link": "https://www.defensoria.gob.pe/wp-content/uploads/2018/05/Genero-e-Interculturalidad.pdf",
                "resumen_comentario": "Los pueblos indígenas en situación de vulnerabilidad por la exclusión, pobreza, discriminación y brechas de género, requieren instrumentos para promover los enfoques transversales de interculturalidad y género en el gobierno, con la finalidad de asegurar su participación en las decisiones sobre asuntos de su interés y respetando sus formas de vida.",
                "observaciones": "Compilación de principales instrumentos internacionales y nacionales."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa de las Naciones Unidas para el Desarrollo (Pnud).",
                "titulo": "El reto de la igualdad: Una lectura de las dinámicas territoriales en el Perú.",
                "referencia": "2019. Lima: Programa de las Naciones Unidas para el Desarrollo (Pnud). 120 pp.",
                "link": "https://www.pe.undp.org/content/peru/es/home/library/poverty/el-reto-de-la-igualdad.html",
                "resumen_comentario": "Presenta las dinámicas territoriales en el Perú, tomando los indicadores de desarrollo humano desde diversos puntos de entrada, incluido el género, a lo largo de más de una década, haciendo algunos ajustes para entender mejor las transformaciones ocurridas al interior del país, con data desagregada incluso a nivel distrital."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa de las Naciones Unidas para el Desarrollo (Pnud).",
                "titulo": "Vulnerabilidades, más allá de la pobreza.",
                "referencia": "2020. Programa de las Naciones Unidas para el Desarrollo (PNUD). Lima: Series de investigación, PNUD Perú. 46 pp.",
                "link": "https://www.pe.undp.org/content/peru/es/home/library/poverty/vulnerabilidades--mas-alla-de-la-pobreza.html",
                "resumen_comentario": "Analiza cómo la pandemia es una amenaza que interactúa con las vulnerabilidades preexistentes en los hogares peruanos: monetaria, alimentaria, laboral, financiera e hídrica. Antes de la propagación del coronavirus, el 65 % de hogares registraba por lo menos una de estas vulnerabilidades, cuatro millones en las zonas urbanas y 1,8 millones en las rurales. Además, el 88 % de los hogares de zonas rurales son vulnerables, mayor precariedad que se agudiza aún más en esta crisis.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Programa Mujeres, Economía Local y Territorio (Melyt) y Onu Mujeres.",
                "titulo": "Propuesta para el desarrollo de una oferta formativa y asistencia técnica empresarial, de educación financiera, en derechos humanos y género a mujeres emprendedoras y empresarias rurales en el marco del programa Melyt.",
                "referencia": "2020. Programa Mujeres, Economía Local y Territorio (Melyt). San Salvador: Onu Mujeres. 5 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2020/05/2020%2004%2021%20propuesta%20para%20capacitacion%20digital%20emprendedoras%20rurales.pdf?la=es&vs=752",
                "resumen_comentario": "Las mujeres rurales tienen menor acceso que los hombres a la tierra y persisten patrones culturales que limitan su participación económica, asignándoles roles tradicionales que impiden su ingreso en nuevos nichos de mercado. En la actual coyuntura sanitaria tienen mayor carga y estrés, y al confinarse en el hogar asumen las tareas reproductivas y de cuidado de personas; como jefas de hogar, pierden sus ingresos al no poder ir a sus actividades productivas. Así, para enfrentar el futuro post Covid-19, se promueve aceleramiento empresarial, creación de sinergias con actores locales, empoderamiento económico territorial e investigación para el desarrollo económico local.",
                "observaciones": "Ficha técnica."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Ranaboldo, Claudia.",
                "titulo": "Enfoque territorial para el empoderamiento de las mujeres rurales: Análisis y propuestas desde América Latina.",
                "referencia": "2016. Onu Mujeres. Comisión Económica para América Latina y el Caribe (Cepal); Organización de Naciones Unidas para la Alimentación y la Agricultura (Fao); Centro Latinoamericano para el Desarrollo Rural (Rimisp). 24 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2018/5/enfoque%20territorial_onu%20mujeres.pdf?la=es&vs=16",
                "resumen_comentario": "Desde un enfoque territorial para el empoderamiento de las mujeres rurales en América Latina, se propone generar conocimientos tanto a nivel teórico-metodológico como a través de aprendizajes provenientes de experiencias público-privadas del orden nacional y territorial, así como contribuir a propuestas para políticas públicas integradas de desarrollo territorial con enfoque de género."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Rodríguez, Eugenia e Iturmendi Vicente, Ana.",
                "titulo": "Atando cabos, deshaciendo nudos. Igualdad de género e interculturalidad: Enfoques y estrategias para avanzar en el debate.",
                "referencia": "2013. Programa de las Naciones Unidas para el Desarrollo (PNUD). Colección de cuadernos “Atando cabos, deshaciendo nudos”. Panamá. 47 pp.",
                "link": "https://iknowpolitics.org/sites/default/files/atando_cabos_may30.pdf",
                "resumen_comentario": "Recoge el diálogo para construir un marco teórico-práctico que permita a los responsables de programas y políticas públicas avanzar hacia la integración de los enfoques de género, interculturalidad y derechos humanos en las acciones para el desarrollo. De esta forma se espera contribuir al debate con el fin de superar las múltiples discriminaciones que viven las personas."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Scuro, María Lucía.",
                "titulo": "Informe regional sobre el avance en la aplicación de la Estrategia de Montevideo para la Implementación de la Agenda Regional de Género en el Marco del Desarrollo Sostenible hacia 2030.",
                "referencia": "2019. Deutsche Gesellschaft für Internationale Zusammenarbeit (Giz). Santiago de Chile: Comisión Económica para América Latina y el Caribe (Cepal). 60 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/44956/4/S1900848_es.pdf",
                "resumen_comentario": "La Estrategia de Montevideo es una herramienta que brinda a los Estados las orientaciones para pasar de los compromisos internacionales a la acción transformadora, abordando los desafíos en la implementación de las políticas públicas de la Agenda 2030. Analiza los nudos estructurales de la desigualdad de género y la situación de las mujeres de la región, avances en la Estrategia, y su potencial para superar la desigualdad a través de políticas públicas integrales en las próximas décadas hacia 2030.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Segovia, Olga y Williner, Alicia.",
                "titulo": "Territorio e igualdad: Planificación del desarrollo con perspectiva de género.",
                "referencia": "2016. Manuales de la Cepal N° 4. Área de Gestión del Desarrollo Local y Regional del Instituto Latinoamericano y del Caribe de Planificación Económica y Social (Ilpes). Santiago: División de Asuntos de Género de la Comisión Económica para América Latina y el Caribe (Cepal). 84 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/40665/1/S1601000_es.pdf",
                "resumen_comentario": "Expone los fundamentos teóricos de la importancia de incorporar la perspectiva de género en los procesos de planificación en distintas escalas territoriales, con particular énfasis en el enfoque de derechos en un horizonte de igualdad, constituyendo un aporte metodológico a la práctica de agentes gubernamentales y no gubernamentales que tengan responsabilidades en el diseño y ejecución de esos procesos.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sisto, Ilaria y Groppo, Paolo.",
                "titulo": "Guía para mejorar la igualdad de género en las cuestiones territoriales (Igeti).",
                "referencia": "2012. Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO). 48 pp.",
                "link": "http://www.fao.org/3/me282s/me282s.pdf",
                "resumen_comentario": "Se propone ayudar a los agentes del desarrollo a promover la igualdad de género en el acceso y la gestión de la tierra y otros recursos naturales, pues la mejora del acceso de hombres y mujeres a la misma no solamente contribuye a dotarlos de medios de vida sostenibles, sino también a lograr mejoras en el crecimiento y situación socioeconómicos.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Soberanía Alimentaria, Biodiversidad y Culturas.",
                "titulo": "Agroecología y feminismos.",
                "referencia": "2018. En: Revista Soberanía Alimentaria, Biodiversidad y Culturas Nº 33. 56 pp.",
                "link": "https://www.soberaniaalimentaria.info/images/numeros/n33/SABC%20n33.pdf",
                "resumen_comentario": "Los feminismos, en sus diversas miradas, están en el movimiento por la soberanía alimentaria y economías transformadoras. Explica cómo usar la economía feminista y atender a los saberes tradicionales ligados a las mujeres: reciprocidad, biodiversidad, comunidad. También trata sobre la ruptura de los procesos progresistas en el continente y cómo afecta al campesinado y pueblos originarios, así como las estrategias colectivas para enfrentar esta situación.",
                "observaciones": "Revista."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Sousa, Víctor Rolando.",
                "titulo": "Marco normativo para la generación de mecanismos de empoderamiento de la mujer en condiciones de equidad.",
                "referencia": "2020. Bogotá: Parlamento Andino. 45 pp.",
                "link": "https://parlamentoandino.org/wp-content/uploads/2017/06/26.-MN-EMPODERAMIENTO-DE-LA-MUJER.pdf",
                "resumen_comentario": "Establece las normas, principios y buenas prácticas que deberán tomarse para la estructuración, implementación y promoción de ordenamientos jurídicos nacionales y regionales, que tengan como fin erradicar todas las formas de discriminación hacia la mujer.",
                "observaciones": "Manual."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Tamayo, Guilia; Delso, Ana; López, Irene; Navarro, Natalia y Fernández-Layos, Ana Lydia.",
                "titulo": "Género en la cooperación al desarrollo: Una mirada a la desigualdad.",
                "referencia": "2003. Madrid: ACSUR, Las Segovias. 130 pp.",
                "link": "http://www.mujeresenred.net/IMG/pdf/una_mirada_a_la_desigualdad.pdf",
                "resumen_comentario": "Materiales que pretenden, junto con la formación y la sensibilización, contribuir a que los actores de la cooperación avancen a la promoción del empoderamiento y participación de la mujer, con equidad y justicia de género, hacia un desarrollo humano sostenible."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Torres Andonayre, Luisa Magaly.",
                "titulo": "Informe sobre violencia contra defensoras en contextos de conflictos ecoterritoriales en la región Cajamarca.",
                "referencia": "2019. Observatorio de Conflictos Cajamarca. Cajamarca: Grupo de Formación e Intervención para el Desarrollo Sostenible (Grufides); Estudio para la Defensa de los Derechos de la Mujer (Demus). 26 pp.",
                "link": "https://grufides.org/sites/default/files//documentos/documentos/Informe%20Violencia%20de%20G%C3%A9nero%20en%20conflictos%20ecoterritoriales%20Cajamarca_0.pdf",
                "resumen_comentario": "El extractivismo profundiza las brechas de desigualdad de género en lo que respecta a la discriminación, las amenazas para la salud, la pérdida de medios de subsistencia, la migración, la pobreza, la trata de personas, la violencia, la explotación sexual, la inseguridad alimentaria y el acceso a infraestructuras y servicios esenciales, situación que causa los conflictos ecoterritoriales.",
                "observaciones": "Informe."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Vásconez Rodríguez, Alison.",
                "titulo": "Crecimiento económico y desigualdad de género: Análisis de panel para cinco países de América Latina.",
                "referencia": "2017. En: Revista de la Cepal Nº 122. 29 pp.",
                "link": "https://repositorio.cepal.org/bitstream/handle/11362/42033/1/RVE122_Vasconez.pdf",
                "resumen_comentario": "Analiza la relación entre feminización del mercado laboral —entendida como el incremento de la relación de participación laboral y las horas ofertadas de las mujeres en el mercado— y crecimiento económico en cinco países de América Latina. Se calculan funciones de oferta de trabajo y se incluyen horas ofertadas, tasas de feminización y salarios, concluyendo que la feminización laboral tiene relación positiva con el crecimiento, no así el incremento en horas ofertadas.",
                "observaciones": "Artículo."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Velasco Gisbert, María Luisa; Bartolomé Esteban, Cintia y Suso Araico, Anabel.",
                "titulo": "Género y cambio climático: Un diagnóstico de la situación.",
                "referencia": "2020. Instituto de la Mujer, Ministerio de Igualdad, España. 85 pp.",
                "link": "http://www.inmujer.gob.es/diseno/novedades/Informe_GeneroyCambioClimatico2020.pdf",
                "resumen_comentario": "Trata sobre la vulnerabilidad de la mujer frente al cambio climático, que afecta especialmente a quienes menos han contribuido a su aparición. Este fenómeno tiene un mayor impacto en los sectores de población más vulnerable, sobre todo entre las personas que dependen de los recursos naturales para su sustento, o que tienen menor capacidad para responder a los peligros naturales, como sequías, inundaciones y huracanes.",
                "observaciones": "Informe. Incluye tablas y gráficos."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Velásquez Nimatuj, Irma A.",
                "titulo": "Acceso de las mujeres indígenas a la tierra, el territorio y los recursos naturales en América Latina y El Caribe.",
                "referencia": "2018. Fondo para el Desarrollo de los Pueblos Indígenas de América Latina y el Caribe (Filac). Panamá: Oficina Regional de Onu Mujeres para las Américas y el Caribe. 78 pp.",
                "link": "https://www2.unwomen.org/-/media/field%20office%20americas/documentos/publicaciones/2018/12/estudio_final_acceso_de_mujeres_indigenas_a_la_tierra-compressed.pdf?la=es&vs=3654",
                "resumen_comentario": "Analiza los significados de la tierra, el territorio y los recursos naturales para las mujeres indígenas, su acceso y estado actual, y el marco legal internacional y de derechos de las mujeres indígenas. Describe casos de estudio en varios países y muestra los retos que enfrentan para gozar de sus derechos de acceso a la tierra, territorios y recursos naturales, así como una serie de buenas prácticas y recomendaciones.",
                "observaciones": "Casos de mujeres indígenas en Colombia, Chile, México, Paraguay, Guatemala, Nicaragua, Costa Rica, Perú, Panamá, Bolivia y Honduras."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Witkowski, Kelly y Blanco Lobo, Montserrat.",
                "titulo": "De la práctica a las políticas: Experiencias latinoamericanas en género, cambio climático y agricultura.",
                "referencia": "2017. Proyecto Euroclima, Unión Europea (UE). San José de Costa Rica: Instituto Interamericano de Cooperación para la Agricultura (IICA). 106 pp.",
                "link": "http://repositorio.iica.int/bitstream/handle/11324/2997/BVE17068915e.pdf?sequence=1",
                "resumen_comentario": "La integración de la perspectiva de género en la agricultura es esencial para preservar, de modo sostenible, la alta biodiversidad de la región. Los hombres y mujeres tienen diferentes enfoques para la conservación y el manejo de la agrobiodiversidad, por la división social y del trabajo, por lo que la comprensión de los roles de género es importante para un apoyo eficaz al desarrollo local. Se ilustra algunas experiencias de promoción y empoderamiento de las mujeres en el sector agrícola en América Latina."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zambrano, Gustavo; Bustamante, Marité y Jáuregui, Ariana.",
                "titulo": "Agenda indígena: Mujeres indígenas awajún y wampís Región Amazonas.",
                "referencia": "2018. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP). Lima: Pontificia Universidad Católica del Perú (PUCP). 40 pp.",
                "link": "https://cdn01.pucp.education/idehpucp/wp-content/uploads/2018/09/24211819/agenda-indigena_kas_idehpucp.pdf",
                "resumen_comentario": "Tiene como objetivo apoyar el trabajo de fortalecimiento de capacidades de las mujeres líderes indígenas dentro de la selección de candidatos provinciales de Amazonas para las elecciones subnacionales, sirviendo como línea de base de la problemática política de las mujeres indígenas awajún y wampís, y para sus propuestas en salud, educación, violencia de género y participación política.",
                "observaciones": "Guía."
            },
            {
                "eje_estrategico": "Sexto eje",
                "icono": "img/icono_pdf.png",
                "autor": "Zambrano, Gustavo y Uchuypoma, Diego.",
                "titulo": "Intersectando desigualdades: Participación política de mujeres indígenas a nivel subnacional en el Perú.",
                "referencia": "2015. Instituto de Democracia y Derechos Humanos de la Pontificia Universidad Católica del Perú (IDEHPUCP); Konrad-Adenauer-Stiftung (Kas). Lima: Pontificia Universidad Católica del Perú (PUCP). 108 pp.",
                "link": "http://repositorio.pucp.edu.pe/index/bitstream/handle/123456789/110636/2015-Intersectando%20desigualdades.%20Participaci%c3%b3n%20pol%c3%adtica%20de%20las%20mujeres%20ind%c3%adgenas%20a%20nivel%20nacional%20en%20el%20Per%c3%ba.pdf?sequence=1&isAllowed=y",
                "resumen_comentario": "Presenta un enfoque respecto a las cuotas de género e indígena en los procesos electorales, mediante el uso de la interseccionalidad, herramienta que permite analizar la relación existente entre participación política, género y etnia. Espera brindar otra perspectiva al análisis de las cuotas y la participación política femenina, buscando ser un insumo para las políticas públicas de promoción de la participación política de mujeres indígenas."
            }
    ]
});

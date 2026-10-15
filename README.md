# Constructora Innova · innova-proyect

Sitio corporativo responsive para **Constructora Innova**, desarrollado con **Next.js (App Router), React, JavaScript y CSS puro**. Incluye contenido en español e inglés, cambio de idioma, menú móvil, servicios, portafolio ilustrativo y formulario que prepara una conversación por WhatsApp.

## Requisitos

- Node.js 20.9 o superior (recomendado Node.js 22 LTS).
- npm.

## Primer inicio

```bash
cd innova-proyect
npm install
npm run dev
```

Abre **http://localhost:3000**.

Para compilar una versión de producción:

```bash
npm run build
npm start
```

## Organización por módulos

```text
innova-proyect/
├── public/
│   └── images/
│       ├── innova-logo.png
│       ├── hero-facility.webp
│       ├── project-industrial.webp
│       ├── project-systems.webp
│       └── project-specialized.webp
├── src/
│   ├── app/
│   │   ├── layout.js             # HTML base y metadatos
│   │   ├── page.js               # Orden de las secciones
│   │   └── globals.css           # Estilos globales y breakpoints
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── sections/
│   │   │   ├── Hero.js
│   │   │   ├── ServiceHighlights.js
│   │   │   ├── TrustStrip.js
│   │   │   ├── About.js
│   │   │   ├── Services.js
│   │   │   ├── Projects.js
│   │   │   ├── Quality.js
│   │   │   └── Contact.js
│   │   └── ui/
│   │       ├── LanguageSwitcher.js
│   │       └── SectionHeading.js
│   ├── context/
│   │   └── LanguageContext.js     # Selección ES/EN y localStorage
│   └── lib/
│       ├── site.js                # Teléfonos, correo y WhatsApp
│       └── translations.js        # Todos los textos ES/EN
├── package.json
├── jsconfig.json
└── next.config.mjs
```

## Idiomas

El selector **ES / EN** aparece en el encabezado y en el menú móvil. La preferencia se guarda en `localStorage`; las secciones obtienen sus cadenas desde `src/lib/translations.js` mediante el hook `useLanguage()`.

Para modificar cualquier texto edita ambas entradas, `es` y `en`, con las mismas claves. El idioma predeterminado es español. Esta versión cambia el idioma del contenido en la página actual (no crea URLs separadas `/en` o `/es`).

## Fotografías reales

Las fotografías incluidas provienen **únicamente del diseño ilustrativo aprobado en el chat**. **No representan proyectos reales ni clientes de Constructora Innova.** Se han rotulado como ilustrativas en el portafolio.

Reemplázalas por tus fotos reales, manteniendo el nombre del archivo y un tamaño adecuado (preferiblemente `.webp`):

- `public/images/hero-facility.webp`: foto de portada. Recomendado paisaje horizontal, 1600 × 1000 o similar.
- `public/images/project-industrial.webp`: obra industrial.
- `public/images/project-systems.webp`: electromecánica / HVAC.
- `public/images/project-specialized.webp`: industria médica / trabajos especializados.

Modifica los títulos y descripciones de los proyectos en `src/lib/translations.js` cuando tengas los datos verificados de cada proyecto, y **retira** la etiqueta y nota de imagen ilustrativa del componente `Projects.js` una vez que el portafolio muestre proyectos reales autorizados.

El logotipo proporcionado se guarda en `public/images/innova-logo.png` y se utiliza sin rediseñarlo.

## Contacto

Los datos se editan en `src/lib/site.js`:

- WhatsApp: `8320 0287`
- Teléfono secundario: `8829 0061`
- Correo: `proyectos@innovajyr.com`

**Importante:** Para generar vínculos `tel:` y `wa.me`, se utilizó **+506 (Costa Rica)** como prefijo internacional supuesto; confirma este dato antes de publicar.

El formulario **no tiene backend**. Al completar los campos, el navegador abre WhatsApp con un mensaje prellenado. No se envía ni se almacena información en un servidor de este sitio. Si prefieres recibir solicitudes por correo desde el sitio, habría que integrar un servicio de formularios, servidor/API, protección contra spam y consentimiento de datos.

## Responsive

- Escritorio: menú horizontal, servicios en 3 columnas, proyectos en 3 columnas.
- Tablet: menú desplegable, contenido en columnas adaptadas.
- Móvil: secciones en una columna, menú hamburguesa y botones optimizados para pantalla táctil.
- Compatible con `prefers-reduced-motion` y controles con etiquetas accesibles.

## Publicación

Compatible con [Vercel](https://vercel.com) y otros servidores compatibles con Next.js. Antes de publicar: reemplaza fotografías, confirma los servicios/alcances y el código de país, revisa el dominio y la política de privacidad que aplique.

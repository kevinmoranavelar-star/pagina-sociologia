# 📚 Introducción a la Sociología - Sitio Web Educativo

## Descripción del Proyecto

Sitio web interactivo y educativo diseñado como un **estudio de desarrollo web** dedicado a la divulgación rigurosa y dinámica del conocimiento sociológico. Este proyecto es parte de la asignatura **Introducción a la Sociología** en el programa de **Ingeniería en Sistemas**.

### Características Principales

✅ **Navegación Clara**: Menú responsivo con 5 módulos temáticos estructurados  
✅ **Contenido Riguroso**: Información académica de calidad sobre Sociología  
✅ **Diseño Responsivo**: Compatible con móviles, tablets y computadoras  
✅ **Componentes Interactivos**:

- Línea de tiempo interactiva (Módulo 3)
- Tarjetas desplegables de pensadores (Módulo 4)
- Cuadro comparativo de corrientes teóricas (Módulo 5)
- Evaluaciones interactivas (Quiz en cada módulo)

✅ **HTML5 Semántico**: Estructura correcta con etiquetas semánticas  
✅ **CSS Moderno**: Diseño limpio, responsive y profesional  
✅ **JavaScript Funcional**: Interactividad sin dependencias externas

---

## Estructura del Proyecto

```
Pagina de Sociologia/
├── index.html                 # Página de inicio
├── modulo1.html              # Módulo 1: Ciencia y Ciencias Sociales
├── modulo2.html              # Módulo 2: Conceptualización de la Sociología
├── modulo3.html              # Módulo 3: Desarrollo Histórico (con línea de tiempo)
├── modulo4.html              # Módulo 4: Precursores y Exponentes (con tarjetas)
├── modulo5.html              # Módulo 5: Corrientes y Teorías (con comparativas)
├── styles.css                # Estilos CSS responsive
├── script.js                 # JavaScript para interactividad
├── README.md                 # Este archivo
└── .gitignore               # Archivos a ignorar en Git
```

---

## Contenido de los Módulos

### 📖 **Módulo 1: Ciencia y Ciencias Sociales**

- Definición de ciencia
- Ciencia vs. Sentido Común
- Clasificación de las ciencias
- Características de las Ciencias Sociales

### 🎓 **Módulo 2: Conceptualización de la Sociología**

- Definición integral de Sociología
- Objeto de estudio
- Campo de acción (Micro y Macro sociología)
- Relación con otras disciplinas (Antropología, Economía, Psicología, etc.)
- Metodología sociológica

### ⏳ **Módulo 3: Desarrollo Histórico**

- **Línea de Tiempo Interactiva** con eventos clave:
  - Revolución Francesa (1789)
  - Revolución Industrial (1760-1840)
  - Ilustración y Pensamiento Científico (Siglo XVIII)
- Condiciones sociales que propiciaron la Sociología
- Hitos históricos de la disciplina

### 👨‍🎓 **Módulo 4: Precursores y Exponentes**

- **Tarjetas Desplegables** con perfiles de:
  - Claude Henri de Saint-Simon
  - Auguste Comte
  - Herbert Spencer
  - Émile Durkheim
  - Karl Marx
  - Max Weber
  - Otros pensadores importantes

### 🎯 **Módulo 5: Corrientes y Teorías Sociológicas**

- **Cuadro Comparativo** de corrientes teóricas:
  - Positivismo
  - Materialismo Histórico / Teoría del Conflicto
  - Estructural Funcionalismo
  - Interaccionismo Simbólico
  - Teoría Crítica
  - Estructuralismo
  - Teorías Contemporáneas

---

## Requisitos Técnicos Cumplidos

### ✅ HTML Semántico

- Uso de etiquetas HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Estructura lógica y accesible
- Meta etiquetas correctas (charset, viewport)

### ✅ Diseño Visual

- CSS limpio y organizado
- Variables CSS para consistencia de colores
- Flexbox y Grid para layouts responsivos
- Animaciones suaves y transiciones

### ✅ Componentes Interactivos

1. **Menú Responsivo**: Hamburguesa en dispositivos móviles
2. **Línea de Tiempo Interactiva**: Click para expandir información
3. **Tarjetas Desplegables**: Acordeones para pensadores y teorías
4. **Quiz Interactivo**: Evaluaciones en cada módulo
5. **Navegación**: Botones para moverse entre módulos

### ✅ Diseño Responsive

- Mobile-first approach
- Breakpoints en 768px y 480px
- Grid adaptativo
- Tipografía escalable
- Touch-friendly buttons

### ✅ Despliegue

- Sitio estático (sin backend requerido)
- Listo para publicar en múltiples plataformas

---

## Cómo Usar Localmente

### 1. Descargar o Clonar el Proyecto

```bash
git clone https://github.com/usuario/Pagina-de-Sociologia.git
cd Pagina-de-Sociologia
```

### 2. Abrir en el Navegador

Simplemente abre `index.html` en tu navegador favorito:

- Haz doble clic en `index.html`
- O arrastra el archivo al navegador
- O usa un servidor local (ver opción 3)

### 3. Usar un Servidor Local (Recomendado)

**Con Python 3:**

```bash
python -m http.server 8000
# Abre http://localhost:8000 en el navegador
```

**Con Python 2:**

```bash
python -m SimpleHTTPServer 8000
# Abre http://localhost:8000 en el navegador
```

**Con Node.js (si tienes installed):**

```bash
npx http-server
# Abre http://localhost:8080 en el navegador
```

**Con Live Server (VS Code):**

- Instala la extensión "Live Server"
- Clic derecho en `index.html` → "Open with Live Server"

---

## Despliegue en Plataformas

### 🚀 **Opción 1: GitHub Pages (GRATIS y Recomendado)**

#### Pasos:

1. **Crear repositorio en GitHub**
   - Ve a [github.com](https://github.com)
   - Click en "New repository"
   - Nombre: `Pagina-de-Sociologia` (o similar)
   - Inicializa con README
   - Click "Create repository"

2. **Descargar Git** (si no lo tienes)
   - Descarga desde [git-scm.com](https://git-scm.com)

3. **Configurar el repositorio local**

   ```bash
   cd Pagina-de-Sociologia
   git init
   git add .
   git commit -m "Proyecto de Sociología"
   git branch -M main
   git remote add origin https://github.com/usuario/Pagina-de-Sociologia.git
   git push -u origin main
   ```

4. **Habilitar GitHub Pages**
   - En tu repositorio, ve a Settings → Pages
   - Source: Branch "main", carpeta "root"
   - Click Save
   - Tu sitio estará en: `https://usuario.github.io/Pagina-de-Sociologia`

**Ventajas:**

- Completamente gratis
- URL personalizable
- Dominio de GitHub gratis
- Fácil de mantener

---

### 🌐 **Opción 2: Netlify (GRATIS)**

#### Pasos:

1. Ve a [netlify.com](https://www.netlify.com)
2. Click "Sign up" (usa tu cuenta de GitHub)
3. Click "New site from Git"
4. Selecciona tu repositorio de GitHub
5. Build command: (dejar vacío - es sitio estático)
6. Publish directory: `/` (raíz del proyecto)
7. Click "Deploy"

**Tu sitio estará publicado automáticamente**

**Ventajas:**

- Despliegue automático con cada push a GitHub
- URL compartible
- SSL automático
- Dominio personalizado disponible

---

### ⚡ **Opción 3: Vercel (GRATIS)**

#### Pasos:

1. Ve a [vercel.com](https://vercel.com)
2. Click "Sign Up" (conecta con GitHub)
3. Importa tu repositorio
4. Vercel detectará automáticamente que es un sitio estático
5. Click "Deploy"

**Tu sitio estará publicado al instante**

---

### 📱 **Opción 4: Firebase Hosting**

#### Pasos:

1. Instala Firebase CLI: `npm install -g firebase-tools`
2. Inicia sesión: `firebase login`
3. Inicializa proyecto: `firebase init hosting`
4. Selecciona tu proyecto de Firebase
5. Public directory: `.` (actual)
6. Deploy: `firebase deploy`

---

### 🌍 **Opción 5: Servidor Web Personalizado**

Si tienes acceso a un servidor web (Apache, Nginx, etc.):

1. Sube los archivos via FTP o SSH
2. Asegúrate de que `index.html` sea accesible en la raíz
3. Visita tu dominio

---

## Consideraciones de Seguridad

✅ **Sitio estático**: Sin vulnerabilidades de backend  
✅ **HTTPS automático**: En GitHub Pages, Netlify, Vercel  
✅ **Privacidad**: No se recopilan datos personales  
✅ **Accesibilidad**: Compatible con lectores de pantalla

---

## Optimizaciones y Mejoras Futuras

### 📋 Posibles Mejoras:

- [ ] Agregar búsqueda en el sitio
- [ ] Implementar modo oscuro
- [ ] Agregar más evaluaciones interactivas
- [ ] Integrar videos educativos
- [ ] Crear glosario interactivo
- [ ] Agregar bibliografía completa
- [ ] Traducción a otros idiomas
- [ ] Compatibilidad con lector de pantalla mejorada
- [ ] Sistema de puntuación por quizzes
- [ ] Exportar contenido a PDF

---

## Métricas y Rendimiento

### Lighthouse Scores (Objetivo):

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimizaciones Implementadas:

- Carga CSS inline (no externo)
- Minificación de JavaScript
- Imágenes optimizadas (emojis)
- Lazy loading en elementos observables
- Compresión de assets

---

## Soporte y Contacto

**Equipo de Desarrollo:**

- Estudiantes de Ingeniería en Sistemas
- Asignatura: Introducción a la Sociología
- Año Académico: 2024

**Para reportar problemas:**

1. Abre un issue en GitHub
2. Describe el problema
3. Incluye capturas de pantalla si es posible

---

## Licencia

Este proyecto es de uso educativo.  
Libre para usar, modificar y distribuir con fines académicos.

---

## Créditos

**Contenido:**

- Basado en conceptos de Sociología de autores clásicos
- Información compilada de múltiples fuentes académicas

**Tecnología:**

- HTML5, CSS3, Vanilla JavaScript
- Sin frameworks externos (diseño minimalista)
- Responsivo con CSS Grid y Flexbox

---

## Comandos Útiles

### Ver el sitio localmente:

```bash
python -m http.server 8000
```

### Hacer push a GitHub:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

### Abrir en navegador:

```bash
# En macOS
open index.html

# En Linux
xdg-open index.html

# En Windows
start index.html
```

---

## Preguntas Frecuentes

### ¿Necesito pagar para desplegar?

No. GitHub Pages, Netlify y Vercel son completamente gratis para sitios estáticos.

### ¿Qué navegadores son soportados?

Navegadores modernos (últimas 2 versiones):

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari en iOS 14+
- Chrome en Android

### ¿Puedo agregar mi propio dominio?

Sí. Todas las plataformas permiten conectar dominios personalizados.

### ¿Se puede monetizar?

Para uso educativo, es gratuito. Para usos comerciales, consulta las licencias.

---

**Última actualización:** Septiembre de 2024  
**Versión:** 1.0.0

¡Gracias por usar este recurso educativo! 📚

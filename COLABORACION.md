# 👥 Guía de Colaboración del Equipo

## Para el Equipo de Desarrollo

Bienvenidos al proyecto de **Introducción a la Sociología**. Esta guía te ayudará a colaborar eficientemente en el proyecto.

---

## 📋 Estructura del Equipo

```
Equipo de Desarrollo
├── Integrante 1: Kevin Orlando Moran
├── Integrante 2: Kevin Mauricio Rios Guevara
├── Integrante 3: Manuel Alberto Medina Fajardo
└── Integrante 4: Christopher Alejandro Urbina Calderon
```

---

## 🛠️ Configuración Inicial

### 1. Instalar Herramientas Necesarias

**Git:**

- Descarga desde [git-scm.com](https://git-scm.com)
- Instala con opciones por defecto

**Editor de Código (elige uno):**

- Visual Studio Code (recomendado): [code.visualstudio.com](https://code.visualstudio.com)
- Sublime Text: [sublimetext.com](https://www.sublimetext.com)
- Atom: [atom.io](https://atom.io)

### 2. Clonar el Repositorio

```bash
# Abre terminal/CMD y navega a donde quieras guardar el proyecto
cd ruta/donde/quieras/guardar

# Clona el repositorio
git clone https://github.com/usuario/Pagina-de-Sociologia.git

# Entra a la carpeta
cd Pagina-de-Sociologia

# Verifica el status
git status
```

### 3. Configurar Git Localmente

```bash
# Configura tu nombre
git config --global user.name "Tu Nombre"

# Configura tu email
git config --global user.email "tu.email@ejemplo.com"
```

---

## 🔄 Flujo de Trabajo

### Paso 1: Crear una Rama para tu Trabajo

```bash
# Actualiza la rama principal
git checkout main
git pull origin main

# Crea una rama para tu feature (usa nombres descriptivos)
git checkout -b integrante1/agregar-modulo-1
# o
git checkout -b integrante2/mejorar-css-responsive
```

### Paso 2: Hacer Cambios

Edita los archivos necesarios en tu editor. Ejemplos:

- Agregar contenido: modifica `modulo1.html`, `modulo2.html`, etc.
- Mejorar estilos: modifica `styles.css`
- Agregar interactividad: modifica `script.js`
- Actualizar documentación: modifica `README.md`

### Paso 3: Guardar tu Trabajo (Commit)

```bash
# Ver qué cambios hiciste
git status

# Agregar los cambios
git add .

# O agregar archivos específicos
git add archivo1.html archivo2.css

# Guardar los cambios (commit)
git commit -m "Descripción clara de qué cambió"
```

**Ejemplos de buenos mensajes de commit:**

```bash
git commit -m "Agregar contenido Módulo 1: Ciencia vs Sentido Común"
git commit -m "Mejorar responsividad en dispositivos móviles"
git commit -m "Corregir estilos de acordeones en Módulo 2"
git commit -m "Agregar quiz interactivo en Módulo 3"
```

### Paso 4: Subir tu Rama a GitHub

```bash
# Sube la rama a GitHub
git push origin integrante1/agregar-modulo-1

# O simplemente
git push
```

### Paso 5: Crear un Pull Request (PR)

1. Ve a [github.com](https://github.com) y abre tu repositorio
2. Verás un botón "Compare & pull request" - haz click
3. Escribe una descripción clara de los cambios
4. Click "Create pull request"
5. El equipo revisal el código
6. Si todo está bien, se hace merge a `main`

### Paso 6: Actualizar tu Rama Local

```bash
# Después de que se hace merge tu PR
git checkout main
git pull origin main

# Elimina la rama local si ya no la necesitas
git branch -d integrante1/agregar-modulo-1
```

---

## 📝 Convenciones de Código

### HTML

```html
<!-- Usar identación de 4 espacios -->
<!-- Etiquetas semánticas -->
<section class="module-content">
  <article class="content-section">
    <h2>Título</h2>
    <p>Contenido</p>
  </article>
</section>

<!-- Classes descriptivas (kebab-case) -->
<div class="module-card">
  <div class="quiz-question">
    <div class="accordion-item"></div>
  </div>
</div>
```

### CSS

```css
/* Usar variables CSS */
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
}

/* Comentarios claros */
/* ===========================
   SECCIÓN IMPORTANTE
   =========================== */

/* Selectores descriptivos */
.module-header {
}
.content-section {
}
.accordion-button {
}

/* Mobile-first approach */
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
```

### JavaScript

```javascript
// Usar nombres descriptivos
function toggleAccordion(element) {}
const menuToggle = document.getElementById("menuToggle");

// Comentarios para funciones complejas
// Toggle del menú responsivo
function toggleMenu() {}

// Usar const y let, no var
const variable = "valor";
let contador = 0;
```

---

## ✅ Checklist Antes de Push

Antes de hacer commit, verifica:

- [ ] El código está indentado correctamente
- [ ] No hay console.log() o comentarios de debug
- [ ] Las imágenes están optimizadas (usar emojis en lugar de archivos)
- [ ] El sitio funciona en navegadores modernos
- [ ] Probaste en móvil (DevTools F12 → Toggle device toolbar)
- [ ] El mensaje de commit es claro y descriptivo
- [ ] No agregaste archivos personales (`.env`, `credentials`, etc.)

---

## 🧪 Testing Local

### 1. Verificar en Navegador

```bash
# Abre terminal en la carpeta del proyecto
cd Pagina-de-Sociologia

# Inicia servidor local
python -m http.server 8000

# Abre http://localhost:8000 en el navegador
```

### 2. Probar Responsividad

En Chrome/Firefox:

1. Abre DevTools (F12)
2. Click en "Toggle device toolbar" (Ctrl+Shift+M)
3. Prueba en diferentes tamaños:
   - Móvil: 375px
   - Tablet: 768px
   - Desktop: 1200px+

### 3. Checklist de Testing

- [ ] Todos los enlaces funcionan
- [ ] El menú responsive funciona
- [ ] Los acordeones se abren/cierran
- [ ] La línea de tiempo es interactiva
- [ ] Los quizzes dan retroalimentación
- [ ] El contenido es legible en móvil
- [ ] No hay errores en console (F12 → Console)

---

## 🐛 Reportar Problemas

Si encuentras un bug:

1. **Describe el problema:** ¿Qué esperas que suceda?
2. **Describe lo actual:** ¿Qué sucede en realidad?
3. **Pasos para reproducir:** ¿Cómo lo causaste?
4. **Navegador y dispositivo:** Chrome en Windows, Safari en iPhone, etc.

**Ejemplo:**

```
Título: El menú responsivo no cierra en móvil

Descripción: Cuando hago click en un enlace del menú en dispositivo móvil,
el menú no se cierra automáticamente.

Pasos para reproducir:
1. Abre el sitio en móvil (375px)
2. Click en el botón hamburguesa
3. Click en un enlace
4. El menú permanece abierto

Navegador: Chrome en Android
```

---

## 📊 División de Tareas Sugerida

### Integrante 1: Contenido

- [ ] Revisar y optimizar contenido de todos los módulos
- [ ] Agregar más referencias y ejemplos
- [ ] Crear glossario de términos

### Integrante 2: Diseño UI/UX

- [ ] Mejorar estilos visuales
- [ ] Crear componentes reutilizables
- [ ] Asegurar consistencia de diseño
- [ ] Agregar animaciones smooth

### Integrante 3: Funcionalidad

- [ ] Mejorar interactividad
- [ ] Agregar más componentes interactivos
- [ ] Optimizar JavaScript
- [ ] Agregar validaciones

### Integrante 4: QA y Documentación

- [ ] Testing exhaustivo
- [ ] Mantener documentación actualizada
- [ ] Crear guías de uso
- [ ] Revisar PRs

---

## 🚀 Despliegue

### Desplegar a GitHub Pages

```bash
# Asegúrate de estar en main
git checkout main
git pull origin main

# Verifica que todo funciona localmente
# (Abre index.html en navegador)

# Si todo está bien, ya está desplegado automáticamente en GitHub Pages
# (Si configuraste la rama correcta en Settings → Pages)

# Para ver cambios en vivo (puede tardar 1-2 minutos)
# Visita: https://usuario.github.io/Pagina-de-Sociologia
```

### Desplegar a Netlify

```bash
# Instala Netlify CLI
npm install -g netlify-cli

# Inicia sesión
netlify login

# Deploy
netlify deploy --prod
```

### Desplegar a Vercel

```bash
# Instala Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

---

## 📞 Comunicación del Equipo

### Para cambios grandes:

1. Abre un Issue en GitHub describiendo la propuesta
2. El equipo discute y aprueba
3. Comienza el desarrollo en una rama

### Para cambios pequeños:

1. Crea la rama
2. Hace el cambio
3. Abre PR
4. El equipo revisa y aprueba

### Reuniones de sincronización:

- Revisar progreso
- Resolver conflictos
- Planificar siguientes pasos

---

## ❓ Preguntas Frecuentes del Equipo

**P: ¿Puedo trabajar en la rama `main` directamente?**  
R: No, mejor crear una rama. Así evitamos conflictos.

**P: ¿Qué pasa si hay un conflicto de merge?**  
R: Git lo señalará. Edita el archivo, elige qué mantener, y haz commit.

**P: ¿Cómo actualizo mi rama con los cambios del equipo?**  
R: `git pull origin main`

**P: ¿Cómo deshago un cambio?**  
R: `git checkout archivo.html` (si no hiciste commit)  
 O `git revert` (si ya hiciste commit)

**P: ¿Es necesario trabajar en ramas diferentes si somos 2 integrantes?**  
R: Sí, así no pisamos el trabajo del otro.

---

## 🎯 Objetivos del Proyecto

- ✅ Crear sitio educativo de Sociología
- ✅ Cumplir requisitos técnicos (HTML5, CSS, JS, Responsive)
- ✅ Agregar componentes interactivos
- ✅ Desplegar en línea
- ✅ Documentar adecuadamente
- ✅ Trabajar colaborativamente

---

## 📚 Recursos Útiles

- [Git Docs](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [W3Schools](https://www.w3schools.com)

---

**Última actualización:** Septiembre 2024  
**Versión:** 1.0.0

¡A colaborar con éxito! 🚀

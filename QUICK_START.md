# ⚡ Guía de Inicio Rápido

## 30 segundos para ver el sitio funcionando

### Opción 1: Abrir en el navegador (MÁS FÁCIL)

```bash
# 1. Navega a la carpeta del proyecto
cd "ruta/a/Pagina de Sociologia"

# 2. Haz doble clic en index.html
# ¡Listo! El sitio se abre en tu navegador
```

### Opción 2: Usar servidor local

```bash
# 1. Abre terminal/CMD en la carpeta del proyecto
cd "ruta/a/Pagina de Sociologia"

# 2. Inicia servidor (elige uno):

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# 3. Abre en navegador
http://localhost:8000
```

---

## 📁 Archivos Principales

```
✅ index.html          → Home/Inicio
✅ modulo1.html        → Ciencia y Ciencias Sociales
✅ modulo2.html        → Conceptualización de Sociología
✅ modulo3.html        → Desarrollo Histórico (+ línea de tiempo)
✅ modulo4.html        → Precursores (+ tarjetas desplegables)
✅ modulo5.html        → Corrientes Teóricas (+ comparativas)
✅ styles.css          → Estilos
✅ script.js           → Interactividad
```

---

## 🎯 Características Principales

| Característica          | Ubicación | Cómo Usar                        |
| ----------------------- | --------- | -------------------------------- |
| **Menú Navegación**     | Arriba    | Haz click en los enlaces         |
| **Línea de Tiempo**     | Módulo 3  | Haz click en los eventos         |
| **Tarjetas Pensadores** | Módulo 4  | Haz click para expandir          |
| **Comparativas**        | Módulo 5  | Mira las tablas                  |
| **Quiz**                | Todos     | Responde y haz click "Verificar" |

---

## 🚀 Despliegue en 5 Minutos

### GitHub Pages (Recomendado)

```bash
# 1. Crea repositorio en github.com
# Nombre: Pagina-de-Sociologia

# 2. Configura Git localmente
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# 3. Sube los archivos
git init
git add .
git commit -m "Proyecto de Sociología"
git branch -M main
git remote add origin https://github.com/usuario/Pagina-de-Sociologia.git
git push -u origin main

# 4. Habilita GitHub Pages
# Repositorio → Settings → Pages → Branch: main → Save

# 5. Tu sitio está en:
# https://usuario.github.io/Pagina-de-Sociologia
```

### Netlify (Más Fácil)

```bash
# 1. Ve a netlify.com
# 2. Click "New site from Git"
# 3. Conecta GitHub
# 4. Selecciona repositorio
# 5. Deploy

# ¡Listo! Netlify te da URL automática
```

### Vercel (Lo Más Rápido)

```bash
# 1. Ve a vercel.com
# 2. Click "Import Project"
# 3. Conecta GitHub
# 4. Select repository
# 5. Deploy

# ¡URL lista en segundos!
```

---

## 🔧 Editar Contenido

### Agregar texto a un módulo

```html
<!-- Abre modulo1.html -->
<!-- Encuentra la sección -->
<section class="module-content">
  <article class="content-section">
    <h2>Mi Nuevo Título</h2>
    <p>Mi nuevo contenido aquí</p>
  </article>
</section>
```

### Cambiar colores

```css
/* Abre styles.css */
:root {
  --primary-color: #2c3e50; /* Cambiar este color */
  --secondary-color: #3498db; /* Cambiar este color */
}
```

### Agregar interactividad

```javascript
// Abre script.js
// Modifica funciones existentes o agrega nuevas
function miNuevaFuncion() {
  console.log("Mi función");
}
```

---

## ✅ Checklist Antes de Entregar

- [ ] Todos los módulos funcionan
- [ ] Menú responsivo funciona en móvil
- [ ] Acordeones se abren y cierran
- [ ] Línea de tiempo es interactiva
- [ ] Quiz da retroalimentación
- [ ] No hay errores en console (F12)
- [ ] Se ve bien en móvil (F12 → Toggle Device)
- [ ] Sitio está desplegado en línea
- [ ] URL funciona en navegador

---

## 🧪 Probar en Móvil

```bash
# En Chrome/Firefox:
# 1. Abre el sitio
# 2. Presiona F12 (o Ctrl+Shift+I)
# 3. Presiona Ctrl+Shift+M
# 4. Prueba en diferentes tamaños
```

---

## ❌ Solución Rápida de Problemas

| Problema                | Solución                                             |
| ----------------------- | ---------------------------------------------------- |
| "Archivo no encontrado" | Asegúrate de que los .html están en la misma carpeta |
| Estilos no cargan       | Revisa que styles.css esté en la misma carpeta       |
| JavaScript no funciona  | Abre console (F12) y busca errores                   |
| Menú no responde        | Recarga página (Ctrl+R o Cmd+R)                      |
| Acordeones no abren     | Comprueba que script.js esté cargado                 |

---

## 📱 URLs Útiles

- **Documentación completa:** Ver `README.md`
- **Guía de colaboración:** Ver `COLABORACION.md`
- **Resumen del proyecto:** Ver `RESUMEN_EJECUTIVO.md`
- **Foro de GitHub:** github.com/usuario/Pagina-de-Sociologia/issues

---

## 🎓 Estructura Rápida

```
🏠 Inicio
 ├─ 📖 Módulo 1: Ciencia
 ├─ 🎓 Módulo 2: Conceptualización
 ├─ ⏳ Módulo 3: Historia (con línea de tiempo)
 ├─ 👨‍🎓 Módulo 4: Precursores (con tarjetas)
 └─ 🎯 Módulo 5: Corrientes (con comparativas)
```

---

## 💡 Tips Rápidos

**Para trabajar en equipo:**

```bash
git checkout -b mi-rama
# ... hago cambios ...
git add .
git commit -m "Descripción"
git push origin mi-rama
# Luego abro Pull Request en GitHub
```

**Para ver cambios sin recargar:**

- Usa Live Server en VS Code
- O Ctrl+Shift+R para caché clear

**Para agregar emoji:**

- ✅ 📚 ⏳ 👨‍🎓 🎯 (Copia y pega)

---

## 📞 Ayuda

- **Error HTML:** Revisa etiquetas de cierre
- **Error CSS:** Revisa selectores y propiedades
- **Error JS:** Abre Console (F12) para ver detalles
- **No se ve bien:** Cambia tamaño ventana (F12)

---

## 🎉 ¡Listo!

Ya tienes todo para:
✅ Ver el sitio localmente  
✅ Editar contenido  
✅ Desplegar en línea  
✅ Trabajar en equipo  
✅ Entregar el proyecto

**¿Dudas?** Lee `README.md` para más detalles.

---

**Última actualización:** Septiembre 2024

# 📲 Mundial 2026 — Subir a Netlify e instalar como app

Esta carpeta (`App_Mundial_Netlify`) ya tiene **todo lo necesario** para publicar el dashboard en internet e instalarlo como app en tu teléfono. No necesitas instalar nada en tu compu.

## Contenido de la carpeta
- `index.html` — el dashboard (es el que se abre como página principal)
- `manifest.webmanifest` — hace que se pueda "instalar" como app
- `service-worker.js` — permite que funcione **sin internet** una vez abierto
- `icon-192.png`, `icon-512.png`, `icon-180.png` — el ícono de la app
- `netlify.toml` — configuración de Netlify

---

## Paso 1 · Publicarla en Netlify (lo más fácil: arrastrar y soltar)

1. Entra a **https://app.netlify.com/drop** (inicia sesión con tu cuenta de Netlify).
2. Desde el explorador de archivos, **arrastra la carpeta `App_Mundial_Netlify` completa** y suéltala en esa página.
3. Netlify la sube y en unos segundos te da una dirección, algo como `https://nombre-al-azar.netlify.app`.
4. (Opcional) En *Site settings → Change site name* puedes ponerle un nombre, por ejemplo `mundial-2026-francisco.netlify.app`.

¡Listo! Esa dirección ya es tu página pública.

---

## Paso 2 · Instalarla como app en el teléfono

**En Android (Chrome):**
1. Abre la dirección `.netlify.app` en Chrome.
2. Toca el menú **⋮** (arriba a la derecha) → **"Agregar a la pantalla principal"** / *"Instalar app"*.
3. Confirma. Aparecerá el ícono del balón en tu pantalla como cualquier app.

**En iPhone (Safari):**
1. Abre la dirección en **Safari** (no Chrome).
2. Toca el botón **Compartir** (el cuadrito con la flecha hacia arriba).
3. Elige **"Agregar a inicio"** → *Agregar*.
4. Aparecerá el ícono en tu pantalla de inicio.

Al abrirla desde el ícono se ve **a pantalla completa**, sin barra del navegador, como una app de verdad. Y como guarda los datos, abre aunque andes sin señal.

---

## Cuando quieras actualizar los resultados en la web

El dashboard de tu computadora se actualiza solo varias veces al día. Para que la versión **en internet** muestre lo más nuevo:

1. Vuelve a generar el dashboard local (la tarea programada ya lo hace sola).
2. Copia el archivo `Dashboard_Mundial_2026.html` actualizado dentro de esta carpeta y renómbralo a `index.html` (reemplazando el anterior).
3. Vuelve a arrastrar la carpeta a **https://app.netlify.com/drop** (o a tu sitio en *Deploys → Drag and drop*).

> 💡 Si quieres, puedo automatizar este paso para que la versión web también se actualice sola. Solo dímelo.

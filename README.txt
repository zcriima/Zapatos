CATOLOGO PROFESIONAL DE ZAPATOS

ARCHIVOS INCLUIDOS
- index.html
- script.js
- /images/
- README.txt

CAMBIOS SOLICITADOS YA INCLUIDOS
- Se ve bien en celular y en computadora
- En la parte superior dice: Catologo
- Solo maneja zapatos
- Tiene categorías: Mujer, Hombre y Niños
- Tiene filtro por categorías
- Tiene diseño más profesional para vender
- Botón flotante de WhatsApp
- Todo viene dentro de este ZIP

ANTES DE SUBIRLO
1. Abre el archivo script.js
2. Cambia esta línea por tu número de WhatsApp:

const whatsappNumber = "593999999999";

Debe ir sin signos y con código de país.
Ejemplo Ecuador:
5939XXXXXXXX

PARA CAMBIAR TUS PRODUCTOS
En script.js verás una lista así:

{
  id: 1,
  name: "Zapato Casual Mujer",
  category: "Mujer",
  price: "$40",
  image: "images/mujer1.jpg",
  badge: "Nuevo"
}

Puedes cambiar:
- name
- category
- price
- image
- badge

CATEGORÍAS PERMITIDAS
- Mujer
- Hombre
- Niños

FOTOS
Pon tus fotos dentro de la carpeta /images

Ejemplos:
images/mujer1.jpg
images/mujer2.jpg
images/hombre1.jpg
images/hombre2.jpg
images/nino1.jpg
images/nino2.jpg
images/portada-1.jpg
images/portada-2.jpg

IMPORTANTE
- Usa nombres iguales a los del código o cambia el nombre en script.js
- Idealmente usa fotos verticales o similares entre sí
- Formato recomendado: JPG o WEBP
- Peso recomendado: menos de 300 KB por imagen

CÓMO SUBIRLO
Puedes subir esta carpeta a:
- Vercel
- Netlify
- cualquier hosting estático

Si lo subes a Vercel:
1. Descomprime el ZIP
2. Sube la carpeta como proyecto
3. Publica

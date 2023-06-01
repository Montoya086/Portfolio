# Mi portafolio de desarrollador

## ¿Qué es?
Este portafolio está realizado con el fin de poder poner en practica mis conocimientos sobre tecnologías web.
Podrás ver este portafolio [aquí](https://proyecto3-web-seven.vercel.app) 

## Tecnologías utilizadas
### Para la realización de este portafolio, se utilizaron las siguientes tecnologías para front-end:
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" width="30px"> [React](https://es.react.dev)
- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png" width="30px"> [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- <img src="https://cdn.freebiesupply.com/logos/thumbs/2x/sass-1-logo.png" width="30px"> [Sass](https://sass-lang.com)
- <img src="https://media.graphassets.com/VKHHNvEETYqZRkqgjybc"> [Next.js](https://nextjs.org)
- <img src="https://images.ctfassets.net/c63hsprlvlya/7otp3Ofpdr8sCedYnSewGn/da3393cae2fdc7f3cedca1f0c1b46fc1/logo-vercel-svgrepo-com.svg" width="30px"> [Vercel](https://vercel.com)

## Estructura
En este repositorio podrá encontrar los siguientes directorios:<br>
|--Public<br>
|--src <br>
&nbsp;&nbsp;&nbsp;|--config<br>
&nbsp;&nbsp;&nbsp;|--images<br>
&nbsp;&nbsp;&nbsp;|--pages<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--samples<br>

- En el directorio Public, podrá encontrar parte de la metadata de la página, así como iconos y logos.
- En src podrá encontrar todos los elementos del proyecto.
  - En la carpeta config podrá encontrar la configuración de la API utilizada para la recolección de datos de [Supabase](https://supabase.com) utilizando las variables de entorno.
  - En la carpeta images podrá encontrar los logos e imagenes utilizadas dentro del proyecto
  - En la carpeta pages podrá encontrar los componentes que representan las ventanas navegables
    - En la carpeta samples podrá encontrar los componentes utilizados en las ventanas

## ¿Cómo puedo usar la aplicación?
Para poder utilizar la aplicación es necesario clonar el repositorio y en la carpeta raiz ejecutar
```bash
npm i
```
para instalar las dependencias. Luego podrás ejecutar
```bash
npm run dev
```
para iniciar un servidor local, o
```bash
npm run build
```
para generar una carpeta para producción.
Tambien puedes acceder a la aplicación haciendo click [aquí](https://proyecto3-web-seven.vercel.app)

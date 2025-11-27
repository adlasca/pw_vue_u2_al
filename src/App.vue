<template>
  <div id="app">
    <ContadorView/>
  </div>
</template>

<script>
import ContadorView from '../src/views/ContadorView.vue';
export default {
  name: 'App',
  components: {
    ContadorView
  }

};
</script>

<style>

</style>


<!-- 
node_modules: carpeta de dependencias
public: carpeta que no requiere autenticacion 
src: carpeta de codigo fuente
assets: imagenes, fuentes, etc
components: componentes de Vue.js
views: vistas o paginas de la aplicacion. Se crea manualmente
router: configuracion de rutas
store: configuracion de Vuex
App.vue: componente raiz de la aplicacion
main.js: archivo de configuración, entrada de la aplicacion

Componentes: bloques reutilizables de codigo que encapsulan logica, estructura y estilo.
Vistas: componentes que representan paginas completas en la aplicacion.
Rutas: definicion de las diferentes rutas de la aplicacion y los componentes asociados a cada una.
Cabecera (Header): barra superior de la aplicacion que generalmente contiene el logo, el menu de navegacion y otras opciones.
Barra lateral (Sidebar): menu lateral que permite la navegacion entre diferentes secciones de la aplicacion.
Contenido principal (Main Content): area donde se muestra el contenido principal de la aplicacion.
Pie de pagina (Footer): area inferior de la aplicacion que generalmente contiene informacion de contacto, enlaces legales y otros detalles.

Todo componente se aloja a una pagina o vista.

package-log.json: administra las dependencias y scripts del proyecto
babel.config.js: configuracion de Babel para transpilar el codigo moderno a una version compatible con navegadores antiguos
vue.config.js: configuracion personalizada para proyectos Vue CLI
.gitignore: especifica los archivos y carpetas que Git debe ignorar
README.md: archivo de documentacion del proyecto
package.json: administra las dependencias y scripts del proyecto de forma resumida
vue.config.js: configuracion personalizada para proyectos Vue CLI, como la configuracion del servidor de desarrollo, alias de rutas y otras opciones avanzadas.

Propiedad Reactiva: capacidad de Vue.js para detectar cambios en los datos y actualizar automaticamente la interfaz de usuario en consecuencia.
Options API: forma tradicional de definir componentes en Vue.js utilizando opciones como data, methods, computed, etc.
-->
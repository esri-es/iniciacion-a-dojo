# Declarar un módulo

En un fichero aparte (por ejemplo: my-module.js) definimos un módulo que
devuelve un objeto con 3 funciones (html, get y move):

```javascript
define([
  'dojo/dom',
  'dojo/fx'
  ],function(dom,fx){
    return {
      html: function(id, value){
        dom.byId(id).innerHTML = value;
      },
      get: function(id){
        return dom.byId(id).innerHTML;
      },
      move: function(id, top, left){
        fx.slideTo({
          node: id,
          top: top,
          left: left
        }).play();
      }
    };
  });
```
Para poder usar este módulo introducimos una entrada en dojoConfig.packages
que defina:

* **name**: cómo llamaremos al módulo en el _require_
* **location**: la ruta relativa (respecto a baseUrl) donde se encuentra
nuestro código.
* **main**: el nombre del fichero sin el _.js_

```javascript
var dojoConfig = {
  async: true,
  baseUrl: 'http://localhost:9090',
  packages:[{
      name: 'myModule', location: 'declarar-un-modulo/js/', main: 'my-module'
  }]
};
```

Y posteriormente ya podemos cargar y utilizar el módulo:

```javascript
require([
  'dojo/dom',
  'myModule',
  'dojo/domReady!'
],function(dom,$){
  // Cargamos el contenido el elemento con ID = content
  $.html("content","Raúl");

  // Recuperamos el valor
  console.log("Get=", $.get("content"));

  // Aplicamos una animación sobre el elemento
  $.move("content", 100, 200);
});
```

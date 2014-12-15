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

**Inicializar _dojoConfig_**:

Vamos a configurar el proyecto para que todos los módulos que empiecen
por "_myApp/.._" los busque dentro de la carpeta "_js/.._" en nuestra estructura de directorios.

Para ello hemos guardado el fichero anterior en _js/myModule.js_ y hemos
inicializado _dojoConfig_ de la siguiente manera:

```javascript
  var dojoConfig = (function(){
    var base = location.href.split("/");
    base.pop();
    base = base.join("/");
    return {
      async: true,
      isDebug: true,
      packages:[{
         name: 'myApp', location: base + '/js'
     }]
    };
  })();
```

Hecho esto, ya podemos cargar y utilizar el módulo:

```javascript
require([
  'dojo/dom',
  'myApp/myModule',
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

Aquí podéis ver [el código en funcionamiento](http://esri-es.github.io/iniciacion-a-dojo/tutoriales/declarar-un-modulo/index.html).

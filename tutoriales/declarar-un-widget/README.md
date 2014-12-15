# Declarar un widget

Lo primero y más importante para poder desarrollar
tus propios widget es entender es el ciclo de vida que tienen.

Los widgets se declaran usando el módulo _dijit/_WidgetBase_
y ejecutará los siguientes métodos en el orden indicado:

1. constructor

2. postcript<br>

    2.1. postMixInProperties<br>

    2.2. buildRendering

    2.3. [**postCreate()**](http://dojotoolkit.org/documentation/tutorials/1.10/understanding_widgetbase/#postCreate): es
    _el método más importante_ a tener en cuenta
    y se ejecuta después de que todas las propiedades hayan sido ejecutadas
    pero antes de que el fragmento sea añadido al código.

3. [**startup()**](http://dojotoolkit.org/documentation/tutorials/1.10/understanding_widgetbase/#startup):
      este método se introduce para gestionar el widget después de haber sido
      añadido al DOM. Si el widget se instancia a través de código habrá que llamar
      a este método manualmente.

## Ejemplo: Declaración de un widget
Por ejemplo el siguiente Widget consiste en un botón-contador. Cada vez que se
haga clic en el botón se incrementará en uno el valor del contador.

La funcion _constructor(opt)_ del widget espera recibir como parámetro un objeto con
dos valores:
* **id**: con el identificador del elemento del DOM donde se va a renderizar
* **init**: con el valor al que se debe inicializar el contador (por defecto: 0)

```javascript
define([
  "dojo/_base/declare",
  "dojo/dom-construct",
  "dijit/_WidgetBase"
  ],function(declare, domConstruct, _WidgetBase){

    return declare([_WidgetBase], {

      constructor: function(opt){
          this._i = opt.init || 0;

          if(!opt.id){
            console.error("Debes especificar un id del elemento");
            return -1;
          }
          this._id = opt.id;
      },

      buildRendering: function(){
        // create the DOM for this widget
        this.domNode = domConstruct.create("button", {innerHTML: this._i});
        domConstruct.place(this.domNode, this._id);
      },

      postCreate: function(){
        // every time the user clicks the button, increment the counter
        this.connect(this.domNode, "onclick", "increment");
      },

      increment: function(){
        this.domNode.innerHTML = ++this._i;
      }

    });
});
```

Como podemos además se definen 3 métodos más:
* **buildRendering**: genera y añade el elemento al DOM.
* **postCreate**: vincula la función _increment()_ al evento clic del elemento del DOM
* **increment**: aumenta el valor del contador

** ¿Y cómo utilizamos el widget recién creado? **

Esta véz lo vamos a hacer de manera ligeramente diferente a como lo hicimos en
el tutorial Declarar un Módulo.

Esta vez vamos a configurar el proyecto para que todos los módulos que empiecen
por _myApp/.._ los busque en nuestra estructura de directorios.

Para ello hemos guardado el fichero anterior en js/MyWidget.js y hemos
establecido dojoConfig de la siguiente manera:

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

Como vemos lo que hacemos es ejercutar una función anónima que recupera la
URL donde se está ejecutando el fichero _index.html_ que incluye el widge
t y hemos establecido un paquete con nombre _myApp_ que tiene como ruta la
misma que el fichero _index.html_ + _/js_

Así podremos usar nuestro widget de la siguiente manera:

```javascript
require([
  "myApp/MyWidget",
  "dojo/domReady!"
  ],function(MyWidget){

    myWidget = new MyWidget({
      id: "container",
      init: 3
    });
  }
);
```

Aquí puedes ver [el ejemplo en funcionamiento](http://esri-es.github.io/iniciacion-a-dojo/tutoriales/declarar-un-widget/index.html).

# Lecturas recomendadas:
asdasd

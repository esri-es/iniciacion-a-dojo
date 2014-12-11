
## Migrando a Dojo
Esta es una tabla que incluye una comparativa de código entre Javascript, jQuery
y Dojo a la hora de realizar algunas de las operaciones más frecuentes.

JavaScript | jQuery | Dojo
--- | --- | ---
```onload = function() {...}```|```$(document).ready(function(){...})```|```require(["dojo/domReady!"],function(){})```
```document.getElementById("id")```|```$("#id")```|```dom.byId("id")```
```document.getElementsByClassName("clase")``` | ```$(".clase")```|```query(".clase")```
```document.getElementById(id).style.opacity = 0.5```| ```$("#foo").css("opacity", 0.5)``` | ```domStyle.set(dom.byId("foo"), "opacity", 0.5)```
```document.getElementById("text").onclick = function(){...}```|```$(""#text").click(function(){})```| ```on(dom.byId("id"), "click", function(e){...})```


## <a name="migrando"></a>Módulos frecuentes en Dojo
Aquí describimos algunos de los módulos que usaremos frecuentemente en Dojo ([todos aquí](http://dojotoolkit.org/reference-guide/1.10/dojo/index.html#id21)):

Funcionalidad|Método(s) | Paquete/módulo
--- | --- | ---
Esperar al DOM | _Es un plugin [AMD](http://en.wikipedia.org/wiki/Asynchronous_module_definition)_ | [dojo/domReady!](http://dojotoolkit.org/reference-guide/1.10/dojo/domReady.html#dojo-domready)
Manipular el DOM|byId, isDescendant, setSelectable | [dojo/dom](http://dojotoolkit.org/reference-guide/1.10/dojo/dom.html#dojo-dom)
Acceder a nodos por clase|Ninguno |[dojo/query](http://dojotoolkit.org/reference-guide/1.10/dojo/query.html#dojo-query)
Cambiar estilos | set, get, getComputedStyle| [dojo/dom-style](http://dojotoolkit.org/reference-guide/1.10/dojo/dom-style.html#dojo-dom-style)
Gestionar eventos*|emit, pausable,once|[dojo/on](http://dojotoolkit.org/reference-guide/1.10/dojo/on.html#dojo-on)

La convención de nombres indica que la variable donde se instancie el módulo
se llame igual que el módulo utilizando notación CamelCase, por ejemplo: ```dom-style```
se cargaría en una variable llamada ```domStyle```.

## Cosas que deberías saber
Algunas curiosidades que te puede ser útiles:
- Todos los objetos devueltos por ```query``` tienen el método ```on``` para gestionar eventos.

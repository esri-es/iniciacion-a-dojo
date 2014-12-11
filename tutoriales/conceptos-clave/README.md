# Hola Geo Developer!
Este es un _Hola mundo_ en Dojo:
```html
<html>
<head>
  <script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.3/dojo/dojo.js"
          data-dojo-config="async: true"
  ></script>

  <script>
    require([
      "dojo/dom",
      "dojo/domReady!"
    ],function(dom){
      var el = dom.byId("contenedor");
      el.innerHTML = "Hola Geo Developer!"
    });
  </script>
</head>
<body>
  <div id="contenedor"></div>
</body>
</html>
```
Básicamente lo único que hace es:
1. Cargar la librería de manera asíncrona
2. Solicitar las dependecias ```dom``` y ```domReady```
3. Cuando todo está cargado recupera el elemento del div e instancia el texto.

**Nota:** te habrás dado cuenta que ```domReady!``` acaba con una exclamación, esto indica que ```domReady!``` es un plugin, por el contrario ```dom``` es un módulo.

## ¿Qué es RequireJS y por qué la carga asíncrona?


### Formas de cargar asíncronamente Dojo
La primera es la que acabamos de ver, tan sólo añadiendo el atributo data-dojo-config a la etiqueta ```<script>```.

```javascript
<script src="//ajax.googleapis.com/ajax/libs/dojo/1.10.3/dojo/dojo.js"
        data-dojo-config="async: true"
></script>
```

La segunda opción es esta:
```javascript
<script>
var dojoConfig = {
     async: true;
}
</script>
<script src=“//ajax.googleapis.com/ajax/libs/dojo/1.10.3/dojo/dojo.js”></script>
```

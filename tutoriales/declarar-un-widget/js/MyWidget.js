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

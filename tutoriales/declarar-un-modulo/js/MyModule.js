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

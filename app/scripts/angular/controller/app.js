define([
  'app'
], function( app ) {
  'use strict';

  app.controller('AppController', [
    '$scope',
    function( $scope ) {
      $scope.version = 'alpha2';
      var rotate = function(rect, canvas){
        rect.animate('angle', '+=90', {
          onChange: canvas.renderAll.bind(canvas)
        });
      }
      var canvas = new fabric.StaticCanvas('eoteCanvas');
      var rect = new fabric.Rect({
        top: 100,
        left: 200,
        width: 60,
        height: 60,
        fill: 'blue'
      });
      canvas.add(rect);
      rotate(rect, canvas);
    }
  ]);
});
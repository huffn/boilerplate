'use strict';
 /**
 * app
 * @author Dennis Sänger, 2013
 */
define([
    'jquery',
    'fabricjs',
    'angularjs',
    'angular/extensions'
], function( $, fabric, angularjs ) {

    var app = angularjs.module('app', [
      'ngResource', 'ngRoute'
    ]);
    return app;

});
'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('NumberConverterApp', [
  'App.controllers',
  'App.services',
  'App.factories',
  'App.directives',
  'ui.router',
]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home/");
  $stateProvider
    .state('home', {
      url: "/home/",
      templateUrl: "partials/home.html",
      controller: "homeController"
    })
    .state('result', {
      url: "/result/",
      templateUrl: "partials/result.html",
      controller: "resultController"
    });
    
});

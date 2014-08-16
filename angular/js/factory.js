'user strict';

/* Factories */

angular.module('App.factories', []).

factory('appFactory', function($http) {

  var factoryAPI = {};

    factoryAPI.serv = function (url) {
        var host = "http://localhost:8080/";
        //var host = "http://192.168.2.2:8080/";
        var fullUrl = host+url+"/?callback=JSON_CALLBACK";
        console.log(fullUrl);
        return $http.jsonp(fullUrl);
       // return host;
    };

    factoryAPI.convertNumber = function (number) {
        var url = "numberConverter/num/"+number;
        return this.serv(url);
    };


  return factoryAPI;
});
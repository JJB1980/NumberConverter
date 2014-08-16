'use strict';

/* Services */

angular.module('App.services', []).

service('API', function () {

  this.storeResult = function (num,result) {
    this.num = num;
    this.result = result;
  };
  
  this.fetchResults = function () {
    return { num: this.num, result: this.result };
  }
  
  this.isInt = function (n) {
    n = parseInt(n);
    return (Math.ceil(parseFloat(n)) === n);
  };
  
  this.validateNumber = function (num) {
    if (num == "" || num == undefined || !this.isInt(num.replace(",",""))){
      return false;
    }
    if (num.indexOf(",") < 0 && num.toString().length > 3) {
      return false;
    }
    if (num.indexOf(",") >= 0) {
      var arr = num.split(",");
      if (arr[0] == "" || !parseInt(arr[0])) {
        return false;
      }
      for (var i = 1; i < arr.length; i++) {
        if (arr[i].toString().length < 3 || arr[i].toString().length > 3) {
          return false;
        }
      }
    }
    return true;
  };
  
  return this;
});
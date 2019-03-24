    'use strict';

/*var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    
    var experience=new Date().getFullYear()-2015; 
    
});
*/
var App = angular.module('App', []);
App.controller('Ctrl', function ($scope){
    $scope.experience=new Date().getFullYear()-2015; 
    $scope.firstName = 'John';
    $scope.lastName = 'Smith';
});